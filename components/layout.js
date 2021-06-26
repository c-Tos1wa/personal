import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'

const name = 'Cristina Iwassaki'
const siteTitle = 'Cristina Iwassaki - Estudante Desenvolvedora Front-End'

export function Layout ({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Página pessoal de Cristina" />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <img 
              src="/images/cris.jpg"
              className={`${styles.headerHomeImage} ${styles.borderCircle}`}
              alt={name}
            />
            <h1 className={styles.heading2XL}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img 
                  src="/images/cris.jpg"
                  className={`${styles.headerImage} ${styles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={styles.headingLg}>
              <Link href="/">
                <a className={styles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Voltar para o início</a>
          </Link>
        </div>
      )}
    </div>
  )
}

