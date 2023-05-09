undum.game.morning = {
  morning: new undum.SimpleSituation(
          "", {

            enter: function (character, system, from) {
              parer("<h1>"+((character.sandbox.headingholder == "Your") ? ("Your house" ):( "" + character.sandbox.curhost + "'s Home"))+"</h1>");
              //stealth route
               //Should never happen!
                   if (character.qualities.dayofweek>4){
                    
                  character.sandbox.weekend=true;
                  
                }else{
                  
                    character.sandbox.weekend=false;
                }
                  character.sandbox.daycut++;
               
              if(character.sandbox.clearok&&character.sandbox.daycut>2){
                console.log("content cut test " );
                if(character.sandbox.daycut==3){
                        system.clearContent(".contentcut"+(0));
                }
           
               
                 system.clearContent(".contentcut"+(character.sandbox.daycut-2));
              }
              
              if(character.sandbox.daycut>30){
                
                  system.clearContent(".contentcut"+(character.sandbox.daycut-30));
              }
                
                
                
            }, //function/enter close 
            actions: {
              "preenter": function (character, system, action) {
                
                
                
                
                 character.sandbox.toyholdery=false;
                   console.log("Perma check " +character.sandbox.perma );
                   console.log("mind check " +character.sandbox.mindchangetrigger );
                   
             
               character.sandbox.funvalue=(rnd(character.sandbox.funvaluebase));
                     if(character.sandbox.permaplugged||character.sandbox.permalock){
                     
                      character.sandbox.funvalue=111;
                   }
               
             
              
              
              system.setCharacterText(desc1(character, system));
               system.setQuality("day",character.qualities.day+1);
           
                system.setQuality("dayofweek", character.qualities.day%7);
                 if (character.qualities.dayofweek>4){
                    
                  character.sandbox.weekend=true;
                  
                }else{
                  
                    character.sandbox.weekend=false;
                }
              if(rnd(5)==1){
                
                character.sandbox.outmore=false;
              }
            
              character.sandbox.runedo.reversion=false;
              var breakout;
              breakout="./enter2";
              if((!character.sandbox.ring&&character.sandbox.stealth)&&!(character.sandbox.forgotten||character.sandbox.pillroute)){
                      
                
                character.sandbox.mind++;
                breakout="./permacock";
              }else if(character.sandbox.forgotten){
                //forgotten cock High harmony unlock. no arms or head, tried the pill once. 
                //forgotten. Friendly asks from host if you would let him make you his cock for a few days with the pill again.
                
                breakout="./forgottencock";
                //character.sandbox.stealth=true;
            }else if(character.sandbox.stealth){
              if(character.sandbox.pillroute){
                    character.sandbox.punish=false;
               
                 breakout="./pillpath";
                
              }else{
                breakout="./stealthenter";
                
              }
              
                
              }
              
             
              if(character.sandbox.skipto){
                  system.doLink(character.sandbox.skipto);
                
              }else if (character.sandbox.mind>0&&(!character.sandbox.debugrun)){
                var mindlist;
                mindlist=[];
                switch(character.sandbox.mind){
                 
                  default:
                  case 7:
                  mindlist.unshift("Your head is literally filled with memories of being his cock for YEARS!");
                  case 6:
                  mindlist.unshift("You wake up a bit more and everything snaps back to reality... But you can't for the life of you remember your own name anymore!");
                  case 5:
                  mindlist.unshift("You still remember the first time he called you a cock years ago!");
                  case 4:
                  mindlist.unshift("You remember when he use to just call you his penis.");
                  case 3:
                  mindlist.unshift("Probobly not. Unless he decides to name you some day...");
                  case 2:
                   mindlist.unshift("Your mind wanders a bit, hosts cock... didn't you have another name at some point?");
                  case 1:
                     mindlist.unshift("You start to wake up feeling comfortable and warm. You don't even try to move, almost like you had forgotten you could.");
                    
                  
                  
                }
               
                mindlist.push(breakout);
                 delay(
                mindlist,(character.sandbox.eventspeed/2)- (character.sandbox.mind*100));
                
              }else{
                
                 if(character.sandbox.debugrun){
                    system.doLink("./debugm");
                  
                }else{
                  system.doLink(breakout);
                  
                }
              }
             
              }, //function close
              "debugm": function (character, system, action) {
                transer();
                
                parer("checking stuff.");
                
                
                
                
                
                parer("has arms"+ character.sandbox.limits.hasarms);
                parer("has head"+character.sandbox.limits.cantalk);
                oper(system, "debug/enter", "back to debug");
              }, //function close
               "forgottencock": function (character, system, action) {
                transer();
                character.sandbox.forgotten=true;
                
                if(character.sandbox.forgottenfirst){
                  var uhoh=["It has been so long since you really talked with host","Basically forgotten, you are his cock","You will spend the rest of your life just being his penis",((character.sandbox.ws)?("Cumming and pissing is your only job now"):("Cumming is your only job now")), "You are just a simple cock...."];
                uhoh.push("./pillsenter");
                 delay(
                uhoh
                ,character.sandbox.eventspeed/2);
                }else{
                  
                  system.doLink("./pillsenter");
                }
                
              

              }, //function close
                "pillpath": function (character, system, action) {
                transer();
                character.sandbox.erect=false;
                clother();
                if(character.sandbox.tookpill){
                  character.sandbox.tookpill=false;
                  parer("It's morning again. You feels so soft and squishy inside host's sheath. It has been days since you were this lucid. Cocks can't move, only host can make you throb or twitch. He hasn't taken the pill in a few days so some of your mind is coming back but not your ability to move. It feels so strange knowing you have just been living inside his sheath for days as a real cock. You can still sort of remember it...");
                  oper(system, "./pillsenter", "Look forward to the day");
                }else{
                  if(character.sandbox.pillwearoff==0){
                    character.sandbox.stealth=false;
                    character.sandbox.pillroute=false;
                    parer("It's morning again. You feels so soft and squishy inside host's sheath. You stetch within host's sheath then realize with a shock you can move again! You wiggle a ton just making sure its real! It feels really good to be able to throb and twitch again! There is a small amount of loss though as you feel slightly less cock like this way.....");
                  oper(system, "./enter3", "Throb with excitement for the day!");
                    
                  }else{
                    parer("It's morning again. You feels so soft and squishy inside host's sheath. Trying to wiggly just makes you feel all tingly, the pills effects seem to be lasting longer and longer each time he takes them in close proximity. If you are lucky they might wear off before he decides to take another.");
                  oper(system, "./pillsenter", "Look forward to the day");
                    
                  }
                    
                  
                }
//                character.sandbox.forgotten=true;
//                var uhoh=["It's morning again","You can't move at all","Cocks can't move by themselves...","You may spend the rest of your life just being his penis",((character.sandbox.ws)?("Cumming and pissing is your only job now"):("Cumming is your only job now")), "You are just a simple cock...."];
//                uhoh.push("./stealthenter");
//                 delay(
//                uhoh
//                ,character.sandbox.eventspeed/2);
//                
                    
              }, //function close
             "permacock": function (character, system, action) {
                transer();
                var uhoh=["The ring is gone","host doesn't even know you are his cock","You may spend the rest of your life just being his penis",((character.sandbox.ws)?("Cumming and pissing is your only job now"):("Cumming is your only job now")), "You are just a simple cock...."];
                uhoh.push("./stealthenter");
                 delay(
                uhoh
                ,character.sandbox.eventspeed/2);
                

              }, //function close
              "pillsenter": function (character, system, action) {
        
              var aroused = ((character.sandbox.host.libido + 5) >rnd()  && !character.sandbox.nightfun);
                var sleepyhead=(character.sandbox.host.sleepy +5 ) >rnd() ;
              if (sleepyhead&&character.sandbox.ws) {
   
                if (aroused) {
                  character.sandbox.erect=true;
                     clother();
                  character.sandbox.morningvar="sleep";
                  //1-4/10 chance of him being horny, only if he didn't masturbate the night before. And he woke first.
                  system.doLink("./masturbatestealth");

                } else {
                   character.sandbox.morningvar="sleep";
                  system.doLink("./bathroomstealth");//he woke first not horny/masturbated night before.
                }//close aroused else
              }else if(aroused&&sleepyhead){
                character.sandbox.erect=true;
                   clother();
                 character.sandbox.morningvar="sleep";
                  //1-4/10 chance of him being horny, only if he didn't masturbate the night before. And he woke first.
                  system.doLink("./masturbatestealth");

                
              } else {

                /////////////////////you woke first OR WS disabled

            
                    // completely inside
                    if (aroused) {
  character.sandbox.morningvar="aroused";
                      parer(" You can't see anything due to the sheath completely covering your head. host's musky scent feels so natural to you now. Your entire body starts feeling warm and hard, enough so that you start slipping free from the warm sheath. host apparently is going to wake up with morning wood.");

                 

                      //You are outside of the sheath. BUT He is horny and not yet awake. Morning wood mode activate! 
                  
                  if(character.sandbox.forgotten){
                    
                     oper(system,"./bathroomstealth","Just enjoy being out of his sheath");
                  }else{
                     oper(system, "./bathroomstealth","Just enjoy being out of his sheath");
                  }
                       
                       

                    }else{
                      //NOT AROUSED IN THE MORNING
                parer(" You can't see anything due to the sheath completely covering your head. host's musky scent feels so natural to you now. Especially since you have been stuck inside his sheath all night. It is where you belong though.");

                     character.sandbox.morningvar="insheath";
                    //not aroused, stuck in sheath completely. He isn't awake.
                    
                    
                    oper(system, "./bathroomstealth", "Wait for host to need you like a good cock");


                    }//if aroused statment closed
                    //Both iffs end above due to having identicle conditional
                   
              }//woke first if statment close
               

              }, //function close
              "stealthenter": function (character, system, action) {
            transer();
            
              //if (character.qualities.tfstatus==13||(character.sandbox.host=="bret"&&character.qualities.tfstatus==9)){

              //Who woke first 
              //in or out of sheath
              //tfed more or not
              //

 system.setQuality("sus",(character.sandbox.acc*2)-character.sandbox.discovery );


              var aroused = ((character.sandbox.host.libido + 5) > rnd() && !character.sandbox.nightfun);
              
                var sleepyhead=(character.sandbox.host.sleepy + 5) > rnd();
              if (sleepyhead&&character.sandbox.ws) {
                
                
                
                
                
                //He woke first
                
                
                
                
                if (aroused) {
                  character.sandbox.erect=true;
                     clother();
                  character.sandbox.morningvar="sleep";
                  //1-4/10 chance of him being horny, only if he didn't masturbate the night before. And he woke first.
                  system.doLink("./masturbatestealth");

                } else {
                  character.sandbox.erect=false;
                     clother();
                   character.sandbox.morningvar="sleep";
                  system.doLink("./bathroomstealth");//he woke first not horny/masturbated night before.
                }//close aroused else
              }else if(aroused&&sleepyhead){
                character.sandbox.erect=true;
                   clother();
                 character.sandbox.morningvar="sleep";
                  //1-4/10 chance of him being horny, only if he didn't masturbate the night before. And he woke first.
                  system.doLink("./masturbatestealth");

                
              } else {

                /////////////////////you woke first OR WS disabled

            
                    // completely inside
                    if (aroused) {
                      character.sandbox.erect=true;
                         clother();
  character.sandbox.morningvar="aroused";
                      parer("You wake up surrounded by cloth in complete darkness, along with a mumbling sound from above you. Your entire body feels warm and hard, enough so you find it even more difficult to move around. host apparently is going to wake up with morning wood.");

                 

                      //You are outside of the sheath. BUT He is horny and not yet awake. Morning wood mode activate! 
                  
                  if(character.sandbox.forgotten){
                    
                     oper(system,"./happycock","Just enjoy being out of his sheath");
                  }else{
                     oper(system, "./masturbatestealth", "Try to mimic throbbing","./bathroomstealth","Wiggle around desperately","./happycock","Just enjoy being out of his sheath");
                  }
                       
                       
                  




                    }else{
                      //NOT AROUSED IN THE MORNING
                      character.sandbox.erect=false;
                         clother();
                    if (character.sandbox.limits.insheath==0) {
                      
                    }
                    parer("You wake up in the warmth of host's sheath. You can't see anything due to the sheath completely covering your head. host's musky scent overwhelms you, seems you even sweat like a cock. Especially since you have been stuck inside his sheath all night.");


                     character.sandbox.morningvar="insheath";
                    //not aroused, stuck in sheath completely. He isn't awake.
                    
                     
                    
                    
                    
                    
                    oper(system, "./bathroomstealth", "Stay still like a good cock", "./masturbatestealth", "Wiggle around despretely");





                  

                      
                    }//if aroused statment closed
                    //Both iffs end above due to having identicle conditional
                   
              }//woke first if statment close
              


              }, //function close
              "happycock": function (character, system, action) {
               character.sandbox.acc++;
               
               
                system.doLink("./bathroomstealth");
              }, //function close
              "enter2": function (character, system, action) {
                if (character.sandbox.reward||character.sandbox.punish) {
                  //for taking toys off.
                  if (character.sandbox.reward) {
                    system.doLink("./toyreward");
                  }else{
                      system.doLink("./toypunish");
                    
                  }
                  
                  
                  
                  
                }else{
                  //way to pull all normal mornings into one scene for a one off
                  if(character.sandbox.morninginter){
                  
                    system.doLink(character.sandbox.morninginter); // currently only used for horse cock rune
                    
                  }else{
                    
                         system.doLink("./enter3");
                  }
             
                  
                }
              
      
              
              }, //function close
              "enter3": function (character, system, action) {
               transer();
              //if (character.qualities.tfstatus==13||(character.sandbox.host=="bret"&&character.qualities.tfstatus==9)){

              //Who woke first 
              //in or out of sheath
              //tfed more or not
              //

              if(character.sandbox.harmonyunlockdown){
                  character.sandbox.nightfun=false;
                
              }


              var aroused = ((character.sandbox.host.libido +5 ) >rnd()  && (!character.sandbox.nightfun));
              var sleepyhead=(character.sandbox.host.sleepy +5 ) >rnd();
              
              if (sleepyhead&&character.sandbox.ws) {
                //He woke first
                if (aroused) {
                  character.sandbox.erect=true;
                     clother();
                   character.sandbox.morningvar="sleep";
                  //1-4/10 chance of him being horny, only if he didn't masturbate the night before. And he woke first.
                  system.doLink("./masturbate");

                } else {
                  character.sandbox.erect=false;
                     clother();
              character.sandbox.morningvar="sleep";
                  system.doLink("./bathroom");//he woke first not horny/masturbated night before.
                }//close aroused else
                }else if(aroused&&sleepyhead){
                  character.sandbox.erect=false;
                     clother();
                 character.sandbox.morningvar="sleep";
                  //1-4/10 chance of him being horny, only if he didn't masturbate the night before. And he woke first.
                  system.doLink("./masturbate");

                
              } else {
                //NOT sleepyhead
                /////////////////////you woke first OR WS disabled

                switch (character.sandbox.limits.insheath) {
                  case 0:
                    //no sheath
                    character.sandbox.erect=true;
                       clother();
                    if (character.sandbox.tfed) {
                      parer("During the night it seems you were transformed further by the runes. " + character.sandbox.tfholder);
                    }
                    alt = (character.sandbox.host.host == "bret") ? "front leg" : "arm";
                    
                    if(character.sandbox.enjoyit){
                      
                         parer("You wake up feeling rather comfortable, head on a pillow and host's #alt wraped around you as one would a lover.You then blush deeply remembering you are attached to his groin and your legs have basically merged with his massive balls. From the snoreing you can assume host is still fast asleep");
                    }else{
                      
                           parer("You wake up feeling rather comfortable, head on a pillow and host's #alt wraped around you as one would a lover. It almost seems nice till you remember you are attached to his groin and your legs have basically merged with his massive balls. From the snoreing you can assume host is still fast asleep");
                    }
               


                    // Type 1 TF so minimal TF
                    oper(system, "./snuggle", "Gently wake him up", "./bathroom", "Let him sleep a bit longer");
                    alt = "";
                    break;
                  case 1:
                      
                    // head pokes out
                    if (!aroused) {
                       character.sandbox.erect=false;
                          clother();
                      if (character.sandbox.tfed) {
                        parer("During the night it seems you were transformed further by the runes. " + character.sandbox.tfholder);
                      }
                      parer("You wake up in the warmth of host's sheath" + ((character.sandbox.nightfun) ? ", all around you is moist and sticky from the nights fun" : "") + ".\
                                                It's opening clamped tightly around your neck like some kind of bizzare collar. From the snoreing you can assume host is still fast asleep");

                      //head pokes out and host is asleep he is also not horny
                      oper(system, "./bathroom", "Wait patiently for him to wake up", "./masturbate",( (character.sandbox.limits.cantalk)?("Call out to try and wake him"):("Wiggle around desperately trying to wake him")));


                     character.sandbox.morningvar="insheath";
                      break;
                    }//if night mastur close
                  case 2:
                    // completely inside
                    if (aroused) {
 character.sandbox.erect=true;
    clother();
                      parer(
                              "You wake up surrounded by cloth in complete darkness, along with a mumbling sound from above you. Your entire body feels warm and hard, enough so you find it a bit difficult to move around. host apparently is going to wake up with morning wood.");

                      if (character.sandbox.tfed) {
                        parer("During the night it seems you were transformed further by the runes. " + character.sandbox.tfholder);
                      }


                      //You are outside of the sheath. BUT He is horny and not yet awake. Morning wood mode activate! 
                      if (character.sandbox.limits.hasarms) {

                        oper(system, "./masturbate", "Start without him", "./bathroom", "Relax and wait to see if it goes away");
                       character.sandbox.morningvar="started";
                      } else {

                        oper(system, "./masturbate", ((character.sandbox.limits.cantalk)?"Yell out to wake him so he will masturbate you":"Wiggle around desperately needing to be rubbed"), "./bathroom", "Be a good cock and wait for him to wake up");
                        character.sandbox.morningvar="aroused";
                      }




                      break;
                    }//if aroused statment closed
                      //Both iffs end above due to having identicle conditional
                      
                      if (character.sandbox.tfed) {
                        alt = ("During the night it seems you were transformed further by the runes. " + character.sandbox.tfholder);
                      }
                       character.sandbox.erect=false;
                      clother();
                      parer("#alt <p>You wake up in the warmth of host's sheath" + ((character.sandbox.nightfun) ? ", all around you is moist and sticky from the nights fun" : "") + ". You can't see anything due to the sheath completely covering your head. host's musky scent overwhelms you, seems you even sweat like a cock. Especially since you have been stuck inside his sheath all night.");


                      character.sandbox.morningvar = "insheath";
                      //not aroused, stuck in sheath completely. He isn't awake.






                      oper(system, "./bathroom", "Relax and let him wake up naturally", "./masturbate", "Wiggle around and try to wake him");
                      break;

                  }//switch close

                }//woke first if statment close


clother();
              }, //function close
              "interhorse": function (character, system, action) {
                character.sandbox.morninginter=false;
                 character.sandbox.erect=true;
                
                 clother();
                //area for special morning events
            transer();
            parer("You feel very unsual this morning, host's sheath feels MUCH tighter than usual... As host starts waking up and you slowly slip free, it becomes VERY obvious something has changed! You just keep extending! You must be over a foot long now! host even reaches down to give you a rub and stops in confusion. A few rubs and then pats to feel you new size wakes him right up... q1Hey... wha... OH MY! HORSE COCK! That's new!!!! Have you been messing around with those runes!? This is going to take some getting use to....q1 He says looking down at you a bit perplexed.");
            character.sandbox.morningvar="horse";
            
            oper(system,"./masturbate", "Throb desperately needing to be rubbed!" );
          }, //function close
              "toyreward": function (character, system, action) {
                transer();
                character.sandbox.reward=false;
                switch (character.sandbox.toyused) {
                  case "vibe":
                     character.sandbox.erect=true;
                     clother();
                  parer("You spend the night drifting in and out of sleep, each time waking up the vibrations! You might as well be nothing but a cum drooling cock by the end of the night. Toward morning host seems to be moaning in his sleep and you suddenly get much harder, what wakes you up though is the sudden flow of cum shooting up your throat!"); 
                  parer("After a night of teasing it feels so good to finally feel relief! You practically treasure every spurt of white sticky cum as it leaves you... Even after that the ring still sends another shiver of sensation through your over sensitive body, this time enough to wake up host! He reaches down and quickly pulls the ring off of you.... q1Geeze that wet dream mode works better than I expected... Hehe Hope you had fun too!q1 He says giving you a rub, no idea what you went through all night long!");
                  if(character.sandbox.ws){
                  
                  system.doLink("./toysthenbathroom");
                }else{
                  parer("host gives you a rub and continues with his other bathroom deeps. He is thankfully quick about it leaving you to wait for him to finish brushing his teeth.");
                  
             
                  
                  
                  oper(system, "aftermorning", "Carry on with the day");
                }
                  
                  break;
                  case "plug":
                     character.sandbox.erect=true;
                        clother();
                    if(character.sandbox.ignore){
                    
                        parer("You spend the night drifting in and out of sleep, each time waking up to the huge rod stuffed down your throat! It isn't that it is uncomfortable, more so distracting. There is a certain embarrassing excitment that comes from having your throat stuffed with something that is meant to be inserted into a penis... Finally host wakes up and you expect him to pull the penis plug out but he yawns and heads for the bathroom instead!");  
                         if (character.sandbox.ws) {
                           parer("He brushes his teeth for a bit then turns around and pointing you right at the toilet, you know what is coming... but the hollow plug is still lodged inside you!");
                        oper(system, "./plugbathroom", "Wait helplessly for him to start the flow");
                      }else{
                        parer("He continues with his moring routine leaving the plug in place the entire time, every now and then enjoying the sound of the metal ring clinking as he walks. After he finishes brushing his teeth he FINALLY grabs the ring and pulls. You get dragged out of his sheath all the way before it finally slips out.");
                        
                        
                        if (character.sandbox.limits.cantalk) {
                      
                          oper(system, "./plugnotalk", "Try to say something","./plugout","Gasp and rub your urethra/throat");
                        }else{
                          
                           oper(system, "./plugout", "Throb with relief finally free of that plug");
                        }
                       
                      }
                      
                     
                      // grabs the ring dangling from the plug in your mouth! He pulls slowly 
                    }else{
                       character.sandbox.erect=true;
                          clother();
                      //NOT the ignore scenes
                      parer("You spend the night drifting in and out of sleep, each time waking up to the huge rod stuffed down your throat! It isn't that it is uncomfortable, more so distracting. There is a certain embarrassing excitment that comes from having your throat stuffed with something that is meant to be inserted into a penis... Finally host wakes up and you expect him to pull the penis plug out but he yawns and heads for the bathroom instead!q1You can keep sucking on that plug for a while longer, it kind of feels goodq1");  
                         if (character.sandbox.ws) {
                           
                           if (character.sandbox.limits.cantalk) {
                           parer("He brushes his teeth for a bit then turns around and pointing you right at the toilet, you know what is coming... but the hollow plug is still lodged inside you! q1I don't even have to ask you to open your mouth now nice!q1");
                          
                        }else{
                          parer("He brushes his teeth for a bit then turns around and pointing you right at the toilet, you know what is coming... but the hollow plug is still lodged inside you! q1You just relax and let the plug do all the workq1");
                          
                        }
                           
                        oper(system, "./plugbathroom", "Wait helplessly for him to start the flow");
                      }else{
                        parer("He continues with his moring routine leaving the plug in place the entire time, every now and then enjoying the sound of the metal ring clinking as he walks. After he finishes brushing his teeth he FINALLY grabs the ring and pulls. You get dragged out of his sheath all the way before it finally slips out.");
                        if (character.sandbox.limits.cantalk) {
                      
                          oper(system, "./plugnotalk", "Try to say something","./plugout","Gasp and rub your urethra/throat");
                        }
                        oper(system, "./plugout", "Throb with relief finally free of that plug");
                      }
                      
                     
                      
                      
                    }
                    
                    
                    
                    break;
                  case "condomcum":
                    
    if (character.sandbox.ignore) {
                         parer("For being stuck in a condom filled with cum all night long, you slept surprisingly well! Only waking up to something feeling and rubbing over your body through the thick sticky sea of white. You get angled downward as the condom is slipped off your body. You feel the need to gasp as you hit fresh air for the first time in hours! host washes you off without even really looking at you.");
                    }else{
                           parer("For being stuck in a condom filled with cum all night long, you slept surprisingly well! Only waking up from the sensation of something feeling and rubbing over your body through the thick sticky sea of white. You get angled downward as the condom is slipped off your body. Even though you don't need to breath, you feel the need to gasp as you hit fresh air for the first time in hours!q1You must really love my cum to want to stay in it all night!q1.");
                      
                    }
                          system.doLink("./toysalreadyinbathroom");


                    break;
                  case "beads":
                     character.sandbox.erect=true;
                     clother();
                    parer("You are jostled awake by a sudden pulling sensation followed by a LOUD pop! You really can't imagine a more startling way to wake up, having something the size of a melon pulled out of your mouth! Your jaw isn't nearly as sore as it should be after having it stuck in there all night thankfully.");
                    if (character.sandbox.ignore) {
                      
                      parer("host doesn't say a word to you after pulling it out. Just letting out a moan and then slowly pulling out the remaingin beads one by one. It feels like such a relief to be able to close your mouth finally! He gives you a few rubs before continuing with his day.");
                      
                    }else{
                      parer("q1Finally.... Sorry just though it might be easier to pull out while you were asleep.q1 He says and then continues to pull on the string. Pop... pop.... pop pop pop! You nearly go cross eyed as he pulls the remaining beads from your throat! It feels bizarrly good but in a sort of relief way. It's hard to decide if you want to go back to sleep or beg for him to jerk you off after that sensation!");
                      
                    }
                  if(character.sandbox.ws){
                  
                  system.doLink("./toysthenbathroom");
                }else{
                  parer("host gives you a rub and continues with his other bathroom deeps. He is thankfully quick about it leaving you to wait for him to finish brushing his teeth.");
                  
             
                  
                  
                  oper(system, "aftermorning", "Carry on with the day");
                }
                    break;
                  default:
                       oper(system, "aftermorning", "Carry on with the day");
                }//End of RND switch
                
                /*
                 
                 all exit into 
                          aftermorning
                 
                 
                 
                 */
                
                
              }, //function close
              "toypunish": function (character, system, action) {
                transer();
                 character.sandbox.punish=false;
                switch (character.sandbox.toyused) {
                  case "cage":
                    parer("You wake up almost in a panic as you feel metal bars around your body instead of the normal warm comfrotable sheath you are so use to! You can't even see out the end of the sheath anymore. There is just something so wrong with being turned into a cock only to get trapped in a chastity cage! Eventually you can feel host wake up and start moving around, trapped in his sheath you can't see a darn thing!");
                    character.sandbox.permalock=true;
                    if((character.sandbox.wantoutofcage&&rnd()>5)||rnd()>8){
                         character.sandbox.permalock=false;
                      
                    }
                    if(character.sandbox.permalock){
                      
                      oper(system, "./cagebeg", "Beg to be let out of the cage"); 
                    }else{
                       if (character.sandbox.limits.cantalk) {
                      
                      oper(system, "./cagebeg", "Beg to be let out of the cage","./cageremove","Try to be a good cock");                      
                    }else{
                      oper(system,"./cageremove","Try to be a good quiet cock");
                      
                    }
                      
                    }
                   
                    
                    
                    
                    break;
                  case "plug":
if(character.sandbox.ignore){
                    
                        parer("You spend the night drifting in and out of sleep, each time waking up to the huge rod stuffed down your throat! It isn't that it is uncomfortable, more so distracting. There is a certain embarrassing excitment that comes from having your throat stuffed with something that is meant to be inserted into a penis... Finally host wakes up and you expect him to pull the penis plug out but he yawns and heads for the bathroom instead!");  
                         if (character.sandbox.ws) {
                           parer("He brushes his teeth for a bit then turns around and pointing you right at the toilet, you know what is coming... but the hollow plug is still lodged inside you!");
                        oper(system, "./plugbathroom", "Wait helplessly for him to start the flow");
                      }else{
                        
                         character.sandbox.permaplugged=true;
                if((character.sandbox.wantplugout&&rnd()>3)||rnd()==10){
                    character.sandbox.permaplugged=false;
                }
                
              
                if(character.sandbox.permaplugged){
                  
                   parer("He continues with his moring routine leaving the plug in place the entire time, every now and then enjoying the sound of the metal ring clinking as he walks.");
                   if (character.sandbox.limits.cantalk) {
                  oper(system, "./permaplugnotalk", "Try to say something","./plugnotout","Struggle with the plug");
                  
                  
                   }else{
                           oper(system,"./plugnotout","Struggle with the plug");
                     
                   }
                }else{
                        parer("He continues with his moring routine leaving the plug in place the entire time, every now and then enjoying the sound of the metal ring clinking as he walks. After he finishes brushing his teeth he FINALLY grabs the ring and pulls. You get dragged out of his sheath all the way before it finally slips out.");
                        if (character.sandbox.limits.cantalk) {
                      
                          oper(system, "./plugnotalk", "Try to say something","./plugout","Gasp and rub your urethra/throat");
                        }else{
                           oper(system, "./plugout", "Throb with relief finally free of that plug");
                          
                        }
                       
                      }
                      
                      }
                      // grabs the ring dangling from the plug in your mouth! He pulls slowly 
                    }else{
                      
                      //NOT the ignore scenes
                      parer("You spend the night drifting in and out of sleep, each time waking up to the huge rod stuffed down your throat! It isn't that it is uncomfortable, more so distracting. There is a certain embarrassment that comes from having your throat stuffed with something that is meant to be inserted into a penis... Finally host wakes up and you expect him to pull the penis plug out but he yawns and heads for the bathroom instead! q1You can keep sucking on that plug for a while longer, maybe it will help you learn your lessonq1");  
                         if (character.sandbox.ws) {
                           
                           if (character.sandbox.limits.cantalk) {
                           parer("He brushes his teeth for a bit then turns around and pointing you right at the toilet, you know what is coming... but the hollow plug is still lodged inside you! q1I don't even have to ask you to open your mouth now nice!q1");
                          
                        }else{
                          parer("He brushes his teeth for a bit then turns around and pointing you right at the toilet, you know what is coming... but the hollow plug is still lodged inside you! q1You just relax and let the plug do all the work since I can't trust you to do it right.q1");
                          
                        }
                           
                        oper(system, "./plugbathroom", "Wait helplessly for him to start the flow");
                      }else{
                        
                        parer("He continues with his moring routine leaving the plug in place the entire time, every now and then enjoying the sound of the metal ring clinking as he walks. After he finishes brushing his teeth he FINALLY grabs the ring and pulls. You get dragged out of his sheath all the way before it finally slips out.");
                        
                        
                        if (character.sandbox.limits.cantalk) {
                      
                          oper(system, "./plugnotalk", "Try to say something","./plugout","Gasp and rub your urethra/throat");
                        }else{
                                  oper(system, "./plugout", "Throb with relief finally free of that plug");
                          
                        }
                
                      }
                      
                     
                      
                      
                    }



                    break;
                  case "condomcum":
                    
                    if (character.sandbox.ignore) {
                         parer("For being stuck in a condom filled with cum all night long, you slept surprisingly well! Only waking up to something feeling and rubbing over your body through the thick sticky sea of white. You get angled downward as the condom is slipped off your body. Even though you don't need to breath, you feel the need to gasp as you hit fresh air for the first time in hours! host washes you off without even really looking at you.");
                    }else{
                           parer("For being stuck in a condom filled with cum all night long, you slept surprisingly well! Only waking up from the sensation of something feeling and rubbing over your body through the thick sticky sea of white. You get angled downward as the condom is slipped off your body. Even though you don't need to breath, you feel the need to gasp as you hit fresh air for the first time in hours! q1That's better, hope you learned your lesson after that....q1 he says as he washes the rest of the cum off of you.");
                      
                    }
                    
                    
                  
                   
      system.doLink("./toysalreadyinbathroom");

                    break;
                  case "condompiss":
                   
                    if (character.sandbox.ignore) {
                      parer("For being stuck in a condom filled with piss all night long, you slept surprisingly well! Only waking up from the feeling of something rubbing over you through the sea of piss. You get angled downward as the condom is slipped off your body. Even though you don't need to breath, you feel the need to gasp once exposed to fresh air for the first time in hours! host washes you off without even really looking at you. Even after getting clean the only thing you can taste is his piss.");
                    } else {
                      parer("For being stuck in a condom filled with piss all night long, you slept surprisingly well! Only waking up from the sensation of something feeling and rubbing over your body through the sea of piss. You get angled downward as the condom is slipped off your body. Even though you don't need to breath, you feel the need to gasp once exposed to fresh air for the first time in hours! q1That's better, hope you learned your lesson after that....q1 he says as he washes the rest of the piss off of you.");

                    }

                    system.doLink("./toysalreadyinbathroom");

                  
                    break;
                case "beads":
                  //wake punish does not have head
                    parer("You are jostled awake by a sudden pulling sensation followed by a LOUD pop! You really can't imagine a more startling way to wake up, having something the size of a melon pulled out of you! Your slit of a mouth isn't nearly as sore as you would have expected..");
                    if (character.sandbox.ignore) {
                      
                      parer("host doesn't say a word to you after pulling it out. Just letting out a moan and then slowly pulling out the remaingin beads one by one. It feels like such a relief to finally have those beads out of you!");
                      
                    }else{
                      parer("q1Finally.... Damn that feels better. Unless you want more nights like that you better behave.q1 He says and then continues to pull on the string. Pop... pop.... pop pop pop! You nearly go cross eyed as he pulls the remaining beads from your throat! It feels bizarrly good but in a sort of relief way. It's hard to decide if you want to go back to sleep or beg for him to jerk you off after that sensation!");
                      
                    }
                  if(character.sandbox.ws){
                  
                  system.doLink("./toysthenbathroom");
                }else{
                  parer("host gives you a rub and continues with his other bathroom deeps. He is thankfully quick about it leaving you to wait for him to finish brushing his teeth.");
                  
             
                  
                  
                  oper(system, "aftermorning", "Carry on with the day");
                }
                  default:
                }//End of RND switch





                
              }, //function close
            
              "cagebeg": function (character, system, action) {
                transer();
                 character.sandbox.erect=false;
                 clother();
                parer("He might have put you in a cage but he clearly failed to do anything to stop you from talking! You are in a cage in a sheath, and shrunk in size so it is a bit hard for him to hear you at first. Still you beg and plead with him to let you out of the chastity cage. You tell him you have learned your lesson and will try never to do it again!");
                if(character.sandbox.permalock){
                    if (character.sandbox.ignore) {
                    parer("host just taps on the cage a few times like one would on a fish tank. q1Damn I really should have bought the one with the urethral firehose thing. Now shoosh, cocks don't talk.q1 He says");
                  
                }else{
                parer("host just taps on the cage a few times like one would on a fish tank. q1Stop that unless you want to stay in there all day! Making me consider buying that one with the urethral tube thing.q1 He says and continues getting ready for the day while you stay trapped in his sheath/");
                  
                }
                
                     if(character.sandbox.ws){
                  
                  system.doLink("./toysthenbathroom");
                }else{
          
                  
                  
                  oper(system, "aftermorning", "Carry on with the day");
                }
                }else{
                if (character.sandbox.ignore) {
                  parer("host just taps on the cage a few times like one would on a fish tank. q1Damn I really should have bought the one with the urethral firehose thing. Now shoosh, cocks don't talk.q1 He says");
                  oper(system, "./cageremove", "Stay silent");
                }else{
                  parer("host just taps on the cage a few times like one would on a fish tank. q1Stop that unless you want to stay in there all day! Making me consider buying that one with the urethral tube thing. Are you going to be good now?q1 He asks");
                    oper(system, "./cageremove", "Tell him you will try to do better","./cageremove","Stay silent");
                }
                }
                
                
              }, //function close
              "cageremove": function (character, system, action) {
                transer();
                parer("The silience drags on concerningly long as you don't hear anything from host for a good five mintues after. Finally there is a CLICK noise from below you! Moments later the metal rings start sliding out of the sheath pulling you with them a bit until you are completely free of it! host gives you a pretty strong rubbing over your soft body. It feels WAY better than it usually does! Not even in an arousing way (or at least not just). It just feels good being touched again!");
                if (!character.sandbox.ignore) {
                  parer("q1That's so much better.... You better not cause more trouble, or we might have to see just how long that thing can stay on youq1 He warns and stands up.");
                }
                if(character.sandbox.ws){
                  
                  system.doLink("./toysthenbathroom");
                }else{
                  parer("host gives you a rub and continues with his other bathroom tasks. He is thankfully quick about it leaving you to wait for him to finish brushing his teeth.");
                  
             
                  
                  
                  oper(system, "aftermorning", "Carry on with the day");
                }
                
                
              }, //function close
              "cagedpiss": function (character, system, action) {
            transer();
            parer("Rather than getting you out of the cage he simply bends down a bit and sort of points you at the toilet! There is a bit of a metal part above your slit that seems built to help direct the piss a bit. There is hardly a moment to complain before a rush of urine surges through you body heading for your mouth, even after all this time the feeling is still incredibly bizarre! Even stranger since you are trapped in a cage!");
         oper(system, "./bathroom2cage", "Be a good cock and help direct his piss");
          }, //function close
              "toysalreadyinbathroom": function (character, system, action) {
                 if (character.sandbox.ws) {
                      parer("After that he turns around and clearly intends to finish his bathroom tasks as he points you at the toilet! You have little choice but to comply with your role as his cock. There is hardly a moment to complain before a rush of urine surges through you body heading for your mouth, even after all this time the feeling is still incredibly bizarre!");
                      oper(system, "./bathroom2", "Be a good cock and help direct his piss", "./disobey", "Wince and try to hold back the flow");
                    } else {
                      
                 
                  parer("host gives you a rub and continues with his other bathroom deeps. He is thankfully quick about it leaving you to wait for him to finish brushing his teeth.");
                  
             
                  
                  
                  oper(system, "aftermorning", "Carry on with the day");
                    }
              }, //function close
              "plugbathroom": function (character, system, action) {
                //already checked for WS
                
                parer("That familiar pee shiver shoots up through your urethra all the way to your mouth but it feels all wrong when the flow starts! The pressure is there but stops half way up your body when it enters the plug! It's is almost a shock to see the stream of piss shoot from your mouth without even feeling it! So you don't end up tasteing it but it also feels like he can't even trust you to direct his piss! The tube ensureing a perfect stream without letting you do the one job your body is meant for now!");
                character.sandbox.permaplugged=true;
                if((character.sandbox.wantplugout&&rnd()>3)||rnd()==10){
                    character.sandbox.permaplugged=false;
                }
                
                
                if(character.sandbox.permaplugged){
                  
                  parer("The flow soon ends and he grips you and gives a strong shake making sure the entire plug is empty before stepping away from the toilet. He is leaving the plug lodged in place!");
                   if (character.sandbox.limits.cantalk) {
                  oper(system, "./permaplugnotalk", "Try to say something","./plugnotout","Struggle with the plug");
                  
                  
                   }else{
                           oper(system,"./plugnotout","Struggle with the plug");
                     
                   }
                }else{
                     parer("The flow soon ends and he FINALLY grips the plugs ring and gives a nice slow pull! It doesn't want to leave its tight home in your throat but eventually it slips free rather suddenly!");
                       if (character.sandbox.limits.cantalk) {
                                    oper(system, "./plugnotalk", "Try to say something","./plugout","Gasp and rub your urethra/throat");
                  
                }else{
   oper(system,"./plugout","Gasp and rub your urethra/throat");
                  
                }
                }
             
                
           
                
                
              }, //function close
              "permaplugnotalk": function (character, system, action) {
            transer();
            parer("You try to say something anything to get him to take the plug out but you just can't with it stuck inside you! No amount of struggleing or pulling on your part is going to dislodge it either! Until host decides to take it back out you are stuck with it and effectivly muted.");
            
               if(character.sandbox.limits.hasarms){
              
                  parer("Even with your arms free you can't get enough leverage to pull it hard enough to free the thing from your mouth! It has a wider part lodged inside your middle that is just too large to slip back up your throat with your own strength alone. host just smiles as he hears the ring clink a few times as you fiddle with it. q1That's not coming out till I decide it does.q1 He says with a snicker.");
            }else{
              parer("You can't even wiggle effectivly with the plug keeping your body straight! It has a wider part lodged inside your middle that is just too large to slip back up no matter how hard you try. host just smiles as he feels you struggleing a few times as you fiddle with it.");
              
            }
          oper(system, "aftermorning", "Continue with the day constantly sucking on the plug");
          }, //function close
          "plugnotout": function (character, system, action) {
            transer();
            if(character.sandbox.limits.hasarms){
              
                  parer("Even with your arms free you can't get enough leverage to pull it hard enough to free the thing from your mouth! It has a wider part lodged inside your middle that is just too large to slip back up your throat with your own strength alone. host just smiles as he hears the ring clink a few times as you fiddle with it. q1That's not coming out till I decide it does.q1 He says with a snicker.");
            }else{
              parer("You can't even wiggle effectivly with the plug keeping your body straight! It has a wider part lodged inside your middle that is just too large to slip back up no matter how hard you try. host just smiles as he feels you struggleing a few times as you fiddle with it.");
              
            }
        
           oper(system, "aftermorning", "Continue with the day constantly sucking on the plug");
          }, //function close
              "plugnotalk": function (character, system, action) {
                transer();
                
                if (character.sandbox.ignore) {
                  parer("You cough a few times and try to say something but get a shock as nothing comes out!!!! You try to yell or say anything but there is just no sound! host doesn't even notice your discomfort, in fact he almost seems relieved as you finally start acting like a perfectly quiet penis. There is a tiny fear you have lost the ability to talk for good but after about an hour your throat starts to feel better and your voice does come back... this time.");
                }else{
                    parer("You cough a few times and try to say something but get a shock as nothing comes out!!!! You try to yell or say anything but there is just no sound! q1Heh, well you have been sucking on a cock plug all night. Just give it a bit before you panicq1 he says. There is a tiny fear you have lost the ability to talk for good but after about an hour your throat starts to feel better and your voice does come back... this time.");
                  
                }
                
              oper(system, "aftermorning", "Continue with the day");
              }, //function close
              "plugout": function (character, system, action) {
                transer();
                parer("Your throat or urethra feels surprisingly empty without something stretching it open. You almost wonder what it would be like to have that in your throat all day long... ");
                oper(system, "aftermorning", "Continue with the day");
              }, //function close
              "toysthenbathroom": function (character, system, action) {
   
                parer("After a good stretch he starts walking straight to the bathroom. You have little choice but to comply with your role as his cock as he points you at the toilet. There is hardly a moment to complain before a rush of urine surges through you body heading for your mouth, the feeling is incredibly bizarre!");
 oper(system, "./bathroom2", "Be a good cock and help direct his piss", "./disobey", "Wince and try to hold back the flow");
              }, //function close
              "bathroomstealth": function (character, system, action) {
                transer();

                var bath1 = "";
                var bath2 = "";
                var bath3 = "";
                if (character.sandbox.morningvar == "sleep") {

                  //woke up IN bathroom
    //#piss wake up to pissing
    if(character.sandbox.pissaddiction>6){
      bath1 = ("An incredibly odd sensation suddenly wakes you, almost like a pressure spreading up your body from the inside. Once you realize WHERE you are everything starts to make sense, below you is the toilet bowl! He begins putting more pressure on his bladder as a blast of piss torrents out your mouth.... What a way to wake up! You are just overwhelmed by how good it feels and tastes!");

      
    }else{
            bath1 = ("An incredibly odd sensation suddenly wakes you, almost like a pressure spreading up your body from the inside. Once you realize WHERE you are everything starts to make sense, below you is the toilet bowl! He begins putting more pressure on his bladder as a blast of piss torrents out your mouth.... What a way to wake up!");

      
    }
                  
                   

                  
             


                } else {//sleep check closed 
                 
                  //already awake.... host is alseep in bed and about to wake up  MAYBE no watersports
                  switch (character.sandbox.host.host) {
                    case "keagen":

                      alt = "how quantum safety measures can kiss his ass";

                      break;
                    case "bret":
                      alt = "refusing to mail coconuts to government buildings";

                      break;
                    default:
                      alt = "swearing he didn't eat the last of the ice cream";

                  }

                  if(character.sandbox.pillroute||character.sandbox.forgotten){
                      bath1 = "You can hear host mumbling something about something in his sleep, before finally giving a short yawn and wakes up. He doesn't pay you any attention almost as if he has fogotten you are there. ";
                    
                    
                  }else{
                    
                    bath1 = "You can hear host mumbling something about #alt in his sleep, before finally giving a short yawn and wakes up. He still has no idea you are between his legs.";
                    
                  }
                    
                  


            
bath2 = "";

                  //used to pee with
                  if(character.sandbox.pissaddiction>6){
                       bath3 = "Eventually he stretches and gets up, however he is walking straight to the bathroom! There is hardly a moment to prepare yourself before a rush of urine surges through you body heading for your mouth, the feeling is incredibly bizarre! It is so addictive being used to piss with. So wrong but you still love every second of it! ";
                  }else{
                         bath3 = "Eventually he stretches and gets up, however he is walking straight to the bathroom! You have little choice but to comply with your role as his cock as he points you at the toilet. There is hardly a moment to prepare yourself before a rush of urine surges through you body heading for your mouth, the feeling is incredibly bizarre!";
                    
                  }
             





                }

                // +character.sandbox.tfresponse


                if (character.sandbox.ws) {
                  parer(bath1 + bath2 + bath3);
                  if(character.sandbox.pillroute||character.sandbox.forgotten){
                    
                    oper(system, "./bathroom2", "Try to enjoy it","./letithappen","Just let it happen");
                  }else{
                    oper(system, "./bathroom2", "Try to enjoy it", "./disobey", "Try to make him miss!");
                  }
                  
                } else { // No watersports
                  bath3 = "Eventually host gets up giving you a rub and heads for the bathroom. He is thankfully quick about it and afterward\
                           just goes about brushing his teeth.";
                  parer(bath3);
                  oper(system, "aftermorning", "Continue with the day");
                }
              }, //function close
              
              "bathroom": function (character, system, action) {
                
                // use this section for the shower scene
                var scener="bathroom";
                 character.sandbox.scenerexit="aftermorning";
                                if(character.sandbox.ch2&&character.sandbox.host.scenes[scener]){
  
                   system.doLink((character.sandbox.host+"host"+scener+"/scene1"));
                }else{
                 
                  
                   system.doLink("./bathroomalt");
                }
                
                
               
              }, //function close
              
              "bathroomalt": function (character, system, action) {
                transer();
                var bath1 = "";
                var bath2 = "";
                var bath3 = "";
                 if(!character.sandbox.ignore){
                //edited later on by .ignore
                if (character.sandbox.morningvar == "sleep") {
                 
                  //woke up IN bathroom
                  if (!character.sandbox.limits.cantalk) {
                    
                        //#piss wake up to pissing
                        
                        if(character.qualities.day>10){
                              bath1 = ('An incredibly odd sensation suddenly wakes you, almost like a pressure spreading up your body from the inside. Once you realize WHERE you are everything starts to make sense, below you is the toilet bowl! <br> "Good morning, guess you are pretty use to this by now" host says and begins putting more pressure on his bladder as a blast of piss torrents out your mouth.... What a way to wake up...');
                        }else{
                              bath1 = ('An incredibly odd sensation suddenly wakes you, almost like a pressure spreading up your body from the inside. Once you realize WHERE you are everything starts to make sense, below you is the toilet bowl! <br> "Sorry just figured I didn\'t need to wake you considering your current condition." host says and begins putting more pressure on his bladder as a blast of piss torrents out your mouth.... What a way to wake up...');

                        }
                
                    if (character.sandbox.tfed) {
                      bath2 = ("You barely have time to notice a few changes took place during the night. " + character.sandbox.tfholder + "<p>" + character.sandbox.tfresponse);
                    }//tfed check closed

                  } else {// cantalk check false closed
    //#piss wake up to pissing
                    bath1 = ('"Hey wake up!" host says out of nowhere! Rather abruptly you are given a slight shake to wake you up! It\'s about as jolting as being knocked out of a bed! But it doesn\'t take long to figure out why host needs you awake, you are currently in the bathroom and pointing at the toilet!<p>"Open your mouth a bit more I need to piss." He says almost as if this were a perfectly normal thing to request.');

                    if(character.sandbox.tfed) {
                      bath2 = ("<p>During the night it seems you were transformed further by the runes. " + character.sandbox.tfholder + "<p>" + character.sandbox.tfresponse);
                    }//tfed check close
                  }// cantalkcheck fully true closed


                } else {//sleep check closed 
                  alt = "";
                  //already awake.... host is alseep in bed and about to wake up  MAYBE no watersports
                  switch (character.sandbox.host.host) {
                    case "keagen":

                      alt = "how quantum safety measures can kiss his ass";

                      break;
                    case "bret":
                      alt = "refusing to mail coconuts to government buildings";

                      break;
                    default:
                      alt = "swearing he didn't eat the last of the ice cream";

                  }


                  bath1 = "You can hear host mumbling something about #alt in his sleep, before finally giving a short yawn and wakes up.<p> " +((character.sandbox.limits.cantalk)?("You call out to him saying good morning, all you get is an \" Ehhh...\" as he responds still taking a minute to wake up fully."):("You start to say good morning but then remember your mouth is currently a vertical piss slit. He gives another yawn<p> \"I hope you slept well\" he says giving you a pat"));


                  if (character.sandbox.tfed) {

                    bath2 = "<p>" + character.sandbox.tfresponse;
                  }//tfed check close


                  //used to pee with
                  if(character.sandbox.ws){
                    
                     bath3 = "<p>Eventually he stretches and gets up, however he is walking straight to the bathroom! You have little choice but to comply with your role as his cock as he points you at the toilet. There is hardly a moment to complain before a rush of urine surges through you body heading for your mouth, the feeling is incredibly bizarre!";

                  }
                 




                }
               }else{
                 
                 //ignore scenes
                  bath1 = "";
                   if (character.sandbox.morningvar == "sleep") {
                     if(character.sandbox.ws){
                       //#piss wake up to pissing
                       bath1 = ("An incredibly odd sensation suddenly wakes you, almost like a pressure spreading up your body from the inside. Once you realize WHERE you are everything starts to make sense, below you is the toilet bowl! host doesn't even say a word as he starts just using you like he wound any other part of his body! You are just is cock and he needs to piss. He begins putting more pressure on his bladder as a blast of piss torrents out your mouth.... What a way to wake up...");
                     }else{
                       if(character.sandbox.limits.insheath==0){
                         bath1=("You wake up to a strange dangling sensation as you realize you are hanging down from hosts waist. He gives you a little shake to wake you up just so you are not dragging your hands on the floor as he walks. It feels much more natural to be in a sort of standing angle even if you sort of jut out from his crotch.");
                         
                       }else{
                            bath1=("You wake up to a comforting swaying sensation. It seems host is already awake and getting ready for the morning.");
                       
                         
                       }
                    
                     }
                         
                     
                   }else{
                     
                     bath1 = "You can hear host mumbling something about #alt in his sleep, before finally giving a short yawn and wakes up.<p> " +((character.sandbox.limits.cantalk)?("You start to say good morning to him but then stop. He is probobly to sleepy too even realize you anything more than his cock. Acting like a normal cock would help him start the day easier."):("You start to say good morning but then remember your mouth is currently a vertical piss slit. He gives another yawn and carrys one without even greeting you.<p>"));
                     if(character.sandbox.ws){
                           //#piss wake up to pissing
                           
                        
                             bath1 = ("An incredibly odd sensation suddenly wakes you, almost like a pressure spreading up your body from the inside. Once you realize WHERE you are everything starts to make sense, below you is the toilet bowl! host doesn't even say a word as he starts just using you like he wound any other part of his body! You are just is cock and he needs to piss. He begins putting more pressure on his bladder as a blast of piss torrents out your mouth.... What a way to wake up...");
                             
                       
                       
                     }
                   }
                  
                  
                }
                // +character.sandbox.tfresponse


                if (character.sandbox.ws) {
                  parer(bath1 + bath2 + bath3);
                  //#piss action trigger phrase
                  if(character.sandbox.pissaddiction>4){
                      oper(system, "./bathroom2", "Throb happily as you get to taste his piss again!");
                    
                  }else{
                     oper(system, "./bathroom2", "Be a good cock and help direct his piss", "./disobey", "Wince and try to hold back the flow");
                  }
                 
                } else { // No watersports
                  
                  bath3 = "<p>Eventually host gives you a rub and heads for the bathroom. He is thankfully quick about it and afterward\
                             leaves you to wait for him to finish brushing his teeth.";
                  parer(bath1 + bath2 + bath3);
                  
             
                  
                  
                  oper(system, "aftermorning", "Continue with the day");
                }



                ///    parer("You finish up your buissness in the bathroom and host begins his day.");
                //system.write("<p></p>");a

              }, //function close
              "bathroom2": function (character, system, action) {

                transer();
                
                if (character.sandbox.perma) {
                  system.setQuality("dignitylost",character.qualities.dignitylost+1 );
                }
              //system.setQuality("harmony", character.qualities.harmony +1);
              
              
                character.sandbox.pissaddiction++;
                
                switch (character.sandbox.pissaddiction) {
                  case 1:
                  case 2:
                  case 3:
                             parer("host sighs with relief as he relaxes his bladder and lets it flow through your body. It isn't nearly as relaxing for you, clearly tasting every drop that passes through you mouth as it coats every inch of your insides. In some ways it almost feels like a hose had been shoved up your ass and turned on. The feeling of rapid moving liquid through you is disturbing enough but it's all the stranger knowing WHAT that liquid is. Still you do your best to help him aim it into the toilet.");
                
                
                
                    
                    
                    break;
                  case 4:
                  case 5:
                  case 6:
                    
                   parer("host sighs with relief as he relaxes his bladder and lets it flow through your body. Almost distressingly you actually find the taste rather agreeable! If anything you rather like it, along with the deep rumble of the pressurized stream flowing through you. You would be moaning in pleasure if your throat wasn't filled with host's piss! You are almost too lost in the sensations to do anything other than serve your purpose as a part of his basic anatomy.");  
                    
                    break;
                  case 7:
                  case 8:
                  case 9:
                     parer("host sighs with relief as he relaxes his bladder and lets it flow through your body. Before it even reaches your mouth a wave of euphoria washes over you! To host it probably feels like that simple piss tingle but it is so much more to you! It's unbearable for several seconds before that torrent of piss finally escapes from you. Thoughts about how much you love his piss are impossible to ignore. You are starting to get addicted to his piss! To being used to piss with!");  
                    
                    
                    break;
                  case 10:
                  default:
                    parer("Before host even starts you already are desperate for his piss! host sighs with relief as he relaxes his bladder and lets it flow through your body. A weird part of your mind is hopelessly addicted to it now, the tastes, the feeling, the act... This is all you want... being used to drain host's bladder. Cumming is fun but this is so much better! Serving his body, being usefull and getting filled with piss...");  
                    
                  break;  
                }//End of RND switch
                
       
                
                oper(system, "aftermorning", "Finish draining his bladder and get cleaned up");

//                if (rnd() < 8) {
//                  // showers
//                  
//                  
//                  
//                  
//                }


              }, //function close
              "letithappen": function (character, system, action) {
                transer();
                if(character.sandbox.pissaddiction>6){
                  
                  parer("Already you can taste it starting to leak up your throat! You try not to enjoy it.... the sensation of liquid flowing through the urethra inside you. How it shoots from your piss slit of a mouth. You can taste every drop as it passes though you, the sharp salty taste. And through it all you can't help but feel so good serving your purpose, being used by host.");
                }else{
                  
                     parer("Already you can taste it starting to leak up your throat! The sensation of liquid flowing through the urethra inside you and  shoots from your piss slit of a mouth is distressingly relaxing. You can taste every drop as it passes though you, the sharp salty taste. Thankfully it is over soon enough as host gives you a shake to get rid of the last few drops.");
                }
              oper(system, "aftermorning", "Finish draining his bladder and get cleaned up");
              }, //function close
              "disobey": function (character, system, action) {

                transer();
                if (character.sandbox.perma) {
                  system.setQuality("dignitylost",character.qualities.dignitylost-1 );
                }
                alt = (true) ? "" : "";
                
                //#piss ACTUALLY pissing
                if(character.sandbox.stealth){
             character.sandbox.discovery++;
             
             
              if(character.sandbox.pissaddiction>6){
                   parer("Already you can taste it starting to leak up your throat! Try as you might your mouth is in no shape to hold back any of the flow. Its just a vertical piss slit, the only purpose your mouth has now is to piss with. Every second of this you love but still you manage to clench it somewhat putting a bit of pressure on the urethra and causing it to inflate slightly. All this does is remind you just how much of your insides have been repurposed for use as his urethra. Still he does sort of notice the flow not going right due to your mischief, causing him to give you a bit of a shake.");
              }else{
                
                   parer("You didn't ask for this and he didn't even ask if this was ok! Already you can taste it starting to leak up your throat! Try as you might your mouth is in no shape to hold back any of the flow. Its just a vertical piss slit, the only purpose your mouth has now is to piss with. Still you manage to clench it somewhat putting a bit of pressure on the urethra and causing it to inflate slightly. All this does is remind you just how much of your insides have been repurposed for use as his urethra. Still he does sort of notice the flow not going right, causing him to give you a bit of a shake.");
              }
               

             
                  
                }else{
                  
                  
                   if (character.sandbox.limits.cantalk) {
                     
                      if(character.sandbox.pissaddiction>6){
                        parer("All you can think about is how good this is going to be, almost shuddering as you feel it starting! Already you can taste it starting to leak up your throat! If your mouth wasn't full of urine you might even have moaned! Being a bit playful you shut your throat and mouth as best you can! host rather rapidly realizes something is wrong... <p>\"What.. hey! what are you doing! Ack!\" he says and braces himself due to the uncomfortable back pressure. \"Come on... don't be like that... I can't hold it forever. Like it or not you are a penis and I need to pee!\" he says forcefully and pushes harder! <p>Finally the pressure is too much and the flow breaks past your mouth and sprays into the toilet.");
                        
                    }else{
                        parer("You didn't ask for this and he didn't even ask if this was ok! Already you can taste it starting to leak up your throat! If your mouth wasn't full of urine you might even have complained! Being a bit defiant you shut your throat and mouth as best you can! host rather rapidly realizes something is wrong... <p>\"What.. hey! what are you doing! Ack!\" he says and braces himself due to the uncomfortable back pressure. \"Come on... don't be like that... I can't hold it forever. Like it or not you are a penis and I need to pee!\" he says forcefully and pushes harder! <p>Finally the pressure is too much and the flow breaks past your mouth and sprays into the toilet.");
                      }
                  
                } else {
                      if(character.sandbox.pissaddiction>6){
                        
                          parer("All you can think about is how good this is going to be, almost shuddering as you feel it starting! Already you can taste it starting to leak up your throat! Try as you might your mouth is in no shape to hold back any of the flow. Its just a vertical piss slit, the only purpose your mouth has now is to piss with. Still you manage to playfully clench it somewhat putting a bit of pressure on the urethra and causing it to inflate slightly. All this does is remind you just how much of your insides have been repurposed for use as his urethra. So much of your body dedicated to handling his piss.");
                    }else{
                      parer("You didn't ask for this and he didn't even ask if this was ok! Already you can taste it starting to leak up your throat! Try as you might your mouth is in no shape to hold back any of the flow. Its just a vertical piss slit, the only purpose your mouth has now is to piss with. Still you manage to clench it somewhat putting a bit of pressure on the urethra and causing it to inflate slightly. All this does is remind you just how much of your insides have been repurposed for use as his urethra");
                      
                    }
                  

                }
                  
                }
               
                
                
                
                
                
//                if (rnd() < 8) {
//                  // showers
//                }


                oper(system, "aftermorning", "Finish draining his bladder");

              }, //function close
              "showers": function (character, system, action) {
                /* transer();
                 alt=(true)?"":"";
                 parer("");
                 oper(system,"");
                 */
                transer();
                alt = (true) ? "" : "";
                parer("");
                oper(system, "");
              }, //function close
              "snuggle": function (character, system, action) {
                  //I think this is for insheath 0 so low tf
                transer();
                character.sandbox.erect=false;
                   clother();
                alt = (true) ? "" : "";
                parer("You are large enough that it's almost like sleeping with a lover in bed, You are an comfrotable abainst his belly with the distant feeling of his balls below you. You don't really try to wake him but the movements rubbing up closer does cause him to stir. Finally he he rumbles in his sleep and reaches down to adjust his cock.... you. ");
                alt = "snuggle";
                character.sandbox.morningvar="snuggle";
                oper(system, "./masturbate", "Stay quiet and let him keep going", "./snugglethenbathroom", "Let him to get ready for the day");

              }, //function close
              "snugglethenbathroom": function (character, system, action) {

                transer();
                alt = (true) ? "" : "";
             //low tf amount!!!! sheath type 0
             
             
                if (character.sandbox.ws) {
                  //#piss Open mouth for it section
                  
                   parer("Rather than giving in to the good sensations you just relax and try your best not to get horny from his touch, it certainly isn't easy! You are left all tingly and a head full of naughty thoughts but eventually he wakes up enough to sit up and get out of bed and heads for the bathroom. You quickly realize where this is headed as stands away from the toilet pointing you right at it!");
                   
                
                  
                   
                  if(character.sandbox.limits.cantalk){
                      oper(system, "./disobey", "Grumble and keep your mouth closed", "./bathroom2", "Open your mouth for him to piss with");
                  }else{
                    oper(system, "./disobey", "Wiggle as best you can so he misses", "./bathroom2", "Open your mouth for him to piss with");
                    
                    
                  }
                  
                } else {
                  oper(system, "aftermorning", "Finish up with the bathroom and continue with the day");
                }
              }, //function close
              "masturbatestealth": function (character, system, action) {
                transer();
               var conser = "";
               character.sandbox.erect=true;
                  clother();
                switch (character.sandbox.morningvar) {
                  case "sleep":

                    //woke up to BEING masturbated
                    if (character.sandbox.host.host != "bret") {


                      conser = "You wake up to a strange feeling of being rubbed. host has his hands around you and is strokeing you up and down. It feels REALLY good! Like a massage but its sending tingles of pleasure straight through you! Your body also feels a bit hard and sweaty... It takes surprisingly long to realize he is masturbating! It's times like this, completely drowning in pleasure that being a cock seems like the best thing in the world!";
                   
                      parer(conser);
                      oper(system, "./masturbate2", "Enjoy the pleasures as you feel his balls begin to tighten");


                    } else {
                      //damnit bret

                      system.doLink("./masturbatebret");

                    }

                    break;
                  
                  case "aroused":
                    //host is asleep and you are horny but have no arms!
                    //Can not be type 20

                    conser = "The current state of your transformation leaves you rather helpless! You desperately need to be rubbed and stroked but you are just a cock! You have no say in what your owner does with you! Finally you hear a few yawns as host wakes up a bit and notices your plight." ;
                    if (character.sandbox.host.host == "bret") {

                      system.doLink("./masturbatebret");

                    } else {
                      //NOT BRET!
                  
                      parer( "He gives your aroused body a rub and smiles enjoying the feeling, no idea of the mind blowing sensations he is putting you through! He begins to stroke your body up and down. It feels REALLY good! Like a massage but its sending tingles of pleasure straight through you! It's times like this, completely drowning in pleasure that being a cock seems like the best thing in the world!");
                      oper(system, "./masturbate2", "Enjoy the pleasure as you feel his balls tighten");

                    }
                    ;

                    break;
                  case "insheath":
                    //stuck in sheath, head out or inside. 
                    // Still wanting to be masturbated. not aroused YET
                    if (character.sandbox.host.host != "bret") {
                      //NOT BRET
                      conser = ("It seems that your attempts are working but not to the desired result... Your body is getting hard and hot though! He doesn't exactly wake up but he does roll over and yawn. One of his hands suddenly reaches to his balls to scratch them, but afterwards it drifts upwards beginning to rub his sheath! <p>You can feel the pressure through it and its hard to describe how nice it feels. Soon you can feel a strong pulsing through your body as you stiffen and become erect. host has his hands around you and is stroking you up and down. It feels REALLY good! Like a massage but its sending tingles of pleasure straight through you!  It takes surprisingly long to realize he is masturbating! It's times like this, completely drowning in pleasure that being a cock seems like the best thing in the world!");
                      parer(conser);
                      oper(system, "./masturbate2", "Enjoy the pleasure as you feel his balls tighten");
                    } else {
                      // Alright bret....
                      character.sandbox.morningvar = "awake";
                      system.doLink("./masturbatebret");
                      break;
                    }
                    break;
                  case "snuggle":
                    conser = "host paces his hands around you and begins stroking you up and down. It feels REALLY good! It seems like a massage but its sending tingles of pleasure straight through you! Your body also feels a bit hard and sweaty... It takes surprisingly long to realize he is actually masturbating! It's times like this, completely drowning in pleasure that the thought of becoming a cock seems like the best thing in the world!";

                    parer(conser);
                    oper(system, "./masturbate2", "Enjoy the pleasure as you feel his massive balls tighten");
                }





                
                
                
                
              }, //function close
              "masturbate": function (character, system, action) {
                transer();
                //// options sleep ), 
                character.sandbox.erect=true;
                   clother();
                var conser = "";
                console.log("morning masturbate check " +character.sandbox.morningvar );
                switch (character.sandbox.morningvar) {
                  case "sleep":

                    //woke up to BEING masturbated
                    if (character.sandbox.host.host != "bret") {


                      conser = "You wake up to a strange feeling of being rubbed. host has his hands around you and is strokeing you up and down. It feels REALLY good! Like a massage but its sending tingles of pleasure straight through you! Your body also feels a bit hard and sweaty... It takes surprisingly long to realize he is masturbating! It's times like this, completely drowning in pleasure that being a cock seems like the best thing in the world!";
                      if (character.sandbox.tfed) {
                        conser = conser + "<p>Despite the wonderful feelings you do realize the night held a few changes for you. " + character.sandbox.tfholder + "<p>Yet all that seems to matter right now is the wonderful feeling of being masturbated.";

                      }
                      parer(conser);
                      oper(system, "./masturbate2", "Enjoy the pleasures as you feel his balls begin to tighten");


                    } else {
                      //damnit bret

                      system.doLink("./masturbatebret");

                    }

                    break;
                  case "started":
                    //Outside of sheath, have arms
                    alt = (character.sandbox.host.host == "bret") ? "groans stretching out some." : "reaches down to help you.";
                    parer("Being rather impatient you decide to start without him. Besides if you want to masturbate why should he have to be awake for it? Well other than you being his cock. The idea that you belong to him suddenly sends an erotic shiver down your back. <p>You begin rubbing yourself up and down just enjoying the sensation of it. The closer to being completely a cock the better everything feels against your skin. After a bit more caressing you hear host waking up \"Mmmmm That... feels good! Don't stop!\" He says and #alt");
                    oper(system, "./masturbate2", "Continue to enjoy the feelings as his balls begin to tighten");
                    break;
                  case "aroused":
                    //host is asleep and you are horny but have no arms!
                    //Can not be type 20

                    conser = "The current state of your transformation leaves you rather helpless! You desperately need to be rubbed and stroked but with your arms having been absorbed by your cockflesh you are left to wiggle around helplessly. Finally you hear a few yawns as host wakes up a bit and notices your plight." +
                            ((character.sandbox.tfed)?(character.sandbox.tfresponse):(""));
                    if (character.sandbox.host.host == "bret") {

                      system.doLink("./masturbatebret");
                
                    } else {
                      //NOT BRET!
                      
                      if(character.sandbox.ignore){
                        
                           conser = conser + "\
                                        <p> He gives your aroused body a rub and smiles to himself. He doesn't say anything as he says and begins to stroke your body up and down. It feels REALLY good! Like a massage but its sending tingles of pleasure straight through you! It's times like this, completely drowning in pleasure that being a cock seems like the best thing in the world! He suddenly stops for a moment and then chuckles as he keeps going. For a moment there having completely forgotten you were anything more than just his cock";
                        
                      }else{
                         conser = conser + "\
                                        <p> He gives your aroused body a rub and smiles \"Hehe looks like you need some help there.\" He says and begins to stroke your body up and down. It feels REALLY good! Like a massage but its sending tingles of pleasure straight through you! It's times like this, completely drowning in pleasure that being a cock seems like the best thing in the world!";
                        
                        
                      }
                     
                      parer(conser);
                      oper(system, "./masturbate2", "Enjoy the pleasure as you feel his balls tighten");

                    }
                    ;

                    break;
                  case "insheath":
                    //stuck in sheath, head out or inside. 
                    // Still wanting to be masturbated. not aroused YET
                    if (character.sandbox.host.host != "bret") {
                      //NOT BRET
                      conser = ("It seems that your attempts are working and you can hear a few mumbles from host. He doesn't exactly wake up but he does roll over and yawn. One of his hands suddenly reaches to his balls to scratch them, but afterwards it drifts upwards beginning to rub his sheath! <p>You can feel the pressure through it and its hard to describe how nice it feels. Soon you can feel a strong pulsing through your body as you stiffen and become erect. host has his hands around you and is stroking you up and down. It feels REALLY good! Like a massage but its sending tingles of pleasure straight through you!  It takes surprisingly long to realize he is masturbating! It's times like this, completely drowning in pleasure that being a cock seems like the best thing in the world!");
                      parer(conser);
                      oper(system, "./masturbate2", "Enjoy the pleasure as you feel his balls tighten");
                    } else {
                      // Alright bret....
                      character.sandbox.morningvar = "awake";
                      system.doLink("./masturbatebret");
                  
                    }
                    break;
                  case "snuggle":
                    conser = "host paces his hands around you and begins stroking you up and down. It feels REALLY good! It seems like a massage but its sending tingles of pleasure straight through you! Your body also feels a bit hard and sweaty... It takes surprisingly long to realize he is actually masturbating! It's times like this, completely drowning in pleasure that the thought of becoming a cock seems like the best thing in the world!";

                    parer(conser);
                    oper(system, "./masturbate2", "Enjoy the pleasure as you feel his massive balls tighten");
                    break;
                  case "horse":
                    
                       conser = "The current state of your transformation leaves you rather helpless! Desperately needing to be rubbed and stroked but all you have is hard throbbing horse cockflesh. At first even host seems a bit intimidated but your size! Finally you feel him start to rub you with both hands!";
                    
                                conser = conser + "\
                                      q1So this is what it feels like to be hung like a horse! Wow, you feel heavy!q1 He says lifting you up a bit then begins to stroke your body up and down. There is something empowering about being a horse cock.... Your shape feels so new and sensitive in places you have never felt before! Soon you arecompletely drowning in pleasure, your flared head starting to expand!";
                
                     
                      parer(conser);
                      oper(system, "./masturbate2horse", "Enjoy the pleasure as you feel his balls tighten");
                    
                    
                    break;
default:
                       oper(system, "./masturbate2", "Enjoy the pleasure as you feel his massive balls tighten");
                }




              }, //function close
              "masturbate2": function (character, system, action) {
                /* transer();
                 alt=(true)?"":"";
                 parer("");
                 oper(system,"");
                 */
                transer();
             if(character.sandbox.stealth||character.sandbox.ignore){
               parer("All the wonderful sensations begin to build higher and higher! Thoughts about never wanting to turn back begin flooding your mind as you feel his balls begin to churn and pull upwards. You hardly have a seconds warning before a massive pulse of cum shoots through your body and up your throat! The wonderful taste overwhelms you and all you can think of is the surges of cum that follow every clench of his balls.<p>host is left panting from the pleasure while you almost forget that you are anything besides a cock! You continue to drool cum as host gets up and heads for the bathroom as you try to recover your ability to think.");
                system.animateQuality("essence", character.qualities.essence + 10);
                if (character.sandbox.ws) {
                  oper(system, "./masturthenbathroom", "Try to clear the cum from your throat");

                } else {
                  oper(system, "aftermorning", "Finish in the bathroom and continue with the day");
                }
               
               
             }else{
               
               
               
               
                  parer("All the wonderful sensations begin to build higher and higher! Thoughts about never wanting to turn back begin flooding your mind as you feel his balls begin to churn and pull upwards. You hardly have a seconds warning before a massive pulse of cum shoots through your body and up your throat! The wonderful taste overwhelms you and all you can think of is the surges of cum that follow every clench of his balls.<p>host is left panting from the pleasure \"Sorry meant to warn you... but damn that feels good!\" You continue to drool cum as host gets up and heads for the bathroom");
                  
                  
                system.animateQuality("essence", character.qualities.essence + 10);
                if (character.sandbox.ws) {
                  oper(system, "./masturthenbathroom", "Try to clear the cum from your throat");

                } else {
                  oper(system, "aftermorning", "Finish up in the bathroom and continue the day");
                }
               
               
             }
             
              }, //function close
                            "masturbate2horse": function (character, system, action) {
                /* transer();
                 alt=(true)?"":"";
                 parer("");
                 oper(system,"");
                 */
                transer();

               
               
               
               if(character.sandbox.host.host=="will"){
                 parer("All the wonderful sensations begin to build higher and higher! You hardly have a seconds warning before a massive pulse of cum shoots through your body and up your throat! It has to travel much farther now that you are so long! The wonderful taste overwhelms you and all you can think of is the surges of cum that follow every clench of his balls. host is left panting from the pleasure q1Ahhhhh.... Damn... I think I hit the ceiling again! Don't worry this happens all the time to horse cocksq1You continue to drool cum as host says that and gets up heading for the bathroom");
                 
               }else{
                   parer("All the wonderful sensations begin to build higher and higher! You hardly have a seconds warning before a massive pulse of cum shoots through your body and up your throat! It has to travel much farther now that you are so long! The wonderful taste overwhelms you and all you can think of is the surges of cum that follow every clench of his balls. host is left panting from the pleasure q1Ahhhhh.... that. Having a horse's cock is intense! I hope you don't mind staying like this for a while!q1You continue to drool cum as host  says that and gets up heading for the bathroom");
                 
               }
                
                  
                  
                system.animateQuality("essence", character.qualities.essence + 20);
                if (character.sandbox.ws) {
                  oper(system, "./masturthenbathroom", "Try to clear the cum from your throat");

                } else {
                  oper(system, "aftermorning", "Finish up in the bathroom and continue the day");
                }
               
               
             
             
              }, //function close
              "masturbatebret": function (character, system, action) {
                if (character.sandbox.forgotten) {
                  
                  system.doLink("./masturbatebretforgotten");
                }else{
                  system.doLink("./masturbatebretbase");
                  
                }
              }, //function close
              "masturbatebretbase": function (character, system, action) {
                character.sandbox.erect=true;
                   clother();
                /* transer();
                 * 
                 alt=(true)?"":"";
                 parer("");
                 oper(system,"");
                 */
                // 3 options, He woke to you being aroused, Snuggled then masturbated, woke to being masturbated.
                transer();
                
                if(character.sandbox.stealth){
                       if (character.sandbox.morningvar == "awake") {
                         if(character.sandbox.pillroute){
                           
                                 parer("It seems that your attempts are working but not to the desired result... Your body is getting hard and hot! He doesn't exactly wake up but he does roll over and yawn. After a bit more wiggling he finally shifts around and sits up, unfortunately this leaves you squished under him pressed firmly aginst the bed. <p>\"Mmmmm, Good morning down there.... Been extra horny lately....!\" He says teasing you as if he knew you were there! Every time he does that you can't help but hope! The pressure doesn't let up though as he just shifts around dragging you pleasurably aginst the bed. host keeps thrusting you aginst the slick silk sheets of his bed, and it starts to REALLY feel good!");
                         }else{
                           
                               parer("It seems that your attempts are working but not to the desired result... Your body is getting hard and hot! He doesn't exactly wake up but he does roll over and yawn. After a bit more wiggling he finally shifts around and sits up, unfortunately this leaves you squished under him pressed firmly aginst the bed. <p>\"Mmmmm, Good morning down there.... Been extra horny lately....!\" He says teasing you as if he knew you were there! Every time he does that you can't help but hope! The pressure doesn't let up though as he just shifts around dragging you pleasurably aginst the bed. host keeps thrusting you aginst the slick silk sheets of his bed, and it starts to REALLY feel good!");
                  
                  
                         }
              
                  
                } else {
                  parer("You wake up to a strange pleasurable but squished feeling. host seems to be laying down pressing you firmly aginst the bed. q1... don't ya?q1 You hear him ask, almost as if it was to you! You didn't hear the start of his sentence to even know what he was asking! The pressure doesn't let up as he just shifts around dragging you pleasurably against the slick silk sheets of his bed, and it starts to REALLY feel good!");


                }
                ;
                character.sandbox.tfresponse = "";

                  
                  
                  
                }else{
                  if(character.sandbox.ignore){
                      if (character.sandbox.morningvar == "awake") {

                  parer("It seems that your attempts are working and you can hear a few mumbles from host. He doesn't exactly wake up but he does roll over and yawn. After a bit more wiggling he finally shifts around and sits up, unfortunately this leaves you squished under him pressed firmly against the bed. There is no warning or morning greeting, just the soft rubbing of the sheets. The pressure doesn't let up as he shifts around dragging you pleasurably aginst the bed." + character.sandbox.tfresponse +
                          "host keeps thrusting you aginst the slick silk sheets of his bed, and it starts to REALLY feel good!");
                } else {
                  parer("You wake up to a strange pleasurable but squished feeling. host seems to be laying down pressing you firmly aginst the bed.The pressure doesn't let up though as he just shifts around dragging you pleasurably against the slick silk sheets of his bed, and it starts to REALLY feel good!");


                }
                ;
                    
                    
                  }else{ //// not ignored
                    if (character.sandbox.morningvar == "awake") {

                  parer("It seems that your attempts are working and you can hear a few mumbles from host. He doesn't exactly wake up but he does roll over and yawn. After a bit more wiggling he finally shifts around and sits up, unfortunately this leaves you squished under him pressed firmly aginst the bed. <p>\"Mmmmm, Good morning down there.... Eh another surprise morning package? Hah! Just like the first day I saw you, always hard in the morning aye?\" He says teasing you. The pressure doesn't let up though as he just shifts around dragging you pleasurably aginst the bed." + character.sandbox.tfresponse +
                          "host keeps thrusting you aginst the slick silk sheets of his bed, and it starts to REALLY feel good!");
                } else {
                  parer("You wake up to a strange pleasurable but squished feeling. host seems to be laying down pressing you firmly aginst the bed.<p>\"Mmmmm, Good morning down there.... \"" + character.sandbox.tfresponse + " <p> The pressure doesn't let up though as he just shifts around dragging you pleasurably against the slick silk sheets of his bed, and it starts to REALLY feel good!");


                }
                ;
                    
                    
                    
                    
                    
                  }
                   
                character.sandbox.tfresponse = "";

                  
                  
                }
               
                oper(system, "./masturbate2", "Enjoy the pleasure as you feel his balls tighten");
              }, //function close
              "masturbatebretforgotten": function (character, system, action) {
           /* transer();
                 alt=(true)?"":"";
                 parer("");
                 oper(system,"");
                 */
                // 3 options, He woke to you being aroused, Snuggled then masturbated, woke to being masturbated.
                character.sandbox.erect=true;
                clother();
                transer();
                
                
                       if (character.sandbox.morningvar == "awake") {
                        
                                 parer("It seems that your attempts are working but not to the desired result... Your body is getting hard and hot! He doesn't exactly wake up but he does roll over and yawn. After a bit more wiggling he finally shifts around and sits up, unfortunately this leaves you squished under him pressed firmly aginst the bed. <p>\"Mmmmm, Good morning down there.... Been extra horny lately....!\" He says teasing you as if he knew you were there! Every time he does that you can't help but hope! The pressure doesn't let up though as he just shifts around dragging you pleasurably aginst the bed. host keeps thrusting you aginst the slick silk sheets of his bed, and it starts to REALLY feel good!");
                        
              
              
                character.sandbox.tfresponse = "";

                  
                  
                  
                }else{
                    parer("You wake up to a strange pleasurable but squished feeling. host seems to be laying down pressing you firmly aginst the bed. q1... don't ya?q1 You hear him ask, almost as if it was to you! You didn't hear the start of his sentence to even know what he was asking! The pressure doesn't let up as he just shifts around dragging you pleasurably against the slick silk sheets of his bed, and it starts to REALLY feel good!");

                  
                }
                    
             
                   
                character.sandbox.tfresponse = "";

                  
               
               
                oper(system, "./masturbate2", "Enjoy the pleasure as you feel his balls tighten");
              }, //function close
             
              "masturthenbathroom": function (character, system, action) {
                /* transer();
                 alt=(true)?"":"";
                 parer("");
                 oper(system,"");
                 */
                transer();
                //alt=((true)?"":"");
                if(character.sandbox.stealth){
                  
                  //#piss
                  
                  
                  
                     parer("host smiles and gives you a rub, but he is currently pointing you at the toilet! You are only just recovering from the mind shattering orgasms as you suddenly have to prepare to be used in a whole new way! Your piss slit of a mouth seems to tingle as he gets ready to piss");

                 oper(system, "./bathroom2", "Try to enjoy it", "./disobey", "Try to make him miss!");
                }else{
                  
        if(character.sandbox.ignore){
          
            parer("host smiles and gives you a rub, but he is currently pointing you at the toilet! He doesn't even look as he just uses you like just another part of his body!" + ((character.sandbox.limits.cantalk)?("You start to say something but only end up coughing up more cum! He holds your head and points it right at the bowl!"):("Your piss slit of a mouth seems to tingle as he gets ready to piss")));
          
        }else{
          
          if(character.qualities.day>10){
            
               parer("host smiles and gives you a rub, but he is currently pointing you at the toilet! q1I really think you are starting enjoy this as much as cummingq1 he says sounding semi amused." + ((character.sandbox.limits.cantalk)?( "You start to say something but only end up coughing up more cum! He holds your head and points it right at the bowl!"):( "Your piss slit of a mouth seems to tingle as he gets ready to piss")));
          }else{
            
              parer("host smiles and gives you a rub, but he is currently pointing you at the toilet! \"Sorry, just came and now have to pee.... You know how it is\" he says kind of shifting from foot to foot with need." + ((character.sandbox.limits.cantalk)?( "You start to say something but only end up coughing up more cum! He holds your head and points it right at the bowl!"):( "Your piss slit of a mouth seems to tingle as he gets ready to piss")));
          }
         
          
          
        }
                 
                    

                oper(system, "./bathroom2", "Be a good cock and help direct his piss", "./disobey", "Wince and try to hold back the flow");
                  
                  
                }
              
              } //function close
            }//actions close
          }//options close
  )
    
};