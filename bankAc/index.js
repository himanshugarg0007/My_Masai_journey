function bankaccount(accountNumber,name,type, balance){
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.isActive = true;
}

bankaccount.prototype.deposit = function(amount){
    if(amount>0){
        this.balance+=amount;
        console.log(`deposited ${amount}. New balance ${this.balance}`);
    }
    else{
        console.log("Invalid value");
    }
}


bankaccount.prototype.withdraw = function(amount){
    if(this.balance>=amount && amount>0 && this.isActive==true){
        this.balance-=amount;
        console.log(`withdrawn ${amount}. New balance ${this.balance}`);
    }
    else {
        console.log("insufficient balance");
    }
}


bankaccount.prototype.checkbalance = function(){
    console.log(`Your account balance is = ${this.balance}`)
}

bankaccount.prototype.isActive = function(){
    if(this.isActive==true){
        console.log("Your account is Active");
    }
    else{
        console.log("Your account is Not Active");
    }
}

let account1 = new bankaccount(1,"hunny", "savings", 1000);
let account2 = new bankaccount(2,"tanu", "savings", 1500);

account1.deposit(4000);
account2.deposit(2000);
account1.withdraw(1000);
account2.withdraw(500);

account1.checkbalance()

console.log(account1);
console.log(account2);

