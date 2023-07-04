export interface Article {
  _id: string;
  name: string;
  url: string;
  createdAt: Date;
}

export interface CreateArticle {
  name: string;
  url: string;
}
