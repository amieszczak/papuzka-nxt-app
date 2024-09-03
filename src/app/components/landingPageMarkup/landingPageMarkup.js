import styles from './landingPageMarkup.module.css';

export default function LandingPageMarkup({category}) {
    return(
        <div className={styles.background}>
            <p>{category}</p>    
        </div>
    )
}