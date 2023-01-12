import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Post from "./components/Post"

import styles from "./App.module.css"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/endersonlynhares.png",
      name: "Enderson Linhares",
      role: "Web Developer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, eventoda Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publisedAt: new Date("2023-01-11 12:53:00")
  }, 
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito ",
      role: "CTO Rocketseat"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, eventoda Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publisedAt: new Date("2023-01-01 18:30:00")
  }
]

function App() {
  return (
    <div className="App">
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
            {posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publisedAt}
                />)
            })}
        </main>
      </div>
    </div>
  )
}

export default App
