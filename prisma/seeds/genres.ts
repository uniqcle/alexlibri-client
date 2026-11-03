// prisma/seeds/genres.ts
import { PrismaClient } from "../../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

// Жанры: name (как в списке) + slug (латиница для URL и connect)
// «История» встречалась дважды — оставили один раз.
const genres = [
    { name: "Поэзия", slug: "poeziya" },
    { name: "Эпос", slug: "epos" },
    { name: "Философия", slug: "filosofiya" },
    { name: "Трагедия", slug: "tragediya" },
    { name: "История", slug: "istoriya" },
    { name: "Комедия", slug: "komediya" },
    { name: "Сатира", slug: "satira" },
    { name: "Лирика", slug: "lirika" },
    { name: "Риторика", slug: "ritorika" },
    { name: "Политика", slug: "politika" },
    { name: "Эпистолярный", slug: "epistolyarnyy" },
    { name: "Трактаты", slug: "traktaty" },
    { name: "Диалог", slug: "dialog" },
    { name: "Сентенции", slug: "sententsii" },
];

async function main() {
    console.log("Начинаем заполнение жанров...");

    for (const genre of genres) {
        const result = await prisma.genre.upsert({
            where: { slug: genre.slug },
            update: { name: genre.name },
            create: genre,
        });
        console.log(`Жанр "${result.name}" (${result.slug}) готов.`);
    }

    console.log("Заполнение жанров завершено.");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
