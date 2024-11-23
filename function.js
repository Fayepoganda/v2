let KapagHaboTalagangMagYes = 1;

        function OpenNewPage() {
            window.open("hellooo.html");
        }

        function f() {
            const noButton = document.getElementById('NoButton');
            
            if (KapagHaboTalagangMagYes == 1) {
                noButton.style.top = '700px';
                noButton.style.left = '100px';
                KapagHaboTalagangMagYes = 2;
                noButton.style.width = '100px'; 
                noButton.style.height = '50px'; 
            } else if (KapagHaboTalagangMagYes == 2) {
                noButton.style.top = '500px';
                noButton.style.left = '300px';
                KapagHaboTalagangMagYes = 3;
                noButton.style.width = '200px'; 
                noButton.style.height = '80px'; 
            } else if (KapagHaboTalagangMagYes == 3) {
                noButton.style.top = '800px';
                noButton.style.left = '380px';
                KapagHaboTalagangMagYes = 4;
                noButton.style.width = '150px'; 
                noButton.style.height = '78px'; 
            } 
            else if (KapagHaboTalagangMagYes == 4) {
                noButton.style.top = '0px';
                noButton.style.left = '380px';
                KapagHaboTalagangMagYes = 1;
                noButton.style.width = '200px'; 
                noButton.style.height = '80px';     
                 
            } 
            
            }
