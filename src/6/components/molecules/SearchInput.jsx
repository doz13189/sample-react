import styled from 'styled-components'

import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { Input } from "../atoms/input/input"

export const SearchInput = () => {

    return (
        <div>
            <Scontainer>
                <Input placeholder='input value' />
                <SBaseButtonWrapper>
                    <PrimaryButton>Search !!</PrimaryButton>
                </SBaseButtonWrapper>
            </Scontainer>
        </div>
    )
}

const Scontainer = styled.div`
    display: flex;
    align-items: center;
`

const SBaseButtonWrapper = styled.div`
    padding-left: 8px;
`
