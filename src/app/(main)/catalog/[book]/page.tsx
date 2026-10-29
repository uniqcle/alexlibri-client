import { Suspense } from "react";
import { TitleBookPage } from "@components/TitleBookPage/TitleBookPage";

export default function CatalogBook() {
	return (
		<main className="main">
			<div className="main-container">
				<Suspense fallback={<div>Загрузка книги...</div>}>
					<TitleBookPage/>
				</Suspense>
			</div>
		</main>
	);
}
