import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import {UserController} from "./controller/user.controller";

const PORT :number= 3000
// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
   controllers: [UserController] // we specify controllers we want to use
});

// run express application on port 3000
console.log("Server start port",PORT)
app.listen(PORT);