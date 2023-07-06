import { useEffect } from "react";
import { useArticle } from "../../hooks/useArticle";
import useNotiflix from "../../hooks/useNotiflix";
import { Notify } from "notiflix";

export const SectionBG = () => {
  const { listArticles, articles, setArticles } = useArticle();
  const { notify } = useNotiflix();

  useEffect(() => {
    let ignore = false;
    setArticles([]);

    listArticles()
      .then((response) => {
        if (!ignore) {
          setArticles(response.data);
        }
      })
      .catch((error) => {
        return Notify.failure(error.response.error, notify);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="section_BG">
      <div className="section_container">
        <div className="section_article_wrapper">
          {articles.length !== 0 &&
            articles.map((article) => {
              return (
                <a key={article._id} href={article.url}>
                  <div className="links_content">
                    {article.imagePath && (
                      <img
                        className="img_link"
                        src={`http://localhost:3001/uploads/${article.imagePath}`}
                      />
                    )}
                    <p className="section_container_text">{article.name}</p>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};
