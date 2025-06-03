import React, { createContext, useState, useEffect } from 'react';

//1.create the context
export const Themecontext=createContext();

//2.provider component
export const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState(()=>{
        return localStorage.getItem('theme') || 'light';
    });

    const toggleTheme = ()=>{
        setTheme(prevTheme=>(prevTheme==='light'?'dark' : 'light'));
    }

    useEffect(()=>{
        localStorage.setItem('theme',theme);
        if(theme==='light'){
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
        else{
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        }
    },[theme])
return(
    <Themecontext.Provider value={{theme,toggleTheme}}>
        {children}
    </Themecontext.Provider>
);
}