// graphql/builder.ts


// 1.
import SchemaBuilder from "@pothos/core";
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import prisma from "../lib/prisma";
import { createContext } from "./context";


// 2.
export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes,
  Context: ReturnType<typeof createContext>,
}>({
  // 3.
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  }
})
// 4.
builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});
