// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from '../../model'

export default (req: NextApiRequest, res: NextApiResponse<String>) => {
  res.status(200).json("Success")
}
