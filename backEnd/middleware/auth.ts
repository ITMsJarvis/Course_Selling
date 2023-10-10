import { NextFunction,Request, Response } from "express";
const jwt = require("jsonwebtoken");
import dotenv  from "dotenv"
dotenv.config();
export const SECRET = process.env.SECRET;

export const authenticateJwt = (req: Request, res :Response, next :NextFunction) => {
  let { token } = req.headers;
  if (token) {
    jwt.verify(token, SECRET, (err: any, data:any) => {
      if (err) {
        return res.sendStatus(403);
      }
      if(typeof data == "string"){
        return res.sendStatus(403)    
        }
        if(!data){
          return res.sendStatus(403)
        }
      req.headers["data"] = data.username; 
      next();
    });
  } else {
    res.json({ message: "Error from Auth / Provide correct token" });
  }
};

