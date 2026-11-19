import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

// Única origem externa permitida: o catálogo público da Riot (docs/DECISOES.md, decisão 11).
const ORIGEM_DOS_DADOS = "https://ddragon.leagueoflegends.com";

const POLITICA_DE_SEGURANCA = [
  "default-src 'self'",
  `img-src 'self' ${ORIGEM_DOS_DADOS}`,
  `connect-src 'self' ${ORIGEM_DOS_DADOS}`,
  "base-uri 'self'",
  "form-action 'none'",
].join("; ");

// A CSP entra só no build: em desenvolvimento, o Vite injeta scripts que ela bloquearia.
function cspNoBuild(): Plugin {
  return {
    name: "csp-no-build",
    apply: "build",
    transformIndexHtml: () => [
      {
        tag: "meta",
        attrs: {
          "http-equiv": "Content-Security-Policy",
          content: POLITICA_DE_SEGURANCA,
        },
        injectTo: "head-prepend",
      },
    ],
  };
}

// https://vite.dev/config/
export default defineConfig({
  // O GitHub Pages serve o site em /explorador-de-campeoes/, e não na raiz do domínio.
  base: "/explorador-de-campeoes/",
  plugins: [react(), cspNoBuild()],
});
