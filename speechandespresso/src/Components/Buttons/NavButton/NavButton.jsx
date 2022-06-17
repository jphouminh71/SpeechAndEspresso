import './NavButton.css'; 

function NavButton(props)
{
    function handleClick(event)
    {
        event.preventDefault(); 
        console.log(`"clicked: ${props.type}"`);
    }

    return (
        <span onClick={handleClick} className="material-symbols-outlined">
             {props.type}
        </span>
    );
}
export default NavButton;