import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import mine from '../public/imagenes/mine.jpg'
import js_html_css from '../public/imagenes/js_html_css_icons.png'
import react_redux from '../public/imagenes/react_icon3.png'
import node from '../public/imagenes/nodejs.png'
import postgres from '../public/imagenes/postgres.png'
import { useState } from 'react'
import I from "../public/imagenes/I.jpg"


export default function Home() {


  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(true)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Edgard 👨🏻‍💻</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image className={styles.img} src={I} alt='photo' />
        {
        modal === false ?
        <h1 className={styles.title} onClick={handleModal}>
          Hello I'm Edgard A. Pazos I. and Welcome to my portfolio in Next.js!
        </h1> : <div className={styles.contact} onClick={() => setModal(false)}>
          <p>Email me at allan.pazos@uabc.edu.mx, or call at this numbers 6865230943 or WhatsApp +52 6861705282</p>
        </div>
        }
        <div className={styles.cont2}>
          <div>
            <Link className={styles.link} href='/projects'>
              <button className={styles.button}>My Projects</button>
            </Link>
          </div>
          <div>
            <Link className={styles.link} href='/about'>
              <button className={styles.button2}>About Me</button>
            </Link>
          </div>
          <div>
            <Link className={styles.link} href='/certificates'>
              <button className={styles.button3}>Certificates</button>
            </Link>
          </div>
        </div>
        <div className={styles.div_img}>
          <Image className={styles.img2} src={js_html_css} alt='js-html-css' />
          <Image className={styles.img2} src={node} alt='node.js' />
          <Image className={styles.img2} src={postgres} alt='postgres' />
          <Image className={styles.img2} style={{height:'230px', width:'200px', marginTop:'20px'}} src={react_redux} alt='react-redux' />
        </div>
      </main>
      
      <footer className={styles.contfot}>
        <a href={'https://github.com/EdgardYayo'} target={'_blank'}><img className={styles.icon} src={'https://th.bing.com/th/id/R.7d841a759bcba75f0916fd4cca396468?rik=0vWSw%2bKZyZwPtA&riu=http%3a%2f%2ficonsdb.com%2ficons%2fdownload%2fnavy-blue%2fgithub-6-512.png&ehk=7suzT45p4FiS%2b%2fMwAzNteqSSrmf5VcuSsCzmLxTyRO8%3d&risl=&pid=ImgRaw&r=0'} alt='GH' /></a>
        <a href={'https://www.linkedin.com/in/edgard-allan-pazos-inda-34780724a/'} target={'_blank'}><img className={styles.icon} src={'https://i.pinimg.com/originals/0e/60/f5/0e60f53332a2f42ff82ddcc604d93364.png'} alt='In' /></a>
      </footer>
    </div>
  )
}
