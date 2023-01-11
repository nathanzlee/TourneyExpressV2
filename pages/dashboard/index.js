import { withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import { useState, useEffect } from 'react'

function Dashboard() {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        checkUser()
    }, [])

    async function checkUser() {
        const user = await Auth.currentAuthenticatedUser()
        setUser(user)
    }

    if (!user) return null 

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{user.username}</p>
        </div>
    )
}

export default withAuthenticator(Dashboard)