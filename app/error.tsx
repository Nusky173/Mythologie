'use client'
import styles from "./error.module.css"
 
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  const router = useRouter();

  reset = () => {
    router.back();
  }

  const message = error.message

  return (
    <div className={styles.error_container}>
      <h2 className={styles.error_message}>{message}</h2>
      <Link href={"/"}>
          <button className={styles.error_button} onClick={() => {reset()}}>Retour</button>
      </Link>
    </div>
  )
}