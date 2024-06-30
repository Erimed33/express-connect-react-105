import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const LogsIndex = () => {

const [logs, setLogs] = useState([])

useEffect(() => {
    fetch('http://localhost:3334/logs')
    .then(res => res.json())
    .then(res => {
        console.log(res)
        setLogs(res)
    })
    .catch(err => console.error(err))
}, [])

  return (
    <div>
{/* captains name and title */}
{ logs.map((log, i) => {
    return (
       <div>
        <div>
        <h1>Captain's Log</h1>
        <Link to='/LogForm'>New Log</>
        </div>
        <h2>Index</h2>
        <ul>
                <div key={i}>
                    <li>Mistakes {log.mistakesWereMadeToday ?  '💥': 'No mistakes'}</li>
                    <li>Captain Name {log.captainName}</li>
                    <li>See this log {log.title}</li>
                </div>
            )
            )}
        
        </ul>
       </div>

    )
})}



    </div>
  )
}

export default LogsIndex