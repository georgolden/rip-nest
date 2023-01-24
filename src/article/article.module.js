import { initPrismaService } from '../prisma/prisma.service.js';
import { initArticleService, metadata } from './article.service.js';
import { initArticleController } from './article.controller.js';

export const initArticleModule = () => {
  const prisma = initPrismaService();
  const articleService = initArticleService({ prisma });
  const articleRoutes = initArticleController(articleService);

  return {
    services: [prisma, articleService],
    routes: [articleRoutes],
  };
};

export const articleModule = {
  services: [
    {
      token: metadata.token,
      dependencies: metadata.dependencies,
      constructor: initArticleService,
    },
    {
      token: 'prisma',
      dependencies: null,
      constructor: initPrismaService,
    },
  ],
  providers: [
    {
      service: 'artice',
      constructor: initArticleController,
    },
  ],
};
