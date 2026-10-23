"use client";

import Image from "next/image";
import { LuBookmark, LuLetterText, LuUserPen } from "react-icons/lu";
import img from "@assets/images/52536559.png";
import horace from "@assets/images/authors/horace.png";
import styles from "./SingleTextPage.module.css";
import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { PaginationList } from "../PaginationList/PaginationList";

export function SingleTextPage() {
    return (
        <div className={styles.page}>
            <Breadcrumbs />

            <div className={styles.image}>
                <Image
                    src={img}
                    alt="Иллюстрация к тексту"
                    width={700}
                    height={700}
                    style={{ width: "100%", height: "auto" }}
                    priority
                />
            </div>

            <div className={styles.panel}>
                <div className={styles.author}>
                    <Image
                        src={horace}
                        alt="Гораций"
                        width={44}
                        height={44}
                        className={styles.authorImage}
                    />
                    <div>
                        <div>Гораций</div>
                        <div>65 - 8 года до н. э.</div>
                    </div>
                </div>

                <div className={styles.functions}>
                    <div>
                        <LuUserPen />
                    </div>
                    <div>
                        <LuLetterText />
                    </div>
                    <div>
                        <LuBookmark />
                    </div>
                </div>
            </div>

            <div className="typeset typeset-text">
                <p>
                    В тех воздушных полях, помянутых Музой Марона, Миртовый где
                    оттеняет лес влюбленных безумных, Преданы страсти своей
                    героиды, и каждая явно Символ той смерти хранит, от которой
                    когда-то погибла.
                </p>
                <p>
                    Бродят они по великому лесу, при свете неверном, Посреди
                    тростниковых стволов, меж маков тяжелых, У безмолвных,
                    недвижных озер и ручьев без журчанья.
                </p>
                <p>
                    Бродят они по великому лесу, при свете неверном, Посреди
                    тростниковых стволов, меж маков тяжелых, У безмолвных,
                    недвижных озер и ручьев без журчанья.
                </p>
                <p>
                    Бродят они по великому лесу, при свете неверном, Посреди
                    тростниковых стволов, меж маков тяжелых, У безмолвных,
                    недвижных озер и ручьев без журчанья.
                </p>
                <p>
                    Бродят они по великому лесу, при свете неверном, Посреди
                    тростниковых стволов, меж маков тяжелых, У безмолвных,
                    недвижных озер и ручьев без журчанья.
                </p>
                <p>
                    Бродят они по великому лесу, при свете неверном, Посреди
                    тростниковых стволов, меж маков тяжелых, У безмолвных,
                    недвижных озер и ручьев без журчанья.
                </p>
                <p>
                    Бродят они по великому лесу, при свете неверном, Посреди
                    тростниковых стволов, меж маков тяжелых, У безмолвных,
                    недвижных озер и ручьев без журчанья.
                </p>
                <p>
                    Бродят они по великому лесу, при свете неверном, Посреди
                    тростниковых стволов, меж маков тяжелых, У безмолвных,
                    недвижных озер и ручьев без журчанья.
                </p>
                <p>
                    Бродят они по великому лесу, при свете неверном, Посреди
                    тростниковых стволов, меж маков тяжелых, У безмолвных,
                    недвижных озер и ручьев без журчанья.
                </p>
            </div>

            <PaginationList />
        </div>
    );
}
