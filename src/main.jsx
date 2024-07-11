import ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
// import ContactPage from './pages/ContactPage.jsx';
// import HomePage from './pages/HomePage.jsx';
// import PortfolioPage from './pages/PortfolioPage.jsx';
// import ResumePage from './pages/PortfolioPage.jsx';
// import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // errorElement: <ErrorPage />,

        children: [
            {
                index: true,
                element: <HomePage />
            },
            // {
            //     path: 'contact',
            //     element: <ContactPage />,
            // },
            {
                path: 'about',
                element: <AboutPage />,
            },
            // {
            //     path: 'portfolio',
            //     element: <PortfolioPage />,
            // },
            // {
            //     path: 'resume',
            //     element: <ResumePage />
            // },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );