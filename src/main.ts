import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  const PORT = process.env.PORT || 3030;
  const app = await NestFactory.create(AppModule, {
    logger: ["debug", "error"],
  });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle("Notion project")
    .setDescription("NOTION REST API")
    .setVersion("1.0")
    .addTag("NestJS", "Validation")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("notion", app, document);

  await app.listen(PORT, () => {
    console.log(`Server starting to http://localhost:${PORT}`);
  });
}
start();
