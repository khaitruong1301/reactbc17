import React, { Component } from 'react'
import { connect } from 'react-redux';

class FormNguoiDung extends Component {

    state = {
        values: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDienThoai: '',
            maLoaiNguoiDung: 'NguoiDung'
        },
        errors: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDienThoai: ''
        }
    }

    handleChangeInput = (e) => {
        //e.target là thẻ xảy ra sự kiện 
        let { value, id, name } = e.target; //value: khai123 id="taiKhoan" name="taiKhoan"
        let typeMeta = e.target.getAttribute('typeMeta'); //attribute là thuộc tính mở rộng của thẻ

        console.log('typeMeta', typeMeta);

        let newValues = { ...this.state.values };
        newValues[id] = value;

        let newErrors = { ...this.state.errors };
        let messageError = '';
        if (value === '') {
            messageError = id + ' không được bỏ trống !';
        }
        if (typeMeta === 'email') {
            let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!regexEmail.test(value)) {
                messageError = id + ' không đúng định dạng !';
            }

        }
        newErrors[id] = messageError;

        //setState
        this.setState({
            values: newValues,
            errors: newErrors
        }, () => {
            console.log(this.state);
        })

    }

    handleSubmit = (e) => {
        e.preventDefault(); //Đây là hàm cản sự kiện reload của browser
        console.log('values', this.state.values);
        //Kiểm tra dữ liệu có bị lỗi hay không trước khi submit
        let valid = true;
        //Lấy ra this.state.errors kiểm tra
        let { errors, values } = this.state;
        for (let key in errors) {
            //Nếu như có 1 trường error nào không hợp lệ
            if (errors[key] !== '') {
                valid = false;
            }
        }

        for (let key in values) {
            //Nếu có 1 trường value nào = rổng => không hợp lệ
            if (values[key] === '') {
                valid = false;
            }
        }
        if (!valid) {
            alert('Dữ liệu nhập không hợp lệ');
            return;
        }
        //Nếu hợp lệ gửi dữ liệu đi => lên redux
        const action = {
            type: 'THEM_NGUOI_DUNG',
            nguoiDung: this.state.values
        }
        //Đưa dữ liệu lên redux 
        this.props.dispatch(action)
    }
    //Can thiệp vào lifecycle khi props hoặc state thay đổi thành hàm này sẽ thực thi trước khi render
    // static getDerivedStateFromProps(newProps, state) {

    //     // //Chỉ khi nào ng dùng bấm nút sửa thì mới xử lý này
    //     if (state.values.taiKhoan !== newProps.nguoiDungSua.taiKhoan) {
    //         console.log('newProps', newProps);
    //         console.log('currentState', state);
    //         //Lấy dữ liệu từ newprops gán vào state => sau khi render dữ liệu binding từ state
    //         state.values = { ...newProps.nguoiDungSua }
    //     }
    //     return state;
    // }
    //Chỉ chạy khi props thay đổi
    componentWillReceiveProps(newProps) {
        this.setState({
            values:newProps.nguoiDungSua
        })
    }



    render() {
        console.log('abc')
        let { taiKhoan, hoTen, matKhau, email, maLoaiNguoiDung, soDienThoai } = this.state.values;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='card'>
                    <div className='card-header bg-dark text-white font-weight-bold'>
                        Form Đăng Ký
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p>Tài khoản</p>
                                    <input className='form-control' id='taiKhoan' name='taiKhoan' value={taiKhoan} onChange={this.handleChangeInput} />
                                    <p className='text-danger'>{this.state.errors.taiKhoan}</p>
                                </div>
                                <div className='form-group'>
                                    <p>Họ tên</p>
                                    <input className='form-control' id='hoTen' name='hoTen' value={hoTen} onChange={this.handleChangeInput} />
                                    <p className='text-danger'>{this.state.errors.hoTen}</p>

                                </div>
                                <div className='form-group'>
                                    <p>Mật khẩu</p>
                                    <input value={matKhau} className='form-control' id='matKhau' name='matKhau' onChange={this.handleChangeInput} />
                                    <p className='text-danger'>{this.state.errors.matKhau}</p>

                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p>Email</p>
                                    <input value={email} typeMeta="email" className='form-control' id='email' name='email' onChange={this.handleChangeInput} />
                                    <p className='text-danger'>{this.state.errors.email}</p>

                                </div>
                                <div className='form-group'>
                                    <p>Số điện thoại</p>
                                    <input value={soDienThoai} className='form-control' id='soDienThoai' name='soDienThoai' onChange={this.handleChangeInput} />
                                    <p className='text-danger'>{this.state.errors.soDienThoai}</p>

                                </div>
                                <div className='form-group'>
                                    <p>Loại người dùng</p>
                                    <select value={maLoaiNguoiDung} className='form-control' id='maLoaiNguoiDung' onChange={this.handleChangeInput} name='maLoaiNguoiDung'>
                                        <option>QuanTri</option>
                                        <option>NguoiDung</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button type='submit' className='btn btn-success'>Đăng ký</button>
                        <button className='btn btn-primary ml-2' type='button' onClick={()=> {
                            //Gửi dữ liệu về redux thay đổi mảng người dùng
                            const action = {
                                type: 'CAP_NHAP_THONG_TIN',
                                nguoiDung: this.state.values
                            }
                            //Đưa dữ liệu lên redux
                            this.props.dispatch(action);
                        }} >Cập nhật người dùng</button>
                    </div>
                </div>
            </ form>
        )
    }
}


const mapStateToProps = (rootReducer) => {

    return {
        nguoiDungSua: rootReducer.quanLyNguoiDungReducer.nguoiDungSua
    }
}



export default connect(mapStateToProps)(FormNguoiDung);