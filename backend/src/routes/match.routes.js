"use strict";

// Importa el modulo 'express' para crear las rutas
import { Router } from "express";

/** Controlador de match */
import { getAllMatches, getMatches, msMatches } from "../controllers/match.controller.js";

/** Middlewares de autorización */
import { isAuthenticated } from "../middlewares/auth.middleware.js";

// Se realiza una instancia de express
const router = Router();

// Define las rutas para los matches
router.get("/", isAuthenticated, getAllMatches);
router.get("/:userId", isAuthenticated, getMatches);

export default router;
