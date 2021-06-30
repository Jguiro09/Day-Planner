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


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//      if (currenthour == true)
//      .addclass (1-3)

// DONE-----------------------------------------------------------------------------------------------------------------
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
//      DOM Manipulation
//      Give each input an ID that saves the info

// WHEN I refresh the page
// THEN the saved events persist
//      Localstorage get, if no local storage leave alone.

checkTime();

// GLOBAL VARIABLES
var topHTML = $('#currentDay');
var hourHTML = $('.hour');
var rowHTML = $('.row');
var description = $('.description');
var todo = ["","","","","","","","",""];
var todo = [
    {
        time: 9,
        text: ""
    },

    {
        time: 10,
        text: ""
    },

    {
        time: 11,
        text: ""
    },

    {
        time: 12,
        text: ""
    },

    {
        time: 13,
        text: ""
    },

    {
        time: 14,
        text: ""
    },

    {
        time: 15,
        text: ""
    },

    {
        time: 16,
        text: ""
    },

    {
        time: 17,
        text: ""
    }
]

//Assigns Time
topHTML = topHTML.text(moment().format("MMMM Do YYYY"));

// Checks the tiem and assigns the color to which it represents
// Time past = Gray, Current Time = red, Time future = green
// REASON FOR IDS: The IDS are used to run through each ID, the problem with the classes we have right now that is if we assign to it itll only go once since they all share the same name
console.log(moment().format('H'));

function checkTime()
{
    $('.time-block').each(function ()
    {
        console.log(parseInt(($(this)).attr('id')));
        if (parseInt(($(this)).attr('id')) == moment().format('H'))
        {$(this).children('.description').addClass('present');}

        else if (parseInt(($(this)).attr('id')) > moment().format('H'))
        {$(this).children('.description').addClass('future');}

        else
        {$(this).children('.description').addClass('past');}
    })
}

function checkTodo()
{
    check = localStorage.getItem("saved");
    
    $('.time-block').each(function ()
    {
        // if (todo.time == parseInt(($(this)).attr('id'))){}

       
        
    })
}

$('.saveBtn').click(function (event) 
{
    console.log(event.target);
    var t = $(event.target);
    console.log(t.siblings('.description').val());
})