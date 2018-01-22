//Below is my interpretation of the Builder pattern

function Account() {
    this.setOwner = function(owner) {
        this.owner = owner;
    }

    this.getOwner = function() {
        return this.owner;
    }

    this.setBalance = function(balance) {
        this.balance = balance;
    }

    this.getBalance = function() {
        return this.balance;
    }

    this.setAcctNumber = function(acctNumber) {
        this.acctNumber = acctNumber;
    }

    this.getAcctNumber = function() {
        return this.acctNumber;
    }
}

function AccountBuilder() {
    let owner, balance, acctNumber; 

        this.assignOwner = function(newOwner) {
            owner = newOwner;
            return this;
        }

        this.assignBalance = function(newBalance) {
            balance = newBalance;
            return this;
        }

        this.assignAcctNumber = function(newAcctNumber) {
            acctNumber = newAcctNumber;
            return this;
        }

        this.build = function() {
            var newAccount = new Account();
            newAccount.setOwner(owner);
            newAccount.setBalance(balance);
            newAccount.setAcctNumber(acctNumber);
            return newAccount;
        }


}


//example usage
const newAccount = new AccountBuilder().assignOwner("Zach")
                                 .assignBalance("100000")
                                 .assignAcctNumber("123456789")
                                 .build();