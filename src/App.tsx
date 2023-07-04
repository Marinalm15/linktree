import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { ptBR } from "@clerk/localizations";
import "./style.css";
import { ArticleContextProvider } from "./context/ArticleContext.tsx";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export function App() {
  return (
    <ClerkProvider
      publishableKey={publishableKey}
      localization={ptBR}
      appearance={{
        elements: {
          formButtonPrimary: "button_login",
          logoImage: "logo_img",
          logoBox: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100px",
          },
        },
        variables: {
          colorBackground: "#cbdf24",
        },
        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton",
        },
      }}
    >
      <ArticleContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ArticleContextProvider>
    </ClerkProvider>
  );
}
