"use strict"


$(document).ready(function() {
    $('#button').click(function(event) {
        event.preventDefault();
        $('#national-parks > li').last().css('background-color', '#FF0');
        $('#state-parks-texas > li').last().css('background-color', '#FF0');
        $('#kansas-national-park >li').last().css('background-color', '#FF0');
    });
    $('#national-parks-heading').click(function(event) {
        event.preventDefault();
        //toggle method invisible
        $(this).next().children().css({'font-weight':'bold'});
    });
    $('li').click(function(){
        $(this).parent().children().first().css({'color':"blue"})
    })
});

// alert("hello");
// // adds class invisible to dd;
// $('dd').addClass('invisible')
// //css addeded invisible
// //add clickevent to toggle invisible
// $('#push').click(function(event) {
//     event.preventDefault();
//     //toggle method invisible
//     $('dd').toggleClass('invisible');
// });
// $('dt').click(function(){
//     $(this).css('background-color', 'yellow')

// Exercises
// Open the file named jquery_faq.html for editing. Commit all changes to GitHub.
//
//     Under the FAQ, add 3 unordered lists like above. Each list should contain a national park name in an h3
//     element, and a ul of 4 facts about the park.
//
//     Create a button that, when clicked, makes the last li in each ul have a yellow background.
//
//     When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.
//
//     When any list item is clicked, first li of the parent ul should have a font color of blue.