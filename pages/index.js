import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Auditeste - Rafael dos Santos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Olá, Rafael!" />
        <p className="description">
          Pronto pra mais um dia de trabalho?
        </p>
      </main>

      <Footer />
    </div>
  )
}
