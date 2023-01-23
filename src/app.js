import fastify from 'fastify';
import { initArticleModule } from './article/article.module.js';

const server = fastify({ logger: true });
const serverConfig = { host: 'localhost', port: 9010 };

const { routes } = initArticleModule();

for (const route of routes.flat()) server.route(route);
await server.listen(serverConfig);
