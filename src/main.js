import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { haiku } from './haiku';

$(function(){
    $("#formOne").submit(function(event) {
        event.preventDefault();
        const userInput = $("#inputID").val();
        const result = haiku(userInput);
        if (result) {
            $(".good").show();
            $(".bad").hide();
        } else {
            $(".good").hide();
            $(".bad").show();
        }
        $(".result").show();
    });
});