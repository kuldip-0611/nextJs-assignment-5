import { useEffect, useState } from "react";
import { fetchData } from "../../redux/reducers/Set_Product";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/Product_Card";
import Pagination from "react-bootstrap/Pagination";
import { Puff } from "react-loader-spinner";
import Link from 'next/link';
import { Handle_Logout } from "@/utils/auth/Logout_Auth";
import { useRouter } from "next/router";


const ProductPage = () => {
    const [login, setLogin] = useState(false)
    const productData = useSelector((state) => {
        return state.product;
    });
    const [active, setActive] = useState(1);
    const handlePageClick = (num) => {
        setActive(num);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(active * 8));
        setLogin(localStorage.getItem('isLogin'));

    }, [active, dispatch, login]);

    let items = [];
    for (let number = 0; number <= productData.total / 8; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === active}
                onClick={() => handlePageClick(number)}
            >
                {number + 1}
            </Pagination.Item>
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
            {login && (<div>
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
                        {productData.products.products ? (
                            productData.products.products.map((item, index) => (
                                <ProductCard item={item} key={index} />
                            ))
                        ) : (
                            <div className="d-flex justify-content-center">
                                <Puff
                                    width="100%"
                                    height="100vh"
                                    radius={1}
                                    color="#4fa94d"
                                    ariaLabel="puff-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                />
                            </div>
                        )}
                    </div>
                    <Pagination
                        size="lg"
                        className="d-flex justify-content-center mt-5 flex-wrap"
                    >
                        {items}
                    </Pagination>
                </div>
            </div>)}
        </>
    );
};

export default ProductPage;
