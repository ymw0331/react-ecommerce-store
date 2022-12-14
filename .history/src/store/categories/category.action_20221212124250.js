import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from '../../utils/reducer/reducer.utils'

const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.set)