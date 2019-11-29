import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { UnshutterService } from './unshutterService.js';
import { HarvardService } from './HarvardService.js';


$(document).ready(function(){

//api call and return for character picture
  (async () => {
        let harvardService = new HarvardService();
        const response = await harvardService.getArt();
        characterElements(response);
      })();

      function characterElements(response) {
        $('#picture').css('background-image', `url(${response.records[0].baseimageurl})`);
      }

//api call and return for background image
  (async () => {
    let unshutterService = new UnshutterService();
    const response = await unshutterService.getBackground();
    console.log(response);
    backgroundElements(response);
  })();

  function backgroundElements(response) {
    $('#backgroundImg').css('background-image', `url(${response.results[7].urls.regular})`);
  }

//magic status bar elements
  $("#magicButton").click(function(event) {
    event.preventDefault();

    const magicInput = $("#magicInput").val();
    $('#magicProgress').animate({ width: magicInput + "%"});
  });


//health status bar elements
  $("#healthButton").click(function() {
    const healthInput = $("#healthInput").val();
    $('#healthProgress').animate({ width: healthInput + "%"});
  });
});
