/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Made the column `authorId` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_authorId_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL,
ALTER COLUMN "authorId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Book_slug_key" ON "Book"("slug");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
