import { useEffect, useState } from "react"
import API from "../config"
import { Data } from "../model"
import Router from "next/router"

export default function Home() {
  const [data, setData] = useState<Data[]>()

  async function fetchData() {
    try {
      const response = await fetch(API.list, {
        method: "GET"
      })
      const body: Data[] = await response.json()
      setData(body)
    } catch (error) {
      alert(error.message)
    }
  }

  async function deleteItem(ID: number) {
    try {
      const response = await fetch(API.delete, {
        method: "DELETE",
        body: JSON.stringify({
          "id": ID
        })
      })
      alert("Item deleted")
    } catch (error) {
      alert(error.message)
    }
  }


  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <div className={"px-5 pt-5"}>
        <button className={"w-20 bg-blue-200 text-black-500 text-sm px-2 py-1 focus:outline-none"} onClick={() => {Router.push("/create")}}>Create</button>
        <table className="mt-5 w-full table-fixed border-separate border border-black-800">
          <thead>
            <tr>
              <th className="border border-black-600">ID</th>
              <th className="border border-black-600">Title</th>
              <th className="border border-black-600">Date</th>
              <th className="border border-black-600">Status</th>
              <th className="border border-black-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map(eachData => {
                return (
                  <tr key={eachData.id}>
                    <td className="border border-black-600">{eachData.id}</td>
                    <td className="border border-black-600">{eachData.title}</td>
                    <td className="border border-black-600">{eachData.date}</td>
                    <td className="border border-black-600">{eachData.status ? "True" : "False"}</td>
                    <td className="border border-black-600 p-2 flex">
                      <button className={"w-20 bg-blue-200 text-black-500 text-sm px-2 py-1 focus:outline-none"}>Edit</button>
                      <button onClick={() => {
                        deleteItem(eachData.id)
                      }} className={"w-20 bg-red-200 text-black-500 text-sm px-2 py-1 focus:outline-none ml-5"}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
