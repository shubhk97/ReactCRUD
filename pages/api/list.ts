// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from '../../model'

export default (req: NextApiRequest, res: NextApiResponse<Data[]>) => {
  res.status(200).json(
    [
      {
        id: 1,
        title: "Title 1",
        date: "2021-06-11",
        status: true
      },
      {
        id: 2,
        title: "Title 2",
        date: "2021-06-11",
        status: false
      },
      {
        id: 3,
        title: "Title 3",
        date: "2021-06-11",
        status: true
      },
      {
        id: 4,
        title: "Title 4",
        date: "2021-06-11",
        status: true
      }
    ]
  )
}
