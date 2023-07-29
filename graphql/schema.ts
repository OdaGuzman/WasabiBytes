// graphql/schema.ts
import "./types/Item";
import { builder } from "./builder";


export const schema = builder.toSchema()