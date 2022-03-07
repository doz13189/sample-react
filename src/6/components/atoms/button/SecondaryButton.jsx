import styled from 'styled-components'
import { SBaseButton } from './BaseButton'

export const SecondaryButton = (props) => {
    const { children } = props
    return (
        <SButton>{ children }</SButton>
    )
}

const SButton = styled(SBaseButton)`
    background-color: #11999e;
`