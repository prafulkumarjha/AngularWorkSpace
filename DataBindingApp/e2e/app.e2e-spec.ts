import { DataBindingAppPage } from './app.po';

describe('data-binding-app App', () => {
  let page: DataBindingAppPage;

  beforeEach(() => {
    page = new DataBindingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
