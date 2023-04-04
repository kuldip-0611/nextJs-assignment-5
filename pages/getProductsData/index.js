import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";
import ProductCard from "@/components/Product_Card";
import Link from "next/link";
import { Handle_Logout } from "@/utils/auth/Logout_Auth";
import { useRouter } from "next/router";



export const getProductsDetail = ({ data }) => {
    const [active, setActive] = useState(1);
    const handlePageClick = (num) => {
        setActive(num);
    };
    let items = [];

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
    const router = useRouter()
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('isLogin')) === false || localStorage.getItem('isLogin') === null) {
            router.push('/')
        }
    }, [])



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
            <div className="row">
                {
                    data.map(individual_item => (
                        <ProductCard key={individual_item.id} item={individual_item} />
                    ))
                }

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

export default getProductsDetail

export async function getServerSideProps(skip) {


    const response = await axios.get(`https://dummyjson.com/products?limit=8`)
    const data = response.data


    return {
        props: {
            data: data.products
        }
    }


}