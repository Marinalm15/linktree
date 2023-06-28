import { UserButton, useSession } from "@clerk/clerk-react";
import { SectionBG } from "../../components/SectionBG";
import { SocialMidiaCard } from "../../components/SocialMidiaCard";
import { HeaderLinktree } from "../../components/HeaderLinktree";
import "./style.css";

export const Linktree = () => {
  const { isSignedIn } = useSession();

  return (
    <>
      <div id="container">
        {isSignedIn && (
          <div className="button">
            <UserButton />
          </div>
        )}

        <HeaderLinktree />
        <SocialMidiaCard />
        <SectionBG />

        <div className="footer-green"></div>
        <div className="footer-blue">
          <label id="texto">
            Todos os direitos reservado Grupo InMediam.2022-2023
          </label>
        </div>
      </div>
    </>
  );
};
