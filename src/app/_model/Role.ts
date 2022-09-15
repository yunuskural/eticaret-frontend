export class Role {

  id: number | undefined;
  roleName: string;
  authorities : [];

  constructor() {
    this.roleName = '';
    this.authorities = [];
  }
}
