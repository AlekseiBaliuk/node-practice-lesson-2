const express = require("express");
const asyncHandler = require("express-async-handler");

const filmsRouter = express.Router();

const filmsController = require("../controllers/FilmsController");

// http://localhost:5000/api/v1/films

// Додати фільм

filmsRouter.post(
  "/films",
  (req, res, next) => {
    console.log("Joi validation");
    next();
  },
  asyncHandler(filmsController.add)
);

// Отримати всі фільми

filmsRouter.get("/films", asyncHandler(filmsController.getAll));

// Отримати один фільм

filmsRouter.get("/films/:id", asyncHandler(filmsController.getOne));

// Оновити фільми

filmsRouter.put("/films", asyncHandler(filmsController.updateFilm));

// Видалити фільми

filmsRouter.delete("/films", asyncHandler(filmsController.removeFilm));

module.exports = filmsRouter;
