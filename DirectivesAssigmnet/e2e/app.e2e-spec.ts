import { DirectivesAssigmnetPage } from './app.po';

describe('directives-assigmnet App', () => {
  let page: DirectivesAssigmnetPage;

  beforeEach(() => {
    page = new DirectivesAssigmnetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
