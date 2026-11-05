// prisma/seeds/translators.ts
import { PrismaClient } from "../../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
// prisma/seeds/translators.ts
import { readFileSync } from "node:fs";
import { join } from "node:path";

const BIO_DIR = join(__dirname, "bio_translators");

function loadBiography(slug: string): string {
    return readFileSync(join(BIO_DIR, `${slug}.html.txt`), "utf-8");
}
 

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

// Примеры переводчиков (замените на реальные данные)
const translators = [
    {
        name: "Иванов",
        fullName: "Вячеслав Иванович Иванов",
        dateLife: "1866–1949",
        shortText:
            "Русский поэт-символист, философ и филолог-классик. Переводил древнегреческую трагедию (Эсхил, Софокл, Еврипид), комедии Аристофана, лирику Сапфо и Алкея. Один из крупнейших переводчиков и знатоков античности в русской культуре.",
        biographyHtml: loadBiography("ivanov"),
        slug: "ivanov",
        photo: "ivanov",
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



	