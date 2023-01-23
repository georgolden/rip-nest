import { createPrismaService } from '../prisma/prisma.service.js';
import { createArticleService } from './article.service.js';
import { createArticleController } from './article.controller.js';

export const createArticleModule = () => {
  const prisma = createPrismaService();
  const articleService = createArticleService({ prisma });
  const articleRoutes = createArticleController(articleService);

  return {
    services: [prisma, articleService],
    routes: [articleRoutes],
  };
};
