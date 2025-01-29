function task3() {
    let consent = confirm("Do you agree to share your personal information?");
    let outputElement = document.getElementById("consoleOutput");

    if (consent) {
        let nickname = "Krista";
        let heightInInches = 62;
        let weightInKg = 55;

        let heightFeet = Math.floor(heightInInches / 12);
        let heightInches = heightInInches % 12;
        let weightLbs = (weightInKg * 2.20462).toFixed(3);

        let info = `Name: ${nickname}<br>Height: ${heightFeet}’${heightInches}”<br>Weight: ${weightLbs} lbs`;
        outputElement.innerHTML = info;
        console.log(info);
    } else {
        outputElement.innerHTML = "User does not wish to share his/her information.";
        console.log("User does not wish to share his/her information.");
    }
}
