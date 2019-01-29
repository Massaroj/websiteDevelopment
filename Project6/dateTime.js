$(document).ready(function()
{
  //Sets date for footers
  var date = new Date();
  document.getElementById("dateTime").innerHTML = (("0"+(date.getMonth()+1)).slice(-2)) +"/"+ (("0"+date.getDate()).slice(-2)) +"/"+
  (date.getFullYear()) +" "+ (("0"+date.getHours()+1).slice(-2)) +":"+ (("0"+date.getMinutes()+1).slice(-2));

  //Updates comment section with press of key
  $('#comments').keyup(updateCount);
  $('#comments').keydown(updateCount);

  //Changes the character count in the comment section on the reservation page
  function updateCount()
  {
      //Length of comment section
      var commentLength = $(this).val().length;
      var maxChar = 64;

      if((maxChar - commentLength >= 0) && (commentLength < 0))
      {
            $('#countchars').text("Message limit 64 characters").css("color", "green")
            $("#comments").attr("disabled", false);
      }
      if((maxChar - commentLength >= 0) && (commentLength > 0))
      {
            $('#countchars').text(64-cs + " of 64 characters left").css("color", "green");
            $("#comments").attr("disabled", false);
      }
      if((maxChar - commentLength < 0))
      {
            $('#countchars').text("0 of 64 characters left").css("color", "red");
            $("#comments").attr("disabled", true);
      }
  }

  //Changes color on the table cells of the menu page
  $("tr:nth-of-type(even) td").hover(
  function()
  {
    $(this).css('background-color', 'yellow');
    $(this).css('color', 'red');
  },

  function()
  {
    $(this).css('background-color', '#A9A9A9');
    $(this).css('color', '#191970');
  });

  $("tr:nth-of-type(odd) td").hover(
  function()
  {
    $(this).css('background-color', 'yellow');
    $(this).css('color', 'red');
  },

  function()
  {
    $(this).css('background-color', '#00BFFF');
    $(this).css('color', '#191970');
  });
});
