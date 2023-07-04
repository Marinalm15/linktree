import { useEffect } from "react";
import { useArticle } from "../../hooks/useArticle";

export const SectionBG = () => {
  const { listArticles, articles, setArticles } = useArticle();

  useEffect(() => {
    let ignore = false;
    setArticles([]);

    listArticles()
      .then((response) => {
        if (!ignore) {
          setArticles(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="section_BG">
      <div className="section_container">
        <div className="section_article_wrapper">
          {articles &&
            articles.map((links) => {
              return (
                <a key={links._id} href={links.url}>
                  <div className="links_content">
                    {/* <img className="img_link" src={links.imagem} /> */}
                    <p className="section_container_text">{links.name}</p>
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};
