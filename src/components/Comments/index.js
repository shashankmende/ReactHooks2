import {useState} from 'react'
import CommentItem from '../CommentItem'
import {CommentsList} from './styledComponents'
import {v4 as uuidv4} from 'uuuid'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')

  const [commentText, setCommentText] = useState('')

  const [commentsList, setCommentsList] = useState([])

  const onChangeName = event => setName(event.target.value)

  const onChangeComment = event => setCommentText(event.target.value)

  const onAddComment = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentsList(prevState => [...prevState, newComment])

    setName('')
    setCommentText('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeComment}
        />
        <CommentButton type="submit">Comment</CommentButton>

        <commentsList>
          {commentsList.map(each => (
            <CommentItem commentDetails={each} key={each.id} />
          ))}
        </commentsList>
      </Form>
    </CommentsContainer>
  )
}

export default Comments
