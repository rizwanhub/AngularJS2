import { YouTubeAppPage } from './app.po';

describe('you-tube-app App', function() {
  let page: YouTubeAppPage;

  beforeEach(() => {
    page = new YouTubeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
