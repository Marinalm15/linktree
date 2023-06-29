import { links } from "../../helpers/Links";

export const SectionBG = () => {
  return (
    <div className="section_BG">
      <div className="section_container">
        <div className="section_article_wrapper">
          {links.map((links) => {
            return (
              <a key={links.id} href={links.url}>
                <div className="links_content">
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
