import { Container } from '@mui/material'

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container fixed sx={{ mt: '4rem', py: '3rem' }}>
      {children}
    </Container>
  )
}

export default Page
