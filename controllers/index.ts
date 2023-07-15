import exports from "express";
import {
  createAccount,
  deleteAccount,
  getAllAccount,
  updateAccount,
} from "../services";

const Controller = exports.Router();

Controller.get("/", getAllAccount);
Controller.post("/", createAccount);
Controller.patch("/", updateAccount);
Controller.delete("/", deleteAccount);

export default Controller;
