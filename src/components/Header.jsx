import logo from "../assets/react-core-concepts.png";

const reactCourseTypes = ["Fundamental", "Core", "Advanced"];

export default function Header() {
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
