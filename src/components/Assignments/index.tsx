import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments({
  assignmentList,
  setAssignmentList
}: {
  assignmentList: Array<{id: number; task: string; completed: boolean}>, 
  setAssignmentList: (assignmentList: Array<{id: number; task: string; completed: boolean}>) => void
}) {
  const handleDeleteButton = (id: number) => {
    const updatedAssignmentList = assignmentList.filter((assignment) => assignment.id !== id);
    setAssignmentList(updatedAssignmentList);
  };
  const handleCompletedTask = (id: number, complete: boolean) => {
    const updatedAssignmentList = assignmentList.map((assignments) => assignments.id === id ? {...assignments, completed: complete} : assignments);
    console.log(complete);
    setAssignmentList(updatedAssignmentList);
  };
  const countCompletedTasks = () => {
    return assignmentList.filter((assignment) => assignment.completed).length;
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
          <span>{countCompletedTasks()} of {assignmentList.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignmentList.map((assignment, index) => (
          <Assignment 
            id={assignment.id}
            assignment={assignment.task}
            handleDeleteButton={handleDeleteButton}
            handleCompletedTask={handleCompletedTask}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
