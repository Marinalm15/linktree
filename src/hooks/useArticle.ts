import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";

export const useArticle = () => useContext(ArticleContext);
