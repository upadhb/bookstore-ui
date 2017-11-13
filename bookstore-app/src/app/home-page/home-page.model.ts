
export const tableSettingModal = {
  columns: {
    bookTitle: {
      title: 'Book Title'
    },
    description: {
      title: 'Description'
    },
    price: {
      title: 'Price'
    }
  },
  hideSubHeader: true,
  actions: false
};

export const mockBooksTableData = [
  {
    bookTitle: 'First Book',
    description: 'My first book is this',
    price: '$ 1.99'
  },
  {
    bookTitle: 'Second Book',
    description: 'My second book is this',
    price: '$ 2.99'
  },
  {
    bookTitle: 'Third Book',
    description: 'My third book is this',
    price: '$ 3.99'
  },
  {
    bookTitle: 'Fourth Book',
    description: 'My fourth book is this',
    price: '$ 4.99'
  }
];

export class Book {
  id: number = null;
  title: string = null;
  description: string = null;
  unitCost: number = null;
  isbn: string = null;
  publicationDate: string = null;
  nbOfPages: number = null;
  imageUrl: string = null;
  language: string = null;
}

export const selectedBooks = [];

export class HomePage {
  bookList: Array<any>;
  filteredBookList: Array<any>;
  filterBy: string;
  selectedBooksList: Array<any> = selectedBooks;
}
