import styles from "../styles/tables.module.css"
import {useEffect, useState} from "react";

export default function Tables(props: any) {

	function getElementsByText(str: string, tag = 'a') {
		return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
	}

	const [planets, usePlanets] = useState<string[]>([]), [planetV,usePlanetsV] = useState<any>({"Jupiter":false})

	function SwitchUp(item: string, mode: "remove" | "add") {
		const fuap = planetV
		fuap[item] = !fuap[item]
		usePlanets(fuap)
	}

	console.log(props.className)
	useEffect(() => {
		console.log(getElementsByText("Luna","td"))

		getElementsByText("Luna","td").forEach(x=>{x.parentElement.hidden=true})
	},[planets])
	// @ts-ignore
	return (

		<div className={"flex flex-col"}>
			<div className={"flex justify-center"}>
				<input onChange={x=>{SwitchUp("Jupiter","add")}} type={"checkbox"} className={" ml-2"} id={"jupiter"}/>
				<label form="jupiter" className={"ml-2 mr-4"}>Jupiter</label>
				<input type={"checkbox"} className={" ml-2"} id={"Saturno"}/>
				<label form="Saturno" className={"ml-2 mr-4"}>Saturno</label>
				<input type={"checkbox"} className={" ml-2"} id={"Sol"}/>
				<label form="Sol" className={"ml-2 mr-4"}>Sol</label>
				<input type={"checkbox"} className={" ml-2"} id={"Venus"}/>
				<label form="Venus" className={"ml-2 mr-4"}>Venus</label>
				<input type={"checkbox"} className={" ml-2"} id={"jupiter"}/>
				<label form="jupiter" className={"ml-2 mr-4"}>Jupiter</label>
				<input type={"checkbox"} className={" ml-2"} id={"jupiter"}/>
				<label form="jupiter" className={"ml-2 mr-4"}>Jupiter</label>
				<input type={"checkbox"} className={" ml-2"} id={"Luna"}/>
				<label form="Luna" className={"ml-2 mr-4"}>Luna</label>
			</div>
			<div className={props.className + " " + styles.astros}
				 dangerouslySetInnerHTML={{__html: props.card["tables"]}}/>
		</div>)
}
