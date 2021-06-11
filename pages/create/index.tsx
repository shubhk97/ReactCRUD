import Router from "next/router"
import { useEffect, useState } from "react"
import API from "../../config"
import { Data } from "../../model"


export default function Create() {
  const [title, setTitle] = useState<string>()
  const [date, setDate] = useState<string>()
  const [status, setStatus] = useState<boolean>()

  async function fetchData() {
    try {
      const response = await fetch(API.list, {
        method: "POST",
        body: JSON.stringify({
          title: title,
          date: date,
          status: status
        })
      })
      alert("Created")
      Router.push("/")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className={"m-5"}>
      <div className={"flex"}>
        <div className={"mr-2"}>
          <label className={"block"}>Title</label>
          <input className={"mt-2 border border-gray-300 focus:outline-none"} onChange={event => {setTitle(event.target.value)}}/>
        </div>

        <div className={"ml-2"}>
          <label className={"block"}>Date</label>
          <input className={"mt-2 border border-gray-300 focus:outline-none"} onChange={event => {setDate(event.target.value)}}/>
        </div>
      </div>
      <div className={"mt-5"}>
        <label className={"block"}>Status</label>
        <select className={"mt-2 border border-gray-300 focus:outline-none"} onChange={event => {setStatus(event.target.value == "True" ? true : false)}}>
          <option value={"True"}>True</option>
          <option value={"False"}>False</option>
        </select>
      </div>
      <button className={"mt-5 w-20 bg-blue-200 text-black-500 text-sm px-2 py-1 focus:outline-none"} onClick={fetchData}>Create</button>
    </div>
  )
}
