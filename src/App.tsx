import AvisoLegal from "./componentes/AvisoLegal.tsx";

const NOME_DO_PROJETO = "Explorador de Campeões";

function App() {
  return (
    <>
      <main>
        <h1>{NOME_DO_PROJETO}</h1>
        <p>Em construção.</p>
      </main>
      <footer>
        <AvisoLegal nomeDoProjeto={NOME_DO_PROJETO} />
      </footer>
    </>
  );
}

export default App;
