const work = [
    {
        "id": 3,
        "name": "Password Generator",
        "url": "https://www.natemking.dev/pw_generator",
        "img": require("../components/Gallery/images/password-generator.jpg"),
        "gif": require("../components/Gallery/images/password-generator.gif"),
        "alt": "password generator app",
        "gitHub": "https://github.com/natemking/pw_generator",
        "tools": "HTML, CSS, Bootstrap, Javascript,",
        "desc": "A fun, stylized random password generator which compiles per user input",
    },
    {
        "id": 1,
        "name": "Follow Your Money",
        "url":  "https://follow-yr-money.herokuapp.com/",
        "img": require("../components/Gallery/images/follow-your-money.jpg"),
        "gif": require("../components/Gallery/images/follow-your-money.gif"),
        "alt": "budget app",
        "gitHub": "https://github.com/natemking/offline_budget_tracker",
        "tools": "HTML, CSS, Javascript, Node.js, Express.js, MongoDB, Mongoose, WebPack",
        "desc": "A simple to use finance tracker with charts to track your categorized spending",
    },
    // {
    //     "id": 2,
    //     "name": "Note Taker",
    //     "url": "https://note-taker-nmk.herokuapp.com/",
    //     "img": require("../components/Gallery/images/note-taker.jpg"),
    //     "gif": require("../components/Gallery/images/note-taker.gif"),
    //     "alt": "note-taker app",
    //     "gitHub": "https://github.com/natemking/note_taker",
    //     "tools": "HTML, CSS, Bootstrap, jQuery, Node.js, Express.js",
    //     "desc": "An easy way to keep notes stored in local storage.",
    // },
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
    // {
    //     "id": 7,
    //     "name": "Google Book Search",
    //     "url": "https://google-books-nmk.herokuapp.com/",
    //     "img": require("../components/Gallery/images/book-finder.jpg"),
    //     "gif": require("../components/Gallery/images/book-finder.gif"),
    //     "alt": "react powered book search app",
    //     "gitHub": "https://github.com/natemking/book_finder",
    //     "tools": "HTML, CSS, BootStrap, Javascript, Node.js, Express.js, MongoDB, React",
    //     "desc": "PWA that you can search for books using the Google Books API & save them to your library.",
    // },
    // {
    //     "id": 7,
    //     "name": "Google Book Search",
    //     "url": "https://google-books-nmk.herokuapp.com/",
    //     "img": require("../components/Gallery/images/book-finder.jpg"),
    //     "gif": require("../components/Gallery/images/book-finder.gif"),
    //     "alt": "react powered book search app",
    //     "gitHub": "https://github.com/natemking/book_finder",
    //     "tools": "HTML, CSS, BootStrap, Javascript, Node.js, Express.js, MongoDB, React",
    //     "desc": "PWA that you can search for books using the Google Books API & save them to your library.",
    // },
    // {
    //     "id": 7,
    //     "name": "Google Book Search",
    //     "url": "https://google-books-nmk.herokuapp.com/",
    //     "img": require("../components/Gallery/images/book-finder.jpg"),
    //     "gif": require("../components/Gallery/images/book-finder.gif"),
    //     "alt": "react powered book search app",
    //     "gitHub": "https://github.com/natemking/book_finder",
    //     "tools": "HTML, CSS, BootStrap, Javascript, Node.js, Express.js, MongoDB, React",
    //     "desc": "PWA that you can search for books using the Google Books API & save them to your library.",
    // },
    // {
    //     "id": 7,
    //     "name": "Google Book Search",
    //     "url": "https://google-books-nmk.herokuapp.com/",
    //     "img": require("../components/Gallery/images/book-finder.jpg"),
    //     "gif": require("../components/Gallery/images/book-finder.gif"),
    //     "alt": "react powered book search app",
    //     "gitHub": "https://github.com/natemking/book_finder",
    //     "tools": "HTML, CSS, BootStrap, Javascript, Node.js, Express.js, MongoDB, React",
    //     "desc": "PWA that you can search for books using the Google Books API & save them to your library.",
    // },
    // {
    //     "id": 7,
    //     "name": "Google Book Search",
    //     "url": "https://google-books-nmk.herokuapp.com/",
    //     "img": require("../components/Gallery/images/book-finder.jpg"),
    //     "gif": require("../components/Gallery/images/book-finder.gif"),
    //     "alt": "react powered book search app",
    //     "gitHub": "https://github.com/natemking/book_finder",
    //     "tools": "HTML, CSS, BootStrap, Javascript, Node.js, Express.js, MongoDB, React",
    //     "desc": "PWA that you can search for books using the Google Books API & save them to your library.",
    // },
    // {
    //     "id": 7,
    //     "name": "Google Book Search",
    //     "url": "https://google-books-nmk.herokuapp.com/",
    //     "img": require("../components/Gallery/images/book-finder.jpg"),
    //     "gif": require("../components/Gallery/images/book-finder.gif"),
    //     "alt": "react powered book search app",
    //     "gitHub": "https://github.com/natemking/book_finder",
    //     "tools": "HTML, CSS, BootStrap, Javascript, Node.js, Express.js, MongoDB, React",
    //     "desc": "PWA that you can search for books using the Google Books API & save them to your library.",
    // },
    // {
    //     "id": 7,
    //     "name": "Google Book Search",
    //     "url": "https://google-books-nmk.herokuapp.com/",
    //     "img": require("../components/Gallery/images/book-finder.jpg"),
    //     "gif": require("../components/Gallery/images/book-finder.gif"),
    //     "alt": "react powered book search app",
    //     "gitHub": "https://github.com/natemking/book_finder",
    //     "tools": "HTML, CSS, BootStrap, Javascript, Node.js, Express.js, MongoDB, React",
    //     "desc": "PWA that you can search for books using the Google Books API & save them to your library.",
    // },
    // {
    //     "id": 7,
    //     "name": "Google Book Search",
    //     "url": "https://google-books-nmk.herokuapp.com/",
    //     "img": require("../components/Gallery/images/book-finder.jpg"),
    //     "gif": require("../components/Gallery/images/book-finder.gif"),
    //     "alt": "react powered book search app",
    //     "gitHub": "https://github.com/natemking/book_finder",
    //     "tools": "HTML, CSS, BootStrap, Javascript, Node.js, Express.js, MongoDB, React",
    //     "desc": "PWA that you can search for books using the Google Books API & save them to your library.",
    // },
    // {
    //     "id": 7,
    //     "name": "Google Book Search",
    //     "url": "https://google-books-nmk.herokuapp.com/",
    //     "img": require("../components/Gallery/images/book-finder.jpg"),
    //     "gif": require("../components/Gallery/images/book-finder.gif"),
    //     "alt": "react powered book search app",
    //     "gitHub": "https://github.com/natemking/book_finder",
    //     "tools": "HTML, CSS, BootStrap, Javascript, Node.js, Express.js, MongoDB, React",
    //     "desc": "PWA that you can search for books using the Google Books API & save them to your library.",
    // }
]

export default work;