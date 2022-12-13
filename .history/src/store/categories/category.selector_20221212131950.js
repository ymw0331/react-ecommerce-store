export const selectCategoriesMap = (state) => {
  console.log('selector')
  return  state.categories.categories.reduce((acc, category) => {
    const { title, items } = category
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
}
