import { Ng2BogusPage } from './app.po';

describe('ng2-bogus App', function() {
  let page: Ng2BogusPage;

  beforeEach(() => {
    page = new Ng2BogusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
