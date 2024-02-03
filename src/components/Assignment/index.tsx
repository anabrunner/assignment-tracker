import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

export function Assignment({
  assignment,
  handleDeleteButton,
  id
}: {
  assignment: string,
  handleDeleteButton: (index: number) => void,
  id: number
}) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{assignment}</p>

      <button 
        className={styles.deleteButton} 
        onClick={() => handleDeleteButton(id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
