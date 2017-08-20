# test-automation-javascript
Web test automation example project using JavaScript, NodeJS, Mocha, Chai, Selenium3, Appium and Page Object Model (POM)

## Using NodeJS v8+
This project uses NodeJS v8+ because it supports out of the box async/await which makes the code cleaner to read and write.

It's recommended to use Node Version Manager [nvm](https://github.com/creationix/nvm/blob/master/README.md) incase you would like the freedom of switching between different node versions.

## Setup Yarn - dependency manager

To [install yarn](https://yarnpkg.com/lang/en/docs/install/) use [Homebrew](https://brew.sh/)

To quickly and easily create a `package.json` file which contains information and list of all required dependencies for this project we can use yarn wizard by executing following command `yarn init` in our terminal. More information can be found on [yarnpkg](https://yarnpkg.com/lang/en/docs/cli/init/) website.

### Installing dependencies
To add required packages using yarn use [yarn add](https://yarnpkg.com/lang/en/docs/cli/install/) command. To add required dependencies to our `package.json` file run following command in the terminal:
* yarn add [package to add] --save-dev
  * packages to add:
    * [selenium-webdriver](https://yarnpkg.com/en/package/selenium-webdriver)
    * [selenium-standalone](https://yarnpkg.com/en/package/selenium-standalone)
    * [mocha](https://yarnpkg.com/en/package/mocha)
    * [chai](https://yarnpkg.com/en/package/chai)


## Setup project structure
The folder structure used here takes into consideration this being as part of the main application source code or as standalone. Simply add `ui-tests` as part of your main applications folder structure and then simply have QA or Dev add tests for each respective page as it's being developed.
