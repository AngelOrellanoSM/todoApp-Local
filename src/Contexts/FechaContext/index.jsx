import {createContext, useEffect, useState} from "react";

const FechaContext = createContext();

const FechaProvider = ({children}) => {
    
    const [fechaActual, setFechaActual] = useState(new Date());

    // FUNCION PARA OBTENER LA FECHA ACTUAL -------------------------------------------------------------------------------

    useEffect(() =>{
        const actualizarFechaActual = () => {
            setFechaActual(new Date());
        };

        const calcularMediaNoche = () => {
            const ahora = new Date();
            const nextMediaNoche = new Date(ahora);
            nextMediaNoche.setHours(24, 0, 0, 0);
            return nextMediaNoche - ahora ;
        };

        const tiempoFaltante = calcularMediaNoche();
        let intervalo;
        const timeout = setTimeout(() => {
            actualizarFechaActual();

            intervalo = setInterval(() => {
                actualizarFechaActual();
            }, 24*60*60*1000);

        }, tiempoFaltante);
        
        return () => {
            clearTimeout(timeout);
            clearInterval(intervalo);
        }


    }, []);
    //------------------------------------------------------------------------------------------------------------

    return (
        <FechaContext.Provider value={{
            fechaActual
        }}>
            {children}
        </FechaContext.Provider>
    )
}

export {FechaContext, FechaProvider}

