import { SoccerManagerWebPage } from './app.po';

describe('soccer-manager-web App', function() {
  let page: SoccerManagerWebPage;

  beforeEach(() => {
    page = new SoccerManagerWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
