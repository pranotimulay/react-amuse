import logo from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import configImg from './assets/config.png';
import jsxUi from './assets/jsx-ui.png';
import stateMgmt from './assets/state-mgmt.png';
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from "./components/TabButton";
import { useState } from "react";

const reactCourseTypes = ["Fundamental", "Core", "Advanced"];

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

    const [topic, selectedTopic] = useState('please select a topic');

    function handleSelect(selectedButton) { //alternate convention clickHandler
        console.log("handleSelect() called! ---> "+ selectedButton);
        selectedTopic(selectedButton);
    }

    return (
        <div>
            <Header></Header>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcepts {...CORE_CONCEPTS[0]} />
                        <CoreConcepts {...CORE_CONCEPTS[1]} />
                        <CoreConcepts {...CORE_CONCEPTS[2]} />
                        <CoreConcepts {...CORE_CONCEPTS[3]} />

                    </ul>
                </section>

                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>  {/*React is not aware where to output this value unless configured */}
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>  {/*React is not aware where to output this value unless configured */}
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>  {/*React is not aware where to output this value unless configured */}
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>  {/*React is not aware where to output this value unless configured */}
                    </menu>
                    {topic}
                </section>


            </main>
        </div>



    );

}

export default App;
