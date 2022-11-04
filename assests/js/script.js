// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// Jumbotron current day display using Moment.js
setInterval (function () {
    var today = moment ();
    $('#currentDay').text(today.format('dddd, MMMM Do, YYYY'));

})
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day

// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// var past = moment().local();
// $(".past").local(past)

// var past = moment.utc([2011, 0, 1, 8]);
// past.local(".past");

// WHEN I click into a time block
// THEN I can enter an event
var addEvent = document.getElementById("textInput")
var saveButton = document.getElementById("save")

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
function saveEvent() {
    var eventSaveButton = {
        addEvent: addEvent.value,
    };
    console.log(eventSaveButton);

    localStorage.setItem("eventSaveButton",JSON.stringify(eventSaveButton))
    console.log(localStorage)
    renderSaveEvent();
}

function renderSaveEvent() {
    var eventEntry = JSON.parse(localStorage.getItem("eventSaveButton"));
}

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveEvent();
    renderSaveEvent();
});


// WHEN I refresh the page
// THEN the saved events persist
function init() {
    renderSaveEvent(eventSaveButton);
}
init();