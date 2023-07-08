export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "id",
      title: "id",
      type: "number",
    },
    {
      name: "name",
      title: "name",
      type: "string",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "price",
      title: "price",
      type: "number",
    },
    {
      name: "type",
      title: "type",
      type: "reference",
      to: [{ type: "productType" }],
    },
    {
      name: "quantity",
      title: "quantity",
      type: "number",
      default: 1,
    },
    {
      name: "images",
      title: "images",
      type: "array",
      of: [{ type: "file" }],
    },
    {
      name: "category",
      title: "category",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};
