"use client";

import { Container } from "./Container";

interface IArticle {
  title: string;
  url: string;
  thumb: string;
}

export function LastArticles() {
  return (
    <section
      id="articles"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32 bg-gray-900"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-zinc-300 sm:text-center"
        >
          Nossos últimos artigos
        </h2>
        <p className="mt-2 text-lg text-zinc-400 sm:text-center">
          Venha descobrir o nosso modo de pensar e de agir
        </p>

        <div className="flex justify-center lg:block lg:justify-normal">
          <div className="mt-16 flex flex-col gap-y-4 lg:grid lg:grid-cols-2 max-w-6xl gap-x-8">
            <a
              className="h-96 w-[36rem] backdrop-blur-sm flex justify-center items-center hover:underline text-white transition-all ease-linear duration-100"
              href={
                "https://doebem.org.br/2022/12/matchfunding-do-dia-de-doar-vai-beneficiar-ongs-com-eficacia-comprovada/"
              }
            >
              <div
                className={`absolute bg-[url("https://doebem.org.br/wp-content/uploads/2022/12/people-hands-bringing-money-together-to-donate-to-charity.jpg")] h-96 w-[36rem] opacity-40 bg-cover hover:opacity-20`}
              />

              <h1 className="text-3xl text-white font-extrabold relative px-8">
                Matchfunding do Dia de Doar vai beneficiar ONGs com eficácia
                comprovada
              </h1>
            </a>

            <a
              className="h-96 w-[36rem] backdrop-blur-sm flex justify-center items-center hover:underline text-white transition-all ease-linear duration-100"
              href={
                "https://doebem.org.br/2022/11/dia-de-doar-sua-chance-em-dobro-de-fazer-o-bem/"
              }
            >
              <div
                className={`absolute bg-[url("https://doebem.org.br/wp-content/uploads/2022/11/hscgb-donate-header.png")] h-96 w-[36rem] opacity-40 bg-cover hover:opacity-20`}
              />

              <h1 className="text-3xl text-white font-extrabold relative px-8">
                Matchfunding do Dia de Doar vai beneficiar ONGs com eficácia
                comprovada
              </h1>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
