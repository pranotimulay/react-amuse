import logo from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const reactCourseTypes = ["Fundamental", "Beginner", "Core", "Advanced"];

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
          <img src={data.img} alt="Stylized Component"></img>
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
                        <CoreConcepts title="Components" description="The core UI building block" img={componentsImg}
                                      testObject={{fistName: 'John', lastName: 'Smith'}}/>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
