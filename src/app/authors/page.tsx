import { AuthorsList } from '@components/AuthorsList/AuthorsList';

// src/app/catalog/page.tsx
export default function AuthorsPage() {
    return (
        <main className="main">
            <div className="main-container ">

                <AuthorsList/>
            </div>
        </main>
    );
}
