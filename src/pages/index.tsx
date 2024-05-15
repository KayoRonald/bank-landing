import Head from 'next/head'
import NavHero from '@/layout/header'
import HeroSection from '@/layout/hero'
import { SplitWithImage } from '@/components/split-with-image'
import { AppStores } from '@/components/app-store'
import Accordion from '@/components/accordion'

export default function Home() {
  return (
    <>
      <Head>
        <title>Banco Digitus</title>
      </Head>
      <NavHero />
      <HeroSection/>
      <SplitWithImage/>
      <AppStores/>
      <Accordion/>
    </>
  )
}
