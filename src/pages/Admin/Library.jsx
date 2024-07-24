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

  

  return (
    <LibraryContainer>
      <SidebarContainer>
      <Sidebar />
      </SidebarContainer>
      
      <Content>
        <Title>Library Management</Title>
        <AddBookForm>
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
         
        </BookList>
      </Content>
    </LibraryContainer>
  )
}

export default Library;