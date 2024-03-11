export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN',
    MANAGER='MANAGER'
  }
  
  export enum Permission {
    ADMIN_READ = 'admin:read',
    ADMIN_UPDATE = 'admin:update',
    ADMIN_CREATE = 'admin:create',
    ADMIN_DELETE = 'admin:delete',
    USER_READ = 'user:read'
  }
  
  export class User {
    idDto!: number;
    matriculeDto!:string;
    firstNameDto!: string;
    lastNameDto!: string;
    emailDto!: string;
    passwordDto!: string;
    loginstatusDto!: string;
    roleDto!: Role;
    
  }