import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addAnnouncement,
  deleteAnnouncement,
} from "../../slice/announcementSlice";
import { MdDeleteForever } from "react-icons/md";

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
  const [schoolAnnouncement, setSchoolAnnouncement] = useState({
    schoolInfo: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSchoolAnnouncement((curr) => {
      return {
        ...curr,
        [name]: value,
      };
    });
  };

  const AnnouncementInfo = useSelector(
    (state) => state.announcementInfo.announcement
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAnnouncement(schoolAnnouncement));
  };

  const deleteAnnouncementInfo = (index) => {
    dispatch(deleteAnnouncement(index));
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
            <Label htmlFor="announcement">Announcement: </Label>
            <TextArea
              id="announcement"
              rows={4}
              cols={50}
              name="schoolInfo"
              value={schoolAnnouncement.schoolInfo}
              onChange={handleChange}
            />
          </FormGroup>
          <Button type="submit">Send Announcement</Button>
        </AnnouncementForm>
        <h2>Announcement</h2>
        <AnnouncementList>
          {AnnouncementInfo.map((annon, index) => (
            <AnnouncementItem key={index}>
              {annon.schoolInfo}
              <Delete onClick={() => deleteAnnouncementInfo(index)}>
                <MdDeleteForever  />
              </Delete>
            </AnnouncementItem>
          ))}
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
};

export default Announcement;
