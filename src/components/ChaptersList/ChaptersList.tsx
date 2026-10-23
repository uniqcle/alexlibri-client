"use client";

import { useState } from "react";
import Link from "next/link";
import { LuLock, LuLockOpen } from "react-icons/lu";
import { LockedContentDialog } from "@components/LockedContentDialog/LockedContentDialog";
import styles from "./ChaptersList.module.css";   // 👈 свой модуль

const chapters = [
    { id: 1, title: "Глава 1. Введение", locked: false },
    { id: 2, title: "Глава 2. Основы теории", locked: false },
    { id: 3, title: "Глава 3. Методология исследования", locked: false },
    { id: 4, title: "Глава 4. Анализ данных", locked: true },
    { id: 5, title: "Глава 5. Практические примеры", locked: true },
    { id: 6, title: "Глава 6. Обсуждение результатов", locked: true },
    { id: 7, title: "Глава 7. Заключение", locked: true },
];

export function ChaptersList() {
    const [lockedChapter, setLockedChapter] = useState<string | null>(null);

    return (
        <>
            <ul className={styles.indexList}>
                {chapters.map((chapter) =>
                    chapter.locked ? (
                        <li key={chapter.id}>
                            <button
                                type="button"
                                className={`${styles.indexItem} ${styles.isLocked}`}
                                onClick={() => setLockedChapter(chapter.title)}
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

            <LockedContentDialog
                open={!!lockedChapter}
                onOpenChange={(open) => !open && setLockedChapter(null)}
                title={lockedChapter ?? ""}
                onSubscribe={() => {
                    console.log("Оформить подписку");
                }}
            />
        </>
    );
}
