$(".sika").keyup(function () {
        if (this.value.length == this.maxLength) {
          $(this).next(".sika").focus();
        }
    });

$("#pin1").keyup(function(){
    $("#pin2").focus();
  });

  $("#pin2").keyup(function(){
    $("#pin3").focus();
  });

  $("#pin3").keyup(function(){
    $("#pin4").focus();
  });

  $("#pin4").keyup(function(){
    $("#posto").focus();
  });

function FocusOnInput()
{
document.getElementById("pin1").focus();
}
FocusOnInput();

function continueButton(){

   

    var pinOne = document.getElementById('pin1').value;
    var pinTwo = document.getElementById('pin2').value;
    var pinThree = document.getElementById('pin3').value;
    var pinFour = document.getElementById('pin4').value;
    var errorNO = document.getElementById('errorNO');
        if (pinOne=='9' && pinTwo=='5' && pinThree=='6' && pinFour=='4'){
          window.location.href = 'result.html';
            
        } else{
          $("#pin1").val("");
          $("#pin2").val("");
          $("#pin3").val("");
          $("#pin4").val("");
            errorNO.style.display = "block"
            
        }

}
