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
// 


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
// DONE-----------------------------------------------------------------------------------------------------------------

checkTime();
checkTodo();

// GLOBAL VARIABLE
var topHTML = $('#currentDay'); // Grabs the top ID
topHTML = topHTML.text(moment().format("MMMM Do YYYY")); // Assigns the time to the jumbotron to be displayed

// Checks the time and assigns the color to which it represents
// Time past = Gray, Current Time = red, Time future = green
// REASON FOR IDS: The IDS are used to run through each ID, the problem with the classes we have right now that is if we assign to it itll only go once since they all share the same name
function checkTime()
{
    $('.time-block').each(function ()
    {
        var timeID = parseInt(($(this)).attr('id')); // Grabs the time-blocks ID (used for comparing to hour)
        var hour = moment().format('H'); // Gets the current hour (NUMBER ONLY)
        var textarea = $(this).children('.description') // Grabs the textarea div (TO BE ABLE TO MANIPULATE CLASS AND CHANGE COLOR)

        if (timeID == hour)
        {textarea.addClass('present');}
        else if (timeID > hour)
        {textarea.addClass('future');}
        else
        {textarea.addClass('past');}
    })
}

function checkTodo()
{
    $('.time-block').each(function ()
    {
        if (localStorage.getItem(parseInt(($(this)).attr('id'))) === null)
        {return;}

        else
        {$(this).children('.description').val(localStorage.getItem(parseInt(($(this)).attr('id'))));}
    })
}

$('.saveBtn').click(function (event) 
{
    var t = $(event.target);
    localStorage.setItem(parseInt(t.parent().attr('id')), t.siblings('.description').val())
})