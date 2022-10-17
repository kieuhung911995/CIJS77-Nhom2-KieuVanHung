//BT1
let A = [1, 3, 3, 5, 7, 10, 2, 10, 7, 3, 5];
let B=[];
for (i = 0; i < A.length; i++) {//đếm số chữ số khác nhau
  for (j = 0; j < A.length; j++) {
    if (i == j) {
      continue;
    } else {
      if (A[i] == A[j]) {
        B.push(...A.splice(j,1))
      }
    }
  }
}
console.log(`Số lượng các số khác nhau là: ${A.length}`)
for(i=0;i<A.length;i++){//đếm số lần xuất hiện các số
    let countNumb = 1;
    for(j=0;j<B.length;j++){
    if(A[i]==B[j]){
        countNumb++;
    }
    }
    console.log(`Số ${A[i]} xuất hiện: ${countNumb} lần`)
}

//BT2
// let n=12547;
// let C=[];
// while (n>0){
//     C.unshift(n%10);
//     n=(n-n%10)/10;
// }

// console.log(`Chữ số lớn nhất trong n là: ${Math.max.apply(Math, C)}`)