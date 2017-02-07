import { SwpaediaPage } from './app.po';

describe('swpaedia App', function() {
  let page: SwpaediaPage;

  beforeEach(() => {
    page = new SwpaediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
