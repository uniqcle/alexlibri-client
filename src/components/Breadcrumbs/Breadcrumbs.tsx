import { Fragment } from "react";
import Link from "next/link";
import { LuHouse } from "react-icons/lu";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@components/ui/breadcrumb";
import styles from "./Breadcrumbs.module.css";

export type BreadcrumbItemType = {
    label: string;
    href?: string;
    icon?: React.ReactNode;
};

type BreadcrumbsProps = {
    items?: BreadcrumbItemType[];
};

const defaultItems: BreadcrumbItemType[] = [
    { label: "Главная", href: "/", icon: <LuHouse /> },
    { label: "Гораций", href: "/components" },
    { label: "Оды" },
];

export function Breadcrumbs({ items = defaultItems }: BreadcrumbsProps) {
    return (
        <div className={styles.breadcrumbs}>
            <Breadcrumb>
                <BreadcrumbList className={styles.breadcrumbList}>
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <Fragment key={`${item.label}-${index}`}>
                                <BreadcrumbItem>
                                    {isLast ? (
                                        <BreadcrumbPage
                                            className={styles.breadcrumbPage}
                                        >
                                            {item.icon}
                                            {item.label}
                                        </BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink
                                            render={
                                                <Link
                                                    href={item.href ?? "#"}
                                                    className={
                                                        styles.breadcrumbLink
                                                    }
                                                >
                                                    {item.icon}
                                                    {item.label}
                                                </Link>
                                            }
                                        />
                                    )}
                                </BreadcrumbItem>

                                {!isLast && (
                                    <BreadcrumbSeparator
                                        className={styles.breadcrumbSeparator}
                                    />
                                )}
                            </Fragment>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}
