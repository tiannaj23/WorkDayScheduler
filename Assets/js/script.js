$(function () {
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'))

  // loop time blocks
  for (let i = 9; i < 17 ; i++) {

    //adding AM to the time
    var time = 'AM';
    
    //adding PM to the time if it's greater than 11
    if (i > 11) {
      time = 'PM'
    }

    //creating variables for each element
    var rowEL = $('<div>');
    var hourEl = $('<div>');
    var textArea = $('<textarea>');
    var buttonEl = $('<button>');
    var iconEl = $('<i>');

    //adding each class
    rowEL.addClass('row time-block');
    hourEl.addClass('col-2 col-md-1 hour text-center py-3');
    textArea.addClass('col-8 col-md-10 description');
    buttonEl.addClass('btn saveBtn col-2 col-md-1');
    iconEl.addClass('fas fa-save');
    buttonEl.attr('id', i)

    hourEl.text(i + time);
    buttonEl.append(iconEl);
    buttonEl.on('click', click)

    rowEL.append(hourEl, textArea, buttonEl);
    $('.container-fluid').append(rowEL)
  }

  function click(){
    console.log(this);
  }

  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
});
