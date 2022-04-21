import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhimAction } from '../../redux/actions/phimAction';

export default function HomeMobile(props) {

  const { mangPhim } = useSelector(state => state.phimReducer);
  const dispatch = useDispatch();
  useEffect(() => {

    const action = getPhimAction();

    dispatch(action);

  }, [])
  console.log('mangPhim', mangPhim);

  const renderPhim = () => {
    return mangPhim.map((phim, index) => {
      return <div className='d-flex mt-2' key={index}>
        <div className='img w-25'>
          <img width={100} height={150} src={phim.hinhAnh} alt={phim.tenPhim} />
        </div>
        <div className='moTa ml-3'>
          <p style={{height:100}}>
            {phim.moTa.length>150 ? phim.moTa.substr(0,150) + '...'  : phim.moTa }
          </p>
          <div className='text-right'>
            <button className='btn btn-success'>Đặt vé</button>
          </div>
        </div>
      </div>
    })
  }


  return (
    <div className='container'>
      <h3>Danh sách phim</h3>
      <div>
        {renderPhim()}
      </div>

    </div>
  )
}
