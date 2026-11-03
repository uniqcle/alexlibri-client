// prisma/seed.ts
import { PrismaClient } from "../../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config"; // чтобы process.env.DATABASE_URL был доступен

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
     console.log(
         "DATABASE_URL:",
         process.env.DATABASE_URL ? "загружен" : "НЕ НАЙДЕН",
     );

    const sections = [
        { name: "Греческий", slug: "greek" },
        { name: "Римский", slug: "roman" },
    ];

    for (const section of sections) {
        const result = await prisma.section.upsert({
            where: { slug: section.slug },
            update: {},
            create: section,
        });
        console.log(`Раздел "${result.name}" (${result.slug}) готов.`);
    }

    console.log("Заполнение разделов завершено.");
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
