export const InlineStyle = () => {

    const containerStyle = {}
    const tileStyle = {}
    const buttonStyle = {
        border: "none"
    }

    return (
        <div style={containerStyle}>
            <p style={tileStyle}>inline style</p>
            <button style={buttonStyle}>
                fight!!
            </button>
        </div>
    )
}