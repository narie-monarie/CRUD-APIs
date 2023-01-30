-- CreateTable
CREATE TABLE "Course" (
    "Id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "duration" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("Id")
);
