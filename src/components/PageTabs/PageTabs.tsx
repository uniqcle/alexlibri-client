"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import styles from "./PageTabs.module.css";

export type PageTab = {
    value: string;
    label: string;
    content: React.ReactNode;
};

type PageTabsProps = {
    defaultValue?: string;
    tabs: PageTab[];
    className?: string;
};

export function PageTabs({ defaultValue, tabs, className }: PageTabsProps) {
    const initial = defaultValue ?? tabs[0]?.value;

    return (
        <Tabs defaultValue={initial} className={className}>
            <TabsList className={styles.tabsList}>
                {tabs.map((tab) => (
                    <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className={styles.tabTrigger}
                    >
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>

            {tabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                    {tab.content}
                </TabsContent>
            ))}
        </Tabs>
    );
}
