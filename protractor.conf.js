exports.config = {
    framework: 'custom',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['./tests/e2e/features/*.feature'],
    getPageTimeout: 50000,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 50000
    },
    allScriptsTimeout: 50000,
    cucumberOpts: {
        require: ['tests/e2e/step_definitions/*.js'],
        format: 'json:results.json',
        strict: false,
        'no-colors': true
    },
    onPrepare: () => {
        require("@babel/register");
        browser.ignoreSynchronization = true;
        var width = 1600;
        var height = 1200;
        browser.driver.manage().window().setSize(width, height);
        browser.driver.manage().timeouts().implicitlyWait(50000);

        var chai = require('chai'); // chai
        var chaiAsPromised = require("chai-as-promised"); // deal with promises from protractor
        chai.use(chaiAsPromised); // add promise candy to the candy of chai
        global.chai = chai; // expose chai globally

    }
}