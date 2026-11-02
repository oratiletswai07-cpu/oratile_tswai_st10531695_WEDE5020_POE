# oratile_tswai_st10531695_WEDE5020_POE
Sweet cakes bakery is a fictional local bakery, founded in 2001 by Jake Wooder in Greenwood, using a recipe passed from his grandmother, Emma Wooder. This project is a multi-page, responsive website built to give the bakery an online presence that will showcase its story, and menu, and allowing customers to make enquiries for custom orders.  

 

Website goals and objectives:

Increase brand visibility an attract new local customers.
Allow customers to view the menu and submit enquiries for custom cakes and catering.
Establish a warm, welcoming online identity consistent with the bakery’s story.
Allow 24/7 accessibility. 

 

Key performance indicator 

Number of monthly enquiries form submissions.
Website traffic and time spent on the menu.

 

Key features and functionality:

Home page: introduction, featured products, and opening hours.
about page: baker’s story, the team, and the bakery’s background and also future expectation.
Menu page: table of products with descriptions and prices.
Enquiry page: photos of cakes, breads, sweets and pastries and ingredients.
Contact page: enquiry forms for custom orders, embedded map showing location, and contact numbers. 

 

Design:

Color scheme: tan, brown and gold. 
Typography: arial nova and georgia pro with italic style. 

Timeline and milestone:

Week 1-2: planning and file structure; week 3-5: HTML content; week 5-7: CSS styling; week 7-9: responsive design; week 9+: JavaScript functionality, testing and submission, alignment to the module’s learning deadlines.    

 

Part 1 Details  

Part one covers planning and structure: the website project proposal, content research and sourcing, the sitemap, and the initial HTML files for all 5 pages (structure and content only no CSS/ JavaScript). 

Changelog  :
Date and what was changed 

[15/08/2026] - (home page) added a lang attribute to the html tag for accessibility  

[15/08/2026] - (about page) I shifted the strong attribute to another sentence  

[15/08/2026] - (menu page) I added prices to the “featured products” 

[15/08/2026] - (enquiry page) fixed the error on the html comment and added more text 

[15/08/2026] - (contact page) added a strong tag to indicate the importance of the text

Part 2: CSS Styling and Responsive Design

Overview:
Building on Part 1's HTML structure, Part 2 applied a full external stylesheet
(`css/style.css`) across all five pages, establishing a consistent tan/brown/gold
visual identity for Sweet Cakes Bakery, followed by responsive styling for tablet
and mobile devices.

External Stylesheet:
One external stylesheet (`css/style.css`) linked to all five HTML pages
(index.html, about.html, menu.html, enquiries.html, contact.html).

Base/Default Styles:
Site-wide font family (Georgia/Arial/serif), base colour scheme, box-sizing reset, and margin/padding reset applied via the universal selector and `body`.

Typography:
Font family, size, weight, and text-shadow styling applied consistently across
headings and body text on every page.

Layout Structure:
Flexbox used throughout: navigation bar, featured product cards, About page
image/text rows, contact page info/form split, and the enquiries form grid.

Decoration and Colour:
Tan/gold/brown colour palette applied via `background-color`, `border`,
`border-radius`, and `box-shadow` across cards, buttons, and containers
Background image overlays used on hero sections (Home, About, Menu, Enquiries)

Pseudo-Classes:
`:hover` used on navigation links, product cards (lift + shadow effect), and
buttons
`:active` used on navigation links and buttons
`:focus` used on form input fields

Responsive Design:
Media queries added for tablet (max-width: 768px) and mobile (max-width: 480px)
breakpoints.
Layout adjustments: navigation stacks vertically, product cards move to a
single column, About page image/text rows stack, contact page reflows to a
single column.

Typography adjustments:
heading sizes reduced on smaller screens

Image adjustments: 
images scale responsively using relative widths and `height: auto`.

Changelog (Part 1 Feedback Addressed)
[16/09/2026] - Fixed unclosed `<p>` tag in menu.html introduction section

[16/09/2026] - Added missing `<main>` wrapper to contact.html and enquiries.html for consistency with other pages.

[16/09/2026] - Fixed multiple `<h1>` issue on contact.html (only one `<h1>` per page now)

[16/09/2026] - Corrected capitalisation of "Jake Wooder" and "South Africa" throughout.

[16/09/2026] - Removed table misuse on the homepage Featured Products section, replaced with semantic Flexbox card layout.

more css coding will be applied in part 3 of the assignment, because due to part 2's requirements( only css code) some css coding were limited because it required javascript coding to be perfect for eaxmple the menu page.

Sweet Cakes Bakery - PART 3:
About the website:
Sweet Cakes Bakery is a fictional family bakery with two shops (Pretoria and Johannesburg). The site lets customers browse the menu, build an order, check ingredients and allergens, send an enquiry, contact the bakery and find the nearest shop.

pages: 
index.html - Home page with featured products and opening hours.
about.html - History, mission, vision, and target market.
menu.html -	Dynamic menu with search, filter, sort, cart, and product details pop-up.
enquiries.html - Order enquiry form, payment details and FAQ accordion.
contact.html - Contact form that builds an email and an interactive map.

Technologies used:
HTML5, CSS3, JavaScript (vanilla), Leaflet 1.9.4 (interactive map), OpenStreetMap tiles, OSRM public routing service (driving route), jsonplaceholder test API (AJAX demo), Netlify (hosting), Git and GitHub.

project structure:
index.html, about.html, menu.html, enquiries.html, contact.html
css/style.css
js/java.js
images/
robots.txt
sitemap.xml
README.md

The changelog for part 2
Part 2 feedback and corrections from the lecturer's feedback:
[26/Oct/2026] - I fixed the vertical text error on the About page because the text was sitting on the side of the image instead of at the bottom every time I minimized the website (mobile view)
[26/Oct/2026] - I improved the CSS code for the navigation bar in the media query, meaning I made a sidebar for the minimized screen and also added icons to the navigation bar links.
[26/Oct/2026] - I changed the stylesheet link from ../sweets_cakes_bakery_website/css/style.css to css/style.css
[26/Oct/2026] - I corrected a few typos in the code that tampered with the code (most CSS code wasn't working) for example i corrected soild to solid 
[26/Oct/2026] - I renamed .sidebar-overlay to .menu-overlay
[26/Oct/2026] - I corrected "Backery", "Gautang," and "SweetAvenue"; updated footer year to 2026 (spelling)
[26/Oct/2026] - I removed two Google Maps embeds that showed other businesses
[27/Oct/2026] - I removed the repeated sidebar blocks and the extra unclosed <header>
[27/Oct/2026] - I changed name="first name" to name="first-name"
[Most changes from part two were made in the media query.]

Part 3 new features:
[27/Oct/2026] - (menu page.html, javascript.js) -	Menu products are now built from a JavaScript list (MENU) instead of typed HTML
[27/Oct/2026] - (menu page.html, javascript.js) - Search box, category filter, price sort, product count and a "not found" message
[27/Oct/2026] - (menu page.html, javascript.js) -	Shopping cart: add, remove, change quantity, 10% discount for 10 or more items, saved in localStorage, floating cart button with counter
[27/Oct/2026] - (menu page.html, javascript.js) - Copy Order button and Send Order to Enquiry Form button (carries the cart to the enquiry page)
[28/Oct/2026] - (menu page.html, javascript.js, styls. css) - Product details modal (lightbox) showing a large picture, price, ingredients and allergens
[28/Oct/2026] - (java.js) - findAllergens function that checks each ingredient for hidden allergens (for example milk in butter, cream and chocolate)
[28/Oct/2026] - (styles.css, java.js) - Scroll animations (fade and slide up) and hover transitions using CSS and the IntersectionObserver API
[29/Oct/2026] - (contact.html, java.js) - Leaflet interactive map with both bakery locations, buttons to jump to each shop, and a Find My Location button that finds the nearest bakery and draws a driving route
[29/Oct/2026] - (enquiries.html,java.js) - FAQ accordion (opens and closes with JavaScript)
[29/Oct/2026] - (enquiries.html, java.js) - Enquiry form validation with an error message under each field (letters-only names, email format, South African phone format, age range, collection date at least 2 days ahead)
[30/Oct/2026] - (java.js) - After a valid enquiry, the page shows the cost (from the cart, including the discount) and availability for the chosen date, without reloading
[31/oct/2026] - (java.js) - AJAX submit using fetch (POST to a free test API). The page shows success or failure messages
[31/oct/2026] - (contact.html, java.js) - Contact form validation (name, email, optional phone, message type, message length). A valid form builds an email preview and a Send button that opens the user's email app with everything filled in
[31/oct/2026] - (enquiries.html, style.css, java.js) - payment methods section with a Copy Account Number button
[31/oct/2026] - (all pages) - Added lang="en", unique meta descriptions, corrected heading order
[01/Nov/2026] - (index.html) - Added JSON-LD structured data (Bakery) for local search
[01/Nov/2026] - (robots.txt, sitemap.xml) - Added so search engines can crawl and understand the site
[01/Nov/2026] - (project) - Deployed on Netlify and added the live link to this README

SEO
(on-page SEO):
Keyword research: I chose keywords customers would really type, such as "bakery Pretoria", "custom cakes", "fresh bread", "birthday cakes" and "wedding cakes", and used them naturally in headings, descriptions and body text.
Title tags and meta descriptions: every page has its own title and a description of about 150 characters.
Header tags: each page has one h1, then h2 and h3 in order.
Image optimisation: descriptive alt text and descriptive file names; images below the fold use lazy loading.
URL structure: short, readable file names (menu.html, contact.html).
Internal linking: every page links to the others through the navigation, and buttons such as "Straight to Ordering" and "Place a Custom Order" link between pages.
Mobile-friendliness: the viewport meta tag, flexible layouts and media queries at 768px, 600px, 480px and 380px.

SEO (off-page):
Backlinks: list the bakery on local business directories and ask local event planners and wedding blogs to link to the site.
Social media: share new products and offers on Facebook and Instagram with a link back to the menu page.
Local SEO: claim a Google Business Profile for both shops; addresses, phone numbers and opening hours on the site match the structured data.

Technical SEO:
robots.txt allows crawling and points to the sitemap.
sitemap.xml lists all five pages.
Structured data: JSON-LD Bakery schema on the home page.
Page speed: scripts use defer, images are lazy-loaded and compressed, and no large libraries are used apart from Leaflet.

Security:
The site is served over HTTPS by Netlify.
All form input is validated on the client side with JavaScript before it is used. User text is escaped with escapeHtml before it is shown on the page, which helps prevent cross-site scripting (XSS).
Security headers are set in the _headers file (no framing, no content-type guessing, restricted referrer and permissions).
No passwords or card numbers are collected. The banking details on the enquiry page are fictional sample details.
Location is only requested when the user clicks Find My Location.

Known limitations:
The enquiry form sends data to a free test API (jsonplaceholder), so nothing is stored. A real bakery would use its own server or a form service.
The contact form uses mailto, so it needs an email app on the user's device.
The driving route uses the public OSRM demo server, which may be slow or busy.

Tools and AI assistance:
I used Claude (an AI assistant) to help with some JavaScript for the forms, the map, and the allergen checker. I tested, edited, and understand all of the code in this project.

References:
Part 1 references:

References images  

Li, A. (n.d.) Starbucks Reserve Bakery. [Online] Unsplash. Available at: https://unsplash.com/photos/man-in-white-dress-shirt-standing-in-front-of-brown-wooden-shelf-RndRFJ1v1kk [Accessed: 8 August 2026]. 

Yurtman, C. (n.d.) Golden Croissant with Fresh Strawberries and Cream. [Online] Unsplash. Available at: https://unsplash.com/photos/a-croissant-on-a-plate-with-a-strawberry-on-top-d49GxxgHv2s [Accessed: 8 August 2026]. 

Khlebnikova, Y. (n.d.) Chocolate Cake on White Ceramic Plate. [Online] Unsplash. Available at: https://unsplash.com/photos/chocolate-cake-on-white-ceramic-plate-EW0EPuhoSaM [Accessed: 8 August 2026]. 

Jk, P. (n.d.) Chocolate Topped Cake. [Online] Unsplash. Available at: https://unsplash.com/photos/chocolate-topped-cake-P68yv6bC2pI [Accessed: 8 August 2026]. 

Xintong, Y. (n.d.) Breads in Display Shelf. [Online] Unsplash. Available at: https://unsplash.com/photos/breads-in-display-shelf-go3DT3PpIw4 [Accessed: 8 August 2026]. 

Jo, J. (n.d.) Background of a Bakery. [Online] Unsplash. Available at: https://unsplash.com/photos/a-man-in-a-white-shirt-is-putting-some-bread-in-the-oven-pE2ZR1t7kRg [Accessed: 8 August 2026]. 

Traina, F. (n.d.) A Bakery Filled with Lots of Different Types of Pastries. [Online] Unsplash. Available at: https://unsplash.com/photos/a-bakery-filled-with-lots-of-different-types-of-pastries-6i6NJgCJ8k0 [Accessed: 8 August 2026]. 

Suryaputra, D.K. (n.d.) People Buying in a Bakery. [Online] Unsplash. Available at: https://unsplash.com/photos/a-woman-standing-in-front-of-a-bakery-window--D4l5GuNky4 [Accessed: 8 August 2026]. 

Arenas de Rodrigo, D. (n.d.) Loaf of Bread with Sesame Seeds on Top. [Online] Unsplash. Available at: https://unsplash.com/photos/loaf-of-bread-with-sesame-seeds-on-top-5r9KSGE9DZ8 [Accessed: 8 August 2026]. 

Arze, S. (n.d.) Bread on Brown Wooden Table. [Online] Unsplash. Available at: https://unsplash.com/photos/bread-on-brown-wooden-table-UNhdg9K7Snw [Accessed: 8 August 2026]. 

Sandh, S. (n.d.) Ginger Bread on Brown Baskets. [Online] Unsplash. Available at: https://unsplash.com/photos/ginger-bread-on-brown-baskets-BRMvT4sw-4c [Accessed: 8 August 2026]. 

Vanderspank, J. (n.d.) Brown Bread on White Paper. [Online] Unsplash. Available at: https://unsplash.com/photos/brown-bread-on-white-paper-w85N0iB0vUQ [Accessed: 8 August 2026]. 

Chan, C. (n.d.) A Loaf of Banana Nut Bread Sitting on Top of a Wooden Cutting Board. [Online] Unsplash. Available at: https://unsplash.com/photos/a-loaf-of-banana-nut-bread-sitting-on-top-of-a-wooden-cutting-board-a0fBbS8RZAo [Accessed: 8 August 2026]. 

Urli, T. (n.d.) Bread on Brown Wooden Table. [Online] Unsplash. Available at: https://unsplash.com/photos/bread-on-brown-wooden-table-USg-3Z9T4uY [Accessed: 8 August 2026]. 

R, Jr. (n.d.) Chocolate Cupcake with White Icing on White Ceramic Plate. [Online] Unsplash. Available at: https://unsplash.com/photos/chocolate-cupcake-with-white-icing-on-white-ceramic-plate-90HdOlGbjck [Accessed: 8 August 2026]. 

Bosman, L. (n.d.) A Close-Up of a Chocolate Cupcake on a Table. [Online] Unsplash. Available at: https://unsplash.com/photos/a-close-up-of-a-chocolate-cupcake-on-a-table-g2xtEG29KP0 [Accessed: 8 August 2026]. 

Thielen, D. (n.d.) A Cinnamon Roll Sitting on Top of a White Plate. [Online] Unsplash. Available at: https://unsplash.com/photos/a-cinnamon-roll-sitting-on-top-of-a-white-plate-2BNcZrnmFO0 [Accessed: 8 August 2026]. 

Imad 786 (n.d.) A Pastry with Nuts and Chocolate Drizzled on It. [Online] Unsplash. Available at: https://unsplash.com/photos/a-pastry-with-nuts-and-chocolate-drizzled-on-it-vl4ZC8zXGM4 [Accessed: 8 August 2026]. 

Gomes Dos Santos, G. (n.d.) A Pastry with Chocolate Drizzled on Top of It. [Online] Unsplash. Available at: https://unsplash.com/photos/a-pastry-with-chocolate-drizzled-on-top-of-it-NFsT6I6R-HA [Accessed: 8 August 2026]. 

Díaz, D. (n.d.) Berry Tart with Red Glaze and Mint Leaves. [Online] Unsplash. Available at: https://unsplash.com/photos/berry-tart-with-red-glaze-and-mint-leaves-sE8YNvc-xlU [Accessed: 8 August 2026]. 

Coleman, J. (n.d.) White Icing Covered Cake with Flowers on Top. [Online] Unsplash. Available at: https://unsplash.com/photos/white-icing-covered-cake-with-flowers-on-top-5HR1gItc7Gs [Accessed: 8 August 2026]. 

Glass, J. (n.d.) A Pink Cake with White Frosting and Strawberries on Top. [Online] Unsplash. Available at: https://unsplash.com/photos/a-pink-cake-with-white-frosting-and-strawberries-on-top-0KpfliRVLJs [Accessed: 8 August 2026]. 

Jk, P. (n.d.) Chocolate Topped Cake. [Online] Unsplash. Available at: https://unsplash.com/photos/chocolate-topped-cake-P68yv6bC2pI [Accessed: 8 August 2026]. 

Maaz, S. (n.d.) Chocolate Cake with Chocolate Syrup on Top. [Online] Unsplash. Available at: https://unsplash.com/photos/chocolate-cake-with-chocolate-syrup-on-top-QLSh4y2v93c [Accessed: 8 August 2026]. 

Cañas, E. (n.d.) Cake with Fruits. [Online] Unsplash. Available at: https://unsplash.com/photos/cake-with-fruits-mLs0mCbmOTg [Accessed: 8 August 2026]. 

Sadeqian, L. (n.d.) A White Cake with Pink Flowers on Top of It. [Online] Unsplash. Available at: https://unsplash.com/photos/a-white-cake-with-pink-flowers-on-top-of-it-CWburPtXtHM [Accessed: 8 August 2026]. 

References for design inspiration:

Black Forest Bakery (n.d.) Home. [Online] Available at: https://www.blackforestbakery.co.za [Accessed: 8 August 2026]. 

Reisman's Bakery (n.d.) Home. [Online] Available at: https://reismansbakery.com [Accessed: 8 August 2026]. 

References for budget:

New Perspective Studio (n.d.) *Website Design Cost South Africa*. [Online] Available at: https://www.newperspectivestudio.co.za/wp/what-is-the-cost-of-creating-a-website-in-south-africa/ [Accessed: 8 August 2026]. 

Dot Digital (n.d.) *How Much Does a Website Cost in South Africa? 2026 Guide*. [Online] Available at: https://dotdigital.co.za/website-cost-south-africa/ [Accessed: 8 August 2026]. 

PART 2 references:
 
CSSnippets. 2025. Learn CSS Display Property: Inline, Block, Inline-Block Explained in 4 Minutes! [YouTube video]. 23 June. Available at: https://youtu.be/zI6DW1Sinqc [Accessed: 16 September 2026].

CSSnippets. 2025. Navbar CSS Tutorial: 5 Ways to Create a Navigation Bar with Flexbox [YouTube video]. 25 Sept.  Available at: https://www.youtube.com/watch?v=HmaQwuKUYTc&t=1s [Accessed: 16 September 2026].

Coding2GO.2024. Learn CSS Flexbox in 20 Minutes (Course) [YouTube video]. 7 Aug. Available at:https://www.youtube.com/watch?v=wsTv9y931o8&t=499s [Accessed: 18 September 2026].

CodzSword.2024. Learn How to Align Text and Image Side by Side Using CSS For Any Device [YouTube video]. 2 sept. Available at: https://www.youtube.com/watch?v=ZYMw7jGxm60 [Accessed: 17 September 2026].

CodingLab. 2021. Responsive Registration Form in HTML & CSS [YouTube video]. 5 Jan. Available at: https://www.youtube.com/watch?v=okbByPWS1Xc&list=PLImJ3umGjxdDqTlZhQxXBeGij9Oa9Xjnj [Accessed: 16 September 2026].

Dani Krossing. 2023. 24 | MAKE A WEBSITE RESPONSIVE FOR ALL DEVICES | 2023 | Learn HTML and CSS Full Course for Beginners [YouTube video]. 12 Feb. Available at: https://www.youtube.com/watch?v=UUjNEMXZA-k&t=210s [Accessed: 16 September 2026].


Bro Code. 2023. How to include a CSS background image [YouTube video]. 21 sept. Available at: https://www.youtube.com/watch?v=_oFWg_NlKdo [Accessed: 16 September 2026].

PART 3 references: 
Agafonkin, V. 2023. Leaflet: an open-source JavaScript library for interactive maps, version 1.9.4. Available at: https://leafletjs.com [Accessed 30 october 2026].

OpenStreetMap contributors. n.d. OpenStreetMap. Available at: https://www.openstreetmap.org [Accessed 30 october 2026].

Project OSRM. n.d. Open Source Routing Machine. Available at: https://project-osrm.org [Accessed 30 october 2026].

Alejandro AO (2023) Javascript interactive map with Leaflet EASY (with marker clusters & popups) [YouTube video]. 16 January. Available at: https://www.youtube.com/watch?v=LxenV0YaX8M (Accessed: 27 October 2026).

CSSnippets (2025) How to create responsive navigation bar using HTML, CSS & JavaScript [YouTube video]. 13 January. Available at: https://www.youtube.com/watch?v=Og-YEeCTE7A (Accessed: 27 October 2026).

DevWebApp (2024) Contact us form with validation in JavaScript HTML CSS. Learn how to make a form and validate it [YouTube video]. 8 April. Available at: https://www.youtube.com/watch?v=x2ItMNJI-rc (Accessed: 30 October 2026).

OpenJavaScript (2023) Map with markers using Leaflet | JavaScript tutorial [YouTube video]. 5 March. Available at: https://www.youtube.com/watch?v=rdPNRZBSPdQ (Accessed: 30 October 2026).

Bedimcode (n.d.) Responsive sidebar menu using HTML CSS & JavaScript [YouTube video]. Available at: https://www.youtube.com/watch?v=RhT04ifx3vw (Accessed: 30 October 2026).

The Coding Train (2019) 1.5 Mapping geolocation with Leaflet.js – Working with data and APIs in JavaScript [YouTube video]. 27 May. Available at: https://www.youtube.com/results?search_query=The+Coding+Train+Mapping+Geolocation+with+Leaflet.js (Accessed: 30 October 2026)

W3Schools (n.d.) HTML Tutorial. Available at: https://www.w3schools.com/html/ (Accessed: 29 October 2026).

W3Schools (n.d.) CSS Tutorial. Available at: https://www.w3schools.com/css/ (Accessed: 29 October 2026).

W3Schools (n.d.) JavaScript Tutorial. Available at: https://www.w3schools.com/js/ (Accessed: 30 October 2026).

W3Schools (n.d.) HTML Forms. Available at: https://www.w3schools.com/html/html_forms.asp (Accessed: 31 October 2026).

W3Schools (n.d.) CSS Responsive Web Design. Available at: https://www.w3schools.com/css/css_rwd_intro.asp ((Accessed: 31 October 2026)).

W3Schools (n.d.) JavaScript HTML DOM. Available at: https://www.w3schools.com/js/js_htmldom.asp (Accessed: 30 October 2026).

W3Schools (n.d.) JavaScript Web Storage API. Available at: https://www.w3schools.com/js/js_api_web_storage.asp (Accessed: 31 October 2026)

