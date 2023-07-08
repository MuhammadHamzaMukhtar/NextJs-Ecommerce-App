import { type SchemaTypeDefinition } from "sanity";
import { product } from "./product";
import { category } from "./category";
import { type } from "./type";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, type],
};
