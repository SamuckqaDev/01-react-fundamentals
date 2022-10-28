import styles from "./App.module.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Post } from "./components/Post";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrk: "http://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala Galera !" },
      {
        type: "paragraph",
        content:
          "Acabei de subir um novo projeto no meu portifa. Fiz no NlW da Rocketseat, muito maça, o nome é IgniteFeed.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
  {
    id: 1,
    author: {
      avatarUrk: "http://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala Galera !" },
      {
        type: "paragraph",
        content:
          "Acabei de subir um novo projeto no meu portifa. Fiz no NlW da Rocketseat, muito maça, o nome é IgniteFeed.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
  {
    id: 1,
    author: {
      avatarUrk: "http://github.com/samuckqadev.png",
      name: "Samuel Tomimatu",
      role: "QA Intern @CIP/SA",
    },
    content: [
      { type: "paragraph", content: "Fala Galera !" },
      {
        type: "paragraph",
        content:
          "Acabei de subir um novo projeto no meu portifa. Fiz no NlW da Rocketseat, muito maça, o nome é IgniteFeed.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}
