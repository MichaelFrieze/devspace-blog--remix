import { Links, LiveReload } from 'remix';

import globalStylesUrl from './styles/globals.css';

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: globalStylesUrl,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        Hello world
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}
