import {
    LuHouse,
    LuSearch,
    LuHeadphones,
    LuBookmark,
    LuBookOpen,
    LuLandmark,
} from "react-icons/lu";
import { GrCatalog } from "react-icons/gr";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div>
                    <div className="is-active">
                        <LuLandmark />
                        <span>Главная</span>
                    </div>
                </div>
                <div>
                    <GrCatalog />
                    <span>Каталог</span>
                </div>
                <div>
                    <LuSearch />
                    <span>Авторы</span>
                </div>
                <div>
                    <LuHeadphones />
                    <span>Аудиокниги</span>
                </div>
                <div>
                    <LuBookmark />
                    <span>Мои свитки</span>
                </div>
                {/* <div>
                        <LuUser />
                        <span>Профиль</span>
                    </div> */}
            </div>
        </footer>
    );
}
