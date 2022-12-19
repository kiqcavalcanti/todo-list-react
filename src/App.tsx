import { Header } from './components/header/Header';
import './global.css'
import styles from './App.module.css'
import { TaskList } from './components/task/TaskList';

export function App() {
    return (
      <div>
        <Header/>
        <div className={styles.wrapper}>
          <TaskList/>
        </div>
      </div>
    );
}