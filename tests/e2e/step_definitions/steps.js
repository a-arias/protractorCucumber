import { Given, When, Then } from 'cucumber';
import GoogleSearchPage from '../pages/googlesearch.page';
import SearchResultsPage from '../pages/results.page';
import {assert} from 'chai';
const expect = global['chai'].expect;

Given(/^User is on Epam page$/, async function () {
    await GoogleSearchPage.open();
});

When(/^User searches for Selenium$/, async function () {
    await GoogleSearchPage.searchFor('Selenium');
});

Then(/^User can see Selenium results$/, async function () {
    assert.isTrue(await SearchResultsPage.isSeleniumPresent(), 'Selenium Link Not Present');
});



//const expect = global['chai'].expect;

//we got the submit button on the page to perform assertion
// const getSubmitButton = element(by.css("[type='submit']"));

//Asserts we are on contact us page
// expect(await getSubmitButton.isPresent()).to.equal(true);