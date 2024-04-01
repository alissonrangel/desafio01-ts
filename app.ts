import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAccount } from './class/NewAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Alisson', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
console.log(peopleAccount.getBalanceString());
peopleAccount.withdraw(100)
console.log(peopleAccount.getBalanceString());
peopleAccount.withdraw(100)
console.log(peopleAccount.getBalanceString());

console.log("\nXXXXXXXXXXXXXXXXXXXXXXX" + "\n");

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
console.log();
companyAccount.deposit(100)
console.log(companyAccount.getBalanceString());
companyAccount.withdraw(100)
console.log(companyAccount.getBalanceString());
companyAccount.withdraw(100)
console.log(companyAccount.getBalanceString());
companyAccount.getLoan(300)
console.log(companyAccount.getBalanceString());

const newAccount: NewAccount = new NewAccount('Rangel', 100)
console.log(newAccount)
console.log();
newAccount.deposit(100)
console.log(newAccount.getBalanceString());
newAccount.withdraw(100)
console.log(newAccount.getBalanceString());
newAccount.withdraw(10)
console.log(newAccount.getBalanceString());
newAccount.withdraw(100)
console.log(newAccount.getBalanceString());

newAccount.setStatus(false)
newAccount.withdraw(100)