import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const Dashboard = lazy(() => import('../routes/dashboard'));
const Cornerstone = lazy(() => import('../routes/cornerstone'));
const VolumeRendering = lazy(() => import('../routes/volume_rendering'));

export default createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Dashboard />,
            },
            {
                path: '/cornerstone',
                element: <Cornerstone />,
            },
            {
                path: '/volume_rendering',
                element: <VolumeRendering />,
            },
        ],
    },
])