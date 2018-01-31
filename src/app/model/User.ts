

export class User{
  name:string;
  private isLogin:boolean
  constructor(){
    this.isLogin=false
  }
  getIsLogin(){
    return this.isLogin;
  }
  setIsLogin(){
    this.isLogin=true;
  }
}
