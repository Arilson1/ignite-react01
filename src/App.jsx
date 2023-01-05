import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import  './global.css';

import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author='Arilson Florencio' 
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat consequuntur quia, corrupti maxime eligendi velit provident omnis, tempore perferendis sapiente iste aliquid laboriosam. Quibusdam voluptates ratione incidunt laudantium cumque sit.' 
          />
          <Post 
            author='Emerson'
            content='Um novo post muito legal!'
          />
        </main>
      </div>
    </div>

  )
}

