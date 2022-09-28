const person ={name:'Jack Wilian',age:17,job:'facebook',gfName:'Ema Watson',address:'KochuKheth',phone:018426576,friends:['Tom','Crusie']};
const {phone,gfName,address } = person;
const complexObject ={
    name:'abc',
    info:{
        address:'kola bagan',
        leader:'Tiger';
    }
}
const {leader} = complexObject.info;
//const gfName = person.gfName;
//const phone = person.phone
console.log(gfName,phone,address);
console.log(gfName,phone,address);
const friends =['Sakib','Arman','Amir','Salman','Sharukh'];
const [first,next,...older] = friends;
console.log(older);
