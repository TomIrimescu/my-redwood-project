import { Link, routes } from '@redwoodjs/router'

type PostLayoutProps = {
  title: string
  titleTo: string
  buttonLabel: string
  buttonTo: string
  children: React.ReactNode
}

const PostLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}: PostLayoutProps) => {
  return (
    <>
      <header style={{ margin: '25px' }}>
        <h1>
          <Link
            style={{ fontWeight: 'bolder', fontSize: '18px' }}
            to={routes.home()}
          >
            My Redwood Project
          </Link>
        </h1>
        <nav>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              listStyleType: 'none',
              marginTop: '30px',
              marginBottom: '30px',
            }}
          >
            <li>
              <Link
                style={{
                  textDecoration: 'underline',
                  marginRight: '40px',
                }}
                to={routes.home()}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: 'underline',
                  listStyleType: 'none',
                  marginRight: '40px',
                }}
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: 'underline',
                  listStyleType: 'none',
                }}
                to={routes.posts()}
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default PostLayout
