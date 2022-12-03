import Link from 'next/link';
import './globals.css'
import styles from './layout.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body id="root">
        <div className={styles.app}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <Link href={"/"}> 
                <button className={styles.logobutton}></button>
              </Link>
            </div>
            <h1 className={styles.title}> Mythologie </h1>
          </header>
          <main className={styles.main}>        <aside className={styles.sidebar}>
            </aside>
            <section className={styles.content}>
              {children}
            </section>
          </main>
        </div>
      </body>
    </html>
  )
}
