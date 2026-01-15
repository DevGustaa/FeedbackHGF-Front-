import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Components/Header.tsx";
import { Box } from "@mui/material";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Box
      sx={{
        backgroundColor: "#C9E0DC",
        boxSizing: "border-box",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100dvh",
        width: "100%",
        gap: "10px",
      }}
    >
      <Header />
      <BrowserRouter>
        <Box
          sx={{
            width: "100%",
            height: "90%",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            boxSizing: "border-box",
          }}
        >
          <App />
        </Box>
      </BrowserRouter>
    </Box>
  </StrictMode>
);
