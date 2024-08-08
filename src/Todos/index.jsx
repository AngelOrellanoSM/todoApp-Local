import { useContext, useEffect, useState } from 'react'
import { BarraBusqueda } from '../Componentes/BarraBusqueda'
import { Estado } from '../Componentes/Estado'
import { Relevancia } from '../Componentes/Relevancia'
import './todos.css'
import { TaskContext } from '../Contexts/TasksContext'

const Todos = () => {

    const {tasks, filtrarTask} = useContext(TaskContext);
    
    // FUNCION PARA VER SI ESTAN TODOS LAS CATEGORIAS DE RELEVANCIA ---------------------------------------------------------------
    const [relevanciaExistencia, setRelevanciaExistencia] = useState({"Importante" : 0 , "Urgente" : 0 , "Complementario" : 0})
    
    useEffect(() => {
        const exists = () =>{
            const updateRelevancia = {"Importante" : 0 , "Urgente" : 0 , "Complementario" : 0};
            tasks.forEach((task) => {
                if(task.importancia === "Importante"){
                    updateRelevancia.Importante = 1;
                }else if (task.importancia === "Urgente"){
                    updateRelevancia.Urgente = 1;
                }else if (task.importancia === "Complementario"){
                    updateRelevancia.Complementario = 1;
                }
            })
            setRelevanciaExistencia(updateRelevancia);
        }
        exists();
        
    }, [tasks]);

    //--------------------------------------------------------------------------------------------------------------------------------

    // FUNCION PARA CONTAR LOS ESTADOS --------------------------------------------------------------------------------------------
    const [estados, setEstados] = useState({"all" : 0 , "completo": 0 , "incompleto": 0})

    useEffect(() => {
        const estadosUpdate = {"all" : 0 , "completo": 0 , "incompleto": 0};
        estadosUpdate.all = tasks.length;
        estadosUpdate.completo = tasks.filter((task) => task.completado === 1).length;
        estadosUpdate.incompleto = estadosUpdate.all - estadosUpdate.completo;

        setEstados(estadosUpdate);

    }, [tasks]);
    //-----------------------------------------------------------------------------------------------------------------------------
    // FUNCION DE FILTRADO POR ESTADO -------------------------------------------------------------------------------------------------
    const [seleccionEstado, setSeleccionEstado] = useState({"completado": 0, "incompleto" : 0, "all" : 1})

    const filtrarEstado = (estado) => {
        let seleccion = {"completado": 0, "incompleto" : 0, "all" : 1};
        estado === "Completado" ? seleccion = {"completado": 1, "incompleto" : 0 , "all" : 0} 
            : estado === "Incompleto"  ? seleccion = {"completado": 0, "incompleto" : 1 , "all" : 0} 
            : seleccion = {"completado": 0, "incompleto" : 0, "all" : 1} ;
        setSeleccionEstado(seleccion);
    }

    useEffect(() => {
        const filtro = seleccionEstado.all === 1 ? "all" : seleccionEstado.completado;  
        filtrarTask("completado", filtro);
        // eslint-disable-next-line
    }, [seleccionEstado]);
    //---------------------------------------------------------------------------------------------------------
    return (
        <div className={"todos-content"}>
            <BarraBusqueda />
            <div className={"content-estados"}>
                <Estado estado={"all"} cantidad={estados.all} click={filtrarEstado}/>
                <p>|</p>
                <Estado estado={"Completado"} cantidad={estados.completo} click={filtrarEstado}/>
                <p>|</p>
                <Estado estado={"Incompleto"} cantidad={estados.incompleto} click={filtrarEstado}/>
            </div>
            <div className={"content-prioridad"}>
                {relevanciaExistencia.Urgente !== 0 && <Relevancia relevancia={"Urgente"}/>}
                {relevanciaExistencia.Importante !== 0 && <Relevancia relevancia={"Importante"}/>}
                {relevanciaExistencia.Complementario !== 0 && <Relevancia relevancia={"Complementario"}/>}
            </div>
        </div>
    )
}

export {Todos}