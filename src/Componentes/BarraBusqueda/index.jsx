import './barraBusqueda.css'
import { FaMagnifyingGlass } from "react-icons/fa6";


const BarraBusqueda = () => {
    return (
        <div className={"barra-content"}>
            <input placeholder='Buscar una Tarea' />
            <div className={"content-icon"}>
                <span><FaMagnifyingGlass /></span>
            </div>
        </div>
    )
}

export {BarraBusqueda}