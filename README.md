# protactor-code
Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor is a Node.js program built on top of WebDriverJS. Protractor runs tests against your application running in a real browser, interacting with it as a user would.

## Prerequisites
Protractor is a Node.js program. To run, you will need to have Node.js installed. You will download Protractor package using npm, which comes with Node.js. Check the version of Node.js you have by running node --version. Then, check the compatibility notes in the Protractor README to make sure your version of Node.js is compatible with Protractor.

By default, Protractor uses the Jasmine test framework for its testing interface. This tutorial assumes some familiarity with Jasmine, and we will use version 2.4.

## IDE config
Extensions used on visual code:
- Material Icon Theme
- One Dark Pro

## Setup 
Download nodejs on https://nodejs.org (download recommended version) and install.

Use npm to install Protractor with:
```npm install protractor -g```
```npm install protractor --save-dev```

Use npm to install Jasmine with:
```npm install jasmine --save-dev```

Use npm to install webdriver-manager with:
```npm install webdriver-manager -g```

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
```webdriver-manager update```

Now start up a server with:
```webdriver-manager start```

This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. Leave this server running throughout the tutorial. You can see information about the status of the server at http://localhost:4444/wd/hub.


If you get "Error message: Could not find update-config.json. Run 'webdriver-manager update' to download binaries" it's necessary:
```rm -rf node_modules```
```npm install```
```npm run webdriver-update```

## Global Variables
Protractor exports these global variables to your spec (test) file:

browser - A wrapper around an instance of WebDriver, used for navigation and page-wide information. The browser.get method loads a page. Protractor expects Angular to be present on a page, so it will throw an error if the page it is attempting to load does not contain the Angular library. (If you need to interact with a non-Angular page, you may access the wrapped webdriver instance directly with browser.driver).

element - A helper function for finding and interacting with DOM elements on the page you are testing. The element function searches for an element on the page. It requires one parameter, a locator strategy for locating the element. See Using Locators for more information. See Protractor's ElementFinder test suite (elements_spec.js) for more examples.

by - A collection of element locator strategies. For example, elements can be found by CSS selector, by ID, or by the attribute they are bound to with ng-model. See Using Locators.

protractor - The Protractor namespace which wraps the WebDriver namespace. Contains static variables and classes, such as protractor.Key which enumerates the codes for special keyboard signals.

## Example Config File
A simple configuration (conf.js) is shown below:
```
// An example configuration file
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['example-spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};
```
## Using Locators
Protractor exports a global function element, which takes a Locator and will return an ElementFinder. This function finds a single element - if you need to manipulate multiple elements, use the element.all function.

The ElementFinder has a set of action methods, such as click(), getText(), and sendKeys. These are the core way to interact with an element and get information back from it.

When you find elements in Protractor all actions are asynchronous. Behind the scenes, all actions are sent to the browser being controlled using the JSON Webdriver Wire Protocol. The browser then performs the action as a user natively would.

For a list of Protractor-specific locators, see the http://www.protractortest.org/#/api?view=ProtractorBy.

## Report
Name: jasmine-spec-reporter
The jasmine-spec-reporter is available by npm:
```npm i jasmine-spec-reporter -D```

Configuration file:
```
onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true,
                displayErrorMessages: true,
                displayFailed: true,
                displayDuration: true
            },
            summary: {
                displayStacktrace: true,
                displayErrorMessages: true,
                displaySuccessful: true,
                displayFailed: true,
                displayDuration: true
            },
            colors: {
                enabled: true
            }
        }))
```

Name: protractor-jasmine2-html-reporter

The protractor-jasmine2-html-reporter is available by npm:
```npm i protractor-jasmine2-html-reporter -D```

In your Protractor configuration file, register protractor-jasmine2-html-reporter in jasmine:
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
```
exports.config = {
onPrepare: function() {
        var JasmineHtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(new JasmineHtmlReporter({
            savePath: 'reports',
            screenShotsFolder: './shots',
            takeScreenShots: true,
            cleanDestination: false,
            fixedScreenShotName: true
        }));
    },
```

More information can be found on: https://www.npmjs.com/package/protractor-jasmine2-html-reporter