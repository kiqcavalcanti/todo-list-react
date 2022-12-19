import { Trash } from 'phosphor-react';
import styles from './Task.module.css'
import { useState } from 'react';

export interface TaskProps {
  id: number,
  isFinished: boolean,
  name: string
  onRemoveTask: (id: number) => void
  onChangeTaskStatus: (id: number) => void
}

export function Task({ id, name, onRemoveTask, onChangeTaskStatus, isFinished }: TaskProps) {
  function handleDelete() {
    onRemoveTask(id);
  }

  function handleChangeStatus() {
    onChangeTaskStatus(id);
  }

  return (
    <div className={styles.container}>
      <div className={styles.checkBox}>
        <input id={"checkBox-" + id} type="checkbox" checked={isFinished} onClick={handleChangeStatus}/>
        <label className={isFinished ? styles.checkBoxLabelChecked : styles.checkBoxLabel} for={"checkBox-" + id}></label>
      </div>
      <span className={isFinished ? styles.msgFinished + ' ' + styles.taskMsg : styles.taskMsg}> {name} </span>
      <div className={styles.icon}>
        <Trash onClick={handleDelete} size="16"/>
      </div>
    </div>
  );
}