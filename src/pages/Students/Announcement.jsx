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

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
        
        const response =  await axios.get('http://localhost:4000/api/v1/announcements/getall');
        setEvents(response.data.announcements);
} catch (error) {
        console.log('Error fetching annoucements', error);
}
}
 
  return (
    <AnnouncementContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <AnnouncementHeader>Announcement</AnnouncementHeader>
        <AnnouncementList>
            {annoucements.map((annoucement) => (
              <AnnouncementItem key={annoucement._id}>
                    <AnnouncementTitle>{annoucement.annoucement}</AnnouncementTitle>
              </AnnouncementItem>
            ))}
          </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  )
}

export default AnnouncementSection;