import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./style.css";
import ArticleTable from "../../components/ArticleTable";

export const Articles = () => {
  return (
    <div className="container_article_page">
      <Header />
      <div>
        <ArticleTable />
      </div>
      <Footer />
    </div>
  );
};
