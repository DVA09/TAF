const { Builder, By, Key, untill } = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();

async function openWebsite(url) {
    try {
        await driver.get(url);
        console.log('Website opened successfully!');
        await driver.findElement(By.name('searchKeyword')).sendKeys('Winter in the forest');
        await driver.findElement(By.css('.r7Rbd.jpBZ0')).click();
    } catch (error) {
        console.error('Failed to open website:', error);
    } finally {        
        driver.quit();               
    }
}

openWebsite('https://unsplash.com/');