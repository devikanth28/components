import React, { Children, useEffect, useState } from 'react'
import { createContext } from 'react'

const NavigationContext = createContext();
function NavigationProvider({Children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    useEffect(()=>{
        const handler = () =>{
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', handler);
        return () =>{
            window.removeEventListener('popstate',handler)
        }
    },[])
    const navigate = (to) =>{
        window.history.pushState({}, '', to)
        console.log(to)
        setCurrentPath(to)
    }
    return <NavigationContext.Provider value={{currentPath, navigate}}>
     {/*<button onClick = {() =>navigate('/accordian')}>Go to accordian</button>
     <button onClick={()=>navigate('/dropDown')}>Go to dropdwon</button>
{currentPath}*/}
        {Children}
    </NavigationContext.Provider>
}
export {NavigationProvider}
export default NavigationContext;