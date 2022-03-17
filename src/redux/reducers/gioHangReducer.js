
let stateGioHangDefault = [
    { maSP: 1, tenSP: 'iphone', giaBan: 1000, soLuong: 1, hinhAnh: 'https://i.pravatar.cc?u=1' }
]



export const gioHangReducer = (state = stateGioHangDefault, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let gioHang = state; //00xxx
            //Từ sản phẩm được click thông qua redux gửi lên => tạo ra 1 sản phẩm có thuộc tính số lượng
            let spGH = { ...action.sanPhamClick, soLuong: 1 };
            //Kiểm tra sản phẩm gửi lên đã có trong giỏ hàng hay chưa
            let sp = gioHang.find(spGH => spGH.maSP === action.sanPhamClick.maSP);
            if (sp) {
                sp.soLuong += 1;
            } else {
                gioHang.push(spGH);
            }
            console.log('gioHang', gioHang);
            //immutable: tính chất bất biến
            return [...gioHang];
        }
        case 'XOA_GIO_HANG': {
            let gioHang = [...state];

            //Xoá giỏ hàng
            gioHang = gioHang.filter(sp => sp.maSP !== action.maSPXoa);
            return gioHang;
        }
        case 'TANG_GIAM_SL': {
            let gioHang = [...state];

            let sp = gioHang.find(sp => sp.maSP === action.maSP);

            if (sp) {
                sp.soLuong += action.soLuong;
                if (sp.soLuong < 1) {
                    if (window.confirm('Bạn có muốn xoá không?')) {
                        gioHang = gioHang.filter(sp => sp.maSP !== action.maSP);
                        return gioHang;
                    }
                    sp.soLuong -= action.soLuong;
                }
            }

            return gioHang; //return state mới
        }

        default: return state;
    }

}