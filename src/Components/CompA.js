import HOC from "./HOC"

function CompA(props) {
    return <div style={props.style}>I am a CompA</div>
}

export default HOC(CompA);