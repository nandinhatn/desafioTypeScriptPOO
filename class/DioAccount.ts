export abstract class DioAccount{
  private readonly name:string
   private readonly accountNumber : number
   private  balance: number =0
   
    
    constructor(name:string,  accountNumber:number){
        this.name = name
        this. accountNumber =accountNumber
    }

    getName =(): string=>{
        return (`Seu nome é ${this.name}`)
    }

    deposit =(value:number):void=>{
        this.balance += value
        console.log(`Você depositou R$${value}`)
    }
    whithdraw  =(value:number):void=>{
        if(value<= this.balance){
            this.balance -=value
            console.log(`Você sacou R$ ${value}`)
        } else {
            console.log(`Seu saldo não é suficiente para esta operação`)
        }
       
    }
    getBalance = ():void=>{
        console.log(`Seu saldo é de R$${this.balance}`)
    }
    setBalance = (value:number):void=>{
        this.balance += value
    }
}