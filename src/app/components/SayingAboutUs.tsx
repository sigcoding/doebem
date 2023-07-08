import Link from "next/link";
import { Container } from "./Container";
import Image from "next/image";

interface IItem {
  title: string;
  thumb: string;
  url: string;
}

const items: IItem[] = [
  {
    title: "projeto draft",
    url: "https://www.projetodraft.com/a-doebem-quer-conectar-gente-disposta-a-ajudar-com-organizacoes-sociais-confiaveis/",
    thumb: "https://doebem.org.br/wp-content/uploads/2021/11/projetodraft.png",
  },
  {
    title: "the awesome foundation",
    url: "https://www.awesomefoundation.org/pt/projects/75390-doebem",
    thumb:
      "https://doebem.org.br/wp-content/uploads/2021/11/awesomefoundation.png",
  },
  {
    title: "nossa cusa",
    url: "http://nossacausa.com/doebem-uma-nova-experiencia-de-doacao/",
    thumb: "https://doebem.org.br/wp-content/uploads/2021/02/nossacausa.png",
  },
  {
    title: "razões para acreditar",
    url: "https://razoesparaacreditar.com/ongs-doacao/",
    thumb:
      "https://doebem.org.br/wp-content/uploads/2021/02/razoesparaacreditar.png",
  },
  {
    title: "sem censura",
    url: "https://www.youtube.com/watch?v=cbHXbvCF1FY&ab_channel=doebemAltru%C3%ADsmoEficaz",
    thumb: "https://doebem.org.br/wp-content/uploads/2021/02/semcensura.jpg",
  },
  {
    title: "ecbr",
    url: "https://www.ecommercebrasil.com.br/noticias/plataforma-doebem-quer-promover-nova-experiencia-de-doacao/",
    thumb: "https://doebem.org.br/wp-content/uploads/2021/02/ecbr-1.jpg",
  },
];

export function SayingAboutUs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            O que estão falando sobre nós
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {items.map((item, index) => (
            <li key={index} className="col-span-1 flex flex-col text-center">
              <a href={item.url} className="flex flex-col h-full">
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex-shrink-0 py-10">
                    <Image
                      className="mx-auto h-32 w-32 rounded-sm aspect-square"
                      src={item.thumb}
                      alt={item.title}
                      height={300}
                      width={300}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex-shrink-0">
                      <h3 className="text-lg font-bold text-gray-900 uppercase">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
