import styled from 'styled-components'

export const StyledComponents = () => {
    return (
        <div>
            <p>StyledComponents</p>
            <Container>
                <button>
                    fight!!
                </button>
            </Container>
        </div>
    )
}

const Container = styled.button`
    .container {
        border: none
    }
`