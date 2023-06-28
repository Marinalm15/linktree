import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Form } from "../Form";
import "./style.css";

export const Article = () => {
  return (
    <div>
      <Header />
      <div>
        <Form />
      </div>
      <Footer />
    </div>
  );
};
