import { Suspense } from "react";
import { AuthorPage } from "@components/AuthorPage/AuthorPage";

export default function AuthorByNamePage({
    params,
}: {
    params: Promise<{ author: string }>;
}) {
    return (
        <main className="main">
            <div className="main-container">
                <Suspense fallback={<div>Загрузка автора...</div>}>
                    <AuthorPage params={params} />
                </Suspense>
            </div>
        </main>
    );
}
