document.getElementById("app").innerHTML = `
    <h2>Student Details</h2>
    <div id="students"></div>
`;

var students = [
    { name: "John", regno: "UR13CS129", year: 1999 },
    { name: "Alice", regno: "UR14CS130", year: 2001 },
    { name: "Ravi", regno: "UR15CS131", year: 2003 },
    { name: "Priya", regno: "UR16CS132", year: 1998 }
];

var output = "";

for (var i = 0; i < students.length; i++) {
    output += "<div class='student'>";

    output += students[i].name +
        "'s Register Number is " +
        students[i].regno + "<br>";

    if (students[i].year < 2000) {
        output += "Born before 2000";
    } else if (students[i].year > 2000) {
        output += "Born after 2000";
    } else {
        output += "Born in 2000";
    }

    output += "</div>";
}

document.getElementById("students").innerHTML = output;