import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase, trim } from "../../helpers/stringHelpers";
import { useState } from "react";

export function Header({
  assignmentList, 
  setAssignmentList
}: {
  assignmentList: Array<{id: number; task: string; completed: boolean}>, 
  setAssignmentList: (assignmentList: Array<{id: number; task: string; completed: boolean}>) => void
}) {
  const [assignment, setAssignment] = useState('');
  const handleCreateButton = () => {
    setAssignmentList([...assignmentList,
      {id: assignmentList.length, task: assignment, completed: false}]);
    setAssignment('');
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCreateButton();
    };
  };
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input 
          placeholder="Add a new assignment" 
          type="text" 
          value={assignment}
          onChange={(e) => setAssignment(trim(e.target.value))}
          onKeyDown={handleKeyPress} 
        />
        <button 
          type="button" 
          disabled={!assignment} 
          onClick={handleCreateButton}
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};
