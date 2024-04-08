
export default function CoreConcepts(data) {
    console.log(data);

    return (
        <li>
            <img src={data.image} alt="Stylized Component Test"></img>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </li>

    );
}