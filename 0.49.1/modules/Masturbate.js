undum.game.masturbate = {

  masturbate: new undum.SimpleSituation(
          "", {
            actions: {
            
              "nightmasturbate": function (character, system, action) {
                transer();
          
                /////////////////////////////////////////////////////
  ///////////      BEDTIME masturbate       ////////////
  /////////////////////////////////////////////////////
                 
                  character.sandbox.nightfun=true;
                  
                       if(!(character.host.host=="bret"&&character.sandbox.forgotten)){
                           parer("<h1>MASTURBATION</h1>");
                         
                       }
                          if(character.sandbox.forgotten||character.sandbox.pillroute){
                        system.doLink("./stealthmb");
                        return;
                      }
                 //comes from finishing the mirror  (look forward to getting some sleep)
                 //Finishing shower if stealth 
                 //finishing up in living room. (continues on to evening)
              
                 
                 
                 //triggers normally for all hosts but for bret ony if player has arms and head tfed
                 var cantalkholder=false;
                 var cantalkhref=false;
                 if(!character.sandbox.stealth){
                     if (((character.sandbox.limits.cantalk)||(character.sandbox.ttcost<=character.qualities.essence&&character.sandbox.runedo.thoughts))) {
                  cantalkhref="./toyask";
                   if(character.sandbox.limits.cantalk){
                     cantalkholder="Ask for something special!";
                     
                   }else{
                      cantalkholder="(TT:"+character.sandbox.ttcost+")Ask for something special!";
                      
                   }
                 }else{
                   
                   if(character.sandbox.forgotten||character.sandbox.pillroute){
                         cantalkhref=false;
                   }else{
                        cantalkholder="Throb excitedly! (Pick a toy)";
                        
                         cantalkhref="./toyaskthrob";
                 
                   }
                 }
               
                   
                   
//                   if (character.sandbox.nightmasturbate==3) {
//                    character.sandbox.nightmasturbate=4;
//                  }
                   
                 }else{
                   if(character.qualities.sus>=25&&(!character.sandbox.forgottenstealth)){
                     character.sandbox.forgottenstealth=true;
                     system.doLink("./stealthtoforgotten");
                     return;
                   }else{
                     
                     system.doLink("./stealthmb");
                     return;
                   }
                   
                   
                   
                 }
                 //ALTERNATE MASTURBATION SCENE IDEAS!
                 
                    
 //
//-Girl/girlyboy  diaper rubbing
//
//-Raptor, Leika    experiment?
//-hyena loves Piercings Jaxe
//- Verona          
// will             BREAK THE RING
// dari             
// abyss          something vagina
// mark
//keagen            arcane drain?
// brett            beg for it
// Ravel            vacuum cleaner
// dominic          Admiring his giant cock
   
                 
                 
                 
                 /*
                  TELLING HOST WHERE TO RUB AND HOW TO MASTURBATE YOU THE BEST!
                  
                  
                  
                  
                  */
                 if(character.sandbox.ch2){
                      parer("With evening turning into night host heads into the bedroom to get some sleep. He gets fully naked and wraps up in the warm blankets sending you into darkness again. You still feel so horny from all the teasing earlier and host seems to feel the same way. A firm grip around your base is followed by a wonderful rub up your body!");
                          character.sandbox.nightmasturbate++;
                          var moar=0;
                          if(character.sandbox.reqtoymore){
                            
                            moar=2;
                          }
                      if(character.sandbox.nightmasturbate>=3-moar){
                        character.sandbox.nightmasturbate=0;
                        
                        
                        
                         oper(system, "./eveningmbnewhost", "He is masturbating you!!!!",cantalkhref,cantalkholder); 
                      }else{
                       oper(system, "./eveningmbnewhost", "He is masturbating you!!!!"); 
                      }
                   
                 }else{
                    var moar=0;
                          if(character.sandbox.reqtoymore){
                            
                            moar=2;
                          }
                  switch (character.sandbox.nightmasturbate+moar) {
                       case 4:
                   character.sandbox.nightmasturbate=1;
           
                    case 1:
           
                        
                          character.sandbox.nightmasturbate++;
                        if(character.host.host=="bret"){
                      parer("It is starting to get late as host heads into the bedroom to get some sleep. He undresses and wraps you and himself up in the warm blankets. You still feel so horny from all the teasing earlier. It seems host does as well. He reaches under his bed pulling out a box and from it a weird hollow tube. He shifts a bit and places it under a pillow directly in front of you.q1Heh hate using this thing...q1 He grumbles and slides you into it! The inside is slipperly and REALLY tight!");
                      oper(system, "./eveningmbbret", "He is masturbating you!!!!");
                 //system.doLink("./eveningmbbret");
                 }else{
                   
                   parer("With evening turning into night host heads into the bedroom to get some sleep. He gets fully naked and wraps up in the warm blankets sending you into darkness again. You still feel so horny from all the teasing earlier and host seems to feel the same way. A firm grip around your base is followed by a wonderful rub up your body!");
                   
           oper(system, "./eveningmb", "He is masturbating you!!!!");
                   
                 }
                    
                      break;
                    case 2:
                    character.sandbox.nightmasturbate++;
                      //same as 1 but leaving it here just in case
                       if(character.host.host=="bret"){
                      parer("It is starting to get late as host heads into the bedroom to get some sleep. He gets fully naked and wraps you and himself up in the warm blankets. You still feel so horny from all the teasing earlier. It seems host does as well. He reaches under his bed pulling out a box and from it a weird hollow tube. He shifts a bit and places it under a pillow directly in front of you.q1Heh hate using this thing...q1 He grumbles and slides you into it! The inside is slipperly and REALLY tight!");
                 oper(system, "./eveningmbbret", "He is masturbating you!!!!");
                 }else{
                   
                   parer("It is starting to get late as host heads into the bedroom to get some sleep. He gets fully naked and wraps up in the warm blankets sending you into darkness again. You still feel so horny from all the teasing earlier and host seems to feel the same way. A firm grip around your base is followed by a wonderful rub up your body!");
                   
                        oper(system, "./eveningmb", "He is masturbating you!!!!");
                //system.doLink("./eveningmb");
                   
                      }
                      break;
               
               
               
               
             
               default:
               
                    case 3:
                    character.sandbox.nightmasturbate++;
                   
                    
                    
                    
                        if(character.host.host=="bret"){
            parer("It is starting to get late as host heads into the bedroom to get some sleep. He gets fully naked and wraps up in the warm blankets sending you into darkness again. You still feel so horny from all the teasing earlier and host seems to feel the same way. A firm grip around your base is followed by a wonderful rub up your body!");
                 oper(system, "./eveningmbbret", "He is masturbating you!!!!",cantalkhref,cantalkholder);
                 }else{
                   
                   parer("It is starting to get late as host heads into the bedroom to get some sleep. He gets fully naked and wraps up in the warm blankets sending you into darkness again. You still feel so horny from all the teasing earlier and host seems to feel the same way. A firm grip around your base is followed by a wonderful rub up your body!");
                   
                        oper(system, "./eveningmb", "He is masturbating you!!!!",cantalkhref,cantalkholder);
                }
                      
                      
                      
                    break;
                   
                    
                      
                     
                      
                        //idea for host to look for break rune if player still has rune control after going perma
                     
                  }//End of RND switch
                }
                 //night masturbate
              
                //night normal
  /////////////////////////////////////////////////////
  ///////////      BEDTIME NORMAL         ////////////
  /////////////////////////////////////////////////////
                   //ignore mention
                   //
                   
                   //taking pictures of you when at least head is Tfed
                   //Mirror to look at how you look on him
                   //
                   
                   //shower scenes
             
           
                   
                 
                    
       

                
                //REWARD scens
                
                
                //  system.doLink("./ringchecker"); 
            
                
                
                
                
              }, //function close
              "eveningmbnewhost": function (character, system, action) {
                
         
                     if(character.sandbox.forgotten||character.sandbox.pillroute||character.sandbox.stealth){
                        system.doLink("./stealthmb");
                        
                      }else{
                           character.sandbox.scenerexit="masturbate/newhostendmb";
                var scener="masturbate";
                
                character.sandbox.rndmasturbate++;
                if(character.sandbox.host.scenes?.[scener]&&rnd()>(5- character.sandbox.rndmasturbate) ){
                    character.sandbox.rndmasturbate=0;
   parer("host starts getting ready for bed and then stops to think for a moment. You quickly feel your body start to grow stiff in response to whatever he is thinking about!");
                    system.doLink((character.sandbox.host.host+"host"+scener+"/scene1"));
              //  oper(system, , "???");
          
                }else{
                         system.doLink("./eveningmb");
                        
                      }
                 
                  
                  
                }
                
                
                
          }, //function close
              "stealthmb": function (character, system, action) {
                transer();
                if(character.sandbox.forgotten){
                  if(rnd()>8){
                    
                    character.sandbox.pillroute=true;
                  }else{
                     character.sandbox.pillroute=false;
                  }
                 
                  
                }
                if(character.sandbox.pillroute){
                  
                  
                         parer("With evening turning into night host heads into the bedroom to get some sleep. He gets fully naked and wraps up in the warm blankets sending you into darkness again. You still feel so horny from all the teasing earlier and host seems to feel the same way. A firm grip around your base is followed by a wonderful rub up your body!");
                  
                  parer("q1Maybe I should take another of those pills....q1 You hear host say as he is idlely rubbing you.");
                  
                  if(character.sandbox.wearoff>0&&rnd()>2&&character.qualities.harmony<70){
                    //doesn't take it
                         if(character.qualities.essence>=character.sandbox.ttcost&&character.sandbox.runedo.thoughts){
                    
                    oper(system, "./lol", "Tell him not to take the pill!","./lol","Let it happen!");
                  }else{
                    
                    oper(system, "./lol","You are helpless to stop him");
                  }
                    
                  }else{
                    
                    
                      if(character.qualities.essence>=character.sandbox.ttcost&&character.sandbox.runedo.thoughts&&!character.sandbox.forgotten){
                    
                    oper(system, "./nuu", "Tell him not to take the pill!","./letithappen","Let it happen!");
                  }else{
                    
                    oper(system, "./prtimeskip","You are helpless to stop him");
                  }
                    
                  }
                
                  
                  
                  
                  
                }else{
                  //forgotten route AND stealth
                  //a forgotten reveal where the host tells you what has been happening.
                  var ender="./eveningmb";
//                  if (character.sandbox.forgotten) {
//                    ender="./forgottensend";
//                  }
                        if(character.host.host=="bret"){
                parer("Bret gets ready for bed, once again not masturbating at all since he has a way better method to get off now.");
                oper(system, ender, "Relax and try to get some sleep");
                 }else{
                   
                   parer("It is starting to get late as host heads into the bedroom to get some sleep. He gets fully naked and wraps up in the warm blankets sending you into darkness again. You still feel so horny from all the teasing earlier and host seems to feel the same way. A firm grip around your base is followed by a wonderful rub up your body!");
                   
                        oper(system, ender, "He is masturbating you!!!!");
                //system.doLink("./eveningmb");
                   
                      }
                  
                  
                  
                  
                }
                
                
                
                
                
                
              }, //function close
              "lol": function (character, system, action) {
                transer();
                parer("He laughs for a moment then just rubs you again. q1Hehe kidding kidding!q1 He says reassuringly. ");
                oper(system, "./sneakyforce", "Hope he actually takes it next time","./stealthmbcont","Relax and enjoy the rubs");
              }, //function close
              "sneakyforce": function (character, system, action) {
               
                character.sandbox.pillwearoff=-1;
                system.doLink("./stealthmbcont");
              }, //function close
              "nuu": function (character, system, action) {
                transer();
                system.setQuality("essence",character.qualities.essence- character.sandbox.ttcost );
                character.sandbox.erect=false;
                clother();
                if(character.sandbox.pillwearoff>0){
                  
                   parer("host sits up a bit in bed you manage to talk with him. q1Humph, it only lasts a few days.... It wouldn't be that bad to spend a few more days thinking like a real cock...q1 he says and closes the drawer. Rather than finish masturbating he just rolls over and flicks off the light.");
                   oper(system, "./toysend", "Relax and try to get some sleep as well");
                 
                }else{
                  character.sandbox.pillwearoff=4;
                  parer("host actually jumps in surprise as you manage to communicate with him! "+character.host.pillsurp+" Rather than finish masturbating he just rolls over and flicks off the light.");
                  
             oper(system, "./toysend", "Relax and try to get some sleep as well");
                }
                
                
                
                
              }, //function close
              "letithappen": function (character, system, action) {
                transer();
                parer("You want this.... to be his cock. For real this time. Just a perfectly normal part of his body without thinking or worrying about anything. His body can take care of all your needs. And whenever host needs you for something, you will be there for him. You actually look forward to this, to being complete! Becoming his cock fully and serving him!");
                parer("You hear him jostle something and then swallow! It's only going to be a matter of moments before it starts... before you get to be what you have always wanted....");
                oper(system, "./prtimeskipcum", "Get ready.....");
              }, //function close
              "prtimeskip": function (character, system, action) {
                transer();
                parer("You don't have a choice at thist point.... You can't move or talk to him, but why would a penis need to do those things? It's not your job to worry about such things. And soon you won't be worrying about anything other than sexy cock thoughts!");
                   parer("You hear him jostle something and then swallow! It's only going to be a matter of moments before it starts... Before you can relax into the life of a real cock....");
                oper(system, "./prtimeskipcum", "Get ready.....");
              }, //function close
              "stealthmbcont": function (character, system, action) {
                transer();
          if(character.host.host=="bret"){
                      parer("host reaches under his bed pulling out a box and from it a weird hollow tube. He shifts a bit and places it under a pillow directly in front of you.q1Heh hate using this thing...q1 He grumbles and slides you into it! The inside is slipperly and REALLY tight!");
                      oper(system, "./eveningmbbret", "He is masturbating you!!!!");
                 //system.doLink("./eveningmbbret");
                 }else{
                   system.doLink("./eveningmb");
            
                 }
              }, //function close
              "stealthtoforgotten": function (character, system, action) {
            transer();
            character.sandbox.forgottenstealth=true;
            
            parer("You hear host mumbling about something and then a bottle of pills open up. q1One massive orgasm and no worries for the rest of the day... Sounds like fun. I will just take a couple...q1 He says and quickly swallows 2 or 3 down! The effect is shockingly fast, after just a few minutes you start to feel strange.... Way more sensitive. Restless... HORNY! host can't seem to help himself as he feels it too!");
            parer("Way too soon host brings you to a mind blowing orgasm as his cum pumps up through you and spurts from your slit of a mouth. But that doesn't seem to be the end of it. The needy restless sensations are still there! host just keeps going!");
            //add scenes leading to prtimeskipevent
            
            
            oper(system, "mergefinal/prtimeskipcum","It is almost too much......");
          }, //function close
              "prtimeskipcum": function (character, system, action) {
                transer();
            if (character.sandbox.host.host=="bret") {
                parer("Bret starts humping you into the bed, over and over sliding you against it! Finally he can't take it anymore and gets out that tube thing he has used before. He forces you in head first as he holds it in place thrusting away! The effects of the pills start taking hold quickly, each thrust feeling better than the last!");  
                  
                }
                     parer("You do your best to bear down and brace yourself against the feelings! It doesn't let up though and you start feeling warm and flush! Even worse is the pressure from host's balls! You can actually feel them getting uncomfortably full! Everything starts feeling so good as your sensitive cock flesh sends shocks of pleasure through you!");
                 
                oper(system, "./prtimeskipcum2", "Cum AGAIN!");
                
              }, //function close
              "prtimeskipcum2": function (character, system, action) {
                transer();
              parer("It comes as no surprises when you feel your balls suddenly clench sending a surge of cum up through you! Normally this feels like such a relief, and it sort of does... The orgasm surges through you making it hard to think, the pressure of bearing down as the pressure of his cum uses your body like a fire hose. You are still seeing stars when the sensation of needing to cum returns! If you had lungs you would be panting and gasping right now, and already another orgasm is building!");
                oper(system, "./prtimeskipevent", "Sooo... goood....");
              }, //function close
              "prtimeskipevent": function (character, system, action) {
               transer();
                console.log("testing prtimeskip ");
     
                  character.sandbox.pilltoforget++;
             
                
               if((!character.sandbox.alreadyforgot)&&((character.sandbox.pilltoforget>1&&rnd()>5)||character.sandbox.forgottenstealth)){
                 //forgotten timeskip
              character.sandbox.alreadyforgot=true;
                  character.sandbox.pilltoforget=-1;
                    var pillholder;
             if(character.sandbox.ws){
                 pillholder=[
                "He pulls you out to piss with... How nice....",
                 "You are getting wet... Must be showering",
                 "Going to work... pissing.... Going to work... waking up.... It all just flows together.",
                 "He is getting out of bed and going to work",
                 "Pissing again.... Then back to your sheath",
                 "Getting out of bed....",
                 "Pissing...",
                 "Sex!",
                 "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "Something feels wrong....",
                 "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "VERY WRONG!",
                 "./speedyskip"
               ];
                 
               }else{
                 
             
                 pillholder=[
                "He pulls you out for a rub... How nice....",
                "Going to work... Showering.... Going to work... Waking up.... It all just flows together.",
                 "Showering ...At least he rubs you..",
                 "Getting out of bed....",
                 "Cumming!",
                 "Bed...",
                 "Waking up... Sleeping... Cumming.... Waking up.....",
                  "Something feels wrong....",
                  "Waking up... Sleeping... Cumming.... Waking up.....",
                   "VERY WRONG!",
                 "./speedyskip"
               ];
                 
                 
                 
                  }
                    delay(pillholder);
               }else{
        
                 //short timeskip
                 var pillholder;
             if(character.sandbox.ws){
                 pillholder=[
                "He pulls you out to piss with... How nice....",
                 "You are getting wet... Must be showering",
                 "He is getting out of bed and going to work",
                 "Pissing again.... Then back to your sheath",
                 "Getting out of bed....",
                 "Going to work... pissing.... Going to work... waking up.... It all just flows together.",
                 "Pissing...",
                 "Sex!",
                 "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "./normalskip"
               ];
                 
               }else{
                 
             
                 pillholder=[
                "He pulls you out for a rub... How nice....",
                 "He is getting out of bed and going to work",
                 "Showering ...At least he rubs you..",
                 "Getting out of bed....",
                 "Cumming!",
                 "Bed...",
                 "Going to work... Showering.... Going to work... Waking up.... It all just flows together.",
                 "Waking up... Sleeping... Cumming.... Waking up.....",
                 "./normalskip"
               ];
                 
               }
            
            
                 
                    delay(pillholder); 
                 
                 
               }
           
               
               
               
               
               
              }, //function close
              "speedyskip": function (character, system, action) {
                   var pillholder;
             if(character.sandbox.ws){
                 pillholder=[
                 "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "I am a cock",
                 "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "Just a normal penis....",
                  "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "Cock......",
                 "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "Penis....",  
                 "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "Cock......",
                 "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "Penis....",  
                  "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "Cock......",
                 "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "Penis....",  
                  "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "Cock......",
                 "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "Penis....",  
                  "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "Cock......",
                 "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "Penis....",  
                 "./intoforgottenskip"
               ];
                 
               }else{
                 
             
                 pillholder=[
                 "Waking up... Sleeping... Cumming.... Waking up.....",
                   "I am a cock",
                  "Waking up... Sleeping... Cumming.... Waking up.....",
                   "Just a penis",
                      "Waking up... Sleeping... Cumming.... Waking up.....",
                   "Cock",
                  "Waking up... Sleeping... Cumming.... Waking up.....",
                   "Penis",
                      "Waking up... Sleeping... Cumming.... Waking up.....",
                   "Cock",
                  "Waking up... Sleeping... Cumming.... Waking up.....",
                   "Penis",
                      "Waking up... Sleeping... Cumming.... Waking up.....",
                   "Cock",
                  "Waking up... Sleeping... Cumming.... Waking up.....",
                   "Penis",
                    "Waking up... Sleeping... Cumming.... Waking up.....",
                   "Penis",
                      "Waking up... Sleeping... Cumming.... Waking up.....",
                   "Cock",
                  "Waking up... Sleeping... Cumming.... Waking up.....",
                   "Penis",
                 "./intoforgottenskip"
               ];
                 
                 
                 
                  }
                    delay(pillholder,100);
              }, //function close
              "intoforgottenskip": function (character, system, action) {
                      var pillholder;
             if(character.sandbox.ws){
                 pillholder=[
              "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
              "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
              "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
              "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
              "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
              "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
              "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
              "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
              "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
              "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
              "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
              "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
              "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
              "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
              "Waking up... Sleeping... Pissing.... Cumming.... Waking up.....",
                 "./intoforgottenskip2"
               ];
                 
               }else{
                 
             
                 pillholder=[
                 "Waking up... Sleeping... Cumming.... Waking up.....",
               
                  "Waking up... Sleeping... Cumming.... Waking up.....",
              
                      "Waking up... Sleeping... Cumming.... Waking up.....",
            
                  "Waking up... Sleeping... Cumming.... Waking up.....",
                
                      "Waking up... Sleeping... Cumming.... Waking up.....",
              
                  "Waking up... Sleeping... Cumming.... Waking up.....",
             
                      "Waking up... Sleeping... Cumming.... Waking up.....",
                   
                  "Waking up... Sleeping... Cumming.... Waking up.....",
                
                    "Waking up... Sleeping... Cumming.... Waking up.....",
                 
                      "Waking up... Sleeping... Cumming.... Waking up.....",
                  
                  "Waking up... Sleeping... Cumming.... Waking up.....",
                   "Waking up... Sleeping... Cumming.... Waking up.....",
               
                  "Waking up... Sleeping... Cumming.... Waking up.....",
              
                      "Waking up... Sleeping... Cumming.... Waking up.....",
            
                  "Waking up... Sleeping... Cumming.... Waking up.....",
                
                      "Waking up... Sleeping... Cumming.... Waking up.....",
              
                  "Waking up... Sleeping... Cumming.... Waking up.....",
             
                      "Waking up... Sleeping... Cumming.... Waking up.....",
                   
                  "Waking up... Sleeping... Cumming.... Waking up.....",
                
                    "Waking up... Sleeping... Cumming.... Waking up.....",
                 
                      "Waking up... Sleeping... Cumming.... Waking up.....",
                  
                  "Waking up... Sleeping... Cumming.... Waking up.....",
                 "./intoforgottenskip2"
               ];
                 
                 
                 
                  }
                    delay(pillholder,50);
              }, //function close
              "intoforgottenskip2": function (character, system, action) {
                transer();
                system.clearContent();
                parer("<h1>FORGOTTEN</h1>");
                
                
                system.setQuality("day",character.qualities.day+(rnd(4)+6)*365);
                
                
                character.sandbox.pillroute=false;
                character.sandbox.forgotten=true;
                system.setQuality("essence",character.qualities.essence+2000 );
                if(character.sandbox.ws){
                  
                  parer("Something felt strange about that.... You are awake again, but so foggy feeling. How long were you out for? It felt way longer than the last few times. You feel normal, shaft sensitive skin, comfortable sheath. Everything seems alright but something still feels off. You remember well.... Pissing. So much! Over and over you remember being taken out to piss with. It's almost mind numbing when you think back. But that's your job afterall, there is nothing in the world you would rather do... Thinking farther back you remember... being... thinking?");
                  parer("Some of the past comes rushing back to you in bits and pieces. host must have finally stopped taking the pills after a few weeks.");
                }else{
                   parer("Something felt strange about that.... You are awake again, but so foggy feeling. How long were you out for? It felt way longer than the last few times. You feel normal, shaft sensitive skin, comfortable sheath. Everything seems alright but something still feels off. You remember well.... Cumming. So much! Over and over you remember being taken out to for sex and jerking off. It's almost mind numbing when you think back. But that's your job afterall, there is nothing in the world you would rather do... Thinking farther back you remember... being... thinking?");
                  parer("Some of the past comes rushing back to you in bits and pieces. host must have finally stopped taking the pills after a few weeks. You can't move... but... you don't remember how.");
                }
                         character.sandbox.skipto="morning/forgottencock";
                       oper(system,"transformation" ,"Rest some more as you wait for host to wake up" );
               
              }, //function close
              "normalskip": function (character, system, action) {
                transer();
                
                if(character.sandbox.forgotten){
                  
                      parer("<h1>ALMOST AWARE</h1>");
                  
                }else{
                  
                   parer("<h1>ALMOST FORGOTTEN</h1>");
                }
                 
                  system.setQuality("day",character.qualities.day+(rnd(5)+1)*5);
                 if(character.sandbox.ws){
                   
                   parer("The last few days have been a blur of cumming and pissing.... A LOT of pissing!. Time passes weirdly on those pills, it isn't like you don't experience it... All your memories from it are there sort of. It just feels like you were not thinking much during that. You can only imagine that must be what it is like always to a normal cock. You still felt the passage of time clearly just.... differently.");
                 }else{
                   parer("The last few days have been a blur of cumming and rubbing..... and just a lot of time spent in your sheath. Time passes weirdly on those pills, it isn't like you don't experience it... All your memories from it are there sort of. It just feels like you were not thinking much during that. You can only imagine that must be what it is like always to a normal cock. You still felt the passage of time clearly just.... differently.");
                   
                 }
                
                  oper(system, "morning/preenter", "Rest some more as you wait for host to wake up");
                  
                  
              }, //function close
              "toyaskthrob": function (character, system, action) {
                transer();
                parer("You throb with excitment at his offer to use a toy to play with! Unfortunatly you are rather unable to talk with him in any meaningful way. Helpless to day anything but let host know you would love to play with one of the toys. He thinks on it and give you a pat.<p>q1Hummm to far gone to answer... I bet you are just faking it. Such a naughty cock...q1 ");
                oper(system, "./notalkreward","Stay still and be good","./notalkgoad","Move around goading him");
              }, //function close
              "toyask": function (character, system, action) {
                transer();

                system.setQuality("harmony",character.qualities.harmony-1 );
                //one of these was true or you woulnd't be here
                 if (character.sandbox.limits.cantalk){
                   
                  
                 }else{
                   
                  system.setQuality("essence",character.qualities.essence- character.sandbox.ttcost );
                   
                   
                 }
                 
                character.sandbox.rewardask=true;
                
                parer("As host is getting started you quickly try suggesting... Maybe he could play with one of the toys you bought at the store...");
                // system.doLink("./punishment2");
                
                oper(system, "./askforpunishment", "Goad him into punishing you with a toy","./askforreward","Ask for something fun a fun toy");
              }, //function close
              "askforpunishment": function (character, system, action) {
                transer();
                character.sandbox.punish=true;
                parer("You tease him and tell him you really could use a little punishment for how you have been recently. Even suggesting you might behave badly if he doesn't... He knows you are just being playful but it seems like he is going to take the punishment seriously.... At least you get to pick the sextoy.");
                system.doLink("./punishment2");
              }, //function close
              "askforreward": function (character, system, action) {
                transer();
                character.sandbox.reward=true;
                parer("It doesn't take much convincing to get him to use one of the toys. But which one.....");
                system.doLink("./toypick");
              }, //function close
              "notalkreward": function (character, system, action) {
                transer();
                parer("You stay still to try and show him you can be good! Just because you were excited to use the toys doesn't mean you were being naughty! Just... horny and excited. He seems to give in and rubs you up and down. <p>q1Hehe alright. A toy it is...q1 He says reaching into a drawer...");
                system.doLink("./toypick");
              }, //function close
              "mindchange": function (character, system, action) {
                transer();
                 // HAS method to communicate!
                //unlocking higher harmony
                //unlocking lower harmony
                //
                //
                //unlocking perma shifts
                //
                // considering perma
               
                
                //low harmony= can no longer use TT for stuff
                //gives cock ways to entertain themselfs
                //start asking you how you are doing throughout the day
                
                parer("<h1>Shifting Thoughts</h1>");
                
                if(character.sandbox.limits.insheath>0){
                  
                   parer("It is starting to get a bit late in as host finally heads for his bed. He lays down and starts rubbing you though his sheath. Or is it yours? Still the rubbing feels nice and you start to get hard. He doesn't seem to be masturbating but you are still enjoying how it feels. Some of the best masturbations start off like that. Still it never seems to get stronger as if host is lost in thought.");
                
                }else{
                  parer("It is starting to get a bit late in as host finally heads for his bed. He lays down and starts rubbing you though his sheath. Or is it yours? Still the rubbing feels nice and you start to get hard. He doesn't seem to be masturbating but you are still enjoying how it feels. Some of the best masturbations start off like that. Still it never seems to get stronger as if host is lost in thought.");
                  
                }
               
                system.doLink("./"+character.sandbox.mindchangetrigger);
                
              
              }, //function close
              
              "highharmony": function (character, system, action) {
         
                parer("q1You know... it seems like you are becoming more and more a part of me every day. It's starting to get hard (hehe) to think of you as a person. Just was wondering if you were starting to feel the same.... I mean you are a part of me now.q1 He says");
                
                character.sandbox.mindchangetrigger=false;
                
                oper(system, "./hhno", "You are not just a part of him ","./hhyes","You think of yourself as his cock");
              }, //function close
              "hhyes": function (character, system, action) {
                transer();
                character.sandbox.harmonyunlockup=true;
                system.setQuality("harmony",character.qualities.harmony+2 );
               if(character.sandbox.enjoyit){
                 
                 parer("You can't deny it. The longer you are stuck sleeping in his sheath, drooling his cum.... You really are starting to think of yourself as his cock. Its a subtle thing, but each day it seems this feels more normal. You almost have a hard time imaginging what legs feel like anymore! In fact you are not even sure if you would even want to. Being a cock is really nice and relaxing.");
               }else{
                 parer("You can't deny it. The longer you are stuck sleeping in his sheath, drooling his cum.... You really are starting to think of yourself as his cock. Its a subtle thing, but each day it seems this feels more normal. You almost have a hard time imaginging what legs feel like anymore! Not that you want to be a cock, it just feels good even if you don't want it to.");
                 
               }
               
               
               if(character.sandbox.limits.cantalk){
               parer("You tell him you really have started to become far more cock than person. He smiles at that. q1Hehe so you didn't become my cock, my cock just gained a mind and memories.  You poor thing, so confused thinking you are a person...q1 He says teasingly");
               //
               
             }else{
              
               parer("You don't resist his rubbing at all.... or try to use that thought thing. Just relax into the rubs. host gets the message loud and clear. You really have started to become far more cock than person. q1I guess I will take that as a yes. Hehe so you didn't become my cock, my cock just gained a mind and memories.  You poor thing, so confused thinking you are a person...q1 He says teasingly");
             }
                
                oper(system, "./hhyesmasturbate", "Feel a surge of arousal hearing that!");
              }, //function close
              "hhyesmasturbate": function (character, system, action) {
                transer();
                
                         if(character.host.host=="bret"){
                      parer("He reaches under his bed pulling out a box and from it a weird hollow tube. He shifts a bit and places it under a pillow directly in front of you.q1Alright cock, you should know this paper route by heart now..... Get to workq1 He says and slides you into it! The inside is slipperly and REALLY tight!");
                 oper(system, "./eveningmbbret", "He is masturbating you!!!!");
                 }else{
                   
              parer("host seems to feel it too and takes it as a sign to really ramp up, going from rubs to full on jerking off!");
                       system.doLink("./eveningmb");
                //system.doLink("./eveningmb");
                   
                      }
              
              }, //function close
              
              
              
              "hhno": function (character, system, action) {
                transer();
                system.setQuality("harmony",character.qualities.harmony-20 );
             
                if (character.sandbox.limits.cantalk){
                parer("You quickly tell him you don't think of yourself as a part of him! You are your own person with your own mind. But you still have to admit it is getting HARD to feel seperate from host. The longer you spend as his cock the more it feels... normal. It takes actually effort not to just give in and lose yourself to his bodys claim on you. Of course the entire time he has been rubbing you up and down.....");
                parer("q1Hehe just thought I would askq1 He says and stops rubbing you completely! You are left rather hot and bothered not getting the fun pay off that you were building up to! Maybe if you had said yes he would have kept going!??");
                  
                }else{
                   parer("You quickly wiggle defiantly, almost as if you were trying to avoid the hand sliding along your sensitive body! You are your own person with your own mind. But you still have to admit it is getting HARD to feel seperate from host. The longer you spend as his cock the more it feels... normal. It takes actually effort not to just give in and lose yourself to his bodys claim on you. Of course the entire time he has been rubbing you up and down.....");
                parer("q1Hehe just thought I would askq1 He says and stops rubbing you completely! You are left rather hot and bothered not getting the fun pay off that you were building up to! Maybe if you had said yes he would have kept going!??");
                  
                  
                }
                    character.sandbox.erect=true;
                clother();
       
                oper(system, "./toysend", "Try to get some sleep despite being all hard and horny");
              }, //function close
              "lowharmony": function (character, system, action) {
                transer();
                
                
                
                character.sandbox.mindchangetrigger=false;
               parer("q1You know... Even after becoming my cock you are holding up rather well. You have been a bit needy though... Just wanted to make sure you know who is in charge here. I am still going to use you like a cock, just because you lost your body doesn't mean I lost my cock. You are a penis first, person second... got it?q1 He asks.");
               
                    if(character.sandbox.limits.cantalk){
                    //understanding and agreeing is giving in to his wants and needs. thus raising harmony
                    //Saying you just want to be his cock is going against what he says and actually LOWERING 
                    oper(system, "./hhlowtry", "You understand and agree","./hhlownope","Even a cock has needs!!");
                    
                  }else{
                 
                    oper(system, "./hhlowtry", "(TT: "+character.sandbox.ttcost+") Tell him you understand.","./hhlownope", "(TT: "+character.sandbox.ttcost+")Tell host even as a cock you have needs!");
                 
            
              
                }
               
              }, //function close
 
                      "hhlowtry": function (character, system, action) {
                transer();  
                if(!character.sandbox.limits.cantalk){
                  
                  system.setQuality("essence",character.qualities.essence- character.sandbox.ttcost );
                }
                character.sandbox.harmonyunlockdown=true;
                system.setQuality("harmony",character.qualities.harmony+10 );
                parer("He seems to rub a bit faster as you agree with him. You have a choice to act like a person but you don't have a choice to function as his penis. It's embarrassing to put it into perspective. You have been a bit needy recently, but he seems to be ok with it as long as you know your place....");
                
                         if(character.host.host=="bret"){
                      parer("He reaches under his bed pulling out a box and from it a weird hollow tube. He shifts a bit and places it under a pillow directly in front of you.q1Alright cock, you should know this paper route by heart now..... Get to workq1 He says and slides you into it! The inside is slipperly and REALLY tight!");
                 oper(system, "./eveningmbbret", "He is masturbating you!!!!");
                 }else{
                   
              parer("host takes it as a sign to really ramp up, going from rubs to full on jerking you off!");
                       system.doLink("./eveningmb");
                //system.doLink("./eveningmb");
                   
                      }
                
              }, //function close
              "hhlownope": function (character, system, action) {
                transer();
                system.setQuality("harmony",character.qualities.harmony-10 );
                  if(!character.sandbox.limits.cantalk){
                  
                  system.setQuality("essence",character.qualities.essence- character.sandbox.ttcost );
                }
            
                    parer("He stops rubbing you completely when you refuse to just accept that he is in charge. You may be forced to function as his cock but your body is your own even if it attached to his! Besides when he needs to use you it isn't like he has a choice in the matter, in some ways you are in more control at certain times! As fun as it might be you still need to hold onto who you are, even if that is what looks like a throbbing cock.");
           
                   parer("q1Heh, fine you can finish masturbating yourself then.....q1 he says and rolls over in the blankets. You are left rather hot and bothered not getting the fun pay off that you were building up to!");
                  
           character.sandbox.erect=true;
                clother();
                oper(system, "./toysend", "Try to get some sleep despite being all hard and horny");
              }, //function close
              "permatypeshift": function (character, system, action) {
                transer();
                parer("");
                oper(system, "", "");
              }, //function close
              "permaprimer": function (character, system, action) {
                transer();
                parer("");
                oper(system, "", "");
              }, //function close
              
              "eveningmbbret": function (character, system, action) {
                transer();
                
                switch (rnd(4)) {
                  case 1:
                    
                    
                     parer("Bret forces you into the sex sleeve letting it's tight grip slide up and down your body with every thrust of his hips. It feels like pure bliss as a strange sensation spreads through your cock like body. In and out... in and out! You mind feels like it's getting fucked silly as the sensations build! A deep pressure starting to build....");
                    
                    break;
                  case 2:
                    parer("Bret forces you into the sex sleeve over and over. Each time causing it to drag over your body quicker than the last! Every inch of your body is just an organ meant for pleasure. You would wiggle and squirm from it all if you were not as hard as a rock! A deep pressure starting to build....");
                    break;
                  case 3:
                    parer("Bret forces you into the sex sleeve letting it's tight grip slide up and down your body with every thrust of his hips. It feels like pure bliss as a strange sensation spreads through your cock like body. In and out... in and out! You mind feels like it's getting fucked silly as the sensations build! A deep pressure starting to build....");
                    break;
                  case 4:
                    parer("Bret thrusts you into the tight sleeve like a wild animal leaping onto their prey! He doesn't hold back at all as he uses your body for his own pleasure! The toy is so tight! And slick textured insides! Your cock shaped head sticks out the front of it with each thrust, a deep pressure starting to build....");
                break;
                }//End of RND switch
               
                
                
               oper(system, "./endmb", "Get ready to cum!");
       
              }, //function close
              "eveningmb": function (character, system, action) {
                transer();

                switch (rnd(4)) {
                  case 1:
                    
                    parer("That rub is followed by another... and another! This is way more than a simple massage...... Masturbation has a whole new meaning when you ARE the cock! It's starts off so slow and gradually builds.... Soon he is rubbing you so fast that the tingling pleasure from one doesn't go away before the next hits! Soon you are feeling a deep pressure starting to build...");
                    
                    
                    break;
                  case 2:
                     parer("That rub is followed by another... and another! He uses both hands doubling the amount of pleasure he works up and down your body. You are just his cock to play with and enjoy, if anything this is your job now. Your purpose! Sparks of pleasure completely block out all resonable thoughts as you feel a deep pressure starting to build...");
                    break;
                  case 3:
                     parer("That rub is followed by another... and another! Harder.... It's just getting impossible to move or squirm as he works over your body.... his shaft? Its all the same now anyway, you are just a cock desperately needing to cum! Every second you can feel a deep pressure starting to build...");
                    break;
                  case 4:
                    parer("That rub is followed by another.... and another! He sticks with just one hand as he slowly slides it up and down your form. You just sit back and enjoy it till you hear a beep from above you... His phone? You hear a moan from above as he grips you harder and mutters q1Mmm niceq1. He must be looking at PORN on his phone! And masuturbating you slowly while he is doing it! It doesn't take long before you feel a deep pressure starting to build.");
                    break;
               
                }//End of RND switch
                
                
                
                oper(system, "./endmb", "Get ready to cum!");
               
              }, //function close
              "endmb": function (character, system, action) {
                transer();
                
                if(character.sandbox.limits.cantalk){
                          //has a mouth!!!
                  parer("That pressure suddenly breaks like a dam as host's orgasm hits! Your entire body tenses up and you can literally feel the veins connecting you to him. It is never clearer how strong his hold on your body is than during an orgasm! The urethra running through your body fills and bursts of cum unload into your mouth! It is so much that it instantly fills and the pressure alone causes it to shoot from your mouth just like it would from any normal cock!");
                  parer("After that you can only remember some of it. Mostly struggling with the cum that seemed to non stop leak from your mouth... Your body softened and you just wanted to rest..... host cleaned you up a bit then slipped back to sleep feeling much relieved.");
                }else{
                  //has a piss slit!
                   parer("That pressure suddenly breaks like a dam as host's orgasm hits! Your entire body tenses up and you can literally feel the veins connecting you to him. It is never clearer how strong his hold on your body is than during an orgasm! The urethra running through your body fills and cum bursts from the vertical slit of your mouth! There just isn't enough of you left to do anything but spurt it out onto the bed like any cock would!");
                  parer("After that you can only remember some of it. Mostly struggling with the cum that seemed to non stop leak from your mouth... Your body softened and you just wanted to rest... host cleaned you up a bit then slipped back to sleep feeling much relieved.");
                  
                }
                   system.animateQuality("essence", character.qualities.essence + 10);
          
                
                
                
                if(character.sandbox.forgotten){
                  oper(system, "./forgottensend", "Relax and try to get some sleep as well");
                }else{
                   oper(system, "evening/ringend", "Drift off to sleep....");
                  
                }
               
              }, //function close
          "newhostendmb": function (character, system, action) {
            
            
           system.animateQuality("essence", character.qualities.essence + 10);
          if(character.sandbox.forgotten){
                  oper(system, "./forgottensend", "Relax and try to get some sleep as well");
                }else{
                   oper(system, "evening/ringend", "Drift off to sleep....");
                  
                }
          }, //function close
              
              "toys": function (character, system, action) {
                transer();
                var toyholder=[];
                //maybe add firehose

                character.sandbox.toyholdery=toyholder;
              
             
                  if(character.sandbox.reward){
                    
                    system.doLink("./reward");
                    
                  }else if(character.sandbox.punish){
                    
                    system.doLink("./punishment");
                  }else{
                    //player is asking to use a toy
                    system.doLink("./playerask");
                    
                    
                    
                  }
                  
                  
                  
                  
                /*
                 Two variations REWARD and Punishment
                 
                 Some way to determine the above.
                Tie into periodic events??? 
                Be good during special events means reward
                be naughty means punishment
                
      beads:60% and up
      plug:Only used if head is TFed.60%
                
                
                
      reward vibe:60% and up cant be used with ring
      Reward fleshlight:80% and up  
      reward lube: all          
                
                
                booleans
      punishment cage: only used with no ring active. So perma fullcock, or ringlost
      punishment condoms: can always be used. 60% minimum
      
      
                 
                 */
                
                
                
                
                
              }, //function close
              "playerask": function (character, system, action) {
                transer();
                parer("");
                oper(system, "", "");
              }, //function close
              
              
              
              "punishment": function (character, system, action) {
                transer();
                parer("<h1> PUNISHMENT </h1>");
                character.sandbox.ttcarryover=false;
              parer("host heads to his bed room after a long day. He hasn't been very happy with you after what happened. He takes a seat and just gives you a glare."+character.host["punish"+character.sandbox.ctfrolemod]);
               
               if(character.sandbox.limits.cantalk){
                 oper(system, "./apologize", "Try to apologize","./defiant","Tell him you didn't do anything wrong","./punishaccept","Accept it");
                 
               }else if(character.qualities.essence>character.sandbox.ttcost&&character.sandbox.runedo.thoughts){
                  character.sandbox.ttcarryover=true;
                  oper(system, "./apologize", "(TT:"+character.sandbox.ttcost+")Try to apologize","./defiant","(TT:"+character.sandbox.ttcost+")Tell him you didn't do anything wrong","./punishaccept","Accept it");
                 
               }else{
                 
                 
                  oper(system, "./punishaccept", "You can't really apologize or complain in your current state");
               }
              }, //function close
              "notalkgoad": function (character, system, action) {
                transer();
                parer("You know what you are doing.... Goading him into punishing you. Maybe it's just that you like those toys better, or you really are just a sucker for being punished. Any attention you can get as a cock is good attention. You are a part of him so he can't be too mean to you after all.... He reaches into a drawer and starts to pull something out....");
                system.doLink("./punishment2");
              }, //function close
               "apologize": function (character, system, action) {
                transer();
                if(character.sandbox.ttcarryover){
                  
                  system.animateQuality("essence", character.qualities.essence - character.sandbox.ttcost, {from: character.qualities.essence, to: character.qualities.essence - character.sandbox.ttcost});
                  
                }
                
                
                //system.setQuality("harmony",character.qualities.harmony+1 );
                character.sandbox.ttcarryover=false;
                parer("You try your best to apologize for what you did. Whatever reason you had for doing it clearly wasn't worth it if it made host mad at you. host isn't really listening to your appology, instead heading over to grab something from a drawer.");
                system.doLink("./punishment2");
              }, //function close
              "defiant": function (character, system, action) {
                transer();
                  if(character.sandbox.ttcarryover){
                  
                  system.animateQuality("essence", character.qualities.essence - character.sandbox.ttcost, {from: character.qualities.essence, to: character.qualities.essence - character.sandbox.ttcost});
                  
                }
                system.setQuality("harmony",character.qualities.harmony-1 );
                
                character.sandbox.ttcarryover=false;
            parer("You don't feel like you need to be scolded for what you did. It was just a little bit of fun! Besides considering your current predicament you can hardly be blamed for what you did. host doesn't seem to care for your excuses and is instead pulling something from a drawer.");
                
                system.doLink("./punishment2");
              }, //function close
              "punishaccept": function (character, system, action) {
                transer();
                system.setQuality("harmony",character.qualities.harmony+1);
                parer("You don't say a thing in your defense. And maybe it is for the best. You deserve to be punished, just a naughty cock that needs to be put in its place. All you can do is helplessly wait and see what host has in store for you. And you don't have to wait for long as he reaches into a nearby drawer.");
      system.doLink("./punishment2");
              }, //function close
              "punishment2": function (character, system, action) {
                   var debugtest=false;
                var toyholder=[];
                                
           
         
                if((!character.host.bannedtoys.includes("plug"))&&(!character.sandbox.toys.plug)&&character.qualities.ctf>=40||debugtest){
                
                toyholder.push("plug");
              }
                if((!character.sandbox.toys.fleshlight)&&character.qualities.ctf>=80&&false){
                
                toyholder.push("fleshlight");
              }
           
             
               if((!character.host.bannedtoys.includes("condoms"))&&character.sandbox.toys.condoms&&character.qualities.ctf>=40||debugtest){
                
                toyholder.push("condoms");
              }
                   if((!character.host.bannedtoys.includes("cage"))&&character.sandbox.toys.cage&&character.qualities.ctf>=95&&((!character.sandbox.ringstuck)||character.sandbox.runedo.stability||character.sandbox.perma)||debugtest){
                  console.log("cage check ");
                toyholder.push("cage");
              }
                if((!character.host.bannedtoys.includes("beads"))&&(!character.sandbox.toys.beads)&&character.qualities.ctf>=40&&(!character.sandbox.limits.cantalk||debugtest)){
                
                toyholder.push("beads");
              }
               
      
                 if((!character.host.bannedtoys.includes("bondage"))&&character.sandbox.toys.bondage&&character.qualities.ctf<50&&character.sandbox.limits.hasarms&&false){
                
               toyholder.push("bondage");
              }
              
          
               toyholder.push("pill");
           
               
             
              
                      // var toyholder= character.sandbox.toyholdery;
                
                
                 var toychoice;
                 
                 
                 if(toyholder.length==0){
                   //parer("*(Only plug, cage and condoms implemented for mostly transformed cocks. MANY MANY more are coming. cage  and condoms are picked up automatically when host visits the adult store 2 and 3 times)*");
                   
                   
                   character.sandbox.reward=false;
                   character.sandbox.punish=false;
                   system.doLink("./nightmasturbate");
                 }else{
                      character.sandbox.punish=true;
                   if(character.sandbox.rewardask){
                     console.log("toylist " + toyholder);
                     spark=true;
                    for(var toyloop=0; toyloop<Math.ceil(toyholder.length/3);toyloop++){
                      var toytemp=[];
                      for(var toyloop2=0; toyloop2<3;toyloop2++){
                       if(toyholder[toyloop2+(toyloop*3)]){
                         toytemp.push("./"+toyholder[toyloop2+(toyloop*3)]);
                       }
                        
                      }
                      oper(system,toytemp[0], "Pick the "+toyholder[0+(toyloop*3)],
                                  toytemp[1], "Pick the "+toyholder[1+(toyloop*3)],
                                  toytemp[2],"Pick the "+ toyholder[2+(toyloop*3)]
                              );
                    }
                     
//                     toychoice=toyholder[((rnd(toyholder.length))-1)];
//                character.sandbox.toyused=toychoice;
//                system.doLink("./"+toychoice);
//                     
                   }else{
                       toychoice=toyholder[((rnd(toyholder.length))-1)];
                character.sandbox.toyused=toychoice;
                system.doLink("./"+toychoice);
                   }
                 
              
                 }
                
                //Setting for host secretly enjoying certain punishments.
                
                
                //Host takes a aphrodesiac and ends up cumming over and over.
                  //Cock ends up waking up after 2-3 days. Host worried they broke you!
                  //
                  //
                                     /// PUNISHMENT SCENES
                //messing up pissing
                //using mindlink too much
                //Being needy during the day
                //
                //
                //
                //have you been a bad cock?
                //
                //Ideas:
                // WS scene, puts on condom first.
                //puts on condom to sleep with
                // masturbates wearing condom
                //Edges you and refuses to let you cum unless you say you are his cock.
                //if has arms demands you masturbate him
                //
                //extreme bad.... puts you in a chastity device for the night.
                //partial has head and arms..... full bondage with gag.
                //
                
               
              }, //function close
              
              
              
                 "reward": function (character, system, action) {
                transer();
                
                
                
                        parer("<h1> REWARD </h1>");
                character.sandbox.ttcarryover=false;
                
                if (character.sandbox.ignore) {
                     parer("host heads to his bed room after a long day. He he seems very happy with you after that event. Every now and then getting a loving rub through his pants.. He takes a seat and grins.");
               
               if(character.sandbox.limits.cantalk){
                  oper(system, "./rewardask", "Ask what he has in mind","./rewardthrob","Throb with anticipation");
                 
               }else if(character.qualities.essence>character.sandbox.ttcost&&character.sandbox.runedo.thoughts){
                  character.sandbox.ttcarryover=true;
                oper(system, "./rewardask", "(TT:"+character.sandbox.ttcost+")Ask what he has in mind","./rewardthrob","Throb with anticipation");
                 
               }else{
                 
                 
                oper(system, "./rewardthrob","Throb with anticipation");
               }
                }else{
                  parer("host heads to his bed room after a long day. He he seems very happy with you after that event. Every now and then getting a loving rub through his pants.. He takes a seat and grins."+character.host["reward"+character.sandbox.ctfrolemod]);
               
               if(character.sandbox.limits.cantalk){
                  oper(system, "./rewardask", "Ask what he has in mind","./rewardthrob","Throb with anticipation");
                 
               }else if(character.qualities.essence>character.sandbox.ttcost&&character.sandbox.runedo.thoughts){
                  character.sandbox.ttcarryover=true;
                oper(system, "./rewardask", "(TT:"+character.sandbox.ttcost+")Ask what he has in mind","./rewardthrob","Throb with anticipation");
                 
               }else{
                 
                 
                oper(system, "./rewardthrob","Throb with anticipation");
               }
                }
              
                
                
             
                
           
              }, //function close
              "rewardthrob": function (character, system, action) {
                transer();
                parer("You just give a positive throb of anticipation! The most cock like way to say yes you can think of beyond just drooling precum. He laughs and gives you loving rub before looking into a drawer.");
                system.doLink("./toypick");
              }, //function close
              "rewardask": function (character, system, action) {
                transer();
                
                   if(character.sandbox.ttcarryover){
                  
                  system.animateQuality("essence", character.qualities.essence - character.sandbox.ttcost, {from: character.qualities.essence, to: character.qualities.essence - character.sandbox.ttcost});
                  
                }
                character.sandbox.ttcarryover=false;
                parer("You cautiously ask him what he is planning. You know HE thinks it will be fun but that doesn't necessarily mean you will find it fun. Still you would rather know what he has planned before just letting him play with you. Though you ARE his cock now, so he really should get to play with you whenever HE decides to.");
                if (character.sandbox.ignore) {
                  
                }else{
                   parer("q1Just looking to have some fun, you just relax and enjoy itq1");
                  
                }
               
                system.doLink("./toypick");
              }, //function close
              "toypick": function (character, system, action) {
              var debugtest=false;
                        var toyholder= [];
                             if((!character.host.bannedtoys.includes("plug"))&&(!character.sandbox.toys.plug)&&character.qualities.ctf>=40||debugtest){
                
                toyholder.push("plug");
              }
                if((!character.sandbox.toys.fleshlight)&&character.qualities.ctf>=80||debugtest){
                
                toyholder.push("fleshlight");
              }
           
             
               if((!character.host.bannedtoys.includes("condoms"))&&character.sandbox.toys.condoms&&character.qualities.ctf>=40||debugtest){
                
                toyholder.push("condoms");
              }
                   if((!character.host.bannedtoys.includes("vibe"))&&(!character.sandbox.toys.vibe)&&character.qualities.ctf>=40||debugtest){
                
                toyholder.push("vibe");
              }
                  if((!character.host.bannedtoys.includes("beads"))&&(!character.sandbox.toys.beads)&&character.qualities.ctf>=40&&(character.sandbox.limits.cantalk)||debugtest){
                
                toyholder.push("beads");
              }
                 var toychoice;
                 
                 
                 if(toyholder.length==0){
                     character.sandbox.reward=false;
                   character.sandbox.punish=false;
                   system.doLink("./nightmasturbate");
                 }else{
                    character.sandbox.reward=true;
                   if(character.sandbox.rewardask){
                     console.log("Toys in option " + toyholder );
                   
                     spark=true;
                    for(var toyloop=0; toyloop<Math.ceil(toyholder.length/3);toyloop++){
                      var toytemp=[];
                      for(var toyloop2=0; toyloop2<3;toyloop2++){
                       if(toyholder[toyloop2+(toyloop*3)]){
                         toytemp.push("./"+toyholder[toyloop2+(toyloop*3)]);
                       }
                        
                      }
                      oper(system,toytemp[0], "Pick the "+toyholder[0+(toyloop*3)],
                                  toytemp[1], "Pick the "+toyholder[1+(toyloop*3)],
                                  toytemp[2],"Pick the "+ toyholder[2+(toyloop*3)]
                              );
                    }
                     
                     
                   }else{
                      toychoice=toyholder[((rnd(toyholder.length))-1)];
                character.sandbox.toyused=toychoice;
                system.doLink("./"+toychoice);
                     
                   }
                  
              
                 }
                         
//                
//                if(character.sandbox.rewardask){
//                  //player asks for a specfic reward
//                  //full list of options
//                  
//                  character.sandbox.toyholdery[1];
//                  
//                  
//                }else{
//                  //host picks a reward
//                  
//                }
//                
//              
              }, //function close
              "cage": function (character, system, action) {
                transer();
                 character.sandbox.toyused="cage";
//                parer("He pulls out a VERY concerning looking object! You know a chastity cage when you see one! With no arms or any say in what happens all you can do is watch as the metal cage slowly decends towards you! It is damn cold at first and he makes sure you ar all the way inside. The next piece goes ");

     if(character.sandbox.internalballs){
                 parer("He pulls out something that looks rather odd. It looks like a series of rings attached to a plate or cover in the front. He positions it over you sliding the first of the tubes rings into his sheath! They fit around you a bit tight but not too bad, at least when soft! There are about five rings the end up around your all the way to the bottom of his sheath! You realize this must be some sort of chastity cage!");
                
              }else{
                 parer("He pulls out something that looks rather odd. It looks like a series of rings attached to a slightly larger ring in the back. He positions it over you sliding the first of the tubes rings into his sheath! They fit around you a bit tight but not too bad, at least when soft! There are about five rings the end up around your all the way to the bottom of his sheath! You realize this must be some sort of chastity cage!");
                
              }
             

                oper(system, "./cageresist", "Squirm and struggle","./cageaccept","Accept it....");
              }, //function close
              "cageaccept": function (character, system, action) {
                transer();
                     if(character.sandbox.internalballs){
                      parer("You have no intention of fighting against your impending imprisionment, it actually feels like of interesting having the tight bars around your body in his already tight sheath! At the end of the tube or rings is a plate that he has to struggle with to fit into his slit. It sort of sits just inside it allowing his slit to actually close over it. You can't see but you can sort of feel the the cover expand around the edge as it sounds like a key is turning! The device is just too big for him to pull out of his slit, trapping you inside!!");
                
              }else{
                
                      parer("You have no intention of fighting against your impending imprisionment, it actually feels like of interesting having the tight bars around your body in his already tight sheath! At the end of the tube or rings is a cap that covers over the opening to his sheath! It sort of covers it and suddenly cuts off ALL light! You can't see it but you can sort of feel the last ring attach around his balls.It would be impossible to pull enough of the rings from his sheath to remove it without removing the locking ring first!");
              }
          
                oper(system, "./cagesleep", "Try to get comfortable in the cage");
              }, //function close
              "cageresist": function (character, system, action) {
                transer();
                  if(character.sandbox.internalballs){
             
                  parer("You don't want to be a cock stuck in a chastity cage! Of all things that could happen to a cock that is the most humiliating! It is too late though as you see the end of the tube of rings is a plate or shield that he slips just inside his sheath! It sort of just fits in place in a way is slit can still close over it, of course this suddenly cuts off ALL light! You can't see but you can sort of feel the the cover expand around the edge as it sounds like a key is turning! The device is just too big for him to pull out of his slit now, trapping you inside!!");
              }else{
                 parer("You don't want to be a cock stuck in a chastity cage! Of all things that could happen to a cock that is the most humiliating! It is too late though as you see the end of the tube of rings is a cap that covers over the opening to his sheath! It sort of just fits in place and suddenly cuts off ALL light! You can't see it but you can sort of feel the last ring attach around his balls. It would be impossible to pull enough of the rings from his sheath to remove it without removing the locking ring first!");
                
              }
              
                oper(system, "./cagesleep", "Try to get comfortable in the cage");
              }, //function close
              "cagesleep": function (character, system, action) {
                transer();
                  if(character.sandbox.internalballs){
                    
                         if(character.sandbox.ignore){
                  parer("host finishes it off by pulling and tugging on it to make sure it is securly locked behind his slit. You meanwhile are completely trapped in the bars! You can't even be rubbed by pressure due to the metal rings! You are literally a prisoner in more ways than ever! q1That doesn't feel to bad... maybe I could just leave it on for a few days!q1 he says and lays down!");
                  
                  
                }else{
                  parer("host finishes it off by pulling and tugging on it to make sure it is securly locked behind his slit. You meanwhile are completely trapped in the bars! You can't even be rubbed by pressure due to the metal rings! You are literally a prisoner in more ways than ever! q1You are going to stay in there till I decide to let you out, so you better start considering behaving yourself. Unless you want to start spending DAYS stuck in there!q1");
                  
                }
                    
                  }else{
                       if(character.sandbox.ignore){
                  parer("host finishes it off with a sudden click sound of a lock being latched onto the last ring securing it to his balls. You are completely trapped in the bars! You can't even be rubbed through his sheath due to the metal rings inside it! You are literally a prisoner in more ways than ever! q1That doesn't feel to bad... maybe I could just leave it on for a few days!q1 he says and lays down!");
                }else{
                  parer("host finishes it off with a sudden click sound of a lock being latched onto the last ring securing it to his balls. You are completely trapped in the bars! You can't even be rubbed through his sheath due to the metal rings inside it! You are literally a prisoner in more ways than ever! q1You are going to stay in there till I decide to let you out, so you better start considering behaving yourself. Unless you want to start spending DAYS stuck in there!q1");
                  
                }
                    
                    
                  }
             
                    character.sandbox.erect=false;
                clother();
               oper(system, "./toysend", "Struggle in it helplessly as you try getting some sleep.");
              }, //function close

              "plug": function (character, system, action) {
                transer();
                character.sandbox.toyused="plug";
                parer("He pulls out a small object that you recognize as the plug you picked out at the sex toy store the other day! He coats it with lube all over then sits on the bed. He rubs you through the sheath causing waves of pleasure to quickly make you harden up. Your body just can't ignore a good rubbing as you extend from the sheath.");
                
                 if(character.sandbox.punish){
                   
                   
                   if(character.sandbox.ignore){
                     parer("He doesn't say anything and just grips you tightly with one hand as the big plug gets pushed toward you! q1Maybe this will remind it who's cock it is.q1 he says");
                      
                   }else{
                     
                     
                      parer("q1You have to act like a normal cock when we are in public! Maybe you can think about that during the night while you suck on this plug...q1 he says gripping you tightly with one hand as the big plug gets pushed toward you!");

                    
                   }
                                        if(character.sandbox.limits.cantalk){
                        
                          
                       oper(system, "./plugopen", "Open your mouth for the plug","./plugrefuse","Keep your mouth closed.");
                      }else{
                        
                      oper(system, "./plugslit","Watch helplessly as it approaches your slit of a mouth!");
                        
                      }
                 
                  }else{
                 //reward
                 if(character.sandbox.ignore){
                     parer("He doesn't say anything and just grips you tightly with one hand as the big plug gets pushed toward you! q1This should be fun.q1 he says to himself.");
                      
                   }else{
                     
                     
                      parer("q1Hehe you picked it out, so I know you wanted to try itq1 he says gripping you tightly with one hand as the big plug inches toward you!");
                      
                    
                   }
                 if(character.sandbox.limits.cantalk){
                       
                            oper(system, "./plugopen", "Open your mouth for the plug","./plugrefuse","Keep your mouth closed.");
                     
                      }else{
                         
                      if(character.sandbox.enjoyit) {
                          oper(system, "./plugslit","Throb impatiently as it approaches your slit of a mouth!");
                        
                      }else{
                        oper(system, "./plugslit","Watch helplessly as it approaches your slit of a mouth!");
                        
                      }
                        
                      }
                 
                  }
           
              }, //function close
              "plugopen": function (character, system, action) {
                transer();
                parer("You open your mouth obediently as he places the hollow plug into you, letting you suck on the end before sliding it deeper! Due to your size it is pretty easy to take but still causes the back of your throat to stretch a bit! He must have grabbed the largest one he could find. Luckily the transformation into a cock seems to have removed your gag reflex! It feels so strange as it slides deeper, this is like trying to deepthroat a horse cock!");
                parer("The thickest part seems to slip into a good spot within the urethra that connects to your mouth, sort of holding it in place. A large ring hangs from the end that is sticking out of your mouth. With it stuck down your urethral throat it is impossible to tilt your head even slightly! host lets go of you and just moans for a moment at the feeling of it.");
                
                if(character.sandbox.limits.hasarms){
                  oper(system, "./plugpush", "Try to push it out","./plugmoan","Try to moan around it");
                }else{
                  
                  
                 oper(system,"./plugmoan","Try to moan around it");
                }
                
              }, //function close
              "plugrefuse": function (character, system, action) {
                transer();
                parer("You keep your mouth closed as he pushes the plug against your lips. The thing seem so huge! It is crazy to thing that thing will fit down your throat! Did he have to buy the largest one he could find?. He keeps pushing the well lubed hollow end against your mouth until finally it just sort of slips suddenly forcing your jaw open! Luckily the transformation into a cock seems to have removed your gag reflex! It feels so strange as it slides deeper, this is like trying to deepthroat a horse cock!");
                parer("The thickest part seems to slip into a good spot within the urethra that connects to your mouth, sort of holding it in place. A large ring hangs from the end that is sticking out of your mouth. With it stuck down your urethral throat it is impossible to tilt your head even slightly! host lets go of you and just moans for a moment at the feeling of it.");
                    if(character.sandbox.limits.hasarms){
                  oper(system, "./plugpush", "Try to push it out","./plugmoan","Try to moan around it");
                }else{
                  
                 
                 oper(system,"./plugmoan","Try to moan around it");
                }
              }, //function close
              "plugmoan": function (character, system, action) {
                transer();
                //has mouth
                parer("You can't get anything out with the plug blocking your throat and mouth, not even a single mumble or humm! It's like that gag that extends half way through your body! It also really helps you feel just how changed your body is now. Your thoat is far more urethra than you realized, if anything it feels kind of nice having the large rod stretching you out a bit. Its slightly larger end can clearly be seen just below where your rib cage would end!");
                system.doLink("./plugrub");
              }, //function close
              "plugpush": function (character, system, action) {
                transer();
                parer("You may be a cock but you still have arms, now that host isn't holding them to your sides you can try to push the plug out! Grabbing the ring danging from it you manage to give a good push, sliding it out an inch or two (compared to you that is). Beyond that it just gets too hard to push, and when you let go it just slips back in! The wider end is slightly larger than the stem part in your mouth! Your little arms alone don't seem capable of getting out on your own.");
                 system.doLink("./plugrub");
              }, //function close
              "plugslit": function (character, system, action) {
                transer();
                
                if(character.sandbox.reward){
                   parer("You don't even have a mouth to open as host slips the hollow ended plug into your urethra! He has to slowly force it in as you find yourself stretching just shy of painfull. The thicker end seems to find slightly wider or stretchier section and sort of just slides into place! You are helpless to do anything other than throbb and clench slightly around the invasive plug now making itself at home inside you.");
                  
                }else{
                   parer("You don't even have a mouth to close as host pushes the hollow ended plug into your urethra! He has to slowly force it in as you find yourself stretching just shy of painfull. The wider end seems to find slightly wider or stretchier section and sort of just slides into place! You are helpless to do anything other than throbb and clench slightly around the invasive plug now making itself at home inside you.");
                  
                }
                
               
                 system.doLink("./plugrub");
              }, //function close
              "preplugrub": function (character, system, action) {
            transer();
            parer("host starts getting ready for bed, laying and relaxing. He casually reaches down and begins playing with the ring dangling from your mouth. It's such an embarassing thing to think about how you have had to endure this all day. A plug meant for a penis in your mouth... to be fair you are a penis but the association of the item is still there. Eventually his grasp slides lower enjoying the feel of it along your urethra...");
            oper(system, "./plugrub", "Throb as this starts to get more intense!");
          }, //function close
              "plugrub": function (character, system, action) {
                transer();
                parer("host begins rubbing you up and down, really focusing your underside feeling that large plug inside you! You know how weird and good it must feel to him, you sort of have a front row seat to the sensations! You may have been able to wiggle a small bit before but not anymore with a huge metal rod stuffed inside you. All you can do is endure through this as the orgasm gets closer.... Rub.... Rub.......");
                oper(system, "./plugcum", "Getting close!");
              }, //function close
              "plugcum": function (character, system, action) {
                transer();
                parer("Sooo close.... Rub... rub.... Mouth feeling so stretched... Gagged by a penis plug!!!");
                oper(system, "./plugverycum", "SO CLOSE");
              }, //function close
              "plugverycum": function (character, system, action) {
                transer();
                parer("All the rubbing finally causes you to lose it and you can feel host's balls tighten up! Cum flodding into you and suddenly into the hollow plug! The sensation is SO STRANGE! It's like he cut off half the feeling of it flowing through you as it all sprays from the end of the tube lodged in your throat. The pressure below you in your urethra is a bit stronger but it leaves you feeling flustered not getting to feel it shooting from your mouth!");
                system.animateQuality("essence", character.qualities.essence + 10);
                oper(system, "./plugnope", "Finish cumming and wait for him to remove the plug");
              }, //function close
              "plugnope": function (character, system, action) {
                transer();
                parer("host is panting as he finishes the last few spurts of cum. They drip embarrassingly from the tude as it infuriatingly prevents you from even tasting the cum! host just smiles and lays down... He is making no attempt at all to rescue you from the penis plug! q1That really feels nice, maybe I will take it out in the morning....q1 He says as he covers up in the bed he just leaves it stuck inside you as he starts drifting off to sleep!");
                    character.sandbox.erect=true;
                clother();
                oper(system, "./toysend", "Struggle with it helplessly as you end up also getting some sleep.");
              }, //function close

              "condoms": function (character, system, action) {
                transer();
                var condomcolor=["pink","black","glow in the dark","chocolate flavored","ribbed","bumpy","strawberry flavored","bannana flavored","thick","extra tight","clear"];
                
                character.sandbox.condomtype=condomcolor[(rnd(condomcolor.length)-1)];
                
              
                
                if (character.sandbox.punish) {
                  system.doLink("./condompunishment");
                
                } 
                if (character.sandbox.reward) {
                    system.doLink("./condomreward");
                 
                }
              }, //function close
              "condomreward": function (character, system, action) {
                if (character.sandbox.ignore) {
                              parer("host pulls out a little package and rips it open. It appears to be a "+character.sandbox.condomtype+" condom! host sits down on the bed and starts rubbing you through his sheath. You didn't need much encouragement as seeing the condoms come out you already were starting to get excited! Finally free of the sheath host pushes the condom down over your face! q1Just a little reward for being good today....q1 he says");
                }else{  
                  parer("host pulls out a little package and rips it open. It appears to be a "+character.sandbox.condomtype+" condom! host sits down on the bed and starts rubbing you through his sheath. You didn't need much encouragement as seeing the condoms come out you already were starting to get excited! Finally free of the sheath host pushes the condom down over your face! q1Just a little reward for being good today....q1 he says");
             
                  
                }
                
                if (character.qualities.ctf==100) {
                  oper(system, "./condomhelpless", "Wait patiently as he rolls it down over you!");
                }else{
                  if (character.sandbox.limits.hasarms) {
                   oper(system, "./condomhelp", "Try to grab the condom!","./condomarmsdown","Keep your arms to your sides");
                  }else{
                    
                    oper(system, "./condomhelpless", "Wait as he unrolls the condom over you");
                  }
                  
                }
              
              }, //function close
              "condomhelp": function (character, system, action) {
                transer();
                parer("You actually grab at the condom and help pull it over your head tightly before helping host to unroll it the rest of the way down your body. With your help it actually went on extremely tight! Your facial features almost perfectly displayed on the surface of the condom. Your arms ended up down by your sides as it was rolled down trapping them in that position due to how tight it is. Its almost like a single piece vacubed, and you don't need to worry about breathing!");
              oper(system, "./condomrub", "Try to relax in the latex embrace");
              }, //function close
              "condompunishment": function (character, system, action) {
               
              if (character.sandbox.ignore) {
                              parer("host pulls out a little package and rips it open. It appears to be a "+character.sandbox.condomtype+" condom! host sits down on the bed and starts rubbing you through his sheath. You didn't need much encouragement as seeing the condoms come out you already were starting to get excited! Finally free of the sheath host pushes the condom down over your face without a word or hesitation!");
                }else{  
                  parer("host pulls out a little package and rips it open. It appears to be a "+character.sandbox.condomtype+" condom! host sits down on the bed and starts rubbing you through his sheath. You didn't need much encouragement as seeing the condoms come out you already were starting to get excited! Finally free of the sheath host pushes the condom down over your face! q1You may not like what I have planned, you were rather naughty today!q1 he says sternly");
             
                  
                }
                if(character.sandbox.limits.hasarms){
                  
                  oper(system, "./condomresist", "Try to grab the condom!","./condomarmsdown","Keep your arms to your sides");
                  
                }else{
                  oper(system, "./condomhelpless", "Watch helplessly as he rolls it down over you!");
                  
                }
                
         
              }, //function close
              "condomresist": function (character, system, action) {
                transer();
                parer("You reach up and try to fight with host over control of the condom! It is a rather pathetic fight as you are just a cock with arms and he is a giant in comparison! He just opens the condom up a bit more and pulls it over both your arms and head. The darn thing is so tight your end up crossing your arms infront of you like a straight jacket! Soon you are just a slightly wiggly latex coated shaft! Even from the outside impressions of your face and hands can be seen struggling in there.");
              oper(system, "./condomrub", "Try to relax in the latex prision");
              }, //function close
              "condomarmsdown": function (character, system, action) {
                transer();
                parer("You rather obediently keep your arms to the side and he rolls the latex down over your head and body. The shape of your muzzle makes a rather distinct shape in the tip of the condom. That collection tip fits your face shape suprisingly well! It turns out the "+character.sandbox.condomtype+" condom is rather tight. So much so that you can't even move your arms much! From the outside you could almost be mistaken for a mostly normal shaped cock!");
              
                oper(system, "./condomrub", "Try to relax in the latex prision");
              }, //function close
              "condomhelpless": function (character, system, action) {
                transer();
                
                if (character.sandbox.limits.cantalk) {
                  parer("You have no arms to hold off the condom as it easily slides down past your head. The shape of your muzzle makes a rather distinct shape in the tip of the condom. That collection tip fits your face shape suprisingly well! The rest of you is already mostly cock shaped and fits perfectly down the rest of the way. You are soon trapped in a skin tight latex suit.... except its actually a condom.");
                }else{
                  if (character.qualities.ctf==100) {
                    
                    parer("host slides the condom down over you as it fits perfectly, unrolling it all the way to his sheath and tucking the rest inside. This latex thing feels actually pretty comfortable around you, nice and tight too.  It is almost embarrassing to think of how condoms have a whole new meaning when you are the cock wearing it! In fact a condom may be the the only piece of clothing you are ever allowed to wear again!");
                    
                  }else{
                    
               parer("You have no arms to assist or resist the condom as it easily slides down past your head. You are a good bit larger than a normal cock but host made sure to get the right sized condom. He slips it over the reast of your shaft body and smiles at how cocklike you really look now! To you though it feels like being trapped in a skin tight latex suit.... except its actually a condom.");
                  }
                   
                  
                }
                
               oper(system, "./condomrub", "Try to relax in the latex prision");
              }, //function close
              "condomrub": function (character, system, action) {
                transer();
                parer("host starts to rub you through the latex, gipping it slightly so the lubed condom glides across your sensitive skin! You don't get to feel what it is like to be lubed up very often, which might be for the best as it is AMAZING! You almost arch back instinctively just from all surrounding sensations! Not a single inch of your body is safe from the latex as it gets dragged over you like a thin fleshlight!");
                
                if (character.sandbox.reward) {
                  character.sandbox.toyused="condomcum";
                  oper(system, "./condomcum", "Give in to the wonderful sensations!");
             
                }
                if (character.sandbox.punish) {
                  
                  
                  if (character.sandbox.ws&&rnd(3)==1) {
                    character.sandbox.toyused="condompiss";
                  oper(system, "./condompiss", "This is a great feeling punishment!!");
                  } else{
                      character.sandbox.toyused="condomcum";
                    oper(system, "./condomcum", "This is a great feeling punishment!!");
             
                    
                  }   
                  
                
                
                }
               
              }, //function close
              "condompiss": function (character, system, action) {
                transer();
                parer("host suddenly stops rubbing you, It wasn't like you were close but it was feeling sooooo good! There is a desperate panic as you NEED to be rubbed some more, but host seems to have other plans. You had almost forgotten this was supposed to be a punishment! He tucks the bottom of the condom deeply into his sheath all the way to the bottom actually. It is then that you feel it! A pressure building in the wrong area!");
                parer("A familiar tingle travels all the way up your urethra and into your mouth that causes you to shudder! He is about to piss while you are still inside the condom!!!!");
                oper(system, "./condompissstruggle","Struggle helplessly","./condompissrelax","Relax and let it happen");
              }, //function close
              "condompissrelax": function (character, system, action) {
                transer();
                if (character.sandbox.limits.cantalk) {
                  parer("You just relax knowing from experience that there is nothinjg you can do to stop or even slow it down. You just open your mouth and wait....The urethral bulge along your belly expands rapidly as the urine rushes through you! You can almost feel it happen in slow motion as it travels up your chest and up your neck suddenly filling your mouth! You are no stranger to the taste by this point but with nowhere to go the piss flows out your mouth and into the condom around you!!");
                }else{
                  parer("Your entire body is literally designed for this task, you just relax your vertical slit of a mouth as the torrent starts through you. The urethral bulge along your belly expands rapidly. You can almost feel it happen in slow motion as it travels up your chest and up your neck suddenly shooting from what was your mouth! But this time it has no where to go but into the condom around you!");
                  
                }
                
                parer("host doesn't let the flow go on long... just enough that the condom is nice and full without a danger of falling off! He gives you a pat through the now inflated piss balloon you now live in. q1Maybe a night in there will help you learn your lesson!");
                oper(system, "./condomsleeppiss", "Try to get some sleep anyway","./condompissprotest","Protest!");
              }, //function close
              "condompissstruggle": function (character, system, action) {
                transer();
                if (character.sandbox.limits.cantalk) {
                  parer("You do everything you can to stop what is coming, mostly closing your mouth and hoping you can keep it shut. The urethral bulge along your belly expands rapidly as the urine rushes through you! You can almost feel it happen in slow motion as it travels up your chest and up your neck suddenly filling your mouth! You are no stranger to the taste by this point but the pressure is INTENSE! You can't even keep your mouth closed for a second before it forces your cheeks to balloon and piss flows out your mouth and into the condom!");
                }else{
                  parer("You only have a piss slit for a mouth and that has the exact opposite design for holding back a stream of piss! The urethral bulge along your belly expands rapidly as the urine rushes through you! You can almost feel it happen in slow motion as it travels up your chest and up your neck suddenly shooting from what was your mouth! But this time it has no where to go but into the condom around you!");
                  
                }
                
                parer("host doesn't let the flow go on long... just enough that the condom is nice and full without a danger of falling off! He gives you a pat through the now inflated piss balloon you now live in. q1Maybe a night in there will help you learn your lesson!");
                 oper(system, "./condomsleeppiss", "Try to get some sleep anyway","./condompissprotest","Protest!");
              }, //function close
              "condompissprotest": function (character, system, action) {
                transer();
                if(character.sandbox.limits.hasarms){
                  
                  parer("He intends to leave you in this the entire night!  Even though you have more room to move around, it is through slightly pressurized piss! You are unable to get the taste out of your mouth due to haveing it forced in from around you or leaking up your throat. Even worse you can't say anything without the piss suddenly rushing back into your mouth! Something about being so much smaller makes the walls of the condom much more resilient. You can't seem to stretch or even puncture it to escape. Either that or he picked one of those extremely durable ones made for felines. ");
                  
                }else{
                  if (character.sandbox.limits.cantalk ) {
                    parer("He intends to leave you in this the entire night!  Even though you have more room to move around, it is through slightly pressurized piss! You are unable to escape taste, it's either forced in from around you or still leaking up your throat. Even worse you can't say anything without the piss suddenly rushing back into your mouth!");
                  }else{
                     parer("He intends to leave you in this the entire night!  Even though you have more room to move around, it is through slightly pressurized piss! You are unable to escape taste, it's either forced in from around you or still leaking up your throat.");
                    
                  }
                     ;
                }
                
                    character.sandbox.erect=false;
                clother();
                
                parer("Eventually you get pulled back into his sheath pulling the condom in with you. It's rather strange trying to fall asleep completely surrounded by liquid, at least you don't need to breath. After an hour of waiting in the piss filled prison you finally start to nod off.");
                oper(system, "./toysendtrans", "Try to sleep");
              }, //function close
              "condomcum": function (character, system, action) {
                transer();
                 system.setQuality("essence",character.qualities.essence+10 );
                character.sandbox.nightfun=true;
                if (character.sandbox.limits.cantalk) {
                  
                  parer("All the wonderful sensations build up all at once as you feel a familiar tightness in host's balls! Once again you are drowned in orgasmic bliss as the urethral bulge long your belly expands visably all the way up your neck! The cum floods into your mouth and then begins filling the condom! Each clench of his balls sending another spurt of cum through your body. Soon it isn't just orgasmic bliss you are drowning in! The condom is literally ballooning with cum! You can't see anything through the thick white sea!");
                  
                  
                }else{
                    parer("All the wonderful sensations build up all at once as you feel a familiar tightness in host's balls! Once again you are drowned in orgasmic bliss as the urethral bulge long your belly expands visably all the way up your body! The cum shoots from your vertical slit of a mouth and begins filling the condom! Each clench of his balls sending another spurt of cum through your body. Soon it isn't just orgasmic bliss you are drowning in! The condom is literally ballooning with cum! You can't see anything through the thick white sea!");
                  
                }
                
                if (character.sandbox.reward) {
                  if (character.sandbox.ignore) {
                     parer("host sounds a bit out of breath as he pats you through your little cum balloon. Without saying a word he lays down just letting you soak in his cum for the night! You loved his cum enough to accept life as his cock, so why not this.....");
                    oper(system, "./condomsleepcum", "Try to get some sleep in the cum filled condom");
                  }else{
                    
                     parer("host sounds a bit out of breath as he pats you through your little cum balloon. q1Soo... want out or should I leave you in there for the night?q1 he asks");
                  
                      oper(system, "./condomsleepcum", "Try to nod yes","./condomcumletout","Shift around as if trying to get free");
                  }
               
                  
                  
                
                  
                  
                }else{
                  if (character.sandbox.ignore) {
                    parer("host sounds a bit out of breath as he pats you through your little cum balloon. q1Maybe that will get it to remember what it's real purpose is now.q1He says. You are too exhausted from cumming to put up an resistance, already you are feeling tired.");
                  }else{
                    parer("host sounds a bit out of breath as he pats you through your little cum balloon. q1See if a night soaking in my cum will help you learn your lesson.q1 He says. You are too exhausted from cumming to put up an resistance, already you are feeling tired. ");
                  }
                  
                  
                  
                  
                  oper(system, "./condomsleepcum", "Try to sleep while submerged in cum");  
                }
                
               
                
              }, //function close
              "condomcumletout": function (character, system, action) {
                character.sandbox.reward=false;
                //reward
                transer();
                parer("host seems to understand and with a chuckle angles your body downward as he slowly slides the condom off of your body. He is carfull enough to make sure that most of the cum gets rubbed off into the condom in the process. Even though you don't have to breath you instinctively feel the need to gasp as you finally are free! host rubs you down with a tissue cleaning you off as best he can. You get pulled back into his sheath and soon after he lays down flipping the blanket back over you both.");
                oper(system, "transformation", "Get some sleep");
              }, //function close
              "condomsleepcum": function (character, system, action) {
                transer();
                parer("Eventually you start to get pulled back into host's sheath pulling the condom in with you! It's so sticky and gooey, even more so with the added pressure of the sheath. Eventually you start to nod off.");
                    character.sandbox.erect=false;
                clother();
                system.doLink("./toysend");
              }, //function close
              "condomsleeppiss": function (character, system, action) {
                transer();
                
                
       
                
                parer("Eventually you get pulled back into his sheath pulling the condom in with you. It's rather strange trying to fall asleep completely surrounded by liquid, at least you don't need to breath. After an hour of waiting in the piss filled prison you finally start to nod off.");
                    character.sandbox.erect=false;
                clother();
               system.doLink("./toysend");
              }, //function close
          "vibe": function (character, system, action) {
                transer();
                character.sandbox.toyused="vibe";
                parer("host reaches into a drawer and pulls out the ring? No... this one looks rather different. The shape is more circular and it looks thicker. q1Hehe this should be fun. This ring should be way better than that other one....q1He says and quickly slides it over your head. It feels rather comfortable, maybe a bit tight. <br>Then he turns it on.....");
                
              
                oper(system, "./viber","<p class='vibrate'>BRRRRRRRRRR!!!!!!!!!!</p>");
              }, //function close
              "viber": function (character, system, action) {
                transer();
              parer("<p class='vibrate' style='text-align: center'>BRRRRRRRRRRRRRRRRRRRRR!!<br>Two rings with weights are spinning around inside the ring! Rather than just a simple vibration from one part the whole thing is shaking and buzzing through you!!</p>");
            
                if (character.sandbox.limits.hasarms) {
                  parer("You can't even think to respond as your whole body vibrates due to the ring! This is WAY more intense feeling than any vibrator you ever tried, you are closer to the actions at the moment though. You can't even reach down to remove it, you have to cross your arms just to brace yourself against the shakeing! Every moan you produce sounds like it is being sent through a fan or something! All you can do is ride out the incredible sensations as you are helplessly vibrated into a blissful oblivion!  ");
                }else{
                  
                  
                  parer("You can't even think to respond as your whole body vibrates due to the ring! This is WAY more intense feeling than any vibrator you ever tried, you are closer to the actions at the moment though.Every moan you produce sounds like it is being sent through a fan or something! All you can do is ride out the incredible sensations as you are helplessly vibrated into a blissful oblivion! ");
                }
                parer("host does something and then lets out a pleased moan as the vibrations change!");
             
          oper(system, "./viber2","<p class='vibrate'>BZZZZZ BRRR BZZZ BRRRR!!!!!!!!!!</p>");
              }, //function close
              "viber2": function (character, system, action) {
                transer();
                parer("The new vibration pattern is a surprise as you get harder, pre already starting to leak from you! The vibrations flick it in random directions as you buzz in place. host goes through a couple variations of vibrations patterns till he finds one he likes. This one turns it off completely for a second only to resume at full speed for a good 2 seconds. The off an on aspect of it is maddening!");
                
                
                
                oper(system, "./vibecum", "<p class='vibrate'>Soo close... CUM!!!!</p>");
              }, //function close
              "vibecum": function (character, system, action) {
                transer();
                system.animateQuality("essence", character.qualities.essence + 20);
                
                parer("You end up making a worse mess than usual as the cum flows up through you and sprays out almost randomly due to the vibrations! You have no control of anything as you are reduced to nothing but a desperate cum spurting cock! You are so lost to the sensations you don't even realize it has stopped. Just drooling cum as the orgasmic haze seems more stubborn than usual to lift from your mind. The only thing you do pick out is the panting from host above you.");
                
                
                
                parer("q1That... was way better than your other ring.... Fuck......q1 He says colapsing onto the bed.");
                if (character.sandbox.limits.hasarms) {
                  oper(system, "./vibewiggle", "Try to pull the ring off of you","./vibesleep","Leave it on");
                }else{
                  
                  oper(system, "./vibesleep","Try to recover and get some sleep");
                }
                
              }, //function close
              "vibewiggle": function (character, system, action) {
                transer();
                character.sandbox.reward=false;
                parer("Thankfully with arms you are able to pull the ring off of you with a bit of work. It helps that you started to go soft which made it get just a bit loose around you. You almost have it off when it suddenly vibrates strongly for a split second! It's enough of a shock that you loose your grip on it! More cum leaks from your mouth as you redouble your efforts to remove it before the darn thing makes you hard again.");
                parer("Finally you are able to remove it just time to find it vibrating as you get it off! Even after you take it off the thing still vibrates away on the bed eventally falling onto floor. ");
                character.sandbox.nightfun=true;
                    character.sandbox.erect=false;
                clother();
                oper(system, "./toysend", "Get some sleep in peace...");
              }, //function close
              "vibesleep": function (character, system, action) {
                transer();
                
                parer("You try to relax as hosts sheath decides it's time for you to come back and starts pulling you in. You notice the ring gets pulled into his sheath too and suddenly starts vibrating again! Its only a split second vibrations but its long enough to leave you shuddering in sensitive pleasure.");
                if (character.sandbox.limits.hasarms) {
                  parer("With the ring inside his sheath you can't get at it really to remove it! And every time you start to slide into it the darn ring buzzes away again! It's just enough to keep you hard through the entire night! You hear host moan in his sleep a few times, apparently the stimulation is giving his rather vivid dreams. You managed to get something like sleep, either that or you are vibrated into a desperate oblivion of need!");
                }else{
                  parer("Every time you start to slide into his sheath the darn ring buzzes away again! It's just enough to keep you hard through the entire night! You hear host moan in his sleep a few times, apparently the stimulation is giving his rather vivid dreams. You managed to get something like sleep, either that or you are vibrated into a desperate oblivion of need!");
                  
                  
                }
                    character.sandbox.erect=true;
                clother();
                
                oper(system, "./toysend", "Try to get some<p class='vibrate'>Sleep</p>");
              }, //function close
          "pill": function (character, system, action) {
                transer();
                character.sandbox.toyused="pill";
                if(character.sandbox.ignore){
                  parer("host pulls out something from a drawer... It looks like a bottle of pills. q1I wonder how many times you can cum and still believe you are anything but a cock.... Lets find outq1 He says opening the bottle and taking one of the pills.");
                  
                }else{
                  parer("host pulls out something from a drawer... It looks like a bottle of pills. q1So I got these as a gift from the guy at the adult store. It says they give you 0 refractory period and you can cum over and over. They described it as an aphrodisiac on steroids. Not sure how effective as a punishment this is going to be, but I know I am going to enjoy it.q1 He says opening the bottle and taking one of the pills.");
                  
                }
                
                
                if(character.sandbox.limits.cantalk){
                  
                  oper(system, "./pillsafe", "Ask if he thinks it's safe","./pillponder","Wait nervously");
                
            
            }else{
                  
                  oper(system, "./pillponder", "Nervously ponder how long it will take to kick in");
                }
                
                
              }, //function close
              "forgotten": function (character, system, action) {
                transer();
             
                parer("With evening turning into night host heads into the bedroom to get some sleep. He gets fully naked and wraps up in the warm blankets sending you into darkness again. He sounds like he is gettins something out of the bedside drawer... q1I wonder what will happen if I take one of these pills every few days.... Just one left you unable to move or think... It wouldn't hurt if I tried it out for a week or two.q1 He says looking at the bottle! The next thing you hear is a clatter of pills followed by a swallowing sound!");
                parer("q1I am going to make you into my cock for real now... All the way...q1 He says and starts rubbing you!");
                oper(system, "./pillponder", "Wait for the pill to take affect","./pillprotest","Try to protest");
              }, //function close
              "pillprotest": function (character, system, action) {
                transer();
                
                if(character.sandbox.ttcost<character.qualities.essence&&character.sandbox.runedo.thoughts) {
                  system.setQuality("essence",character.qualities.essence- character.sandbox.ttcost );
                  parer("You try to protest a bit but it's hard to put up a decent argument considering you are already his penis. Just making you act and feel like it is just a logical step. He doesn't even respond to you, instead just starting to rub you even faster!");
                }else{
                 parer("You try to wiggle protest a bit but his rubbing has already started getting you hard! All you can do is throb and hope he takes that as a complaint iinstead of a sign of enjoyment!");
                }
                
                system.doLink("./pillponder");
              }, //function close
              "pillsafe": function (character, system, action) {
                transer();
                parer(character.host.pillsafe+" and starts rubbing you up and down. You expect it to take a while but already you feel... different. It's nothing specific but over the next few minutes you feel like he has been rubbing you for hours. And that desperation only continues to build!");
                oper(system, "./pillendure", "Try to endure","./pillbeg","Beg him to rub you more!");
              }, //function close
              "pillponder": function (character, system, action) {
                transer();
                if (character.sandbox.host.host=="bret") {
                  parer("You stay still as host starts to rub you up and down. You expect the pill to take a while but already you feel... different. It's nothing specific but over the next few minutes you feel like he has been rubbing you for hours. And that desperation only continues to build! ");
                }else{
                  
                  if(character.sandbox.internalballs){
                    
                       parer("You stay still as host starts to rub you up and down. His other hand reaching down to rub at his genital slit, it's actually much more sensitive than she#aths are... You expect the pill to take a while but already you feel... different. It's nothing specific but over the next few minutes you feel like he has been rubbing you for hours. And that desperation only continues to build! ");
                  }else{
                    
                       parer("You stay still as host starts to rub you up and down. His other hand reaching down to his balls, you can still feel them as if they were a part of you distantly... You expect the pill to take a while but already you feel... different. It's nothing specific but over the next few minutes you feel like he has been rubbing you for hours. And that desperation only continues to build! ");
                  }
               
                  
                }
               oper(system, "./pillendure", "Try to endure","./pillbeg","Beg him to rub you more!");
              }, //function close
              "pillendure": function (character, system, action) {
                transer();
                parer("You do your best to bear down and brace yourself against the feelings! It doesn't let up though and you start feeling warm and flush! Even worse is the pressure from host's balls! You can actually feel them getting uncomfortably full! Everything starts feeling so good as your sensitive cock flesh sends shocks of pleasure through you!");
                system.doLink("./pillcum");
              }, //function close
              "pillbeg": function (character, system, action) {
                transer();
                
                
                if (character.sandbox.limits.cantalk) {
                   parer("host just snickers as you start begging him to rub you faster! q1Works fast!q1 He says and actually slows down a bit! You already can hardly stand how warm and flush you start to feel! Even worse is the pressure from host's balls! You can actually feel them getting uncomfortably full! Everything starts feeling so good as your sensitive cock flesh sends shocks of pleasure through you!");
                }else{
                  parer("You try to beg host to rub you faster but... you don't have a mouth! Internally you beg and plead hoping he realizes how desperate you are! An unfamiliar warmth spreads through you as you begin to feel flush! Even worse is the pressure from host's balls! You can actually feel them getting uncomfortably full! Everything starts feeling so good as your sensitive cock flesh sends shocks of pleasure through you!");
                  
                }
              
                system.doLink("./pillcum");
              }, //function close
              "pillcum": function (character, system, action) {
                 if (character.sandbox.host.host=="bret") {
                parer("Bret just keeps humping you into the bed, over and over sliding you against it! Finally he can't take it anymore and gets out that tube thing he has used before. He forces you in head first as he holds it in place thrusting away! Sudenly all the sensations get magnified 10 fold!");  
                  
                }
                
                 parer("It comes as no surprises when you feel your balls suddenly clench sending a surge of cum up through you! Normally this feels like such a relief, and it sort of does... The orgasm surges through you making it hard to think, the pressure of bearing down as the pressure of his cum uses your body like a fire hose. You are still seeing stars when the sensation of needing to cum returns! If you had lungs you would be panting and gasping right now, and already another orgasm is building!");
                oper(system, "./pillcum2", "Cum AGAIN!");
              }, //function close
              "pillcum2": function (character, system, action) {
                transer();
               
                parer("host is moaning now as he really works you hard. It only takes another 2 or three minutes and those balls clench sending another surge of cum out your mouth! It feels no less overwhelming than it did the last time. Already you are exshausted from the effort of cumming twice in a row! You may not be doing anything to help but it is still your body doing all the work!");
                parer("You get a moment of rest as you helplessly drool cum, yet concerningly you are still hard! You can still feel how horny you are and those balls only feel even more full, almost painfully so! After only 5 minutes..... He starts up again! Already it's impossible to think straight.... Cummming.... AGAIN!");
                oper(system, "./pillcum3", "AND AGAIN!");
                
              }, //function close
              "pillcum3": function (character, system, action) {
                transer();
                parer("Everything starts to get blurry as you feel blast after blast of cum shoot through you. You start to realize you are only aware of cumming, not the time inbetween. It's like waking up to an orgasm as a gallon of cum erupts from your mouth, only to wake up to it happening again! You have no idea how many times this happens... All you know is what it feels like. The wonderful pleasure, the pressure of it passing through your body, the tightness of his balls as they fill you from below!");
                oper(system, "./pillskip", "Cum.....");
              }, //function close
              "pillskip": function (character, system, action) {
                transer();
                
                 system.setQuality("essence",character.qualities.essence+50 );
               parer("You are in a bit of a haze... You have no idea what is happening. So tired.... but in a good way");
                var pillholder;
               if(character.sandbox.ws){
                 pillholder=[
                "You are sort of aware of host saying something to you......",
                "He pulls you out to piss with... How nice....",
                 "You are getting wet... Must be showering",
                 "He is getting out of bed and going to work",
                 "Pissing again.... Then back to your sheath",
                 "Getting out of bed....",
                 "Saying something to you....",
                 "Going to work... pissing.... Going to work... waking up.... It all just flows together.",
                 "./pillwakeup"
               ];
                 
               }else{
                 
             
                 pillholder=[
                "You are sort of aware of host saying something to you......",
                "He pulls you out for a rub... How nice....",
                 "You are getting wet... Must be showering",
                 "He is getting out of bed and going to work",
                 "Showering again? At least he rubs you..",
                 "Getting out of bed....",
                 "Saying something to you....",
                 "Going to work... Showering.... Going to work... Waking up.... It all just flows together.",
                 "./pillwakeup"
               ];
                 
               }
            
               delay(pillholder);
               
              }, //function close
              "pillwakeupdoom": function (character, system, action) {
                    system.setQuality("day",character.qualities.day+20);
                system.setQuality("essence",character.qualities.essence+200);
                system.setQuality("dayofweek", character.qualities.day%7);
                 if (character.qualities.dayofweek>4){
                    
                  character.sandbox.weekend=true;
                  
                }else{
                  
                    character.sandbox.weekend=false;
                }
            
                system.doLink("transformation");
                
              }, //function close
               "pillwakeup": function (character, system, action) {
                transer();
         
                if (character.sandbox.ws) {
                  parer("You groggily wake up with some of the strangest dreams. You remember things from it.... but it's just you being taken out to piss over and over. Maybe showering... It is all so hazey. The last thing you remember clearly is host making you cum over and over again with that damn pill!");
                }else{
                  
                  parer("You groggily wake up with some of the strangest dreams. You remember things from it.... Maybe showering... host getting out of bed multiple times? It is all so hazey. The last thing you remember clearly is host making you cum over and over again with that damn pill!");
                  
                }
                
                
                if(!(character.sandbox.usedpillsonce&&character.sandbox.perma&&character.qualities.ctf==100)){
                       system.setQuality("day",character.qualities.day+5);
           
                system.setQuality("dayofweek", character.qualities.day%7);
                 if (character.qualities.dayofweek>4){
                    
                  character.sandbox.weekend=true;
                  
                  
                }else{
                  
                    character.sandbox.weekend=false;
                }
            
                  //normal path
                  character.sandbox.usedpillsonce=true;
                   if(character.sandbox.ignore){
                  if(character.qualities.ctf==100){
                    parer("q1Day 5.... Damn maybe I really did cum it's mind blank. Guess it really is just a normal cock now...q1 He says and goes about his day. He really thinks you are not there anymore.... ");
                    
                  }else{
                    parer("host is just getting up and happens to look in the mirror seeing you... q1It's so easy to forgot my cock is a bit unusual.... If you are in there still you have been doing great bytheway. Just stay like you have been the last few days, that's what a good cock should be like afterall.q1 He says and goes about his day. It feels a tad embarrassing for your existence as his cock to be just a 'a bit unusual'. Then again comparing you to a normal cock maybe there really isn't that much of a differnece.");
                    
                  }
                     oper(system, "./pillthrob", "Twitch just a bit...","./pilljustacock","Pretend to be just a cock now");
                  
                }else{
                  
                  
                  parer("q1Day 5.... Damn mayabe I really did cum it's mind blank. "+character.host.pillwake+"q1 He says paying close attention to you");
                  if(character.sandbox.perma){
                     if(character.sandbox.ctfrolemod=="pos"&&character.qualities.ctf==100){
                    
                     oper(system, "./pillthrob", "Throb to let him know you are there!","./pilljustacock","Pretend to be just a cock now");
                  }else{
                    parer("If he was treating you more like a cock and you look the part... You might be able to make him think you really are just his mindless cock. ");
                    oper(system, "./pillthrob", "Throb to let him know you are there!","./pillthrob","Reluctantly wiggle a bit");
                    
                  }
                  }else{
                    parer("You have to do something to let him know you are there, but if you ever decided to stay like this forever... The thought of agreeing to be his cock permanently sends shivers through you. This would be very different if you had...");
                    oper(system, "./pillthrob", "Throb to let him know you are there!","./pillthrob","Reluctantly wiggle a bit");
                  }
                 
                   
                  
                   
                }
                }else{
                  //forgotten pill start!
                       system.setQuality("day",character.qualities.day+14);
           
                system.setQuality("dayofweek", character.qualities.day%7);
                 if (character.qualities.dayofweek>4){
                    
                  character.sandbox.weekend=true;
                  
                }else{
                  
                    character.sandbox.weekend=false;
                }
            
                   parer("q1Day 14.... I bet you are loving this, no thoughts in your head. Just pure bliss of being my cock. I think I will just keep taking them for a while, certainly don't hear you complaining.q1 He says");
                   oper(system, "./pillnothrob", "Throb to let him know you are there!","./pillnothrob","Wiggle in approval");
                  
                }
               
               
               
              }, //function close
              "pillnothrob": function (character, system, action) {
                transer();
                character.sandbox.stealth=true;
                character.sandbox.pillroute=true;
                character.sandbox.pillwearoff=4;
                //already bodypart
                parer("You try to move and nothing happens... Your body is just soft and squishy almost numb feeling from those damn pills. You can't move at all anymore! You might as well be completely transformed into a cock now! It might be a blessing you still have your senses and ability to think. But if host takes another one of those pills... You won't even have that! The only way to communicate with his is that thought transfer thing....");
                if(character.qualities.essence>character.sandbox.ttcost&&character.sandbox.runedo.thoughts){
                  
                  oper(system, "./pillalert", "Let him know you are there!","./pilljustacock","Pretend to be just a cock now");
                }else{
                  
                  oper(system, "./pilljustacock", "Realize you are helpless to tell him you are there!");
                  
                }
                
              
              }, //function close

              "pilljustacock": function (character, system, action) {
                 transer();
                 character.sandbox.punish=false;
              if(character.qualities.ctf==100&&(character.sandbox.perma&&character.qualities.harmony>50)){
                //bodypart or possesion
                parer("q1Maybe it's better this way. Just a part of my body, no moving around, no thinking for yourself. I could take the pills for a while longer.... he won't know the difference anyway... Hummm...q1 He pauses for a moment in thought. ");
                parer("q1"+character.host.pillohno+"q1 He says opening up a familiar pill bottle and swallowing!");
                
                  oper(system, "./pillofdoom", "You are going have to live as a real cock from now on...");
              }else{
               
                parer("q1Well just to be safe I should hold off on taking any more for a while...q1 He says giving you a rub. ");
                
                if(character.sandbox.pillroute){
                    
                  system.doLink("./pillwearoff");
                  
                }else{
                  
                    
                          if(character.sandbox.ws){
                  character.sandbox.skipto="morning/toysthenbathroom";
                       oper(system, "transformation", "Carry on with the day");
                  //system.doLink("morning/toysthenbathroom");
                }else{
                  parer("host gives you a rub and continues with his other bathroom deeps. He is thankfully quick about it leaving you to wait for him to finish brushing his teeth.");
                  
             
                  
                  character.sandbox.skipto="aftermorning";
                  oper(system, "transformation", "Carry on with the day");
                }
               
                }
                  
              }
               
              }, //function close
              "pillofdoom": function (character, system, action) {
                transer();
                character.sandbox.tookpill=true;
                character.sandbox.stealth=true;
                character.sandbox.pillwearoff=-1;
                system.setQuality("harmony",character.qualities.harmony+10 );
                parer("Your last moments of being a special cock tick away as you feel yourself get hard with another deep arousal! It just makes you need to be rubbed! You need to feel his touch against your sensitive body! The pill once again driving you crazy with lust! Finally you feel host start rubbing you and the orgasm comes almost too quickly! The damn pill just makes this feel too good!");
                oper(system, "./doomcum", "Cum!");
              }, //function close
              "doomcum": function (character, system, action) {
                transer();
                var pillholder;
                parer("Things go blurry on you fast as you cum and cum over and over! Finally you feel it starting to blur together");
                  if(character.sandbox.ws){
                 pillholder=[
                "Everything feels soo good, it is night again",
                "He pulls you out to piss with... How nice....",
                 "He is getting out of bed and going to work",
                 "Pissing again.... Then back to your sheath",
                 "Getting out of bed....",
                 "Going to work... pissing.... Going to work... waking up.... It all just flows together.",
                 "./pillwakeupdoom"
               ];
                 
               }else{
                 
             
                 pillholder=[
                "Everything feels soo good, It is night again",
                "He pulls you out for a rub... How nice....",
                 "He is getting out of bed and going to work",
                 "Going to work... Showering.... Going to work... Waking up.... It all just flows together.",
                 "./pillwakeupdoom"
               ];
                 
               }
             delay(pillholder);
              }, //function close
              "pillalert": function (character, system, action) {
                transer();
                
                
                
                parer("You quickly send a thought to host to let him know what has happened! You are still there but you just can't seem to move anymore! He almost seems dissapointed. "+character.host.pillalert);
                
                
                oper(system, "./pillwearoff", "Hope it wears off soon!","./realcock","Consider becoming a REAL cock");
              }, //function close
              "pillwearoff": function (character, system, action) {
                transer();
                
                
                character.sandbox.stealth=true;
                 character.sandbox.pillroute=true;
                character.sandbox.pillwearoff=4;
                parer("host gets up and starts getting ready for the day. You still can't move at all but that hopefully wont last too much longer. At least before host decides it would be fun to take another pill....");
                if(character.sandbox.ws){
                    
                  character.sandbox.skipto="morning/toysthenbathroom";
                       oper(system, "transformation", "Carry on with the day");
                  
                }else{
                  parer("host gives you a rub and continues with his other bathroom deeds. He is thankfully quick about it leaving you to wait for him to finish brushing his teeth.");
                  
                      character.sandbox.skipto="aftermorning";
                       oper(system, "transformation", "Carry on with the day");
                }
              }, //function close
              "realcock": function (character, system, action) {
                transer();
                parer("The thought transfer thing is still active for a bit longer and you could send one more message to host. It was kind of nice to experience being a 'real' cock. The sensations went by so fast and you didn't even have to think about things anymore. It was like a distant dream of constant pleasure, being taken care of by host as he uses you without any consideration.");
                oper(system, "./mycocknow", "Admit it was kind of nice....","./pillwearoff","Stay quiet");
              }, //function close
              "mycocknow": function (character, system, action) {
                transer();
                character.sandbox.pillwearoff=4;
                parer("q1That is just what I wanted to hear..... Enjoy thinking while you can, a real penis doesn't need to do that. I am doing this for your own good, because I know you want it now.q1 He says giving you a nice rub. You hear the opening up of a familiar pill bottle and swallowing!");
                oper(system, "./pillofdoom", "Your fate is sealed.....");
              }, //function close
              "pillthrob": function (character, system, action) {
                transer();
                character.sandbox.punish=false;
                if (character.sandbox.ignore) {
                  parer("You give a very minor movement just enough to let him know you have woken up a bit. There is no way to tell if he noticed, even if he did host didn't do anything about it. You are just another part of his body, a random twitch isn't that unusual. So you are still being good.... In a way it feels good to know he was happy with you for the last few days.");
                }else{
                     parer("You give a weak throb just enough to let him know you are still aware! q1Geeze you almost had me worried! That pill really knocked you out, it's been like 5 days!q1 He says giving you a comforting rub. It is a bit of a shock to think you spent five whole days acting like a real cock, barely aware of anything as host went about his day. Using you when he wanted just like any other part of his body.");
                  
                }
           if(character.sandbox.ws){
                           character.sandbox.skipto="morning/toysthenbathroom";
                       oper(system, "transformation", "Carry on with the day");
                }else{
                  parer("host gives you a rub and continues with his other bathroom deeps. He is thankfully quick about it leaving you to wait for him to finish brushing his teeth.");
                  
             
                  
                  
                    character.sandbox.skipto="aftermorning";
                       oper(system, "transformation", "Carry on with the day");
                }
               
              }, //function close
              "beads": function (character, system, action) {
                transer();
                //two versions, one for punishment and one for reward 
                //punishment can only be done with a pis slit.
                character.sandbox.toyused="beads";
                if(character.sandbox.punish){
                  
                   parer("He pulls out a long string of beads that you had him buy a while back. q1Heh, you wanted it... Well now you are going to get it. To bad you don't have a mouth anymore to help swallow these.q1He says. A decent amount of lube gets applied to to the string to get them ready. Finally he gets a good grip on you and places the first bead against your piss slit of a mouth! Without arms or even a working jaw there isn't much you can do. The string of beads are nearly a foot long and they get bigger toward the end!");
                   
                oper(system, "./punishbeads", "Brace yourself as he pushes the first one inside.");
                }else{
                  if(character.sandbox.limits.cantalk){
                    parer("He pulls out a long string of beads that you had him buy a while back. . A decent amount of lube gets applied to to the string to get them ready.q1Never been to sure about these things, but lets give it a try. Should be interesting to see you swallow these! Alright open up!q1 He says pushing the small first bead toward your face! The string of beads are nearly a foot long and they get bigger toward the end! Your head is mostly unaffected by the transformation currently, so most of the work getting these down will be on you!");
                 oper(system, "./swallowbeads", "Open your mouth for the bead");
                  }else{
                     parer("He pulls out a long string of beads that you had him buy a while back. q1Never been to sure about these things, but lets give it a try. To bad you don't have a mouth anymore to help swallow these.q1He says. A decent amount of lube gets applied to to the string to get them ready. Finally with a good grip on you he places the first bead against the slit of your cock shaped head! The string of beads are nearly a foot long and they get bigger toward the end! Without arms or even a working jaw there isn't much you can do other than enjoy the ride");
                    oper(system, "./rewardbeads", "Brace yourself as he pushes the first one inside.");
                  }
              }
            }, //function close      
          "punishbeads": function (character, system, action) {
            
            
                transer();
                parer("host thankfully takes his time pushing the first one in. Thanks to the liberal coating of lube it slips inside what used to be your mouth. It really feels like there is a big apple or ball bag holding it open. You are rather helpless as another starts to push its way in, causing the first to start slipping down what feels like your throat. It causes a twinge of embarrassment thinking how your throat has been repurposed to function as a urethra'");
                oper(system, "./punishbead2", "Feel the next one slide in");
              }, //function close
              "punishbead2": function (character, system, action) {
                transer();
           parer("host pushes another in causing the first one to travel even farther down your urethra.  A very visable bulge slides down where your neck used to be, clearly showing exactly where the large bead is currently lodged. The pressure inside you feels really odd, stetching around an object where normally nothing but liquid would travel through. One after another get forced down till you have a whole line of them visably making bumps along your underside.");
           parer("You get a bit of a surprise as the newest bead that popps into your mouth is much larger than the last one! You hear a concerning chuckle from host after that.");
                oper(system, "./punishbigbead", "Brace yourself");
              }, //function close
              "punishbigbead": function (character, system, action) {
                transer();
                parer("You know its coming but that doesn't help at all prepare you for the next bead! host really has to push the next one in, letting out a moan as you are forced to stretch open around it! Even worse the large one in has to slide in deeper too! Whatever used to be your throat opens up for it slowly... Then all at once both beads pop into place at the same time! The mouth of your ureathra tightens over the bead as it is just a tad larger than your opening when relaxed! Same goes for the one distending your urethra, it feels held in place by your throat closed slightly above it!");
                oper(system,"./beadstaysin","Try to endure the sensation till he pulls them out!!");
              }, //function close
              "beadstaysin": function (character, system, action) {
                transer();
                parer("Rather than do than relieve you of those beads, host just pants a few times and lays down! q1Wow that feels intense... Try not to get smaller in the night or we are never getting those back out of you!q1 He says flipping the blanket over! You are going to spend the entire night sucking on the massive beads! At first it seems like you are going to go mad from the sensations but eventually you do start to get used to it....");
                    character.sandbox.erect=true;
                clother();
                oper(system, "./toysend", "Try to get to sleep.... Somehow.");
              }, //function close
              "rewardbeads": function (character, system, action) {
                transer();
                 parer("host takes his time thankfully pushing the first one in. Thanks to the liberal coating of lube it slips inside what used to be your mouth. It really feels like there is a big apple or ball bag holding it open. The sensations are so strange yet kind of exciting. Soon another follows causing first to start slipping down what feels like your throat. It causes a twinge of embarrassment thinking how your throat has been repurposed to function as a urethra.");
                oper(system, "./rewardbeads2", "Be a good cock and take those beads!");
              }, //function close
              "rewardbeads2": function (character, system, action) {
                transer();
                parer("host pushes another in causing the first one to travel even farther down your urethra.  A very visable bulge slides down where your neck used to be, clearly showing exactly where the large bead is currently lodged. The pressure inside you feels really odd, stetching around an object where normally nothing but liquid would travel through. host just lets out a softly mumble of pleasure as he goes to push the next few! One after another get forced down till you have a whole line of them visably making bumps along your underside. After that host takes a moment to just enjoy how it feels.");
                
                oper(system, "./rewardbeadsstop", "Try to get used to the weird feeling");
              }, //function close
               "rewardbeadsstop": function (character, system, action) {
                transer();
                parer("host seems to take this as the perfect opportunity to ramp up the fun, rubbing up and down your urethra. That REALLY feels strange! It is much stranger feeling, a mixture of throat and soft sensitive flesh filled with thick objects. Then he gives a soft pull.....");
                parer("POP! As he tugs one of the beads out! POP! Another..... POP! IT FEELS REALLY GOOD! You are squirming involuntarily as the beads get extracted one by one from your former mouth! He then forces them back down only to repeat the process! You start to feel a bit strange, but the feeling is familiar....");
                oper(system, "./beadscum","SURPRISE ORGASM");
              }, //function close
              

              "swallowbeads": function (character, system, action) {
                transer();
                if(character.sandbox.limits.hasarms){
                  parer("You take the first bead and place it in your mouth. Thanks to your arms being free you can actually control this process all yourself. host actually just leans back in  the bed as you prepare to see how many of these beads you can swallow. ");
                  
                }else{
                  
                  parer("host helps you get the first bead into your open mouth. You might have a head still but no arms to really grab the beads with. host helps by holding the beads just above you so the next one is right there waiting....");
                  
                }
                
                
                parer("It feels strange in there like, sure your mouth is intact for the most part... but the back of your mouth just leads into host's urethra that runs through your body! Some of the muscles still feel intact back there but you can tell it has been altered significantly. The lube at least doesn't have any particular flavor to it at least. Finally you can't wait any longer....");
                
                
                oper(system, "./swallowbead1", "Swallow the first bead");
              }, //function close
              "swallowbead1": function (character, system, action) {
                transer();
                parer("Good news is the bead slips down past your throat/urethra with ease. At the same time the next bead gets dragged along straight into your mouth! Turns out cocks do not have a gag reflex. It certainly feels odd.... Kind of stimulating even. You can hear host moan softly as he also appears to be appreciating the sensations.");
                oper(system, "./swallowbead2", "Swallow another");
              }, //function close
              "swallowbead2": function (character, system, action) {
                transer();
                parer("This is a bit harder due to pushing the first one even farther down your urethra. It causes a bulge to slide down your neck, clearly showing exactly where the large bead is currently lodged. The pressure inside you feels really odd, stetching around an object where normally nothing but liquid would travel through.");
                oper(system, "./swallowmore", "Swallow a few more");
              }, //function close
              "swallowmore": function (character, system, action) {
                transer();
                parer("Now that you have gotten use to the feeling of it the next bunch are rather easy. One after another you swallow down till you have a whole line of them visably making bumps along your underside. It actually really feels good! You are about to swallow another only to find this is where they start getting bigger! A much larger bead than you expected pops into your mouth!");
                
                oper(system, "./swallowstop", "Stop there!","./swallowstuck","Swallow one more!");
              }, //function close
              "swallowstop": function (character, system, action) {
                transer();
                parer("You decide it's better not to risk it. host seems to take this as the perfect opportunity to ramp up the fun, rubbing up and down your urethra. That REALLY feels strange! It is much stranger feeling, a mixture of throat and soft sensitive flesh filled with thick objects. Then he gives a soft pull.....");
                parer("POP! As he tugs one of the beads out! POP! Another..... POP! IT FEELS REALLY GOOD! You are squirming involuntarily as the beads get extracted one by one from your mouth! He then lets you swallow them back down only to repeat the process! You start to feel a bit strange, but the feeling is familiar....");
                oper(system, "./beadscum","SURPRISE ORGASM");
              }, //function close
              
              "swallowstuck": function (character, system, action) {
                transer();
                parer("You gather up some courage and try to swallow the next bead... it's a bit wider than your throat but something about being part cock seems to be helping. After an agonizing few moments of uncertaintly it suddenly slips down your throat... and along with it a MASSIVE bead heads straight into your mouth! Your jaw gets forced wide openen and beyond what you thought was safe before it pops in just behind your teeth! Your jaw relaxes but is now trapping the largest bead inside!");
                parer("q1Hey! OUCH, What was that? Oh.... How did you even....q1 host says and looks down at you baffled.");
                oper(system, "./beadisstuck", "Try to dislodge it!");
              }, //function close
              "beadisstuck": function (character, system, action) {
                transer();
                if (character.sandbox.limits.hasarms) {
                  parer("You reach up and try to push the next bead away from you to pull the one in your mouth out. Unfortunately you just can't push hard enough to dislodge the ones stuck in you! Your jaw and throat are doing an excellent job keeping them trapped!");
                }else{
                    parer("You try to reach up to push the bead away but then remember your rather complete lack of arms! You can't do anything other than try to work the beads with your mouth. Since your jaw stretched a bit to get it in there you have no chance of getting it out yourself.");
                  
                }
                parer("q1Here let me tryq1host says and tries slowly pulling on the string. Your eyes go wide from the sensation! THEY ARE REALLY STUCK! It feels like your whole body is getting tugged on, all the way to the root of your shaft deep inside of host! It actually felt great...... but host didn't seem to think so.... q1Damn.... Well I hope you really like those because you are gonna have to sleep like that.q1 He says laying down and flipping the blanket over you. You get the feeling that last bead might have threw off his mood.... ");
                    character.sandbox.erect=false;
                clother();
                oper(system, "./toysend", "Try to get some sleep with the huge beads stuck in your mouth and throat");
              }, //function close
              "beadscum": function (character, system, action) {
                transer();
                parer("You didn't even realize it was happening before a sudden clench from host's balls try to fill you with their cum! It surges up your body suddenly reaching the beads plugging up the path! For one or two throbbing orgasmic moments the cum just gets stuck in place building up pressure! Its an unbearable sensation as you desperately feel the need to do anything to relieve that pressure!");
                system.setQuality("essence",character.qualities.essence+10 );
                oper(system, "./beadscumout", "Get those beads out now!");
              }, //function close
              "beadscumout": function (character, system, action) {
                transer();
                character.sandbox.reward=false;
              parer("Thankfully the problem resolves itself as the beads suddenly shoot out of you with suprising force like a cum powered cannon balls! Every spurt of cum after that feels like it has a much higher pressure than usual, your balls still trying to pump with greater force even after the beads have been dislodged! The entire experience is exhausting and all you can do is drool cum moaning softly to yourself as the orgasm fades away slowly.");
              parer("You almost don't notice as you get pulled back into your sheath and host covers up with the blanket...");
                  character.sandbox.erect=false;
                clother();
                oper(system, "./toysend", "Sleeeeeep......");
              }, //function close
              "bondage": function (character, system, action) {
                transer();
                //parptial only
                
                parer("");
                oper(system, "", "");
              }, //function close
           
             "fleshlight": function (character, system, action) {
                transer();
                 character.sandbox.toyused="fleshlight";
            
            
            if(character.sandbox.ignore){
                parer("host reaches into a drawer and pulls the fleshlight frome the store. q1Not as good as the real thing but should still be fun.q1He says and opens the top cap revealing a skin toned pair of lips. He fills it with some lube and then positions it right above you! There is something rather ominous knowing you are about to be swallowed up by the toy.");
                   oper(system, "./fleshlightstart", "Get ready....");
            }else{
              parer("host reaches into a drawer and pulls the fleshlight frome the store. q1Not as good as the real thing but should still be fun.q1He says and opens the top cap revealing a skin toned pair of lips. He fills it with some lube and then positions it right above you! There is something rather ominous knowing you are about to be swallowed up by the toy. q1Give me a nice hard throb...q1");
               oper(system, "./fleshlightstart", "Stiffen up and give an excited throb for him");
            }
                
                
               
              }, //function close
              "fleshlightstart": function (character, system, action) {
                transer();
                parer("The fleshlight suddenly decends over you, the silicion material spreading around you with a bit more flex and elasticity than flesh would. Not to say that it's a bad thing, it feels really nice! The oddest part is seeing the inside of the fleshlight as it swallows you up, but it only lasts a moment before the light vanishes. You entire world is reduced to simple senseation of tight slippery fleshlike material squeezing you from every direction!");
                
                
                
                oper(system, "./flenjoy", "Wiggle around enjoying it","./flstill","Stay still like a good cock");
              }, //function close
              "flenjoy": function (character, system, action) {
                transer();
                if(character.sandbox.limits.hasarms){
                  parer("You can't help but push away at the squishy walls as if trying to make more room! Even though you don't have to breath it is still so claustrophobic in there! When the walls suddenly start moving you lose any hope of holding them apart! You are rather suddenly shocked with pleasure as so much of your sensitive body gets rubbed at the same time!");
                  
                }else{
                  
                  parer("Without arms all you can really do is wiggle around helplessly within the toys tight squishy material! host is really taking his time to enjoy how tight it feels, just enjoying the sensation of you moving around trapped in there. Suddenly the walls around you slide up, leaving you shocked with pleasure as so much of your sensitive body gets rubbed at the same time! ");
                }
             
                oper(system,"./flfun","So slick and tight!");
              }, //function close
              "flstill": function (character, system, action) {
                transer();
                parer("You hold still and just enjoy the tight squish feeling all around you. It is a bit claustrophobic but at the same time feels so good. Like a tight hug that is pressing into every single inch of your body. Suddenly the walls around you slide up leaving you shocked with pleasure as so much of your sensitive body gets rubbed at the same time!");
               oper(system,"./flfun","So slick and tight!");
              }, //function close
              "flfun": function (character, system, action) {
                transer();
                parer("host begins picking up the pace, sliding the toy up and down your hot sensitive cock flesh. The way it didn't miss even a single inch of your skin is what really makes it so overwhelming! This toy is literally built for driving you mad with sensations! Each time it slides up and back down you feel more unstable, closer to that peak of absolute pleasure.");
                // Your body is more squishy since being repurposed as genitalia, and it 
                oper(system, "./flyay", "Just a bit more!");
              }, //function close
              
              "flyay": function (character, system, action) {
                transer();
                parer("SO TIGHT!");
                delay([
                  "CLOSER.....",
                  "up... down... up... down",
                  "FEELS SOOOOO GOOD!",
                  "./flcum"]);
                
                
             
              }, //function close
              "flcum": function (character, system, action) {
                transer();
                parer("You are completely lost to the sensations of how good this feels! You have no idea how long he has been thrusting you into the toy but suddenly the feeling from his you balls brings you back! They tighten up and begin pumping cum into your body! You can feel host's uerthra expand within you as the cum flows through! Spurt after spurt of cum leaves your mouth as the orgasm threatens to send you into blissful oblivion again!");
               system.animateQuality("essence", character.qualities.essence + 10);
                oper(system, "./flend", "So much cum....");
              }, //function close
              "flend": function (character, system, action) {
                transer();
                character.sandbox.reward=false;
                character.sandbox.toyused="";
                var flholder="";
                if(character.sandbox.limits.insheath>0){
                flholder="host's sheath decides you have had enough fun and quickly pulls you back in to its own tight embrace for the night.";
                 
               }
                if (character.sandbox.limits.cantalk) {
                  parer("You keep shooting cum into the toy for a bit. The next thing you feel is cold air as host pulls the fleshlight away, you are soaked with cum. Some still leaking every now and then as your balls weakly pump the last of it up your throat..... host takes a bit to catch his breath and then cleans you up."+flholder);
                }else{
                  parer("You keep shooting cum into the toy for a bit. The next thing you feel is cold air as host pulls the fleshlight away, you are soaked with cum. Some still leaking every now and then as your balls weakly pump the last of it up your urethra of a throat..... host takes a bit to catch his breath and then cleans you up."+flholder);
                  
                }
                   character.sandbox.erect=false;
                clother();
                oper(system, "./toysendtrans", "Time to get some sleep....");
              }, //function close
              "toysendtrans": function (character, system, action) {
                transer();
                system.doLink("./toysend");
              }, //function close
              "forgottensend": function (character, system, action) {
                
              if(rnd()>7){
                
                
                
                
                  system.doLink("./prtimeskipevent");
              }else{
                  system.doLink("./toysend");
              }
              
              }, //function close
              "toysend": function (character, system, action) {
                //sends to the transformation without putting ring on in case of ringcheck
                         transer(); 
       character.sandbox.eveningtease=false;
                parer(".......");
                delay(["....","zzzzzzz","transformation"],character.sandbox.eventspeed);
                  
              }, //function close
            "sextoyquestion": function (character, system, action) {
                transer();
                
               
                
                
                
                
                parer("");
                oper(system, "", "");
              } //function close
              
            }//actions close
          }//options close
  )
};


// Leika inspired idea
// 
// role reversal that swaps host and cock. 
// 
// dream secquence of true reversal That leads to a sort of dom cock route 
// you make descisions for the host during the day
// 
//
