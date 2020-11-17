class AmazonPage {
    constructor() {
        this.searchInput        = element(by.id('twotabsearchtextbox'));
        this.searchInputButton  = element(by.css('[type="submit"]'));
    }

    //Opens up the amazon page
    async open() {
        await browser.get('https://www.amazon.com');
    }

    //search for an item on amazon.com
    async searchForItem(itemName){
        await this.searchInput.sendKeys(itemName);
    }

    //clicks search button
    async fillUserFirstName(){
        await this.searchInputButton.click();
    }
}
export default new AmazonPage();