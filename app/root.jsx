import {
  Links,
  LiveReload,
  Outlet,
  Meta,
  ScrollRestoration,
  Scripts,
  useCatch,
} from 'remix';

import Layout from '~/components/layout.jsx';

import tailwindStylesUrl from './styles/tailwind.css';
import globalStylesUrl from './styles/globals.css';

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: tailwindStylesUrl,
    },
    {
      rel: 'stylesheet',
      href: globalStylesUrl,
    },
  ];
};

export const meta = () => {
  const description = 'Blogging about web development, design, and life';
  const keywords = 'devspace, blog, web development, design, life';
  return {
    description,
    keywords,
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}
