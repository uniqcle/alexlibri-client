// prisma/seeds/periods.ts
import { PrismaClient } from "../../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

// Данные для заполнения: name, slug, order
const periods = [
    { name: "VIII в. до н.э.", slug: "viii-bc", order: 1 },
    { name: "VII в. до н.э.", slug: "vii-bc", order: 2 },
    { name: "VI в. до н.э.", slug: "vi-bc", order: 3 },
    { name: "V в. до н.э.", slug: "v-bc", order: 4 },
    { name: "IV в. до н.э.", slug: "iv-bc", order: 5 },
    { name: "III в. до н.э.", slug: "iii-bc", order: 6 },
    { name: "II в. до н.э.", slug: "ii-bc", order: 7 },
    { name: "I в. до н.э.", slug: "i-bc", order: 8 },
    { name: "I в. н.э.", slug: "i-ad", order: 9 },
    { name: "II в. н.э.", slug: "ii-ad", order: 10 },
    { name: "III в. н.э.", slug: "iii-ad", order: 11 },
];

async function main() {
    console.log("Начинаем заполнение периодов...");

    for (const period of periods) {
        const result = await prisma.period.upsert({
            where: { slug: period.slug },
            update: { name: period.name, order: period.order }, // если нашли — обновляем name и order
            create: period,
        });
        console.log(`Период "${result.name}" (order ${result.order}) готов.`);
    }

    console.log("Заполнение периодов завершено.");
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
