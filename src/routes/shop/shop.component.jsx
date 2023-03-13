import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route} from 'react-router-dom'

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { setCategories } from '../../store/categories/categories.action.js';



const Shop = () => {
const dispatch = useDispatch()
  useEffect(() => {
    const getCategoriesMap = async () => {
        const categoriesArray = await getCategoriesAndDocuments()
        dispatch(setCategories(categoriesArray))
    }
    getCategoriesMap()
},[])



  return (
   
    <Routes>
      <Route index element={<CategoriesPreview/>} />
      <Route path=":category" element={<Category/>} />
    </Routes>
  );
};

export default Shop;
