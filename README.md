# SVG LOGO GENERATOR

## Example

![dist]()

## Video Demonstration

[See it working!]()

## Description

This project enables the user to create a ReadMe file using only the command line. I created a series of questions using Inquirer along with NodeJS to allow the user to simply answer the questions to send an already formatted ReadMe. This makes a ReadMe file consistent and also makes it easier for the user to produce.

## Technology Used and Credit

-   [Inquirer]('https://www.npmjs.com/package/inquirer')
-   [NodeJS]('https://nodejs.org/en')
-   [FS]('https://www.w3schools.com/nodejs/nodejs_filesystem.asp')
-   [Jest]()

## Installations

NodeJS
Inquirer
Jest

## Code Example

This is a snippet of code using Jest to for testing

```describe('Circle', () => {
    describe('render', () => {
        it('should turn to desired color', () => {
            let color = 'purple';
            let circle = new Circle(color);
            let result = `<circle cx="100" cy="100" r="50" fill="${color}" />`;
            expect(circle.render()).toEqual(result);
        })
    })
})

```

## Learning Points

This was a great opportunity to learn just how NodeJs and Inquirer work and how it can simplify so many things. It was also a chance to practice using template literals as well as learning about fs.
