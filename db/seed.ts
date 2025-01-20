import { db, Services } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Services).values([
    {
      completeName: "Jeronimo Mayorca",
      contact: 3022719598,
      service: "ram_upgrade",
      date: new Date("2025-01-20"),
      address: "calle 63 n esquina de la glorieta",
    },
  ]);
}
