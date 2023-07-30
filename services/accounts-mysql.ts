import { Request, Response } from "express";
import AccountResponse from "../models/response/accountResponse";
import dbMysql from "../config/mysql";

export const getAllAccount = async (req: Request, res: Response) => {
  console.log(`getAllAccount start time ${new Date().toISOString()}`);

  try {
    dbMysql.query("SELECT * FROM account", (err: any, result) => {
      if (err) throw err;

      const response: AccountResponse[] = [];

      result.forEach((doc: any) => {
        console.log(doc.NAME);

        response.push({
          id: doc.ID,
          name: doc.NAME,
        });
      });

      return res.status(200).json({
        status: {
          code: 200,
          message: "success",
          description: "get all account success",
        },
        data: response,
      });
    });
  } catch (e: any) {
    return res.status(400).json({
      status: {
        code: 400,
        message: e,
        description: "Bad Request",
      },
      data: null,
    });
  }
};

export const createAccount = async (req: Request, res: Response) => {
  console.log(`createAccount start time ${new Date().toISOString()}`);

  try {
    const data = req.body;

    // await accountCollection.doc().set(data);

    return res.status(200).json({
      status: {
        code: 200,
        message: "success",
        description: "create account success",
      },
      data: null,
    });
  } catch (e: any) {
    return res.status(400).json({
      status: {
        code: 400,
        message: e,
        description: "Bad Request",
      },
      data: null,
    });
  }
};

export const updateAccount = async (req: Request, res: Response) => {
  console.log(`updateAccount start time ${new Date().toISOString()}`);

  try {
    const data = req.body;
    const id = req.params.id;

    // await accountCollection.doc(id).update(data);

    return res.status(200).json({
      status: {
        code: 200,
        message: "success",
        description: "update account success",
      },
      data: {
        timestamp: new Date().toISOString(),
      },
    });
  } catch (e: any) {
    return res.status(400).json({
      status: {
        code: 400,
        message: e,
        description: "Bad Request",
      },
      data: null,
    });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  console.log(`deleteAccount start time ${new Date().toISOString()}`);

  try {
    const id = req.params.id;

    // await accountCollection.doc(id).delete();

    return res.status(200).json({
      status: {
        code: 200,
        message: "success",
        description: "delete account success",
      },
      data: {
        timestamp: new Date().toISOString(),
      },
    });
  } catch (e: any) {
    return res.status(400).json({
      status: {
        code: 400,
        message: e,
        description: "Bad Request",
      },
      data: null,
    });
  }
};
