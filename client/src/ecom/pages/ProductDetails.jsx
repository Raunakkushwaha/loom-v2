import React, { useEffect, useState } from 'react'
import FileStructure from '../Components/FileStructure'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { BsCart3 } from "react-icons/bs";
import { BiStore } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux'
import { addSimilar } from '../Redux/Slice'
import SimilarBanner from '../Components/SimilarBanner'
import { addCart } from '../Redux/Cart'

const ProductDetails = () => {
    const dispatch = useDispatch()
    const { slug } = useParams()
    const [id, SetId] = useState("");
    const [categoryid, SetCategoryid] = useState("");
    const [prodcutData, setProductData] = useState(null);
    const user = useSelector((state) => state?.authReducer?.authData);  // Ensure default value


    const url = window.location.pathname

    const getSingleProduct = async (req, res) => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/${slug}`)
            setProductData(data?.product);
            SetId(data?.product?._id)
            SetCategoryid(data?.product?.category)
        } catch (error) {
            alert('Error Occured! try again')
        }
    }

    const getSimilar = async (req, res) => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/productByCategory/${categoryid}`);
            dispatch(addSimilar(data?.products))
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getSingleProduct();
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        getSingleProduct();
        // eslint-disable-next-line
    }, [url])
    useEffect(() => {
        getSimilar()
        // eslint-disable-next-line
    }, [id, categoryid, SetCategoryid])
    return (
        <FileStructure>
            <ItemInfo className='ItemInfo' >
                <img src={`${process.env.REACT_APP_API}/api/v1/product/get-photo/${id}`} alt="" />

                <div className="ItemDetails">
                    <h3> {prodcutData?.name} </h3>
                    <p> {prodcutData?.description}
                    </p>

                    <div className="productBtn">
                        {user?.token ?
                            <>
                                <button className="mainBtn" onClick={(e) => {
                                    e.preventDefault()
                                    dispatch(addCart(prodcutData))
                                }}> Add to Cart <BsCart3 /> </button>
                                <button className="mainBtn"> Buy Now <BiStore /> </button>
                            </>
                            : ""}
                    </div>
                </div>
            </ItemInfo>
            <div className="container">
                <Title>
                    <h3> Similar Items </h3>
                </Title>
                <SimilarBanner />
            </div>
        </FileStructure>
    )
}

export default ProductDetails

const Title = styled.div`
    padding: 1rem 2rem;

    h3{
        font-size: var(--mainBigFont);
    }
`

const ItemInfo = styled.div`
    display:flex;
    column-gap: 1.5rem;
    justify-content:space-evenly;
    width: 100%;
    padding: 5rem 2rem;
    background:var(--Darkblack);

    @media only screen and (max-width: 1365px) {
        img{
            max-height: 20rem !important;

        }
    }
    
    img{
        border-radius: 1rem;
        max-height: 25rem;
    }

    .ItemDetails{
        display:flex;
        flex: 0.7 ;
        row-gap: 2rem;
        flex-direction: column;

        .productBtn{
            padding: 1rem;
            display:flex;
            flex-wrap: wrap;
            gap: 1rem;
        }

    }
    
`