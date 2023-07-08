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
      className="pb-16 pt-20 sm:pb-24 sm:pt-32 bg-gray-900 overflow-x-hidden"
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
              className="lg:h-96 lg:w-[36rem] lg:backdrop-blur-sm lg:flex lg:justify-center lg:items-center lg:hover:underline lg:text-white lg:transition-all lg:ease-linear lg:duration-100 lg:mt-0
              
              h-fit w-[36rem] flex justify-center items-center hover:underline text-white transition-all ease-linear duration-100 mt-6
              "
              href={
                "https://doebem.org.br/2022/12/matchfunding-do-dia-de-doar-vai-beneficiar-ongs-com-eficacia-comprovada/"
              }
            >
              <div
                className={`lg:absolute lg:bg-[url("https://doebem.org.br/wp-content/uploads/2022/12/people-hands-bringing-money-together-to-donate-to-charity.jpg")] lg:h-96 lg:w-[36rem] lg:opacity-40 lg:bg-cover lg:hover:opacity-20 absolute bg-[url("https://doebem.org.br/wp-content/uploads/2022/12/people-hands-bringing-money-together-to-donate-to-charity.jpg")] h-[12rem] w-[20rem] opacity-40 bg-cover bg-left-2 hover:opacity-20`}
              />

              <h1 className="lg:text-3xl lg:text-white lg:font-extrabold lg:relative lg:px-8 text-xl font-extrabold relative w-[15.2rem]">
                Matchfunding do Dia de Doar vai beneficiar ONGs com eficácia
                comprovada
              </h1>
            </a>

            <a
              className="lg:h-96 lg:w-[36rem] lg:backdrop-blur-sm lg:flex lg:justify-center lg:items-center lg:hover:underline lg:text-white lg:transition-all lg:ease-linear lg:duration-100 lg:mt-0
              
              h-fit w-[36rem] p-0 flex justify-center items-center hover:underline text-white transition-all ease-linear duration-100 mt-[7rem]
              "
              href={
                "https://doebem.org.br/2022/11/dia-de-doar-sua-chance-em-dobro-de-fazer-o-bem/"
              }
            >
              <div
                className={`lg:absolute lg:bg-[url("https://doebem.org.br/wp-content/uploads/2022/11/hscgb-donate-header.png")] lg:h-96 lg:w-[36rem] lg:opacity-40 lg:bg-cover lg:hover:opacity-20 absolute bg-[url("https://doebem.org.br/wp-content/uploads/2022/11/hscgb-donate-header.png")] h-[12rem] w-[20rem] opacity-40 bg-cover bg-left-2 hover:opacity-20 `}
              />

              <h1 className="lg:text-3xl lg:text-white lg:font-extrabold lg:relative lg:px-8 text-xl font-extrabold relative px-2 w-[15.2rem]">
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
