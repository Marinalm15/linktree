import { useSession } from "@clerk/clerk-react";

export const HeaderLinktree = () => {
  const { isSignedIn } = useSession();

  return (
    <header id="cabecalho" className="cabecalho_bg">
      <div className="img_wrapper">
        {!isSignedIn && (
          <button
            className="logIn_button"
            onClick={() => window.open("artigo")}
          >
            LogIn{" "}
          </button>
        )}
        {isSignedIn && (
          <button
            className="logIn_button"
            onClick={() => window.open("artigos")}
          >
            Artigos{" "}
          </button>
        )}
        <img id="logo" src="images/Logo_Grupo_InMediam_fundo_alpha.png" />
      </div>
    </header>
  );
};
