import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Auditeste - Rafael dos Santos</title>
        <link rel="icon" href="https://auditeste.com.br/wp-content/uploads/2022/09/favicon.png" />
      </Head>

      <main>
        <Header title="Olá, Rafael! Tudo bem?" />
        <p className="description">
          Pronto pra mais um dia de trabalho?
        </p>
      </main>

      <Footer />
    </div>
  )
}
