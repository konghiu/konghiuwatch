import React, { useEffect, useState } from 'react'
import './admin.css'
import '../css/customCSS.css'

const Addproduct = (props) => {

     const [ productimage, setProductimage ] = useState([])
     const [ productname, setProductname ] = useState('');
     const [ productprice, setProductprice ] = useState('');
     const [ productquantity, setProductquantity ] = useState('');
     const [ description, setDescription ] = useState('');
     const [ machine_type, setMachine_type ] = useState('');
     const [ display, setDisplay ] = useState('');
     const [ shell_material, setShell_material ] = useState('');
     const [ shell_diameter, setShell_diameter ] = useState('');
     const [ shell_thickness, setShell_thickness] = useState('');
     const [ strap_material, setStrap_material ] = useState('');
     const [ strap_width, setStrap_width ] = useState('');
     const [ glass_material, setGlass_material ] = useState('');
     const [ water_risistance, setWater_risistance ] = useState('');
     const [ type_watch, setType_watch ] = useState('');

     const [ onAddProduct, setOnAddProduct ] = useState(false)

     const handleAddProduct = (...infoProduct) => {
          if(infoProduct.every(item => item !== '')) {
               setOnAddProduct(true)
          } else {
               console.log('empty')
          }
     }
     
     useEffect(() => {
          if(onAddProduct) {
               fetch('http://localhost:8081/api/product', {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                         productimage: productimage,
                         productname: productname,
                         productprice: productprice,
                         productquantity: productquantity,
                         description: description, 
                         type_watch: type_watch,
                         productinfoanother: {
                              machine_type: machine_type, 
                              display: display, 
                              shell_material: shell_material, 
                              shell_diameter: shell_diameter, 
                              shell_thickness: shell_thickness, 
                              strap_material: strap_material, 
                              strap_width: strap_width, 
                              glass_material: glass_material, 
                              water_risistance: water_risistance, 
                         }
                    })
               })
               .then(res => res.json())
               .then(res => {
                    console.log(res)
                    props.closeAddAdminProduct(false)
               })
               .catch(err => console.log(err.message))
          }
     }, [onAddProduct])


     const handleImage = async (fileImage) => {
          const reader = new FileReader();
          reader.onload = () => {
               if(reader.readyState === 2) {
                    setProductimage(prev => {
                         return [...prev, {
                              id: prev.length,
                              src: reader.result         
                         }]
                    })
               }
          }
          reader.readAsDataURL(fileImage[0])
     }
     
     return (
          <div className='admin-add-product'>
               <div 
                    className='banner'
                    onClick={() => props.closeAddAdminProduct(false)}
               ></div>
               <div className='content'>
                   <div className='flex'>
                         <div className='flex-1 flex flex-col items-center'>
                              <div className='relative w-fit'>
                                   <button 
                                        className=''
                                   >Thêm hình</button>
                                   <input 
                                        type='file' 
                                        onChange={(e) => handleImage(e.target.files)}
                                   />
                              </div>
                              <div className='grid grid-cols-3 gap-5'>
                                   {
                                        productimage.map(item => (
                                             <div className='w-40 h-40 border-1' key={item.id}>
                                                  <img src={item.src} alt='' className='w-full h-full' />
                                             </div>
                                        ))
                                   }
                              </div>
                         </div>
                         <div className='flex-1'>
                              <table>
                                   <tbody>
                                        <tr>
                                             <th>Tên sản phẩm</th>
                                             <th>
                                                  <input 
                                                       value={productname}
                                                       onChange={e => setProductname(e.target.value)}
                                                  />
                                             </th>
                                        </tr>
                                        <tr>
                                             <th>Giá sản phẩm</th>
                                             <th>
                                                  <input 
                                                       value={productprice}
                                                       onChange={e => setProductprice(e.target.value)}
                                                  />
                                             </th>
                                        </tr>
                                        <tr>
                                             <th>Số lượng sản phẩm</th>
                                             <th>
                                                  <input 
                                                       value={productquantity}
                                                       onChange={e => setProductquantity(e.target.value)}
                                                  />
                                             </th>
                                        </tr>
                                        <tr>
                                             <th>Mô tả sản phẩm</th>
                                             <th>
                                                  <input 
                                                       value={description}
                                                       onChange={e => setDescription(e.target.value)}
                                                  />
                                             </th>
                                        </tr>
                                        <tr>
                                             <th>Chất liệu vỏ</th>
                                             <th>
                                                  <input 
                                                       value={shell_material}
                                                       onChange={e => setShell_material(e.target.value)}
                                                  />
                                             </th>
                                        </tr>
                                        <tr>
                                             <th>Loại máy</th>
                                             <th>
                                                  <input 
                                                       value={machine_type}
                                                       onChange={e => setMachine_type(e.target.value)}
                                                  />
                                             </th>
                                        </tr>
                                        <tr>
                                             <th>Hiện thị</th>
                                             <th>
                                                  <input 
                                                       value={display}
                                                       onChange={e => setDisplay(e.target.value)}
                                                  />
                                             </th>
                                        </tr>
                                        <tr>
                                             <th>Đường kính vỏ</th>
                                             <th>
                                                  <input 
                                                       value={shell_diameter}
                                                       onChange={e => setShell_diameter(e.target.value)}
                                                  />
                                             </th>
                                        </tr>
                                        <tr>
                                             <th>Độ dày vỏ</th>
                                             <th>
                                                  <input 
                                                       value={shell_thickness}
                                                       onChange={e => setShell_thickness(e.target.value)}
                                                  />
                                             </th>
                                        </tr>
                                        <tr>
                                             <th>Chất liệu mặt kính</th>
                                             <th>
                                                  <input 
                                                       value={glass_material}
                                                       onChange={e => setGlass_material(e.target.value)}
                                                  />
                                             </th>
                                        </tr>
                                        <tr>
                                             <th>khả năng chịu nước</th>
                                             <th>
                                                  <input 
                                                       value={water_risistance}
                                                       onChange={e => setWater_risistance(e.target.value)}
                                                  />
                                             </th>
                                        </tr>
                                        <tr>
                                             <th>Chiều rộng dây đeo</th>
                                             <th>
                                                  <input 
                                                       value={strap_width}
                                                       onChange={e => setStrap_width(e.target.value)}
                                                  />
                                             </th>
                                        </tr>
                                        <tr>
                                             <th>Chất liệu dây đeo</th>
                                             <th>
                                                  <input 
                                                       value={strap_material}
                                                       onChange={e => setStrap_material(e.target.value)}
                                                  />
                                             </th>
                                        </tr>
                                        <tr>
                                             <th>Loại đồng hồ dành cho</th>
                                             <th>
                                                  <input 
                                                       value={type_watch}
                                                       onChange={e => setType_watch(e.target.value)}
                                                  />
                                             </th>
                                        </tr>
                                   </tbody>
                              </table>
                         </div>
                    </div>
                    <div className='container-button-add'>
                         <button
                              className='w-fit hover__bg-main'
                              onClick={() => handleAddProduct(productname, productprice, productquantity, description, display, machine_type, shell_diameter, shell_material, shell_thickness, strap_material, strap_width, glass_material, water_risistance )}
                         >Thêm vào danh sách</button>
                    </div>
               </div>
          </div>
     )
}

export default Addproduct