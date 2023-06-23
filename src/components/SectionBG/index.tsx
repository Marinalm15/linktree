import { links } from "../../helpers/Links";

export const SectionBG = () => {
  return (
    <div className="section_BG">
      <div className="section_container">
        {links.map((links) => {
          return (
            <div key={links.id} className="links_content">
              <a href={links.url}>
                <p className="section_container_text">{links.name}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
