import {
  JsonController,
  Body,
  Post,
} from "routing-controllers";
import { CreateUserApplication } from "../../../application/create-user";
import { Service ,Container} from "typedi";

class UserDTO {
  username: string;
}

@Service()
@JsonController()
class UserController {
  constructor(private createUserApplication: CreateUserApplication) {
   this.createUserApplication = Container.get(CreateUserApplication)
  }
  @Post("/user")
  async createUser(@Body() body: UserDTO) {
    const rs = await this.createUserApplication.execute(body.username);
    return { username: rs };
  }
}

export {UserController}

