
  var correct=0;
  var wrong=0;
  var tot=0;
  var x,y,z;
  var inc=0;
  var op;

  window.onload=loader();

  function loader(){
    x= Math.floor((Math.random() * 100) + 1);
    y = Math.floor((Math.random() * 100) + 1);
    op = ["*", "+", "/", "-"][Math.floor(Math.random()*4)];
    if(y>x && (op=="/" || op=="-")){
      var temp=x;
      x=y;
      y=temp;
    }
    document.getElementById('number1').innerHTML = x;
    document.getElementById('number2').innerHTML = y;
    document.getElementById('operator').innerHTML = op;

    var p=document.getElementById('ans');
    p.style.background= "#009688";
    p.innerHTML='Not answered';
    document.getElementById("number").value="";
  }

  function changecolorsubmit(){
    var m=document.getElementById('number').value;
    var n= document.getElementById('ans');
    var inc = document.getElementById('sub').innerHTML;
    if(inc=='Submit'){
      if(op=="+"){
      if(isNaN(m) ||(x+y!=m)){
        n.style.background = "#F47414";
        n.innerHTML="Wrong";
        tot++;
        wrong++;
      }
      else if(x+y==m){
        n.style.background = "#90C140";
        n.innerHTML="Right";
        correct++;
        tot++;
      }
    }
    else if(op=="-"){
      if(isNaN(m) ||(x-y!=m)){
        n.style.background = "#F47414";
        n.innerHTML="Wrong";
        tot++;
        wrong++;
      }
      else if(x-y==m){
        n.style.background = "#90C140";
        n.innerHTML="Right";
        correct++;
        tot++;
      }
    }
    else if(op=="*"){
      if(isNaN(m) ||(x*y!=m)){
        n.style.background = "#F47414";
        n.innerHTML="Wrong";
        tot++;
        wrong++;
      }
      else if(x*y==m){
        n.style.background = "#90C140";
        n.innerHTML="Right";
        correct++;
        tot++;
      }
    }
    else if(op=="/"){
        z=Math.floor(x/y);
        if(isNaN(m) ||(z!=m)){
          n.style.background = "#F47414";
          n.innerHTML="Wrong";
          tot++;
          wrong++;
        }
      else if(z==m){
        n.style.background = "#90C140";
        n.innerHTML="Right";
        correct++;
        tot++;
      }
    }
      total();
    }
    next();
  }
  function next(){
    var inc = document.getElementById('sub').innerHTML;
    if(inc=='Submit'){
      document.getElementById('sub').innerHTML = 'Next';
    }
    else{
      document.getElementById('sub').innerHTML = 'Submit';
      loader();
    }
  }
  function total(){
    document.getElementById('correct').innerHTML = correct;
    document.getElementById('wrong').innerHTML = wrong;
    document.getElementById('tot').innerHTML = tot;
  }
  
