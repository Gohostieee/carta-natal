import paises from "../json/paises.json"

const Cartanatal = () => {

	function CartaSubmit (e:any) {
		e.preventDefault()
		console.log(e.cur)
	}
	return (

		<div className={"w-[920px] h-[620px] border-y shadow-md m-auto border-gray-400 mt-16 "}>
			<form id = {"cartaForm"} onSubmit={CartaSubmit}>

				<div className={"flex mt-24 justify-evenly"}>
					<div>
						<p className={"text-sm font-mono"}>Dame tu nombre</p>
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
							{paises.map((x) => <option className={"m-auto"}>{x}</option>)}
						</select>
					</div>

					<div>
						<p className={"text-sm font-mono"}>Dame el districto en que naciste</p>
						<input placeholder={"Dame la hora en que naciste"}
							   className={"w-[202px] font-light outline-0 h-[32px] border-b border-gray-400"}/>
					</div>
					<div>
						<p className={"text-sm font-mono"}>Dame la ciudad en que naciste</p>
						<input type={"submit"} placeholder={"Dame la hora en que naciste"}
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
	)
}

export default Cartanatal