import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  AnnouncementContainer,
  SidebarContainer,
  Content,
  Title,
  AnnouncementForm,
  FormGroup,
  Label,
  TextArea,
  Button,
  AnnouncementList,
  AnnouncementItem,
  AnnouncementContent
} from '../../styles/AnnouncementStyles';




const CheckAnnoucementSection = () => {

  const [annoucement, setAnnoucement] = useState([]);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/announcements",
          {
            annoucement: annoucement,
          }
        );
        console.log("Annoucement Sent", response.data);

        setAnnoucement("");
        fetchAnnouncements();
        console.log(`Response data:`, response.data); 
      } catch (error) {
        console.log("Error sending Annoucement:", error);
      }
    
  };

  return (
    <AnnouncementContainer>
      <SidebarContainer>
      <Sidebar />
      </SidebarContainer>
      
      <Content>
          <Title>Announcement</Title>
          <AnnouncementForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor='announcement'>Announcement: </Label>
              <TextArea 
              id='announcement'
              value={annoucement}
              onChange={(e) => setAnnoucement(e.target.value)}
              required
              rows={4}
              cols={50}
              />
              
            </FormGroup>
            <Button  type="submit">Send Announcement</Button>
          </AnnouncementForm>
          <h2>Announcement</h2>
          <AnnouncementList>
            {annoucements.map((annoucement) => (
              <AnnouncementItem key={annoucement}>
                    <AnnouncementContent>{annoucement.annoucement}</AnnouncementContent>
              </AnnouncementItem>
            ))}
          </AnnouncementList>
        </Content>
    </AnnouncementContainer>
)
}

export default CheckAnnoucementSection;