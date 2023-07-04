import { createContext, ReactNode, useCallback, useState } from "react";
import { Article, CreateArticle } from "../model/Article";
import { api } from "../api/axios";
import { AxiosResponse } from "axios";

interface ArticleContextType {
  articles: Article[];
  listArticles: () => Promise<AxiosResponse<Article[]>>;
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  createArticle: (data: CreateArticle) => Promise<AxiosResponse<Article[]>>;
  deleteArticle: (data: Article) => Promise<AxiosResponse<Article[]>>;
  updateArticle: (data: Article) => Promise<AxiosResponse<Article[]>>;
  listArticlesById: () => Promise<AxiosResponse<Article[]>>;
}

interface ArticleContextProviderProps {
  children: ReactNode;
}

export const ArticleContext = createContext<ArticleContextType>(
  {} as ArticleContextType
);

export function ArticleContextProvider({
  children,
}: ArticleContextProviderProps) {
  const [articles, setArticles] = useState<Article[]>([]);

  const listArticles = useCallback(async () => {
    return await api.get("/article");
  }, []);

  const createArticle = useCallback(async (data: CreateArticle) => {
    return await api.post("/article", data);
  }, []);

  const deleteArticle = useCallback(async (data: Article) => {
    return await api.delete("/article/articleId", data);
  }, []);

  const updateArticle = useCallback(async (data: Article) => {
    return await api.patch("/article/:articleId", data);
  }, []);

  const listArticlesById = useCallback(async () => {
    return await api.get("/article/:articleId");
  }, []);

  return (
    <ArticleContext.Provider
      value={{
        articles,
        listArticles,
        setArticles,
        createArticle,
        deleteArticle,
        updateArticle,
        listArticlesById,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
}
