
import img from "@/assets/images/52536559.png";
import { LuBookmark, LuLetterText, LuHeart, LuUserPen } from "react-icons/lu";
import styles from "./SingleTextPage.module.css";

import horace from "@/assets/images/authors/horace.png";

export function SingleTextPage() {
	return (
        <div className={styles.page}>
            <div className={styles.image}>
                <img src={img} alt="" />
            </div>

            <div className={styles.panel}>
                <div className={styles.author}>
                    <img src={horace} alt="" />
                    <div>
                        <div>Гораций</div>
                        <div>65 - 8 года до н. э.</div>
                    </div>
                </div>

                <div className={styles.functions}>
                    {/* <div>
                        <LuHeart />
                    </div> */}
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

            <div className={styles.content}>
                фывафываыфва sit amet consectetur adipisicing elit. Accusantium
                fugiat maiores, odit eius velit asperiores esse. Natus provident
                aspernatur in, dignissimos voluptate quia sint soluta eius
                deleniti. Odit, blanditiis praesentium. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Accusantium fugiat maiores,
                odit eius velit asperiores esse. Natus provident aspernatur in,
                dignissimos voluptate quia sint soluta eius deleniti. Odit,
                blanditiis praesentium. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Accusantium fugiat maiores, odit eius velit
                asperiores esse. Natus provident aspernatur in, dignissimos
                voluptate quia sint soluta eius deleniti. Odit, blanditiis
                praesentium. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Accusantium fugiat maiores, odit eius velit asperiores
                esse. Natus provident aspernatur in, dignissimos voluptate quia
                sint soluta eius deleniti. Odit, blanditiis praesentium. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Accusantium
                fugiat maiores, odit eius velit asperiores esse. Natus provident
                aspernatur in, dignissimos voluptate quia sint soluta eius
                deleniti. Odit, blanditiis praesentium. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Accusantium fugiat maiores,
                odit eius velit asperiores esse. Natus provident aspernatur in,
                dignissimos voluptate quia sint soluta eius deleniti. Odit,
                blanditiis praesentium. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Accusantium fugiat maiores, odit eius velit
                asperiores esse. Natus provident aspernatur in, dignissimos
                voluptate quia sint soluta eius deleniti. Odit, blanditiis
                praesentium.
            </div>
        </div>
    );
}