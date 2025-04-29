import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "../src/app.module";
import * as path from 'path'

describe("User (e2e)", () => {
  let app: INestApplication;
  let token: String;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    const response = await request(app.getHttpServer())
      .post("/admin/auth/sign-in")
      .send({
        email: "davlatbeksalimov@gmail.com",
        password: "12345",
      });
    token = response.body.token;
    console.log("token:", token);
  });

  it("/users (GET) --200 OK", () => {
    return request(app.getHttpServer())
      .get("/users")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("/users (GET) --> 401 ERROR", () => {
    return request(app.getHttpServer())
      .get("/users")
      .expect("Content-Type", /json/)
      .expect(401);
  });

//   it("/auth/sign-up (POST) --> 201", async () => {
//     const imagePath = path.join("C:", "Users", "ASUS-PC", "Pictures", "Screenshots", "rasm.png"); 
//     return request(app.getHttpServer())
//       .post("/user/auth/sign-up")
//       .set("Content-Type", "multipart/form-data")
//       .field("first_name", "Salimov")
//       .field("last_name", "Davlat")
//       .field("email", "salimovdavlat0526@gmail.com")
//       .field("hashed_password", "qwer")
//       .attach("image", imagePath) // "image" bu controller’dagi fayl nomi
//       .expect("Content-Type", /json/)
//       .expect(201);
//   });


//   it("/user/auth/sign-up (POST) --400", ()=>{
//     return request(app.getHttpServer())
//     .post("/user/auth/sign-up")
//       .set("Content-Type", "multipart/form-data")
//       .field("first_name", "Salimov")
//       .field("last_name", "Davlat")
//       .field("email", "salimovdavlat0526@gmail.com")
//       .field("hashed_password", "qwer")
//       .attach("image", "rasm.png") // "image" bu controller’dagi fayl nomi
//       .expect("Content-Type", /json/)
//       .expect(400);
//   })


  it("/users/2 (GET) --> 200 ",()=>{
    return request(app.getHttpServer())
    .get("/users/2")
    .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/)
    .expect(200)
  })

  
  it("/users/1 (GET) --> 401 ",()=>{
    return request(app.getHttpServer())
    .get("/users/1")
    // .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/)
    .expect(401)
  }) 

//   it("/users/3 (DELETE) --> 200 ",()=>{
//     return request(app.getHttpServer())
//     .delete("/users/3")
//     // .set("Authorization", `Bearer ${token}`)
//     .expect("Content-Type", /plain/)
//     .expect(1)
//   }) 
 
});
