import { UserButton, useSession } from "@clerk/clerk-react";
import "./style.css";
import { NavLink, useLocation } from "react-router-dom";

export const Header = () => {
  const { session } = useSession();

  const firstName = [session?.publicUserData.firstName];
  const lastName = [session?.publicUserData.lastName];

  const location = useLocation();

  const isArticlePage = location.pathname === "/artigo";

  const isHomePage = location.pathname === "/";

  return (
    <header>
      <div className="header_blue">
        <div className="header_blue_wrapper">
          <div>
            <NavLink to="/">
              <img
                className="logo_icon"
                src="../images/Logo_Grupo_InMediam_fundo_alpha.png"
              />
            </NavLink>
          </div>
          <div className="nav_right_container">
            <div className="nav_links_container">
              {!isHomePage && (
                <div className="nav_link_wrapper">
                  <NavLink className="nav_link" to="/">
                    Início
                  </NavLink>
                </div>
              )}

              {!isArticlePage && (
                <div className="nav_link_wrapper">
                  <NavLink className="nav_link" to="/artigo">
                    Criar Artigo
                  </NavLink>
                </div>
              )}

              <div className="nav_link_wrapper">
                <NavLink className="nav_link" to="/linktree">
                  LinkTree
                </NavLink>
              </div>
            </div>

            <div className="wrapper_user_button">
              <UserButton />
              <p className="user_name">
                {firstName} {lastName}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="header_green"></div>
    </header>
  );
};
