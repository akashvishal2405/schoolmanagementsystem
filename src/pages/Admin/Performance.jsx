import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
  PerformanceContainer,
  SidebarContainer,
  Content,
  PerformanceContent,
  PerformanceHeader,
  SchoolPerformance,
  IndividualPerformance
} from '../../styles/PerformanceStyles';


const Performance = () => {

  const schoolPerformanceData = {
    averageScore: 85,
    totalStudents:100,
  }; 

  const IndividualPerformanceData = [
    {id: 1, name: "Steve Harington", score: 90},
    {id: 2, name: "Steve Harington", score: 86},
    {id: 3, name: "Steve Harington", score: 93},
  ]
  return (
   <PerformanceContainer>
    <SidebarContainer>
    <Sidebar />
    </SidebarContainer>
    
    <Content>
      <PerformanceContent>
        <PerformanceHeader>School Performance</PerformanceHeader>
        <SchoolPerformance>
          <p>Average Score: {schoolPerformanceData.averageScore}</p>
          <p>Total Students: {schoolPerformanceData.totalStudents}</p>
        </SchoolPerformance>
        <PerformanceHeader>Individual Performance</PerformanceHeader>
        <IndividualPerformance>
            {IndividualPerformanceData.map((student) => (
              <p key={student.id}>
                {student.name}: {student.score}
              </p>
            ))}
        </IndividualPerformance>
      </PerformanceContent>
    </Content>
   </PerformanceContainer>
  )
}

export default Performance;