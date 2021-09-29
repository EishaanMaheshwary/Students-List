var students = [];
 function submit(){
     var name_1 = document.getElementById("text_input_1").value;
     var name_2 = document.getElementById("text_input_2").value;
     var name_3 = document.getElementById("text_input_3").value;
     var name_4 = document.getElementById("text_input_4").value;
     students.push(name_1);
     students.push(name_2);
     students.push(name_3);
     students.push(name_4);
     console.log(students);
     document.getElementById("output").innerHTML = students;
     document.getElementById("submit").style.display = "none";
     document.getElementById("sort").style.display = "inline-block";
 }
 function sort(){
     students.sort();
     console.log(students);
     document.getElementById("output").innerHTML = students;
     document.getElementById("sort").style.display = "none";
     document.getElementById("submit").style.display = "inline-block";
 }

 