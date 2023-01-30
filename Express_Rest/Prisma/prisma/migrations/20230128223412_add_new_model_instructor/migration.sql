-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "instructorId" INTEGER;

-- CreateTable
CREATE TABLE "Instructor" (
    "Id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Instructor_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instructor_email_key" ON "Instructor"("email");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
