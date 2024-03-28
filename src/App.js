import logo from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import configImg from './assets/config.png';
import jsxUi from './assets/jsx-ui.png';
import stateMgmt from './assets/state-mgmt.png';

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

function Header() {
    const courseTypeRandom = reactCourseTypes[Math.floor(Math.random() * 3)];

    return (
        <header>
            <img src={logo} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {courseTypeRandom} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );

}

function CoreConcepts(data) {
    console.log(data);

    return (
      <li>
          <img src={data.image} alt="Stylized Component"></img>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
      </li>

    );
}

function App() {
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
            </main>
        </div>
    );
}

export default App;
