import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function start() {
  const PORT = process.env.PORT || 3030;
  const app = await NestFactory.create(AppModule, {
    logger: ["debug", "error"],
  });
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT, () => {
    console.log(`Server starting to http://localhost:${PORT}`);
  });
}
start();
