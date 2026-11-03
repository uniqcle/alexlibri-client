-- CreateTable
CREATE TABLE "Translator" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "fullName" TEXT NOT NULL,
    "dateLife" TEXT,
    "shortText" TEXT,
    "biographyHtml" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Translator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Translator_slug_key" ON "Translator"("slug");
