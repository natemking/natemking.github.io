const work = [
    /** Smalls are sized @240px height or 480px */
    {
        "id": 18,
        "name": "React Test",
        "idName": "react-test",
        "url": "https://www.natemking.dev/react_test/",
        "img": require("../components/Gallery/images/react-test.jpg"),
        "imgSmall": require("../components/Gallery/images/react-test-small.jpg"),
        "gif": require("../components/Gallery/images/react-test.gif"),
        "alt": "react test",
        "gitHub": "https://github.com/natemking/react_test",
        "tools": "CSS, React, Styled-Components",
        "desc": "A React test found online. Criteria was given and everyting had to be built from scratch (see repo for more info on criteria). The test called for a CSS-in-JS framework. Styled components was chosen.",
    },
    {
        "id": 17,
        "name": "Javascript UI Test",
        "idName": "javascript-ui-test",
        "url": "https://www.natemking.dev/ui_test/",
        "img": require("../components/Gallery/images/ui-test.jpg"),
        "imgSmall": require("../components/Gallery/images/ui-test-small.jpg"),
        "gif": require("../components/Gallery/images/ui-test.gif"),
        "alt": "js ui test",
        "gitHub": "https://github.com/natemking/ui_test",
        "tools": "HTML, CSS, Javascript",
        "desc": "An old test that was used by a UX/UI developer department for possible new hires. The challenge is to create the page from scratch as per the instructions within 24 hours of beginning. The slider must be fully functional and the page mobile responsive. Only HTML, CSS, & Vanilla JS could be used. See the repo link for more criteria.",
    },
    {
        "id": 8,
        "name": "Rydr",
        "idName": "rydr",
        "url": "https://rydr.vps.natemking.dev",
        "img": require("../components/Gallery/images/rydr.jpg"),
        "imgSmall": require("../components/Gallery/images/rydr-small.jpg"),
        "gif": require("../components/Gallery/images/rydr.gif"),
        "alt": "ryder app",
        "gitHub": "https://github.com/natemking/rydr",
        "tools": "Group Project. My Role - Front-end: React (create user, create user profile, & update user profile functionality) 3rd party SaaS & Turing test integration. Back-end: Express.js, MongoDB, Mongoose, DB Schema design",
        "desc": "A new tool to help artists review and see reviews of the venues they can play. Future development - A full blown social network for artists and venues.",
    },
    {
        "id": 7,
        "name": "Google Book Search",
        "idName": "google-book-search",
        "url": "https://google-book-search.vps.natemking.dev",
        "img": require("../components/Gallery/images/book-finder.jpg"),
        "imgSmall": require("../components/Gallery/images/book-finder-small.jpg"),
        "gif": require("../components/Gallery/images/book-finder.gif"),
        "alt": "react powered book search app",
        "gitHub": "https://github.com/natemking/book_finder",
        "tools": "HTML, CSS, BootStrap, Javascript, Node.js, Express.js, MongoDB, React",
        "desc": "PWA that you can search for books using the Google Books API & save them to your library.",
    },
    {
        "id": 6,
        "name": "Employee Directory",
        "idName": "employee-dictionary",
        "url": "https://www.natemking.dev/employee_directory/",
        "img": require("../components/Gallery/images/employee-directory.jpg"),
        "imgSmall": require("../components/Gallery/images/employee-directory-small.jpg"),
        "gif": require("../components/Gallery/images/employee-directory.gif"),
        "alt": "employee directory app",
        "gitHub": "https://github.com/natemking/employee_directory",
        "tools": "CSS, Bootstrap, JavaScript, React",
        "desc": "A simple employee directory app built with React that allows for dynamic sorting and searching. ",
    },
    {
        "id": 1,
        "name": "Follow Your Money",
        "idName": "follow-your-money",
        "url": "https://follow-your-money.vps.natemking.dev",
        "img": require("../components/Gallery/images/follow-your-money.jpg"),
        "imgSmall": require("../components/Gallery/images/follow-your-money-small.jpg"),
        "gif": require("../components/Gallery/images/follow-your-money.gif"),
        "alt": "budget app",
        "gitHub": "https://github.com/natemking/offline_budget_tracker",
        "tools": "HTML, CSS, Javascript, Node.js, Express.js, MongoDB, Mongoose, WebPack",
        "desc": "A simple to use finance tracker with charts to track your categorized spending",
    },
    {
        "id": 4,
        "name": "Shop & Chef",
        "idName": "shop-n-chef",
        "url": "https://shop-and-chef.vps.natemking.dev",
        "img": require("../components/Gallery/images/shop-n-chef.jpg"),
        "imgSmall": require("../components/Gallery/images/shop-n-chef-small.jpg"),
        "gif": require("../components/Gallery/images/shop-n-chef.gif"),
        "alt": "shop & chef app",
        "gitHub": "https://github.com/natemking/shop_n_chef",
        "tools": "Group Project. My role - Front-end: jQuery. Back-end: Node.js, Express.js, MySql, Sequelize",
        "desc": "Add items to a shopping list then search for a recipe and ingredients from those recipes to your list wth a simple click. ",
    },
    {
        "id": 9,
        "name": "Fitness Tracker",
        "idName": "fitness-tracker",
        "url": "https://fitness-tracker.vps.natemking.dev",
        "img": require("../components/Gallery/images/fitness-tracker.jpg"),
        "imgSmall": require("../components/Gallery/images/fitness-tracker-small.jpg"),
        "gif": require("../components/Gallery/images/fitness-tracker.gif"),
        "alt": "fitness tracker app app",
        "gitHub": "https://github.com/natemking/workout_tracker",
        "tools": "Node.js, Express.js, MongoDB, Mongoose",
        "desc": "Track your workouts on a daily basis then see statics and charts based upon the last 7 days of working out.",
    },
    {
        "id": 11,
        "name": "Burger Banquet",
        "idName": "burger-banquet",
        "url": "https://burger-banquet.vps.natemking.dev",
        "img": require("../components/Gallery/images/burger-banquet.jpg"),
        "imgSmall": require("../components/Gallery/images/burger-banquet-small.jpg"),
        "gif": require("../components/Gallery/images/burger-banquet.gif"),
        "alt": "burger tracker app",
        "gitHub": "https://github.com/natemking/burger_banquet",
        "tools": "HTML, CSS, BootStrap, Node.js, Express.js, Handlebars, MySQL",
        "desc": "Burger app that you can add burgers to your menu and mark devoured when you eat them.",
    },
    {
        "id": 15,
        "name": "CLI Employee Tracker",
        "idName": "employee-tracker",
        "url": null,
        "img": require("../components/Gallery/images/employee-tracker.jpg"),
        "imgSmall": require("../components/Gallery/images/employee-tracker-small.jpg"),
        "gif": require("../components/Gallery/images/employee-tracker.gif"),
        "alt": "employee tracker app",
        "gitHub": "https://github.com/natemking/employee_tracker",
        "tools": "Node.js, Inquirer, MySQL",
        "desc": "Track your employees with this easy to use CLI app. All employee info stored in a MySQL database.",
    },
    {
        "id": 2,
        "name": "Note Taker",
        "idName": "note-tracker",
        "url": "https://note-taker.vps.natemking.dev",
        "img": require("../components/Gallery/images/note-taker.jpg"),
        "imgSmall": require("../components/Gallery/images/note-taker-small.jpg"),
        "gif": require("../components/Gallery/images/note-taker.gif"),
        "alt": "note-taker app",
        "gitHub": "https://github.com/natemking/note_taker",
        "tools": "HTML, CSS, Bootstrap, jQuery, Node.js, Express.js",
        "desc": "An easy way to keep notes stored in local storage.",
    },
    {
        "id": 14,
        "name": "Team Template Engine",
        "idName": "team-template-engine",
        "url": null,
        "img": require("../components/Gallery/images/coding-team-template-engine.jpg"),
        "imgSmall": require("../components/Gallery/images/coding-team-template-engine-small.jpg"),
        "gif": require("../components/Gallery/images/coding-team-template-engine.gif"),
        "alt": "node.js team template engine",
        "gitHub": "https://github.com/natemking/coding_team_template_engine",
        "tools": "HTML, CSS, BootStrap, Node.js, Inquirer",
        "desc": "Use CLI to easily add your team and then output that information to a designated HTML file for publishing.",
    },
    {
        "id": 16,
        "name": "CLI README.md Generator",
        "idName": "readme-generator",
        "url": null,
        "img": require("../components/Gallery/images/readme-generator.jpg"),
        "imgSmall": require("../components/Gallery/images/readme-generator-small.jpg"),
        "gif": require("../components/Gallery/images/readme-generator.gif"),
        "alt": "node.js powered readme generator app",
        "gitHub": "https://github.com/natemking/nodejs_readme_generator",
        "tools": "Node.js, Inquirer",
        "desc": "CLI app utilizing node.js to walk a user through generating a README markdown file.",
    },
    {
        "id": 5,
        "name": "THme",
        "idName": "thme",
        "url": "https://www.natemking.dev/THme",
        "img": require("../components/Gallery/images/thme.jpg"),
        "imgSmall": require("../components/Gallery/images/thme-small.jpg"),
        "gif": require("../components/Gallery/images/thme.gif"),
        "alt": "thme app",
        "gitHub": "https://github.com/natemking/THme",
        "tools": "Group Project. My role - jQuery & API mgmt",
        "desc": "Helping medical Cannabis patients by recommending strains per certain ailments as well as recommending other herbal remedies.",
    },
    {
        "id": 12,
        "name": "Weather Dashboard",
        "idName": "weather-dashboard",
        "url": "http://www.natemking.dev/weather_dashboard/",
        "img": require("../components/Gallery/images/weather-dashboard.jpg"),
        "imgSmall": require("../components/Gallery/images/weather-dashboard-small.jpg"),
        "gif": require("../components/Gallery/images/weather-dashboard.gif"),
        "alt": "weather app",
        "gitHub": "https://github.com/natemking/weather_dashboard",
        "tools": "HTML, CSS, BootStrap, jQuery, REST API",
        "desc": "Search for the weather and seven day forecast locally or internationally.",
    },
    {
        "id": 13,
        "name": "Workday Planner",
        "idName": "workday-planner",
        "url": "http://www.natemking.dev/work_day_planner/",
        "img": require("../components/Gallery/images/workday-planner.jpg"),
        "imgSmall": require("../components/Gallery/images/workday-planner-small.jpg"),
        "gif": require("../components/Gallery/images/workday-planner.gif"),
        "alt": "workday planner app",
        "gitHub": "https://github.com/natemking/work_day_planner",
        "tools": "HTML, CSS, BootStrap, jQuery",
        "desc": "Plan out your 9-5 workday with live time-keeping. Grey for past, red for present, green for future.",
    },
    {
        "id": 10,
        "name": "Javascript Trivia",
        "idName": "javascript-trivia",
        "url": "http://www.natemking.dev/javascript_trivia/",
        "img": require("../components/Gallery/images/javascript-trivia.jpg"),
        "imgSmall": require("../components/Gallery/images/javascript-trivia-small.jpg"),
        "gif": require("../components/Gallery/images/javascript-trivia.gif"),
        "alt": "javascript powered js trivia app",
        "gitHub": "https://github.com/natemking/javascript_trivia",
        "tools": "HTML, CSS, BootStrap, Javascript",
        "desc": "A fun 10 question trivia game on Javascript built with vanilla javascript. Reach the end without going below 0 points and save your score!",
    },
    {
        "id": 3,
        "name": "Password Generator",
        "idName": "password-generator",
        "url": "https://www.natemking.dev/pw_generator",
        "img": require("../components/Gallery/images/password-generator.jpg"),
        "imgSmall": require("../components/Gallery/images/password-generator-small.jpg"),
        "gif": require("../components/Gallery/images/password-generator.gif"),
        "alt": "password generator app",
        "gitHub": "https://github.com/natemking/pw_generator",
        "tools": "HTML, CSS, Bootstrap, Javascript",
        "desc": "A fun, stylized random password generator which compiles per user input",
    },
]

export default work;