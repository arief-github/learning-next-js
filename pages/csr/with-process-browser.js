import styles from '../../styles/Home.module.css'

function ProcessBrowserPage() {
    return (
        <>
            <main className={styles.main}>
                <p> Saya berjalan di mode { process.browser ? 'client' : 'server' } </p>
            </main>
        </>
    )
}

export default ProcessBrowserPage