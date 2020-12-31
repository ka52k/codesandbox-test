// const,let等の変数宣言

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き"
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き"
// console.log(val2);

// let val2 = "letは変数の再宣言は不可";
// console.log(val2);

// const val3 = "const変数"
// console.log(val3);  // const変数は、上書き、再宣言はできない。但し、下記のような例外があるので注意。

// constで定義したオブジェクトはプロパティの変更が可能。
const val4 = {
  name: "圭一",
  age: 52
};
val4.name = "keiichi"; // constで定義しているが、このように中身の値を変更することが出来るので注意。
val4.address = "Tokyo"; // このような追加も可能。
console.log(val4);

// constで定義した配列はプロパティの変更が可能。
const val5 = ['dog','cat'];
val5[0] = "bird";
val5.push('monkey');
console.log(val5);
