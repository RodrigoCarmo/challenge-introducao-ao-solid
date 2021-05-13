import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";


interface IRequest {
  user_id: string
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {

    const user = this.usersRepository.findById(user_id)

    if (user) {
      const turnUserAdmin = this.usersRepository.turnAdmin(user);

      return turnUserAdmin;

    }

    throw new Error("User does not exists");
  }
}

export { TurnUserAdminUseCase };
