import styled from 'styled-components'
import { SBaseButton } from './BaseButton'
import { useContext } from 'react'
import { UserContext } from '../../../../7/prividers/UserProvider'


export const PrimaryButton = (props) => {
    const { children } = props
    const { setUserInfo } = useContext(UserContext)
    const eventOnClick = () => { setUserInfo({ isAdmin: true }) }

    return (
        <SButton onClick={eventOnClick}>{ children }</SButton>
    )
}

const SButton = styled(SBaseButton)`
    background-color: #11999e;
`
