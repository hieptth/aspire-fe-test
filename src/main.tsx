import { MainLayout } from "@layouts/index";
import "@shared/styles/global.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainLayout />
  </StrictMode>
);
