"use client";

import Link from 'next/link'
import { DesktopMenu } from "@components/DesktopMenu/DesktopMenu";
import { MobileMenu } from "@components/MobileMenu/MobileMenu";

import {
    LuAlignJustify,
    LuBookOpen,
    LuUser,
    LuInfo,
    LuUsers,
} from "react-icons/lu";

import Image from "next/image"; // 👈 вместо <img>
import logo from "@assets/images/logo/logo.jpg";

export function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link href="/">
                    <Image
                        src={logo}
                        className="logo-image"
                        alt="Логотип"
                        width={80}  
                        height={80}
                        priority // 👈 логотип грузится сразу, без lazy-load
                    />
                </Link>

                <div>
                    <div className="main-logo">Свитки из Александрии</div>
                    <div className="sub-logo text-2xl">
                        <span>Античная философия</span>
                    </div>
                </div>
            </div>

            <div className="menu">
                <DesktopMenu />
            </div>

            <div className="mobile_menu"><MobileMenu /></div>
        </header>
    );
}
