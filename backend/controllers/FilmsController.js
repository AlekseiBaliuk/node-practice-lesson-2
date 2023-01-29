const filmsModel = require("../models/filmsModel");
const { isValidObjectId } = require("mongoose");

class FilmsController {
  add = async (req, res) => {
    const { title, year } = req.body;
    if (!title || !year) {
      res.status(400);
      throw new Error("Please provide all required fields");
    }

    const film = await filmsModel.create({ ...req.body });
    if (!film) {
      res.status(400);
      throw new Error("Unable to save to database");
    }

    return res.status(201).json({
      code: 201,
      message: "Success",
      data: film,
    });
  };

  getAll = async (req, res) => {
    const films = await filmsModel.find();
    if (!films) {
      res.status(400);
      throw new Error("Unable to get data");
    }

    return res.status(200).json({
      code: 200,
      message: "Success",
      data: films,
      qty: films.length,
    });
  };

  getOne = async (req, res) => {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      res.status(400);
      throw new Error("Invalid id");
    }

    const film = await filmsModel.findById(id);
    if (!film) {
      res.status(400);
      throw new Error(`Not found by id: ${id}`);
    }

    return res.status(200).json({
      code: 200,
      message: "Success",
      data: film,
    });
  };

  updateFilm = (req, res) => {
    res.send("updateFilm");
  };

  removeFilm = (req, res) => {
    res.send("removeFilm");
  };
}

module.exports = new FilmsController();
