console.log("Завдання перше");
class Client {
    constructor(FirstNAme, LastName, Balance){
        this.FirstNAme = FirstNAme;
        this.LastName = LastName;
        this.Balance = Balance;
    }
    full_name (){
        return `${this.FirstNAme} ${this.LastName}`
    }
    get Balance() {
        return this._Balance
    }
    set Balance(newBalance) {
        this._Balance = newBalance;
    }
}

const newUser = new Client ("Володимир", "Володимер", 1000);

const full = newUser.full_name();
console.log(full);

const balance_user = newUser.Balance

console.log(balance_user);

Client.Balance = 500;

const newBalanceUser = Client.Balance;

console.log(newBalanceUser);