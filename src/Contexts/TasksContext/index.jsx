import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../../App/useLocalStorage";

const TaskContext = createContext();

const TaskProvider = ({children}) => {

    const [tasks, setTasks] = useLocalStorage("TODO_V1", []);

    const [taskFiltro1, setTaskFiltro1] = useState(tasks);
    const [taskDerivado, setTaskDerivado] = useState(tasks);
    const [busqueda, setBusqueda] = useState("");
    const [seleccionEstado, setSeleccionEstado] = useState(
        {"completado": 0, "incompleto" : 0, "all" : 1});


        
    useEffect(() => {
        if(seleccionEstado.all === 1){
            setTaskFiltro1(tasks);
        }else if(seleccionEstado.completado === 1){
            const temp = tasks.filter((task) => {
                return task.completado === 1;
            })
            setTaskFiltro1(temp);
        }else{
            const temp = tasks.filter((task) => {
                return task.completado === 0;
            })
            setTaskFiltro1(temp);
        }
    }, [seleccionEstado, tasks]);


    const filtroBusqueda = (search, taskObjective) => {
        const filtro = search.toLowerCase();
        const taskTemporal = taskObjective.filter((task) => {
            if(task.titulo.toLowerCase().includes(filtro) || task.descripcion.toLowerCase().includes(filtro)){
                return true;
            }else{
                return false;
            }
        })
        return taskTemporal;
    }

    useEffect(() => {
        const taskTemporal = filtroBusqueda(busqueda, taskFiltro1);
        setTaskDerivado(taskTemporal);
    }, [busqueda, taskFiltro1])


    return (
        <TaskContext.Provider value={{tasks, setTasks, taskDerivado, setBusqueda, setSeleccionEstado, seleccionEstado, filtroBusqueda, busqueda}}>
            {children}
        </TaskContext.Provider>
    )
}

export {TaskContext, TaskProvider}