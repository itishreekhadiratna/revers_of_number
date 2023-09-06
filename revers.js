var input_number=149;
reversed=0;
while(input_number!=0){
    firstValue=input_number%10;
    reversed=(reversed*10)+firstValue;
    input_number=Math.floor(input_number/10);
}
console.log(reversed);