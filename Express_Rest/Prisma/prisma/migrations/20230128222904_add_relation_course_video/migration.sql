-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "courseId" INTEGER;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
