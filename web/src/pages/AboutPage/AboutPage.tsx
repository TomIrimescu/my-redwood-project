import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p style={{ marginLeft: '25px' }}>
        This is the <span style={{ fontWeight: 'bold' }}>About</span> page.
      </p>
    </>
  )
}

export default AboutPage
