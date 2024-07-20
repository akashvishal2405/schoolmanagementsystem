import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
  AnnouncementContainer,
  SidebarContainer,
  Content,
  Title,
  AnnouncementForm,
  FormGroup,
  Delete,
  Label,
  TextArea,
  Button,
  AnnouncementList,
  AnnouncementItem,
  AnnouncementContent,
} from "../../styles/AnnouncementStyles";

const Announcement = () => {
  const [addClass, setAddClass] = useState("");
  const [classes, setClasses] = useState([]);

  const handleAddClass = (e) => {
    e.preventDefault();
    setClasses([...classes, addClass]);
    setAddClass(" ");
  };

  return (
    <AnnouncementContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      <Content>
        <Title>Announcement</Title>
        <AnnouncementForm onSubmit={handleAddClass}>
          <FormGroup>
            <Label htmlFor="announcement">Announcement: </Label>
            <TextArea
              id="announcement"
              value={addClass}
              onChange={(e) => setAddClass(e.target.value)}
              required
              rows={4}
              cols={50}
            />
          </FormGroup>
          <Button type="submit">Send Announcement</Button>
        </AnnouncementForm>
        <h2>Announcement</h2>
        <AnnouncementList>
          <AnnouncementItem>
            {classes.map((item, index) => (
              <AnnouncementItem key={index}>
                {item}{" "}
                <Delete>
                  <MdDeleteForever
                    size={25}
                    onClick={() => deleteClass(index)}
                  />
                </Delete>{" "}
              </AnnouncementItem>
            ))}
          </AnnouncementItem>
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
};

export default Announcement;
