import type { Request, Response } from "express";
import * as userService from "../services/user.service.js";

export const createUser = async (req: Request, res: Response) => {
  const { email, name } = req.body;
  const user = await userService.createUser(email, name);
  res.status(201).json(user);
};

export const getUsers = async (_: Request, res: Response) => {
  const users = await userService.getUsers();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await userService.getUserById(id);
  res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await userService.updateUser(id, req.body);
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.query.id);
  await userService.deleteUser(id);
  res.status(204).send();
};
