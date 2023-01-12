import styles from "./Avatar.module.css"

const Avatar = ({ alt, src, hasBorder = true }) =>{
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt={alt}/>
    )
}

export default Avatar