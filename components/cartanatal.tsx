import paises from "../json/paises.json"
import axios from "axios"
import {useEffect, useState} from "react";
import Image from "next/image";

const Cartanatal = () => {
	const [card, setCard] = useState(null)

	async function CartaSubmit(e: any) {
		e.preventDefault()
		const res = await axios({
			url: "/api/submitCard", method: "POST", data: {
				"nombre": e.target.nombre.value,
				"fecha": "21-02-2000",
				"hora": "00:00:00",
				"pais": "Alemania",
				"ciudad": "Arsten",
				"districto": "Bremen"
			}
		})
		setCard(res.data)
	}

	useEffect(() => {
		console.log("punk")
	}, [card])
	return (
		<>
			<div className={"w-[920px] h-[620px] border-y shadow-md m-auto border-gray-400 mt-16 "}>
				<form id={"cartaForm"} onSubmit={CartaSubmit}>

					<div className={"flex mt-24 justify-evenly"}>
						<div>
							<p className={"text-sm font-mono"}>Dame tu nombre</p>
							<input name="nombre" placeholder={"Entra tu nombre aqui"}
								   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>
						</div>
						<div>
							<p className={"text-sm font-mono"}>Dame la fecha en que naciste</p>
							<input name="fecha" placeholder={"Dame la fecha en que naciste"}
								   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>
						</div>
						<div>
							<p className={"text-sm font-mono"}>Dame la hora en que naciste</p>
							<input placeholder={"Dame la hora en que naciste"}
								   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>
						</div>

					</div>
					<div className={"flex mt-24 justify-evenly"}>
						<div>
							<p className={"text-sm font-mono"}>Dame el pais en que naciste</p>

							<select name="pais" className={"w-[202px] border-b outline-0"}>
								<option></option>
								{paises.map((x) => <option className={"m-auto"}>{x}</option>)}
							</select>
						</div>

						<div>
							<p className={"text-sm font-mono"}>Dame el districto en que naciste</p>
							<input name="hora" placeholder={"Dame la hora en que naciste"}
								   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>
						</div>
						<div>
							<p className={"text-sm font-mono"}>Dame la ciudad en que naciste</p>
							<input name="ciudad" placeholder={"Dame la hora en que naciste"}
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
			{card && <div className={"w-[920px] h-[620px] border-y shadow-md m-auto border-gray-400 mt-16 mb-24"}>
				<div className={"overflow-hidden max-w-[390px] max-h-[400px] border-2 m-auto relative mt-16"}>
                    <Image src={card["img"]} width={400} height={400} className={"m-auto select-none"}/>
                    <div className={"absolute h-[20px] w-[120px] bottom-0 right-0 bg-white"}></div>

				</div>
				{}
				<div className={"flex text-white select-none"} dangerouslySetInnerHTML={{__html: card["tables"]}} />
			</div>}
		</>
	)
}

export default Cartanatal