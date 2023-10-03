-- CreateTable
CREATE TABLE "DocumentModels" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "fields" TEXT NOT NULL,
    "digitalSignature" BOOLEAN NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "typeId" TEXT NOT NULL,
    CONSTRAINT "DocumentModels_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "DocumentTypes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DocumentTypes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);
