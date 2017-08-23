import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToEditHero() {
    element.all(by.css('.col-1-4')).first().click();
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  getFirstHeroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).first().getText();
  }

  getHeroeDetailName(){
    return element(by.model('hero.name')).getText()
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  enterEditHeroInInput(editHero: string) {
    element(by.tagName('my-heroes')).all(by.tagName('li')).first().click();
    element(by.buttonText('ViewDetails')).click();
    element(by.tagName('input')).clear();
    element(by.tagName('input')).sendKeys(editHero);
    element(by.buttonText('Save')).click();
    browser.waitForAngular();
  }

  getFirstHeroe(){
    var fLi = this.getAllHeroes().first();
    return fLi.all(by.tagName('span')).last().getText();
  }
  deleteHeroe(){
    element(by.buttonText('x')).click();
  }

  navigateToHeroe() {
    element(by.tagName('my-heroes')).all(by.tagName('li')).first().click();
    element(by.buttonText('View Details')).click();

    browser.waitForAngular();
    return element(by.tagName('h1'));
  }
}
