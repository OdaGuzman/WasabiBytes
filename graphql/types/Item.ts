// graphql/types/Item.ts


import { builder } from "../builder";


builder.prismaObject('Item', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    description: t.exposeString('description'),
    price: t.exposeInt('price'),
    imageSrc: t.exposeString('imageSrc'),
    category: t.exposeString('category')
  })
})


// 1.
builder.queryField("items", (t) =>
  // 2.
  t.prismaField({
    // 3.
    type: ['Item'],
    // 4.
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.item.findMany({ ...query })
  })
)




builder.queryField("itemsByCategory", (t) =>
  t.prismaField({
    type: ['Item'],
    args: {
      category: t.arg.string(),
    },
    resolve: (query, _parent, args, _ctx, _info) => {
      const { category } = args;
      // Add filtering by category if it's provided
      if (category) {
        return prisma.item.findMany({
          ...query,
          where: {
            category: {
              equals: category,
            },
          },
        });
      }


      // If no category is provided, return all items
      return prisma.item.findMany({ ...query });
    },
  })
);


