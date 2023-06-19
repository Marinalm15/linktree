import { social_midias } from "../../helpers/SocialMidia";

export const SocialMidiaCard = () => {
  return (
    <div className="boxmodel">
      <div className="section_title">
        <p>Onde estamos!</p>
      </div>

      <div className="content_wrapp">
        {social_midias.map((social_midia) => {
          return (
            <a key={social_midia.id} href="#">
              <div className="social_midia_wrapper">
                <img className="icons_social_midia" src={social_midia.url} />
                <label className="name_social_midia">{social_midia.name}</label>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
