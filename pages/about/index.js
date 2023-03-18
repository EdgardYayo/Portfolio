import Link from 'next/link';
import s from '../../styles/About.module.css';
// import useDownloader from "react-use-downloader";


export default function About() {

    // const { download } = useDownloader()

    const fileUrl = "../../public/downloads/CV Edgard API New Version.pdf";
    const fileName = "Edgard A. Pazos Inda - Full Stack Developer";

    return (
        <main className={s.cont}>
            <h1 className={s.title}>About Me</h1>
            <a className={s.cv} onClick={() => download(fileUrl, fileName)}>Download CV ⇩</a>
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
                    <li><strong>Node.js</strong>-Advanced Medium</li>
                    <li><strong>Postgres</strong>-Advanced Medium</li>
                    <li><strong>Next.js</strong>-Advanced Medium</li>
                    <li><strong>Tailwind</strong>-Medium</li>
                    <li><strong>Material UI</strong>-Medium</li>
                    <li><strong>Typescript</strong>-Medium</li>
                    <li><strong>Git</strong>-Medium</li>
                    <li><strong>Python</strong>-Medium</li>
                    <li><strong>MongoDB</strong>-Medium</li>
                    <li><strong>Django</strong>-Basics</li>
                    <li><strong>Bootstrap</strong>-Basics</li>
                    <li><strong>Mongoose</strong>-Basics</li>
                    <li><strong>GraphQL</strong>-Basics</li>
                    <li><strong>GraphCMS</strong>-Basics</li>
                    <li><strong>Apollo Server</strong>-Basics</li>
                    <li><strong>Apollo Client</strong>-Basics</li>
                </ul>
            </div>

            <Link href={'/'}><button className={s.button}>Back</button></Link>

        </main>
    )
}