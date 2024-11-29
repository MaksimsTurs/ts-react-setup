import "@/scss/root.scss"

import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes } from "react-router-dom"

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>{/* Your Routes here */}</Routes>
  </BrowserRouter>
)