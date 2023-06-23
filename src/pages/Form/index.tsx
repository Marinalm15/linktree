import { UserButton, useSession } from "@clerk/clerk-react";
import "./style.css";
import { useState } from "react";

export const Form = () => {
  const { session } = useSession();

  const firstName = [session?.publicUserData.firstName];
  const lastName = [session?.publicUserData.lastName];

  const [titulo, setTitulo] = useState<String>("");
  const [url, setUrl] = useState<String>("");

  function novoArtigo(e: any) {
    e.preventeDefault();
    console.log(titulo);
  }

  return (
    <div className="fundo_total">
      <div className="header_blue">
        <div className="header_blue_wrapper">
          <div>
            <img
              className="logo_icon"
              src="images/Logo_Grupo_InMediam_fundo_alpha.png"
            />
          </div>

          <div className="wrapper_userButton">
            <UserButton />
            <p className="user_name">
              {firstName} {lastName}
            </p>
          </div>
        </div>
      </div>

      <div className="header_green"></div>

      <form onSubmit={novoArtigo} method="POST" id="form_container">
        <h3 className="inserir">Inserir artigo</h3>
        <div>
          <label>Título</label>
          <div>
            <input
              className="placeholder"
              type="text"
              id="titulo"
              name="titulo"
              placeholder="Inserir Título"
              required
              onChange={(e) => setTitulo(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <label>Url</label>
          <div>
            <input
              className="placeholder"
              type="url"
              id="url"
              name="url"
              placeholder="Inserir url"
              onChange={(e) => setUrl(e.target.value)}
              required
            ></input>
          </div>
        </div>
        <div>
          <button
            className="form_button"
            id="submit"
            type="submit"
            name="enviar"
          >
            Enviar
          </button>
        </div>
      </form>
      <footer>
        <div className="footer_green"></div>
        <div className="footer_blue"></div>
      </footer>
    </div>
  );
};
