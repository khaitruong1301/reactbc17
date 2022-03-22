import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {

  renderKetQua = () => {
    let tongDiem = this.props.mangXucXac.reduce((diem,xx,index)=>{
      return diem += xx.diem;
    },0)
    let taiXiu = tongDiem > 11 ? 'Tài' : 'Xỉu';
    return <p>{tongDiem} - {taiXiu}</p>
  }


  render() {
    console.log('this.props', this.props)
    return (
      <div className='container'>
        <div className='row text-center mt-5'>
          <div className='col-4'>
            <button style={{ background: 'none', border: 'none' }} onClick={() => {
              const action = {
                type: 'DAT_CUOC',
                banChon: true
              };
              //Sử dụng this.props.dispatch để đưa dữ liệu lên reducer (component phải connect với redux mới có props này)
              this.props.dispatch(action)
            }}>
              <div style={{ borderRadius: 10 }} className='bg-danger text-white display-4 p-5'>TÀI</div>
            </button>
          </div>
          <div className='col-4'>
            {this.props.mangXucXac.map((xucXac, index) => {
              return <img key={index} width={50} height={50} src={xucXac.img} alt='...' />
            })}
            <br />
            <div className='display-4 text-warning mt-2'>
                {this.renderKetQua()}
            </div>
          </div>
          <div className='col-4'>
            <button style={{ background: 'none', border: 'none' }} onClick={() => {
              const action = {
                type: 'DAT_CUOC',
                banChon: false
              };
              //Sử dụng this.props.dispatch để đưa dữ liệu lên reducer (component phải connect với redux mới có props này)
              this.props.dispatch(action)
            }}>
              <div style={{ borderRadius: 10 }} className='bg-danger text-white display-4 p-5'>XỈU</div>
            </button>
          </div>
        </div>

      </div>
    )
  }
}

//Bước 2: Định nghĩa mapstatetoprops =>lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => {
  return {
    mangXucXac: rootReducer.gameXucXacReducer.mangXucXac
  }
}


export default connect(mapStateToProps)(XucXac);

//rcredux