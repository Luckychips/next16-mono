import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar } from '@/components';

function App() {
  return (
      <>
          <SideBar />
          <main>
              <Suspense fallback={<div>loading...</div>}>
                  <Outlet />
              </Suspense>
          </main>
      </>
  )
}

export default App
