import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    const id = String(user_id)

    try {
      const user = this.listAllUsersUseCase.execute({ user_id: id })

      return response.status(201).json(user)
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }
}

export { ListAllUsersController };
