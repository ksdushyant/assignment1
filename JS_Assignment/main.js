


const students = [];

function submitdetails() {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form input values
    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;
    var rollno = document.getElementById("rollno").value;
    var dob = document.getElementById("date").value;
    var gender = document.getElementsByClassName("rad");
    var state = document.getElementById("state").value;
    var hobbies = document.getElementById("hobbies").value;
    var address = document.querySelector('textarea[name="Address"]').value;

    // Create a student object
    const student = {
        fname: fname,
        lname: lname,
        rollno: rollno,
        age: age,
        dob : dob,
        gender : gender,
        state : state,
        hobbies: hobbies,
        address: address
    };

    // Push the student object to the students array
    students.push(student);
    document.getElementById("formid").reset();
    
}

function getdetails(){
    const rollno = document.getElementById('getrno').value;
    for(var i=0; i<students.length; i++){
        if(students[i]['rollno'] === rollno){
            // alert(JSON.stringify(students[i]));
            var details ='Student Details \n';
            details += `Student Name : ${students[i].fname} ${students[i].lname}\n`;
            details += `Age : ${students[i].age}\n`;
            details += `Roll Number : ${students[i].rollno}\n`;
            details += `Date of Birth : ${students[i].dob}\n`;
            details += `Hobbies : ${students[i].hobbies}\n`;
            details += `Address : ${students[i].address}\n`;
            alert(details);
            return;
        }
    }
    alert("No Record Found");
}

