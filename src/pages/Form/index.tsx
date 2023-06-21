import { UserButton, useSession } from "@clerk/clerk-react";
import "./style.css";

export const Form = () => {
  const { session } = useSession();

  const firstName = [session?.publicUserData.firstName];
  const lastName = [session?.publicUserData.lastName];

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

      <form method="POST" id="form_container">
        <h3 className="inserir">Inserir artigo</h3>
        <div>
          <label>Título</label>
          <div>
            <input
              type="text"
              className="título"
              placeholder="Inserir Título"
              required
            ></input>
          </div>
        </div>
        <div>
          <label>Url</label>
          <div>
            <input
              type="url"
              id="url"
              placeholder="Inserir url"
              required
            ></input>
          </div>
        </div>
        <div>
          <button className="form_button" type="submit">
            Enviar
          </button>
        </div>
        <footer />
        <div className="footer_green"></div>
        <div className="footer_blue"></div>
      </form>
    </div>
  );
};
