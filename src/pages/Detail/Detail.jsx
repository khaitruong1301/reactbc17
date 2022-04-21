import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layChiTietPhimAction } from '../../redux/actions/phimAction';

export default function Detail(props) {

 const {chiTietPhim} = useSelector(state => state.phimReducer);

 const dispatch = useDispatch();

 useEffect(()=>{

    // const action = layChiTietPhimAction();
    dispatch(layChiTietPhimAction(props.match.params.id))

 },[])

 console.log('chiTietPhim',chiTietPhim)

  return (
    <div className='container'>
        <div className='row mt-2'>
            <div className='col-4'>
                <img src={chiTietPhim.hinhAnh} alt='...' height={350} width={300} />
            </div>
            <div className='col-8'>
                <table>
                    <thead>
                        <tr>
                            <th>Tên phim</th>
                            <th>{chiTietPhim.tenPhim}</th>
                        </tr>
                        <tr>
                            <th>Mô tả</th>
                            <th>{chiTietPhim.moTa}</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>

        <div className='mt-2'>
            {chiTietPhim.heThongRapChieu?.map((htr,index)=>{
                return <div key={index}>
                    {htr.tenHeThongRap}
                </div>
            })}

        </div>

    </div>
  )
}
