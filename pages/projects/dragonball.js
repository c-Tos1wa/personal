import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function Dragonball(){
  return (
    <Layout>
      <Head>
        <title>CRUD Dragonball</title>
      </Head>
      <h2>Crud - Dragonball</h2>
      <p>Projeto usando ReactJs consumindo uma Api criada em Node.js,
        em que é possível criar, deletar, editar e mostrar os itens.
      </p>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </Layout>
  )
}