import { createContext, ReactNode, useCallback, useState } from "react";
import { Article } from "../model/Article";
import { api, apiPrivate } from "../api/axios";
import { AxiosResponse } from "axios";
import { useApiPrivate } from "../hooks/useApiPrivate";

interface ArticleContextType {
  articles: Article[];
  listArticles: () => Promise<AxiosResponse<Article[]>>;
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  createArticle: (data: Article) => Promise<AxiosResponse<Article>>;
  deleteArticle: (id: string) => Promise<AxiosResponse<Article[]>>;
  updateArticle: (id: string, data: Article) => Promise<AxiosResponse>;
  listArticlesById: (id: string) => Promise<AxiosResponse<Article>>;
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

  const apiPrivate = useApiPrivate();

  const listArticles = useCallback(async () => {
    return await api.get("/article");
  }, []);

  const createArticle = useCallback(async (data: Article) => {
    return await apiPrivate.post("/article", data);
  }, []);

  const deleteArticle = useCallback(async (id: string) => {
    return await apiPrivate.delete(`/article/${id}`);
  }, []);

  const updateArticle = useCallback(async (id: string, data: Article) => {
    return await apiPrivate.patch(`/article/${id}`, data);
  }, []);

  const listArticlesById = useCallback(async (id: string) => {
    return await apiPrivate.get(`/article/${id}`);
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
