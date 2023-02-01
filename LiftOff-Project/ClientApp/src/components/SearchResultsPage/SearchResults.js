import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Table } from 'reactstrap';

export function SearchResults() {
    const location = useLocation();
    const searchResults = location.state.searchResults;
    const streamServices = location.state.streamServices;

    const serviceTest = [];

    for (const key in streamServices) {
        serviceTest.push(streamServices[key].US);
    }

    console.log(serviceTest[0].flatrate[0].provider_name);
    console.log(serviceTest[1].flatrate);
    console.log(serviceTest[2].flatrate);
    console.log(serviceTest[3].flatrate);
    console.log(streamServices[808]);

    return (
        <div>
            <Table striped bordered hover>
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
                                    {serviceTest.map((service) => {
                                        <li>{service.flatrate[1].provider_name}</li>
                                    })}
                                </ul>
                            </td>


                        </tr>
                    ))}
                </tbody>
            </Table>

            <Link to="/user-profile"><Button variant="primary">Search again!</Button>{' '}</Link>
        </div>
    );
};