import styles from './freeConsultationsButton.module.css';

export default function FreeConsultationsButton() {
    return (
        <div className={styles['submit-section']}>
            <input
            type="submit"
            value="ZAPISZ SIĘ NA BEZPŁATNE KONSULTACJE"
            />
        </div>
        
    )
}