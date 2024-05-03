export default function TabButton({children, onSelect, isSelected}) {

    return <li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}> {children} </button> {/*content between the component tags */}
    </li>

}