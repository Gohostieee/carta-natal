import paises from "../json/paises.json"

const Cartanatal = () => {
	console.log(paises)

	return (

		<div className={"w-[920px] h-[620px] border-y shadow-md m-auto border-gray-400 mt-16 overflow-auto"}>
			<p className={"text-xl text-center font-mono mt-12 pb-8"}>Informacion general</p>

			<div className={"flex justify-evenly"}>
				<div>
					<p className={"text-sm font-mono"}>Dame tu nombre (Opcional)</p>
					<input placeholder={"Entra tu nombre aqui"}
						   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>
				</div>
				<div>
					<p className={"text-sm font-mono"}>Dame la fecha en que naciste</p>
					<input placeholder={"Dame la fecha en que naciste"}
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

					<select className={"w-[202px] border-b outline-0"}>
						<option></option>
						{paises.map((x) => <option key = {x} className={"m-auto"}>{x}</option>)}
					</select>
				</div>

				<div>
					<p className={"text-sm font-mono"}>Dame el districto en que naciste</p>
					<input placeholder={"Dame la hora en que naciste"}
						   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>
				</div>
				<div>
					<p className={"text-sm font-mono"}>Dame la ciudad en que naciste</p>
					<input placeholder={"Dame la hora en que naciste"}
						   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>
				</div>
			</div>
			<p className={"text-xl text-center font-mono mt-12 border-t p-8"}>Transito de un dia</p>
			<div className={"flex justify-evenly"}>

				<div>
					<p className={"text-sm font-mono"}>Dame la fecha</p>
					<input placeholder={"Dame la fecha "}
						   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>
				</div>
				<div>
					<p className={"text-sm font-mono"}>Dame la hora </p>
					<input placeholder={"Dame la hora "}
						   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>
				</div>

			</div>
			<div className={"flex justify-center mt-12"}>

				<button className={"p-2 h-10 w-52 m-auto border border-gray-400 hover:bg-black hover:text-white transition-all font-light text-lg"} >SUBMIT</button>
			</div>


			<p className={"text-xl text-center font-mono mt-12 border-t p-8"}>Transito de un año</p>
			<div className={"flex justify-evenly mb-12"}>

				<div>
					<p className={"text-sm font-mono"}>Dame el año</p>
					<input placeholder={"Dame el año"}
						   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>
				</div>

			</div>

		</div>
	)
}

export default Cartanatal