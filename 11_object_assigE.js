


const sbiBank= {
    bankName:"SBI Bank",
    location:"pune",
    accountNo:12345,
    ifsc:2455,
    interestRate:8.75,

   showDetails: function(){
   console.log(`print the bank details:  ${this.bankName},  ${this.location},  ${this.accountNo},  ${this.ifsc}, ${this.interestRate}`);
    }
}
sbiBank.showDetails();

const axisBank={
    bankName:"Axis bank",
    location:"Mumbai",
    accountNo:56748,
    ifsc:"ST234",
    interestRate:4.56,

    showDetails:function() {
        console.log(`print the bank details: ${this.bankName},  ${this.location},  ${this.accountNo},  ${this.ifsc},  ${this.interestRate}`);
        
    }
}
axisBank.showDetails();

const hdfcBank={
    bankName:"HDFC bank",
    location:"Alandi",
    accountNo:45678,
    ifsc:"ST245",
    interestRate:4.86,

    showDetails:function() {
        console.log(`print the bank details:${this.bankName}  ,${this.location},  ${this.accountNo},  ${this.ifsc},  ${this.interestRate}`);
        
    }
}
hdfcBank.showDetails();


const yesBank={
    bankName:"Yes bank",
    location:"chakan",
    accountNo:67678,
    ifsc:"SF240",
    interestRate:4.86,

    showDetails:function() {
        console.log(`print the bank details:  ${this.bankName}, ${this.location},  ${this.accountNo}, ${this.ifsc},  ${this.interestRate}`);
        
    }
}
yesBank.showDetails();


