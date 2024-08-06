import './diaCalendar.css'
import { useContext } from 'react';
import { FechaContext } from '../../FechaContex';

const DiaCalendar = ( {dia, mes, año, fechaCalendar}) => {

    const {fechaActual} = useContext(FechaContext);
    console.log(fechaActual);

    return (
        <div className={`diaCalendar-content`}>
            <div className={`content-day`}>
                <p className={`
                    ${
                        fechaActual.getDate() === dia ?
                        fechaActual.getMonth() === mes ? 
                        fechaActual.getFullYear() ? 'dayActual' : '' : '' : '' 
                    }
                    
                    ${
                        fechaCalendar.getMonth() === mes ? 'mesActual' : 'mesDiferente'
                    }

                `}>
                    {dia}
                </p>
            </div>

            <div className={'content-tasks'}>
            </div>
        </div>
    )
}

export {DiaCalendar};