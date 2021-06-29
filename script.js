// GIVEN I am using a daily planner to create a schedule



// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//     moments.js 

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
//     grid system: rows and col
//                  12 col, # of rows
// DONE-----------------------------------------------------------------------------------------------------------------

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//      if (currenthour == true)
//      .addclass (1-3)

// WHEN I click into a timeblock
// THEN I can enter an event
//      <input> / <text area>
//      event.target

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
//      DOM Manipulation
//      Give each input an ID that saves the info

// WHEN I refresh the page
// THEN the saved events persist
//      Localstorage get, if no local storage leave alone.

var topHTML = $('#currentDay');
topHTML.text(moment().format("MMM Do, YYYY"));

console.log(topHTML.text(moment().format("MMM Do, YYYY")));
