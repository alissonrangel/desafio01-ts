import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {    
    if (this.getStatus()){
      this.setBalance(this.getBalance() + value)
      console.log(this.getName() + ' pegou um empréstimo de R$ ' + value)
    } else {
      console.log('Conta inválida!')      
    }        
  }
}
