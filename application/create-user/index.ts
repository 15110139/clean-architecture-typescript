import { Service} from "typedi";

@Service() 
  class CreateUserApplication {
   async execute(username:string):Promise<string>{
     console.log("Create new user with: ",username)
    return  new Promise((resolve,rejects)=>{
      resolve(username)
    })
   }
}  

export {CreateUserApplication}