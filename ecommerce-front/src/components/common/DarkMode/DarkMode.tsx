import { useAppDispatch, useAppSelector } from "@store/hooks"
import  {toggleTheme}  from "@store/theme/themeSlice"

const DarkMode = () => {
  
    const { mode } = useAppSelector((state) => state.theme);
    const dispatch = useAppDispatch();
  return (
    <div>
      <button style={{background: mode? 'black' : 'white' }} onClick={()=> dispatch(toggleTheme())}>Dark Mode</button>
    </div>
  )
}

export default DarkMode
