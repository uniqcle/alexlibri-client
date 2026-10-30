"use client";

import Link from "next/link";
import Image from "next/image";
import testImg from "@assets/images/test.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@components/ui/carousel";
import styles from "./MainSlider.module.css";

const cards = [
    { id: 1, title: "Жребий", image: testImg },
    { id: 2, title: "Жребий", image: testImg },
    { id: 3, title: "Жребий", image: testImg },
    { id: 4, title: "Жребий", image: testImg },
    { id: 5, title: "Жребий", image: testImg },
    { id: 6, title: "Жребий", image: testImg },
];

export function MainSlider({ title }: { title: string }) {
    return (
        <section className={styles.section}>
            <div className={styles.titleBlock}>
                <h3 className={styles.sectionTitle}>{title}</h3>
                <Link href="/catalog" className={styles.sectionLink}>
                    Все
                </Link>
            </div>

            <div className={styles.carouselClip}>
                <Carousel
                    className="w-full max-w-full mx-auto"
                    opts={{ align: "start", startIndex: 0 }}
                >
                    <CarouselContent className={styles.carouselContent}>
                        {cards.map((card) => (
                            <CarouselItem
                                key={card.id}
                                className="basis-full min-w-0 sm:basis-1/2 lg:basis-1/2"
                            >
                                <Link
                                    href={`/catalog/${card.id}`}
                                    className={styles.cardLink}
                                >
                                    <div className={styles.card}>
                                        <div className={styles.image}>
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 55vw"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>
                                        <div className={styles.title}>
                                            {card.title}
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className={styles.carouselPrev} />
                    <CarouselNext className={styles.carouselNext} />
                </Carousel>
            </div>
        </section>
    );
}
