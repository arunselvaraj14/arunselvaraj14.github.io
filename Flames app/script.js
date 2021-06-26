function myFunction() {
    document.getElementById("myForm").reset();
  }
function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
  }
  function flames(){
    var res=document.getElementById("output");
    var a=document.getElementById("name1").value.toLowerCase();
    var b=document.getElementById("name2").value.toLowerCase();
    if(a!=""&&b!=""){
      for (i=0;i<a.length;i++){
        for(j=0;j<b.length;j++){
          if(a[i]==b[j]){
            a=replaceAt(a,i,'*');
            b=replaceAt(b,j,'*');
          }
        }
      }
      var countLetters=0;
      for (i=0;i<a.length;i++){
        if(a[i]!='*'){
          countLetters++;
        }
      }
      for (i=0;i<b.length;i++){
        if(b[i]!='*'){
          countLetters++;
        }
      }
      if(countLetters>1){
        var flames="FLAMES";
        c=0;
        l=1;
        for(i=0;flames.length!=1;i++){
          if(l==countLetters)
          {
            if(c>=flames.length)
            {
              c=0;
            }
            flames=replaceAt(flames,c,'');
            l=1;
          }  
          if(c>=flames.length)
          {
            c=0;
          }        
          l++;
          c++;
        }
        
        switch(flames){
          case 'F':
            flames="Friend &#128514";
            break;
          case 'L':
            flames="Love &#128525";
            break;
          case 'A':
            flames="Affection &#128527";
            break;
          case 'M':
            flames="Marriage &#128522";
            break;
          case 'E':
            flames="Enemies &#128520";
            break;
          case 'S':
            flames="Sibling  &#128540";
            break;
        }
      }
      if(countLetters==1){
        flames="Sibling &#128540";
      }
      if(countLetters==0){
        flames="Its Same Name";
      }
      res.innerHTML=flames;
    }else{
      res.innerHTML="Please Enter Name";
    }
  }
  