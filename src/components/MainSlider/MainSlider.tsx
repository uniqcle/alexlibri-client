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
import img from "@assets/images/52536559.png";
import styles from "./MainSlider.module.css";

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
                    opts={{
                        align: "center",
                        startIndex: 1,
                    }}
                >
                    <CarouselContent>
                        {cards.map((card, index) => (
                            <CarouselItem
                                key={card.id}
                                className="basis-1/2 min-w-0 lg:basis-1/3"
                            >
                                <Link
                                    href={`/catalog/${card.id}`}
                                    className={styles.cardLink}
                                >
                                    <div className={styles.cardImage}>
                                        <Image
                                            src={img}
                                            alt={card.title}
                                            width={700}
                                            height={700}
                                            className="w-full h-auto"
                                            priority
                                        />
                                    </div>
                                    <span className={styles.title_book}>
                                        Краткое название произведения
                                    </span>
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
