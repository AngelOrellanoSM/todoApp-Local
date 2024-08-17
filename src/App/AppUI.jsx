import { Head } from '../Head';
import { Footer } from '../Footer';
import { Todos } from '../Todos';
import { Calendario } from '../Calendario';
import { MdOutlineAdd } from "react-icons/md";
import { Modal } from '../Modal';
import './App.css';
import { useState } from 'react';
import { FormularioTarea } from '../FormularioTarea';


const AppUI = () => {

    const [botonCrear, setBotonCrear] = useState(false);

    const cambiarEstado = () => {
        setBotonCrear(!botonCrear);
    }
    return (
        <>
            <div className={"app"}>
            <div className={"app-head"}>
                <Head />
            </div>
            <div className={"app-body"}>
                <Calendario></Calendario>
                <Todos></Todos>
            </div>
            <div className={"app-footer"}>
                <Footer />
            </div>
            </div>
            <button className={`app-button-content ${botonCrear?'clicked':''}`} onClick={cambiarEstado}>
                <MdOutlineAdd />
            </button>
            { botonCrear && 
                <Modal>
                    <FormularioTarea cerrarEstado={cambiarEstado} ></FormularioTarea>
                </Modal>
            }
        </>
    )
}

export {AppUI}