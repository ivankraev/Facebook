import { createBrowserRouter } from 'react-router-dom'

import AppContainer from '@/components/AppContainer'
import HomePage from '@/pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppContainer />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
])

export default router
