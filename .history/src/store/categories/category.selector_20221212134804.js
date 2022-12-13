import { createSelector } from 'reselect'

const selectCatogoryReducer = (state) => state.categories

export const selectCategories = createSelector(
  [selectCatogoryReducer],
  (categoriesSlice) => categoriesSlice.categories

)


export const selectCategoriesMap = createSelect(
  [selectCategories], (categories) => (state) => {
    console.log('selector fired')
    return state.categories.categories.reduce((acc, category) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
