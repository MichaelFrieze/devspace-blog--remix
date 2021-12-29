import { Link } from 'remix';

export default function Pagination({ page, numPages }) {
  return (
    <div className="mt-6">
      <ul className="flex pl-0 list-none my-2">
        {page > 1 ? (
          <Link to={`?page=${page - 1}`}>
            <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
              Previous
            </li>
          </Link>
        ) : null}
        {Array.from({ length: numPages }, (_, i) => (
          <Link to={`?page=${i + 1}`}>
            <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
              {i + 1}
            </li>
          </Link>
        ))}
        <Link to={`?page=${page + 1}`}>
          <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
            Next
          </li>
        </Link>
      </ul>
    </div>
  );
}

/* 

import { LoaderFunction, useLoaderData, json, Link } from 'remix';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page') ?? 1);
  const pageSize = Number(url.searchParams.get('pageSize') ?? 5);
  const items = Array(pageSize)
    .fill('')
    .map((_, index) => {
      const id = (page - 1) * pageSize + index + 1;
      return { id, title: `Item ${id}` };
    });
  return json({ items, page });
};

export default function (): JSX.Element {
  const { items, page } = useLoaderData();
  console.log(items);
  return (
    <div>
      <h2>Pagination</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="navLinks">
        {page > 1 ? <Link to={`?page=${page - 1}`}>Previous</Link> : null}
        <Link to={`?page=${page + 1}`}>Next</Link>
      </div>
    </div>
  );
}

*/
