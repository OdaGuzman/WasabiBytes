import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const category1 = await prisma.category.create({ data: { name: 'Nigiri Sushi' } });
  const category2 = await prisma.category.create({ data: { name: 'Maki Rolls' } });
  const category3 = await prisma.category.create({ data: { name: 'Sashimi' } });
  const category4 = await prisma.category.create({ data: { name: 'Combo' } });
  const category5 = await prisma.category.create({ data: { name: 'Ramen' } });
  const category6 = await prisma.category.create({ data: { name: 'Beverages' } });
  const category7 = await prisma.category.create({ data: { name: 'Desserts' } });

  // Create items
  const item1 = await prisma.item.create({
    data: {
      name: 'Tokyo Sunset Roll',
      description: 'Delight in the artful harmony of succulent salmon, sweet mango, and creamy avocado, all rolled in a tapestry of sushi rice and nori.',
      price: 12.49,
      imageSrc: '/assets/sushicombo0.png',
      categories: {
        create: {
          categoryId: category4.id
        }
      },
    },
  });

  const item2 = await prisma.item.create({
    data: {
      name: 'Samurai Roll',
      description: 'This bold and hearty combo features a fusion of tender teriyaki chicken, savory beef bulgogi, and a sprinkle of fiery sriracha mayo, all wrapped in a warrior-worthy embrace of sushi rice and nori.',
      price: 12.99,
      imageSrc: '/assets/sushicombo1.png',
      categories: {
        createMany: {
          data: [
            { categoryId: category1.id },
            { categoryId: category4.id }
          ]
        }
      },
    },
  });

  const item3 = await prisma.item.create({
    data: {
      name: 'Harmony Roll',
      description: 'This sushi symphony blends delicate flavors of buttery yellowtail, sweet eel, and velvety cream cheese, skillfully rolled in a harmonious medley of sushi rice and nori.',
      price: 14.99,
      imageSrc: '/assets/sushicombo3.png',
      categories: {
        createMany: {
          data: [
            { categoryId: category1.id },
            { categoryId: category2.id }
          ]
        }
      },
    },
  });

  // Create a user
  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'hashed_password',
      phone: '123-456-7890',
      deliveryAddress: '123 West St, Vancouver, BC',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      password: 'hashed_password',
      phone: '123-555-7890',
      deliveryAddress: '123 West St, Vancouver, BC',
    },
  });

  // Create an order
  const order = await prisma.order.create({
    data: {
      userId: user1.id,
      restaurantId: 1, // You can set the restaurantId accordingly if you have multiple restaurants in the system
      orderDate: new Date(),
      orderTotal: 37.97, // Total of the order, you can calculate this based on the items' prices and quantities
      status: 'Completed', // You can set the order status as needed
      items: {
        createMany: {
          data: [
            { itemId: item1.id, quantity: 2 },
            { itemId: item2.id, quantity: 1 },
          ],
        },
      },
    },
    include: {
      items: true,
    },
  });

  const order2 = await prisma.order.create({
    data: {
      userId: user2.id,
      restaurantId: 1, // You can set the restaurantId accordingly if you have multiple restaurants in the system
      orderDate: new Date(),
      orderTotal: 40.97, // Total of the order, you can calculate this based on the items' prices and quantities
      status: 'Completed', // You can set the order status as needed
      items: {
        createMany: {
          data: [
            { itemId: item2.id, quantity: 2 },
            { itemId: item3.id, quantity: 1 },
          ],
        },
      },
    },
    include: {
      items: true,
    },
  });

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });