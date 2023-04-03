import React from "react";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,

  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";


import { BsCurrencyDollar } from "react-icons/bs";
import {AiOutlinePercentage} from 'react-icons/ai';
import {MdOutlineStarOutline} from 'react-icons/md';
import Link from "next/link";


const ProductCard = ({ item }) => {
  
  return (
    <>
      <div className="col col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <MDBCard className="m-4">
          <MDBCardImage
            position="top"
            alt="..."
            height="250px"
            src={item.images[0]}
          />
          <MDBCardBody>
            <MDBCardTitle className="text-secondary">{item.title}</MDBCardTitle>
            <MDBCardText className="bg-secondary p-2">
              <span className="h4 text-light">Price</span> :{" "}
              <span className="h4 text-light">{item.price}</span>{" "}
              <BsCurrencyDollar  />
            </MDBCardText>
          </MDBCardBody>
          <MDBListGroup flush>
            <MDBListGroupItem className=" m-1 text-center ">
              <span className="h5 text-dark">Brand</span> :{" "}
              <span className="h5 text-secondary">{item.brand}</span>{" "}
            </MDBListGroupItem>
            <MDBListGroupItem className=" m-1 text-center">
              <span className="h5 text-dark">Category</span> :{" "}
              <span className="h5 text-secondary">{item.category}</span>{" "}
            </MDBListGroupItem>
            <MDBListGroupItem className=" m-1 text-center">
              <span className="h5 text-darkt">Rating</span> :{" "}
              <span className="h5 text-secondary">{item.rating}<MdOutlineStarOutline color="green" /></span>{" "}
            </MDBListGroupItem>
            <MDBListGroupItem className=" m-1 text-center">
              <span className="h5 text-dark">Discount</span> :{" "}
              <span className="h5 text-secondary">
                {item.discountPercentage} <AiOutlinePercentage color="green" />
              </span>{" "}
            </MDBListGroupItem>
          </MDBListGroup>
          <MDBCardBody>
            <Link href={`/products/${item.id}`}>
              <div className="d-flex justify-content-center ">
                <button className="btn btn-secondary w-100 text-decoration: inherit;">Detail</button>
              </div>
            </Link>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
};

export default ProductCard;