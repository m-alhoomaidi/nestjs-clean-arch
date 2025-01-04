export const appConfig = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
  nodeEnv: process.env.NODE_ENV || 'development',
  api: {
    prefix: '/api',
    version: '1.0',
    swagger: {
      path: 'docs',
      title: 'Clean Architecture API',
      description: 'API documentation for Clean Architecture implementation',
      version: '1.0',
    },
  },
  getServerUrl(): string {
    return `http://${this.host}:${this.port}`;
  },
};
