import styles from "../styles/tables.module.css"

export default function Tables (props:any)  {
	console.log(props.className)
	return (

		<div ><div className={props.className + " " + styles.astros} dangerouslySetInnerHTML={{__html:props.card["tables"]}}/></div>)
}
