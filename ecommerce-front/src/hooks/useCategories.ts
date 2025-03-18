import { actGetCategories, categoriesRecordsCleanUp } from "@store/categories/categoriesSlice"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { useEffect } from "react"
const useCategories = () => {
    const dispatch = useAppDispatch();
  const {loading, records, error} = useAppSelector(state => state.categories);

  useEffect(() => {

      const promise = dispatch(actGetCategories());
   
    return () => {
      promise.abort();
      dispatch(categoriesRecordsCleanUp())
    }
   
  }, [dispatch]);

 

  return { loading, records, error }
}

export default useCategories
