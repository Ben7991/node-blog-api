import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swagger from "swagger-ui-express";

dotenv.config();

import { PORT } from "./config/env.config";
import { swaggerConfig } from "./swagger/config.swagger";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swagger.serve ,swagger.setup(swaggerConfig));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Api docs running at http://localhost:${PORT}/api-docs`);
});

