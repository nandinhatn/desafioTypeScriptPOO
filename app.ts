import { CompanyAccount } from './class/CompanyAccount'
import {DioAccount} from './class/DioAccount'
import { EspecialAccount } from './class/EspecialAccount'
import { PeopleAccount } from './class/PeopleAccount'




/* const newAccount: Account = new Account('fernanda', 1) */

/* console.log(newAccount)
newAccount.deposit() */

const contaPeopleAccount :PeopleAccount = new PeopleAccount(1,'fernanda',10)
/* contaPeopleAccount.deposit() */
console.log(contaPeopleAccount)



/* console.log(contaPeopleAccount.getName())
contaPeopleAccount.deposit(100);
contaPeopleAccount.deposit(50);
contaPeopleAccount.deposit(10);
contaPeopleAccount.deposit(15);
contaPeopleAccount.getBalance();
contaPeopleAccount.whithdraw(100);
contaPeopleAccount.getBalance();
contaPeopleAccount.whithdraw(100); */


const companyAccount : CompanyAccount = new CompanyAccount('Dio', 20)
companyAccount.whithdraw(50)
companyAccount.deposit(100)
companyAccount.getBalance()
console.log(companyAccount)
companyAccount.getLoan(1000)

const especialcount : EspecialAccount = new EspecialAccount('fernandaespecial', 10)
especialcount.deposit(10)
especialcount.getBalance()