for (i=1; i<=5; i++)  
    {  
    document.write("<h3>"+i+"</h3>" + "<br/>")    // for loop
    }  
    
    var i=11;  
while (i<=15)  
{  
document.write(i + "<br/>");   // while loop
i++;  
}  

var i=21;  
do{  
document.write(i + "<br/>");  
i++;  
}while (i<=25);  


//---------------functions-----------------
function getcube(number){  
  //  alert(number*number*number);   // genral function
    }  
    getcube(2);

    function getInfo(){  
        return "hello javatpoint! How r u?";   // return type
        }  
        document.write(getInfo());

        //----------------
        var Students = [ 
            { rollNo: 21, name: 'Alpha' }, 
            { rollNo: 22, name: 'Beta' }, 
            { rollNo: 23, name: 'Gamma' }, 
            { rollNo: 24, name: 'Delta' }, 
            { rollNo: 25, name: 'Omega'} 
        ]; 
          
        // Use forEach() function 
        var StudentRollNo = []; 
          
        Students.forEach(function (Student) {    // higher order function 
            StudentRollNo.push(Student.rollNo); 
        }); 
          
        // Display rollNo data 
        document.writeln("<br/>"+StudentRollNo);

        //-----------Arrow function---------
        const gfg = () => {
            console.log( "Hi from GeekforGeeks!" );
        }
        
        gfg();

        // --------------------Objects---------------
        emp={id:102,name:"Shyam Kumar",salary:40000}  // object literal
document.write("<br/>"+emp.id+" "+emp.name+" "+emp.salary);
 
var emp=new Object();  
emp.id=101;   // creating object by new key word
emp.name="Ravi Malik";  
emp.salary=50000;  
document.write("<br/>"+emp.id+" "+emp.name+" "+emp.salary);  

// function emp(id,name,salary){   // by creating object by new keyword along with constructor function
//     this.id=id;  
//     this.name=name;  
//     this.salary=salary;  
//     }  
//     e=new emp(103,"Vimal Jaiswal",30000);  
      
//     document.write(e.id+" "+e.name+" "+e.salary);  

    //-----------------------Arrays-----------------
    var emp=["Sonoo","Vimal","Ratan"];   // array literal 
for (i=0;i<emp.length;i++){  
document.write(emp[i] + "<br/>");  
}  

var emp = new Array(); // creating array by new keyword  
emp[0] = "Arun";  
emp[1] = "Varun";  
emp[2] = "John";  
  
for (i=0;i<emp.length;i++){  
document.write(emp[i] + "<br>");  
}  