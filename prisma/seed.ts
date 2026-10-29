// prisma/seed.ts
import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, AuthorOrigin } from "../src/generated/prisma/client";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log("🌱 Заполняем авторов и книги...");

    // На случай повторного запуска: чистим в порядке, безопасном для FK
    await prisma.book.deleteMany();
    await prisma.author.deleteMany();

    const authors = [
        {
            slug: "gomer",
            name: "Гомер",
            fullName: "Ὅμηρος / Homerus",
            culture: AuthorOrigin.GREEK,
            birthDate: "-800", // условно VIII в. до н.э.
            photoUrl: null,
            biographyHtml:
                "<p>Легендарный древнегреческий поэт-сказитель, которому традиционно приписывают «Илиаду» и «Одиссею». О его жизни достоверных сведений нет — за право называться его родиной спорили семь городов.</p>",
            books: [
                { slug: "iliad", title: "Илиада" },
                { slug: "odyssey", title: "Одиссея" },
            ],
        },
        {
            slug: "sophocles",
            name: "Софокл",
            fullName: "Σοφοκλῆς",
            culture: AuthorOrigin.GREEK,
            birthDate: "-496",
            photoUrl: null,
            biographyHtml:
                "<p>Афинский драматург, один из трёх великих трагиков Древней Греции. Автор «Царя Эдипа» и «Антигоны»; реформатор трагедии — ввёл третьего актёра.</p>",
            books: [
                { slug: "oedipus-rex", title: "Царь Эдип" },
                { slug: "antigone", title: "Антигона" },
            ],
        },
        {
            slug: "plato",
            name: "Платон",
            fullName: "Πλάτων / Plato",
            culture: AuthorOrigin.GREEK,
            birthDate: "-427",
            photoUrl: null,
            biographyHtml:
                "<p>Древнегреческий философ, ученик Сократа и учитель Аристотеля. Основал Академию в Афинах. Его диалоги — фундамент западной философской традиции.</p>",
            books: [
                { slug: "republic", title: "Государство" },
                { slug: "symposium", title: "Пир" },
            ],
        },
        {
            slug: "vergil",
            name: "Вергилий",
            fullName: "Publius Vergilius Maro",
            culture: AuthorOrigin.ROMAN,
            birthDate: "-70",
            photoUrl: null,
            biographyHtml:
                "<p>Крупнейший поэт эпохи Августа. Автор «Энеиды» — национального эпоса Рима, а также «Буколик» и «Георгик».</p>",
            books: [
                { slug: "aeneid", title: "Энеида" },
                { slug: "georgics", title: "Георгики" },
            ],
        },
        {
            slug: "ovid",
            name: "Овидий",
            fullName: "Publius Ovidius Naso",
            culture: AuthorOrigin.ROMAN,
            birthDate: "-43",
            photoUrl: null,
            biographyHtml:
                "<p>Римский поэт, знаменитый прежде всего «Метаморфозами» — собранием мифов о превращениях. В конце жизни был сослан Августом в Томы на Чёрном море.</p>",
            books: [
                { slug: "metamorphoses", title: "Метаморфозы" },
                { slug: "ars-amatoria", title: "Наука любви" },
            ],
        },
    ];

    for (const { books, ...author } of authors) {
        await prisma.author.create({
            data: {
                ...author,
                books: { create: books },
            },
        });
    }

    const [authorsCount, booksCount] = await Promise.all([
        prisma.author.count(),
        prisma.book.count(),
    ]);

    console.log(`✅ Готово: ${authorsCount} авторов, ${booksCount} книг.`);
}

main()
    .catch((e) => {
        console.error("❌ Ошибка seed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        await pool.end();
    });
