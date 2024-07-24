import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
  AnnouncementContainer,
  SidebarContainer,
  Content,
  AnnouncementHeader,
  AnnouncementList,
  AnnouncementItem,
  AnnouncementTitle,
  AnnouncementContent
} from '../../styles/AnnouncementStyles';


const AnnouncementSection = () => {
  
  const [annoucements, setAnnoucements] = useState([]);

 

 
  return (
    <AnnouncementContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <AnnouncementHeader>Announcement</AnnouncementHeader>
        <AnnouncementList>
           
          </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  )
}

export default AnnouncementSection;