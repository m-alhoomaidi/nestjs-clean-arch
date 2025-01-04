import { DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { appConfig } from './app.config';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Clean Architecture API')
  .setDescription('API documentation for Clean Architecture implementation')
  .setVersion('1.0')
  .addBearerAuth()
  .addServer(appConfig.getServerUrl(), `${appConfig.nodeEnv} environment`)
  .build();

export const swaggerOptions: SwaggerDocumentOptions = {
  deepScanRoutes: true,
};
