import Link from 'next/link'
import fs from 'fs'
import path from 'path'

export default function Home({ posts }) {
    return (
        <div>
            <h1>Semua Post</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.slug}`} prefetch={false}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const dataPath = path.join(process.cwd(), 'data', 'blogs.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    const posts = JSON.parse(fileContents);

    return {
        props: { posts }
    }
}