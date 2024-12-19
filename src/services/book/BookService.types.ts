export interface BookInformation {
  code: number;
  status: string;
  message: string;
  data: {
    title: string;
    content: string;
    isbn: string;
    publisher: string;
    imageUrl: string;
    thumbnail: string;
    authors: string[];
    ratingAverage: number;
    dateTime: string;
  };
}

export interface IsbnProps {
  isbn: string;
}
