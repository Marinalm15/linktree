export interface Article {
  _id: string;
  name: string;
  url: string;
  imagePath?: string;
  createdAt: Date;
}

export interface CreateArticle {
  name: string;
  url: string;
  image?: File;
}

export interface UpdateArticle extends CreateArticle {}
