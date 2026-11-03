// prisma/seeds/translators.ts
import { PrismaClient } from "../../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

// Примеры переводчиков (замените на реальные данные)
const translators = [
    {
        name: "Гнедич",
        fullName: "Николай Иванович Гнедич",
        dateLife: "1784–1833",
        shortText:
            "Русский поэт и переводчик, автор классического перевода «Илиады».",
        biographyHtml:
            "<p>Николай Иванович Гнедич (1784–1833) — русский поэт, переводчик. Наиболее известен переводом «Илиады» Гомера, над которым работал более 20 лет.</p>",
        slug: "gnezdich",
    },
    {
        name: "Жуковский",
        fullName: "Василий Андреевич Жуковский",
        dateLife: "1783–1852",
        shortText: "Русский поэт и переводчик, автор перевода «Одиссеи».",
        biographyHtml:
            "<p>Василий Андреевич Жуковский (1783–1852) — русский поэт, один из основоположников романтизма в русской поэзии. Перевёл «Одиссею» Гомера.</p>",
        slug: "zhukovskiy",
    },
    {
        name: "Гинзбург",
        fullName: "Лидия Яковлевна Гинзбург",
        dateLife: "1902–1990",
        shortText: "Русский литературовед и переводчик.",
        biographyHtml:
            "<p>Лидия Яковлевна Гинзбург (1902–1990) — русский литературовед, писательница, переводчик.</p>",
        slug: "ginzburg",
    },
];

async function main() {
    console.log("Начинаем заполнение переводчиков...");

    for (const translator of translators) {
        const result = await prisma.translator.upsert({
            where: { slug: translator.slug },
            update: {
                name: translator.name,
                fullName: translator.fullName,
                dateLife: translator.dateLife,
                shortText: translator.shortText,
                biographyHtml: translator.biographyHtml,
            },
            create: translator,
        });
        console.log(`Переводчик "${result.fullName}" (${result.slug}) готов.`);
    }

    console.log("Заполнение переводчиков завершено.");
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



	