import Image from "next/image";
import Link from "next/link";
import { Separator } from "@components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { ChaptersList } from "@components/ChaptersList/ChaptersList"; // 👈 клиентский
import img from "@assets/images/52536559.png";
import styles from "./TitleBookPage.module.css";

export function TitleBookPage() {
    return (
        <div className={styles.container}>
            <Breadcrumbs />

            <div className={styles.titleBlock}>
                <div className={styles.titleImage}>
                    <Image
                        src={img}
                        alt="Обложка книги"
                        fill
                        sizes="(max-width: 480px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>

                <div className={styles.titleInfo}>
                    <div className={styles.title}>Заголовок книги</div>
                    <div>
                        Автор: <span>Гораций</span>
                    </div>
                    <div>
                        Переводчик: <span>Афанасий Фет</span>
                    </div>
                    <div>
                        Жанр: <span>Трагедия</span>
                    </div>

                    <div className={styles.buttonWrapper}>
                        <Link
                            href="/work/1/chapter/1"
                            className={styles.readButton}
                        >
                            Читать онлайн
                        </Link>
                    </div>
                </div>
            </div>

            <Separator />

            <div>
                <Tabs defaultValue="book_index">
                    <TabsList className={styles.tabsList}>
                        <TabsTrigger
                            value="book_index"
                            className={styles.tabTrigger}
                        >
                            Оглавление
                        </TabsTrigger>
                        <TabsTrigger
                            value="book_characters"
                            className={styles.tabTrigger}
                        >
                            Персонажи
                        </TabsTrigger>
                        <TabsTrigger
                            value="book_info"
                            className={styles.tabTrigger}
                        >
                            Преамбула
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="book_index">
                        <Card className={styles.card}>
                            <CardHeader className={styles.cardHeader}>
                                <CardTitle className={styles.cardTitle}>
                                    Оглавление
                                </CardTitle>
                            </CardHeader>
                            <CardContent className={styles.cardContent}>
                                <ChaptersList /> {/* 👈 клиентский */}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="book_info">
                        <Card className={styles.card}>
                            <CardHeader className={styles.cardHeader}>
                                <CardTitle className={styles.cardTitle}>
                                    Эпитома
                                </CardTitle>
                            </CardHeader>
                            <CardContent className={styles.cardContent}>
                                sdafsdafsadf
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="book_characters">
                        <Card className={styles.card}>
                            <CardHeader className={styles.cardHeader}>
                                <CardTitle className={styles.cardTitle}>
                                    Персонажи
                                </CardTitle>
                            </CardHeader>
                            <CardContent className={styles.cardContent}>
                                Персонажи
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
