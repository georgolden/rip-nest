import fastify from 'fastify';
import { createArticleModule } from './article/article.module.js';

const server = fastify({ logger: true });
const serverConfig = { host: 'localhost', port: 9010 };

const { routes } = createArticleModule();

for (const route of routes.flat()) server.route(route);
await server.listen(serverConfig);
