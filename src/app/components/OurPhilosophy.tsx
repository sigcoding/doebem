"use client";

import { Container } from "./Container";
import YouTubePlayer, { YouTubeProps } from "react-youtube";

const opts: YouTubeProps["opts"] = {
  height: "320",
  width: "440",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

const optsResp: YouTubeProps["opts"] = {
  height: "250",
  width: "325",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

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
          <div className="mt-16 max-w-xl hidden gap-x-4 lg:flex justify-center">
            <YouTubePlayer
              videoId="zfbPDmQPRmU"
              opts={opts}
              className="lg:h-[5rem]"
            />

            <div className="mt-8 lg:mt-0">
              <YouTubePlayer videoId="Diuv3XZQXyc" opts={opts} />
            </div>
          </div>

          <div className="mt-16 max-w-6xl flex-col lg:hidden justify-center">
            <YouTubePlayer videoId="zfbPDmQPRmU" opts={optsResp} />

            <div className="mt-8 lg:mt-0">
              <YouTubePlayer videoId="Diuv3XZQXyc" opts={optsResp} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
