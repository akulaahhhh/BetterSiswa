-- CreateEnum
CREATE TYPE "EthnicGroup" AS ENUM ('MALAY', 'CHINESE', 'INDIAN', 'OTHERS');

-- CreateEnum
CREATE TYPE "State" AS ENUM ('JOHOR', 'KEDAH', 'KELANTAN', 'MELAKA', 'NEGERI_SEMBILAN', 'PAHANG', 'PERAK', 'PERLIS', 'PULAU_PINANG', 'SABAH', 'SARAWAK', 'SELANGOR', 'TERENGGANU', 'WP_KUALA_LUMPUR', 'WP_LABUAN', 'WP_PUTRAJAYA');

-- CreateEnum
CREATE TYPE "HouseholdIncome" AS ENUM ('B40', 'M40', 'T20');

-- CreateEnum
CREATE TYPE "StudyLevel" AS ENUM ('SPM', 'DIPLOMA', 'MATRIKULASI', 'FOUNDATION');

-- CreateEnum
CREATE TYPE "PreferredUni" AS ENUM ('IPTA', 'IPTS', 'OVERSEAS');

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "state" "State" NOT NULL,
    "ethnicGroup" "EthnicGroup" NOT NULL,
    "householdIncome" "HouseholdIncome" NOT NULL,
    "incomeTotal" INTEGER NOT NULL,
    "studyLevel" "StudyLevel" NOT NULL,
    "preferredUni" "PreferredUni"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");
