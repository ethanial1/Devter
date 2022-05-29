import Head from 'next/head'
import Button from '../components/Button'
import Github from '../components/Icons/Github'
import styles from '../styles/style'


export default function Home() {
  return (
    <div>
      <Head>
        <title>DevTer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="">DevTer!</a>
        </h1>
        <Button>
          <Github fill='white'/>
          Login with github
        </Button>
      </main>
      <style jsx global>{styles}</style>
    </div>
  )
}
