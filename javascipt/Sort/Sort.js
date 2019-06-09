arr = ["egoing", "graphittie", "leezche", "kindestacy", "kooljaek"];
/*
두 변수 a, b에 배열의 순서에 맞게 두 값을 대입하여 출력
arr.sort(function(a, b){
    console.log(a, b);
})
*/

//a ,b 에 배열의 순서에 맞게 두 값을 대입하고 length를 통해서 길이가  짧은 순
arr.sort(function(a, b){
    return a.length - b.length;
})
//a ,b 에 배열의 순서에 맞게 두 값을 대입하고 length를 통해서 길이가  긴 순
arr.sort(function(a, b){
    return a.length + b.length;
})
