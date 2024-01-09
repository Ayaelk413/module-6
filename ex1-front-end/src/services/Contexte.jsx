import React, { useEffect, useState } from "react";
import personService from "./persons";
import persons from "./persons";

const Context = React.createContext(null);

const ProviderWrapper = ({children}) => {
    const [phonebooks,setPhonebook] = useState([]);

    useEffect(()=> {
        const getAll = async () => {
            try{
                const persons = await personService.getAll(); //await c'est pour executer autre chise pendant qu'il cherche ce qu'on lui demande
                setPhonebook(persons);
            }catch(err){
                console.log("toooz",err);
            }
        };
        getAll();
    },[]);//le [] c'est pour l'executer qu'une seul fois sinon ça va boucer et l'xecuter mille fois !!

    const setterPhonebooks = (persons) => setPhonebook(persons);
    const getOne = async(id) => await personService.getOne(id);

    const exposedValue = {
        phonebooks,
        setterPhonebooks,
        getOne,
    };


    return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export{Context,ProviderWrapper};