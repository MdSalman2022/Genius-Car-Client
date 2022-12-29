import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {

    const location = useLocation();

    console.log(location.search);

    const query = new URLSearchParams(location.search)

    const transactionId = query.get("transactionId")

    console.log(transactionId)

    const [order, setOrder] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/orders/by-transaction-id/${transactionId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [transactionId])

    console.log(order)

    if (!order?._id) {
        return (
            <div>
                <h1>No order found</h1>
            </div>
        )
    }


    return (
        <div>
            <h2>Congrats! Successfully Paid!</h2>

            <h2>Your Order Summary</h2>

            <div className="overflow-x-auto my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Shipping Address</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>{order.serviceName}</td>
                            <td>{order.price}</td>
                            <td>{order.address}</td>
                            <td>{transactionId}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary my-5 print:hidden" onClick={() => window.print()}>Print</button>
            </div>
        </div>
    );
};

export default PaymentSuccess;