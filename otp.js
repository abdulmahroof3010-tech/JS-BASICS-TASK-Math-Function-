 
        function genOtp(){
            if(Math.random()<0.5){
                len =4
            }else{
                len=6
            }
            let otp="";
            for(let i=0;i<len;i++){
                 otp+=Math.floor(Math.random()*10)
            }
            return otp
        }

        document.getElementById("btn").addEventListener("click" ,function(){
         let display=document.getElementById("place-hold");
        const otp=genOtp();
        display.style.color="#388e3c"
        display.textContent="Otp:"+otp;
        })


