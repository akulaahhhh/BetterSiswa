-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'STUDENT');

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
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" "Role" NOT NULL DEFAULT 'STUDENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "userId" TEXT NOT NULL,
    "age" INTEGER,
    "state" "State",
    "ethnicGroup" "EthnicGroup",
    "householdIncome" "HouseholdIncome",
    "incomeTotal" INTEGER,
    "studyLevel" "StudyLevel",
    "preferredUni" "PreferredUni"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Admin" (
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Moderator" (
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Moderator_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Moderator" ADD CONSTRAINT "Moderator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Student"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
