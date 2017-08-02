import { TradeshippPage } from './app.po';

describe('tradeshipp App', () => {
  let page: TradeshippPage;

  beforeEach(() => {
    page = new TradeshippPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
