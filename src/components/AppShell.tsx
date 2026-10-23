"use client";

import { Suspense } from "react";
import { useScrolled } from "@hooks/useScrolled";
import { Header } from "@components/Header";
import { LeftSidebar } from "@components/LeftSidebar";
import { RightSidebar } from "@components/RightSidebar";
import { Footer } from "@components/Footer";

export function AppShell({ children }: { children: React.ReactNode }) {
    const scrolled = useScrolled();

    return (
        <div className={`app-container ${scrolled ? "is-scrolled" : ""}`}>
            <Suspense
                fallback={<div style={{ height: "var(--header-height)" }} />}
            >
                <Header />
            </Suspense>
            <LeftSidebar />
            {children}
            <RightSidebar />
            <Footer />
        </div>
    );
}
