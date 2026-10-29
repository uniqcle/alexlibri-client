import { SingleTextPage } from "@components/SingleTextPage/SingleTextPage";
// import { PaginationBar } from "@components/PaginationBar/PaginationBar";

export default function BookPage() {
	return (
        <main className="main">
            <div className="main-container">
                <SingleTextPage />
                {/* <PaginationBar /> */}
            </div>
        </main>
    );
}
