import { SectionBG } from "../../components/SectionBG";
import { SocialMidiaCard } from "../../components/SocialMidiaCard";
import { HeaderLinktree } from "../../components/HeaderLinktree";
import "./style.css";

export const Linktree = () => {
  return (
    <>
      <div id="container">
        <HeaderLinktree />

        <SocialMidiaCard />
        <SectionBG />

        <div className="footer_linktree">
          <div className="footer-green"></div>
          <div className="footer-blue">
            <label id="texto">
              Todos os direitos reservado Grupo InMediam &copy; 2022-2023
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
