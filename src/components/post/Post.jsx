import { format, formatDistanceToNow, set } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { useState } from 'react'

import { Comment } from './../commennt/Comment'
import { Avatar } from './../avatar/Avatar'

import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Muito bom Marcelo, parabéns!! 👏👏'
  ])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const isNewCommentEmpty = newCommentText.length === 0

  function handleCreateComment() {
    event.preventDefault()

    const newCommentText = event.target.comment.value
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)

  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete) {
    const commentsWidthoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWidthoutDeleteOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          switch (line.type) {
            case 'paragraph':
              return <p key={line.content}>{line.content}</p>
            case 'link':
              return <p key={line.content}><a href={line.href}>{line.content}</a></p>
          }
        })}
      </div>
      <form onSubmit={handleCreateComment} className={styles.commentForm}>
        <strong>Deixe seu feadback</strong>
        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}