import styles from "./Sidebar.module.css"
import {PencilLine} from "phosphor-react"
import Avatar from "./Avatar"
const Sidebar = () =>{
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" />
            <div className={styles.profile}>
                <Avatar src="https://github.com/endersonlynhares.png" />
                <strong>Enderson Linhares</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}

export default Sidebar