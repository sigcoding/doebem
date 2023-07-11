import { Header } from "../../components/Header.tsx";
import { Footer } from "../../components/Footer.tsx";
import { Container } from "../../components/Container.tsx";
import { AnalysisProcess, Criteria } from "../../components/metodologia";

export default function Pesquisa() {
  return (
    <>
      <Header />
      <main className="mb-10">
        <Container>
          <h1 className="text-4xl font-medium tracking-tight text-gray-900">Metodologia</h1>
          <p className="text-gray-600 text-lg mt-6">
            A DoeBem acredita que é possível alocar recursos de forma eficiente para promover o maior impacto possível. <br /> <br />

            Com base nesta crença e em critérios específicos, avaliamos os projetos e organizações que promovem mudanças de forma eficiente. <br /> <br />

            Confira abaixo!
          </p>
          <Criteria />
          <AnalysisProcess />
        </Container>
      </main>
      <Footer />
    </>
  );
}
