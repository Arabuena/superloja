import Head from 'next/head';
import Link from "next/link";

function Home() {
  return (
    <>
      <Head>
        <title>Minha Página</title>
      </Head>
      <div>
        <h1>Home</h1>
        <Link href="/sobre">Acessar a página sobre</Link>
      </div>
    </>
  )
}

export default Home;
