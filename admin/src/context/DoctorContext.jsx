import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
    
    // Doctor specific states and functions will be added here later
    const value = {
        
    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider;