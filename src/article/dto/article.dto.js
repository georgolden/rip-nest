export const articleDto = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    blog: {
      type: ['string', 'null'],
    },
    author: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    abstract: {
      type: 'string',
    },
    keywords: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    content: {
      type: ['number', 'string', 'boolean', 'object', 'array', 'null'],
    },
  },
};

export const createArticleDto = {
  required: ['author', 'title', 'abstract', 'keywords', 'content'],
  ...articleDto,
};

/**
 * @typedef {object} CreateArticleDto
 * @property {string} author
 * @property {string} title
 * @property {string} abstract
 * @property {string} keywords
 * @property {object} content
 *
 * @typedef {object} ArticleDto
 * @property {?string} id
 * @property {?string} blog
 * @property {string} author
 * @property {string} title
 * @property {string} abstract
 * @property {string} keywords
 * @property {object} content
 */
