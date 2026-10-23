"use client";

import { Suspense, useState, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Separator } from "@components/ui/separator";
import { FilterSelect } from "@components/FilterSelect/FilterSelect";
import { GenreFilter } from "@components/GenreFilter/GenreFilter";
import { CatalogList } from "@components/CatalogList/CatalogList";
import { useClickOutside } from "@hooks/useClickOutside";
import styles from "./CatalogPage.module.css";

const genres = [
    { label: "Поэзия", value: "poetry" },
    { label: "Эпос", value: "epic" },
    { label: "Философия", value: "philosophy" },
    { label: "Трагедия", value: "tragedy" },
    { label: "История", value: "history" },
    { label: "Комедия", value: "comedy" },
    { label: "Сатира", value: "satire" },
    { label: "Лирика", value: "lyric" },
    { label: "Риторика", value: "rhetoric" },
    { label: "Политика", value: "politics" },
    { label: "Роман", value: "novel" },
    { label: "Естествознание", value: "science" },
    { label: "Эпистолярный", value: "epistolary" },
    { label: "Медицина", value: "medicine" },
];

const sections = [
    { label: "Вся античность", value: "all" },
    { label: "Древних греков", value: "greek" },
    { label: "Древних римлян", value: "roman" },
];

const periods = [
    { label: "Все эпохи", value: "all" },
    { label: "IX–VIII в. до н.э.", value: "9-8-bc" },
    { label: "VII–VI в. до н.э.", value: "7-6-bc" },
    { label: "V в. до н.э.", value: "5-bc" },
    { label: "IV в. до н.э.", value: "4-bc" },
    { label: "III–II в. до н.э.", value: "3-2-bc" },
    { label: "I в. до н.э.", value: "1-bc" },
    { label: "I–II в. н.э.", value: "1-2-ad" },
];

export function CatalogPage() {
    return (
        <Suspense fallback={<div>Загрузка фильтров...</div>}>
            <CatalogPageInner />
        </Suspense>
    );
}

function CatalogPageInner() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [genresOpen, setGenresOpen] = useState(false);
    const genresWrapperRef = useRef<HTMLDivElement>(null);

    useClickOutside(genresWrapperRef, () => setGenresOpen(false), genresOpen);

    const section = searchParams.get("section") ?? "all";
    const period = searchParams.get("period") ?? "all";
    const selectedGenres = searchParams.getAll("genre");

    // 👇 лог для проверки
    console.log("URL params:", { section, period, selectedGenres });

    const buildUrl = (params: URLSearchParams) => {
        const query = params.toString();
        return query ? `${pathname}?${query}` : pathname;
    };

    const updateParam = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value === "all") {
            params.delete(key);
        } else {
            params.set(key, value);
        }
        router.replace(buildUrl(params), { scroll: false });
    };

    const updateGenres = (values: string[]) => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete("genre");
        values.forEach((v) => params.append("genre", v));
        router.replace(buildUrl(params), { scroll: false });
    };

    return (
        <div className={styles.catalog_container}>
            <div className={styles.catalog_filter}>
                <div className={styles.filter_row_top}>
                    <FilterSelect
                        label="Свитки:"
                        options={sections}
                        value={section}
                        onChange={(value) => updateParam("section", value)}
                        groupLabel="Раздел литературы"
                    />

                    <FilterSelect
                        label="Период:"
                        options={periods}
                        value={period}
                        onChange={(value) => updateParam("period", value)}
                        groupLabel="Период написания"
                    />
                </div>

                <GenreFilter
                    label="Жанры:"
                    options={genres}
                    value={selectedGenres}
                    onChange={updateGenres}
                />
            </div>

            <Separator />

            <div className={styles.catalog_list}>
                <CatalogList />
            </div>
        </div>
    );
}
