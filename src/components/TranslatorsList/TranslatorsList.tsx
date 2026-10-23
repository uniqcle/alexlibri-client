"use client";

import Image from "next/image";
import horace from "@assets/images/authors/horace.png";
import { Separator } from "@components/ui/separator";
import styles from "./TranslatorsList.module.css";

const translators = Array.from({ length: 22 }).map((_, i) => ({
    id: i + 1,
    name: "Гораций",
    birthdate: "65 - 8 года до н. э.",
}));

export function TranslatorsList() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Переводчики с древних языков</h2>
            </div>

            <Separator />

            <div className={styles.list}>
                {translators.map((translator) => (
                    <div
                        key={translator.id}
                        className={`${styles.card} ${styles.translatorCard}`}
                    >
                        <div className={styles.image}>
                            <Image
                                src={horace}
                                alt={translator.name}
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className={styles.name}>{translator.name}</div>
                        <div className={styles.birthdate}>
                            {translator.birthdate}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
