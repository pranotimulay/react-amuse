import logo from './assets/react-core-concepts.png';

const reactCourseTypes = ["Fundamental", "Beginner", "Core", "Advanced"];

function Header() {
  const courseTypeRandom = reactCourseTypes[Math.floor(Math.random() * 3)];

  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        { courseTypeRandom } React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );

}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
