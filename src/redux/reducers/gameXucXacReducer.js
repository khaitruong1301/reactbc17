


const stateGameDefault = {
    banChon: true, // true là tài, false là xỉu
    soBanThang: 10,
    tongSoBanChoi: 10,
    mangXucXac: [
        { diem: 6, img: './img/gameXucXac/6.png' },
        { diem: 6, img: './img/gameXucXac/6.png' },
        { diem: 6, img: './img/gameXucXac/6.png' }
    ]
}

export const gameXucXacReducer = (state = stateGameDefault, action) => {

    switch (action.type) {
        default: return state;
    }
}