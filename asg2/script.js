document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create an object to store the user data
    const userData = {
        name: name,
        email: email,
        password: password
    };

    // Convert the object to JSON format
    const userDataJson = JSON.stringify(userData);

    // Save user data in local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    // Send the data to a server using AJAX with the POST method
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "server.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("User registered successfully!");
            // Redirect to the data list page
            window.location.href = "data.html";
        }
    };

    xhr.send(userDataJson);
});
