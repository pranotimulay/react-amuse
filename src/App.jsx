import Header from './components/Header.jsx';
import {useState} from "react";
import CoreConceptsSection from "./components/sections/CoreConceptsSection";
import ExamplesSection from "./components/sections/ExamplesSection";


function App() {

    const [topic, functionToUpdate] = useState(null);

    function handleSelect(selectedButton) {
        
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
