import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
  EventCalendarContainer,
  SidebarContainer,
  Content,
  CalendarContainer,
  Events,
  Event,
  AddEventForm,
  EventInput,
  AddEventButton,
  ErrorText
} from '../../styles/EventCalendarStyles';

const EventCalendar = () => {

  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
 

  

  return (
    <EventCalendarContainer>
      <SidebarContainer>
      <Sidebar />
      </SidebarContainer>
      <Content>
        <h1>Events and Calender</h1>
        <div>Current Time:</div>
        <CalendarContainer>
          Calender
        </CalendarContainer>
        <AddEventForm>
          <h2>Add New Event</h2>
          <EventInput 
          
          type='text'
          placeholder='Enter event'
          />
          <AddEventButton type='submit'>Add Event</AddEventButton>
        </AddEventForm>
        <Events>
          
        </Events>
      </Content>
    </EventCalendarContainer>
  )
}

export default EventCalendar;