import styled from 'styled-components'
import { useRecoilState } from 'recoil'


import { SBaseButton } from './BaseButton'
import { useContext } from 'react'
import { UserContext } from '../../../../7/prividers/UserProvider'
import { userState } from '../../../../7/store/userState'


export const PrimaryButton = (props) => {
    const { children } = props
    // const { setUserInfo } = useContext(UserContext)
    const [ userInfo, setUserInfo ] = useRecoilState(userState)
    console.log(userInfo)

    const eventOnClick = () => {
        setUserInfo({ isAdmin: true })
    }

    return (
        <SButton onClick={eventOnClick}>{ children }</SButton>
    )
}

const SButton = styled(SBaseButton)`
    background-color: #11999e;
`
