"use client";

import { Container } from "./Container";
import YouTubePlayer from "react-youtube";

export function OurPhilosophy() {
  return (
    <section
      id="philosophy"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Conheça a nossa filosofia
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          A <b>doebem</b> e a <b>GiveWell</b> fazem parte de um movimento muito
          maior: o <b>Altruísmo Eficaz</b>.
        </p>

        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          O Altruísmo Eficaz propõe o uso das melhores evidências científicas
          para fazermos o maior bem possível.
        </p>

        <div className="lg:jusitfy-normal flex justify-center">
          <div className="mt-16 max-w-6xl hidden gap-x-4 lg:flex justify-center">
            <YouTubePlayer videoId="zfbPDmQPRmu" />

            <div className="mt-8 lg:mt-0">
              <YouTubePlayer videoId="Diuv3XZQXyc" />
            </div>
          </div>

          <div className="lg:jusitfy-normal flex justify-center">
            <YouTubePlayer videoId="zfbPDmQPRmU" />

            <div className="mt-8 lg:mt-0">
              <YouTubePlayer videoId="Diuv3XZQXyc" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
