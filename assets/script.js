// Variables
var now = moment();

// Function to update the current date/time in header
function updateClock() {
    currentTime = now.format("LLLL")
    $("#currentTime").html(currentTime);
}

// Call function
updateClock();

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

    // Get the numbered hour of each
    var workDayHour = parseInt($(this).attr("id").split("workdayhour")[1]);

    if (currentHour > workDayHour) {
        $(this).addClass("past");
    } else if (currentHour < workDayHour) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
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

//Call all functions
hourColor();