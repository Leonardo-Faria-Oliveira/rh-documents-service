-- AlterTable
ALTER TABLE "DocumentModels" ADD COLUMN "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "DocumentModels" ADD COLUMN "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP;
