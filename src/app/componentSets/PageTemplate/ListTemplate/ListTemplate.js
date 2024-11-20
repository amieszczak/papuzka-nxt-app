
import styles from "./listTemplate.module.css";
import classes from '../../../page.module.css';

export default function ListTemplate(props) {
  return (
    <section className={styles.listUnit}> 
      <h2 className={classes.headingSecondary}>{props.title}</h2>
      <div className={styles.listContainer}>
        <ul>
          {props.list.map(item => {
              return (
                  <li className={classes.paragraphPrimary} key={item.id}>{item.content}</li>
              )
          })}
        </ul>
      </div>
    </section>
  );
}