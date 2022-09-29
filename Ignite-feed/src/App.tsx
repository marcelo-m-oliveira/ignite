import { Sidebar } from './components/sidebar/Sidebar'
import { Header } from './components/header/Header'
import { Post } from './components/post/Post'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/marcelo-m-oliveira.png',
      name: 'Marcelo M Oliveira',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Ignite Feed 🚀' },
      { type: 'link', content: 'github.com/marcelo-m-oliveira/ignite-feed', href: 'https://github.com/marcelo-m-oliveira/ignite-feed' },

    ],
    publishedAt: new Date('2022-09-26 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/marcelo-m-oliveira.png',
      name: 'Marcelo M Oliveira',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW eSports, evento da Rocketseat. O nome do projeto é eSports 🚀' },
      { type: 'link', content: 'github.com/marcelo-m-oliveira/eSports', href: 'https://github.com/marcelo-m-oliveira/eSports' },

    ],
    publishedAt: new Date('2022-09-22 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>

  )
}
