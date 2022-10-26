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
			const fuap = await axios({url: "http://127.0.0.1:5000/get_carta", method: "POST", data: req.body}).then()
			console.log(fuap.data.bars)
			res.send(fuap.data)


			break;


		case "GET":

			break;
	}

}
