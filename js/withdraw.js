//1. add event handler with the withdraw button
//2. GET The withdraw amount from the withdraw input field
//2.5 also make sure to convert the input into a number by using parseFloat
//3.get previous withdraw total
//4. calculate total withdraw amount
//4.2. set total withdraw amount
//5 get the previous balance total
//6. calculate new balance total
//6.5 set the new balance  total
//7. clear the input field

//step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)

    //Step-4:
    const currnentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currnentWithdrawTotal;

    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    //step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    //step-7
    withdrawField.value = ' ';
})