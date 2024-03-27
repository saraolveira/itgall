import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import ScrollToAnchor from "./components/ScrollToAnchor.jsx"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <ScrollToAnchor />
        </BrowserRouter>
    </React.StrictMode>
)
