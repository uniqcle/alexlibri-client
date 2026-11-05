import Image from "next/image";
// import horace from "@assets/images/authors/horace.png";
import horace from "@assets/images/authors/gomer.png";

import { Separator } from "@components/ui/separator";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@components/ui/card";
import { PageTabs } from "@components/PageTabs/PageTabs";
import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";

import styles from "./AuthorPage.module.css";

export async function AuthorPage({
    params,
}: {
    params: Promise<{ author: string }>;
}) {
    const { author } = await params;

    return (
        <div className={styles.author_container}>
            <Breadcrumbs />

            <div className={styles.author_short}>
                <div className={styles.author_image}>
                    <Image
                        src={horace}
                        alt="Гораций Флакк"
                        width={140}
                        height={140}
                        priority
                    />
                </div>
                <div className={styles.author_desc}>
                    <div className={styles.author_fullName}>Гомер</div>
                    <div className={styles.author_birthDate}>12.23.2203</div>
                    <div className={styles.author_desc_text}>
                        Древнегреческий поэт, легендарный автор эпических поэм
                        «Илиада» и «Одиссея». Его произведения стали фундаментом
                        всей европейской литературной традиции и по сей день
                        остаются величайшими памятниками античной словесности.
                    </div>
                </div>
            </div>

            <Separator />

            <div className={styles.author_long}>
                <PageTabs
                    defaultValue="biography"
                    tabs={[
                        {
                            value: "biography",
                            label: "Биография",
                            content: (
                                <Card className={styles.author_card}>
                                    <CardHeader
                                        className={styles.author_cardHeader}
                                    >
                                        <CardTitle
                                            className={styles.author_cardTitle}
                                        >
                                            Биография
                                        </CardTitle>
                                        <CardDescription
                                            className={
                                                styles.author_cardDescription
                                            }
                                        >
                                            Краткая биография автора
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent
                                        className={styles.author_cardContent}
                                    >
                                        text...
                                    </CardContent>
                                </Card>
                            ),
                        },
                        {
                            value: "works",
                            label: "Произведения",
                            content: (
                                <Card className={styles.author_card}>
                                    <CardHeader
                                        className={styles.author_cardHeader}
                                    >
                                        <CardTitle
                                            className={styles.author_cardTitle}
                                        >
                                            Произведения
                                        </CardTitle>
                                        <CardDescription
                                            className={
                                                styles.author_cardDescription
                                            }
                                        >
                                            Список произведений автора
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent
                                        className={styles.author_cardContent}
                                    >
                                        Список произведений...
                                    </CardContent>
                                </Card>
                            ),
                        },
                    ]}
                />
            </div>
        </div>
    );
}
