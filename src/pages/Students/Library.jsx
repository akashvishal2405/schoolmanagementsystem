import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
    LibraryContainer,
    SidebarContainer,
    Content,
    LibraryHeader,
    BookList,
    BookItem,
    BookTitle,
    BorrowButton
} from '../../styles/LibraryStyles';


const LibrarySection = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/library/getall"
      );
      setBooks(response.data.books);
    } catch (error) {
      console.log(`Error fetching books:`, error);
    }
  };


  const handleBorrowBook =  (id) => {

  }
  

  return (
    <LibraryContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <LibraryHeader>Library</LibraryHeader>
        <BookList>
          {books.map((book)=> (
            <BookItem key={book.id}>
                <BookTitle>{book.bookname}</BookTitle>
                <BookAuthor>{book.author}</BookAuthor>
                <BorrowButton onClick={() => handleBorrowBook(book._id)}>Borrow</BorrowButton>
               
            </BookItem>
          ))}
        </BookList>
      </Content>
    </LibraryContainer>
  )
}

export default LibrarySection;