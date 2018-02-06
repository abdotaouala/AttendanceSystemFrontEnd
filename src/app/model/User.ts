

export class User{
  private name:string;
  private id;
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

  getId(){
    return this.id
  }
  setId(id){
    this.id=id;
  }
}
