//var hej = document.getElementById("bluebox");
//document.onclick = function () {
//    alert("Fucker svin");
//};


var boolean = true;
var string = "Hej";
var number = 13
var array = [2, 3, 5, 6, 6];
var object = {
    name: "daniel",
    age: 15
}

console.log(boolean, string, number, array, object);

var multiTypeArray = [true, 12, "hej", {name: "danny", age: 12}];
console.log(multiTypeArray);


var StudentTest = function (id, name) {
    this.id = id;
    this.name = name;
    this.toString1 = function () {
        return "Student ID = " + this.id + ", Student Name = " + this.name;
    };
}

var student1 = new StudentTest(12, "Daniel");
var student2 = new StudentTest(13, "Daniel1");
var student3 = new StudentTest(14, "Daniel2");
var studentsArray = [student1, student2, student3];


for (var s in studentsArray) {
    console.log(studentsArray[s].toString1())
}

var Student = function (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var StudentList =  {
    students: [new Student("Daniel", 12, false), new Student("Hazem", 5, true), new Student("Signe", 20, true)],
    getYoungestStudent: function () {
        var students = this.students;
        var youngestAge;
        for (var s in students) {
            if (students[s].age < youngestAge || s == 0) {
                youngestAge = students[s].age;
                var youngestStudent = students[s];
            }
        }
        return youngestStudent;
    },
    getFemaleStudents: function () {
        var femaleStudents = [];
        var students = this.students;
        for (var s in students) {
            if (students[s].gender == true) {
                femaleStudents.push(students[s]);
            }
        }
        return femaleStudents;
    }
};

console.log(StudentList.getFemaleStudents())
console.log(StudentList.getYoungestStudent())









