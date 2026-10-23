"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuAlignJustify, LuChevronDown, LuX } from "react-icons/lu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@components/ui/sheet";
import { menuItems } from "@config/menu";
import styles from "./MobileMenu.module.css";

function MobileMenuInner() {
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState<string | null>(null);
    const pathname = usePathname();

    const toggleSection = (label: string) => {
        setExpanded((prev) => (prev === label ? null : label));
    };

    const isActive = (href?: string) => {
        if (!href) return false;
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <div className={styles.menu}>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger
                    render={
                        <button
                            aria-label={open ? "Закрыть меню" : "Открыть меню"}
                            className="flex items-center justify-center w-[34px] h-[34px] rounded-md bg-transparent hover:bg-muted transition-colors"
                        >
                            {open ? <LuX /> : <LuAlignJustify />}
                        </button>
                    }
                />

                <SheetContent
                    side="right"
                    className="w-[300px] p-0"
                    style={{
                        zIndex: 9999,
                        boxShadow:
                            "-2px 0 8px rgb(0 0 0 / 0.15), -8px 0 24px rgb(0 0 0 / 0.15)",
                    }}
                >
                    <SheetHeader className="p-4 border-b">
                        <SheetTitle>Александрийская библиотека</SheetTitle>
                    </SheetHeader>

                    <nav className="flex flex-col p-2 gap-0.5">
                        {menuItems
                            .filter(
                                (item) => !item.hideOnDesktop || item.children,
                            )
                            .map((item, index) =>
                                item.children ? (
                                    <div
                                        key={item.href ?? `group-${index}`}
                                        className="flex flex-col"
                                    >
                                        <button
                                            onClick={() =>
                                                toggleSection(
                                                    item.label as string,
                                                )
                                            }
                                            aria-expanded={
                                                expanded === item.label
                                            }
                                            className="flex items-center justify-between w-full px-4 py-3 text-base text-black/80 rounded-md bg-transparent border-none cursor-pointer text-left hover:bg-[rgb(249_209_59_/_0.2)] transition-colors"
                                        >
                                            <span>{item.label}</span>
                                            <LuChevronDown
                                                className={`transition-transform duration-250 ${
                                                    expanded === item.label
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </button>

                                        {expanded === item.label && (
                                            <ul className="flex flex-col pl-4 gap-0.5 list-none m-0">
                                                {item.children.map(
                                                    (child, childIndex) => (
                                                        <li
                                                            key={
                                                                child.href ??
                                                                `child-${childIndex}`
                                                            }
                                                        >
                                                            <Link
                                                                href={
                                                                    child.href ??
                                                                    "#"
                                                                }
                                                                onClick={() =>
                                                                    setOpen(
                                                                        false,
                                                                    )
                                                                }
                                                                className={`block px-4 py-2.5 text-sm no-underline rounded-md transition-colors ${
                                                                    isActive(
                                                                        child.href,
                                                                    )
                                                                        ? "bg-[#f9d13b] text-black/95"
                                                                        : "text-black/65 hover:bg-[rgb(249_209_59_/_0.2)] hover:text-black/90"
                                                                }`}
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        key={item.href ?? `item-${index}`}
                                        href={item.href ?? "#"}
                                        onClick={() => setOpen(false)}
                                        className={`block w-full px-4 py-3 text-base no-underline rounded-md transition-colors ${
                                            isActive(item.href)
                                                ? "bg-[#f9d13b] text-black/95"
                                                : "text-black/80 hover:bg-[rgb(249_209_59_/_0.2)]"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ),
                            )}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export function MobileMenu() {
    return (
        <Suspense fallback={null}>
            <MobileMenuInner />
        </Suspense>
    );
}
