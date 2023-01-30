-- CreateTable
CREATE TABLE "Video" (
    "Id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("Id")
);
