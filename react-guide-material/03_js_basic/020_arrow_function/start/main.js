function fn(number) {
  return number * 2;
}

//アロー関数
const fnArrow = (number) => {
  return number * 2;
};

//無名関数
const fn = function (number) {
  return number * 2;
};

//無名関数の function を取り除き、 => を加えるとアロー関数になる
const fn = (number) => {
  return number * 2;
};

//引数の一つの時は()が省略可能
const fnArrow1 = (number) => {
  return number * 2;
};

//本文が１行の場合、{}とreturnを省略できる
const fnArrow2 = () => number * 2;

//戻り値がobjectの時
const fnArrowObj = (number) => ({ result: number * 2 });
