/*var location1=Math.floor(Math.random() * 5); //pola do przechowywania położenia komórek okrętu
var location2=location1 + 1;
var location3=location2 + 1;

var guess; //liczba wskazana przez użytkownika do trafienie
var hits=0; //liczba trafień
var guesses = 0; //liczba prób

var isSunk = false; //zmienna przewoująca informację czy okręt zosał zatopiony czy nie

while(isSunk==false) {
    guess = prompt("Gotów, cel, pal! - podaj komórkę od 0 do 6: ");

    if(guess < 0 || guess > 6) {
        alert("Proszę podać prawidłowy numer komórki!");
    } else if (guess == null) {
        alert("To już jest koniec...!");
        isSunk = true;
    } else {
        guesses = guesses + 1;

        if(guess == location1 || guess == location2 || guess == location3) {
            alert("TRAFIONY");
            hits = hits + 1;

            if(hits == 3) {
                isSunk = true;
                alert("Zatopiłeś mój statek!");
            }
        } else {
            alert("PUDŁO");
        }
    }
}

var stats;
if(guesses != 0) {
    stats = "Potrzebowałeś " + guesses + " prób by zatopić statek, " + "czyli Twoja efektywnść wynosi: " + (3/guesses) + ".";
} else {
    stats = "Nie podjąłeś żadnej próby..."
}
alert(stats);
*/

var model = {
    boardSize: 7,
    numShips: 3,
    ships: [
        {locations: ["06", "16", "26"], hits: ["", "", ""]}, 
        {locations: ["24", "34", "44"], hits: ["", "", ""]}, 
        {locations: ["10", "11", "12"], hits: ["", "", ""]}
    ],
    shipsSunk: 0,
    shipLength: 3,
    fire: function(guess) {
        for(var i=0; i<this.numShips; i++) {
            var ship = this.ships[i];

            var index = ship.locations.indexOf(guess);
            if(index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("TRAFIONY!!!!");

                if(this.isSunk(ship)) {
                    view.displayMessage("Zatopiłeś okręt!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("Spudłowałeś! :-(");
        return false;
    },
    isSunk: function(ship) {
        for(var i=0; i<this.numShips; i++) {
            if(ship.hits[i] != "hit") {
                return false;
            }
        return true;
        }
    }
}

var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}

var controller = {
    guesses: 0,
    processGuess: function(guess) {
        var location = parseGuess(guess);
        if(location) {
            this.guesses++;
            var hit = model.fire(location);
            if(hit && model.shipsSunk === model.numShips) {
                view.displayMessage("Zatopiłeś wszystkie moje okręty w " + this.guesses + " próbach.");
            }
        }
    }
}

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F"];

    if(guess===null || guess.length !== 2) {
        alert("Ups, proszę wpisać poprawne wartości współrzędnych - literę i cyfrę...");
    } else {
        var firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        if(isNaN(row) || isNaN(column)) {
            alert("Ups, to nie są współrzędne!");
        } else if (row<0 || row>=model.boardSize || column<0 || column>=model.boardSize) {
            alert("Pole poza planszą...");
        } else {
            return row + column;
        }
    }
return null;
}

controller.processGuess('A0');
controller.processGuess('A6');
