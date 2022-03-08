import React from 'react'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components'
import { RecoilRoot } from 'recoil'

import { SearchInput } from './6/components/molecules/SearchInput';
import { UserCard } from './6/components/organisms/user/UserCard';
import { UserProvider } from './7/prividers/UserProvider';
import { Practice1 } from './8/practices/Practice1.tsx';

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
        <Practice1/>

        <RecoilRoot>
          <UserProvider>
            <SearchInput />
            <UserCard user={user} />
          </UserProvider>
        </RecoilRoot>
      </SDiv>
    </BrowserRouter>
  );
}

const SDiv = styled.body`
  background-color: #e4f9f5;
  min-height: 100vh;
`

export default App;
