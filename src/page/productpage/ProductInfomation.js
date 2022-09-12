import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import QuickViewProduct from '../../pattern/QuickViewProduct';
import { REMOVE_INFO_PRODUCT } from '../../redux/actions';

const ProductInfomation = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const info_product = useSelector(state => state.showInfoProduct)

     useEffect(() => {
          if(Object.keys(info_product).length === 0 || !info_product) {
               navigate('/konghiuwatch/product')
          }
          return () => {
               dispatch(REMOVE_INFO_PRODUCT())
          }
     }, [])

     return (
          <div className='w-full flex justify-center'>
               {
                    Object.keys(info_product).length !== 0
                    &&
                    <div className='global-width py-10'>
                         <QuickViewProduct />
                         <div className='mt-16'>
                              <div className='w-full grid grid-cols-4 font-normal text-xl cursor-pointer'>
                                   <p className='py-2 text-center bg-black text-white bg-opacity-80'>Thông tin sản phẩm</p>
                                   <p className='py-2 text-center'>Chính sách vận chuyển</p>
                                   <p className='py-2 text-center'>Đổi trả & Bảo hành</p>
                                   <p className='py-2 text-center'>Hình thức thanh toán</p>
                              </div>
                              <p className='py-3'>{info_product.description || 'Đang cập nhật'}</p>
                              <div className=''>
                                   <table>
                                        <tbody>
                                             <tr>
                                                  <th>Loại máy</th>
                                                  <th>{info_product.productinfoanother.machine_type || 'Đang cập nhật'}</th>
                                             </tr>
                                             <tr>
                                                  <th>Hiển thị</th>
                                                  <th>{info_product.productinfoanother.display || 'Đang cập nhật'}</th>
                                             </tr>
                                             <tr>
                                                  <th>Chất liệu vỏ</th>
                                                  <th>{info_product.productinfoanother.shell_material || 'Đang cập nhật'}</th>
                                             </tr>
                                             <tr>
                                                  <th>Đường kính vỏ</th>
                                                  <th>{info_product.productinfoanother.shell_diameter + 'mm'  || 'Đang cập nhật'}</th>
                                             </tr>
                                             <tr>
                                                  <th>Độ dày vỏ</th>
                                                  <th>{info_product.productinfoanother.shell_thickness + 'mm'  || 'Đang cập nhật'}</th>
                                             </tr>
                                             <tr>
                                                  <th>Chất liệu dây đeo</th>
                                                  <th>{info_product.productinfoanother.strap_material || 'Đang cập nhật'}</th>
                                             </tr>
                                             <tr>
                                                  <th>Chiều rộng dây đeo</th>
                                                  <th>{info_product.productinfoanother.strap_width + 'mm' || 'Đang cập nhật'}</th>
                                             </tr>
                                             <tr>
                                                  <th>Chất liệu mặt kính </th>
                                                  <th>{info_product.productinfoanother.glass_material || 'Đang cập nhật'}</th>
                                             </tr>
                                             <tr>
                                                  <th>Khả năng chịu nước</th>
                                                  <th>{info_product.productinfoanother.water_risistance || 'Đang cập nhật'}</th>
                                             </tr>
                                        </tbody>
                                   </table>
                              </div>
                         </div>
                    </div>
               }
          </div>
     )
}

export default ProductInfomation