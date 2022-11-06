// Jumbotron current day display using Moment.js
    var today = moment ();
    $('#currentDay').text(today.format('dddd, MMMM Do, YYYY'));

    var hour = moment().hour();
    console.log(hour);
//text entry save to local storage
    $('.saveBtn').on('click', function(){
        var time= $(this).parent().attr('id')
        var value=$(this).siblings('textarea').val()

        localStorage.setItem(time, value)
    })
    //time-block color coding function
$('.row').each( function () {
    var timeBlock = $(this).attr('id')

    if (timeBlock < hour) {
        $(this).addClass('past')
    }
    else if (timeBlock === hour) {
        $(this).addClass('present')
    }
    else {
        $(this).addClass('future')
    }
})

for (var i = 9; i < 18; i++) {
    
    
}