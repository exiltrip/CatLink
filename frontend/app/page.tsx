import Image from 'next/image'
import styles from '@/styles/main.module.css'
import banner from '@/public/banner.svg'
export default function Home() {
  return (
    <main className={styles.container}>
        <Image src={banner} alt="" className={styles.banner}/>
    </main>
  )
}


