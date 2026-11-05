document.getElementById("registerForm").addEventListener("submit", function(event) {

    let skills = document.querySelectorAll(
        'input[name="skills"]:checked'
    );

    if (skills.length === 0) {
        event.preventDefault();
        alert("Please select at least one skill.");
    }

});