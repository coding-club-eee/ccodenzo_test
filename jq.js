document.addEventListener("visibilitychange", event => {
  let a = document.getElementById('tab').value;
  const element = document.querySelector('#ips');
  if (Number(a)<10000){
  if (document.visibilityState === "visible") {
      console.log("tab is active")
  } else {
      alert("tab is switched");
      window.scrollTo(0, 0);
      disableDiv();
      document.querySelector(".popup").style.display = "block";
      document.getElementById('tab').value = Number(a) + 1;
          
      
  }
}
})
function onload_fuc(){
  window.scrollTo(0, 0);
      disableDiv();
      document.querySelector(".popup").style.display = "block";
}
function disableDiv() {
  $("#myDiv").removeClass("enabled");
  $("#myDiv").addClass("disabled");
}
function enableDiv() {
  $("#myDiv").removeClass("disabled");
  $("#myDiv").addClass("enabled");
}
function full(){
  document.documentElement.requestFullscreen().catch((e) => {
          console.log(e)
      });
      
  document.querySelector(".popup").style.display = "none";
  enableDiv();
}


// this function is used to generate form
function generateForm(inputArray,nameArray){
    var nVal=0;
    var actionUrl = inputArray[0];
    var formTag = $('<form>', {
      target: "_self",
      id: "regForm",
      class: "forms",
      autocomplete:"off",
      action: inputArray[0]
    });
    var ip = $('<input>', {
      type: 'hidden',
      name: 'entry.1139868040',
      value:0,
      id:'tab'
    });
    formTag.append(ip);
    for(var i=1;i<inputArray.length;i++){
      var style_main=(i <= 5) ? "block" : "none";
      var mainDiv = $('<div>', {
        class: 'main_div',
        id:'q'+i.toString(),
        css:{
          'display':style_main
        }
        
      });
      var temp = inputArray[i];
      var questionValue = $('<span>', {
        class: 'questionDisplay',
        html: temp[1]
      });
      var Qbreak = $('<div>').append($('<br>'));
  
      mainDiv.append(questionValue, Qbreak);

      // email
      if(temp[0]=='email'){
        var ip = $('<input>', {
          type: 'email',
          name: nameArray[nVal++],
          required: true
        });
        mainDiv.append(ip);
      }

      // text
      else if(temp[0]=='text'){
        var ip = $('<input>', {
          type: 'text',
          name: nameArray[nVal++]
        });
        mainDiv.append(ip);
      }

      // text area
      else if(temp[0]=="textarea"){
        var ip = $('<textarea>', {
          name: nameArray[nVal++]
        });
        mainDiv.append(ip);
      }

      // radio
      else if(temp[0]=='radio'){
        var opDiv = $('<div>', {
          class: 'fancy-radio-buttons with-image',
          id: 'radio-button-container'
        });
  
        for(var j=0;j<temp[2].length;j++){
          var opSpan = $('<span>', {
            class: 'image-container'
          });
          var opInput = $('<input>', {
            type: 'radio',
            name: nameArray[nVal],
            id: 'q'+i.toString()+'p'+j.toString(),
            value:temp[2][j]
          });
          var opLabel = $('<label>', {
            for: 'q'+i.toString()+'p'+j.toString(),
            html: temp[2][j]
          });
          var opLabel2 = $('<label>', {
            for: 'q'+i.toString()+'p'+j.toString(),
            class: 'image-bg'
          });
          opSpan.append(opInput, opLabel, opLabel2);
  
          opDiv.append(opSpan,$('<br>'));
          
          mainDiv.append(opDiv);
        }
        nVal+=1;
      }

      // check box 
      else if(temp[0]=='checkbox'){
        var checkDiv = $('<div>');
  
        for(var j=0;j<temp[2].length;j++){
          var checkOp = $('<input>', {
            type: 'checkbox',
            name: nameArray[nVal],
            id: 'q'+i.toString()+'p'+j.toString(),
            value:temp[2][j]
          });
          var checkLabel = $('<label>', {
            for: 'q'+i.toString()+'p'+j.toString(),
            html: temp[2][j]
          });
          checkDiv.append(checkOp,checkLabel,$('<br>'));
        }
        nVal+=1;
        mainDiv.append(checkDiv);
      }

      // select tag or dropdown 
      else if(temp[0]=='select'){
        var selectDiv = $('<div>');
        var selecT = $('<select>',{
          required: true,
          name:nameArray[nVal++]
        });
        var choose = $('<option>', {
          value: "",
          text: "Choose here"
        }).attr({selected: true});
        selecT.append(choose);
  
        for(var j=0;j<temp[2].length;j++){
          var selectOption = $('<option>', {
            value: temp[2][j],
            text: temp[2][j]
          });
          selecT.append(selectOption);
        }
        selectDiv.append(selecT);
        mainDiv.append(selectDiv);
      }
      else{console.log('hiiii');}
      formTag.append(mainDiv);
    }
    var Sbutton = $('<button>', {
      type: 'submit',
      html: 'submit'
    });
    formTag.append(Sbutton);
    $('#myDiv').append(formTag);
  }
  
  const question_array =  [ "https://docs.google.com/forms/u/0/d/e/1FAIpQLScCsJmXfeOrkzzC3dBOe47eDYpflyoasZ8d7ZA53BYVh9gYZg/formResponse", [ "text", "Team Name" ], [ "text", "Name:" ], [ "text", "Roll Number:" ], [ "text", "Email Address:" ], [ "radio", "What is the output of the program:<br><br><i>#include &lt;stdio.h&gt;<br>int main(){<br>        int main = 3;<br>        printf(\"%d\", main);<br>        return 0;<br>    }</i>", [ "Compile-time error", "3", "Runtime error", "Infinite looping" ] ], [ "radio", "Who is the father of C language?<br>", [ "Dennis Ritchie", "Steve jobs", "james Gosling", "Bjarne Stroustrup" ] ], [ "radio", "Which of the following is not a valid C variable\nname?<br>", [ "int number;", "float rate;", "int variable_count;", "int $main;" ] ], [ "radio", "All keywords in C are in ____________<br>\n", [ "LowerCase letters", "UpperCase letters", "CamelCase letters", "None of the mentioned" ] ], [ "radio", "Which of the following is true for variable\nnames in C?<br>", [ "They can contain alphanumeric characters as well as special characters", "It is not an error to declare a variable to be one of the keywords(like goto, static)", "Variable names cannot start with a digit", "Variable can be of any length" ] ], [ "radio", "Which is valid C expression?<br>", [ "int my_num = 100,000;", "int my_num = 100000;", "int my num = 1000;", "int $my_num = 10000;" ] ], [ "radio", "Which of the following cannot be a variable name\nin C?<br>", [ "volatile", "true", "friend", "export" ] ], [ "radio", "Which keyword is used to prevent any changes in\nthe variable within a C program?<br>", [ "immutable", "mutable", "const", "volatile" ] ], [ "radio", "What is the result of logical or relational\nexpression in C?<br>", [ "True or False", "0 or 1", "0 if an expression is false and any positive number if an expression is true", "None of the mentioned" ] ], [ "radio", "What is an example of iteration in C?<br>", [ "for", "while", "do-while", "All of the mentioned" ] ], [ "radio", "Functions in C Language are always _________<br>", [ "Internal", "External", "Both Internal and External", "External and Internal are not valid terms for functions" ] ], [ "radio", "What is #include &lt;stdio.h&gt;?<br>", [ "Preprocessor directive", "Inclusion directive", "File inclusion directive", "None of the mentioned" ] ], [ "radio", "Which of the following are C preprocessors?<br>", [ "#ifdef", "#define", "#endif", "All of the mentioned" ] ], [ "radio", "The C-preprocessors are specified with _________\nsymbol.<br>", [ "#", "$", "\" \"", "&amp;" ] ], [ "radio", "Which of the following return-type cannot be\nused for a function in C?<br>", [ "char *", "struct", "void", "None of the mentioned" ] ], [ "radio", "scanf() is a predefined function in______header\nfile.<br>", [ "stdlib. h", "ctype. h", "stdio. h", "stdarg. h" ] ], [ "radio", "In which year was C language developed?", [ "1962", "1978", "1979", "1972" ] ], [ "radio", "How many keywords are there in C language?", [ "32", "33", "64", "18" ] ], [ "radio", "C language is a ___.<br>", [ "Procedural oriented programming language", "General purpose programming language", "Structured programming", "All of the above" ] ], [ "radio", "What is the output of the program?<br><i>#include &lt;stdio.h&gt;<br>&nbsp; &nbsp; void main(){<br>&nbsp; &nbsp; &nbsp; &nbsp; int x = 15 /5*3 + (2*0+1);<br>&nbsp; &nbsp; &nbsp; &nbsp; printf(\"%d\",x);<br>&nbsp; &nbsp; }</i><br>", [ "10", "12", "15", "18" ] ], [ "radio", "<div>What is the output of the program?<br></div><i>#include &nbsp;&lt;stdio.h&gt;<br>&nbsp; &nbsp; int main(){<br>&nbsp; &nbsp; &nbsp; &nbsp;char a;<br>&nbsp; &nbsp; &nbsp; &nbsp;a = 1;<br>&nbsp; &nbsp; &nbsp; &nbsp;printf(\"%d \", a);<br>&nbsp; &nbsp; &nbsp; &nbsp;return 0;<br>&nbsp; &nbsp; }</i><br>", [ "0", "1", "Compile time error", "Run time error" ] ], [ "radio", "What is the output of the program?<br><i>#include &lt;stdio.h&gt;<br>&nbsp; &nbsp; int main(){<br>&nbsp; &nbsp; &nbsp; &nbsp; int y = 10;<br>&nbsp; &nbsp; &nbsp; &nbsp; int y = 15;<br>&nbsp; &nbsp; &nbsp; &nbsp; printf(\"%d\", y);<br>&nbsp; &nbsp; &nbsp; &nbsp; return 0;<br>&nbsp; &nbsp; }</i><br>", [ "10", "15", "Compile-time error", "None of this above" ] ], [ "radio", "What is the output of the program?<br><i>#include &nbsp;&lt;stdio.h&gt;<br>int main(){<br>&nbsp; &nbsp; printf(\"%d\",printf(\"Hai\"));<br>&nbsp; &nbsp; return 0;<br>}</i><br>", [ "Hai3", "printf(\"Hai\")", "ERROR", "None of these above" ] ], [ "radio", "In C, how do you initialise an array at compile time ?<br>", [ "int arr{}={11,12,15,16,19};", "int arr()={11,12,15,16,19};", "int arr{5}={11,12,15,16,19};", "int arr[5]={11,12,15,16,19};" ] ], [ "radio", "What is the output of the program?<br><i>#include&lt;stdio.h&gt;<br>int main(){<br>&nbsp; &nbsp; int &nbsp;a=10;<br>&nbsp; &nbsp; a=20;<br>&nbsp; &nbsp; printf(\"%i\",a);<br>&nbsp; &nbsp; return 0;<br>}</i><br>", [ "10", "20", "Error", "None of this above" ] ], [ "radio", "What will be the output of the following C code? (Initial values:<b> x= 5, y = 5</b>)<br><i>#include &lt;stdio.h&gt;<br>&nbsp; &nbsp; void main()<br>&nbsp; &nbsp; {<br>&nbsp; &nbsp; &nbsp; &nbsp; float x;<br>&nbsp; &nbsp; &nbsp; &nbsp; int y;<br>&nbsp; &nbsp; &nbsp; &nbsp; printf(\"enter two numbers \\n\");<br>&nbsp; &nbsp; &nbsp; &nbsp; scanf(\"%f %f\", &amp;x, &amp;y);<br>&nbsp; &nbsp; &nbsp; &nbsp; printf(\"%f, %d\", x, y);<br>&nbsp; &nbsp; }</i><br>", [ "5.000000, 5", "Run time error.", "5.000000, Garbage value.", "Compile time error" ] ], [ "radio", "Fill in the blanks<br><i>#include&lt;stdio.h&gt;<br>void main(){<br>&nbsp; &nbsp; float arr[] = {12.4, 2.3, 4.5, 6.7};<br>&nbsp; &nbsp; printf(\"%<b>______</b>\", sizeof(arr)/sizeof(arr[0]));<br>}</i><br>", [ "f", "u", "d", "lu" ] ], [ "radio", "What will be the output of the following C code?<br><i>#include &lt;stdio.h&gt;<br>int main(){<br>char str[] = {'g', 'l', 'o', 'b', 'a', 'l','\\0'};<br>printf(\"%s\", str);<br>return 0;<br>}</i><br>", [ "g", "global", "global\\0", "Error" ] ], [ "radio", "What will be the output of the following C code?<br>#include &lt;stdio.h&gt;<br>int <br>main<br>()<br>{<br>printf<br>(<br>&nbsp; &nbsp; \"hello EEE\"<br>&nbsp;);<br>return <br>0;<br>}<br>", [ "hello EEE", "Syntax error", "Compile time error", "None of these above" ] ], [ "radio", "<span style=\"white-space:pre-wrap\">What is the purpose of the \"main\" function in a C program?</span><br>", [ "To provide the starting point for the execution of a C program", "To define the data types and variables used in the program", "To specify the arithmetic operations to be performed", "To declare the functions used in the program" ] ] ];
    const name_array = [
      "entry.2075874274",
      "entry.1897573903",
      "entry.1565964371",
      "entry.943272570",
      "entry.403770147",
      "entry.1513532894",
      "entry.1367704740",
      "entry.977248369",
      "entry.649800120",
      "entry.1811657117",
      "entry.842780215",
      "entry.338068076",
      "entry.119526678",
      "entry.1982107538",
      "entry.725893616",
      "entry.440109048",
      "entry.67468724",
      "entry.1350085010",
      "entry.1567071015",
      "entry.1877247609",
      "entry.625406905",
      "entry.415436232",
      "entry.1429095338",
      "entry.718740234",
      "entry.538421587",
      "entry.1409605921",
      "entry.1554299558",
      "entry.1418246474",
      "entry.2059216862",
      "entry.1203134908",
      "entry.133163431",
      "entry.2104776189",
      "entry.1907189103",
      "entry.705004170"
  ];

  let questions = document.getElementsByClassName("main_div");
  let currentQuestion = 0;
  
  function displayQuestion() {
    questions[currentQuestion].style.display = "block";
    currentQuestion++;
    if (currentQuestion === questions.length) {
      return;
    }
    setTimeout(displayQuestion, 10);
  }

// generateForm(testArray);
$(document).ready(function(){
  generateForm(question_array,name_array);  
  displayQuestion();

});