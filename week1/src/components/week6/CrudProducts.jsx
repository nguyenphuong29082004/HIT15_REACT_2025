import React, { useState } from 'react'
import "./CurdProducts.scss"

function CrudProducts() {
    
    const [product, setProduct] = useState([])
    const [newproduct, setNewProduct] = useState({
        id: "",
        anh: "",
        tenProduct: "",
        mota: "",
    })

    const [display, setDisplay] = useState(false)
    const [isInput, setIsInput] = useState(false)
    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setNewProduct({...newproduct, [name]:value})
    }
    const handleCreate = () => {
        setProduct([...product, newproduct])
        setNewProduct({
            id: "",
            anh: "",
            tenProduct: "",
            mota: "",
        })
        setDisplay(false)
    }

    const handleDelete = (id) => {
        setProduct(product.filter((item) => item.id !== id)); 
    };
    const handleEdit = (id) => {
        
    }

    // console.log(newproduct)
    // console.log(product)


  return (
    <>
    <div className='header'>
        <h1>Quản lý Products</h1>
        <button onClick={setDisplay} className={`isDisplay ${display ? "isDisplay__on" : "isDisplay__off"}`} >Thêm mới</button>
    </div>
    
    <table>
        <tr>
            <th>id</th>
            <th>ảnh</th>
            <th>tên product</th>
            <th>mô tả</th>
            <th>action</th>
        </tr>
        {
        Array.isArray(product) && product.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.anh}</td>
                    <td>{item.nameProduct}</td>
                    <td>{item.mota}</td>
                    <td>
                        <button onClick={ () => handleDelete(item.id)}>Xoa</button>
                        <button onClick={() => handleEdit(item.id)}>Sua</button>
                    </td>
                </tr>
                
            ))
        }
        {
        display &&
    
        <tr >
            <td>
                <input type="text"
                placeholder='nhap id'
                name='id'
                // value={newProduct.id}
                onChange={(e) => handleInputChange(e)}
                />
            </td>
            <td>
                <input type="text"
                name='anh'
                placeholder='nhap and'
                // value={newProduct.id}
                onChange={(e) => handleInputChange(e)}
                />
            </td>
            <td>
                <input type="text"
                placeholder='nhap product'
                name='nameProduct'
                // value={newProduct.id}
                onChange={(e) => handleInputChange(e)}
                />
            </td>
            <td>
                <input type="text"
                placeholder='nhap mo ta'
                name='mota'
                // value={newProduct.id}
                onChange={(e) => handleInputChange(e)}
                />
            </td>
            <td>
                 <button onClick={handleCreate}>Them moi</button>
            </td>

        </tr>
        }
        
    </table>
    
    </>
  )
}

export default CrudProducts