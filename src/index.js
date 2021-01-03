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
// const val4 = {
//   name: "圭一",
//   age: 52
// };
// val4.name = "keiichi"; // constで定義しているが、このように中身の値を変更することが出来るので注意。
// val4.address = "Tokyo"; // このような追加も可能。
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能。
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列について
// const name = "keiichi";
// const age = 52;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";  // 従来の書き方

// const message2 = `私の名前は${name}です。年齢は${age}です。`;  // テンプレート文字列

// console.log(message1);
// console.log(message2);

// アロー関数について
// function func1(str) {
//   return str;
// };   // 従来の関数の書き方1
// console.log(func1("func1です"));

// const func2 = function(str) {
// return str;
// };   // 従来の関数の書き方2
// console.log(func2("func2です"));

// const func3 = (str) => {
//   return str;
// };  // アロー関数。今回は引数が一つなので、引数の()を省略出来る。また{}内の処理が1行なので{return}の省略もできる。但し、{}を書いたときは、returnだけ省略することは出来ない。
// console.log(func3("func3です"));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(1, 3));

// 分割代入
// const myProfile = {
//   name: "keiichi",
//   age: 52
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['keiichi', 52];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4)

// デフォルト値、引数等
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("keiichi");
// sayHello();

// スプレッド構文(コロンを3つつなげる)
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) =>
// console.log(num1+num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 =[10,20];
// const arr5 =[30,40];
// const arr6 =[...arr4];  // 右側の値をスプレッド構文ではなく、arr4とした場合も、[10,20]という配列が代入される。しかし、下記のようにarr6[0]の値を変更した場合、arr4の方も書き換わってしまう。よって、そうさせたくないときにスプレッド構文を利用すべき。
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// map,fillterを使った配列の処理(for文の代わりとして使われる)

// const nameArr = ["小林", "大目", "谷"];

// for (let index = 0; index<nameArr.length; index++) {
// console.log(nameArr[index]);
//   console.log(`${index+1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));
// nameArr.map((name, index) => console.log(`${index+1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter ((num) => {
//   return num % 2 === 1;
// });  // 奇数だけ取り出す。
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "小林") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);


// 三項演算子
// const val1 = 1>0 ? 'trueです。' : 'falseです。';
// console.log(val1);

// const num = 1300;  // 数値
// const num = '1300';  // 文字列
// console.log(num.toLocaleString());  // toLocaleString()は数字を3桁でカンマ区切りにする。文字列には適用できない。

// const fomattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(fomattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！' : '許容範囲内です。'
// }
// console.log(checkSum(50,60));


// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// const num = null;  // この場合、下記の「console.log(fee);」は「金額未設定です」と出力される。これは、下記の「||」について、（ここでは「または」という意味ではなく）「||」の左側がfalseならば右側の値を返す為。nullはfalseであるため、右側の文字列が返された。このことは上記のflag1、flag2の場合も同様で、左側のflag1がtrueの場合は、trueが返される。falseなら、右側の値が返される。
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

const num2 = 100;
const fee2 = num2 && "何か設定されました";  // &&は左側がtrueなら右側を返す。
console.log(fee2);