

const stateDefault = { //0xxx
    mangNguoiDung: [
        { taiKhoan: 'nguyenvana', hoTen: 'Nguyễn Văn A', matKhau: '123123', email: 'nguyenvana@gmail.com', maLoaiNguoiDung: 'QuanTri', soDienThoai: '0909090909' },
        { taiKhoan: 'tranthibi', hoTen: 'Trần Thị B', matKhau: '123123', email: 'tranthib@gmail.com', maLoaiNguoiDung: 'NguoiDung', soDienThoai: '0808080808' },
    ],
    nguoiDungSua: {
        taiKhoan: '',
        hoTen: '',
        matKhau: '',
        email: '',
        maLoaiNguoiDung: 'QuanTri',
        soDienThoai: ''
    }

}
// primitive value: number,string,boolean
// reference value: 0xxx,0yyy

export const quanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'XOA_NGUOI_DUNG': {
            //Sao chép mảng người dùng
            let mangNguoiDung = [...state.mangNguoiDung];
            //Xử lý xoá
            mangNguoiDung = mangNguoiDung.filter(nd => nd.taiKhoan !== action.taiKhoan);
            //Sau khi xoá set lại giá trị cho mangNguoiDung
            state.mangNguoiDung = mangNguoiDung;
            console.log('state', state);
            //immutable : Tính bất biến của redux đối vối object và array
            return { ...state }; //0yyy
        }

        case 'THEM_NGUOI_DUNG': {
            let mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];

            // state.mangNguoiDung = mangNguoiDung;

            // return {...state}
            return { ...state, mangNguoiDung }
        }

        case 'SUA_NGUOI_DUNG':{
            state.nguoiDungSua = action.nguoiDung;

            return {...state};
        }

        case 'CAP_NHAP_THONG_TIN': {
            let mangNguoiDung = [...state.mangNguoiDung];
            let ndUpdate = mangNguoiDung.find(nguoiDung => nguoiDung.taiKhoan === action.nguoiDung.taiKhoan);
            if(ndUpdate) {
                //Lấy giá trị người dùng thay đổi (action.nguoiDung)
                // ndUpdate.hoTen = action.nguoiDung.hoTen;
                for(let key in ndUpdate){
                    ndUpdate[key] = action.nguoiDung[key];
                }
            }
            //Sau khi sửa cập nhật lại state
            state.mangNguoiDung = mangNguoiDung;
            return {...state}

        }

        default: return state;
    }
}