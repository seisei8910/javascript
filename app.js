// 作成した関数を呼び出す

// メイン部分
let alertString;

// 作成した関数を呼び出し、変数へ格納
alertString = addString("webCamp");

// 変数の中身をアラートで表示する
alert(alertString);

function addString(strA){
  const addStr = "Hello " + strA;
  return addStr;
}