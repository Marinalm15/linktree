import { UserButton, useSession } from "@clerk/clerk-react";
import "./style.css";

export const Header = () => {
  const { session } = useSession();

  const firstName = [session?.publicUserData.firstName];
  const lastName = [session?.publicUserData.lastName];
  return (
    <header>
      <div className="header_blue">
        <div className="header_blue_wrapper">
          <div>
            <img
              className="logo_icon"
              src="../images/Logo_Grupo_InMediam_fundo_alpha.png"
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
    </header>
  );
};
