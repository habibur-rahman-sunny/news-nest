import Categories from "@/component/Categories/Categories";

export default function Home() {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-12 gap-4 mt-10">
      <div className="col-span-3">
        <Categories></Categories>
      </div>
      <div className="bg-slate-50 col-span-6">
        <p>Categories</p>
      </div>
      <div className="bg-slate-50 col-span-3">
        <p>Categories</p>
      </div>
    </div>
  );
}
