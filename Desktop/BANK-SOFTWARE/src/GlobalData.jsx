export let data = [
  
];

export function credit(AccountNoinput, Amountinput) {
  console.log(AccountNoinput, "AccountNoinput");
  console.log(Amountinput, "Amountinput");

  let CreditData = data.map((item) => {
    if (item.AccountNo == Number(AccountNoinput)) {
      return { ...item, Balance: Number(item.Balance) - Number(Amountinput) };
    }
    return item;
  });
  console.log(CreditData, 'CreditData');  
  data = CreditData;
}



export function debit(AccountNoinput2, Amountinput2) {
  console.log(AccountNoinput2, "AccountNoinput");
  console.log(Amountinput2, "Amountinput2");

  let DebitData = data.map((item) => {
    if (item.AccountNo == Number(AccountNoinput2)) {
      return { ...item, Balance: Number(item.Balance) + Number(Amountinput2) };
    }
    return item;
  });
  console.log(DebitData, 'DebitData');  
  data = DebitData;
}
