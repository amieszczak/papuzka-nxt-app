
import styles from "./listTemplate.module.css";

export default function ListTemplate(props) {
  return (
    <section className={styles.listUnit}> 
      <h2>{props.title}</h2>

      <ul>
        {props.list.map(item => {
            return (
                <li>{item.content}</li>
            )
        })}
      </ul>
    </section>
  );
}


