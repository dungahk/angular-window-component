import { AngularWindowComponentPage } from './app.po';

describe('angular-window-component App', () => {
  let page: AngularWindowComponentPage;

  beforeEach(() => {
    page = new AngularWindowComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ngw!!');
  });
});
