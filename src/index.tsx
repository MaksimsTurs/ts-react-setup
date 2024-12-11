import "@/scss/root.scss"

import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes } from "react-router-dom"

import ErrorBoundary from "./component/Error-Boundary/ErrorBoundary.component"

createRoot(document.getElementById("root") as HTMLElement).render(
  <ErrorBoundary fallbackComponent={'...'}>
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>{'...'}</Routes>
    </BrowserRouter>
  </ErrorBoundary>
)