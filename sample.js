// 変数の巻き上げ(ホイスティング)

var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

console.log(str)
foo()