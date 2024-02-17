import axios from 'axios';
import {  useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function BookEdit() {
    const navigate = useNavigate();
    const {handleSubmit,setValues,values,handleChange} = useFormik({
        initialValues:{
            title:"",
            Author:"",
        },
        validate:(values)=>{
            if(values.title == ""){
                return {title: "Title is required"}
             }
             if(values.Author == ""){
               return {Author: "Author is required"}
             }
        },
        onSubmit: async(values)=>{
            try{
                await axios.put(`https://65cdadf8c715428e8b3ecda3.mockapi.io/Book/${params.id}`,values);
                navigate("/");
                
            } catch(error){
                console.log(error);
            }
        }
    })
   


    const params = useParams();
    
    let getBook = async()=>{
        try{
           const books = await axios.get(`https://65cdadf8c715428e8b3ecda3.mockapi.io/Book/${params.id}`);
           await setValues({
            title: books.data.title,
            Author: books.data.Author,
           });
           
        }catch(error){
           console.log("Error");
        }
    }
    useEffect(()=>{
        getBook();
    },[])
    
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
            <div className='card-position-relative'>
                <div className='card-header py-3'>
                    <h6 className='m-0 font-weight-bold text-primary'>
                        Edit Book
                    </h6>
                </div>
                <div className='card-body'>
                <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <label htmlFor='title'>title</label>
                                    <input
                                    type='text'
                                    className='form-control'
                                    id='title'
                                    name='title'
                                    value={values.title}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='Author'>Author</label>
                                    <input
                                    type='text'
                                    className='form-control'
                                    id='Author'
                                    name='Author'
                                    value={values.Author}
                                    onChange={handleChange}
                                    />
                                </div>
                                <input type='submit' value={"Submit"} className='btn btn-primary'/>
                                
                                </form>

                </div>

            </div>

        </div>
     </div>
    </div>
  )
}

export default BookEdit