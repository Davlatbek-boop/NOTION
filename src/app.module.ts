import { Module } from "@nestjs/common";
import { BlocksModule } from "./blocks/blocks.module";
import { TypesModule } from "./types/types.module";
import { PropertiesModule } from "./properties/properties.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { Type } from "./types/models/type.model";
import { Property } from "./properties/models/property.model";
import { Block } from "./blocks/models/block.model";
import { BlockPropertiesModule } from './block-properties/block-properties.module';
import { BlockProperty } from "./block-properties/models/block-property.model";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [Type, Property, Block, BlockProperty],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),

    BlocksModule,
    TypesModule,
    PropertiesModule,
    BlockPropertiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
