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
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try{
            const response =  await axios.get('http://localhost:4000/api/v1/events/getall');
            setEvents(response.data.events || []);
    } catch (error) {
            console.log('Error fetching events', error);
    }
}

  const addEvent = async (e) => {
    e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/events",
          {
            event: newEvent,
          }
        );
       setEvents([...events, response.data.event]);
       setNewEvent("");
      } catch (error) {
        console.log("Error adding  event:", error);
        if(error.response && error.response.data && error.response.data.error){
                setError(error.response.data.error)
        }else{
          setError("Error adding  event:")
        }
      }
    
  };


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
        <AddEventForm onSubmit={addEvent}>
          <h2>Add New Event</h2>
          <EventInput 
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
          type='text'
          placeholder='Enter event'
          />
          <AddEventButton type='submit'>Add Event</AddEventButton>
        </AddEventForm>
        <Events>
          <h2>Events</h2>
          {events.map((event, index) => {
            <Event key={index}>{event}</Event>
          })}
        </Events>
      </Content>
    </EventCalendarContainer>
  )
}

export default EventCalendar;