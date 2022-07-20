//first card item for plus
let btnPlusFirst = document.getElementById('btn-plus-first');
btnPlusFirst.addEventListener('click',function(){
   let resultOne =  counting('count');
   sum('taka',1219);
})

// first card item for minus
let btnMinusFirst = document.getElementById('btn-minus-first');
btnMinusFirst.addEventListener('click',function(){
   let resultOneNeg = countingNeg('count');
   minus('taka',1219);
})

// second card item for plus
let btnPlusSecond = document.getElementById('btn-plus-second');
btnPlusSecond.addEventListener('click',function(){
   let resultTwo = counting('countTwo');
   sum('taka-case',59);
})

//second card item for minus
let btnMinusSecond = document.getElementById('btn-minus-second');
btnMinusSecond.addEventListener('click',function(){
   let resultTwoNeg = countingNeg('countTwo');     
   minus('taka-case',59);           
})
      
//summation function
let newPhnVal = 0;
function sum(id,onePrice){
   let currentPrice = document.getElementById(id).innerText;
   let currentPriceVal = parseFloat(currentPrice);    
   newPhnVal = currentPriceVal+onePrice;
   document.getElementById(id).innerText = newPhnVal;    
}

//deduction function
let deductPrice = 0;
function minus(id,onePrice){     
  let sumPrice = document.getElementById(id).innerText;
  let sumPriceVal = parseFloat(sumPrice); 
  if(sumPriceVal-onePrice>=0){
   deductPrice = sumPriceVal-onePrice;
  }                     
  document.getElementById(id).innerText = deductPrice;       
}

//counting function
function counting(id){
   let counts =document.getElementById(id).value;
   let countsVal = parseFloat(counts);
   countsVal++;       
   document.getElementById(id).value = countsVal;
   return countsVal;
}
function countingNeg(id){
   let counts =document.getElementById(id).value;
   let countsVal = parseFloat(counts);
   if(countsVal>0){
      countsVal--;
   }
   document.getElementById(id).value = countsVal;
   return countsVal;
}

let checkOut = document.getElementById('checking-out');
checkOut.addEventListener('click',function(){
let totalPhn = document.getElementById('taka').innerText;
let totalPhnVal = parseFloat(totalPhn);
let totalCase = document.getElementById('taka-case').innerText;
let totalCaseVal = parseFloat(totalCase);
totalMoney(totalPhnVal,totalCaseVal);
})

 function totalMoney(phone,phoneCase){
   let subTotal = phone + phoneCase;
   document.getElementById('sub-total').innerText = subTotal;
   let total = subTotal*0.15 + subTotal;
   document.getElementById('total').innerText = Math.round(total);
 }