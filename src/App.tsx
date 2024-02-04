import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
  const [assignmentList, setAssignmentList] = 
    useState<Array<{id: number; task: string; completed: boolean }>>([]);
  return (
    <>
      <Header 
        assignmentList={assignmentList}
        setAssignmentList={setAssignmentList}
      />
      <Assignments 
        assignmentList={assignmentList}
        setAssignmentList={setAssignmentList}
      />
    </>
  );
};

export default App;
