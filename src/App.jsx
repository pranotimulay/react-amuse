import componentsImg from './assets/components.png';
import configImg from './assets/config.png';
import jsxUi from './assets/jsx-ui.png';
import stateMgmt from './assets/state-mgmt.png';
import Header from './components/Header.jsx';
import {useState} from "react";
import CoreConceptsSection from "./components/sections/CoreConceptsSection";
import ExamplesSection from "./components/sections/ExamplesSection";


const CORE_CONCEPTS = [
    {
        image: componentsImg,
        title: 'Components',
        description:
            'The core UI building block - compose the user interface by combining multiple components.',
    },
    {
        image: jsxUi,
        title: 'JSX',
        description:
            'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    },
    {
        image: configImg,
        title: 'Props',
        description:
            'Make components configurable (and therefore reusable) by passing input data to them.',
    },
    {
        image: stateMgmt,
        title: 'State',
        description:
            'React-managed data which, when changed, causes the component to re-render & the UI to update.',
    },
];


function App() {

    const [topic, functionToUpdate] = useState(null);

    function handleSelect(selectedButton) { //alternate convention clickHandler
        
        functionToUpdate(selectedButton);
    }

    return (
        <div>
            <Header></Header>
            <main>

                <CoreConceptsSection></CoreConceptsSection>
                <ExamplesSection topic={topic} handleSelect={handleSelect}></ExamplesSection>

            </main>
        </div>
    );

}

export default App;
