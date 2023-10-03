-- CreateTable
CREATE TABLE "GeneratedDocuments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "type" BOOLEAN NOT NULL DEFAULT true,
    "documentDate" DATETIME NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "employeeId" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "GeneratedDocuments_employeeId_idx" ON "GeneratedDocuments"("employeeId");
