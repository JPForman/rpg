import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $("#numberButton1").click(function(event) {
    event.preventDefault();

    const numberInput1 = $("#numberInput1").val();
    $('#zProgress1').animate({ width: numberInput1 + "%"});
  });


  $("#numberButton2").click(function() {
    const numberInput2 = $("#numberInput2").val();
    $('#zProgress2').animate({ width: numberInput2 + "%"});
  });
});
