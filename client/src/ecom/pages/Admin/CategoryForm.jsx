import styled from 'styled-components'

const CategoryForm = ({name , setName , CreateCatForm}) => {
    
    return (
        <CategoryFormDiv className='container'>
            <form onSubmit={CreateCatForm} >

                <label htmlFor='email' > Enter Category Name</label>
                <input type="text" id='email' autoComplete='off' value={name} onChange={(e)=> setName(e.target.value)}  required />

                <button type='submit' className='catButton'> Add </button>
            </form>
        </CategoryFormDiv>
    )
}

export default CategoryForm

const CategoryFormDiv = styled.div`
    form{
        display : flex;
        flex-direction: column; 
        padding : 0 2rem;

        label{
            font-size : 1.2rem;
            margin-top : 1.5rem;
            font-family: 'Signika', sans-serif;
        }

        input{
            border : none;
            outline : none;
            border-bottom : 1px solid black;
            font-size : 1.25rem;
            margin-top: 1.5rem;
            background: transparent;
        }

        .catButton{
            padding: 0.5rem 1rem;
            outline: none;
            border: 1px solid black;
            background: transparent;
            font-size: 1.25rem;
            margin-top: 2rem;
            font-weight: 500;
            transition: all 200ms ease-out;

            &:hover{
                background-color: rgb(66, 66, 66);
                color: white;
            }
        }
    }
`