import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase, trim } from "../../helpers/stringHelpers";

export function Header({
  assignment, 
  setAssignment,
  assignmentList, 
  addNewAssignment
}: {
  assignment: string, 
  setAssignment: (assignment: string) => void,
  assignmentList: string[], 
  addNewAssignment: (assignmentList: string[]) => void
}) {
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
        />
        <button 
          type="button" 
          disabled={!assignment} 
          onClick={() => {
            addNewAssignment([...assignmentList, assignment]);
            setAssignment('');
            }}
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};
