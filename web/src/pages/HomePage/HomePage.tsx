import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <p style={{marginLeft: "25px"}}>
        This is the <span style={{ fontWeight: 'bold' }}>Home</span> page.
      </p>
    </>
  )
}

export default HomePage
