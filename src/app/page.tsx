import Head from "next/head";
import Image from "next/image";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PrimaryFeatures } from "./components/PrimaryFeatures";
import { SecondaryFeatures } from "./components/SecondaryFeatures";
import { CallToAction } from "./components/CallToAction";
import { Reviews } from "./components/Reviews";
import { Pricing } from "./components/Pricing";
import { Faqs } from "./components/Faqs";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - DoeBem</title>
        <meta
          name="description"
          content="Nós fazemos a ponte entre doadores e
          organizações eficazes que promovem
          impacto social embasado em estudos
          e evidência. Junte-se a nós!"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Reviews />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
