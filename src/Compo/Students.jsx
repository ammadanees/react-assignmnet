import React, { useState } from 'react'

export default function Students() {

    let [searchtxt , setSearchTxt] = useState("")
    let [ordertxt , setOrderTxt] = useState("")
    let student = [
        {"name" : "Ammad", "gender" : "Male", "fees": 7500, "image" : "https://static.vecteezy.com/system/resources/thumbnails/024/183/502/small/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"},
        {"name" : "Bilal", "gender" : "Male", "fees": 8500, "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfE8XWOVe86hLGi8m9mgPTsva_KWjTHbT9iQ&s"},
        {"name" : "Shiza", "gender" : "Female", "fees": 6500, "image" : "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png"},
        {"name" : "Sami", "gender" : "Male", "fees": 8800, "image" : "https://static.vecteezy.com/system/resources/thumbnails/024/183/502/small/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"},
        {"name" : "Zafar", "gender" : "Male", "fees": 9500, "image" : "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg"}
        
      ]

  var filtered_product = searchtxt ?
  student.filter((a)=>a.name.toLowerCase().includes(searchtxt.toLowerCase())):
  student

  if (ordertxt === "1"){
    filtered_product = filtered_product.sort((a,b)=>a.fees - b.fees)
  }

  else if (ordertxt === "2"){
    filtered_product = filtered_product.sort((a,b)=>b.fees - a.fees)
  }
 
  else if (ordertxt === "3"){
    filtered_product = filtered_product.sort((a,b)=>a.name.localeCompare(b.name))
  }

  else if (ordertxt === "4"){
    filtered_product = filtered_product.sort((a,b)=>b.name.localeCompare(a.name))
  }


  return (
    <div className="container">
      <h1>Students</h1>
      <hr />
      <input type="text" className='form-control my-3' placeholder='Enter Student Name to search'
      onChange={(e)=>setSearchTxt(e.target.value)}
      value={searchtxt} />

      <select className='form-select my-3' onChange={(e)=>setOrderTxt(e.target.value)}>
        <option disabled selected>Select Order</option>
        <option value="1">Ascending Order</option>
        <option value="2">Desending Order</option>
        <option value="3">A-Z</option>
        <option value="4">Z-A</option>
      </select>



      <div className="row">
        {
          filtered_product.length != 0 ?

          filtered_product.map((a) => (
            <div className="col-md-4 my-2" >
              <div className="card">
                
                <img 
                  className="card-img-top" 
                  src={a.image} 
                  alt="profile" 
                  height={200} 
                />

                <div className="card-body">
                  <h6>Name: {a.name}</h6>
                  <p>Gender: {a.gender}</p>
                  <p>Fees: Rs. {a.fees}</p>
                </div>

              </div>
            </div>
          ))

          :

          <div>
            <div className='alert alert-danger alert-dismissible fade show'
            role='alert'>
              <button type='button' className='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
              No Product found
            </div>
          </div>
        }
      </div>
    </div>
  )
}
