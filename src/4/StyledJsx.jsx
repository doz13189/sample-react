export const StyledJsx = () => {
    return (
        <div>
            <p>styled jsx</p>
            <button className="container">
                fight!!
            </button>
            <style jsx="true">{`
                .container {
                    border: none
                }
                `}
            </style>
        </div>
    )
}