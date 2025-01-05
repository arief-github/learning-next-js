import fs from 'fs'
import path from 'path'

function Post({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}

async function getData() {
    const dataPath = path.join(process.cwd(), 'data', 'blogs.json')
    const fileContents = fs.readFileSync(dataPath, 'utf-8')
    return JSON.parse(fileContents) 
}

export async function getStaticPaths() {
    const posts = await getData()

    const paths = posts.map(post => ({
        params: { slug: post.slug }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const posts = await getData()

    const post = posts.find(post => post.slug === params.slug)

    return { props : { post } }
}

export default Post