// 배열
// js 배열은 자바의 리스트에 가깝다

// 매개변수로 값을 1개 넘기면 칸 수로 사용한다.
let arr = new Array(10);
console.log(arr);

// 매개변수로 값을 2개 이상 넘기면 요소로 사용한다.
let arr2 = new Array(1, 2, 3);
console.log(arr2);

// 보통 [] 를 사용한다.
let ar = [1, 2, 3];
console.log(ar);

// 요소의 타입이 달라도 상관이 없다.
let ar2 = [1, "a", true];

console.log(ar.length);
console.log(ar[0]);
console.log(ar[1]);

for (let i = 0; i < ar.length; i++) {
  console.log(ar[i]);
}

// --------------------------------------------------------
// 없는 인덱스에 값을 저장하면 길이를 증가시켜서 값을 추가해준다.
ar[10] = 22;
console.log(ar);

// push(값)는 배열의 끝에 값을 추가한다.
ar.push(11);
console.log(ar);

// pop() 은 마지막 요소를 삭제한다.
ar.pop();
console.log(ar);

ar.forEach((i) => console.log(i));
ar.filter((i) => i % 2 == 0).forEach((i) => console.log(i));
