// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios"
type Data = {
	name: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	switch(req.method) {
		case "POST":
			//const fuap = await axios({url: "http://127.0.0.1:5000/get_carta", method: "POST", data: req.body}).then()
			//console.log(fuap.data.bars)
			//res.send(fuap.data)
			setTimeout(x=>{
				res.send([`<div class="flex select-none m-auto justify-evenly fuap tables_astros__hhkeu"><table class="astros pull-left"><tbody><tr><th colspan="2">Planeta </th><th class="casa">Casa </th></tr><tr><td class="longitud"><div class="dat"></div>Sol</td><td class="longitud"><div class="dat"></div>01°36'52"</td><td class="casa">4</td></tr><tr><td class="longitud"><div class="dat"></div>Luna</td><td class="longitud"><div class="dat"></div>18°18'52"</td><td class="casa">10</td></tr><tr><td class="longitud"><div class="dat"></div>Mercurio</td><td class="longitud"><div class="dat"></div>17°09'02"</td><td class="casa">4</td></tr><tr><td class="longitud"><div class="dat"></div>Venus</td><td class="longitud"><div class="dat"></div>03°24'29"</td><td class="casa">3</td></tr><tr><td class="longitud"><div class="dat"></div>Marte</td><td class="longitud"><div class="dat"></div>06°46'34"</td><td class="casa">5</td></tr><tr><td class="longitud"><div class="dat"></div>Júpiter</td><td class="longitud"><div class="dat"></div>01°01'20"</td><td class="casa">6</td></tr><tr><td class="longitud"><div class="dat"></div>Saturno</td><td class="longitud"><div class="dat"></div>11°43'15"</td><td class="casa">7</td></tr><tr><td class="longitud"><div class="dat"></div>Urano</td><td class="longitud"><div class="dat"></div>17°38'42"</td><td class="casa">3</td></tr><tr><td class="longitud"><div class="dat"></div>Neptuno</td><td class="longitud"><div class="dat"></div>05°03'44"</td><td class="casa">3</td></tr><tr><td class="longitud"><div class="dat"></div>Plutón</td><td class="longitud"><div class="dat"></div>12°44'38"</td><td class="casa">2</td></tr></tbody></table>,<table class="astros pull-left"><tbody><tr><th colspan="2">Casas  (Placidus)</th></tr><tr><td>Casa 1 (AC)</td><td class="longitud"><div class="dat"></div>10°42'38"</td></tr><tr><td>Casa 2</td><td class="longitud"><div class="dat"></div>09°36'21"</td></tr><tr><td>Casa 3</td><td class="longitud"><div class="dat"></div>15°26'21"</td></tr><tr><td>Casa 4</td><td class="longitud"><div class="dat"></div>23°54'33"</td></tr><tr><td>Casa 5</td><td class="longitud"><div class="dat"></div>26°28'14"</td></tr><tr><td>Casa 6</td><td class="longitud"><div class="dat"></div>21°23'44"</td></tr><tr><td>Casa 7</td><td class="longitud"><div class="dat"></div>10°42'38"</td></tr><tr><td>Casa 8</td><td class="longitud"><div class="dat"></div>09°36'21"</td></tr><tr><td>Casa 9</td><td class="longitud"><div class="dat"></div>15°26'21"</td></tr><tr><td>Casa 10 (MC)</td><td class="longitud"><div class="dat"></div>23°54'33"</td></tr><tr><td>Casa 11</td><td class="longitud"><div class="dat"></div>26°28'14"</td></tr><tr><td>Casa 12</td><td class="longitud"><div class="dat"></div>21°23'44"</td></tr></tbody></table>,                  <table class="astros pull-left nopadding"><tbody><tr><th>Planeta</th><th>Aspecto</th><th>Planeta</th><th>Orbes</th></tr><tr><td class="longitud"> <div class="dat"></div>Sol</td><td class="agua"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Júpiter</td><td class="orbe">0.59° (S)</td></tr><tr><td class="longitud"> <div class="dat"></div>Luna</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Mercurio</td><td class="orbe">1.16° (S)</td></tr><tr><td class="longitud"> <div class="dat"></div>Luna</td><td class="agua"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Saturno</td><td class="orbe">6.59° (S)</td></tr><tr><td class="longitud"> <div class="dat"></div>Luna</td><td class="tierra"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Urano</td><td class="orbe">0.67° (S)</td></tr><tr><td class="longitud"> <div class="dat"></div>Luna</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Plutón</td><td class="orbe">5.57° (S)</td></tr><tr><td class="longitud"> <div class="dat"></div>Mercurio</td><td class="tierra"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Urano</td><td class="orbe">0.49° (A)</td></tr><tr><td class="longitud"> <div class="dat"></div>Mercurio</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Plutón</td><td class="orbe">4.41° (S)</td></tr><tr><td class="longitud"> <div class="dat"></div>Venus</td><td class="agua"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Marte</td><td class="orbe">3.37° (A)</td></tr><tr><td class="longitud"> <div class="dat"></div>Venus</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Júpiter</td><td class="orbe">2.39° (S)</td></tr><tr><td class="longitud"> <div class="dat"></div>Venus</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Neptuno</td><td class="orbe">1.65° (A)</td></tr><tr><td class="longitud"> <div class="dat"></div>Marte</td><td class="agua"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Neptuno</td><td class="orbe">1.71° (S)</td></tr><tr><td class="longitud"> <div class="dat"></div>Marte</td><td class="agua"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Plutón</td><td class="orbe">5.97° (A)</td></tr><tr><td class="longitud"> <div class="dat"></div>Júpiter</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Neptuno</td><td class="orbe">4.04° (A)</td></tr><tr><td class="longitud"> <div class="dat"></div>Saturno</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Urano</td><td class="orbe">5.92° (A)</td></tr><tr><td class="longitud"> <div class="dat"></div>Saturno</td><td class="tierra"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Plutón</td><td class="orbe">1.02° (A)</td></tr><tr><td class="longitud"> <div class="dat"></div>Saturno</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Ascendente</td><td class="orbe">1.01° (A)</td></tr></tbody></table></div>`.replace("",""),`<div id="carta"><div class="w-[920px] border-y shadow-md m-auto border-gray-400 mt-16 mb-24 flex flex-col justify-center"><div><p class="text-center font-light text-6xl">a</p></div><div class="flex justify-center border-b m-auto mt-8 pb-2 border-gray-500"><p class="text-center font-light ml-8 mr-8 text-2xl">Fecha:1</p><p class="text-center font-light ml-8 mr-8 text-2xl">Hora:1</p><p class="text-center font-light ml-8 mr-8 text-2xl">Provenencia:Bahréin</p></div><div class="overflow-hidden max-w-[390px] max-h-[400px] border-2 m-auto relative mt-16 mb-12"><span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27400%27%20height=%27400%27/%3e" style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img src="/_next/image?url=https%3A%2F%2Fcarta-natal.es%2Farchivos%2Fcartas%2Fcn_b9abd1866e09813da3bc193b9f7ce11d.png&amp;w=828&amp;q=75" decoding="async" data-nimg="intrinsic" class="m-auto select-none" srcset="/_next/image?url=https%3A%2F%2Fcarta-natal.es%2Farchivos%2Fcartas%2Fcn_b9abd1866e09813da3bc193b9f7ce11d.png&amp;w=640&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcarta-natal.es%2Farchivos%2Fcartas%2Fcn_b9abd1866e09813da3bc193b9f7ce11d.png&amp;w=828&amp;q=75 2x" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"></span><div class="absolute h-[20px] w-[120px] bottom-0 right-0 bg-white"></div></div><div><div class="flex select-none m-auto justify-evenly fuap tables_astros__hhkeu"><table class="astros pull-left"><tbody><tr><th colspan="2">Planeta </th><th class="casa">Casa </th></tr><tr><td class="longitud"><div class="dat"></div>Sol</td><td class="longitud"><div class="dat"></div>01°36'52"</td><td class="casa">4</td></tr><tr><td class="longitud"><div class="dat"></div>Luna</td><td class="longitud"><div class="dat"></div>18°18'52"</td><td class="casa">10</td></tr><tr><td class="longitud"><div class="dat"></div>Mercurio</td><td class="longitud"><div class="dat"></div>17°09'02"</td><td class="casa">4</td></tr><tr><td class="longitud"><div class="dat"></div>Venus</td><td class="longitud"><div class="dat"></div>03°24'29"</td><td class="casa">3</td></tr><tr><td class="longitud"><div class="dat"></div>Marte</td><td class="longitud"><div class="dat"></div>06°46'34"</td><td class="casa">5</td></tr><tr><td class="longitud"><div class="dat"></div>Júpiter</td><td class="longitud"><div class="dat"></div>01°01'20"</td><td class="casa">6</td></tr><tr><td class="longitud"><div class="dat"></div>Saturno</td><td class="longitud"><div class="dat"></div>11°43'15"</td><td class="casa">7</td></tr><tr><td class="longitud"><div class="dat"></div>Urano</td><td class="longitud"><div class="dat"></div>17°38'42"</td><td class="casa">3</td></tr><tr><td class="longitud"><div class="dat"></div>Neptuno</td><td class="longitud"><div class="dat"></div>05°03'44"</td><td class="casa">3</td></tr><tr><td class="longitud"><div class="dat"></div>Plutón</td><td class="longitud"><div class="dat"></div>12°44'38"</td><td class="casa">2</td></tr></tbody></table>,<table class="astros pull-left"><tbody><tr><th colspan="2">Casas  (Placidus)</th></tr><tr><td>Casa 1 (AC)</td><td class="longitud"><div class="dat"></div>10°42'38"</td></tr><tr><td>Casa 2</td><td class="longitud"><div class="dat"></div>09°36'21"</td></tr><tr><td>Casa 3</td><td class="longitud"><div class="dat"></div>15°26'21"</td></tr><tr><td>Casa 4</td><td class="longitud"><div class="dat"></div>23°54'33"</td></tr><tr><td>Casa 5</td><td class="longitud"><div class="dat"></div>26°28'14"</td></tr><tr><td>Casa 6</td><td class="longitud"><div class="dat"></div>21°23'44"</td></tr><tr><td>Casa 7</td><td class="longitud"><div class="dat"></div>10°42'38"</td></tr><tr><td>Casa 8</td><td class="longitud"><div class="dat"></div>09°36'21"</td></tr><tr><td>Casa 9</td><td class="longitud"><div class="dat"></div>15°26'21"</td></tr><tr><td>Casa 10 (MC)</td><td class="longitud"><div class="dat"></div>23°54'33"</td></tr><tr><td>Casa 11</td><td class="longitud"><div class="dat"></div>26°28'14"</td></tr><tr><td>Casa 12</td><td class="longitud"><div class="dat"></div>21°23'44"</td></tr></tbody></table>,<table class="astros pull-left nopadding"> <tbody><tr><th>Planeta</th><th>Aspecto</th><th>Planeta</th><th>Orbes</th></tr> <tr><td class="longitud"> <div class="dat"></div>Sol</td><td class="agua"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Júpiter</td><td class="orbe">0.59° (S)</td></tr> <tr><td class="longitud"> <div class="dat"></div>Luna</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Mercurio</td><td class="orbe">1.16° (S)</td></tr> <tr><td class="longitud"> <div class="dat"></div>Luna</td><td class="agua"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Saturno</td><td class="orbe">6.59° (S)</td></tr> <tr><td class="longitud"> <div class="dat"></div>Luna</td><td class="tierra"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Urano</td><td class="orbe">0.67° (S)</td></tr> <tr><td class="longitud"> <div class="dat"></div>Luna</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Plutón</td><td class="orbe">5.57° (S)</td></tr> <tr><td class="longitud"> <div class="dat"></div>Mercurio</td><td class="tierra"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Urano</td><td class="orbe">0.49° (A)</td></tr> <tr><td class="longitud"> <div class="dat"></div>Mercurio</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Plutón</td><td class="orbe">4.41° (S)</td></tr> <tr><td class="longitud"> <div class="dat"></div>Venus</td><td class="agua"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Marte</td><td class="orbe">3.37° (A)</td></tr> <tr><td class="longitud"> <div class="dat"></div>Venus</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Júpiter</td><td class="orbe">2.39° (S)</td></tr> <tr><td class="longitud"> <div class="dat"></div>Venus</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Neptuno</td><td class="orbe">1.65° (A)</td></tr> <tr><td class="longitud"> <div class="dat"></div>Marte</td><td class="agua"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Neptuno</td><td class="orbe">1.71° (S)</td></tr> <tr><td class="longitud"> <div class="dat"></div>Marte</td><td class="agua"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Plutón</td><td class="orbe">5.97° (A)</td></tr> <tr><td class="longitud"> <div class="dat"></div>Júpiter</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Neptuno</td><td class="orbe">4.04° (A)</td></tr> <tr><td class="longitud"> <div class="dat"></div>Saturno</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Urano</td><td class="orbe">5.92° (A)</td></tr> <tr><td class="longitud"> <div class="dat"></div>Saturno</td><td class="tierra"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Plutón</td><td class="orbe">1.02° (A)</td></tr> <tr><td class="longitud"> <div class="dat"></div>Saturno</td><td class="fuego"> <div class="dat"></div> </td><td class="longitud"> <div class="dat"></div>Ascendente</td><td class="orbe">1.01° (A)</td></tr> </tbody></table></div></div></div></div>`])
			},2000)

			break;


		case "GET":

			break;
	}

}