import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { AbsoluteCenter, Box, Button, Center } from '@chakra-ui/react'

import PostForm from 'src/components/Post/PostForm'

import type { CreatePostInput } from 'types/graphql'

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`

const NewPost = () => {
  const [createPost, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post created')
      navigate(routes.posts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreatePostInput) => {
    createPost({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Post</h2>
      </header>
      <div className="rw-segment-main">
        <PostForm onSave={onSave} loading={loading} error={error} />
      </div>
      <Center h="50px">
        <Button colorScheme="red" size="xs" variant="outline">
          Chakra Button Test 1
        </Button>
      </Center>
      <Box position="relative" h="100px">
        <AbsoluteCenter bg="transparent" p="4" color="white" axis="both">
          <Button colorScheme="red" size="xs" variant="outline">
            Chakra Button Test 2
          </Button>
        </AbsoluteCenter>
      </Box>
    </div>
  )
}

export default NewPost
