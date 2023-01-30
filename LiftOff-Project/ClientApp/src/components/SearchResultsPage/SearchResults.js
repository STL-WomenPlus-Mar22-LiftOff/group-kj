import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function SearchResults() {
    const location = useLocation();
    const searchResults = location.state.searchResults;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Overview</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map((result) => (
                        <tr key={result.id}>
                            <td>{result.title}</td>
                            <td>{result.overview}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link to="/user-profile"><Button variant="primary">Search again!</Button>{' '}</Link>
        </div>
    );
};