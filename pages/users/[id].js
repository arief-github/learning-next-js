import axios from 'axios'
import Link from 'next/link'

export async function getServerSideProps(ctx) {
    const { id } = ctx.query

    const userReq = await axios.get(`https://dummyjson.com/users/${id}`)

    return {
        props: {
            user: userReq.data
        }
    }
}

function UserPage({ user }) {
    return (
        <>
            <div>
                <Link href="/" passHref>
                    Back To Home
                </Link>
            </div>
            <hr/>
            <div style={{ display: 'flex' }}>
                <b>Username:</b> { user.username }
                <b>Firstname:</b> { user.firstName }
                <b>Lastname:</b> { user.lastName }
            </div>
        </>
    )
}

export default UserPage
