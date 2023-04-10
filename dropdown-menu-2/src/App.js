import './App.css';
import { DropdownList, DropdownMenu, Element } from './components/DropdownList/DropdownList';
import ICON_PLANNING from './assets/icon-planning.svg'
import ICON_REMINDERS from './assets/icon-reminders.svg'
import ICON_TODO from './assets/icon-todo.svg'

function App() {
    return (
        <div className="App">
            <header>
            <h2>Logo</h2>
            <DropdownList>
                <DropdownMenu title="Home">
                <Element icon={<img src={ICON_PLANNING} width={20} height={20} alt='planning icon' />}>Planning</Element>
          <Element icon={<img src={ICON_REMINDERS} width={16} height={20} alt='reminders icon' />}>Reminders</Element>
          <Element icon={<img src={ICON_TODO} width={20} height={20} alt='todo icon' />}>To Do</Element>
                </DropdownMenu>
                <DropdownMenu title="Contact">
                    <Element>feature 1</Element>
                    <Element>feature 2</Element>
                </DropdownMenu>
            </DropdownList>
            </header>
            <main>
                <h1>Page title</h1>
                <p>Sed lacinia sapien eu ornare accumsan. Quisque gravida nulla enim, eu aliquet felis consectetur eget. Fusce et augue nibh. Donec gravida aliquam cursus. Nullam diam elit, imperdiet sit amet dictum id, tincidunt et leo</p>
                <h2>Other title</h2>
            </main>
        </div>
    );
}

export default App;
