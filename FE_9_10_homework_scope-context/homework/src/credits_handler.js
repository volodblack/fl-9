function userCard(a) {
    let obj = {
        key: a,
        balance: 100,
        transactionLimit: 100,
        historyLogs: []
    }
    let newOperationTime = new Date().toLocaleString(`en-GB`);
    
    function pushToHistoryLogs(operationType, credits, operationTime) {
        obj.historyLogs.push({
            operationType: operationType,
            credits: credits,
            operationTime: operationTime
        });
    }

    function putCredits(putAmount) {
        obj.balance += putAmount;
        pushToHistoryLogs(`Recived credits`, putAmount, newOperationTime);
    }

    function takeCredits(takeAmount) {
        if (obj.transactionLimit < takeAmount) {
            console.log(`Transaction limit is lesser than credits you want to take!`);
        } else if (obj.balance < takeAmount) {
            console.log(`Remaining balance is lesser than credits you want to take!`);
        } else {
            obj.balance -= takeAmount;
            pushToHistoryLogs(`Withdrawal of credits`, takeAmount, newOperationTime);
            
            return true;
        }
    }

    function setTransactionLimit(newLimit) {
        obj.transactionLimit = newLimit;
        pushToHistoryLogs(`Transaction limit change`, newLimit, newOperationTime)
    }

    function transferCredits(transAmount, card) {
        const tax = 1.005;
        const taxedTransfer = transAmount*tax;

        if (takeCredits(taxedTransfer)) {
            card.putCredits(transAmount);
        }
    }

    return {
        getCardOptions: () => obj,
        putCredits: putCredits,
        takeCredits: takeCredits,
        setTransactionLimit: setTransactionLimit,
        transferCredits: transferCredits
    };
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.maxCards = 3;
    }

    addCard() {
        if (this.cards.length < this.maxCards) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.log(`You alredy have the maximum number of cards!`);
        }
    }

    getCardByKey(a) {
        return this.cards[a-1];
    }
}