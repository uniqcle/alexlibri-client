"use client";

import { useState, useRef } from "react";
import { LuChevronsRight } from "react-icons/lu";
import { useClickOutside } from "@hooks/useClickOutside";
import styles from "./GenreFilter.module.css";

type Option = {
    label: string;
    value: string;
};

type GenreFilterProps = {
    label?: string;
    options: Option[];
    value: string[];
    onChange: (value: string[]) => void;
    className?: string;
};

export function GenreFilter({
    label = "Жанры:",
    options,
    value,
    onChange,
    className,
}: GenreFilterProps) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useClickOutside(wrapperRef, () => setOpen(false), open);

    const toggleGenre = (genreValue: string) => {
        onChange(
            value.includes(genreValue)
                ? value.filter((v) => v !== genreValue)
                : [...value, genreValue],
        );
    };

    const clearGenres = () => onChange([]);

    return (
        <div className={`${styles.row} ${className ?? ""}`}>
            <div className={styles.label}>{label}</div>

            <div className={styles.wrapper} ref={wrapperRef}>
                <div className={styles.rowChips}>
                    {value.length === 0 ? (
                        <button
                            type="button"
                            className={styles.all}
                            onClick={clearGenres}
                        >
                            Все
                        </button>
                    ) : (
                        value.map((genreValue) => {
                            const genre = options.find(
                                (g) => g.value === genreValue,
                            );
                            return (
                                <button
                                    type="button"
                                    key={genreValue}
                                    className={styles.chip}
                                    onClick={() => toggleGenre(genreValue)}
                                    title="Убрать"
                                >
                                    {genre?.label}
                                </button>
                            );
                        })
                    )}

                    <button
                        type="button"
                        className={styles.toggle}
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-label="Показать жанры"
                    >
                        <LuChevronsRight />
                    </button>
                </div>

                {open && (
                    <div className={styles.panel}>
                        {options.map((genre) => (
                            <button
                                type="button"
                                key={genre.value}
                                className={`${styles.item} ${
                                    value.includes(genre.value)
                                        ? styles.isActive
                                        : ""
                                }`}
                                onClick={() => toggleGenre(genre.value)}
                            >
                                {genre.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
