//Rune control idea
//use a 5x5 square to "draw runes" book will describe which runes do what. TF runes will always be the same. Control runes will be randomized.
        //
        undum.game.transformation = {
            transformation: new undum.SimpleSituation(
                    "", {
                      enter: function (character, system, action) {
                        //if(character.sandbox.stealth)
                        character.sandbox.didresearch=false;
                            if(character.sandbox.perma&&(!character.sandbox.ringlost)&&(!character.sandbox.ringgone)&&(character.qualities.harmony>60)&&(!character.sandbox.sellringplz)&&(!character.sandbox.ringsold)){
                        if(rnd()>7){
                          character.sandbox.sellringplz=true;
                        }
                       }
                       
                        console.log("Enter testing " + character.qualities.ctf + " and " + character.qualities.ctf%20);
                        console.log("and check head" +character.sandbox.limits.cantalk +" and arms "+character.sandbox.limits.hasarms );
                        
                              console.log("are we even getting in? ");
                               if(character.sandbox.pillwearoff!=0){
                                 character.sandbox.pillwearoff--; //
                                 
                               }
                                              if(character.qualities.ctf!=100){
                          
                                
                                switch(character.qualities.ctf%20){
              case 5:
                
                
                
                
                break;
              case 10:
                              console.log("OMG |||||||||||||||||||| ");
                if(character.sandbox.limits.cantalk||!character.sandbox.limits.hasarms){
                                console.log("XX FUCKED error code! case 10 in TF triggered ");
                }
                 character.sandbox.limits.cantalk=true;
                character.sandbox.limits.hasarms=false;
                break;
              case 15:
                    if(!character.sandbox.limits.cantalk||!character.sandbox.limits.hasarms){
                                console.log("XX FUCKED error code! case 15 in TF triggered ");
                }
                character.sandbox.limits.hasarms=false;
                character.sandbox.limits.cantalk=false;
                break;
              default:
                          if(character.sandbox.limits.cantalk||character.sandbox.limits.hasarms){
                                console.log("XX FUCKED error code! case base in TF triggered ");
                }
                 character.sandbox.limits.cantalk=true;
                 character.sandbox.limits.hasarms=true;
            }//End of RND switch
                              }
                              console.log("and check head" +character.sandbox.limits.cantalk +" and arms "+character.sandbox.limits.hasarms );
                          //system.doLink("work/"+character.sandbox.host.sender);
                        console.log("entering transformation " +character.qualities.ctf+" is perma? "+character.sandbox.perma );
                      ///
                        if(character.sandbox.limitbreak){
                          
                       
                        }else{
                             if(character.qualities.harmony>=89){
                          system.setQuality("harmony",89 );
                        
                      }
                      if(character.qualities.harmony<=10){
                          system.setQuality("harmony",10 );
                        
                      }
                          
                          
                        }
                        
                      
                      //on the chart 10= 0  89=100
                        /*
                         WHAT If player gets perma message at cock % they don't like?
                         possibility to change cock % after perma
                         
                         If ringcheck is active then they COULD alter things.
                                    Host asks to research book with you.
                                    locate correct rune....
                                    host controls the TF that night.
                         
                         
                         
                         
                         */
                                        var hdist = (Math.abs(character.qualities.harmony - 50)) + 1;
                          var i;
                          var fib = []; // Initialize array!
                          var cost=0;
          
                          fib[0] = 0;
                          fib[1] = 1;
                          for (i = 2; i <= (hdist/2); i++) {
                            // Next fibonacci number = previous + one before previous
                            // Translated to JavaScript:
                            fib[i] = fib[i - 2] + fib[i - 1];
                            cost = (fib[i]);
                          }
                          
          
                          character.sandbox.ttcost = Math.floor(cost / 2);
                          console.log("TTCOST= " +character.sandbox.ttcost );
                          system.setQuality("ttcost",character.sandbox.ttcost );
                       
                          if(character.sandbox.perma){
                          
                            character.sandbox.harmonyunlockup=true;
                          }
                          if(!character.sandbox.stealth){
                             if (character.qualities.harmony>=70&&(!character.sandbox.harmonyunlockup)) {
                          system.setQuality("harmony", 70 );
                          character.sandbox.mindchangetrigger="highharmony";
                        }else{
                         
                        }
                      
                        if (character.qualities.harmony<=30&&(!character.sandbox.harmonyunlockdown)) {
                            system.setQuality("harmony", 30);
                            character.sandbox.mindchangetrigger = "lowharmony";
                          } else {
          
          
          
                          }
                          console.log("ok whatt...... " + character.qualities.harmony + " and unlock is " + character.sandbox.harmonyunlockup);
          
                        }
              if (character.sandbox.perma) {
                      
                            if (character.qualities.dignitylost <= 10) {
                              
                              system.setQuality("dignitylost",10 );
                            }
                          }
          
          
                        if (character.sandbox.perma) {
                          if (character.qualities.harmony >= 50) {
                            if (character.qualities.dignitylost >= 50) {
          //                    if(character.sandbox.ctfrolemod=="pos"){
          //                      system.setQuality("dignitylost", character.qualities.dignitylost+10);
          //                      
          //                    }
          
          
                              character.sandbox.ctfrole = "bodypart";
                              character.sandbox.ctfrolemod = "bod";
          
                            } else {
          //                      if(character.sandbox.ctfrolemod=="bod"){
          //                      system.setQuality("dignitylost", character.qualities.dignitylost-10);
          //                      
          //                    }
                              character.sandbox.ctfrole="possessive";
                              character.sandbox.ctfrolemod="pos";
                            }
                            
                          }else{
                            if(character.qualities.dignitylost>=50){
                             
                              
          //                     if(character.sandbox.ctfrolemod=="f"){
          //                      system.setQuality("dignitylost", character.qualities.dignitylost+10);
          //                      
          //                    }
                              character.sandbox.ctfrole="petpenis";
                              character.sandbox.ctfrolemod="pet";
                            }else {
          //                      if(character.sandbox.ctfrolemod=="pet"){
          //                      system.setQuality("dignitylost", character.qualities.dignitylost-10);
          //                      
          //                    }
                              character.sandbox.ctfrole="friend";
                              character.sandbox.ctfrolemod="f";
                            }
                            }
                      if(character.sandbox.ctfrole=="bodypart") {
                        
                          character.sandbox.ignore=true;
                      }else{
                        
                          character.sandbox.ignore=false;
                      }
                          }
                     
                       
                       
                        switch (character.sandbox.ctfrole) {
                          case "bodypart":
                            //doesn't talk to you
                            
                            break;
                          case "possessive":
                            //Get use to it you are just my cock now. There is no way I am ever letting you go. Get use to it
                            
                            
                            
                            break;
                          case "petpenis":
                            //Very good! Such a good cock. Give me a nice throb and I might let you out to play more often.
                            
                            
                            
                            
                            break;
                          case "friend":
                           //
                           
                           
                           
                            
                            break;
                        }//End of RND switch
                       
                       
                     
                       //Blinky activator
                       if(character.qualities.harmony>=87&&(!character.sandbox.blinkyactivated)){
                         
                         character.sandbox.blinkyactivated=true;
                         blinkymessage(character);
                         
                       }else if(character.qualities.harmony<87&&(character.sandbox.blinkyactivated)){
                          blinkymessage(character);
                         
                       }
                       
                       
                        if(rnd()>(3- character.sandbox.gooutcount)){
                          character.sandbox.tftogo=character.sandbox.host.harmony[3] - character.qualities.ctf;
                          
                        }else{
                         character.sandbox.tftogo=100 - character.qualities.ctf;
                          
                        }
                     
                        character.sandbox.tfup = false;
                        character.sandbox.tfed = false;
                           console.log("Here we go again. " + character.sandbox.tfup);
                          
                            if (character.qualities.ctf>=100){
                              character.sandbox.gooutcount=0;
                             character.sandbox.ringstuck=false;
                             character.sandbox.fullcock++;
                             console.log("Check if 100 is true " +character.sandbox.fullcock);
                           }else{
                           
                               character.sandbox.fullcock=0;
                            
                             
                           }
                            
                           if(character.sandbox.skipto){
                             
                             
                               system.doLink("morning/preenter");
                             
                           }else if(character.sandbox.stealth){
                             if(character.sandbox.pillroute||character.sandbox.forgotten){
                           
                               system.doLink("morning/preenter");
                             }else{
                               system.doLink("./stealthed");
                             }
                              
                             
                             
                             
                             
                           }else{
                              if (character.sandbox.ring&&(!character.sandbox.perma)){
                               
                           if(character.sandbox.fullcock>2&&!character.sandbox.ringcheck&&character.sandbox.runedo.stability){
                             system.doLink("./stuck");
                             
                             
                             //return;
                           }else{
                              //system.doLink("./newtf");
                           
                             if (character.sandbox.controlruneaccess) {
                            character.sandbox.dreamscape=false;
                             system.doLink("./controlrune");
                           // system.doLink("./hostcontro");
                          }else{
                            
                              if (character.sandbox.control) {
                                parer("With some effort you manage to concentrate just enough to enter a lucid state without fully waking up. A feeling of floating or melting fills you as other aspects of your surroundings grow stronger. Everything around you feels fuzzy and insubstantial as it becomes clear this is some sort of dreamstate, your body even seems to change to match how you imagine it! The only part that feels real is the warm bright glow of the runes along your sides.<p> host mumbles something in his sleep and suddenly you feel his connection to this dreamstate. New sensations spread over you as his thoughts begin altering the shape of your body!");
                          // Imagine yourself normal, focus on a part of yourself, 
                          //push for control, End the dreamstate, 
                              character.sandbox.dreamscape=true;
                              if(character.qualities.essence>25){
                                oper(system, "./controlspend", "Struggle for control", "./stop", "Quickly disperse the dreamstate", "./hostcontro", "Relax and let it happen");
                                
                              }else{
                                
                                    oper(system, "./control", "Struggle for control", "./stop", "Quickly disperse the dreamstate", "./hostcontro", "Relax and let it happen");
                                
                              }
                          
                            
                          } else {
                              parer("Sensations of being partially awake come over you, it's like you're almost dreaming just about to wake. However you can feel the runes along your sides burning slightly and tingling sensations are spreading through your body!");
          
                              if(character.sandbox.debugrun){
          //                          character.sandbox.activerune="equalize";
          //                          system.doLink("./runeactions");
                                       character.sandbox.tftogo=100 - character.qualities.ctf;
                                    system.doLink("./hostcontro");
                              }
          
                            oper(system, "./hostcontro", "Ignore the strange feelings and go back to sleep");
                           // system.doLink("./hostcontro");
                          }
                            
          //                   parer("Sensations of being partially awake come over you, it's like you're almost dreaming just about to wake. However you can feel the runes along your sides burning slightly and tingling sensations are spreading through your body!");
          //                   oper(system, "./hostcontro", "Ignore the strange feelings and go back to sleep");
          //                
          //                    
          //                    
                              
                              
                              
                              
                              
                              }
          
                                      
                            }
                        
                       }else{
                         
                          system.doLink("morning/preenter"); 
                       }
                             
                             
                           }
                         
                        
                        //Character has GONE to sleep. So now what?
                        
                        
          
                    
                      }, //function/enter close 
                      actions: {
                        "controlrune": function (character, system, action) {
                                    transer();
                          
                          parer("You are just barely falling asleep when you feel a faint warmth from the runes.");
                          
                          //,"./control","Struggle for control in the dreamstate"
                          
                          oper(system, "./controlrune2", "Focus on the runes...","./stop","Disperse the dream");
                    
                        }, //function close
                        "controlspend": function (character, system, action) {
                      transer();
               
                      system.setQuality("essence",character.qualities.essence-10);
                      parer("You feel essence draining away.... host seems to be siphoning some of it away as they attempt to control the dreamstate! The more you dedicate to this the greater the chance of it working! You still may need some left over if you intend to activate any of the runes!");
                 
                  
                      if(character.qualities.essence>49){
                        
                        oper(system, "./low", "(5)Use some and hope for the best","./mid","(10)Match his own","./high","(50)Use a massive amount!");
                      }else if(character.qualities.essence>9){
                        
                        oper(system, "./low", "(5)Use some and hope for the best","./mid","(10)Match his own");
                      }else{
                        //5 essence
                        
                        oper(system, "./low", "(5)Use some and hope for the best");
                      }
                     
                    }, //function close
                        "low": function (character, system, action) {
                    
               transer();
               var resulter=false;
               var totype="./controlsuccess";
                              if(character.sandbox.dreamscape){
                      resulter=(rnd()< character.sandbox.host.harmony[character.sandbox.htarget]);
                            totype="./newcontrol";
                      }else{
                        totype="./controlsuccess";
                         resulter=(rnd()<(((character.sandbox.host.harmony[character.sandbox.htarget]))));
                        
                      }
               
               
                            system.setQuality("essence",character.qualities.essence-5);
                      if(resulter){
                         delay(["You struggle for control!","host easily overpowers you!","./newcontrolfail"]);
                        
                      }else{
                          delay(["You struggle for control!","Somehow you manage to regain your focus",totype]);
                       
                        
                      
                      }
                    }, //function close
                        "mid": function (character, system, action) {
                      transer();
                           var resulter=false;
                           var totype="./controlsuccess";
                          if(character.sandbox.dreamscape){
                      resulter=((rnd()+4)< character.sandbox.host.harmony[character.sandbox.htarget]);
                        totype="./newcontrol";
                      }else{
                        totype="./controlsuccess";
                         resulter=((rnd()+4)<(((character.sandbox.host.harmony[character.sandbox.htarget]))));
                        
                      }
                                 system.setQuality("essence",character.qualities.essence-10);
                      if(resulter){
                    delay(["You struggle for control!","At the last moment you feel your focus slip!","./newcontrolfail"]);        
                      }else{
                    
           delay(["You struggle for control!","Slowly you manage to regain your focus",totype]);
                       
                      }
                 
                    }, //function close
                        "high": function (character, system, action) {
                      transer();
                     system.setQuality("essence",character.qualities.essence-50);
                      delay(["You easily take control of the dreamstate!","./controlsuccess"]);
          
          
                    }, //function close
                        "controlrune2": function (character, system, action) {
                          transer();
                           character.sandbox.runelist=[];
                          character.sandbox.activerune="blank";
                          
                          switch (character.sandbox.controlprog) {
                            case 0:
                            
                                  if (undum.isInteractive()) {
                             runesystem();
                          } 
                            
                                    oper(system, "./saverune", "Focus......");
                            break;
                            case 1:
                               
                                    if (undum.isInteractive()) {
                            displayrune("control","remember");
                          } 
                              
                              
                              character.sandbox.controlprog=2;
                              oper(system, "./saverune", "Focus......");
                              break;
                            case 2:
                         
                              
                          if(character.qualities.essence>14&&(rnd()>7||character.sandbox.ch2re)){
                            
                            system.doLink("./controlspend");
                          }else{
                             system.doLink("./controlsuccess");
                  
                          }
                              
                              
                              break;
                            case 3:
                              
                              break;
                            case 4:
                              
                              break;
                            case 5:
                              
                              break;
                          }//End of RND switch
                       
                         
                          
                          
                          
                          
                          
                        }, //function close
                        "saverune": function (character, system, action) {
                          var savedrune;
                          //console.log("testing " + );
                          if (undum.isInteractive()) {
                            savedrune = character.sandbox.activerune;
                          } else {
          
                            character.sandbox.activerune = (system.xeyvars[character.sandbox.xeyvarnum]);
          
                            character.sandbox.xeyvarnum++;
                          }
                          console.log("xeyvar in TF calling  " + character.sandbox.activerune);
                          system.xeyvarcall(character.sandbox.activerune);
          
                         
                         if(character.sandbox.activerune!="control"){
                           
                            system.doLink("./controlfail");
                         }else{
                            //character.sandbox.controlprog++;
                            
                            if(character.sandbox.controlprog==0){
                               character.sandbox.runeknown.push("control");
                           
                               character.sandbox.controlprog=1;
                            }
                            
                          
                            //character.sandbox.control=true;
                          
                            system.doLink("./controlsuccess");
                           
                         }
                         
                         
                         
                         
                         
                        }, //function close
                        "controlfail": function (character, system, action) {
                          transer();
                         parer("Sensations of being partially awake come over you, it's like you're almost dreaming just about to wake. However you can feel the runes along your sides burning slightly and tingling sensations are spreading through your body! You try to focus on the runes picturing one in particular.... But nothing seems to happen and your focus on them fades along with their warmth");
          
          
          
                            oper(system, "./hostcontro", "Fall back into slumber");
                        }, //function close
                        "controlsuccess": function (character, system, action) {
                          transer();
                          character.sandbox.controlrune=true;
                        parer("With some effort you manage to focus on the runes without fully waking up. A feeling of floating or melting fills you as other aspects of your surroundings grow stronger. Everything around you feels fuzzy and insubstantial as it becomes clear this is some sort of dreamstate! The only part that feels real is the warm bright glow of the runes along your sides.");
                        //<p> host mumbles something in his sleep and suddenly you feel his connection to this dreamstate. New sensations spread over you as his thoughts begin altering the shape of your body!
                        
                          // Imagine yourself normal, focus on a part of yourself, 
                          //push for control, End the dreamstate, 
                          parer("(select the rune again to reverse its effect)");
                          
                          if(character.sandbox.rememberrune=="blank"){
                           
                             oper(system,"./stop","Disperse the dreamstate","./preloadrune","Known runes");
                             
                          }else{
                            
                            oper(system,"./stop","Disperse the dreamstate", "./newfocus", "Remember the shape of a rune","./preloadrune","Known runes");
                            
                          }
                          
                          
                          //oper(system, "./control", "Struggle for control", "./stop", "Quickly disperse the dreamstate", "./hostcontro", "Relax and let it happen");
                        }, //function close
                     
                        "newfocus": function (character, system, action) {
                          transer();
                         character.sandbox.activerune="blank";
                          character.sandbox.runelist=[];
                                 if (undum.isInteractive()) {
                             
                            if(character.sandbox.rememberrune!="blank"){
                              
                              displayrune(character.sandbox.rememberrune,"remember");
                            }else{
                              runesystem();
                              
                            }
                            
                          } 
                        
                        
                        
                          oper(system, "./saverune2", "Focus....");
                        }, //function close
                        "preloadrune": function (character, system, action) {
                          transer();
                           
                          // only gives some parts of the rune
                       
                            character.sandbox.activerune="blank";
                            character.sandbox.runelist=[];
                             var runeform="";
                          var xxx;
                          for(xxx in character.sandbox.runeknown){
                              console.log("the rune we are testing " + xxx);
                              
                              
                                 try {
                            runeform=runeform+("<button class='glow-on-hover transient' onclick='displayrune("+'"'+(character.sandbox.runeknown[xxx]) +'"'+",\"remember\")'>"+((character.sandbox.runeknown[xxx]).toUpperCase())+"<br>  "+character.sandbox.runearchivedesc[character.sandbox.runeknown[xxx]]+"</button>");
                              } catch (e) {
                            
                            console.log("TRYCATCH " + e);
                            
                          }
                            
                          }
                          
                          //displayrune("control");
                          
                          system.write(runeform);
                          
                          
                          
                        
                          
                        parer("(Anytime you activate a rune you do not know it will be added here. Continued research will unlock more runes.)");
                          oper(system, "./saverune2", "Focus....");
                        }, //function close
                        "saverune2": function (character, system, action) {
                           var savedrune;
                          if (undum.isInteractive()) {
                            savedrune = character.sandbox.activerune;
                          } else {
          
                            character.sandbox.activerune = (system.xeyvars[character.sandbox.xeyvarnum]);
          
                            character.sandbox.xeyvarnum++;
                          }
                          console.log("xeyvar in TF calling  " + character.sandbox.activerune);
                          system.xeyvarcall(character.sandbox.activerune);
          
                         
                         if(character.sandbox.activerune!="blank"){
                            system.doLink("./runeactions");
                           
                         }else{
                            system.doLink("./runefail");
                           
                            //character.sandbox.controlprog++;
                         
                           
                         }
                         
                         
                         
                         
                        }, //function close
                        "runeactions": function (character, system, action) {
                          transer();
                          
                          character.sandbox.pchoice=true;
                          
                          
                          var dl="morning/preenter";
                          
                          
                          
                          var runeaction;
                          
                          switch (character.sandbox.activerune) {
                            case "horse":
                              
                             
                            if(character.sandbox.host.host=="will"){
                              
                                runeaction="You try to access the rune but it almost feels stuck on. You can't seem to affect it at all.";
                            }else{
                              if( character.sandbox.host.cocktype=="horse"){
                                    character.sandbox.host.cocktype="knot";
                             runeaction="You activate the rune and feel.... So much... weaker. Smaller! Shorter!!";
                              }else{
                                  
                                if(character.qualities.ctf>=95){
                                  character.sandbox.morninginter="./interhorse";
                                  character.sandbox.host.cocktype="horse";
                             runeaction="You activate the rune and feel.... SO MUCH MORE POWERFULL! If you every become a full cock with this active you will be as strong as a stallion!";
                                }else{
                                  
                                        runeaction="You activate the rune and feel a power rising up inside you... but it doesn't seem to work. Maybe you need to be far more cock like to use this";
                                }
                                  }
                              }
                             clother();
                            break;
                            case "genderbender":
                            if(character.sandbox.girl==true){
                                  character.sandbox.girl=false;
                              runeaction="Balance is restored......";
                              
                            }else{
                              runeaction="You reactivate the HIDDEN GENDER RUNE! There is a massive feeling of sillyness as your host turns girly... along with everyone else in the world.... q1WHAT HAVE YOU DONE!?q1 (silly mode active. Blame Raboka.)";
                              character.sandbox.girl=true;
                            }
                             
                             break;
                            case "head":
                              
                              if(character.sandbox.runedo.head){
                                character.sandbox.runedo.head=false;
                                runeaction="Your head will not be a prioritized when transforming.";
                                 dl="./tfup";
                              }else{
                                 character.sandbox.runedo.head=true;
                              runeaction="Your head will now be a prioritized when transforming.";
                                
                                   dl="./tfreversion";
                              }
                             
                              break;
                            case "arms":
                              if(character.sandbox.runedo.arms){
                                character.sandbox.runedo.arms=false;
                                runeaction="Your arms will not be prioritized when transforming.";
                                 dl="./tfup";
                              }else{
                                 character.sandbox.runedo.arms=true;
                              runeaction="Your arms will now be a priority when transforming. It still will require your head to come back first.";
                                 dl="./tfreversion";
                              }
                              //character.sandbox.runedo.arms=true;
                              break;
                            case "reversion":
                               runeaction="All of the energy of the runes are focused on seperating you from host";
                               character.sandbox.runedo.reversion=true;
                              if(character.qualities.ctf==20){
                                  dl="./tfreversion";
                              } 
                            
                              
                              break;
                            case "control":
                              runeaction="You reactivate the contol rune, it doesn't do anything... for now";
                              break;
                            case "equalize":
                              
                              runeaction="You feel the energy within you and host balance, your body begins changing to match as it drains all of your essence.";
                              
                              
                              if(character.sandbox.runedo.arms){
                                character.sandbox.limits.hasarms=true;
                                   character.sandbox.limits.cantalk=true;
                                   character.sandbox.limits.insheath=1;
                                system.setQuality("ctf",40 );
                              }else{
                                character.sandbox.limits.insheath=1;
                                system.setQuality("ctf",50 );
                             character.sandbox.limits.cantalk=true;
                                character.sandbox.limits.hasarms=false;
                              }
                              system.setQuality("essence",0 );
                              character.sandbox.tfup=false;
                              character.sandbox.tfed=true;
                            
                            dl="./tf40";
                            
                            
                            break;
                            case "horny":
                            
                            if(character.sandbox.runedo.horny){
                                character.sandbox.runedo.horny=false;
                                runeaction="You start to get softer as host's sex drive returns to normal";
                              
                              }else{
                                 character.sandbox.runedo.horny=true;
                              runeaction="You start to get hard as the ring starts feeding into host's sex drive.";
                             
                              }
                            
                            
                            break;
                            case "breaking":
                              
                              if(character.sandbox.breakshield){
                                runeaction="There is a burst of energy through you. You can almost feel the runes vibrate to the point of danger! Thankfully this only lasts a moment. You had best NEVER activate this rune again! You may not be as lucky...";
                              
                              character.sandbox.breakshield=false;
                          
                              }else{
                                runeaction="Suddenly the dreamstate just ENDS. There is a burst of energy through you. The warmth of the runes slowly fades away as you fade into sleep....";
                               character.sandbox.runedo.stability=true;     
                              character.sandbox.ringcheck=false;
                              character.sandbox.ringlost=true;
                              character.sandbox.ring=false;
                              character.sandbox.dayringlost= character.qualities.day-20;
                                character.sandbox.ringgone=true;
                                character.sandbox.ringgonereason="broke";
                              }
                             
                              break;
                               case "thoughts":
                              runeaction="You feel a connection establish itself between your mind and host's mind. ";
                              
                              
                              
                              
                              break;
                            case "feedback":
                               runeaction="There is a surge of energy through your entire body as every bit of essence you have collected gets dumped back into you and host! Your entire body gets hard and stiff, and the dreamstate shifts into vivid dreams of sex!";
                               
                               system.animateQuality("essence",0, {displayValue: false, from: 1, to: 0});
                              
                              break;
                            case "merge":
                              
                                
                                runeaction="You feel your entire body grow warm and deepen its connection to host.";
                          dl="./tfup";
                              
                               
                              break;
                            case "unmerge":
                            dl="./tfreversion";
                           runeaction="Your body feels strange as things shift around and you feel more distant from host. You grow bigger and regain some of your features.";
                         
                            break;
                            case "stability":
                              if(character.sandbox.runedo.stability){
                                //no stability, ring merges with player
                                
                                
                                character.sandbox.runedo.stability=false;
                                
                                
                                
                                if(character.sandbox.ringcheck){
                                runeaction="The arcane matrix within the ring destabilizes making it harder for it to exist physically. You feel grow warm and seems to fade away as merges with you.";
                                  
                                }else{
                                  runeaction="The arcane matrix within the ring destabilizes making it harder for it to exist physically.";
                                  
                                }
                                
                                  
                                  
                                  
                               dl="morning/preenter";
                                character.sandbox.ring=true;
                                character.sandbox.ringstuck=false;
                                character.sandbox.ringcheck=false;
                                character.sandbox.ringreallylost=false;
                              }else{
                                 dl="morning/preenter";
                                if(character.qualities.ctf!=100&&character.sandbox.limits.cantalk){
                       
                                  character.sandbox.ringstuck=true;
                                  
                                }else{
                                  character.sandbox.ringcheck=true;
                                }
                                
                                //returns it to normal functioning
                                character.sandbox.runedo.stability=true;
                                
                                runeaction="The arcane matrix within the ring stabilizes making it much easier for it to exist physically.";
                              }
                              break;
                            default:
                              parer("DOOOM...... And this is an error. A rune was activated that doesn't exist the rune was called "+character.sandbox.activerune);
                          }//End of RND switch
                          if(character.sandbox.runeknown.indexOf(character.sandbox.activerune)==-1){
                            
                            character.sandbox.runeholder.splice(character.sandbox.runeholder.indexOf(character.sandbox.activerune),1);
                             character.sandbox.runeknown.push(character.sandbox.activerune);
                          }
                          
                          
                          
                          parer("The rune blazes with power in your mind, your entire body gets stiff as some of that stored up essence flows into the rune! "+runeaction);
                          
                          if(character.sandbox.ring){
                            
                              oper(system, dl, "With the new rune activated.... drift off to sleep....");
                          }else{
                              oper(system, dl, "Drift off to sleep....");
                            
                          }
                          
                        }, //function close
                       
                        "runefail": function (character, system, action) {
                          transer();
                          parer("You try focusing on the rune in your mind but... it feels wrong malformed... Very quickly the dreamstate fluctuates and begins to disolve around you. Everything gets blurry and distant. Regular dreams taking shape as you drift off to sleep.... ");
                          oper(system, "./hostcontro", "Slowly drift off back into sleep......");
                        }, //function close
                        "stealthed": function (character, system, action) {
                          var ch2ringstuck;
                          ch2ringstuck= character.sandbox.ch2&&character.sandbox.firstnight;
                              
                          
                        if (character.qualities.ctf>=100){
                             character.sandbox.fullcock++;
                             console.log("Check if 100 is true " +character.sandbox.fullcock);
                           }
                           var ringassist=0;
                           if (character.sandbox.acc<character.sandbox.discovery){
                             
                             ringassist=5;
                           }
                           if((character.sandbox.fullcock>(2+ringassist)&& character.sandbox.ring)||(ch2ringstuck&&!character.sandbox.ringgone)){
                             if(ch2ringstuck){
                               
                               character.sandbox.firstnight=false;
                             }
                             
                             
                             system.doLink("./stuck");
                         
                           }else{
                             system.doLink("morning/preenter");
                           }
                           
                           
                           
                           
                           
                        }, //function close
                          "newtf": function (character, system, action) {
                          
                          // character.qualities.ctf A number between 0 and 100
                          // first transformation has minimum of 20%
                          // 
          //                  Conversion rate: 
          //   Smaller= 1-1 (20 essence= 1 full tier jump)
          //   larger= 2-1 (40 essence= 1 full tier jump)
          //   Extras= (5 essence to remove, 10 to return)
          //   
          //   COCK
          //20%= minor shrinking, no legs, attached to groin 
          //   
          //40% = surrounded by sheath, Urethral bulge. Can pull into sheath part way, Looks like a hyper fur. Can hide in public.
          //   
          //60% = Far smaller but larger than a cock, can fit in pants.
          //
          //80% = cock sized, no bones, Difficulty moving when hard.
          // 
          //100% = Full conversation, can still move around slightly when soft.
          // 
          //no arms= extra 10%
          //
          //Cock shaped head=extra 5%
          //
          //mental effects 5%
          //Pick your percentage.... Also did I miss any fun configurations?
          
                           // Harmony referes to an array in host [low#,average#,high#]
                           // the numbers are compared to an RND percentage. rnd()>=5 
                           
                           
                           
                           
                           if (character.qualities.ctf>=100){
                             character.sandbox.ringstuck=false;
                             character.sandbox.fullcock++;
                             console.log("Check if 100 is true " +character.sandbox.fullcock);
                           }else{
                             character.sandbox.fullcock=0;
                             
                           }
                           if(character.sandbox.fullcock>2&&!character.sandbox.ringcheck&&character.sandbox.runedo.stability){
                             system.doLink("./stuck");
                            
                           }else{
                           
                          if (character.qualities.harmony >= 60) {
                            //high harmony
                            character.sandbox.htarget = 2;
                          } else if (character.qualities.harmony <= 40) {
                            //low harmony
                            character.sandbox.htarget = 0;
                          } else {
                            //average harmony
                            character.sandbox.htarget = 1;
                          }
                          
                          
          
                          if (character.sandbox.control) {
                                parer("With some effort you manage to concentrate just enough to enter a lucid state without fully waking up. A feeling of floating or melting fills you as other aspects of your surroundings grow stronger. Everything around you feels fuzzy and insubstantial as it becomes clear this is some sort of dreamstate, your body even seems to change to match how you imagine it! The only part that feels real is the warm bright glow of the runes along your sides.<p> host mumbles something in his sleep and suddenly you feel his connection to this dreamstate. New sensations spread over you as his thoughts begin altering the shape of your body!");
                          // Imagine yourself normal, focus on a part of yourself, 
                          //push for control, End the dreamstate, 
                         
                          oper(system, "./control", "Struggle for control", "./stop", "Quickly disperse the dreamstate", "./hostcontro", "Relax and let it happen");
                            
                          } else {
                              parer("Sensations of being partially awake come over you, it's like you're almost dreaming just about to wake. However you can feel the runes along your sides burning slightly and tingling sensations are spreading through your body!");
          
          
          
                            oper(system, "./hostcontro", "Ignore the strange feelings and go back to sleep");
                           // system.doLink("./hostcontro");
                          }
          
                          //keagan harmony: [1, 5,9, 40],
          
                           }
          
          
          
          
          
          
                        }, //function close
                        "tfup": function (character, system, action) {
                         
                        
          var runedotest=((character.sandbox.runedo.head && (character.sandbox.limits.cantalk)) || (character.sandbox.runedo.arms && character.sandbox.limits.hasarms));
          
                          
                          if(character.sandbox.pchoice){
                           //player wants to TF more
                             character.sandbox.pchoice=false;
                            if(character.qualities.ctf==100){
                              system.doLink("./tfmini"); 
                              
                            }else{
                               if (character.qualities.essence >= 20&&!runedotest) {
                              
                              
                              
                              system.doLink("./tfstandard");
                            }else{
                               system.doLink("./tf15");
                            }
                              
                            }
                          
                            
                            
                            
                           
                          }else{
                             //Host wants to TF the player more
                               if ((character.sandbox.tftogo >= 20 && character.qualities.essence >= 20)&&!runedotest) {
                            //PRIMARY Tf stage jump
                              console.log("tf up standard " +character.sandbox.tftogo +" and "+ character.qualities.essence +" but most of all " +!runedotest );
                            system.doLink("./tfstandard");
          
                          } else if (((character.sandbox.host.harmony[3] % 2 != 0))&&character.qualities.ctf!=95) {
                            //bret with his preferance for no arms or mouth. Or just general low harmony
                            // sending to tf15 for possible TF
                            console.log("tf up tf15 " +character.sandbox.tftogo +" and "+ character.qualities.essence +" but most of all " +!runedotest );
                            system.doLink("./tf15");
          
                          } else if(character.qualities.ctf==95&&character.qualities.essence>=20) {
                            
                              system.doLink("./tfstandard");
                          }else{
                            //not enough to do a full jump and not eligable to get one of the lesser tfs
                            system.doLink("morning/preenter");
                          }
                             
                          }
             
          
          
                        }, //function close
                        "tfdown": function (character, system, action) {
                          //Host wants to tf the player down
                          
          
          
                        }, //function close
                        "tf15": function (character, system, action) {
          
                          //special case event function
                          var newtest = "mini";
                          character.sandbox.tfup = true;
                          character.sandbox.tfed = true;
                          var switchesholder;
                          switchesholder = Math.floor(character.qualities.essence / 5);
                          if(switchesholder>3){
                            switchesholder=3;
                            
                          }
          
                          switch (switchesholder) {
          
                           
                            case 3:
                              //15 essence
                              if (character.sandbox.limits.hasarms && character.sandbox.limits.cantalk) {
                                system.animateQuality("essence", character.qualities.essence - 15, {from: 1, to: 0});
                                system.animateQuality("ctf", character.qualities.ctf + 15);
                                //system.animateQuality("tfstatus", character.qualities.tfstatus + 3);
                                newtest = "mini";
                                character.sandbox.tfholder = ((character.sandbox.tfup)?(
                                        "It is a bit of a shock as you discover that you no longer have arms! They seem to have been absorbed into your sides and to make it worse you discover your mouth has been completely taken over by host's urethra, you can still taste in it but find yourself unable to speak. In fact your entire head has shifted slightly to resemble a cock's head. Your eyes are still intact and some of your facial structure "):("The first thing you realize is that your arms have returned! You can actually feel and move them again and after further exploring you find your head also has been restored to normal!"));
          
          
                                character.sandbox.tfresponse = ((character.sandbox.tfup)?("host looks down at you \"Yea..... I suppose it was bound to happen eventually with you becoming my cock\" he says rubbing along your cock like body"):("host gives you a poke\"Bet you are thankfull you can talk again! Still, just because you can doesn't mean you should while in public!\" He warns."));
                                if(character.sandbox.ignore){
                                  
                                  character.sandbox.tfresponse="";
                                }
                                character.sandbox.limits.hasarms = false;
                                character.sandbox.limits.cantalk = false;
                                break;
                              }
                            case 2:
                              //10 essence
                              if (character.sandbox.limits.hasarms) {
                                system.animateQuality("essence", character.qualities.essence - 10, {from: 1, to: 0});
                                //system.animateQuality("tfstatus", character.qualities.tfstatus + 2);
                                system.animateQuality("ctf", character.qualities.ctf + 10);
                                newtest = "mini";
                              
                                character.sandbox.tfholder = (character.sandbox.tfup)? "It is a bit of a shock but you discover that you no longer have arms! They seem to have been absorbed into your sides, leaving you looking far more like a cock shaft." : "";
                                character.sandbox.tfresponse = (character.sandbox.tfup) ? "host looks down at you \"Yea..... I suppose it was bound to happen eventually with you becoming my cock\" he says rubbing along your cock like body" : " ";
            if(character.sandbox.ignore){
                                  
                                  character.sandbox.tfresponse="";
                                  
                                }
                                character.sandbox.limits.hasarms = false;
                                break;
                              }
                            case 1:
                              //only 5 essence
                              // Head becomes cock like can no longer talk
                              if (character.sandbox.limits.cantalk&&!character.sandbox.limits.hasarms) {
                                system.animateQuality("essence", character.qualities.essence - 5, {from: 1, to: 0});
                                //system.animateQuality("tfstatus", character.qualities.tfstatus + 1);
                                system.animateQuality("ctf", character.qualities.ctf +5);
                                newtest = "mini";
                                character.sandbox.tfholder = (character.sandbox.tfup) ? "For the most part hardly anything has changed. You don't find any changes till you realize that your head feels different. Rather quickly you discover your mouth has been completely taken over by host's urethra, you can still taste things but find yourself unable to speak a sound. In fact your entire head has shifted slightly to resemble the head of a penis. Your eyes and some of your facial structure is still intact." : "";
                                character.sandbox.tfresponse = (character.sandbox.tfup) ? "host looks down at you and gasps \"Alright that's.... different. I suppose it was bound to happen eventually with you becoming my cock\" he says giving you a rub along your newly sensitive head." : "";
                                  if(character.sandbox.ignore){
                                  
                                  character.sandbox.tfresponse="";
                                }
                                character.sandbox.limits.cantalk = false;
                                break;
                              }
                              
          
                            case 0:
                            
                            
                            //no essence
                           
                            default:
                              newtest = "mini";
                              character.sandbox.tfup = false;
                              character.sandbox.tfed = false;
                            //something wrong
                          }
                          if (character.qualities.ctf == 100&&character.sandbox.tfed) {
                            newtest = 100;
                          }
                          ;
                          system.doLink("./tf" + newtest);
                        }, //function close
                        "tfstandard": function (character, system, action) {
                          transer();
                          var newtest = "mini";
                          //system.write("<p></p>");
                          console.log("tf standard ");
                          character.sandbox.tfup = true;
                          character.sandbox.tfed = true;
                         
                              //at least 20 essence
                              // changesdd
                              //
                              
                      
                              
                              system.animateQuality("essence", character.qualities.essence - 20, {from: 1, to: 0});
                              var ctfnum;
                              ctfnum=(((character.qualities.ctf+20)>=100)?(100):(character.qualities.ctf+20));
                              
                              
                              system.animateQuality("ctf",ctfnum, {displayValue: false, from: character.qualities.ctf/100, to: ctfnum/100});
                              
                              
                              if(character.qualities.ctf!=100){
                                
                               
                                
                                switch (character.qualities.ctf%20) {
              case 5:
                
                
                
                
                break;
              case 10:
                 character.sandbox.limits.cantalk=true;
                character.sandbox.limits.hasarms=false;
                break;
              case 15:
                character.sandbox.limits.hasarms=false;
                character.sandbox.limits.cantalk=false;
                break;
              default:
                 character.sandbox.limits.cantalk=true;
                 character.sandbox.limits.hasarms=true;
            }//End of RND switch
                              }
                                 
                              newtest=Math.floor(ctfnum/20)*20;
          //                    if(){
          //                      
          //                      
          //                    }
                              
          //                    if (character.qualities.tfstatus > 13) {
          //                      
          //                      
          //                      system.animateQuality("tfstatus", character.qualities.tfstatus + (17 - character.qualities.tfstatus));
          //                    } else {
          //                      system.animateQuality("tfstatus", character.qualities.tfstatus + 4);
          //                    }
                              //newtest = (Math.floor((character.qualities.tfstatus + 3) / 4) * 20);
          
                        
          
                          system.doLink("./tf" + newtest);
          
                        }, //function close
                        "tfreversion": function (character, system, action) {
                          transer();
                          var newtest = "mini";
                          //system.write("<p></p>");
          
                          character.sandbox.tfup = false;
                          character.sandbox.tfed = false;
          
                          //at least 20 essence
                          // changes
                          //
                          //&&Math.floor((character.qualities.tfstatus + 3) / 4) * 20) > 39
                          
                          
                          
                          /// NEW REVERSIONAER
                          var headcheck = false;
                          var remess = 0;
                          var ctfnumnew= character.qualities.ctf;
                          var miniskip = false;
                          if (character.qualities.ctf >= 100) {
                            if (character.qualities.essence >= 30) {
                              
                              
                              
                              ctfnumnew = 90;
                               newtest = Math.floor(ctfnumnew / 20) * 20;
                              remess = 30;
          character.sandbox.tfed = true;
                              headcheck = true;
                             
                              
                              
                                system.animateQuality("ctf", ctfnumnew, {displayValue: false, from: character.qualities.ctf / 100, to: ctfnumnew / 100});
                          system.animateQuality("essence", character.qualities.essence - remess, {from: 1, to: 0});
          character.sandbox.tfed = true;
                            
                              
                            }
          
          
                          } else if (character.qualities.ctf == 20) {
                            //escape check
                            if (character.qualities.essence >= 40&&character.sandbox.activerune=="reversion") {
                              //escaped!!!!!
                              remess = 40;
                              newtest = "escape";
          
                            }
                          } else {
                            //less than 100 but more than 20 mid TF
          
                            var minifocus = false;
                            if ((character.sandbox.runedo.arms && !character.sandbox.limits.hasarms) || (character.sandbox.runedo.head && !character.sandbox.limits.cantalk)) {
                              minifocus = true;
                            }
          
                            if (character.qualities.ctf >= 40 && !minifocus) {
                              //enough to need a full step down but no focus to do head or arms. Or they don't need it
          
                              if (character.qualities.essence >= 30) {
                                ctfnumnew = character.qualities.ctf - 20;
                                remess = 30;
                                newtest = Math.floor(ctfnumnew / 20) * 20;
                                miniskip = true;
                              }
                            }
          
          
          
                            if (!miniskip) {
                              //either focus and need were triggered OR not enough essence to change back at full amount   
                              //OR lower than 40
          
                              var switchhold;
                              switchhold = character.qualities.ctf % 20;
                              //
          
          
                              switch (Math.floor(switchhold / 5) * 5) {
          
                                case 0:
                                //this is actually meaning do both as we are at an even point
                                case 15:
                                  if (character.qualities.essence >= 10) {
          
                                    ctfnumnew = character.qualities.ctf - 5;
                                    remess = 10;
          
                                    headcheck = true;
          newtest = Math.floor(ctfnumnew / 20) * 20;
          
                                  }
                                  break;
                                case 10:
                                  //arms are the only thing to change back
          
                                  if (character.qualities.essence >= 20) {
          
                                    ctfnumnew = character.qualities.ctf - 10;
                                    remess = 20;
                                    character.sandbox.tfholder = "You realize is that your arms have returned! You can actually feel and move them again!";
            if(character.sandbox.ignore){
                                  
                                  character.sandbox.tfresponse="";
                                }
                                    character.sandbox.tfresponse = "host gives you a poke\"Got your arms back I see! We must be doing something right to turn you back! No rubbing me in public though\" He warns.";
                                    character.sandbox.limits.hasarms = true;
          newtest = Math.floor(ctfnumnew / 20) * 20;
          
                                  }
                                  break;
                                case 5:
          
                                  //CAN NEVER HAPPEN!!!!
                                  break;
          
                              } //switch mini end
                            }// miniskip end
                          }
          
                          
                          if(newtest!="mini"){
                              system.animateQuality("ctf", ctfnumnew, {displayValue: false, from: character.qualities.ctf / 100, to: ctfnumnew / 100});
                          system.animateQuality("essence", character.qualities.essence - remess, {from: 1, to: 0});
          character.sandbox.tfed = true;
                            
                          }
          
                        
                          if (headcheck) {
                            character.sandbox.limits.cantalk = true;
          
                            character.sandbox.tfholder = "Rather suddenly you find your jaw is working again! It seems your head has been restored to normal!";
                            character.sandbox.tfresponse = "host gives you a poke\"Bet you are thankfull you can talk again! Still, just because you can doesn't mean you should while in public!\" He warns.";
                              if(character.sandbox.ignore){
                                  
                                  character.sandbox.tfresponse="";
                                }
                          }
          
          if ((character.sandbox.ringcheck && character.sandbox.limits.cantalk && !character.sandbox.ringstuck&&character.sandbox.tfed)&&character.sandbox.runedo.stability) {
                            //first time player has a head since wearing the ring again at night.
                            character.sandbox.ringstuck = true;
          
          
          
                            system.doLink("./partialringstuck");
          
                          } else {
                            if(!character.sandbox.limits.cantalk){
                              character.sandbox.ringstuck = false;
                            }
                            
                            system.doLink("./tf" + newtest);
          
                          }
          
          
                        }, //function close
                        
                     
          //                        character.sandbox.tfholder =
          //                                "The first thing you realize is that your arms have returned! You can actually feel and move them again and after further exploring you find your head also has bee restored to normal!";
          //                        character.sandbox.tfresponse ="host gives you a poke\"Bet you are thankfull you can talk again! Still, just because you can doesn't mean you should while in public!\" He warns.";
          //// (character.sandbox.tfup) ? "host looks down at you \"Yea..... I suppose it was bound to happen eventually with you becoming my cock\" he says rubbing along your cock like body" : 
          //// (character.sandbox.tfup) ? "It is a bit of a shock as you discover that you no longer have arms! They seem to have been absorbed into your sides and to make it worse you discover your mouth has been completely taken over by host's urethra, you can still taste in it but find yourself unable to speak. In fact your entire head has shifted slightly to resemble a cock's head. Your eyes are still intact and some of your facial structure.":
                               "partialringstuck": function (character, system, action) {
                          transer();
                          parer("During the night you feel something strange... the ring is really uncomfortable around your waist. It is just too tight, Almost like your body has grown a bit. You squirm and wiggle around a bit in your sleep till a new tightness forms around your neck. Kind of like a loose collar.... ");
                          
                          character.sandbox.tfholder = "Rather suddenly you find your jaw is working again! It seems your head has been restored to normal! But oddly... the ring is stuck around your neck now! It's not stuck by much though, but its enough that you can't pull it off.";
                                character.sandbox.tfresponse = "host gives you a poke\"Bet you are thankfull you can talk again... but what happened to the ring? Why the heck is it stuck around your neck?\" He ask. A few tugs and complaints later you and he both decide it isn't going wnywhere for now.";
                                
                          oper(system, "./tf" +(character.qualities.ctf-(character.qualities.ctf%20)), "Ignore it and go back to sleep");
                        }, //function close
                        "tfescape": function (character, system, action) {
                          transer();
                          
                          parer("<h1>ESCAPE!</h1>");
                          parer("You wake up and find host snuggled up aginst you, at first you find it comforting then feel a pain in your ass where you feel his cock stuck up inside you, painfully stretching out your ass.<p> It takes a surprising amount of time to realize the implication of this.... Quickly looking down you find your own legs once again below your waist!<p> As you get out of the bed his cock seems rather reluctant to let you go, in fact it feels stuck inside you! Not the normal too large to pull out, more like a suction or glue feeling.");
                          oper(system, "./esyes", "Pull harder", "./esnope", "Relax and pull slowly");
                        }, //function close
                        "esnope": function (character, system, action) {
                          transer();
                          parer("You relax a bit and slowly pull away from host. He mumbles in his sleep suddenly wrapping an arm around your body. Though it isn't to stop you.... it starts rubbing you! Enough of your body is still linked to his that you can feel yourself getting hard! The transformation of your legs halts your mind loses focus on the rune you were concentrating on just before you slept!");
                          parer("For the first time you are fully awake and able to watch as the transformation takes place! You can actually see the runes glowing on your body like strange tattoos! There is also a very faint glow from your legs that are trying to change.... The flesh doesn't move or morph like you might expect. It is much more eerie than that! It's like everytime you blink you see something is different! The glow sort of hurts to look at for too long causing you to blink and find more changes! In this case it's your legs dissapearing into their previous ballsack shape!");
                          oper(system, "./esnopewatching", "Keep watching","./esfocus","Try to focus");
                        }, //function close
                        "esyes": function (character, system, action) {
                          transer();
                      parer("You try to pull harder causing host to grumble in his sleep. You also get the weirdest sensation in your throat! Its like his uretha is pulling all the way through you body where it has connected to your throat! The feeling is unerving but you keep pulling! ");
                       parer("For the first time you are fully awake and able to watch as the transformation takes place! You can actually see the runes glowing on your body like strange tattoos! There is also a very faint glow from your legs that are trying to change.... The flesh doesn't move or morph like you might expect.... It is much more eerie than that! It's like everytime you blink you see something is different! The glow sort of hurts to look at for too long causing you to blink and find more changes! In this case it's your ballsack transforming into legs!!");
                          oper(system,  "./esyeswatching", "Keep watching and pulling");
                        }, //function close
                        "esnopewatching": function (character, system, action) {
                          transer();
                          parer("The transformation is very odd to watch, how it almost seems shy to do anything while you are directly observing! It isn't like the mass or of your body goes anywhere, it is more like it never exsisted in the first place. No mass to energy conversion or magical explaination..... As if instead of transforming into a cock... you are changing reality to where you just are a cock. Every time you blink or look away your body is just a subtle bit different.");
                          oper(system, "./tfmini", "Start to feel a bit sleepy.....");
                        }, //function close
                        "esfocus": function (character, system, action) {
                          transer();
                          parer("You desperetly close your eyes and try to focus on the runic image you had in your mind before the rubbing started... He is still doing it... pulling you closer as if he subconciously didn't want to lose his cock! You don't know if this is going to work so all you can do is hope for the best.....");
                          if(rnd()>5){
                            
                            oper(system, "./esnopewatching", "Open your eyes to watch the transformation");
                          }else{
                            
                                     oper(system, "./esyeswatching", "Open your eyes to watch the transformation");
                          }
                          
                        }, //function close
                        "esyeswatching": function (character, system, action) {
                          transer();
                         parer("The transformation is very odd to watch, how it almost seems shy to do anything while you are directly observing! It isn't like the mass or of your body goes anywhere, it is more like it never exsisted in the first place. No mass to energy conversion or magical explaination..... As if instead of transforming into a person... you are changing reality so you are more of a person. Every time you blink or look away your body is just a subtle bit different.");
                         parer("Finally your feel your insides do... something.");
                          oper(system, "escape/esdone", "Just a bit more!");
                        }, //function close
          
          
                        "incomplete": function (character, system, action) {
                          transer();
                          system.animateQuality("ctf", 20);
                          parer("INCOMPLETE! NO ESCAPE FOR YOU! This will lead to chapter two in the future!");
                          oper(system, "morning/preenter", "OH...... ok");
                        }, //function close
                        "tfreturnmouth": function (character, system, action) {
                          transer();
                          //system.write("<p></p>");
                          parer();
                          oper(system, "", "");
                        }, //function close
                        "tfreturnarms": function (character, system, action) {
                          transer();
                          //system.write("<p></p>");
                          parer();
                          oper(system, "", "");
                        }, //function close
                        "stop": function (character, system, action) {
                          transer();
                          //You do not have runefocus, 
                          //Or host has runefocus
                          // No one has runefocus
          
                          /*
                           if (character.sandbox.runefocus){
                           if (knower("runefocus")){
                           //Host knows what runefocus is
                           
                           
                           
                           } else {
                           //host has no idea about rune focus
                           parer("You force yourself awake the rest of the way and now can CLEARLY feel the heat from the runes. In a way it's almost like\
                           are slowly releasing the heat into you as a tingling sensation. However as you wake up it seems they are rapidly cooling, as if shy you caught them.\
                           ");
                           
                           
                           
                           //alt=(true)?"":"";
                           oper(system,"","");
                           }
                           
                           
                           
                           };
                           //try to get focus
                           //Don't know what focus is, thus learn about focus
                           */
                          spark = true;
          
                          parer("You feel host start to join and influence the dreamstate just as you shake it off. Neither of you had a chance to make any changes. Also you notice the runes feel almost warm along your sides but are rapidly cooling, as if shy you caught them.");
          
          
          
          
                          oper(system, "morning/preenter", "Sleep well knowing you won't wake up with any changes");
                        }, //function close
                        "callforhelp": function (character, system, action) {
                          transer();
                          //system.write("<p></p>");
                          parer();
                          oper(system, "", "");
                        }, //function close
                        "firstfocus": function (character, system, action) {
                          transer();
                          //system.write("<p></p>");
                          parer();
                          oper(system, "", "");
                        }, //function close
                        "focus": function (character, system, action) {
                          transer();
                          //system.write("<p></p>");
          
          
          
                        }, //function close
                        //      }, //function close
                        "runemenu": function (character, system, action) {
                          $("#shopmenu").show(0).animate({opacity: 1}, 100);
                           
                          
                            var icony;
          
           var smtable= document.getElementById("shopmenu");
                          
                            var smholder = "";
                            var xeicon="voub1";
                            var xexe="";
                            for (var c = 0; c < 25; ++c) {
          //                     icony = "<img onclick='shopdescer(" + '"' + xexe + '"' + ")' class='shopicon'  src='media/img/" + xeicon + ".png'>";
          //                    smholder = smholder+"<a class='smtablea'  >"+icony+"</a>";
          //                    
          //                    
          //                    
          //                   
                              
                              icony = "<img id='"+"rune"+c+"' onclick='shopdescer(" + '"' +c+ '"' + ")' class='shopicon'  src='media/img/" + xeicon + ".png'>";
                            smholder = smholder+icony;
                            }
                            
                            
                            
                            
                              //"<img  class='shoppic'  src='media/img/shopanton.png'>"+
                              
                              
                       
                          //shoppic.innerHTML ="<img  id='shopbuy'  onclick='diaperbuyer()' src='media/img/noglow.png'>";   
                          
                            
                            smtable.innerHTML =smholder ;
                        
                        }, //function close
                        "control": function (character, system, action) {
                          transer();
                          if(false){
                            
                            system.doLink("./runemenu");
                            
                            // runes turned upside down to reverse effect, Runes that dont reverse are the same up and down. 
                            //essence    -simple rune
                            //-control    -simple rune Activating the dreamstate
                            //obediance  -medium rune controls the consequnces of harmony
                            //--merging    -medium rune Push the TF down or up
                            //Break      -hidden rune Breaks the ring instantly
                            //finality   -hard rune Reverses the TF if at minimum.
                            //pleasure   -hidden rune More fully connects you to the host
                            //species    -hard rune Horse dong
                            //lust       -medium rune Makes host wannna fuck.
                            //--release    -hard rune Determins the stability of the ring, causes it to fall off.
                            //freedom    -medium rune Determines ability to move
                            //arm        -medium rune arms and head
                          }else{
                            
                            
                            
                            
                          }
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          character.sandbox.pchoice=false;
                          // Impossible to reach with harmony of 10 and up
                          console.log("Testing control. harmony " + character.qualities.harmony);
          
                          var rnddream;
                          rnddream = rnd(10);
          
                          if (spark) {
          
                            parer("With some effort you return to the dream but feel slightly less in control as host joins it as well!");
                            rnddream = rnddream - 1;
                          }
                          //reduced harmony to a simple scale below, above or inbetween anti-absolute 4.5 represented by the harmony arrary locations, [0,1,2,""] where "" is the target
                          // harmony: [9, 5, 1, 90], 
                          if (rnddream < character.sandbox.host.harmony[character.sandbox.htarget]) {
                            //HOST has control!
                           
          
                            parer("You focus on the dream and desperetly push against host's influence on it. It doesn't feel like he is consciously trying to gain control. You can practically feel his emotions and feelings toward you in this state, in fact they seem to fuel his strength here. Unfortunately they also begin shapeing your body as well as the rest of the dream.<p>Soon the dreamscape shifts and your body begins mirroring his internal view of how you should look. You are left drained from the failed effort and lose focus on the dreamscape.");
                            oper(system, "./hostcontro", "Drift back into a deeper sleep");
                            console.log("Testing qualities " + character.qualities.harmony);
                          } else {
                            
                            
                            //You have control of dream    
                            console.log("Testing control of dream, you have it");
                      
                            parer("You focus on the dream and desperetly push against host's influence on it. It doesn't feel like he is consciously trying to gain control. You can practically feel his emotions and feelings toward you in this state, in fact they seem to fuel his strength here.You feel his influence drift slightly as you focus and reinforce your own hold on the dreamstate. <P>Still the struggle seems to have weakened the dream and it's slowly collapsing. Just before falling back asleep you manage to encourage the dream in a direction that hopefully will apply to your physical body. With your last moments of semiconsciousness you manage to focus on one thing.");
                            //options 
                            //learn more about the runes
                            //transform further
                            //transform back
                            //restore arms/head
                            //
                            character.sandbox.pchoice=true;
                            oper(system, "./tfreversion", "Reversing the transformation", "morning/preenter", "Preventing further changes", "./tfup", "Becomeing a cock");
          
                          }
          //"./tfreversion" "./tfup"
                          //system.write("<p></p>");
                          // Taking control of the transformation.
                          //
                          // host has tf target stat based on harmony so.... an array?
                          // [0,0,0]
                          // [9,1,0]
                          //  
                          //   10, host overrides
                          //  8 9 10
                          //  6 7 8 9 10
                          //
                          //
                          // rnd() < array
                          //spark=false;
          
                        }, //function close
                        //      }, //function close
                        "newcontrol": function (character, system, action) {
              
                            parer("You focus on the dream and desperetly push against host's influence on it. It doesn't feel like he is consciously trying to gain control. You can practically feel his emotions and feelings toward you in this state, in fact they seem to fuel his strength here.You feel his influence drift slightly as you focus and reinforce your own hold on the dreamstate. <P>Still the struggle seems to have weakened the dream and it's slowly collapsing. Just before falling back asleep you manage to encourage the dream in a direction that hopefully will apply to your physical body. With your last moments of semiconsciousness you manage to focus on one thing.");
                            //options 
                            //learn more about the runes
                            //transform further
                            //transform back
                            //restore arms/head
                            //
                            character.sandbox.pchoice=true;
                            oper(system, "./tfreversion", "Reversing the transformation", "morning/preenter", "Preventing further changes", "./tfup", "Becomeing a cock");
          
                    }, //function close
                    "newcontrolfail": function (character, system, action) {
                           
          
                            parer("You focus on the dream and desperetly push against host's influence on it. It doesn't feel like he is consciously trying to gain control. You can practically feel his emotions and feelings toward you in this state, in fact they seem to fuel his strength here. Unfortunately they also begin shapeing your body as well as the rest of the dream.<p>Soon the dreamscape shifts and your body begins mirroring his internal view of how you should look. You are left drained from the failed effort and lose focus on the dreamscape.");
                            oper(system, "./hostcontro", "Drift back into a deeper sleep");
                    }, //function close
                        "wake": function (character, system, action) {
                          transer();
                          //system.write("<p></p>");
                          parer();
                          oper(system, "", "");
                        }, //function close
                        "hostcontro": function (character, system, action) {
          
                          //HOST IN CONTROL OF DREAM
                          console.log("REACHED HOSTCONTROL");
                          console.log("Testing2 qualities " + character.qualities.harmony);
                          //important to note this doesn't represent hosts desire to help you, more so their reaction to your behavior and the cutoff point when they think they know better.
          
                          //this should give a standard 1-10 chance and compare it the the harmony trend of the host. 
                          //Mark in control when your harmony is low because he knows you can do better than that. Loses empathy for your situation
                          //Keagen sees the scientific potential for this and unless you piss him off he will want to keep you.
                          //Bret is a bit of a wildcard. Piss him off and he wont be nice, enjoy it too much and he will think you are better off as a cock
                          //Mark's target 80% Almost fully cock easiest to hide.
                          //Brets target 55. Mouth or arms missing he prefers
                          //Keagens target 40, Just small enough to fit in his sheath kinda like a kangaroo
          //                var override;
          //                override=(rnd()>2); //chance the host will just TF them more anyway
                          if ((character.sandbox.tftogo < 0)) {
                            //player is more transformed than host prefers
                            system.doLink("./tfreversion");
                                console.log("tf downer");
                          } else if ((character.sandbox.tftogo > 0)) {
                            //player is less transformed than host prefers
                            console.log("tf uper ");
                            system.doLink("./tfup");
                          } else {
                            //player is right where host wants them. Skip the transformation
                            console.log("tf noper ");
                            system.doLink("morning/preenter");
                          }
          
          
                          {
          
                              }//Old code block, commented out
                        }, //function close
                        ///////////////////////////////////////////////////////////////////////
                        /////////////////////////////TF resuslts/////////////////////
                        ////////////////////////////////////////////////////////////////////////
                        "tf20": function (character, system, action) {
                          transer();
                          if (character.sandbox.tfup) {
          
          
                          } else {
                            character.sandbox.tfholder = "The first thing that hits you is that host's sheath is gone! You have become large enough that you are basically sharing hips with host. Though you are still much smaller than you should be and are missing everything below your waist.";
          
                          }
                          
                          if(character.sandbox.host.host=="bret"){
                            character.sandbox.limits.goout = true;
                            character.sandbox.limits.insheath = 0;
                          }else{
                            character.sandbox.limits.goout = false;
                            character.sandbox.limits.insheath = 0;
                          }
                           
                          
                          system.doLink("morning/preenter");
                        }, //function close
                        "tf40": function (character, system, action) {
                          if(character.sandbox.tfup){
                            if(character.sandbox.enjoyit){
                            
                               character.sandbox.tfholder="The first change you notice is host has regained his sheath, its large enough for most of your body though your head would remain sticking out. It also feels like everything has gotten larger, however a quick glance proves its just you that shrunk. A bit more embarrassing is urethra that runs up your front ending just below your neck!";
                            }else{
                                 character.sandbox.tfholder="The first change you notice is host has regained his sheath, its large enough for most of your body though your head would remain sticking out. It also feels like everything has gotten larger, however a quick glance proves its just you that shrunk. A bit more disturbing is the slight bulge of host's urethra that runs up your front ending just below your neck.";
                            }
                        if(character.sandbox.ignore){
                          
                           character.sandbox.tfresponse= "host looks down at you and shrugs \"Well at least it will be easier getting around with it now\" he says to himself, not even regarding that it was you he was talking about!";
                        }else{
                          character.sandbox.tfresponse= "host looks down at you and shrugs \"Well at least it will be easier getting around with you now\" he says trying to be optimistic";
                          
                        }
                           
                          }else{
                                character.sandbox.tfholder ="Unlike the previous mornings you realize you are too large for host's sheath to hold you completely! Even fully flacid your head would stick out with the opening around your neck.";
                          character.sandbox.tfresponse ="host looks down at you and blinks a few times\"Huh, You look a good bit bigger than last night, you might be able to get back to normal after all if you keep this up!\" he says with a sense of encouragement";
                          }
                      
                          character.sandbox.limits.goout = true;
                          character.sandbox.limits.insheath = 1;
                          system.doLink("morning/preenter");
                        }, //function close
                        
                        "tf60": function (character, system, action) {
          
                          character.sandbox.tfholder = (character.sandbox.tfup) ? "It seems you have become even smaller over the course of the night, enough so that all of your body even your head can fit inside host's sheath." : "Your body feels larger than before and host's sheath feels tighter as well. Quickly checking for more changes you find your body moves easier and feels more your own, mostly small changes but they all seem to show signs of returning to your normal body!";
                          character.sandbox.tfresponse = (character.sandbox.tfup) ? "host looks down at your new size \"Well... I can go back to wearing normal pants again. So that's good...\" he says trying to be optimistic" : "host looks down at your new size \"Geeze if you keep getting bigger I am going to need to wear larger pants again....\" he mentions";
                            if(character.sandbox.ignore){
                                  
                                  character.sandbox.tfresponse="";
                                }
                                 character.sandbox.limits.goout = true;
                          character.sandbox.limits.insheath = 2;
                          system.doLink("morning/preenter");
                        }, //function close
                        
                        "tf80": function (character, system, action) {
          
                          character.sandbox.tfholder = ((character.sandbox.tfup)?("It is getting harder to tell where you begin and the cock ends. Most of your body has started being changed in small but noticeable ways. You are not even sure if you have any bones anymore. When flacid you can still move around normally but erect feels like being filled with concrete"): (" With a huge relief you discover once again you have changed but this time it was toward returning to normal! Some of the shape has returned to your upper body and even your neck has regained some of it's definition."));
                          character.sandbox.tfresponse = ((character.sandbox.tfup)?( "After noticing the changes host gives you a reassuring rub \"If this keeps up there won't be any way to tell you apart from a normal cock\" he says with concern") :("host notices the changes to your body and gives you a pleasent rub\"So it really isn't permanent, see? No need to worry at all!q1"));
                            if(character.sandbox.ignore){
                                  
                                  character.sandbox.tfresponse="";
                                }
                                 character.sandbox.limits.goout = true;
                          character.sandbox.limits.insheath = 2;
                          system.doLink("morning/preenter");
                        }, //function close
                        "tf100": function (character, system, action) {
                          character.sandbox.tfholder = "Your entire body feels.... different than last night. Due to the current state its in you are a having a difficult time determining exactly what is different. With some wiggling and concentration you manage to get a good idea of what you look like now. You don't have arms or eyes anymore, and your mouth is vertical. You seem to feel host's sheath completely comfortable and not even slightly tight and your entire body feels smooth. Other than the fact that you can move around and bend, you have completely become his cock!";
                          character.sandbox.tfresponse = "host looks down noticing the changes and gives you a slight rub.\"Looks like you are fully transformed now, can you even move?\" You quickly wiggle around some to prove you are still alive and aware down here\"Well... at least you can't change any further into my cock.\" He says.";
                            if(character.sandbox.ignore){
                                  
                                  character.sandbox.tfresponse="";
                                }
                                 character.sandbox.limits.goout = true;
                          character.sandbox.limits.insheath = 2;
                          character.sandbox.limits.cantalk = false;
                          character.sandbox.limits.hasarms = false;
                      
                          system.doLink("morning/preenter");
                        }, //function close
                        "tfmini": function (character, system, action) {
          
                          system.doLink("morning/preenter");
                        }, //function close
                          "stuck": function (character, system, action) {
                          transer();
                                  parer("Your dreams during the night as surprisingly vivid! You just feel so comfortable and at home inside of host's sheath! Part of you, well most of you just wants to stay in there forever!");
                                  parer("At some point you feel somthing rather uncomfortable around you. Its like a heavy thing encircling you. You can't see what it is and you don't have arms to feel it. There is no ignoring it, the darn thing just feels wrong. Finally you wake up fully feeling it slightly higher up your shaft like body");
                                  oper(system, "./noring", "Wiggle around to get free of it.");
                          }, //function close
                          
                           "noring": function (character, system, action) {
                        transer();
                        parer("You squirm around till you manage to get it to slip up farther. Whatever it is the darn thing feel heavy and with a bit of work you finally manage to work it up around your neck... well what was your neck. Its a good thing that even though you are 100% cock now you can still move around some. With another few wiggles you manage to get free of it and it is pushed out of the sheath to plop onto the bed..... THE RING!");
                       parer("You can see it now just laying there on the bed! You have been a cock so long the ring must have somehow triggered and seperated from you! It only gets worse as host rolls over in his sleep... and you hear a ping sound from it falling onto the floor!"); 
                        oper(system, "morning/preenter", "Without that ring, you will be a cock forever!");
                        character.sandbox.ring=false;
                          character.sandbox.ringlost=true;
                          character.sandbox.ringcheck=false;
                        character.sandbox.dayringlost=(character.qualities.day+0); 
                      } //function close
                          
                          
                        
                    }, //actions close
                     
                      exit: function (character, system, to) {
                        
          //              if(character.qualities.ctf==55){
          //                
          //                system.setQuality("ctf", 50);
          //              }
          //              if(character.qualities.ctf==35){
          //                
          //              
          //              }
          if(character.qualities.ctf>100){
                          console.log("WTF We went over 100! "+character.sandbox.limits.hasarms+character.sandbox.limits.cantalk);
          system.setQuality("ctf", 100);
                          character.sandbox.limits.hasarms=false;
                          character.sandbox.limits.cantalk=false;
          }
                         
                        clother();
                        if (!character.sandbox.limits.cantalk && !character.sandbox.abilities.think && character.qualities.essence == 0) {
                          system.setQuality("essence", character.qualities.essence + 1);
          
                        }
                        ;
          
                        if (character.sandbox.tfup == false && character.sandbox.tfed == true) {
                          //Transformation took place but reduced %
                          //switch (character.qualities.tfstatus){
          
          
          
                          //}
          
          
          
                        }
          
          
                      }//exit close
                    }//options close
            )
          };