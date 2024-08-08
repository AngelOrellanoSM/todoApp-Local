import './calendario.css'

import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

import React, {useState, useEffect, useContext} from 'react';
import { DiaCalendar } from '../Componentes/DiaCalendar';
import { FechaContext } from '../Contexts/FechaContext';


const Calendario = () => {

  
    const meses = {
        0: "Enero",
        1: "Febrero",
        2: "Marzo",
        3: "Abril",
        4: "Mayo",
        5: "Junio",
        6: "Julio",
        7: "Agosto",
        8: "Septiembre",
        9: "Octubre",
        10: "Noviembre",
        11: "Diciembre"
    }

    const nombres = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    
    const {fechaActual} = useContext(FechaContext);

    const [fechaCalendar, setFechaCalendar] = useState(new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1)); 

    const [diasCalendar, setDiasCalendar]  = useState([]);



    // FUNCIONES DE LOS BOTONES ------------------------------------------------------------------------------------
    const prevMonth = () => {
        setFechaCalendar(new Date(fechaCalendar.getFullYear(), fechaCalendar.getMonth() - 1, 1))
    }
    
    const nextMonth = () => {
        setFechaCalendar(new Date(fechaCalendar.getFullYear(), fechaCalendar.getMonth() +1, 1))
    }
    //-------------------------------------------------------------------------------------------------------------
    

    // FUNCION PARA ACTUALIZAR LA LISTA DE DIAS EN EL CALENDARIO ---------------------------------------------------
    useEffect(() => {
        
        const establecerDiasCalendario = (fechaPivote) => {
            let diasCalendario = [];
            const primerDia = fechaPivote.getDay() !== 0 ? fechaPivote.getDay():7;
            const ultimoDiaMesAnterior = new Date(fechaPivote-1);
            const primerDiaMesSiguiente = new Date(fechaPivote.getFullYear(), fechaPivote.getMonth() + 1, 1);
            const ultimoDia = new Date(primerDiaMesSiguiente-1).getDate();
            
            for(let i = 0; i < (primerDia - 1); i++){
                diasCalendario.push({
                    dia: ultimoDiaMesAnterior.getDate() - i, 
                    mes: ultimoDiaMesAnterior.getMonth(),
                    año: ultimoDiaMesAnterior.getFullYear(),
                });
            }
            
            diasCalendario.reverse();
            for(let i = 1; i <= ultimoDia; i++){
                diasCalendario.push({
                    dia: i,
                    mes: fechaPivote.getMonth(),
                    año: fechaPivote.getFullYear(),
                });
            }
            let indice = 1;
            while(diasCalendario.length%7 !==  0){
                diasCalendario.push({
                    dia: indice,
                    mes: primerDiaMesSiguiente.getMonth(),
                    año: primerDiaMesSiguiente.getFullYear(),
                });
                indice++;
            }
            setDiasCalendar(diasCalendario)
        }

        establecerDiasCalendario(fechaCalendar);
    }, [fechaCalendar]);

    //----------------------------------------------------------------------------------------------------------------


    return (
        <div className={"calendario-content"}>
            
            <div className={"content-time"}>
                <h3>{meses[fechaCalendar.getMonth()] + " " + fechaCalendar.getFullYear()}</h3>
                <div className={"time-buttons"}>
                    <button onClick={prevMonth}>
                        <GrCaretPrevious />
                    </button>
                    <button onClick={nextMonth}>
                        <GrCaretNext />
                    </button>
                </div>
            </div>
            <div className={"content-days"}>
                {
                    nombres.map((nombre) => {
                        return (
                            <div key={nombre}>
                                <p>{nombre}</p>
                            </div>
                        )
                    })
                }
                {
                    diasCalendar.map(({dia, mes, año}, index) => {
                        return (
                            <DiaCalendar 
                                key={index}
                                dia={dia} 
                                mes={mes} 
                                año={año}
                                fechaCalendar = {fechaCalendar} 
                            />
                        )   
                    })
                }
            </div>
        </div>
    )
}

export {Calendario}