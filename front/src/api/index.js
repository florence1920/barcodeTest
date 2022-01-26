import axios from 'axios';

function getTest(){
    console.log('api');
    const url = 'http://localhost:3000/'
    return axios.get(url);
}

function getCheck(user){
    const url = 'http://localhost:3000/generate'
    return axios.get(url,{
        params:{
            userName : user.userName,
            phoneNumber : user.phoneNumber,
            goodsNumber : user.goodsNumber
        }
    });
}

export { getTest, getCheck };