
import styles from "./list_template.module.css";

export default function ListTemplate(props) {
  return (
    <section className={styles['list-unit']}> 
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


