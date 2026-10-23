import { LuLandmark, LuAmphora, LuUsers, LuUserRound } from "react-icons/lu";
import { GrCatalog } from "react-icons/gr";
import { FaQuestion } from "react-icons/fa";

import type { ReactNode } from "react";

export type MenuItem = {
    label: ReactNode;
    href?: string;
    hideOnDesktop?: boolean;
    icon?: React.ReactNode;
    children?: MenuItem[];
};

export const menuItems: MenuItem[] = [
    {
        label: (
            <span className="flex items-center gap-2">
                <LuLandmark />
                Главная
            </span>
        ),
        href: "/",
        hideOnDesktop: true,
    },
    {
        label: (
            <span className="flex items-center gap-2">
                <GrCatalog />
                Каталог
            </span>
        ),
        href: "/catalog",
        // children: [
        //     { label: "Всей античности", href: "/catalog" },
        //     { label: "Древних греков", href: "/catalog/epochs" },
        //     { label: "Древних римлян", href: "/catalog/genres" },
        // ],
    },
    {
        label: (
            <span className="flex items-center gap-2">
                <LuAmphora />
                Подписка
            </span>
        ),
        href: "/premium",
    },
    {
        label: (
            <span className="flex items-center gap-2">
                <LuUsers />
                Персоналии
            </span>
        ),
        children: [
            { label: "Античные авторы", href: "/authors" },
            { label: "Переводчики", href: "/translators" },
        ],
    },

    {
        label: (
            <span className="flex items-center gap-2">
                <FaQuestion />
             FAQ
            </span>
        ),
        children: [
            { label: "О проекте", href: "/about" },
            { label: "Обратная связь", href: "/contact" },
            { label: "Правообладателям", href: "/copyright" },
        ],
    },
    {
        label: (
            <span className="flex items-center gap-2">
                <LuUserRound />
                Профиль
            </span>
        ),
        children: [
            { label: "Войти", href: "/login" },
            { label: "Регистрация", href: "/register" },
        ],
    },
];
