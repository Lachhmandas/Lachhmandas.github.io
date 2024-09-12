var names= new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="janson";
names[4]="paul";
names[5]="frankt";
names[6]="larry";
names[7]="paulat";
names[8]="laura";
names[9]="jinty";

// for ( var i= 0; i < names.length; i++){
//     if (names[i].charAt(0)'J'|| names[i].charAt(0)==='j){
//       console.log("Goodbye "+ names[i])
// }
for (var i = 0; i < names.length; i++) {

    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
    
    console.log("Goodbye "+ names[i])
    
    }
    else{
          console.log("Hello "+ names[i])
      }
    }