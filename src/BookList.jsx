import React from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function BookList() {
    const navigate = useNavigate();
    let initialValues ={
        title: "",
        Author: "",
    }
    let validate=(values)=>{
        if(values.title == ""){
           return {title: "Title is required"}
        }
        if(values.Author == ""){
          return {Author: "Author is required"}
        }
    }
    let onSubmit= async(values)=>{
        try{
            await axios.post("https://65cdadf8c715428e8b3ecda3.mockapi.io/Book",values);
            navigate("/");
        } catch(error){
            console.log(error);
        }
  
    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-lg-6">
                <div className='p-5'>
                    <div className='text-center'>
                        <h1 className='h4 text-gray-900 mb-4'>Create a Book</h1>
                    </div>
                    <Formik initialValues={initialValues} 
                    validate={validate}className='user'
                    onSubmit={onSubmit}>
                        {({values,errors,handleChange,handleSubmit})=>{
                            return(
                           <form onSubmit={handleSubmit}>
                             <div className='form-group'>
                            <input 
                            type='text'
                            name="title"
                            value={values.title}
                            onChange={handleChange}
                            className={`form-control form-control-user ${errors.title && "border-danger"}`}
                            id='exampleFirstName'
                            placeholder='Book title'
                            />
                            {errors.title && <div>{errors.title}</div>}
                         </div>
                         <div className='form-group'>
                            <input 
                            type='text'
                            name="Author"
                            value={values.Author}
                            onChange={handleChange}
                            className={`form-control form-control-user ${errors.Author && "border-danger"}`}
                            id='exampleLastName'
                            placeholder='Book Author'
                            />
                            {errors.Author && <div>{errors.Author}</div>}
                         </div>
                         <input type='submit' className='btn btn-primary btn-user btn-block' value={"Create Book"}/>
                        
                         
                         
                          
                         
                           </form>
                            )
                        }

                        }
                        
                    </Formik>

                </div>


            </div>

        </div>
    </div>
  )
}

export default BookList