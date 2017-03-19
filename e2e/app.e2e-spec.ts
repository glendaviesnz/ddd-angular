import { DddAngularPage } from './app.po';

describe('ddd-angular App', () => {
  let page: DddAngularPage;

  beforeEach(() => {
    page = new DddAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
