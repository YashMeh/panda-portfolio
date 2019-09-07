<p align="center"><img src="https://raw.githubusercontent.com/YashMeh/panda-portfolio/master/images/logoPanda.png" alt="Panda-portfolio logo"></p>
<h1 align="center">Panda Portfolio</h1>
<p align="center">No more worries while making single page github portfolio websites.</p>

<p align="center"><a href="https://www.npmjs.com/package/panda-portfolio"><img src="https://img.shields.io/badge/npm-6.8.0-brightgreen.svg" alt="npm"></a> <img src="https://img.shields.io/badge/node-11.8.0-brightgreen.svg" alt="node"> <img src="https://img.shields.io/npm/dw/panda-portfolio.svg" alt="downloads"> <img src="https://img.shields.io/github/license/YashMeh/panda-portfolio.svg" alt="LICENSE"></p>

## Installation

```javascript
// For npm<5.2.0
sudo npm install -g panda-portfolio

// For npm>=5.2.0
npx panda-portfolio <command>
```

## Creating the config file

please make sure that you have the profile photo as well as resume file in the same directory

```javascript
panda init
```

## Creating the index page

```javascript
panda config.json
```

- Get your single page portfolio as index.html.

## Publishing

In case you want to publish your website to your github pages as <i>username.github.io</i> we recommend you checkout our inbuilt feature where you only need to give your credentials and we will automatically deploy it to your github page.

## Alternate Method

- Create a FILENAME.json file within the directory
- Paste the following content.

```javascript
{
    "theme":"(dark or light)",
    "name":"YOUR-NAME",
    "profilePhoto":"PICTURE-LINK",
    "resumeLink":"RESUME-LINK",
    "about":[
        "Paragraph1",
        "Paragraph2",
        "Paragraph3",
        "So on.."
    ],
    "links":{
        "github":"YOUR-GITHUB-PROFILE",
        "linkedin":"YOUR-LINKEDIN-PROFILE",
        "medium":"YOUR-MEDIUM-PROFILE",
        "facebook":"YOUR-FACEBOOK-PROFILE",
        "instagram":"YOUR-INSTAGRAM-PROFILE"
    }
}
```

- Write panda FILENAME.json to get the index.html page.

## Demo

![screengif](https://raw.githubusercontent.com/YashMeh/panda-portfolio/master/images/pandatuts.gif)

## Example

| Theme |                                           Picture                                           |
| ----- | :-----------------------------------------------------------------------------------------: |
| light | ![light](https://raw.githubusercontent.com/YashMeh/panda-portfolio/master/images/light.png) |
| dark  |  ![dark](https://raw.githubusercontent.com/YashMeh/panda-portfolio/master/images/dark.png)  |
