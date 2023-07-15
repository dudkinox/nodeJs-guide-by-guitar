import { Request, Response } from "express";
import firebase from "../config/firebase";

const firestore = firebase.firestore();

export const getAllAccount = async (req: Request, res: Response) => {
  try {
    const account = firestore.collection("account");
    const data = await account.get();
    const response = new Array();

    data.forEach((doc) => {
      response.push(doc.id);
    });

    return res.status(200).json({
      status: {
        code: 200,
        message: "success",
        desecration: "get all account success",
      },
      data: response,
    });
  } catch (e: any) {
    return res.status(400).json({
      status: {
        code: 400,
        message: e,
        desecration: "Bad Request",
      },
      data: null,
    });
  }
};

export const createAccount = async (req: Request, res: Response) => {
  console.log(`createAccount start time ${new Date().getTime()}`);

  try {
    const data = req.body;

    // await firestore.collection("account").doc().set(data);
    return res.status(200).json({
      status: {
        code: 200,
        message: "success",
        desecration: "create account success",
      },
      data: null,
    });
  } catch (e: any) {
    return res.status(400).json({
      status: {
        code: 400,
        message: e,
        desecration: "Bad Request",
      },
      data: null,
    });
  }
};

export const updateAccount = async (req: Request, res: Response) => {
  return res.status(200).json({
    message: "test",
  });
};

export const deleteAccount = async (req: Request, res: Response) => {
  return res.status(200).json({
    message: "test",
  });
};
