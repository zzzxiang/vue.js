import Mock from 'mockjs'
import books from './books.json'
Mock.mock('/mock/getbooks','get',{
    code:200,
    data:books
})