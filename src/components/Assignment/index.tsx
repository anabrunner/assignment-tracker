import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useState } from "react";

export function Assignment({
  assignment,
  handleDeleteButton,
  id,
  completedCounter,
  setCompletedCounter
}: {
  assignment: string,
  handleDeleteButton: (index: number) => void,
  id: number,
  completedCounter: number,
  setCompletedCounter: (count: number) => void
}) {
  const [complete, setComplete] = useState(false);
  const checkCompleteIcon = () => {
    if (complete) {
      return (<BsFillCheckCircleFill />);
    } else {
      return (<div />);
    };
  };
  const checkCompleteText = () => {
    if (complete) {
      return (<p className={styles.textCompleted}>{assignment}</p>);
    } else {
      return (<p>{assignment}</p>)
    }
  }
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={() => {
        if (complete) {
          setComplete(false);
          setCompletedCounter(completedCounter - 1);
        } else {
          setComplete(true);
          setCompletedCounter(completedCounter + 1);
        }
      }}>
        {checkCompleteIcon()}
      </button>

      {checkCompleteText()}

      <button 
        className={styles.deleteButton} 
        onClick={() => handleDeleteButton(id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
