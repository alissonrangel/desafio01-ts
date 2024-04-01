export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  setBalance = (value: number): void => {
    this.balance  = value
    console.log('Saldo alterado!')
  }

  getBalance = (): number => {
    return this.balance
  }

  getBalanceString = (): string => {
    return "Saldo atual de " + this.name + " é: R$ " + this.balance + "\n"
  }

  setStatus = (status: boolean): void => {
    this.status = status
    console.log('Status alterado com sucesso!')
  }

  getStatus = (): boolean => {
    return this.status
  }

  deposit = (value: number): void => {        
    this.balance += value
    console.log(this.name + ' depositou R$ ' + value)    
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()) {
      if (this.balance >= value){
        this.balance -= value
        console.log(this.name + ' sacou R$ ' + value)
      } else{
        console.log('Conta com saldo insuficiente!')
      }
    }
    //console.log('Voce sacou')
  }

  // getBalance = (): void => {
  //   console.log(this.balance)
  // }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
