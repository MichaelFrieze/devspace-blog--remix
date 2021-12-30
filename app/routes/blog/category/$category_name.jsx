export default function CategoryPage() {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-3/4 mr-10">
          <h1 className="text-5xl border-b-4 p-5 font-bold">
            {/* Posts in {categoryName} */}
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))} */}
          </div>
        </div>

        <div className="w-1/4">
          {/* <CategoryList categories={categories} /> */}
        </div>
      </div>
    </>
  );
}
