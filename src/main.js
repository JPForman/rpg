import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { UnshutterService } from './unshutterService.js';
import { HarvardService } from './HarvardService.js';


$(document).ready(function(){
  (async () => {
        let harvardService = new HarvardService();
        const response = await harvardService.getArt();
        characterElements(response);
      })();

  (async () => {
    let unshutterService = new UnshutterService();
    const response = await unshutterService.getBackground();
    console.log(response);
    backgroundElements(response);
  })();

  function backgroundElements(response) {
    // $("#body").html("<img src='" +  (response. results[0].urls.small) +  "'>");
    $('body').css('background-image', `url(${response.results[0].urls.small})`);

    // $('#body').html({ background: url('response. results[0].urls.small') });
  }
  function characterElements(response) {
    $("#picture").html("<img src='" +  (response.records[0].baseimageurl) +  "'>");
  }

  $("#magicButton").click(function(event) {
    event.preventDefault();

    const magicInput = $("#magicInput").val();
    $('#magicProgress').animate({ width: magicInput + "%"});
  });


  $("#healthButton").click(function() {
    const healthInput = $("#healthInput").val();
    $('#healthProgress').animate({ width: healthInput + "%"});
  });
});
