import exports from "express";
import {
  createAccount,
  deleteAccount,
  getAllAccount,
  updateAccount,
} from "../services/accountsService";

const Controller = exports.Router();

Controller.get("/account", getAllAccount);
Controller.post("/account", createAccount);
Controller.patch("/account/:id", updateAccount);
Controller.delete("/account/:id", deleteAccount);

export default Controller;
