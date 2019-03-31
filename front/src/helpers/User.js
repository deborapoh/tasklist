class User {
  constructor(permission, userName) {
    this.permission = permission;
    this.userName = userName;
  }

  getPermission() {
    return this.permission;
  }

  setPermission(permission) {
    this.permission = permission;
  }

  getUserName() {
    return this.userName;
  }

  setUserName(name) {
    this.userName = name;
  }
}

export default new User(process.env.NODE_ENV, '');
