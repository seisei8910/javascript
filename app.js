// do...while文

let max = 100;
let num = 100;
let count = 0;

do{
  num = num * 2;
  count = count + 1;
}while(num < max);

alert('2を掛けて' + max + 'を２倍にした数字' + num + 'になり処理を行ったのは' + count + '回です');