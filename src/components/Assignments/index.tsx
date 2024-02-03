import { useState } from "react";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments({
  assignmentList,
  setAssignmentList
}: {
  assignmentList: string[],
  setAssignmentList: (assignmentList: string[]) => void
}) {
  const [completedCounter, setCompletedCounter] = useState(0);
  const handleDeleteButton = (index: number) => {
    const updatedAssignmentList = assignmentList.filter((_, i) => i != index);
    setAssignmentList(updatedAssignmentList);
  };
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignmentList.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedCounter} of {assignmentList.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignmentList.map((assignment, index) => (
          <Assignment 
            assignment={assignment}
            handleDeleteButton={handleDeleteButton}
            id={index}
            completedCounter={completedCounter}
            setCompletedCounter={setCompletedCounter}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
