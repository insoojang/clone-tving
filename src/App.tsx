import React from 'react'
import Router from './routes/Router'
import './styles/main.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { GlobalStyle } from './styles/Global'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  )
}

export default App
