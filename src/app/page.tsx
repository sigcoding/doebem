import Head from "next/head";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SecondaryFeatures } from "./components/SecondaryFeatures";
import { CallToAction } from "./components/CallToAction";
import { OurPhilosophy } from "./components/OurPhilosophy";
import { LastArticles } from "./components/LastArticles";
import { SayingAboutUs } from "./components/SayingAboutUs";
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
        <SecondaryFeatures />
        <CallToAction />
        <OurPhilosophy />
        <LastArticles />
        <SayingAboutUs />
      </main>
      <Footer />
    </>
  );
}
