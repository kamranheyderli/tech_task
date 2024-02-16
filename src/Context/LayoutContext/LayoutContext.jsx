import React, {useState} from 'react'


const defaults = {
    mobileMenuOpen: false,
    setMobileMenuOpen: () => {
    },
}
export const LayoutContext = React.createContext(defaults);


export const LayoutContextProvider = ({
                                          children
                                      }) => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)    ;

    return <LayoutContext.Provider value={{
        mobileMenuOpen,
        setMobileMenuOpen,
    }}>
        {children}
    </LayoutContext.Provider>
}
