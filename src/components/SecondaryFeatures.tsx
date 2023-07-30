import { SVGProps, useId } from "react";
import { Container } from "./Container";

const features = [
  {
    name: "Busca & Avaliação",
    description:
      "Buscamos as intervenções com maior impacto social e estudamos a relevância desse problema no Brasil. Após isso, avaliamos instituições que trabalham com essas soluções.",
    icon: FluentTargetArrow20Regular,
  },
  {
    name: "Recomendação",
    description:
      "Após a avaliação do Impacto, Transparência e Gestão da organização, recomendamos em nossas plataformas e espalhamos as boas-novas por aí.",
    icon: ClarityTalkBubblesLine,
  },
  {
    name: "Recomendação",
    description:
      "Você doa, escolhendo a instituição da sua preferência, ou permite à doebem enviar para onde acredita que terá mais impacto.",
    icon: PhGift,
  },
  {
    name: "Transformação",
    description:
      "A sua doação vai para o seu destino e começa a transformar significativamente a vida dos que mais precisam.",
    icon: LucidePartyPopper,
  },
];

function FluentTargetArrow20Regular(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.962 5.309a.5.5 0 0 1-.108.545l-2 2A.5.5 0 0 1 15.5 8h-2.793l-1.353 1.353a1.5 1.5 0 1 1-.707-.707L12 7.293V4.5a.5.5 0 0 1 .146-.354l2-2A.5.5 0 0 1 15 2.5V5h2.5a.5.5 0 0 1 .462.309ZM16.293 6H14.5a.5.5 0 0 1-.5-.5V3.707l-1 1V7h2.293l1-1Zm1.314 1.515C17.862 8.297 18 9.133 18 10a8 8 0 1 1-5.515-7.606l-.808.808a7 7 0 1 0 5.121 5.122l.809-.809ZM14.9 9A5 5 0 1 1 11 5.1v1.026A4 4 0 1 0 13.874 9H14.9Z"
      ></path>
    </svg>
  );
}

export function ClarityTalkBubblesLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill="currentColor"
        d="M23 26a1 1 0 0 1-1 1H8c-.22 0-.43.2-.61.33L4 30V14a1 1 0 0 1 1-1h3.86v-2H5a3 3 0 0 0-3 3v18a1 1 0 0 0 .56.89a1 1 0 0 0 1-.1L8.71 29h13.44A2.77 2.77 0 0 0 25 26.13V25h-2Z"
        className="clr-i-outline clr-i-outline-path-1"
      ></path>
      <path
        fill="currentColor"
        d="M31 4H14a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h13.55l4.78 3.71a1 1 0 0 0 1 .11a1 1 0 0 0 .57-.9V7A3 3 0 0 0 31 4Zm1 18.94l-3.5-2.73a1 1 0 0 0-.61-.21H14a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h17a1.1 1.1 0 0 1 1 1.06Z"
        className="clr-i-outline clr-i-outline-path-2"
      ></path>
      <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
  );
}

function PhGift(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M216 72h-35.08c.39-.33.79-.65 1.17-1A29.53 29.53 0 0 0 192 49.57A32.62 32.62 0 0 0 158.44 16A29.53 29.53 0 0 0 137 25.91a54.94 54.94 0 0 0-9 14.48a54.94 54.94 0 0 0-9-14.48A29.53 29.53 0 0 0 97.56 16A32.62 32.62 0 0 0 64 49.57A29.53 29.53 0 0 0 73.91 71c.38.33.78.65 1.17 1H40a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-64a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16Zm-67-35.49a13.69 13.69 0 0 1 10-4.5h.49A16.62 16.62 0 0 1 176 49.08a13.69 13.69 0 0 1-4.5 10c-9.49 8.4-25.24 11.36-35 12.4c1.2-10.59 4.5-25.98 12.5-34.97Zm-64.09.36A16.63 16.63 0 0 1 96.59 32h.49a13.69 13.69 0 0 1 10 4.5c8.39 9.48 11.35 25.2 12.39 34.92c-9.72-1-25.44-4-34.92-12.39a13.69 13.69 0 0 1-4.5-10a16.6 16.6 0 0 1 4.82-12.16ZM40 88h80v32H40Zm16 48h64v64H56Zm144 64h-64v-64h64Zm16-80h-80V88h80v32Z"
      ></path>
    </svg>
  );
}

function LucidePartyPopper(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M5.8 11.3L2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10m8 3l-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17M11 2l.33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"></path>
        <path d="M11 13c1.93 1.93 2.83 4.17 2 5c-.83.83-3.07-.07-5-2c-1.93-1.93-2.83-4.17-2-5c.83-.83 3.07.07 5 2Z"></path>
      </g>
    </svg>
  );
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32 bg-gray-900"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-zinc-300">
            O que fazemos?
          </h2>
          <p className="mt-2 text-lg text-zinc-400">
            Entenda mais sobre a nossa proposta. Vamos começar com o pé direito
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-4"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="h-8 w-8 text-white" />
              <h3 className="mt-6 font-semibold text-zinc-300">
                {feature.name}
              </h3>
              <p className="mt-2 text-zinc-400">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
