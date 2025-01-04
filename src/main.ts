import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import {
  swaggerConfig,
  swaggerOptions,
} from './infrastructure/config/swagger.config';
import { appConfig } from './infrastructure/config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // API prefix
  app.setGlobalPrefix(appConfig.api.prefix);

  // Swagger documentation
  const document = SwaggerModule.createDocument(
    app,
    swaggerConfig,
    swaggerOptions,
  );
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'API Documentation',
  });

  await app.listen(appConfig.port);

  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(
    `Swagger documentation is available at: ${await app.getUrl()}/docs`,
  );
}
bootstrap();
