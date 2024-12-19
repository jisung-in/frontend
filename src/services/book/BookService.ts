import Service from "../Service";
import { BookInformation, IsbnProps } from "./BookService.types";

class BookService extends Service {
  async getBookInformation({ isbn }: IsbnProps) {
    const { data } = await this.http.get<BookInformation>(`/v1/books/${isbn}`);
    return data;
  }
}
const bookService = new BookService();
export default bookService;
