export type CreateArticleDto = {
  title: string;
  body: string;
};

export type UpdateArticleDto = {
  title?: string;
  body?: string;
};
