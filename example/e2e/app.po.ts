import { browser, by, element } from 'protractor';

export class AngularWindowComponentPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngw-root h1')).getText();
  }
}
