import { GET_USERS} from "./useQueries";
import { useQuery } from '@apollo/react-hooks';

const Users = () => {
    const { loading, error, data } = useQuery(GET_USERS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            {data.dogs.map(user => (
                <p key={user.id} value={user.name}>
                    {user.name}
                </p>
            ))}
        </div>
    );
};
