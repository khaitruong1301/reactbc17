import axios from 'axios';
import { http, TOKEN_CYBERSOFT } from '../../util/setting';





export const getPhimAction = () => {

    return async dispatch => {
        try{
            let result = await axios({
                url:'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13',
                method:'GET',
                headers: {
                    'TokenCybersoft': TOKEN_CYBERSOFT
                }
            });

            //Sau khi lấy dữ liệu từ api về đưa lên reducer
            dispatch({
                type: 'LAY_DANH_SACH_PHIM_API',
                data: result.data.content
            })

        }catch(err) {
            console.log({err})
        }


    }
}



export const layChiTietPhimAction = (maPhim) => {

    return async dispatch => {
        try{
            let result = await http.get('/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim='+ maPhim);

            //Lấy dữ liệu thành công đưa dữ liệu lên reducer

            const action = {
                type:'LAY_CHI_TIET_PHIM',
                data:result.data.content
            }

            dispatch(action);
        }catch(err) {
            console.log({err})
        }

    }
}