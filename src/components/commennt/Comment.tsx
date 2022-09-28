import { useState } from 'react'

import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './../avatar/Avatar'

import styles from './Comment.module.css'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar alt='' hasBorder={false} src='https://scontent.fssa14-1.fna.fbcdn.net/v/t39.30808-6/307885363_3334231036862939_1770154639640304178_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=agQ_xBlzuFEAX_ixvTm&_nc_ht=scontent.fssa14-1.fna&oh=00_AT-BXKXEyYlQWk0iUqm6ubUnEh6uuMjbuOOkvfqeYWrHZw&oe=63335798' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Kamila Kelly</strong>
              <time title='23 de Setembro às 14:56h' dateTime='2022-09-23 08:56:32'>Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}