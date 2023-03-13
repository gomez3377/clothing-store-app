export const selectCategoriesMap =  (state) => {
    console.log('selector fired')
   return state.categories.categories.reduce((acc,cateory) => {
    const { title, items } = cateory
    acc[title.toLowerCase()] = items;
    return acc
  }, {})}