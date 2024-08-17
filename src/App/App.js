import { TaskProvider } from '../Contexts/TasksContext';
import { FechaProvider } from '../Contexts/FechaContext';
import { AppUI } from './AppUI';


function App() {
  return (
    <FechaProvider>
      <TaskProvider>
        <AppUI></AppUI>
      </TaskProvider>
    </FechaProvider>
  );
}

export default App;
