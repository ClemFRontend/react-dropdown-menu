import './App.css';
import ICON_PLANNING from './assets/icon-planning.svg'
import ICON_REMINDERS from './assets/icon-reminders.svg'
import ICON_TODO from './assets/icon-todo.svg'
import { DropdownList, DropdownMenu, Element } from './components/DropdownList/DropdownList';

function App() {
  return (
    <div className="App">
      <h1>Dropdown Menu</h1>
      <DropdownList>
        <DropdownMenu title="Features">
          <Element icon={<img src={ICON_PLANNING} width={20} height={20} alt='planning icon' />}>Planning</Element>
          <Element icon={<img src={ICON_REMINDERS} width={16} height={20} alt='reminders icon' />}>Reminders</Element>
          <Element icon={<img src={ICON_TODO} width={20} height={20} alt='todo icon' />}>To Do</Element>
          <DropdownMenu title="Sub dropmenu">
            <Element>Item</Element>
            <Element>Item</Element>
            <Element>Item</Element>
          </DropdownMenu>
        </DropdownMenu>
        <DropdownMenu title="Ingrédiants">
          <Element>Tomates</Element>
          <Element>Olives</Element>
        </DropdownMenu>
        <Element>Item</Element>
        <Element>Item</Element>
      </DropdownList>
    </div>

  );
}

export default App;
