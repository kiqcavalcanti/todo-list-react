import styles from './EmptyTask.module.css';
import clipboard from '../../assets/clipboard.svg';

interface EmptyTaskProps {
  canShow: boolean
}
export function EmptyTask({ canShow = true }: EmptyTaskProps) {
  if(!canShow) {
    return null;
  }

  return (
    <div className={styles.withoutTask}>
      <img src={clipboard}/>
      <span className={styles.msg}>Você ainda não tem tarefas cadastradas</span>
      <span>Crie tarefas e organizee seus itens a fazer</span>
    </div>
  );
}