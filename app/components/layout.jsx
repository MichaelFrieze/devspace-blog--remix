import Header from '~/components/header';
import Search from '~/components/search';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Search />
      <main className="container mx-auto my-7">{children}</main>
    </>
  );
}
