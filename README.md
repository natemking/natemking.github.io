# Nate M Kings Development Portfolio
# https://www.natemking.dev 

## Description

By using BootStrap as a CSS framework, I have put together an initial portfolio. I utilized BootStraps built-in responsive features to allow the site to appear properly on desktop and mobile. To try and break away from the out-of-the-box BootStrap look, I added my own CSS. Per the instructions of the assignment, I tried to limit the use of my own CSS and use as much BootStrap as I could.

For the global template, I made the main section look as if it is floating off of the body. This initially was not an artistic choice but an attempt to build the site as it is presented in the image examples in the homework folders. It turns out that that floating look is just the way GitLab formats its display of images. Instead of removing the code, I decided to stick with it because I liked the look. Since the main section is floating as it is, I have to take an unorthodox approach and put the footer inside the main. I do not know how this will affect a screen reader but on this site, the footer is more of a design element than a functional element. I decided to make the NavBar the sticky element despite the assignment asking for a sticky-footer as a bonus. I did not like the look or feel of a sticky-footer. The page has a better flow with the navbar sticking to the top.

The portfolio page is built but only has place holders in the gallery for now. It too is fully responsive for mobile. On a desktop, it utilizes the BootStrap grid system but goes into a single column for devices <= 768px.

The contact page has a fully built out contact form. For now, though, it is only a framework. I attempted to use HTML attribute `action="mailto:..."` within the `<form>` element to have the form be submitted to my email but that functionality was limited. When clicking submit, it was opening the default mail app on the client machine vs mailing the information to my email as I setup in the code. After doing so research, I have concluded that the solution I am looking for to the form submission problem cannot be solved by HTML alone. I made the name and email inputs responsive to sizing. They are inline until the screen breakpoint of >768px which they then go into their own respective rows. 

I took advantage of Google Fonts and FontAwesome to add even more customization. I ran into a stumbling block with the FontAwesome icons. I used FA v4.7 and discovered there is limited functionality in regards to sizing and spatial positioning that is better handled in later versions of FontAwesome. I also had some issues with the visited color of those icons after turning them into links. I was able to find a solution by affecting the built-in class that came with the icons in my CSS file.

Lastly, I took the extra step to publish my portfolio to my custom domain. I was able to utilize the custom domain feature in the GitHub pages settings of my repo. I had to add a few @ records and a cname record within the DNS settings of my domain on my registrars site. It did take some time for GitHubs provided TLS cert to apply.  When the time comes to share this with prospective employers, I want them to know that I can deploy as well as build. 

---
## Screenshots
<details>
<summary>Screenshots of pages @ 992px</summary>
<br>

![index.html @ 992px](./assets/screenshots/992-index.jpg?raw=true")
<br>
index.html
<br>

![portfolio.html @ 992px](./assets/screenshots/992-portfolio.jpg?raw=true)
<br>
portfolio.html
<br>


![contact.html @ 992px](./assets/screenshots/992-contact.jpg?raw=true)
<br>
contact.html

</details>

<details>
<summary>Screenshots of pages @ 768px</summary>
<br>

![index.html @ 992px](./assets/screenshots/768-index.jpg?raw=true")
<br>
index.html
<br>


![portfolio.html @ 992px](./assets/screenshots/768-portfolio.jpg?raw=true)
<br>
portfolio.html
<br>

![contact.html @ 992px](./assets/screenshots/768-contact.jpg?raw=true)
<br>
contact.html

</details>

<details>
<summary>Screenshots of pages @ 400px</summary>
<br>

![index.html @ 992px](./assets/screenshots/400-index.jpg?raw=true")
<br>
index.html
<br>

![portfolio.html @ 992px](./assets/screenshots/400-portfolio.jpg?raw=true)
<br>
portfolio.html
<br>

![contact.html @ 992px](./assets/screenshots/400-contact.jpg?raw=true)
<br>
contact.html
<br>

</details>

---

#### Final Thoughts
I can see the advantage using BootStrap can be to developers. It allows for quick and easy deployment of a quality looking website. The built in responsive features also take a large burden off of the developer in not having to create media queries. My only concern with BootStrap is that if it's relied upon too heavily by web developers, it could lead to too much homogenous looking work. It is up to the developer to really dive in and customize their work if utilizing BootStrap.

---

## Credits
 * [BootStrap](https://www.getbootstrap.com)
 * Background pattern found on [SubtlePatterns](https://www.subtlepatterns.com/)
 * Fonts from [Google Fonts](https://fonts.google.com)
 * Icons from [FontAwesome v4.7.0](https://fontawesome.com/v4.7.0/icons/)
 * Photo of Nate by Devyn Haas [devynhaas.com](http://www.devynhaas.com)

---