import { defineDb, defineTable, column } from "astro:db";

const Services = defineTable({
  columns: {
    completeName: column.text(),
    contact: column.number(),
    service: column.text(),
    date: column.date(),
    address: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Services },
});
