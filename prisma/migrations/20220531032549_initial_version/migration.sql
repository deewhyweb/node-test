-- CreateEnum
CREATE TYPE "EnumCardCardType" AS ENUM ('monster', 'hero');

-- CreateEnum
CREATE TYPE "EnumCardRarity" AS ENUM ('common', 'uncommon', 'rare', 'legendary');

-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "keycloakid" TEXT,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "roles" TEXT[],
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "cardImage" TEXT,
    "cardType" "EnumCardCardType",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "equippableModifier" JSONB,
    "equippedImage" TEXT,
    "flavorText" TEXT,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "nonEquippableModifier" JSONB,
    "rarity" "EnumCardRarity",
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "bothFeetEquipmentSlot" JSONB,
    "bothHandsEquipmentSlot" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "headEquipmentSlot" JSONB,
    "id" TEXT NOT NULL,
    "leftFootEquipmentSlot" JSONB,
    "leftHandEquipmentSlot" JSONB,
    "rightFootEquipmentSlot" JSONB,
    "rightHandEquipmentSlot" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpecialAbility" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "image" TEXT,
    "name" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpecialAbility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerCard" (
    "cardId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dungeonUsesRemaining" INTEGER,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayerCard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_keycloakid_key" ON "User"("keycloakid");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
