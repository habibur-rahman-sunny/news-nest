import CategoriesNews from '@/component/CategoriesNews/CategoriesNews';
import NewsCategories from '@/component/NewsCategories/NewsCategories';
import React from 'react';

const categoryNewsPage = async({params}) => {
    const {id} = await params
    return (
        <div className="w-10/12 mx-auto grid grid-cols-12 gap-4 mt-10">
      <div className="col-span-3">
        <NewsCategories id={id}></NewsCategories>
      </div>
      <div className="bg-slate-50 col-span-6">
      <CategoriesNews id={id}></CategoriesNews>
      </div>
      <div className="bg-slate-50 col-span-3">
        <p>Categories</p>
      </div>
    </div>
    );
};

export default categoryNewsPage;