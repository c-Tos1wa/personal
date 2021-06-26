import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../components/layout.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.headingMd}>
        <p>Olá! Meu nome é Cristina</p>
        <p>Esse é o meu site pessoal.</p>
      </section>
    </Layout>
  )
}