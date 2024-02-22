import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#0a192f", // Dark navy background
    800: "#112240", // Slightly lighter navy variant
    700: "#233554", // Additional navy variant for hover states etc.
  },
  accent: {
    500: "#64ffda", // Bright teal for accents and call to actions
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
