import { Given, When, Then } from 'cucumber';
import AmazonPage from '../pages/amazonDashboard.page.js';

import {assert} from 'chai';
const expect = global['chai'].expect;

Given(/^The user is on amazon page$/,{timeout: 2 * 7000}, async function () {
    await AmazonPage.open();
});

When(/^The user search for "([^"]*)" on the search input$/,{timeout: 2 * 5000}, async function (item) {
    await AmazonPage.searchForItem(item);
    await AmazonPage.clickSearchInput();
});

Then(/^The user should be able to see the results number for the search of "([^"]*)"$/,{timeout: 2 * 5000}, async function (results) {
    const resultsNumber = element(by.cssContainingText("span[dir='auto']", results));

    //Asserts results text is shown in the page
    expect(await resultsNumber.isPresent()).to.equal(true);
});



















// When(/^The user fills out first name with "([^"]*)"$/, async function (firstName) {
//     await ContactPage.fillUserFirstName(firstName);
// });
//
// When(/^The user fills out last name with "([^"]*)"$/, async function (lastName) {
//     await ContactPage.fillUserLastName(lastName);
// });
//
// When(/^The user fills out email with "([^"]*)"$/, async function (email) {
//     await ContactPage.fillUserEmail(email);
// });
//
// When(/^The user fills out phone number with "([^"]*)"$/, async function (phone) {
//     await ContactPage.fillUserPhone(phone);
// });
//
// When(/^The user fills out the feedback with "([^"]*)"$/, async function (comment) {
//     await ContactPage.fillUserComment(comment);
// });
//
// When(/^The user clicks submit button$/, async function () {
//     await ContactPage.clickSubmitButton();
// });
//
// Then(/^The user expect to see the CAPTCHA displayed on the page$/, async function () {
//     //switch to iframe
//     await browser.switchTo().frame(element(by.xpath("//iframe[@title='recaptcha challenge']")).getWebElement());
//
//     //getting captcha button
//     const captchaButton = element(by.css("button.rc-button-default.goog-inline-block"));
//
//     //Asserts Captcha is Present on the page
//     expect(await captchaButton.isPresent()).to.equal(true);
// });






// Then(/^User can see Selenium results$/, async function () {
//     assert.isTrue(await SearchResultsPage.isSeleniumPresent(), 'Selenium Link Not Present');
// });

//const expect = global['chai'].expect;

//we got the submit button on the page to perform assertion
// const getSubmitButton = element(by.css("[type='submit']"));

//Asserts we are on contact us page
// expect(await getSubmitButton.isPresent()).to.equal(true);