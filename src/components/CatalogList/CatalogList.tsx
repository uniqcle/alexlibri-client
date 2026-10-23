"use client";

import Image from "next/image";
import testImg from "@assets/images/test.png";
import { PaginationList } from "@components/PaginationList/PaginationList";
import styles from "./CatalogList.module.css";


const cards = [
    {
        id: 1,
        title: "Жребий",
        author: "Плавт",
        translator: "Б. В. Варнеке",
        image: testImg,
    },
    {
        id: 2,
        title: "Жребий",
        author: "Плавт",
        translator: "Б. В. Варнеке",
        image: testImg,
    },
    {
        id: 3,
        title: "Жребий",
        author: "Плавт",
        translator: "Б. В. Варнеке",
        image: testImg,
    },
    {
        id: 4,
        title: "Жребий",
        author: "Плавт",
        translator: "Б. В. Варнеке",
        image: testImg,
    },
    {
        id: 5,
        title: "Жребий",
        author: "Плавт",
        translator: "Б. В. Варнеке",
        image: testImg,
    },
    {
        id: 6,
        title: "Жребий",
        author: "Плавт",
        translator: "Б. В. Варнеке",
        image: testImg,
    },
];


export function CatalogList() {
    return (
        <>
            <div className={styles.catalogListContainer}>
                {cards.map((card) => (
                    <div key={card.id} className={styles.card}>
                        <div className={styles.image}>
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                sizes="(max-width: 480px) 100vw, 50vw"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className={styles.title}>{card.title}</div>
                        <div className={styles.author}>
                            Автор: <span>{card.author}</span>
                        </div>
                        <div className={styles.translator}>
                            Переводчик: <span>{card.translator}</span>
                        </div>
                    </div>
                ))}
            </div>

            <PaginationList />
        </>
    );
}
