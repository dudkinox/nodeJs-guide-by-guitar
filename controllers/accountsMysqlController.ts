import exports from "express";
import {
  createAccount,
  deleteAccount,
  getAllAccount,
  updateAccount,
} from "../services/accounts-mysql";

const ControllerMysql = exports.Router();

ControllerMysql.get("/account", getAllAccount);
ControllerMysql.post("/account", createAccount);
ControllerMysql.patch("/account/:id", updateAccount);
ControllerMysql.delete("/account/:id", deleteAccount);

export default ControllerMysql;
