import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import EditAxe from "../../components/userAxes/EditAxe";

const userAxesUrl = 'UserAxes';

const UserAxes = () => {
    const [userAxes, setUserAxes] = useState([]);
    const axiosPrivate = useAxiosPrivate();

    const [editAxeOpen, setEditAxeOpen] = useState(false);
    const [editAxeId, setEditAxeId] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUserAxes = async () => {
            try {
                const response = await axiosPrivate.get(userAxesUrl, {
                    signal: controller.signal
                });

                console.log(response.data);
                isMounted && setUserAxes(response.data.axeInfoList);
            } catch (err) {
                console.error(err);
            }
        };

        getUserAxes();
    }, [axiosPrivate]);

    return (
        <section>
            <h1>Your Saved Axes</h1>
            {userAxes.length ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userAxes.map(item => {
                            return (
                                <tr id={item.id} key={item.id} onClick={() => setEditAxeId(item.id)}>
                                    <td>{item.id}</td>
                                    <td>{item.index}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>) : (
                <p>You don't have any axes saved.</p>
            )}
            <EditAxe id={editAxeId} />
        </section>
    )
}

export default UserAxes;