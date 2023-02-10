import Link from "next/link"
import s from '../../styles/Projects.module.css'


export default function Projects() {
    return (
        <div className={s.container}>
            <h1 className={s.h1}>My Projects</h1>
            <p className={s.p}>Here my projects</p>
            <Link href={'/'}>
                <button className={s.button}>Back Home</button>
            </Link>

            <ul className={s.ul}>
                <li><a href="https://healthy-page.vercel.app/index.html" target='_blank'>Healthy Page👨🏼‍⚕️🥗</a></li>
                <li><a href="https://calculadora-bay-alpha.vercel.app/" target='_blank'>Calculator🧮</a></li>
                <li><a href="https://character-create.vercel.app/" target='_blank'>Create A Character👾</a></li>
                <li><a href="https://character-create.vercel.app/" target='_blank'>Pokemon Page🐛</a></li>
                <li><a href="https://character-create.vercel.app/" target='_blank'>Videogames Page🎮</a></li>
                <li><a href="https://character-create.vercel.app/" target='_blank'>Discover Your Inside Chef👨🏽‍🍳</a></li>
                <li><a href="https://edgardyayo.github.io/" target='_blank'>Meditation Page🧘‍♀️</a></li>
                <li><a href="https://fan-page-simpsons-big-mouth-rick-and-morty.vercel.app/" target='_blank'>Fan Page⭐</a></li>
                <li><a href="https://github.com/EdgardYayo/Dino.github.io" target='_blank'>Dinosaur Page🦕</a></li>
                <li><a href="https://to-do-list-sigma-two.vercel.app/" target='_blank'>To Do list📝</a></li>
                <li><a href="https://shop-line-front.vercel.app/" target='_blank'>ShopLine🛒</a></li>
                
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