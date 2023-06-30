import Title from "../types/Title"
// I made my own interfaces, so that we can prevent "any" type!
const Header = (props: Title) => {
    const { title } = props
    return (
        <>
            <h2>{title}</h2>
        </>
    )
}

export default Header