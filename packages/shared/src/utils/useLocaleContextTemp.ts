import React from "react";

// Temporal: crear un contexto global que pueda ser importado
const GlobalLangContext = React.createContext<any>(null);

export function useLocaleContext() {
  const context = React.useContext(GlobalLangContext);
  return context;
}

export const setGlobalLangContext = (newContext: React.Context<any>) => {
  // Esta función será llamada desde _app.tsx para setear el contexto
};

export default GlobalLangContext;