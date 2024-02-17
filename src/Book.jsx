import axios from 'axios'
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Book() {
    const[BookList,SetBookList] = useState([])
    let onDelete= async (id)=>{
        try{
          await axios.delete(`https://65cdadf8c715428e8b3ecda3.mockapi.io/Book/${id}`)
          getDate();
        }catch(error){
            console.log("error")
        }
    }
    let getDate = async()=>{
        try{
            const Book = await axios.get("https://65cdadf8c715428e8b3ecda3.mockapi.io/Book");
            SetBookList(Book.data);
        }
        catch(error){
            console.log("error");
        }
    };
    useEffect(()=>{
        getDate();
    },[]);
  return (
    <div className="container-fluid">

                   
                   
                    <div className="d-sm-flex align-item-center justify-content-between mb-4">
                    <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                        <Link to="/BookList" 
                        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sw">
                             Add Book
                        
                        </Link>
                         
                          
                        

                    </div>
                    <p className="mb-4"><a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Author</th>
                                            <th>Action</th>
                                            
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {
                                            BookList.map((book,index)=>{
                                                return(
                                                    <tr key={index}>
                                                        <td>{book.title}</td>
                                                        <td>{book.Author}</td>
                                                        <td>
                                                            <Link to={`/BookList/${book.id}`} className="btn btn-primary btn-sm">
                                                                Edit
                                                            </Link>
                                                            <button  className="btn btn-danger btn-sm" onClick={()=>onDelete(book.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
  )
}

export default Book