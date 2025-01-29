function task1() {
    let nickname = "Krista";
    let heightInInches = 62;
    let weightInKg = 55;

    let heightFeet = Math.floor(heightInInches / 12);
    let heightInches = heightInInches % 12;
    let weightLbs = (weightInKg * 2.20462).toFixed(3);

    alert(`Name: ${nickname}\nHeight: ${heightFeet}’${heightInches}”\nWeight: ${weightLbs} lbs`);
}
