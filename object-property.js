const students =[
    {id:21,name:'Omar Sunny'},
    {id:31,name:'Manna'},
    {id:41,name:'Moyuri'},
    {id:71,name:'Deepjol'}
];
const names = students.map(s=>s.name);
const bigger = students.filter(s=>s.id>40);
const bigger1 = students.find(s=>s.id>40);
console.log(bigger);