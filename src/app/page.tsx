import { MainSlider } from "@components/MainSlider/MainSlider";

export default function HomePage() {
    return (
        <main className="main">
            <div className="main-container">
                <MainSlider title="Диалоги Платона" />
                <MainSlider title="Древнегреческая лирика" />
                <MainSlider title="Древнегреческие трагедии" />
                <MainSlider title="Древнеримская комедия" />
                <MainSlider title="Эпиграммы" />
                <MainSlider title="Философия стоицизма" />
                <MainSlider title="Оды Горация" />
                <MainSlider title="Античная история" />
            </div>
        </main>
    );
}
