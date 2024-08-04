import './barraBusqueda.css'

const BarraBusqueda = () => {
    return (
        <div className={"barra-content"}>
            <input placeholder='Buscar una Tarea' />
            <div className={"content-icon"}>
                <span>O.</span>
            </div>
        </div>
    )
}

export {BarraBusqueda}