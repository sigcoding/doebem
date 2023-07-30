import { CircleBackground } from "./CircleBackground";
import { Container } from "./Container";

export function CallToAction() {
  return (
    <section
      id="philantropy"
      className="relative overflow-hidden w-screen bg-gray-900 py-20 sm:py-28"
    >
      <div className="mb-4 pb-[1.6rem]">
        <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
          <CircleBackground color="#fff" className="animate-spin" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-md sm:text-center">
            <h2 className="mt-10 text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Filantropia transparente
            </h2>
            <p className="mt-4 text-lg text-gray-300 font-bold">
              Compartilhar é se importar.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              Temos orgulho de compartilhar com você nossos processos, números e
              aprendizados ao longo do caminho.
            </p>
            <h1 className="lg:text-6xl mt-4 text-4xl font-extrabold text-gray-300 border-b-4 lg:w-auto w-56 border-woovi-500">
              R$ 255.640,20
            </h1>
            <p className="mt-4 text-lg text-gray-300">Doados até agora</p>
          </div>
        </Container>
      </div>
    </section>
  );
}
