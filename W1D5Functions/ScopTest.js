function a(){
    console.log(x); // consult Global for x and print 20 from Global
    }
    function b(){
           let x = 10;
           a(); // consult Global for a
           console.log(x);
    }
    let x = 20;
    b();

    function b(){ 
        function a(){
        //Scope Chain Reference To outer lexical environment
                console.log(x);
        }
        let x = 10; a(); console.log(x);
           }
        let x = 20;
        b(); // 10
        a() 
        b() // X = 10
         