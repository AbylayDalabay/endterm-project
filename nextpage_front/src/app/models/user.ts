// export class User {

//   id:number;
//   username : string;
//   password : string;

//   constructor(id: number) {
//           this.username = "";
//           this.password = "";
//           this.id = id
//   }
// }
export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}