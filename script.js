function onbodyload(){
    setClock();
    setInterval(setClock, 1000);

    let tablecnt = 32;
    var h = Math.floor(tablecnt/6) + 1;
    console.log(h)
    for(var i = 1; i <= 6; i++){
        document.getElementById("cards").innerHTML += `<div id = "col${i}" class = "col"></div>`;
        for(var j = 1; j <= h; j++){
            console.log(6*(i-1)+j)
            if((j-1)*6+i <= tablecnt){
                document.getElementById(`col${i}`).innerHTML += `<div class = "card mb-3 rounded-3 shadow-sm">
                    <div class = "card-body">
                        <h1 style = "float: left;">${(j-1)*6+i}번&nbsp;<small class = "green">재석</small></h1>
                        <button onclick = callwork(${(j-1)*6+i}) class = "btn white" data-bs-toggle = "modal" data-bs-target = "#exampleModal" style = "background-color: #ff0083; width: 50px; font-size: 25px; float: right;"><i class = "fas fa-exchange-alt"></i></button>
                    </div>
                </div>`;
            }
        }
    }
}

function callwork(idnum){
    console.log(idnum);
    document.getElementById("popupNumber").innerHTML = idnum;
}

function setClock(){
    let dateDisplay;
    let timeDisplay;
    var dateInfo = new Date(); 
    var hour = modifyNumber(dateInfo.getHours());
    var min = modifyNumber(dateInfo.getMinutes());
    var sec = modifyNumber(dateInfo.getSeconds());
    var year = dateInfo.getFullYear();
    var month = dateInfo.getMonth() + 1;
    var date = dateInfo.getDate();
    dateDisplay = `${hour}:${min}:${sec}`;
    timeDisplay = `${year}년 ${month}월 ${date}일`;
    // var msgList = [""];
    document.getElementById("timemain").innerHTML = dateDisplay;
    document.getElementById("date").innerHTML = timeDisplay;
    dateInfo.getHours();
    /* var time = [
        [6, 30, 7, 40, "기상"],
        [7, 40, 8, 15, "아침식사"],
        [8, 15, 8, 35, "아침자습"],
        [8, 35, 8, 45, "주번활동"],
        [8, 45, 8, 55, "조회"],
        [8, 55, 9, 0, "휴식"],
        [9, 0, 9, 50, "1교시"],
        [9, 50, 10, 0, "휴식"],
        [10, 0, 10, 50, "2교시"],
        [10, 50, 11, 0, "휴식"],
        [11, 0, 11, 50, "3교시"],
        [11, 50, 12, 0, "휴식"],
        [12, 0, 12, 50, "4교시"],
        [12, 50, 13, 50, "점심식사"],
        [13, 50, 14, 40, "5교시"],
        [14, 40, 14, 50, "휴식"],
        [14, 50, 15, 40, "6교시"],
        [15, 40, 15, 50, "휴식"],
        [15, 50, 16, 40, "7교시"],
        [16, 40, 17, 5, "종례"],
        [17, 5, 17, 10, "휴식"],
        [17, 10, 17, 50, "방과후T1"],
        [17, 50, 17, 55, "휴식"],
        [17, 55, 18, 35, "방과후T2"],
        [18, 35, 19, 50, "저녁식사"],
        [19, 10, 21, 10, "야자T1"],
        [21, 10, 21, 30, "방과후T1"],
        [21, 30, 22, 30, "야자T2"],
        [22, 30, 30, 30, "취침"]
    ];

    for(var i=0; i<time.length; i++){
        if(time[i][1] === hour*1){
            console.log("asdfsdf", time[i][1]);
        }
    }
    */
    if(hour*1 < 6){
        hidePopup();
        endTime(6, 30, hour, min);
        $("#startTime").html("22:30");
        $("#endTime").html("+1 6:30");
        $("#timeName").html("취침");
    }
    if(hour*1 === 6){
        if(min*1 < 30){
            hidePopup();
            endTime(6, 30, hour, min);
            $("#startTime").html("22:30");
            $("#endTime").html("+1 6:30");
            $("#timeName").html("취침");
        }
        if(min*1 === 29){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>기상</span>이 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(30 <= min*1){
            hidePopup();
            endTime(7, 40, hour, min);
            $("#startTime").html("06:30");
            $("#endTime").html("07:40");
            $("#timeName").html("기상");
        }
    }
    if(hour*1 === 7){
        if(min*1 < 40){
            hidePopup();
            endTime(7, 40, hour, min);
            $("#startTime").html("06:30");
            $("#endTime").html("07:40");
            $("#timeName").html("기상");
        }
        if(min*1 === 39){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>아침식사</span>가 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(40 <= min*1){
            hidePopup();
            endTime(8, 15, hour, min);
            $("#startTime").html("07:40");
            $("#endTime").html("08:15");
            $("#timeName").html("아침식사");
        }
    }
    if(hour*1 === 8){
        if(min*1 < 15){
            hidePopup();
            endTime(8, 15, hour, min);
            $("#startTime").html("07:40");
            $("#endTime").html("08:15");
            $("#timeName").html("아침식사");
        }
        if(min*1 === 14){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>아침자습</span>이 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(15 <= min*1 && min*1 < 35){
            endTime(8, 35, hour, min);
            $("#startTime").html("08:15");
            $("#endTime").html("08:35");
            $("#timeName").html("아침자습");
        }
        if(35 <= min*1 && min*1 < 45){
            endTime(8, 45, hour, min);
            $("#startTime").html("08:35");
            $("#endTime").html("08:45");
            $("#timeName").html("주번활동");
        }
        if(min*1 === 44){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>아침조회</span>가 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(45 <= min*1 && min*1 < 55){
            hidePopup();
            endTime(8, 55, hour, min);
            $("#startTime").html("08:45");
            $("#endTime").html("08:55");
            $("#timeName").html("아침조회");
        }
        if(min*1 === 54){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>휴식</span>이 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(55 <= min*1){
            hidePopup();
            endTime(9, 0, hour, min);
            $("#startTime").html("08:55");
            $("#endTime").html("09:00");
            $("#timeName").html("휴식");
        }
        if(min*1 === 59){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>1교시</span>가 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
    }
    if(hour*1 === 9){
        if(min*1 < 50){
            hidePopup();
            endTime(9, 50, hour, min);
            $("#startTime").html("09:00");
            $("#endTime").html("09:50");
            $("#timeName").html("1교시");
        }
        if(min*1 === 49){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>휴식</span>이 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(50 <= min*1 && min*1 < 55){
            hidePopup();
            endTime(9, 55, hour, min);
            $("#startTime").html("09:50");
            $("#endTime").html("10:00");
            $("#timeName").html("휴식");
        }
        if(min*1 === 59){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>2교시</span>가 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
    }
    if(hour*1 === 10){
        if(min*1 < 50){
            hidePopup();
            endTime(10, 50, hour, min);
            $("#startTime").html("10:00");
            $("#endTime").html("10:50");
            $("#timeName").html("2교시");
        }
        if(min*1 === 49){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>휴식</span>이 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(50 <= min*1){
            hidePopup();
            endTime(11, 0, hour, min);
            $("#startTime").html("10:50");
            $("#endTime").html("11:00");
            $("#timeName").html("휴식");
        }
        if(min*1 === 59){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>3교시</span>가 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
    }
    if(hour*1 === 11){
        if(min*1 < 50){
            hidePopup();
            endTime(11, 50, hour, min);
            $("#startTime").html("11:00");
            $("#endTime").html("11:50");
            $("#timeName").html("3교시");
        }
        if(min*1 === 49){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>휴식</span>이 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(50 <= min*1 && min*1 < 55){
            hidePopup();
            endTime(12, 0, hour, min);
            $("#startTime").html("11:50");
            $("#endTime").html("12:00");
            $("#timeName").html("휴식");
        }
        if(min*1 === 59){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>4교시</span>가 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
    }
    if(hour*1 === 12){
        if(min*1 < 50){
            hidePopup();
            endTime(12, 50, hour, min);
            $("#startTime").html("12:00");
            $("#endTime").html("12:50");
            $("#timeName").html("4교시");
        }
        if(min*1 === 49){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>휴식</span>이 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(50 <= min*1){
            hidePopup();
            endTime(13, 50, hour, min);
            $("#startTime").html("12:50");
            $("#endTime").html("13:50");
            $("#timeName").html("점심시간");
        }
    }
    if(hour*1 === 13){
        if(min*1 < 50){
            endTime(13, 50, hour, min);
            $("#startTime").html("12:50");
            $("#endTime").html("13:50");
            $("#timeName").html("점심시간");
        }
        if(min*1 === 49){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>5교시</span>가 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(50 <= min*1){
            hidePopup();
            endTime(14, 40, hour, min);
            $("#startTime").html("13:50");
            $("#endTime").html("14:40");
            $("#timeName").html("5교시");
        }
    }
    if(hour*1 === 14){
        if(min*1 < 40){
            endTime(14, 40, hour, min);
            $("#startTime").html("13:50");
            $("#endTime").html("14:40");
            $("#timeName").html("5교시");
        }
        if(min*1 === 39){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>휴식</span>이 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(40 <= min*1 && min*1 < 50){
            hidePopup();
            endTime(14, 50, hour, min);
            $("#startTime").html("14:40");
            $("#endTime").html("14:50");
            $("#timeName").html("휴식");
        }
        if(min*1 === 49){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>6교시</span>가 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(50 <= min*1){
            hidePopup();
            endTime(15, 40, hour, min);
            $("#startTime").html("14:50");
            $("#endTime").html("15:40");
            $("#timeName").html("6교시");
        }
    }
    if(hour*1 === 15){
        if(min*1 < 40){
            endTime(15, 40, hour, min);
            $("#startTime").html("14:50");
            $("#endTime").html("15:40");
            $("#timeName").html("6교시");
        }
        if(min*1 === 39){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>휴식</span>이 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(40 <= min*1 && min*1 < 50){
            hidePopup();
            endTime(15, 50, hour, min);
            $("#startTime").html("15:40");
            $("#endTime").html("15:50");
            $("#timeName").html("휴식");
        }
        if(min*1 === 49){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>7교시</span>가 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(50 <= min*1){
            hidePopup();
            endTime(16, 40, hour, min);
            $("#startTime").html("15:50");
            $("#endTime").html("16:40");
            $("#timeName").html("7교시");
        }
    }
    if(hour*1 === 16){
        if(min*1 < 40){
            endTime(16, 40, hour, min);
            $("#startTime").html("15:50");
            $("#endTime").html("16:40");
            $("#timeName").html("7교시");
        }
        if(min*1 === 39){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>종례</span>가 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }

    }
    if(hour*1 === 17){
        if(min*1 === 9){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>방과후T1</span>이 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(0 <= min*1 && min*1 < 49){
            hidePopup();
            endTime(17, 50, hour, min);
            $("#startTime").html("17:10");
            $("#endTime").html("17:50");
            $("#timeName").html("방과후T1");
        }
        if(min*1 === 49){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>쉬는시간</span>이 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(50 <= min*1 && min*1 < 54){
            hidePopup();
            endTime(17, 55, hour, min);
            $("#startTime").html("17:50");
            $("#endTime").html("17:55");
            $("#timeName").html("휴식시간");
        }
        if(min*1 === 54){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>방과후T2</span>가 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(55 <= min*1){
            hidePopup();
            endTime(18, 35, hour, min);
            $("#startTime").html("17:55");
            $("#endTime").html("18:35");
            $("#timeName").html("방과후T2");
        }
    }
    if(hour*1 === 18){
        if(min*1 < 35){
            endTime(18, 35, hour, min);
            $("#startTime").html("17:55");
            $("#endTime").html("18:35");
            $("#timeName").html("방과후T2");
        }
        if(min*1 === 34){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>석식시간</span>이 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(min*1 === 49){
            showPopup();
            $("#nmsg1").html("<span class = 'yellow'>삭사이동</span>이 시작되었습니다.");
            $("#nmsg2").html("감사합니다.");
        }
        if(35 <= min*1){
            hidePopup();
            endTime(19, 50, hour, min);
            $("#startTime").html("18:35");
            $("#endTime").html("19:50");
            $("#timeName").html("석식시간");
        }
    }
    if(hour*1 === 19){
        if(min*1 === 9){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>식사이동</span>이 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(min*1 < 50){
            endTime(19, 50, hour, min);
            $("#startTime").html("18:35");
            $("#endTime").html("19:50");
            $("#timeName").html("석식");
        }
        if(min*1 === 49){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>야자T1</span>이 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(50 <= min*1){
            hidePopup();
            endTime(21, 10, hour, min);
            $("#startTime").html("19:50");
            $("#endTime").html("21:10");
            $("#timeName").html("야자T1");  
        }
    }
    if(hour*1 === 20){
        endTime(21, 10, hour, min);
        $("#startTime").html("19:50");
        $("#endTime").html("21:10");
        $("#timeName").html("야자T1"); 
    }
    if(hour*1 === 21){
        if(min*1 < 10){
            endTime(21, 10, hour, min);
            $("#startTime").html("19:50");
            $("#endTime").html("21:10");
            $("#timeName").html("야자T1"); 
        }
        if(min*1 === 9){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>휴식시간</span>이 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(10 <= min*1 && min*1 < 30){
            hidePopup();
            endTime(21, 30, hour, min);
            $("#startTime").html("21:10");
            $("#endTime").html("21:30");
            $("#timeName").html("휴식"); 
        }
        if(min*1 === 29){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>야자T2</span>가 시작합니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다.");
        }
        if(30 <= min*1){
            hidePopup();
            endTime(22, 30, hour, min);
            $("#startTime").html("21:30");
            $("#endTime").html("22:30");
            $("#timeName").html("야자T2"); 
        }
    }
    if(hour*1 === 22){
        if(min*1 < 30){
            hidePopup();
            endTime(22, 30, hour, min);
            $("#startTime").html("21:30");
            $("#endTime").html("22:30");
            $("#timeName").html("야자T2"); 
        }
        if(min*1 === 29){
            showPopup();
            $("#nmsg1").html("잠시후 <span class = 'yellow'>기숙사 이동</span>이 있겠습니다.");
            $("#nmsg2").html("미리 준비하시기 바랍니다. 수고하셨습니다.");
        }
        if(30 <= min*1){
            endTime(30, 30, hour, min);
            $("#startTime").html("22:30");
            $("#endTime").html("+1 06:30");
            $("#timeName").html("취침"); 
        }
    }
}
function modifyNumber(time){
    if(parseInt(time) < 10){
        return "0" + time;
    }
    else{
        return time;
    }
}
function endTime(endHour, endMin, hour, min){
    if(endHour === hour*1){
        $("#timeleft").html(endMin - min*1 - 1);
    }
    else{
        $("#timeleft").html((endHour*60) + endMin - hour*1*60 - min*1 - 1);            
    }
}
function showPopup(){
    $("#nmsg1").css("display", "block");
    $("#nmsg2").css("display", "block");
    $("#nmsg3").css("display", "block");
}
function hidePopup(){
    $("#nmsg1").css("display", "none");
    $("#nmsg2").css("display", "none");
    $("#nmsg3").css("display", "none");
}