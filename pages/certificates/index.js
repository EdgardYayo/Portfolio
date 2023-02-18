import Link from "next/link";
import s from "../../styles/Certificates.module.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from "next/image";
import cert1 from '../../public/imagenes/cert1.jpeg';
import cert2 from '../../public/imagenes/cert2.png';
import cert3 from '../../public/imagenes/cert3.jpeg';
import cert4 from '../../public/imagenes/1f89271d13da0d9158361fa5a5cbf1cf6d56a1beb14ac86492b142332e96efc0_page-0001.jpg';

export default function Certificates(){

    return (
        <main className={s.container}>
            <div>
                <h1 className={s.title}>Certificates</h1>
            </div>
            <section className={s.contImgs}>
                    <Image src={cert4} alt='Henry Certificade' width={400} height={500}/>
                    <Image src={cert1} alt='HTML and CSS' width={400} height={500}/>
                    <Image src={cert2} alt='Teaching Assistant' width={400} height={500}/>
                    <Image src={cert3} alt='English certificate' width={400} height={500}/>
            </section>
            <Link href={'/'}>
                <button className={s.button}>Back</button>
            </Link>
        </main>
    )
}