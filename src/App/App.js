import './App.css';
import { Head } from '../Head';
import { Footer } from '../Footer';
import { Todos } from '../Todos';
import { Calendario } from '../Calendario';
import { FechaProvider } from '../FechaContex';


function App() {
  return (
    <FechaProvider>
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
    </FechaProvider>
  );
}

export default App;
