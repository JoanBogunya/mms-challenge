import { ApolloProvider } from '@apollo/client/react'
import { client } from './graphql/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './config/theme'
import AppRoutes from './routes/AppRoutes'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Layout>
          <AppRoutes />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
