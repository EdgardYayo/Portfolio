import Link from 'next/link';
import s from '../../styles/About.module.css'


export default function About() {

    return (
        <main className={s.cont}>
            <h1 className={s.title}>About Me</h1>
            <div className={s.cont2}>
                <div className={s.sub}>
                    <h2 className={s.title2}>Description</h2>
                    <p className={s.text}>I am passionate about what I do, I like to create websites, apps, meditate and eat healthy, I am eager to learn anything that makes me a better person, better developer, I adapt very quickly to all kinds of environments and I am very sociable so I make friendships based on respect and collaboration to grow together.</p>
                </div>
                <p className={s.icon}>👨🏻‍💻</p>
                <div className={s.sub}>
                    <h2 className={s.title2}>Qualities</h2>
                    <p className={s.text}>Hardworking, Empathetic, Responsible, Respectful, Great Group Worker, Creative, Resilient and Organized.</p>
                </div>
            </div>
            <div className={s.contli}>
                <h2 className={s.title3}>Technologies that I know</h2>
                <ul className={s.ul}>
                    <li><strong>JavaScript</strong>-Advanced</li>
                    <li><strong>React</strong>-Advanced</li>
                    <li><strong>Redux</strong>-Advanced</li>
                    <li><strong>NPM</strong>-Advanced</li>
                    <li><strong>HTML</strong>-Advanced</li>
                    <li><strong>CSS</strong>-Advanced</li>
                    <li><strong>Sequelize</strong>-Advanced</li>
                    <li><strong>Express</strong>-Advanced Medium</li>
                    <li><strong>SQL</strong>-Advanced Medium</li>
                    <li><strong>Node</strong>-Advanced Medium</li>
                    <li><strong>Postgres</strong>-Advanced Medium</li>
                    <li><strong>Next.js</strong>-Advanced Medium</li>
                    <li><strong>Tailwind</strong>-Medium</li>
                    <li><strong>Git</strong>-Medium</li>
                    <li><strong>Python</strong>-Medium</li>
                    <li><strong>Django</strong>-Basics</li>
                    <li><strong>Bootstrap</strong>-Basics</li>
                    <li><strong>Typescript</strong>-Basics</li>
                </ul>
            </div>

            <Link href={'/'}><button className={s.button}>Back</button></Link>

        </main>
    )
}