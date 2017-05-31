import { Ng4SelcukRatingPage } from './app.po';

describe('ng4-selcuk-rating App', () => {
  let page: Ng4SelcukRatingPage;

  beforeEach(() => {
    page = new Ng4SelcukRatingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
