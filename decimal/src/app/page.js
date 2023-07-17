import Image from 'next/image'
import styles from './page.module.scss'
import Double from './components/Double'
import { projects } from './data'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>HarvOps</h1>
      <h2>With a passion for design
      and a keen eye for detail, we take every project as an opportunity to showcase our expertise and elevate your
      brand to new heights.</h2>
      <div className={styles.gallery}>
        <Double projects={[projects[0], projects[1]]} />
        <Double projects={[projects[2], projects[3]]} reversed={true} />
        <Double projects={[projects[4], projects[5]]} reversed={true} />
        <Double projects={[projects[6], projects[7]]} />
      </div>
    </main>
  )
}
