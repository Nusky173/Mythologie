import Link from 'next/link'
import styles from './page.module.css'
import Carroussel from '../component/carroussel/carroussel'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.carroussel}>
        <Carroussel></Carroussel>
      </div>
      <div className={styles.presentation}>
        <p className={styles.paragraph}>
          Bienvenue sur notre site d'information dédié aux mythologies du monde entier.
          Notre site vise à vous fournir des informations sur les mythes, 
          les légendes et les dieux de différentes civilisations, allant de la Grèce antique à l'Egypte ancienne 
          en passant par l'Amérique du Sud et l'Asie.
        </p>
        <p className={styles.paragraph}>
          Nous travaillons continuellement pour ajouter de nouvelles informations et améliorer celles qui sont déjà présente. 
          Il est possible que certaines informations soient encore incomplètes ou incorrectes. 
          Nous vous encourageons à nous faire part de vos commentaires et suggestions 
          pour que nous puissions améliorer notre site et vous fournir la meilleure expérience possible.
        </p>
        <div className={styles.navigate}>
          <div className={styles.arrowRight}></div>
          <Link href={"/mythology"}>
              <button className={styles.button}> Parcourir les mythologies</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
