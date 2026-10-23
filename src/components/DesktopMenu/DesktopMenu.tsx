"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { menuItems } from "@/config/menu";
import styles from "./DesktopMenu.module.css";

function DesktopMenuInner() {
    const pathname = usePathname();

    const isActive = (href?: string) => {
        if (!href) return false;
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <div className={styles.menu}>
            <NavigationMenu>
                <NavigationMenuList>
                    {menuItems
                        .filter((item) => !item.hideOnDesktop)
                        .map((item, index) =>
                            item.children ? (
                                <NavigationMenuItem
                                    key={item.href ?? `item-${index}`}
                                >
                                    <NavigationMenuTrigger>
                                        {item.label}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul>
                                            {item.children.map(
                                                (child, childIndex) => (
                                                    <li
                                                        key={
                                                            child.href ??
                                                            `child-${childIndex}`
                                                        }
                                                    >
                                                        <NavigationMenuLink
                                                            render={
                                                                <Link
                                                                    href={
                                                                        child.href ??
                                                                        "#"
                                                                    }
                                                                >
                                                                    {
                                                                        child.label
                                                                    }
                                                                </Link>
                                                            }
                                                        />
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ) : (
                                <NavigationMenuItem
                                    key={item.href ?? `item-${index}`}
                                >
                                    <NavigationMenuLink
                                        render={
                                            <Link href={item.href ?? "#"}>
                                                {item.label}
                                            </Link>
                                        }
                                    />
                                </NavigationMenuItem>
                            ),
                        )}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

export function DesktopMenu() {
    return (
        <Suspense fallback={null}>
            <DesktopMenuInner />
        </Suspense>
    );
}
