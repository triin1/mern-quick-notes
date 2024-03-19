import * as usersService from '../../utilities/users-service';

function OrderHistoryPage() {
    const handleCheckToken = async (event) => {
        event.preventDefault();
        try {
            const expDate = await usersService.checkToken();
            console.log(expDate);
        } catch {

        }
    };
    
    
    return (
        <>
            <h1>Order History Page</h1>
            <button onClick={handleCheckToken}>Check when my login expires</button>
        </>
    )
};

export default OrderHistoryPage;