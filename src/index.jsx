import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import GameBoardPage from "./pages/game-board.page";
import GameMenuPage from "./pages/game-menu.page";
import RegisterPage from "./pages/register.page";
import StoreProvider from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Tip: Provides the store staate which includes the data accessible within child components */}
    <StoreProvider>
      {/* Tip: It provides specific hooks and data globally accesible within child components */}
      <BrowserRouter>
        {/* Tip: The Routes must be a parent of any set of routes */}
        <Routes>
          {/* Tip: The route helps us to create a page */}
          <Route index={true} element={<RegisterPage />} />
          <Route path="game">
            {/* We can access the page under "/game/menu" */}
            <Route path="menu" element={<GameMenuPage />} />
            <Route path="board" element={<GameBoardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>
);
