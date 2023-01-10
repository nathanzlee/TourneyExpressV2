import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import { listTournaments } from '../../src/graphql/queries'

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([])

  useEffect(() => {
    getTournaments()
  }, [])

  async function getTournaments() {
    const data = await API.graphql({
      query: listTournaments,
    })
    setTournaments(data.data.listTournaments.items)
  }

  return (
    <div>
      <h1 className='text-3xl text-center'>Tournamentssss</h1>
      <div>
        <div></div>
        <div></div>
      </div>
      {/* {tournaments.map((tourney, index) => {
        return (
          <p key={index}>{tourney.name}</p>
        )
      })} */}
    </div>
  )
}