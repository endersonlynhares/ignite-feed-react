import { Trash, ThumbsUp } from "phosphor-react"
import styles from "./Comment.module.css"
import Avatar from "./Avatar"
import { useState } from "react"
const Comment = ({content, onDeleteComment}) => {

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    const [applaudCount, setApplaudCount] = useState(0)

    const handleApplaudCount = () =>{
        setApplaudCount(countLast => countLast + 1)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/endersonlynhares.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Enderson Lynhares</strong>
                            <time title="10 de Janeiro de 2023 às 14:14h" dateTime="2023-01-10 14:14:50"> Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Excluir">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleApplaudCount} >
                        <ThumbsUp size={20}/>
                        <div>Aplaudir</div> <span>{applaudCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Comment