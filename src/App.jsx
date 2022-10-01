import { Post } from "./Post";
import "../src/styles.css";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta sed totam aut eligendi velit. Laudantium, sit ducimus alias itaque sed voluptates suscipit magni, nemo ab exercitationem, qui totam inventore quaerat."
      />
    </>
  );
}
