$(document).ready(function () {
    // Object containing the validation rules
    var myRules = {
        name: {
            required: true
        },
        grade: {
            required: true,
            digits: true
        }
    };

    // Object containing the error messages
    var myMessages = {
        name: {
            required: "Please input your name!"
        },
        grade: {
            required: "Please input grade!",
            digits: "Must be a valid grade, bruh."
        }
    };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate({
        submitHandler: runMyProgram,
        rules: myRules,
        messages: myMessages
    });

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        var name = $("#firstName").val();
        var grade = $("#grade").val();
        $("p").text(`You are registered ${name} for grade ${grade} camp!`)

    }

});