import Header from '~/components/header.jsx';
import Search from '~/components/search.jsx';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Search />
      <main className="container mx-auto my-7">{children}</main>
    </>
  );
}
