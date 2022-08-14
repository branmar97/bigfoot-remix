import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getSightings().map((sighting) => {
      return db.sighting.create({ data: sighting });
    })
  );
}

seed();

function getSightings() {

  return [
    {
        occurence: new Date(),
        city: "Richmond",
        state: "Virginia",
        vicinity: "The woods I guess.",
        conditions: "Cold, rainy, and dark.",
        witnesses: 2,
        evidence: "Huge footprints. About 16 inches in length and 6 inches wide.",
        details: "Saw bigfoot walking in the woods."
    },
    {
        occurence: new Date(),
        city: "Richmond",
        state: "Virginia",
        vicinity: "The woods I guess.",
        conditions: "Cold, rainy, and dark.",
        witnesses: 2,
        evidence: "Huge footprints. About 16 inches in length and 6 inches wide.",
        details: "Saw bigfoot walking in the woods."
    },
  ];
}