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
  const examResultsData = {
    subjects: ["Math", "Science", "English", "History"],
    result: [80, 75, 90, 85],
  };

  const barCharData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        labels: "Exam Results",
        backgroundColor: "#0007bff",
        borderColor: "@007bff",
        borderwidth: "1",
        hoverBackgroundColor: "#0056b3",
        hoverBorderColor: "#0056b3",
        data: examResultsData.result,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        max: 100,
      },
    },
  };
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
