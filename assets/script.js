// Variables
var now = moment();

// Function to update the current date/time in header
function updateClock() {
    currentTime = now.format("LLLL")
    $("#currentTime").html(currentTime);
}

// Call function
updateClock();

// Function to save the users input to the text area
function saveText() {
    var textContent = $(this).siblings(".text-content").val();
    var hour = $(this).parent().attr("id");

    // Save to local storage
    localStorage.setItem(hour, textContent);
}

// Call saveText on save button click
$(".saveBtn").on("click", saveText);