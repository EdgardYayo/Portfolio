import Link from "next/link";
import s from "../../styles/Certificates.module.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import cert1 from '../../public/imagenes/cert1.jpeg';
import cert2 from '../../public/imagenes/cert2.png';
import cert3 from '../../public/imagenes/cert3.jpeg'
import { Button } from "@mui/material";

export default function Certificates(){
    return (
        <main className={s.container}>
            <div>
                <h1 className={s.title}>Certificates</h1>
            </div>
            <Carousel width={750} showStatus={false} className={s.contImgs}>
                <div>
                    <Image src={cert1} alt='HTML and CSS' width={400} height={500}/>
                </div>
                <div>
                    <Image src={cert2} alt='Teaching Assistant' width={400} height={500}/>
                </div>
                <div>
                    <Image src={cert3} alt='English certificate' width={400} height={500}/>
                </div>
            </Carousel>
            <Link href={'/'}>
                <button className={s.button}>Back</button>
            </Link>
        </main>
    )
}