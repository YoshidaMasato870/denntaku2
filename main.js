     let display=document.querySelector(".display");
      display=display+result;
      function addNumber(elem) {
        if(display.value.slice(0)=="0"||display.value.slice(-2)=="+0"||
           display.value.slice(-2)=="-0"||display.value.slice(-2)=="*0"||
           display.value.slice(-2)=="/0"){
          display.value=display.value.slice(0,-1);
          display.value+=elem.value;
          console.log(display.value);
        }else{
          display.value+=elem.value;
          console.log(display.value); 
        }
      }
      function addArithmeticSymbol(elem){
        if(display.value.slice(-1)=="+"||display.value.slice(-1)=="-"||
           display.value.slice(-1)=="*"||display.value.slice(-1)=="/"||
           display.value.slice(-1)=="."||display.value.slice(0)=="")
        {display.value+="";
          console.log(display.value);
        }else{
          display.value+=elem.value;
          console.log(display.value);
        }
      }
      function addPlusMinus(elem){
        if(display.value.slice(-1)=="+"||display.value.slice(-1)=="-"||
           display.value.slice(-1)=="*"||display.value.slice(-1)=="/"||
           display.value.slice(-1)==".")
        {display.value+="";
          console.log(display.value);
        }else{
          display.value+=elem.value;
          console.log(display.value);
        }
      }
      function addColon(elem){
        if(display.value.slice(-1)=="+"||display.value.slice(-1)=="-"||
           display.value.slice(-1)=="*"||display.value.slice(-1)=="/"||
           display.value.slice(-1)==".")
        {display.value+="";
          console.log(display.value);
        }else{
          display.value+=elem.value;
          console.log(display.value);
        }
      }
      function addNumberZero(elem){
        if(display.value.slice(0)=="0"||display.value.slice(-2)=="+0"||
           display.value.slice(-2)=="-0"||display.value.slice(-2)=="*0"||
           display.value.slice(-2)=="/0"){
          display.value+="";
        }else{
          display.value+=elem.value;
          console.log(display.value);
        }
      }
      function addNumberZero2(elem){
        if(display.value.slice(0)=="0"||display.value.slice(-2)=="+0"||
           display.value.slice(-2)=="-0"||display.value.slice(-2)=="*0"||
           display.value.slice(-2)=="/0"){
          display.value+="";
        }else{
          if(display.value.slice(0)==""||display.value.slice(-1)=="+"||
           display.value.slice(-1)=="-"||display.value.slice(-1)=="*"||
           display.value.slice(-1)=="/"){
          display.value+="0";
          }else{
          display.value+=elem.value;
          }
        }
      }
      function clearNumber(){
        if(display.value!==""){
        display.value="";
        console.log(display.value);
        }
      }
      function caluculateNumber(){
        display.value=eval(display.value);
        console.log(result.value);
      }