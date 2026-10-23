"use client";

import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import horace from "@assets/images/authors/horace.png";
import { Separator } from "@components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@components/ui/toggle-group";
import styles from "./AuthorsList.module.css";

const authors = Array.from({ length: 22 }).map((_, i) => ({
    id: i,
    name: "Гораций",
    birthdate: "65 - 8 года до н. э.",
    type: i % 2 === 0 ? "greek" : "roman",
}));

const FILTERS = ["all", "greek", "roman"] as const;
type Filter = (typeof FILTERS)[number];

// 👇 обёртка с Suspense
export function AuthorsList() {
    return (
        <Suspense fallback={<div>Загрузка фильтра...</div>}>
            <AuthorsListInner />
        </Suspense>
    );
}



export function AuthorsListInner() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // 👇 читаем фильтр из URL (?filter=greek)
    const urlFilter = searchParams.get("filter");
    const initialFilter: Filter = FILTERS.includes(urlFilter as Filter)
        ? (urlFilter as Filter)
        : "all";

    const [filter, setFilter] = useState<Filter>(initialFilter);

    // 👇 синхронизация: URL → state
    useEffect(() => {
        const urlFilter = searchParams.get("filter") as Filter | null;
        if (urlFilter && FILTERS.includes(urlFilter)) {
            setFilter(urlFilter);
        } else {
            setFilter("all");
        }
    }, [searchParams]);

    // 👇 смена фильтра: state → URL
    const changeFilter = (value: Filter) => {
        setFilter(value);

        const params = new URLSearchParams(searchParams.toString());
        if (value === "all") {
            params.delete("filter"); // /authors
        } else {
            params.set("filter", value); // /authors?filter=greek
        }

        router.replace(
            params.toString() ? `?${params}` : "?",
            { scroll: false }, // 👈 без скролла наверх
        );
    };

    const filtered =
        filter === "all" ? authors : authors.filter((a) => a.type === filter);

    return (
        <div className={styles.list_authors_container}>
            <ToggleGroup
                className={styles.filter_container}
                variant="outline"
                size="sm"
                spacing={2}
                value={[filter]}
                onValueChange={(value) =>
                    value[0] && changeFilter(value[0] as Filter)
                }
            >
                <ToggleGroupItem value="all">Все</ToggleGroupItem>
                <ToggleGroupItem value="greek">Греки</ToggleGroupItem>
                <ToggleGroupItem value="roman">Римляне</ToggleGroupItem>
            </ToggleGroup>

            <Separator />

            <div className={styles.list_authors}>
                {filtered.map((author) => (
                    <div
                        key={author.id}
                        className={`${styles.author} ${
                            author.type === "greek"
                                ? styles.authorGreek
                                : styles.authorRoman
                        }`}
                    >
                        <div className={styles.author_image}>
                            <Image
                                src={horace}
                                alt=""
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className={styles.author_fullName}>
                            {author.name}
                        </div>
                        <div className={styles.author_birthdate}>
                            {author.birthdate}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
