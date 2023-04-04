import ProductCard from "@/components/Product_Card";
import Link from "next/link";
import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { Handle_Logout } from "@/utils/auth/Logout_Auth";

const getPageWiceData = ({ pagination }) => {
    let items = []
    const [active, setActive] = useState(1);
    const [login, setLogin] = useState(false)
    const handlePageClick = (num) => {
        setActive(num);
    };
    for (let number = 0; number <= 100 / 8; number++) {
        items.push(
            <Link href={`/getProductsData/${number + 1}`}>
                <span
                    className='border border-1 text-white bg-primary p-2 rounded'
                    key={number}

                    onClick={() => handlePageClick(number)}
                >
                    {number + 1}
                </span>
            </Link>

        );
    }
    const handleLogout = () => {
        Handle_Logout();

    };
    return (
        <>
            <div className="d-flex justify-content-around mt-4 bg-dark p-3 ">
                <Link href='/products/change_password'>
                    <button className="text-dark bg-light border border-none rounded h6 p-2">Change Password </button>
                </Link>
                <Link href='/products/change_profile'>
                    <button className="text-dark bg-light border border-none rounded h6 p-2">Update Profile</button>
                </Link>
                <Link href='/'>
                    <button className="text-danger bg-light border border-none rounded h6 p-2" onClick={handleLogout}>Logout</button>
                </Link>
            </div>
            <div className="container">
                <div className="row">
                    {
                        pagination.map(item => (

                            <ProductCard item={item} key={item.id} />

                        ))

                    }
                </div>
            </div>


            <Pagination
                size="lg"
                className="d-flex justify-content-center mt-5 flex-wrap"
            >
                {items}
            </Pagination>
        </>
    )
}

export default getPageWiceData

export async function getServerSideProps(context) {
    const pagination = parseInt(context.params.pagination)


    const skip = (pagination - 1) * 8

    const response = await fetch(`https://dummyjson.com/products?limit=8&skip=${skip}`)
    const data = await response.json();
    console.log(data)


    return {

        props: {
            pagination: data.products
        }
    }

}