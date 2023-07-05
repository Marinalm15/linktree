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
          {articles &&
            articles.map((links) => {
              return (
                <a key={links._id} href={links.url}>
                  <div className="links_content">
                    <img
                      className="img_link"
                      width={20}
                      src="https://img.freepik.com/fotos-gratis/por-do-sol-da-misurina_181624-34793.jpg?w=1380&t=st=1688573760~exp=1688574360~hmac=a9f95a235d6fabcdff77e9c1f6694b09c63fb2b4671ed6906525d2d9c53ce269"
                    />
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
