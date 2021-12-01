document.getElementById('inputfile').addEventListener
        
        (
            
            'change', function()     
            {

                var fr=new FileReader();
            
                fr.onload=function()
                     {
                         document.getElementById('output').textContent=fr.result; //HTML의 Output의 테그를 가져 와서 아래 함수에 뿌려 주나?
                        
                     }
            
                fr.readAsText(this.files[0]);
                

            //document.getElementById('output').textContent 에 메모장 내용이 저장이 되는데, 이것은 새로 바뀔때 마다 저장되니, 이전 값이 저장이 된다. 

            var Outputneyong = document.getElementById('output').textContent;
          
        }


        )
   