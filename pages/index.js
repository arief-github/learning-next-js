import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps() {
  const { data } = await axios.get(`https://dummyjson.com/users`);

  return {
    props: {
      users: data.users,
    },
  };
}

function HomePage({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`} passHref>
            <a> {user.username} </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HomePage;