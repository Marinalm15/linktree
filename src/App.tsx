import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router.tsx";
import { ClerkProvider, UserButton } from "@clerk/clerk-react";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export function App() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <BrowserRouter>
        <Router />;
      </BrowserRouter>
    </ClerkProvider>
  );
}
