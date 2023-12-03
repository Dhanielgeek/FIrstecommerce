import { createContext, useState } from "react";

export const Context = createContext()

const ContextProvider = ({children})=>{

const [Mode, setMode] = useState(false)

    return(
        <Context.Provider value={{Mode,setMode}}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider