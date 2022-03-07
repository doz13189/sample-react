import styled from 'styled-components'
import { Card } from '../../atoms/card/Card';
import { UserIconWithName } from '../../molecules/user/UserIconWithName';


export const UserCard = (props) => {
    const { user } = props;
    return (
        <Card>
            <UserIconWithName image={user.image} name={user.name} />
            <SDL>
                <dt>email</dt>
                <dd>{user.email}</dd>

                <dt>tel</dt>
                <dd>{user.phone}</dd>

                <dt>company</dt>
                <dd>{user.company.name}</dd>

                <dt>web</dt>
                <dd>{user.website}</dd>
            </SDL>
        </Card>
    )
}

const SDL = styled.dl`
    text-align: left;
    margin-bottom: 0px;
    dt {
        float: left;
    }
    dd {
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap: break-word;
    }
`