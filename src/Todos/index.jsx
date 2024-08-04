import { BarraBusqueda } from '../Componentes/BarraBusqueda'
import { Estado } from '../Componentes/Estado'
import { Relevancia } from '../Componentes/Relevancia'
import './todos.css'

const Todos = () => {
    return (
        <div className={"todos-content"}>
            <BarraBusqueda />
            <div className={"content-estados"}>
                <Estado />
                <p>|</p>
                <Estado />
                <p>|</p>
                <Estado />
            </div>
            <div className={"content-prioridad"}>
                <Relevancia />
                <Relevancia />
                <Relevancia />
            </div>
        </div>
    )
}

export {Todos}