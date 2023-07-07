import { UserButton, useSession } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

export const HeaderLinktree = () => {
  const { isSignedIn } = useSession();

  return (
    <header id="cabecalho" className="cabecalho_bg">
      <div className="img_wrapper">
        {isSignedIn && (
          <div className="button">
            <UserButton />
          </div>
        )}
        {/* {!isSignedIn && (
          <button className="logIn_button" onClick={() => window.open("/")}>
            LogIn{" "}
          </button>
        )}*/}
        {isSignedIn && (
          <NavLink className="logIn_button" to="/">
            Início
          </NavLink>
        )}
        <img id="logo" src="images/Logo_Grupo_InMediam_fundo_alpha.png" />
      </div>
    </header>
  );
};
