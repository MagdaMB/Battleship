scoops = 5;
while (scoops > 0) {
	document.write("Kolejna gałka!<br>");
    if (scoops < 3) {
		alert("Lody się kończą!");
	} else if (scoops >= 5) {
		alert("Jedz szybciej, lody się zaraz roztopią!");
	}
	scoops = scoops - 1;
}
document.write("Życie bez lodów nie jest już takie samo!");
