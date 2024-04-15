export default function TabButton({children, onSelect}) {

    return <li>
        <button onClick={onSelect}> {children} </button> {/*content between the component tags */}
    </li>

}