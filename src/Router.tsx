import { Route, Routes } from "react-router-dom";
import { Linktree } from "./pages/Linktree";
import { SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Article } from "./pages/Article";
import { Login } from "./pages/Session/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" index element={<Linktree />} />

      <Route path="/sign-in/*" element={<Login />} />

      <Route
        path="/sign-up/*"
        element={<SignUp routing="path" path="/sign-up" />}
      />

      <Route
        path="/article"
        element={
          <>
            <SignedIn>
              <Article />
            </SignedIn>

            <SignedOut>
              <Login />
            </SignedOut>
          </>
        }
      />
    </Routes>
  );
}
