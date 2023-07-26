/*
2023.07.26(수) 7교시
##시간 관련
*시간 관련 메소드 기억
*태그 선택, 태그 값 가져오는 클래스와 메소드 기억 (클래스 : document, 메소드 : get~)
*각도, 무빙 등은 간단한 수학
*style의 transform속성 기억! (스타일 클래스? 메서드? 클래스 같긴 한데)
-> {선택자 담은 변수명}.style.transform = "rotate(" +ss+ "deg)";
// 태그 선택 해서 스타일의 transform 값에 rotate와 각도를 넣어라는 자바스크립트 같은데?
*setInterval(function(){ clock(); }, 1000); // 실행할 함수 지정, 시간 설정


현재 년월일시분초 가져오는 메소드
new Date();
자바스크립트: var {변수명} = new Date();
자바 : Date {변수명} = new Date(); // 객체 생성
이게 객체인지, static인지, interface인지 확인은 필요.

Date 안에서 시, 분, 초 등을 추출하는 메소드 기억.
시추출 : {변수명}.getHours();
분추출 : {변수명}.getMinutes();
초추출 : {변수명}.getSeconds();

자바스크립트에서 태그 선택 또는 태그 안의 값 선택
태그 선택 : document.getElementById("{태그명}")
태그 값 가져오기 : document.getElementById("{태그명}").value
*/

    var second = document.getElementById("second");  //초침 선택
    var minute = document.getElementById("minute");  //분침 선택
    var hour = document.getElementById("hour");      //시침 선택
    function clock(){
        var time = new Date(); //날짜/시간 객체 생성
        var hh = time.getHours(); //시 추출
        var mm = time.getMinutes(); //분 추출
        var ss = time.getSeconds(); //초 추출
        if(hh>=12) {
            hh = hh-12
        } //시에 대하여 12시간제로 변경
        hh= hh/12*360; //시 각도 계산
        mm= mm/60*360; //분 각도 계산
        ss= ss/60*360; //초 각도 계산
        second.style.transform = "rotate("+ss+"deg)"; //시침에 대한 각도 적용
        minute.style.transform = "rotate("+mm+"deg)"; //분침에 대한 각도 적용
        hour.style.transform = "rotate("+hh+"deg)"; //초침에 대한 각도 적용
    }
    clock();
    setInterval(function(){ clock(); }, 1000); //1초 마다 갱신
    var cw = document.getElementById("clock_weight"); //시계추 선택
    var sw=1;
    setInterval(function(){  //시계추 왕복
        if(sw==1){
            cw.style.transform = "rotate(45deg)";
            sw=sw*-1;
        } else {    
            cw.style.transform = "rotate(-45deg)"; 
            sw=sw*-1;
        }    
    }, 1000);  