import { SplashPage } from './app.po';

describe('splash App', function() {
  let page: SplashPage;

  beforeEach(() => {
    page = new SplashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
