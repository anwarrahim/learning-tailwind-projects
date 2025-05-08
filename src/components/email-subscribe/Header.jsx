const Header = (props)=>{
    return (
        <>
            <div className="flex">
                <ul>
                    <li className="text-2xl text-black border-2">
                        {props.homeName}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header