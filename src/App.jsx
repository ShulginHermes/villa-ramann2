import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'

function App({ children }) {
  return (
    <QueryClientProvider client={queryClientInstance}>
      {children}
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
