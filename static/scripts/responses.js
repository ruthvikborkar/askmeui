function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}

function getFromBackend(input) {
    var url = "http://localhost:8080/openAi/bot/chat?prompt=";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url+input, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        return data;
      } else {
        console.log("Error: " + xhr.status);
      }
    };
    xhr.send();

    return getBotResponse(input);

  }