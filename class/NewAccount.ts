import { DioAccount } from "./DioAccount"

export class NewAccount extends DioAccount{

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)    
  }

  deposit = (value: number): void => {        
    this.setBalance(this.getBalance() + value + 10)
    console.log(this.getName() + ' depositou: R$ ' + (value + 10))
  }
}
