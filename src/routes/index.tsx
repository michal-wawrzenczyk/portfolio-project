import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import { WEB_PATHS } from './paths';

import { MainLayout } from '../app/layout/main';
import { HomePage } from '../pages/HomePage';

import { UniversalLayout } from '../app/layout/universal';
import { LogIn } from '../pages/LogIn';
import { SignUp } from '../pages/SignUp';
import { Error404 } from '../pages/Error404';

import { UserLayout } from '../app/layout/user';
import { User } from '../pages/User';

export const Router: React.FC = () => {
  return useRoutes([
    {
      element: <UniversalLayout />,
      children: [
        { path: WEB_PATHS.page404, element: <Error404 /> },
        { path: '*', element: <Navigate to={WEB_PATHS.page404} replace /> }
      ]
    },

    {
      path: WEB_PATHS.home,
      element: <MainLayout />,
      children: [{ path: WEB_PATHS.home, element: <HomePage /> }]
    },

    {
      element: <UniversalLayout />,
      children: [
        { path: WEB_PATHS.logIn, element: <LogIn /> },
        { path: WEB_PATHS.signUp, element: <SignUp /> }
      ]
    },

    {
      element: <UserLayout />,
      children: [{ path: WEB_PATHS.profile, element: <User /> }]
    },
    { path: '*', element: <Navigate to={WEB_PATHS.page404} replace /> }
  ]);
};
