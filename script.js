var location1=Math.floor(Math.random() * 5); //pola do przechowywania położenia komórek okrętu
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

