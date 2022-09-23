import { Comment } from './../commennt/Comment';

import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://github.com/marcelo-m-oliveira.png' />
          <div className={styles.authorInfo}>
            <strong>Marcelo M Oliveira</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='23 de Setembro às 08:56h' dateTime='2022-09-23 08:56:32'>Publicado há 4h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Ignite Feed 🚀</p>
        <p>
          👉{' '}<a target='_blank' href='https://github.com/marcelo-m-oliveira/ignite-feed'>github.com/marcelo-m-oliveira/ignite-feed</a>
        </p>
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#nlw</a>{' '}
          <a href=''>#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feadback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}