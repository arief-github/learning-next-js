import dynamic from 'next/dynamic'
import styles from '../../styles/Home.module.css'

const Highlight = dynamic(() => import('../../components/Highlights'), { ssr: false })

function DynamicPage() {
    return (
        <div className={styles.main}>
            <Highlight code={" console.log('Hello World') "} language='js'/>
        </div>
    )
}

export default DynamicPage
