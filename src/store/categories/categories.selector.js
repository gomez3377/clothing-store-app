import { createSelector } from "reselect";


const selectCategoryReducer = (state) => state.categories

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categories
)

export const selectCategoriesMap =  createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc,cateory) => {
    const { title, items } = cateory
    acc[title.toLowerCase()] = items;
    return acc
  }, {}))