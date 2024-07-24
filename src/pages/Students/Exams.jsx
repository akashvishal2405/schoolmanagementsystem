import React from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Bar } from "react-chartjs-2";

import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamResultsContainer,
  ExamSubject,
  ExamResult,
  ExamChartContainer,
} from "../../styles/ExamStyles";

const ExamSection = () => {
 
  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Results</ExamHeader>
        {/* <ExamResultsContainer>
          {examResultsData.subjects.map((sub, index) => (
            <div key={index}>
              <ExamSubject>{sub}</ExamSubject>
              <ExamResult>Score: {examResultsData.result[index]}%</ExamResult>
            </div>
          ))}
          <ExamChartContainer>
            <Bar data={barCharData} options={chartOptions} />
          </ExamChartContainer>
        </ExamResultsContainer> */}
      </Content>
    </ExamContainer>
  );
};

export default ExamSection;
