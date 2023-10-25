import { useContext,createContext } from "react";


// adding params while creating context
export const ThemeContext = createContext({
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{}
})


// creating contextProvider in the same page
export const ThemeProvider = ThemeContext.Provider

// creating a custom hook that returns useContext of our context
export default function useTheme(){
    return useContext(ThemeContext)
}