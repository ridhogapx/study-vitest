import Title from "../types/Title"

const Header = (props: Title) => {
    const { title } = props
    return (
        <>
            <h2>{title}</h2>
        </>
    )
}

export default Header