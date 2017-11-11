import { BookstoreAppPage } from './app.po';

describe('bookstore-app App', () => {
  let page: BookstoreAppPage;

  beforeEach(() => {
    page = new BookstoreAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
