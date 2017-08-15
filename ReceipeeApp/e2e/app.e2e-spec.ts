import { ReceipeeAppPage } from './app.po';

describe('receipee-app App', () => {
  let page: ReceipeeAppPage;

  beforeEach(() => {
    page = new ReceipeeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
