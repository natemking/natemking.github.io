const work = [
    {
        "id": 8,
        "name": "Rydr",
        "url": "https://rydr-app.herokuapp.com/",
        "img": require("../components/Gallery/images/rydr.jpg"),
        "gif": require("../components/Gallery/images/rydr.gif"),
        "alt": "ryder app",
        "gitHub": "https://github.com/natemking/rydr",
        "tools": "Group Project. My Role - Front-end: React (create-user component). Back-end: Express.js, MongoDB, Mongoose, DB Schema design",
        "desc": "A new tool to help artists review and see reviews of the venues they can play. Future development - A full blown social network for artists and venues. ",
    },
    {
        "id": 7,
        "name": "Google Book Search",
        "url": "https://google-books-nmk.herokuapp.com/",
        "img": require("../components/Gallery/images/book-finder.jpg"),
        "gif": require("../components/Gallery/images/book-finder.gif"),
        "alt": "react powered book search app",
        "gitHub": "https://github.com/natemking/book_finder",
        "tools": "HTML, CSS, BootStrap, Javascript, Node.js, Express.js, MongoDB, React",
        "desc": "PWA that you can search for books using the Google Books API & save them to your library.",
    },
    {
        "id": 6,
        "name": "Employee Directory",
        "url": "https://www.natemking.dev/employee_directory/",
        "img": require("../components/Gallery/images/employee-directory.jpg"),
        "gif": require("../components/Gallery/images/employee-directory.gif"),
        "alt": "employee directory app",
        "gitHub": "https://github.com/natemking/employee_directory",
        "tools": "CSS, Bootstrap, JavaScript, React",
        "desc": "A simple employee directory app built with React that allows for dynamic sorting and searching. ",
    },
    {
        "id": 1,
        "name": "Follow Your Money",
        "url": "https://follow-yr-money.herokuapp.com/",
        "img": require("../components/Gallery/images/follow-your-money.jpg"),
        "gif": require("../components/Gallery/images/follow-your-money.gif"),
        "alt": "budget app",
        "gitHub": "https://github.com/natemking/offline_budget_tracker",
        "tools": "HTML, CSS, Javascript, Node.js, Express.js, MongoDB, Mongoose, WebPack",
        "desc": "A simple to use finance tracker with charts to track your categorized spending",
    },
    {
        "id": 4,
        "name": "Shop & Chef",
        "url": "https://shop-n-chef.herokuapp.com",
        "img": require("../components/Gallery/images/shop-n-chef.jpg"),
        "gif": require("../components/Gallery/images/shop-n-chef.gif"),
        "alt": "shop & chef app",
        "gitHub": "https://github.com/natemking/shop_n_chef",
        "tools": "Group Project. My role - Front-end: jQuery. Back-end: Node.js, Express.js, MySql, Sequelize",
        "desc": "Add items to a shopping list then search for a recipe and ingredients from those recipes to your list wth a simple click. ",
    },
    {
        "id": 9,
        "name": "Fitness Tracker",
        "url": "https://workout-tracker-nmk.herokuapp.com/",
        "img": require("../components/Gallery/images/fitness-tracker.jpg"),
        "gif": require("../components/Gallery/images/fitness-tracker.gif"),
        "alt": "fitness tracker app app",
        "gitHub": "https://github.com/natemking/workout_tracker",
        "tools": "Node.js, Express.js, MongoDB, Mongoose",
        "desc": "Track your workouts on a daily basis then see statics and charts based upon the last 7 days of working out.",
    },
    {
        "id": 11,
        "name": "Burger Banquet",
        "url": "https://burger-banquet.herokuapp.com/",
        "img": require("../components/Gallery/images/burger-banquet.jpg"),
        "gif": require("../components/Gallery/images/burger-banquet.gif"),
        "alt": "burger tracker app",
        "gitHub": "https://github.com/natemking/burger_banquet",
        "tools": "HTML, CSS, BootStrap, Node.js, Express.js, Handlebars, MySQL",
        "desc": "Burger app that you can add burgers to your menu and mark devoured when you eat them.",
    },
    {
        "id": 15,
        "name": "CLI Employee Tracker",
        "url": null,
        "img": require("../components/Gallery/images/employee-tracker.jpg"),
        "gif": require("../components/Gallery/images/employee-tracker.gif"),
        "alt": "employee tracker app",
        "gitHub": "https://github.com/natemking/employee_tracker",
        "tools": "Node.js, Inquirer, MySQL",
        "desc": "Track your employees with this easy to use CLI app. All employee info stored in a MySQL database.",
    },
    {
        "id": 2,
        "name": "Note Taker",
        "url": "https://note-taker-nmk.herokuapp.com/",
        "img": require("../components/Gallery/images/note-taker.jpg"),
        "gif": require("../components/Gallery/images/note-taker.gif"),
        "alt": "note-taker app",
        "gitHub": "https://github.com/natemking/note_taker",
        "tools": "HTML, CSS, Bootstrap, jQuery, Node.js, Express.js",
        "desc": "An easy way to keep notes stored in local storage.",
    },
    {
        "id": 14,
        "name": "Team Template Engine",
        "url": null,
        "img": require("../components/Gallery/images/coding-team-template-engine.jpg"),
        "gif": require("../components/Gallery/images/coding-team-template-engine.gif"),
        "alt": "node.js team template engine",
        "gitHub": "https://github.com/natemking/coding_team_template_engine",
        "tools": "HTML, CSS, BootStrap, Node.js, Inquirer",
        "desc": "Use CLI to easily add your team and then output that information to a designated HTML file for publishing.",
    },
    {
        "id": 16,
        "name": "CLI README.md Generator",
        "url": null,
        "img": require("../components/Gallery/images/readme-generator.jpg"),
        "gif": require("../components/Gallery/images/readme-generator.gif"),
        "alt": "node.js powered readme generator app",
        "gitHub": "https://github.com/natemking/nodejs_readme_generator",
        "tools": "Node.js, Inquirer",
        "desc": "CLI app utilizing node.js to walk a user through generating a README markdown file.",
    },
    {
        "id": 5,
        "name": "THme",
        "url": "https://www.natemking.dev/THme",
        "img": require("../components/Gallery/images/thme.jpg"),
        "gif": require("../components/Gallery/images/thme.gif"),
        "alt": "thme app",
        "gitHub": "https://github.com/natemking/THme",
        "tools": "Group Project. My role - jQuery & API mgmt",
        "desc": "Helping medical Cannabis patients by recommending strains per certain ailments as well as recommending other herbal remedies.",
    },
    {
        "id": 12,
        "name": "Weather Dashboard",
        "url": "http://www.natemking.dev/weather_dashboard/",
        "img": require("../components/Gallery/images/weather-dashboard.jpg"),
        "gif": require("../components/Gallery/images/weather-dashboard.gif"),
        "alt": "weather app",
        "gitHub": "https://github.com/natemking/weather_dashboard",
        "tools": "HTML, CSS, BootStrap, jQuery, REST API",
        "desc": "Search for the weather and seven day forecast locally or internationally.",
    },
    {
        "id": 13,
        "name": "Workday Planner",
        "url": "http://www.natemking.dev/work_day_planner/",
        "img": require("../components/Gallery/images/workday-planner.jpg"),
        "gif": require("../components/Gallery/images/workday-planner.gif"),
        "alt": "workday planner app",
        "gitHub": "https://github.com/natemking/work_day_planner",
        "tools": "HTML, CSS, BootStrap, jQuery",
        "desc": "Plan out your 9-5 workday with live time-keeping. Grey for past, red for present, green for future.",
    },
    {
        "id": 10,
        "name": "Javascript Trivia",
        "url": "http://www.natemking.dev/javascript_trivia/",
        "img": require("../components/Gallery/images/javascript-trivia.jpg"),
        "gif": require("../components/Gallery/images/javascript-trivia.jpg"),
        "alt": "javascript powered js trivia app",
        "gitHub": "https://github.com/natemking/javascript_trivia",
        "tools": "HTML, CSS, BootStrap, Javascript",
        "desc": "A fun 10 question trivia game on Javascript built with vanilla javascript. Reach the end without going below 0 points and save your score!",
    },
    {
        "id": 3,
        "name": "Password Generator",
        "url": "https://www.natemking.dev/pw_generator",
        "img": require("../components/Gallery/images/password-generator.jpg"),
        "gif": require("../components/Gallery/images/password-generator.gif"),
        "alt": "password generator app",
        "gitHub": "https://github.com/natemking/pw_generator",
        "tools": "HTML, CSS, Bootstrap, Javascript",
        "desc": "A fun, stylized random password generator which compiles per user input",
    },
]

export default work;