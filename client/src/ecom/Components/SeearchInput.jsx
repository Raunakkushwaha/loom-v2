import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addSearch } from '../Redux/SearchSlice';
import { Link } from 'react-router-dom';

const SeearchInput = () => {
    const dispatch = useDispatch()
    const searchProduct = useSelector((state) => state.searchProduct.value)
    
    return (
        <div className="searchBar">
            <input type="text" placeholder='Search here...' autoComplete='off' value={searchProduct} onChange={(e) => dispatch(addSearch(e.target.value))} />
            <Link to={`/search/${searchProduct}`}>
                <AiOutlineSearch /> </Link>
        </div>
    )
}

export default SeearchInput