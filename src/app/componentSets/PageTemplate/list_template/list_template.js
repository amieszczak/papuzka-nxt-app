'use0'
import "./list_template.css";

export default function ListTemplate(props) {
  return (
    <section>
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



/* {props.list} */
