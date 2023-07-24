import { DioAccount } from "./DioAccount";

export class EspecialAccount extends DioAccount{

    constructor(name:string, accountNumber:number){
        super(name,accountNumber)
    }

    deposit = (value : number):void=>{
        this.setBalance(value + 10)
    }
}