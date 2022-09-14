export class User {

  id : number | undefined;
  username : string;
  name : string;
  email : string;
  password : string;
  lastLoginDate : Date | undefined;
  joinDate : Date | undefined;
  roles : [];
  isActive : boolean;
  isNotLocked : boolean;

  constructor() {
    this.username = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.roles = [];
    this.isActive = false;
    this.isNotLocked = false;
  }
}
