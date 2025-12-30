// import { prisma } from './dbConfig/prisma.js'

// async function main() {
//   // Create a new user with a post
//   const user = await prisma.user.create({
//     data: {
//       name: 'bibek',
//       email: 'bibek@prisma.io',
//       posts: {
//         create: {
//           title: 'Hello World 2',
//           content: 'This is my 2 post!',
//           published: true,
//         },
//       },
//     },
//     include: {
//       posts: true,
//     },
//   })
//   console.log('Created user:', user)

//   // Fetch all users with their posts
//   const allUsers = await prisma.user.findMany({
//     include: {
//       posts: true,
//     },
//   })
//   console.log('All users:', JSON.stringify(allUsers, null, 2))
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })



// // async function deleteUser() {
// //   const deletedUser = await prisma.$transaction([
// //   prisma.post.deleteMany({ where: { authorId: 2 } }),
// //   prisma.user.delete({ where: { id: 2 } }),
// // ]);


// //   console.log(deletedUser);
// // }

// // deleteUser();

import type{Express,Request,Response} from "express";
import express from "express";
import userRoutes from "./routes/user.routes.js";

const app: Express = express();

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the User Management API");
});
app.use("/api/users", userRoutes);

export default app;




