function timemod(system, character, opts,timey){
 
    console.log("Testing timey just entering timemod" + timey);
   //console.log("Got into the timethingy first part "+opts[0]);
   setTimeout(function (system,character,opts,timey) {
             //console.log("Testing timey after timeout" + timey);
     //opts contains [num of loops to do,color,response1,response2...... system.dolink end]
     //opts.length -2 for first and last to not count
       if (opts[0]!=0) {
         opts[0]--;
         //so if it is 4 long... comes in at 2 opts -- makes it one less
        //1 opts becomes 3 with the +. its 4 long-3 is 1. Then opts comes in at 1.
        // 0 opts becomes 2. 4-2 is 2. Then the next loop ends!
        var numnom =opts.length-(opts[0]+2);
        if(Array.isArray(opts[numnom])){
        //console.log("Got into the timethingy "+opts[0]+" humm and numnom " +numnom);
       //if(false){
       
       parer(opts[numnom][0],opts[numnom][1]);
       
        }else{
          parer(opts[numnom]);
        }
         this.scrollBy(0, 200);
         
         timemod(system, character, opts,timey);
       } else {
       
       system.doLink(opts[opts.length - 1]);
      
       }
 
 
 
 
 
       
     }, (timey)?timey:1500,system,character,opts,timey);
   }
 
   
   
   
   
 
 
 
 function say(str,  system, character, style) {
 
 var res = "";
 
    if(Array.isArray(str)){
     
      res=str[(rnd(str.length))-1];
    }else{
         res=str;
      
    }
   
   
    var person = character.sandbox.currenthostparse;
    
    
   var x;
   var arrarer = ["host","host1", "sheath", "dayjob","dayjob2"];
 //  if(character.sandbox.forgotten){
 //    arrarer = ["host", "sheath", ];
 //  }
   
   
 
   res = res.replace(new RegExp("#alt", 'g'), alt);
 //console.log("testing "+person[x]+" to replace "+arrarer[pos]); 
   if (alt2 != "") {
     res = res.replace(/\[.*?\]\s?/, alt2);
   }
 
  
   for (x in person) {
 
 // console.log("parer check " +character.sandbox.currenthostparse[x] );
 
     res = res.replace(new RegExp(x, 'g'), person[x]);
 //console.log("testing "+person[x]+" to replace "+arrarer[pos]); 
 
   }
   
   if(character.sandbox.girl){
     if(character.sandbox.girl=="herm"){
       
           var girlifier=[
       [" shi "," he "],
       [" hir "," his "],
       ["Shi ","He "],
       [" hir "," him "],
        [" hir. "," him. "],
       ["hirself","himself"],
       ["Hir ","His "]
       
       
       
     ];
     }else{
           var girlifier=[
       [" she "," he "],
       [" her "," his "],
       ["She ","He "],
       ["herself","himself"],
       [" her "," him "],
       [" her. "," him. "],
       ["Her ","His "]
       
       
       
     ];
     }
 
      for (x in girlifier) {
 
 // console.log("parer check " +character.sandbox.currenthostparse[x] );
 
     res = res.replace(new RegExp(girlifier[x][1], 'g'),girlifier[x][0]);
 //console.log("testing "+person[x]+" to replace "+arrarer[pos]); 
  
   }
  
   }
  
   ;
   res = res.replace(new RegExp("player", 'g'), character.sandbox.fname);
 res = res.replace(new RegExp("q1", 'g'), '"');
   if (style) {
 
     system.write("<div class='contentcut"+character.sandbox.daycut+"'><p><br></p><p class='special' style='" + style+ "'>" + res + "</p></div>");
   } else {
     system.write("<div class='contentcut"+character.sandbox.daycut+"'><p><br></p><p>" + res + "</p></div>");
 
   }
 
 }