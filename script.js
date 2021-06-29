// GIVEN I am using a daily planner to create a schedule



// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//     moments.js 

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
//     grid system: rows and col
//                  12 col, # of rows



// WHEN I click into a timeblock
// THEN I can enter an event
//      <input> / <text area>   
//      event.target
// DONE-----------------------------------------------------------------------------------------------------------------

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//      if (currenthour == true)
//      .addclass (1-3)

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
//      DOM Manipulation
//      Give each input an ID that saves the info

// WHEN I refresh the page
// THEN the saved events persist
//      Localstorage get, if no local storage leave alone.

var topHTML = $('#currentDay');
var hourHTML = $('.hour');
var rowHTML = $('.row');
var description = $('.description');
var todo = ["","","","","","","","",""];

topHTML.text(moment().format("MMM Do, YYYY"));
console.log(($('#0')).children(1).html());
checkTime();


// Checks the tiem and assigns the color to which it represents
// Time past = Gray, Current Time = red, Time future = green
// REASON FOR IDS: The IDS are used to run through each ID, the problem with the classes we have right now that is if we assign to it itll only go once since they all share the same name
function checkTime()
{
    $('.time-block').each(function ()
    {
        if (parseInt(($(this)).attr('id')) == moment().format('h'))
        {$(this).children('.description').addClass('present');}

        else if (parseInt(($(this)).attr('id')) > moment().format('h'))
        {$(this).children('.description').addClass('future');}

        else
        {$(this).children('.description').addClass('past');}
    })
}

function checkTodo()
{
    check = localStorage.getItem("saved");
    for(var i = 0; i < description.length; i++)
    {

    }
}

$('.saveBtn').click(function (event) 
{
    console.log(event.target);
    var t = $(event.target);
    console.log(t.parent().children(0));
    console.log(rowHTML[0]);
})