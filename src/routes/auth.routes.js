import express from "express"
import { login } from "../controllers/auth.controllers.js"

const routes = express.Router()

// Endpoint: /api/v1/login
routes.post("/login", login)

export default routes;