import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./Post";
import { SideBar } from "./components/SideBar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post author="Samuel Adriano" content="Teste de posategem" />
          <Post author="Samuel Adriano" content="Teste de posategem" />
        </main>
      </div>
    </>
  );
}
