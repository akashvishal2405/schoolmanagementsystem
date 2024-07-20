import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
      PerformanceContainer,
      SidebarContainer,
      Content,
      PerformanceHeader,
      PerformanceInfo,
      PerformanceGraphContainer,
      TotalMarks
} from '../../styles/PerformanceStyles';
import { Line } from 'react-chartjs-2';





const PerformanceSection = () => {

  const performanceData = {
    months: ["Jan","Feb","Mar","Apr","May","Jun"],
    marks: [90,85, 92,85, 89],
    totalMarks: 520
  };

  const lineCharData = {
    labels: performanceData.months,
    datasets: [
      {
        label: "Performance Trends",
        fill: false,
        lineTension: "#007bff",
        borderColor: "#007bff",
        data: performanceData.marks
      }
    ]
  }

  return (
    <PerformanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <PerformanceHeader>Performance</PerformanceHeader>
        <PerformanceInfo>
          <PerformanceGraphContainer>
            {/* <Line 
                data = {lineCharData}
                options = {{
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtzero: true
                      }
                    }]
                  }
                }}
            /> */}
          </PerformanceGraphContainer>
          <TotalMarks>Totle Marks: {performanceData.totalMarks}</TotalMarks>
        </PerformanceInfo>
      </Content>
    </PerformanceContainer>
  )
}

export default PerformanceSection;