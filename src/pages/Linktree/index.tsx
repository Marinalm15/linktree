import { UserButton, useSession } from "@clerk/clerk-react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SectionBG } from "../../components/SectionBG";
import { SocialMidiaCard } from "../../components/SocialMidiaCard";
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
        <Header />
        <SocialMidiaCard />
        <SectionBG />
        <Footer />
      </div>
    </>
  );
};
