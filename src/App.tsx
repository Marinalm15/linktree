import "./style.css";
import "./helpers/SocialMidia.ts";
import { Header } from "./components/Header/index.tsx";
import { SocialMidiaCard } from "./components/SocialMidiaCard/index.tsx";
import { SectionBG } from "./components/SectionBG/index.tsx";
import { Footer } from "./components/Footer/index.tsx";

export function App() {
  return (
    <div id="container">
      <Header />
      <SocialMidiaCard />
      <SectionBG />
      <Footer />
    </div>
  );
}
