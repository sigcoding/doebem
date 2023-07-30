import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Hero } from "@components/Hero";
import { SecondaryFeatures } from "@components/SecondaryFeatures";
import { CallToAction } from "@components/CallToAction";
import { OurPhilosophy } from "@components/OurPhilosophy";
import { LastArticles } from "@components/LastArticles";
import { SayingAboutUs } from "@components/SayingAboutUs";
import { Footer } from "@components/Footer";

export default function Index() {
  const { t } = useTranslation('common')
  return (
    <>
      <Hero
        title={t('hero.title')}
        description={t('hero.description')}
        btnLabel={t('hero.button')}
      />
      <SecondaryFeatures />
      <CallToAction />
      <OurPhilosophy />
      <LastArticles />
      <SayingAboutUs />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], null, ['en', 'pt'])),
      // Will be passed to the page component as props
    },
  }
}
