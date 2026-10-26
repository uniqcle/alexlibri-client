// prisma/seed.ts
import { PrismaClient } from "../src/generated/prisma/client";

import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });



async function main() {
    // Автор
    const homer = await prisma.author.upsert({
        where: { slug: "homer" },
        update: {},
        create: {
            slug: "homer",
            name: "Гомер",
            fullName: "Ὅμηρος",
            culture: "GREEK",
            birthDate: "ок. VIII в. до н. э.",
            biographyHtml: "<p>Легендарный древнегреческий поэт-сказитель.</p>",
        },
    });

    // Книга
    await prisma.book.upsert({
        where: { slug: "iliad" },
        update: {},
        create: {
            slug: "iliad",
            title: "Илиада",
            authorId: homer.id,
        },
    });

    // Римский автор + книга — чтобы проверить фильтр GREEK/ROMAN
    const cicero = await prisma.author.upsert({
        where: { slug: "cicero" },
        update: {},
        create: {
            slug: "cicero",
            name: "Цицерон",
            fullName: "Marcus Tullius Cicero",
            culture: "ROMAN",
            birthDate: "106–43 до н. э.",
            biographyHtml: "<p>Римский оратор и философ.</p>",
        },
    });

    await prisma.book.upsert({
        where: { slug: "de-officiis" },
        update: {},
        create: {
            slug: "de-officiis",
            title: "Об обязанностях",
            authorId: cicero.id,
        },
    });

    console.log("Seed OK");
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
