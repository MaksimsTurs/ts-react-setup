import "@/scss/root.scss"

import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/"/>
    </Routes>
  </BrowserRouter>
)