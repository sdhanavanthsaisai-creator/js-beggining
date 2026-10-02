<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <style>
        /* Basic page setup */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        /* Top navbar bar */
        .navbar {
            background-color: #333;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
        }

        .logo {
            font-size: 20px;
            font-weight: bold;
        }

        /* Hamburger button style */
        .hamburger {
            font-size: 24px;
            background: none;
            border: none;
            color: white;
            cursor: pointer;
        }

        /* Navigation menu box */
        .nav-links {
            display: none; /* hidden by default */
            background-color: #444;
            text-align: center;
        }

        /* Menu links styling */
        .nav-links a {
            display: block;
            color: white;
            padding: 12px;
            text-decoration: none;
            border-bottom: 1px solid #555;
        }

        .nav-links a:hover {
            background-color: #555;
        }

        /* Class added by JS to show the menu */
        .show {
            display: block;
        }
    </style>
</head>
<body>

    <!-- Navigation Bar -->
    <div class="navbar">
        <div class="logo">My Webpage</div>
        <button class="hamburger" onclick="toggleMenu()">&#9776;</button>
    </div>

    <!-- Navigation Links -->
    <div class="nav-links" id="myLinks">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </div>

    <!-- Page Content -->
    <div style="padding:20px;">
        <h2>Welcome to My Page</h2>
        <p>Click the hamburger button (&#9776;) on the top right to open or close the menu links!</p>
    </div>

    <script>
        // Simple JavaScript function to show or hide the menu
        function toggleMenu() {
            var links = document.getElementById("myLinks");
            if (links.className === "nav-links") {
                links.className = "nav-links show";
            } else {
                links.className = "nav-links";
            }
        }
    </script>

</body>
</html>
