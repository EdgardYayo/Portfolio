import Link from "next/link"
import s from '../../styles/Projects.module.css'
import Image from "next/image";
import healthy from "../../public/imagenes/Captura web_16-2-2023_205451_healthy-page.vercel.app.jpeg"
import calculator from "../../public/imagenes/Captura web_16-2-2023_21752_calculadora-bay-alpha.vercel.app.jpeg"
import characterCreate from "../../public/imagenes/Captura web_16-2-2023_211335_character-create.vercel.app.jpeg"
import meditationPage from "../../public/imagenes/Captura web_16-2-2023_211655_edgardyayo.github.io.jpeg"
import fanPage from "../../public/imagenes/Captura web_16-2-2023_211857_fan-page-simpsons-big-mouth-rick-and-morty.vercel.app.jpeg"
import dinosaursPage from "../../public/imagenes/Captura web_16-2-2023_21311_127.0.0.1.jpeg"
import toDoList from "../../public/imagenes/Captura web_16-2-2023_211922_to-do-list-sigma-two.vercel.app.jpeg"
import ShopLine from "../../public/imagenes/Captura web_16-2-2023_21205_shop-line-front.vercel.app.jpeg"


export default function Projects() {
    return (
        <div className={s.container}>
            <h1 className={s.h1}>My Projects</h1>
            <p className={s.p}>Here my projects</p>
            <Link href={'/'}>
                <button className={s.button}>Back Home</button>
            </Link>

            <ul className={s.ul}>
                <li><Image className={s.img} src={healthy} alt="healthy-page"/><a href="https://healthy-page.vercel.app/index.html" target='_blank'>Healthy Page👨🏼‍⚕️🥗</a></li>
                <li><Image className={s.img} src={calculator} alt="calculator"/><a href="https://calculadora-bay-alpha.vercel.app/" target='_blank'>Calculator🧮</a></li>
                <li><Image className={s.img} src={characterCreate} alt="create-character-page"/><a href="https://character-create.vercel.app/" target='_blank'>Create A Character👾</a></li>
                <li><a href="https://character-create.vercel.app/" target='_blank'>Pokemon Page🐛</a></li>
                <li><a href="https://character-create.vercel.app/" target='_blank'>Videogames Page🎮</a></li>
                <li><a href="https://character-create.vercel.app/" target='_blank'>Discover Your Inside Chef👨🏽‍🍳</a></li>
                <li><Image className={s.img} src={meditationPage} alt="meditation-page"/><a href="https://edgardyayo.github.io/" target='_blank'>Meditation Page🧘‍♀️</a></li>
                <li><Image className={s.img} src={fanPage} alt="fan-page"/><a href="https://fan-page-simpsons-big-mouth-rick-and-morty.vercel.app/" target='_blank'>Fan Page⭐</a></li>
                <li><Image className={s.img} src={dinosaursPage} alt="dinosaurs-page"/><a href="https://github.com/EdgardYayo/Dino.github.io" target='_blank'>Dinosaur Page🦕</a></li>
                <li><Image className={s.img} src={toDoList} alt="to-do-list"/><a href="https://to-do-list-sigma-two.vercel.app/" target='_blank'>To Do list📝</a></li>
                <li><Image className={s.img} src={ShopLine} alt="shopline-ecommerce"/><a href="https://shop-line-front.vercel.app/" target='_blank'>ShopLine🛒</a></li>
                
            </ul>

            <div className={s.circle_cont}>
                <div className={s.circle}>
                    <div className={s.tiny}>
                        <div className={s.tiniest}></div>
                    </div>
                </div>
                <div className={s.circle_r}>
                    <div className={s.tiny_r}>
                        <div className={s.tiniest_r}></div>
                    </div>
                </div>
                <div className={s.nose}>
                </div>
            </div>
        </div>
    )
}