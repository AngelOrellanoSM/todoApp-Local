import { useContext } from 'react';
import './barraBusqueda.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TaskContext } from '../../Contexts/TasksContext';


const BarraBusqueda = () => {
    const {setBusqueda} = useContext(TaskContext);
    
    const funcionBusqueda = (e) => {
        setBusqueda(e.target.value);
    }

    return (
        <div className={"barra-content"}>
            <input placeholder='Buscar una Tarea' onChange={funcionBusqueda}/>
            <div className={"content-icon"}>
                <span><FaMagnifyingGlass /></span>
            </div>
        </div>
    )
}

export {BarraBusqueda}