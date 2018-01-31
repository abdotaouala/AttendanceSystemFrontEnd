

export class User{
  private name:string;
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

  getName(){
    return this.name
  }
  setName(name){
    this.name=name;
  }
}
