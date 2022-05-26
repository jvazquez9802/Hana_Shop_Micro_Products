import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectWithDataBase } from "./db";
import { factoryLogger } from "./helpers/logger";

const server: Express = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

dotenv.config();

const logger = factoryLogger({ _caller: "set_up_information" });
const port: string = process.env.HANA_INIT_PORT! || "3002";

server.get("/", (req: Request, res: Response) => {
  res.send("Hana Shop MICROSERVICE PRODUCTS");
});

connectWithDataBase(process.env.HANA_MONGO_CONNECTION!)
  .then(async () => {
    logger.info(`Successfully connected to MongoDB`);
    server.listen(port, () => {
      logger.info(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    });
  })
  .catch((error) => {
    logger.error("Error when trying to connect to MongoDB", error);
  });
