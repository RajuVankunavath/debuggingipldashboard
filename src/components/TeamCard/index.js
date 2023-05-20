import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamsData} = props
  const {name, id, teamImageURL} = teamsData

  return (
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link-item link">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
