import logo from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import configImg from './assets/config.png';
import jsxUi from './assets/jsx-ui.png';
import stateMgmt from './assets/state-mgmt.png';
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from "./components/TabButton";
import { useState } from "react";
import {EXAMPLES} from "./data";

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

    const [topic, functionToUpdate] = useState(null);

    let isButtonSelected = false;

    function handleSelect(selectedButton) { //alternate convention clickHandler
        
        functionToUpdate(selectedButton);
    }

    return (
        <div>
            <Header></Header>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem) =>  
                            (<CoreConcepts key={conceptItem.title} {...conceptItem} />)
                        )};

                    </ul>
                </section>

                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={topic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>  {/*React is not aware where to output this value unless configured */}
                        <TabButton isSelected={topic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>  {/*React is not aware where to output this value unless configured */}
                        <TabButton isSelected={topic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>  {/*React is not aware where to output this value unless configured */}
                        <TabButton isSelected={topic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>  {/*React is not aware where to output this value unless configured */}
                    </menu>

                    {!topic && <p> Please select a topic. </p>}

                    {topic && (
                        <><div id="tab-content"></div><h3> {EXAMPLES[topic].title}</h3><p> {EXAMPLES[topic].description}</p><pre>
                            <code>{EXAMPLES[topic].code}</code>
                        </pre></>
                    )}
                    

                </section>



            </main>
        </div>



    );

}

export default App;
