import React, { Component } from 'react'
import {connect} from 'react-redux'

 class XucXac extends Component {
  render() {
    console.log('this.props',this.props)
    return (
      <div className='container'>
          <div className='row text-center mt-5'>
                <div className='col-4'>
                    <button style={{background:'none',border:'none'}}>
                        <div style={{borderRadius:10}} className='bg-danger text-white display-4 p-5'>TÀI</div>
                    </button>
                </div>
                <div className='col-4'>
                    {this.props.mangXucXac.map((xucXac,index) => {
                      return <img key={index} width={50} height={50} src={xucXac.img}alt='...' />
                    })}
                
                </div>
                <div className='col-4'>
                <button style={{background:'none',border:'none'}}>
                        <div style={{borderRadius:10}} className='bg-danger text-white display-4 p-5'>XỈU</div>
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
    mangXucXac:rootReducer.gameXucXacReducer.mangXucXac
  }
}


export default connect(mapStateToProps) (XucXac);

//rcredux