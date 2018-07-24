var word = "butelek";
var count = 99;
while (count > 0) {
    console.log(count + " " + word + " piwa na ścianie");
    console.log(count + " " + word + " piwa,");
    console.log("Jedną weź i podaj w koło,");
    count = count - 1;
    if (count > 0) {
        console.log(count + " " + word + " butelek piwa na ścianie.");
    } else {
        console.log("Nie ma już " + word + " butelek piwa na ścianie.");
    }
}
