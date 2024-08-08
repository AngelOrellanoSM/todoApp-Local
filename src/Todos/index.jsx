import { useContext, useEffect, useState } from 'react'
import { BarraBusqueda } from '../Componentes/BarraBusqueda'
import { Estado } from '../Componentes/Estado'
import { Relevancia } from '../Componentes/Relevancia'
import './todos.css'
import { TaskContext } from '../Contexts/TasksContext'

const Todos = () => {

    const {setSeleccionEstado, seleccionEstado, taskDerivado} = useContext(TaskContext);
    
    // FUNCION PARA VER SI ESTAN TODOS LAS CATEGORIAS DE RELEVANCIA ---------------------------------------------------------------
    const [relevanciaExistencia, setRelevanciaExistencia] = useState({"Importante" : 0 , "Urgente" : 0 , "Complementario" : 0})
    
    useEffect(() => {
        const exists = () =>{
            const updateRelevancia = {"Importante" : 0 , "Urgente" : 0 , "Complementario" : 0};
            taskDerivado.forEach((task) => {
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
        
    }, [taskDerivado]);

    //--------------------------------------------------------------------------------------------------------------------------------

    // FUNCION PARA CONTAR LOS ESTADOS --------------------------------------------------------------------------------------------
    const [estados, setEstados] = useState({"all" : 0 , "completo": 0 , "incompleto": 0})

    useEffect(() => {
        const estadosUpdate = {"all" : 0 , "completo": 0 , "incompleto": 0};
        estadosUpdate.all = taskDerivado.length;
        estadosUpdate.completo = taskDerivado.filter((task) => task.completado === 1).length;
        estadosUpdate.incompleto = estadosUpdate.all - estadosUpdate.completo;

        setEstados(estadosUpdate);

    }, [taskDerivado]);
    //-----------------------------------------------------------------------------------------------------------------------------


    // FUNCION DE FILTRADO POR ESTADO -------------------------------------------------------------------------------------------------
    
    const seleccionarEstado = (estado) => {
        if(estado === "all"){
            setSeleccionEstado({"completado": 0, "incompleto" : 0, "all" : 1});
        }else if(estado === "Completado"){
            setSeleccionEstado({"completado": 1, "incompleto" : 0 , "all" : 0});
        }else{
            setSeleccionEstado({"completado": 0, "incompleto" : 1 , "all" : 0});
        }
    }
    //---------------------------------------------------------------------------------------------------------
    
    return (
        <div className={"todos-content"}>
            <BarraBusqueda />
            <div className={"content-estados"}>
                <Estado 
                    estado={"all"} 
                    cantidad={estados.all} 
                    click={seleccionarEstado} 
                    selected={seleccionEstado.all}
                />
                <p>|</p>
                <Estado 
                    estado={"Completado"} 
                    cantidad={estados.completo} 
                    click={seleccionarEstado} 
                    selected={seleccionEstado.completado}
                />
                <p>|</p>
                <Estado 
                    estado={"Incompleto"} 
                    cantidad={estados.incompleto} 
                    click={seleccionarEstado} 
                    selected={seleccionEstado.incompleto}
                />
            </div>
            <div className={"content-prioridad"}>
                {relevanciaExistencia.Urgente !== 0 && <Relevancia relevancia={"Urgente"}/>}
                {relevanciaExistencia.Importante !== 0 && <Relevancia relevancia={"Importante"}/>}
                {relevanciaExistencia.Complementario !== 0 && <Relevancia relevancia={"Complementario"}/>}
                {
                    relevanciaExistencia.Urgente === 0 ? relevanciaExistencia.Importante === 0 ? relevanciaExistencia.Complementario === 0  ? 
                    <div>
                        No se han encontrado tareas.
                    </div>
                    :'':'':''
                }
            </div>
        </div>
    )
}

export {Todos}