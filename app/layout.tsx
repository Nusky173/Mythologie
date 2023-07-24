import Link from 'next/link';
import SideBar from '../component/sidebar/sidebar';
import './globals.css'
import styles from './layout.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 



{
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
            <Link className={styles.navBar} href={"/mythology"}>
                <button className={styles.visitButton}> Parcourir </button>
            </Link>
          </header>
          <main className={styles.main}>
            {/* <aside className={styles.sidebar}>
              <SideBar />
            </aside> */}
            <section className={styles.content}>
              {children}
            </section>
          </main>
        </div>
      </body>
    </html>
  )
}
