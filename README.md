
README.md


Remix

Share
 
notice: Reconnecting
blue-flash-ink

Settings
Assets
Files
s
rc
/
c
omponents
/
h
ooks
/
p
ages
/
s
tyles
/
a
p
p
.jsx 
i
nde
x
.jsx 
s
e
o
.json 
.gitignore 
R
EADM
E
.md 
i
nde
x
.html 
p
ackag
e
.json 
v
ite.confi
g
.js 
w
atc
h
.json 
README.md


EDIT MARKDOWN
Before you start :)
You will not be able to edit this Glitch. You will need to click the "Remix to edit" button that displays in the top right of the view pane. You can also remix by clicking the "code-test-template" button in the top left of the page. When you remix, Glitch will create a copy of this project. The URL is what you will share with ON. It is a good idea to create a free Glitch account as this will ensure you can keep your Glitch.

You can create an account here.

Before you get started, read the below instructions carefully. This challenge represents the typical type of task you would need to undertake at ON without assistance.

This exercise is split into two parts.

Refer to the src/pages/home.jsx file and src/pages/homeStyles.css file. You can ignore all the other files within this project.

The Challenge
Part 1: Display API data in a component
This step is to demonstrate a good understanding of JavaScript.

Using the existing getData method, ensure this is triggered when the component is rendered. The data should only be fetched once, and you should not need to edit the getData method.

Add the data from the endpoint into the existing state myData.

Modify the JSX template to iterate the user data returned from the endpoint and display each users first name, last name and picture.

Filter the users by the "registered" key value and only display those registered between the year 2000 and the year 2010. Include a formatted version of the date with each user in the template.

Add a method which allows you to filter the users by typing in the text box. How could you optimise this behaviour to reduce requests?

Example data from the endpoint:

{
  "gender": "female",
  "name": { "title": "Ms", "first": "Michelle", "last": "Perkins" },
  "location": {
    "street": { "number": 1408, "name": "Chester Road" },
    "city": "City of London",
    "state": "Merseyside",
    "country": "United Kingdom",
    "postcode": "V1 6PF",
    "coordinates": { "latitude": "18.4551", "longitude": "145.3502" },
    "timezone": { "offset": "-9:00", "description": "Alaska" }
  },
  "email": "michelle.perkins@example.com",
  "login": {
    "uuid": "bbb1213a-2068-4fdf-9e0e-c46f80231a3a",
    "username": "whiterabbit344",
    "password": "11111",
    "salt": "dxH919e7",
    "md5": "67e51284a50ca94fca8c003a68bd7bc5",
    "sha1": "f6cac9b2b6773acb02796a296e73b99e8bf4032c",
    "sha256": "bb729e69bedc5de88c19ffd9d30e751fdae2d292abddb95b6dc698507703768b"
  },
  "dob": { "date": "1968-01-18T09:29:17.529Z", "age": 53 },
  "registered": { "date": "2019-09-16T16:53:21.065Z", "age": 2 },
  "phone": "0151 014 2914",
  "cell": "0794-516-201",
  "id": { "name": "NINO", "value": "BA 17 03 80 P" },
  "picture": {
    "large": "https://randomuser.me/api/portraits/women/50.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/50.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/50.jpg"
  },
  "nat": "GB"
}
Part 2: Style the component
This step is for you to show ability at applying styles to HTML.

Display each user as a "card" - a white box with a soft box shadow and rounded corners.
Move the first name and last name so they sit alongside the images but vertically centered and well spaced.
Beyond the above, you can go further than this. Custom web fonts, icons, colours, gradients - feel free to explore creative side without limits.

What we're looking for
To give you some tips with your code, here's some qualities we're looking for in your solution.

Appropriate use of semantic HTML elements
Clean, concise and readable code
Demonstration of understanding of CSS principles and modern best-practise
An eye for detail and an appreciation of things looking good
Solid consideration of accessibility and usability
Minimal reliance on libraries and frameworks, demonstration of solid fundamental JavaScript knowledge
blue-flash-ink.glitch.me
/





STATUS

LOGS

TERMINAL

TOOLS

PREVIEW

