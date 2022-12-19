import styles from './TaskStatus.module.css';
import { Task } from './TaskList'

interface TaskStatusProps {
  taskList: Task[]
}

export function TaskStatus({ taskList }: TaskStatusProps) {

  const tasksCreated = taskList.length
  const tasksFinished = taskList.filter(task => task.isFinished).length
  const tasksFinishedMsg = tasksCreated === 0
    ? '0'
    : `${tasksFinished} de ${tasksCreated}`

  return (
    <div className={styles.taskStatus}>
      <div>
        <span className={styles.countCreatedTasks}> Tarefas criadas </span>
        <span className={styles.counterBox}> {tasksCreated} </span>
      </div>

      <div>
        <span className={styles.countFinishedTasks}> Concluidas </span>
        <span className={styles.counterBox}> {tasksFinishedMsg} </span>
      </div>
    </div>
  );
}