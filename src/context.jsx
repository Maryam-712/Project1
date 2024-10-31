import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "https://thapareactapi.up.railway.app";

const initialState = {
        name : "",
        image : "",
        services : [],
};

const AppProvider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState);

      
        
        const updateHomePage = () => {
                return dispatch(
                        {
                        type : "Home_Update",
                        payload : {
                                name : "Thapa Technical",
                                image : "./images/hero.svg"
        
                        }
                }
        
                )
        }
        
        const updateAboutPage = () => {
                return dispatch(
                        {
                        type : "About_Update",
                        payload : {
                                name : "vinod",
                                image : "./images/about1.svg"
        
                        },
                }
        
                );
        };
        
        const getServices = async(url) =>{
                try {
                        const res = await fetch(url);
                        const data = await res.json();
                        dispatch ({type : "GET_SERVICES", payload: data})
                }
                catch (error) {
                        console.log(error)
                }
        }

        
        useEffect(() => {
          getServices(API)
        }, []);
        


        return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>
                {children}
                </AppContext.Provider>;
};

const useGlobalContext = () => {
        return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext}