var html = "";
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var res = document.getElementById("res");
btn1.addEventListener("click", function(){ // 익명의 함수이다. 바로 쓴다.
    objectInfo();
});
function objectInfo(){
// for(var key in location){       // 요즘 for 문
//     html += "<p>"+key+":"+location[key]+"</p>";
// }
for(var key in history){       // 요즘 for 문
    html += "<p>"+key+":"+history[key]+"</p>";
}
res.innerHTML = html; // innerText로 찍으면 p태그도 글자로 찍힌다.
}
btn2.addEventListener("click", function(){
    res2.innerText = location.href;
    setTimeout(function(){
        location.href = "https://www.naver.com"; // 여기는 속성이기 때문에 값을 넣는다. *replace 참고
    }, 2500); // 이 안의 일은 2.5초 후에 일어난다.
});
btn3.addEventListener("click", function(){
    location.reload(); 
});
btn4.addEventListener("click", function(){ // 뒤로가기 없음
    location.replace("https://www.naver.com"); // 속성이 아니라 메서드이기 때문에 인수로 넣어야 한다.
});
btn5.addEventListener("click", function(){ // 속성으로 쓰고 싶으면 href / 메소드로 쓰고 싶으면 assign
    location.assign("https://www.daum.net");
});
btn6.addEventListener("click", function(){ // 뒤로 가기
    history.back();
});
btn7.addEventListener("click", function(){ // 앞으로 가기
    history.forward();
});
btn8.addEventListener("click", function(){ // 원하는 데로 가기
    history.go(1);   // 숫자 쓴만큼 앞 단계로 간다. 마이너스 하면 뒤로 가기.
});

function moving(){
            var loc = document.getElementById("sel");
            if(loc.value!=""){
            // location.href = loc.value;      // form 요소는 value로 가져와야 한다. option : 폼요소
            // location.replace(loc.value);
            location.assign(loc.value);
        }}