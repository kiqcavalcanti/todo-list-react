import { EmptyTask } from './EmptyTask';
import { TaskStatus } from './TaskStatus';
import { TaskForm } from './TaskForm';
import { useState } from 'react';
import { Task } from './Task';

export interface Task {
  id: number,
  name: string,
  isFinished: boolean
}

export function TaskList() {

  const [taskList, setTaskList] = useState<Task[]>([]);

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  };

  function removeTask(id: number) {
    setTaskList(taskList.filter(task => task.id !== id));
  }

  function changeTaskStatus(id: number) {
    const changedTaskList = taskList.map(task => {
      if (task.id === id) {
        task.isFinished = !task.isFinished;
      }

      return task;
    });

    setTaskList(changedTaskList);
  }

  return (
    <div>
      <TaskForm onAddTask={addTask} />

      <TaskStatus taskList={taskList} />

      <EmptyTask canShow={taskList.length === 0} />

      {taskList.map(task => {
        return <Task
          {...task}
          key={task.id}
          onRemoveTask={removeTask}
          onChangeTaskStatus={changeTaskStatus}
        />;
      })}

    </div>
  );
}