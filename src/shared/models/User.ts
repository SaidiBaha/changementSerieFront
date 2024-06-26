export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN',
    MANAGER='MANAGER',
    METHODE=' METHODE'
  }
  
  export enum Permission {
    ADMIN_READ = 'admin:read',
    ADMIN_UPDATE = 'admin:update',
    ADMIN_CREATE = 'admin:create',
    ADMIN_DELETE = 'admin:delete',

    MANAGER_READ = 'manager:read',
    MANAGER_UPDATE = 'manager:update',
    MANAGER_CREATE = 'manager:create',
    MANAGER_DELETE = 'manager:delete',


    METHODE_READ = 'methode:read',
    METHODE_UPDATE = 'methode:update',
    METHODE_CREATE = 'methode:create',
    METHODE_DELETE = 'methode:delete',



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
lastName: any;
    
  }