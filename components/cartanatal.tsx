import paises from "../json/paises.json"
import axios from "axios"
import {useEffect, useState} from "react";
import Image from "next/image";
import Tables from "./tables";
import {scrollTo} from "./utils/scrollTo"
import styles from "../styles/tables.module.css"
const Cartanatal = () => {
	interface userData {
		nombre: string,
		fecha: string,
		hora: string,
		pais: string,
		ciudad: string,
		districto: string
	}

	interface userDataErrorState {
		nombre: {
			errorMsg: string | null,
			errorStatus: boolean
		},
		fecha: {
			errorMsg: string | null,
			errorStatus: boolean
		},
		hora: {
			errorMsg: string | null,
			errorStatus: boolean
		},
		pais: {
			errorMsg: string | null,
			errorStatus: boolean
		},
		ciudad: {
			errorMsg: string | null,
			errorStatus: boolean
		},
		districto: {
			errorMsg: string | null,
			errorStatus: boolean
		}
	}

	const[refresh,useRefresh] = useState(0),[height,useHeight] = useState(620), [card, setCard] = useState<any>(null), [user, setUser] = useState<userData | null>(null), [errors, useErrors] = useState<userDataErrorState>({
		nombre: {
			errorMsg: "",
			errorStatus: false
		},
		fecha: {
			errorMsg: "",
			errorStatus: false
		},
		hora: {
			errorMsg: "",
			errorStatus: false
		},
		pais: {
			errorMsg: "",
			errorStatus: false
		},
		ciudad: {
			errorMsg: "",
			errorStatus: false
		},
		districto: {
			errorMsg: "",
			errorStatus: false
		}
	})

	async function CartaSubmit(e: any) {
		e.preventDefault()
		let errorFound = false;
		if(e.target.nombre.value.length < 1){
			errors.nombre={errorMsg:"El nombre no puede estar vacio!",errorStatus:true}
			errorFound = true
		}
		else {
			errors.nombre={errorMsg:"",errorStatus:false}
		}
		if(e.target.ciudad.value.length < 1){
			errors.ciudad={errorMsg:"La ciudad no puede estar vacia!",errorStatus:true}
			errorFound = true
		}
		else {
			errors.ciudad={errorMsg:"",errorStatus:false}
		}
		if(e.target.pais.value.length < 1){
			errors.pais={errorMsg:"El pais no puede estar vacio!",errorStatus:true}
			errorFound = true
		}
		else {
			errors.pais={errorMsg:"",errorStatus:false}
		}
		if(e.target.hora.value.length < 1){
			errors.hora={errorMsg:"La hora no puede estar vacia!",errorStatus:true}
			errorFound = true
		}
		else {
			errors.hora={errorMsg:"",errorStatus:false}
		}
		if(e.target.fecha.value.length < 1){
			errors.fecha={errorMsg:"La fecha no puede estar vacia!",errorStatus:true}
			errorFound = true
		}
		else {
			errors.fecha={errorMsg:"",errorStatus:false}
		}
		if(e.target.districto.value.length < 1){
			errors.districto={errorMsg:"El districto no puede estar vacio!",errorStatus:true}
			errorFound = true

		}
		else {
			errors.districto={errorMsg:"",errorStatus:false}
		}
		let res = null,user = null, height = 620
		if(!errorFound){
			console.log("xd")
			SetData({
				"nombre": e.target.nombre.value,
				"fecha": "21-02-2000",
				"hora": "00:00:00",
				"pais": "Alemania",
				"ciudad": "Arsten",
				"districto": "Bremen"
			})

			user = {
				"nombre": e.target.nombre.value,
				"fecha": e.target.fecha.value,
				"hora": e.target.hora.value,
				"pais": e.target.pais.value,
				"ciudad": e.target.ciudad.value,
				"districto": "null"
			}
			height = 0
		}
		console.log("w")
		useErrors(errors)
		setUser(user)
		useHeight(height)

		useRefresh(refresh + 1)
	}
	async function SetData (usr:userData) {
		const res = await axios({
			url: "/api/submitCard", method: "POST", data: usr
		})
		if(res != null) {
			scrollTo({id:"carta", ref:null, duration:3000})
		}
		setCard(res?.data)
		useHeight(620)
	}
	useEffect(() => {
		if (card != null)
			console.log(card["tables"])

		console.log("punk")
	}, [card])
	return (
		<>
			<div className={"w-[920px] border-y shadow-md m-auto border-gray-400 mt-16 transition-all duration-500 overflow-hidden"} style={{height: height+"px"}}>
				<form id={"cartaForm"} onSubmit={CartaSubmit}>

					<div className={"flex mt-24 justify-evenly"}>
						<div>
							<p  className={"text-base font-mono text-red-700 underline"}>{errors.nombre.errorMsg}</p>

							<p className={"text-sm font-mono"}>Dame tu nombre</p>

							<input name="nombre" placeholder={"Entra tu nombre aqui"}
								   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>

						</div>
						<div>
							<p  className={"text-base font-mono text-red-700 underline"}>{errors.fecha.errorMsg}</p>

							<p className={"text-sm font-mono"}>Dame la fecha en que naciste</p>
							<input name="fecha" placeholder={"Dame la fecha en que naciste"}
								   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>
						</div>
						<div>
							<p  className={"text-base font-mono text-red-700 underline"}>{errors.hora.errorMsg}</p>

							<p className={"text-sm font-mono"}>Dame la hora en que naciste</p>
							<input name={"hora"} placeholder={"Dame la hora en que naciste"}
								   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>
						</div>

					</div>
					<div className={"flex mt-24 justify-evenly"}>
						<div>
							<p  className={"text-base font-mono text-red-700 underline"}>{errors.pais.errorMsg}</p>

							<p className={"text-sm font-mono"}>Dame el pais en que naciste</p>

							<select name="pais" className={"w-[202px] border-b outline-0"}>
								<option></option>
								{paises.map((x) => <option key = {x} className={"m-auto"}>{x}</option>)}
							</select>
						</div>

						<div>
							<p  className={"text-base font-mono text-red-700 underline"}>{errors.districto.errorMsg}</p>

							<p className={"text-sm font-mono"}>Dame el districto en que naciste</p>

							<input name="districto" placeholder={"Dame el districto en que naciste"}
								   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>
						</div>
						<div>
							<p  className={"text-base font-mono text-red-700 underline"}>{errors.ciudad.errorMsg}</p>

							<p className={"text-sm font-mono"}>Dame la ciudad en que naciste</p>
							<input name="ciudad" placeholder={"Dame la ciudad en que naciste"}
								   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>
						</div>

					</div>
					<div className={"flex justify-center mt-12"}>

						<button
							className={"p-2 h-10 w-52 m-auto border border-gray-400 hover:bg-black hover:text-white transition-all font-light text-lg"}>SUBMIT
						</button>
					</div>
				</form>

			</div>
			<div id={"carta"}>

				{card && <div
                    className={"w-[920px] border-y shadow-md m-auto border-gray-400 mt-16 mb-24 flex flex-col justify-center"}>
                    <div>
                        <p className={"text-center font-light text-6xl"}>{user?.nombre}</p>

                    </div>
                    <div className={"flex justify-center border-b m-auto mt-8 pb-2 border-gray-500"}>
                        <p className={"text-center font-light ml-8 mr-8 text-2xl"}>Fecha:{user?.fecha}</p>

                        <p className={"text-center font-light ml-8 mr-8 text-2xl"}>Hora:{user?.hora}</p>

                        <p className={"text-center font-light ml-8 mr-8 text-2xl"}>Provenencia:{user?.pais}</p>

                    </div>
                    <div className={"overflow-hidden max-w-[390px] max-h-[400px] border-2 m-auto relative mt-16 mb-12"}>
                        <Image src={card["img"]} width={400} height={400} className={"m-auto select-none"}/>
                        <div className={"absolute h-[20px] w-[120px] bottom-0 right-0 bg-white"}></div>

                    </div>
                    <Tables className={"flex select-none m-auto justify-evenly fuap"} card={card}/>
					{/*"<div  style={styles} dangerouslySetInnerHTML={{__html: card["aspect"]}}/>"*/}
                </div>}
			</div>


		</>
	)
}

export default Cartanatal