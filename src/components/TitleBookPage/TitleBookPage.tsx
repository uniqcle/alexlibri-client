"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { LuLock, LuLockOpen } from "react-icons/lu";
import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { LockedContentDialog } from "@components/LockedContentDialog/LockedContentDialog";

import img from "@assets/images/52536559.png";
 
import styles from "./TitleBookPage.module.css";

const chapters = [
    { id: 1, title: "Глава 1. Введение", locked: false },
    { id: 2, title: "Глава 2. Основы теории", locked: false },
    { id: 3, title: "Глава 3. Методология исследования", locked: false },
    { id: 4, title: "Глава 4. Анализ данных", locked: true },
    { id: 5, title: "Глава 5. Практические примеры", locked: true },
    { id: 6, title: "Глава 6. Обсуждение результатов", locked: true },
    { id: 7, title: "Глава 7. Заключение", locked: true },
];

export function TitleBookPage() {
    const [lockedChapter, setLockedChapter] = useState<string | null>(null);

    const openLockedDialog = (title: string) => {
        setLockedChapter(title);
    };

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
                                <ul className={styles.indexList}>
                                    {chapters.map((chapter) =>
                                        chapter.locked ? (
                                            <li key={chapter.id}>
                                                <button
                                                    type="button"
                                                    className={`${styles.indexItem} ${styles.isLocked}`}
                                                    onClick={() =>
                                                        openLockedDialog(
                                                            chapter.title,
                                                        )
                                                    }
                                                >
                                                    <LuLock />
                                                    {chapter.title}
                                                </button>
                                            </li>
                                        ) : (
                                            <li key={chapter.id}>
                                                <Link
                                                    href={`/work/1/chapter/${chapter.id}`}
                                                    className={styles.indexItem}
                                                >
                                                    <LuLockOpen />
                                                    {chapter.title}
                                                </Link>
                                            </li>
                                        ),
                                    )}
                                </ul>
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

            {/* 👇 модальное окно для заблокированной главы */}
            <LockedContentDialog
                open={!!lockedChapter}
                onOpenChange={(open) => !open && setLockedChapter(null)}
                title={lockedChapter ?? ""}
                onSubscribe={() => {
                    // 👇 логика оформления подписки
                    console.log("Оформить подписку");
                }}
            />
        </div>
    );
}
