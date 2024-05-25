import { PORT } from "../config/env.config"

export const swaggerConfig = {
    openapi: "3.0.1",
    info: {
        title: "Blog Api",
        description: "A simple blog api that supports three main user types, READER, BLOGGER AND ADMIN"
    },
    servers: [
        {
            url: `http://localhost:${PORT}/api-docs`,
            description: "local server"
        }
    ],
    securitySchemes: {
        BearerAuth: {
            type: "http",
            scheme: "bearer"
        }
    }
}