import Comment from "./Comment"
import Avatar from "./Avatar"

import styles from "./Post.module.css"

import { useState } from "react"
import {format, formatDistanceToNow} from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { useForm } from 'react-hook-form'

const Post = ({author, content, publishedAt}) =>{

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativetoNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})
    const {register, handleSubmit, error, reset} = useForm()

    const [comments, setComments] = useState([
        "Olá, belo conteúdo, hein?!",
    ])

    const onSubmit = (data) =>{
    
        setComments([...comments, data.comment])
        reset()
    }

    const onDeleteComment = (commentToDelete) => {
        const commentsWithoutCommentDeleted = comments.filter( comment => {
            return comment !== commentToDelete
        } )

        setComments(commentsWithoutCommentDeleted)

    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span> {author.role} </span>
                    </div>
                </div>
                
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                     {publishedDateRelativetoNow}
                </time>

            </header>

            <section className={styles.content}>
                {
                    content.map(line => {
                        if(line.type === "paragraph"){
                            return (<p key={line.content}> {line.content} </p>)
                        }else if(line.type === "link"){
                             return (<p key={line.content}> <a> {line.content} </a> </p>)
                        }
                    })
                }
            </section>

            <section className={styles.commentForm}>
                <strong> Deixe seu feedback </strong>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <textarea
                        placeholder="Deixe um comentário"
                        {...register("comment", {required: true, min: 1})}
                        required
                    />
                    <footer>
                        <button type="submit">Comentar</button>
                    </footer>
                </form>
            </section>

            <section className={styles.commentList}>
                
                {comments.map(comment =>{
                    return(
                        <Comment key={comment} content={comment} onDeleteComment={onDeleteComment} />
                    )
                })}

            </section>


        </article>
    )
}

export default Post