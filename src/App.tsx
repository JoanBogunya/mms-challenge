import { ApolloProvider } from '@apollo/client/react'
import { client } from './graphql/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './config/theme'
import AppRoutes from './routes/AppRoutes'
import Layout from './components/Layout/Layout'
import ErrorBoundary from './config/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Layout>
            <AppRoutes />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </ErrorBoundary>
  )
}

export default App

