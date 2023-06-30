import Toggle from "../types/Toggle"

const Toggler = (props: Toggle) => {
    const { handler } = props
    return(
        <button onClick={handler}>Toggle Title</button>
    )
}

export default Toggler