import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
  LibraryContainer,
  SidebarContainer,
  Content,
  Title,
  AddBookForm,
  FormGroup,
  Label,
  Input,
  Button,
  BookList,
  BookItem,
  BookTitle,
  BookAuthor,
  ActionButton
} from '../../styles/LibraryStyles';

const Library = () => {
  
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

  const addBook = async (book) => {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/library", {
            bookname: book.title,
            author: book.author,
          });
       setBooks([...books, response.data]);
      } catch (error) {
        console.log("Error adding  book:", error);
      
    }
  };

  const handleBookPick = async (bookId, studentId) => {

  }

  const handleBookReturn = async (booksId, studentId) => {

  }

  return (
    <LibraryContainer>
      <SidebarContainer>
      <Sidebar />
      </SidebarContainer>
      
      <Content>
        <Title>Library Management</Title>
        <AddBookForm onSubmit={(e) => {
          e.preventDefault();
          const book = {
            id: Math.random().toString(36).substr(2, 9),
            title: e.target.title.value,
            author: e.target.author.value,
          };
          addBook(book);
          e.target.reset();
        }}>
          <h2>Add New Book</h2>
          <FormGroup>
            <Label htmlFor='title'>Title</Label>
            <Input type='text'  id='title'/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor='author'>Author</Label>
            <Input type='text'  id='author'/>
          </FormGroup>
          <Button type='submit'>Add Book</Button>
        </AddBookForm>
        <BookList>
          {books.map((book)=> (
            <BookItem key={book.id}>
                <BookTitle>{book.bookname}</BookTitle>
                <BookAuthor>{book.author}</BookAuthor>
                <ActionButton onClick={() => handleBookPick(book._id, 'student123')}>Pick</ActionButton>
                <ActionButton onClick={() => handleBookPick(book._id, 'student123')}>Return</ActionButton>
            </BookItem>
          ))}
        </BookList>
      </Content>
    </LibraryContainer>
  )
}

export default Library;