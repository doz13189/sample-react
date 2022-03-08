import React from 'react'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components'

import { PrimaryButton } from './6/components/atoms/button/PrimaryButton';
import { SecondaryButton } from './6/components/atoms/button/SecondaryButton';
import { SearchInput } from './6/components/molecules/SearchInput';
import { UserCard } from './6/components/organisms/user/UserCard';
import { HeaderOnly } from './6/components/templates/HederOnly';
import { UserProvider } from './7/prividers/UserProvider';



const user = {
  name: 'light',
  image: 'https://source.unsplash.com/6RnYvoJGY7c',
  email: 'light@gmail.com',
  phone: '999-999-999',
  company: {
    name: 'wizards'
  },
  website: 'google.com'
}

function App() {

  return (
    <BrowserRouter>
      <SDiv>
          <UserProvider>
            <SearchInput />
            <UserCard user={user} />
          </UserProvider>
      </SDiv>
    </BrowserRouter>
  );
}

const SDiv = styled.body`
  background-color: #e4f9f5;
  min-height: 100vh;
`

export default App;
