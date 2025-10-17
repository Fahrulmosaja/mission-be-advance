import { PORT } from "./utils/env";
import app from "./app";
import prisma from "./config/prisma";

app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log("🟢 Database connected");
    console.log(`🚀 Server running on port ${PORT}`);
  } catch (error) {
    console.error("🔴 Database connection failed:", error);
    process.exit(1);
  }
});
