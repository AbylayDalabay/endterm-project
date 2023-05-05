export class User {
        subscribe(arg0: (user: User) => void) {
          throw new Error('Method not implemented.');
        }
        id:number;
        username : string;
        password : string;

        constructor(id: number) {
                this.username = "";
                this.password = "";
                this.id = id
        }
}