moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment is Current time 
var currentTime = moment();

// rounds time to the hour
currentTime = currentTime.startOf("hour");

// Makes start of day be 8AM
var beforeTime = moment().startOf('day').add(8, "hours");

// Time blocks

// 8AM 
var time1 = beforeTime.add(0, "h");
time1 = time1.format('hh:mm A');
$(".block1").text(time1);

// 9AM 
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm A');
$(".block2").text(time2);

// 10AM
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm A');
$(".block3").text(time3);

// 11AM
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm A');
$(".block4").text(time4);

// 12PM
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm A');
$(".block5").text(time5);

// 1PM
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm A');
$(".block6").text(time6);

// 2PM
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm A');
$(".block7").text(time7);

// 3PM
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm A');
$(".block8").text(time8);

// 4PM
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm A');
$(".block9").text(time9);

// 5PM
var time10 = beforeTime.add(1, "h");
time10 = time10.format('hh:mm A');
$(".block10").text(time10);

// 6PM
var time11 = beforeTime.add(1, "h");
time11 = time11.format('hh:mm A');
$(".block11").text(time11);

// Function to compare hour and thecurrent time 
function testTime() {
   
    // 8AM
    time1 = moment().startOf('day').add(8, "hours");
    // Makes current time the hour
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time1)) {
        $(".form8").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form8").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form8").addClass("present");
    };

    // 9AM
    time2 = moment().startOf('day').add(9, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(time2)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form9").addClass("present");
    };
    
    // 10AM
    time3 = moment().startOf('day').add(10, "hours");
    if (currentTime.isAfter(time3)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time3)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".form10").addClass("present");
    };
    
    // 11AM
    time4 = moment().startOf('day').add(11, "hours");
    if (currentTime.isAfter(time4)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".form11").addClass("present");
    };
    
    // 12PM
    time5 = moment().startOf('day').add(12, "hours");
    if (currentTime.isAfter(time5)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".form12").addClass("present");
    };
    
    // 1PM
    time6 = moment().startOf('day').add(13, "hours");
    if (currentTime.isAfter(time6)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time6)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time6)) {
        $(".form1").addClass("present");
    };
    
    // 2PM
    time7 = moment().startOf('day').add(14, "hours");
    if (currentTime.isAfter(time7)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(time7)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(time7)) {
        $(".form2").addClass("present");
    };
    
    // 3PM
    time8 = moment().startOf('day').add(15, "hours");
    if (currentTime.isAfter(time8)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(time8)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(time8)) {
        $(".form3").addClass("present");
    };
    
    // 4PM
    time9 = moment().startOf('day').add(16, "hours");
    if (currentTime.isAfter(time9)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".form4").addClass("present");
    };
    
    // 5PM
    time10 = moment().startOf('day').add(17, "hours");
    if (currentTime.isAfter(time10)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(time10)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(time10)) {
        $(".form5").addClass("present");
    };

    // 6PM
    time11 = moment().startOf('day').add(18, "hours");
    if (currentTime.isAfter(time11)) {
        $(".form6").addClass("past");
    }
    else if (currentTime.isBefore(time11)) {
        $(".form6").addClass("future");
    }
    else if (currentTime.isSame(time11)) {
        $(".form6").addClass("present");
    };

}
testTime();
// Loops to get items from local storage
var x = [ 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, ];
// Test loop:
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    $(".form" + x[i]).val(dataHour);
}
// Event listener to save to local stroage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});
