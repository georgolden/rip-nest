-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_blogId_fkey";

-- AlterTable
ALTER TABLE "Article" ALTER COLUMN "blogId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE SET NULL ON UPDATE CASCADE;
