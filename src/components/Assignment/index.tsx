import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

export function Assignment({assignment}: {assignment: string}) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{assignment}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
