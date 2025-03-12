import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Checkbox, Radio } from 'antd';
import { prices } from './Price';
import { CgExtensionRemove } from "react-icons/cg";
import Aos from 'aos';

const Filter = ({ checked, setChecked, setRadio ,redirect }) => {
    const [category, setCategory] = useState([])


    const handleFilter = (value, id) => {
        let all = [...checked]
        if (value) {
            all.push(id)
        } else {
            all = all.filter(p => p !== id)
        }
        setChecked(all)
    }

    const getCategories = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/getcategory`)
            console.log("Data of category :" , data)
            setCategory(data.category)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        Aos.init()
        getCategories()
    }, [])


    return (
        <FilterDiv data-aos="fade-up">
            <div className="category-name">
                <h3>Filter By Category</h3>
                {category?.map((item) => (
                    <Checkbox key={item?._id} className='checkBox' onChange={(e) => handleFilter(e.target.checked, item._id)} >
                        {item?.name}
                    </Checkbox>
                ))}

                <h3>Filter By Price</h3>
                <Radio.Group onChange={(e) => setRadio(e.target.value)} >
                    {prices?.map((item) => (
                        <Radio key={item?._id} className='checkBox' value={item?.quantity}>
                            {item?.name}
                        </Radio>
                    ))}
                </Radio.Group>

                <button className='mainBtn' onClick={()=>window.location.reload()} > Remove Filter <CgExtensionRemove />  </button>
            </div>
        </FilterDiv>
    )
}

export default Filter

const FilterDiv = styled.div`
    .category-name{
        padding: 1rem 2rem;
        h3{
            font-size: var(--mainFont);
        }

        .checkBox{
            font-size: 1rem;
            padding: 1rem;
        }
    }
`