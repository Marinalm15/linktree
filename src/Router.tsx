import { Route, Routes } from "react-router-dom";
import { Linktree } from "./pages/Linktree";
import { SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Login } from "./pages/Session/Login";
import { Articles } from "./pages/Articles";
import { Article } from "./pages/Article";

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          <>
            <SignedIn>
              <Articles />
            </SignedIn>

            <SignedOut>
              <Login />
            </SignedOut>
          </>
        }
      />

      <Route
        path="/artigo"
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

      <Route
        path="/artigo/:id"
        element={
          <>
            <SignedIn>
              <Article />
            </SignedIn>
          </>
        }
      />

      <Route path="/linktree" element={<Linktree />} />

      <Route
        path="/sign-up/*"
        element={<SignUp routing="path" path="/sign-up" />}
      />
    </Routes>
  );
}
