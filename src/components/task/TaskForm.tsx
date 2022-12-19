import styles from './TaskForm.module.css';
import plus from '../../assets/plus.svg';
import { useState } from 'react';
import { Task } from './TaskList';


interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

export function TaskForm({ onAddTask }: TaskFormProps) {

  const [taskName, setTaskName] = useState('');
  const canSubmit = taskName.length > 0

  const handleSubmitTask = (event) => {
    event.preventDefault()

    if(!taskName) {
      return
    }

    const task = {
      id: new Date().getTime(),
      name: taskName,
      isFinished: false,
    };

    onAddTask(task);

    setTaskName('')
  };

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value)
  }

  return (
    <form onSubmit={handleSubmitTask} className={styles.form} id='form1'>
      <input
        className={styles.taskInput}
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={taskName}
        onChange={handleTaskNameChange}
      />
      <button className={canSubmit ? styles.submitBtn : styles.disabledBtn + ' ' + styles.submitBtn } type='submit' form='form1' disabled={!canSubmit}>
        <span>Criar</span>
        <img src={plus} />
      </button>
    </form>
  );
}