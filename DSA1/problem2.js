//How to find Units Consumed in electricity bill;
let bill=500;
bill=bill-80;
if(bill<=150){
  uc=bill/3;
}
else if(bill>150&&bill<=650){
  rem=bill-150;
  uc=50+rem/5;
}
else if(bill>650){
  rem=bill-650;
  uc=150+rem/10;
}
else{
  console.log(Nill);
}
console.log(uc);