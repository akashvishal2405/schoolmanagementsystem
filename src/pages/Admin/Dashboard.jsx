import React, {useState, useEffect} from 'react';
import Sidebar from "./Sidebar";
import axios from 'axios';
import EventCalendar from './EventCalendar';
import Announcement from './Announcement';
import Performance from './Performance';

import {
    AdminDashboardContainer,
    SidebarContainer,
    Content,
    TopContent,
    BottomContent,
    Section,
    SectionTitle,
    CardContainer,
    Card,
    CardContent,
    CardTitle
} from "../../styles/DashboardStyles"

const AdminDashboard = () => {
    
       
  return (
    <AdminDashboardContainer>
        {/* <SidebarContainer> */}
        <Sidebar />
        {/* </SidebarContainer> */}
        <Content>
                 <TopContent>
                <Section>
                    <SectionTitle>Overview</SectionTitle>
                    <CardContainer>
                        <Card>
                            <CardTitle>Total Students</CardTitle>
                            <CardContent>500</CardContent>
                        </Card>
                        <Card>
                            <CardTitle>Total Teacher</CardTitle>
                            <CardContent>50</CardContent>
                        </Card>
                        <Card>
                            <CardTitle>Total Classes</CardTitle>
                            <CardContent>20</CardContent>
                        </Card>
                    </CardContainer>
                </Section>
                <Section>
                <SectionTitle>All Events</SectionTitle>
                </Section>
            </TopContent>
            <BottomContent>
                <Performance  />
                <Announcement  />
            </BottomContent>
        </Content>
    </AdminDashboardContainer>
  )
}

export default AdminDashboard;