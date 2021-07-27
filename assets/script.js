// Variables
var now = moment();

// Function to update the current date/time in header
function updateClock() {
    currentTime = now.format("LLLL")
    $("#currentTime").html(currentTime);
};

// Function to check the current hour and change background color
// of task depending on hour
function hourColor() {
    // Run hourComparison for each hour of work day
    $(".hour-container").each(hourComparison);
}

// Function to compare each hour of work day to the current hour
function hourComparison() {
    // Get current hour using moment.js
    // Moment().hour() ranges from 0-23
    // https://www.geeksforgeeks.org/moment-js-moment-hour-method/
    var currentHour = moment().hour();

    // Get the hour as an integer (0-23) of each work day hour
    var workDayHour = parseInt($(this).attr("id").split("workdayhour")[1]);

    // Change color based on current hour
    if (currentHour > workDayHour) {
        $(this).addClass("past");
    } else if (currentHour < workDayHour) {
        $(this).addClass("future");
        $(this).removeClass("past");
    } else {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    }
}

// Function to save the users input to the text area
function saveText() {
    var textContent = $(this).siblings(".text-content").val();
    var hour = $(this).parent().attr("id");

    // Save to local storage
    localStorage.setItem(hour, textContent);
}

// Call saveText on save button click
$(".saveBtn").on("click", saveText);

// Check if there is a value in local storage and display it to the page
function getLocalStorage() {
    $("#workdayhour8 .text-content").val(localStorage.getItem("workdayhour8"));
    $("#workdayhour9 .text-content").val(localStorage.getItem("workdayhour9"));
    $("#workdayhour10 .text-content").val(localStorage.getItem("workdayhour10"));
    $("#workdayhour11 .text-content").val(localStorage.getItem("workdayhour11"));
    $("#workdayhour12 .text-content").val(localStorage.getItem("workdayhour12"));
    $("#workdayhour13 .text-content").val(localStorage.getItem("workdayhour13"));
    $("#workdayhour14 .text-content").val(localStorage.getItem("workdayhour14"));
    $("#workdayhour15 .text-content").val(localStorage.getItem("workdayhour15"));
    $("#workdayhour16 .text-content").val(localStorage.getItem("workdayhour16"));
    $("#workdayhour17 .text-content").val(localStorage.getItem("workdayhour17"));
}

// Call all the functions
getLocalStorage();
updateClock();
hourColor();

