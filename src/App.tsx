import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
  const [assignment, setAssignment] = useState('');
  const [assignmentList, setAssignmentList] = useState<string[]>([]);
  return (
    <>
      <Header 
        assignment={assignment} 
        setAssignment={setAssignment} 
        assignmentList={assignmentList}
        addNewAssignment={setAssignmentList}
      />
      <Assignments assignmentList={assignmentList}/>
    </>
  );
};

export default App;
