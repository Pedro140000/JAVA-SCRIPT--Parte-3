/*



    - Aceita 3 parâmetros
       - Item do array
       - index
       - array completo
*/
const number = [1, 2, 3, 4, 5, 6, 7];

const double = number.map((item) => item * 2);

const list = [
  { name: "Pedro", vip: true },
  { name: "Maria", vip: false },
  { name: "João", vip: true },
  { name: "Bruno", vip: true },
  { name: "Carla", vip: false },
  { name: "Ana", vip: true },
  { name: "Julio", vip: false },
];

const newList = list.map((user) => {
  return {
    name: user.name,
    braceletColor: user.vip ? "black" : "green",
  };
});

const students = [
  { name: "Pedro", testGrade: 7 },
  { name: "Maria", testGrade: 5 },
  { name: "João", testGrade: 8 },
  { name: "Bruno", testGrade: 9 },
  { name: "Carla", testGrade: 3 },
  { name: "Ana", testGrade: 2 },
  { name: "Julio", testGrade: 10 },
];

const newStudents = students.map( students =>{
    return {
        name: students.name,
        studentStatus: students.testGrade >= 5 ? 'Promovido' : 'Reprovado'
    }
})

console.log(newStudents)