import React from 'react'
import { PrimaryButton } from './6/components/atoms/button/PrimaryButton';
import { SecondaryButton } from './6/components/atoms/button/SecondaryButton';
import { SearchInput } from './6/components/molecules/SearchInput';
import { UserCard } from './6/components/organisms/user/UserCard';

function App() {

  return (
    <div>
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>search</SecondaryButton>
      <SearchInput />
      <UserCard />
    </div>
  );
}

export default App;
