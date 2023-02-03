import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function SearchResults() {
    const location = useLocation();
    const searchResults = location.state.searchResults;
    const streamServices = location.state.streamServices;

    console.log(streamServices);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Where to stream</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map((result) => (
                        <tr key={result.id}>
                            <td>{result.title}</td>
                            <td>{result.overview}</td>
                            <td>
                                <ul>
                                    {streamServices[result.id] && Array.isArray(streamServices[result.id]) ? streamServices[result.id].map((service) => (
                                        <li key={service.id}>{service.name}</li>
                                    )) : <li>Not available</li>}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link to="/user-profile"><Button variant="primary">Search again!</Button>{' '}</Link>
        </div>
    );
};