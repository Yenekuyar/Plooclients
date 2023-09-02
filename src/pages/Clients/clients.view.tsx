import { useNavigate } from 'react-router-dom'
import { validateUserkey } from '../../constants/userkey'

export default function Clients() {
  const navigate = useNavigate()

  if (!validateUserkey) navigate('/')
  
  return (
    <div>Clients</div>
  )
}
