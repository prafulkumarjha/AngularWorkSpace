import { DataBindingAssignmentPage } from './app.po';

describe('data-binding-assignment App', () => {
  let page: DataBindingAssignmentPage;

  beforeEach(() => {
    page = new DataBindingAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
