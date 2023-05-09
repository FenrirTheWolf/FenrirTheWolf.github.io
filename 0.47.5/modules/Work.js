undum.game.work = {

    work: new undum.SimpleSituation(
            "", {
  
              // The work block.
              //A bit harder each character has a diffrent job. This section very personalized
              //Possibility of compacting them if player is stuffed in pants
              //jobs, mailman, student, office
              // after an hour decide if should be horny, wait impatiently or BE THE COCK
              //
              //
              //
              //
              //
              //heading:"Inside a sheath"
              /*
               1
               work events 3 messages
      
               work [first two lines are standard]
               
               stealth [3 options for third line]
               
               forgotten [first two lines are standard]
      
               remembered [3 options for third line]
               
               partial  [first two lines are standard]
               
               
               
               
               
               Workday enter messages:
               
               work
               
               timeskip
      
               Partial
               
               
               */
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              enter:function (character, system) {
                
                      if(character.sandbox.forgotten){
                    parer("<h1>"+(character.sandbox.host.workheading2)+"</h1>");
                     return ;
                  }else{
                  parer("<h1>"+(character.sandbox.host.workheading)+"</h1>");
                    
                  }
                
              },
              
              
  
              actions: {
                "hostwork": function (character, system, action) {
             transer();
                  
                  
                     if(character.sandbox.funvalue==1&&false){
                    //RARE EVENT
                    //Requires signature item
                    var hostspecificevent="";
                    system.doLink("./rare"+hostspecificevent);
                    
                  }else{
  
                    
                  if (character.sandbox.forgotten) {
                    //uses harness
                    // Can see a ton of whats happening
                    if(character.sandbox.forgottenfirst){
                      
                      parer(character.host.workenterforgotten);
                        character.sandbox.forgottenfirst=true;
                      if(character.sandbox.host.host=="bret"){
                        
                       parer("host arrives at the post office seeming oddly confident as he strides in. It's a bit hard to tell whats going on from inside his pants but you are able to make decent guesses. He greets the worker at the front desk oddly not making a single pass at them! They do ask how his cute boyfriend is doing these days! He laughs and says they are doing well. After that he picks up a few mail bags and heads out to start his day.");
                       
                       parer("BOYFRIEND!? Bret actually settled on someone!? It is a bit of a shock to hear that the horndog actually found someone to mellow him out! Or maybe it's Will is as horny as Bret is! You sort of remember being inside... someone pretty often over the last few years.... Then you realize it has been years, your memories are foggy but you can feel how long it has been!  It's only right now that you can think clearly enough to focus on your own memories. Maybe he forgot to take the pills.... Or this is just what you are now.");
                      }else{
                        
                               parer("It seems that host's life has changed a bit... You must have been out for years! How long have you been living as his penis!? You don't feel like you missed all the years past, they just feel blurry, only when he takes you out of his pants each day... It's only right now that you can think clearly enough to focus on your own memories. Maybe he forgot to take the pills.... Or this is just what you are now.");
                      }
               
                    
                      }else{
                      
                      parer(character.host.workenterforgotten);
                    }
                    
  
  
                  } else if(character.sandbox.partial) {
                        if(character.sandbox.host.host=="abyss"&&character.sandbox.partial&&!character.sandbox.limits.hasarms){
                    
                      parer(character.host.workenter);
                  }else{
                    parer(character.host.workenterpartial);
                  }
                        
                    if(character.sandbox.permaplugged){
                      if(character.sandbox.limits.cantalk){
                        
                        parer("Even more embarrassing is the fact someone might see you sucking on a metal penis plug! Then again they might just think it was to keep you quiet...");
                      }else{
                                              parer("Even more embarrassing is the fact someone might see you sucking on a metal penis plug! Then again that is the least weird thing about you they will likely notice.");
                        
                      }
                      
                    }else{
                      
           
               
                      
                    }
               
               
                  } else{
                    if(character.sandbox.stealth||character.sandbox.ignore){
                      
                       parer(character.host.workenterstealth);
                    }else{
                      
                      if(character.host.host=="dari"&&character.qualities.ctf==100){
                        parer("host lives just a few doors down from 'Hole in the wall' so it is only a short walk to get there. Though due to the nature of his work being horny all the time is nearly a guarentee. He steps into his booth and strips down ready for the first customer rubbing you up and down with lube! q1Oh right! Sorry I forgot... I mean you look just like my cock... I mean.... No one would noticeq1 He says as he considers using you during the shift!");
                        
                      }else{
                        
                         parer(character.host.workenter);
                      }
                     
                      
                    }
                     
                    
                  }
                  
                  
                  
                 system.doLink("./workops"); 
                }
                  
                }, //function close
                "mail": function (character, system, action) {
                  transer();
                  
                  
                     if(character.sandbox.funvalue==1){
                    //RARE EVENT
                    //Requires signature item
                    
                    system.doLink("./raremail");
                    
                  }else{
                  if (character.qualities.ctf < 60&&(rnd()>7)) {
                  
               character.sandbox.gooutcount++;
    parer("host arrives at the post office without incident, he is being especially careful even using the back entrance. With the harness holding you against his belly and the trenchcoat keeping anyone from seein. Though it also keeps you from moving anything due to the bondage nature of the harness. You can't help but feel a bit embaressed as it almost feels like he is thrusting into... or against... something with each step. host collects a few bags and boxes from the mailroom loading them into his truck for delivery.");
              parer("Instead of the usual teasing remark toward one of his coworkers you hear something a bit different. q1Hey you up for some fun after work Bret?q1. It doesn't sound like one of the employees you have heard before, maybe one of the other delivery guys... Bret fidgets uncomfortably..");
              parer("q1Oh yea sorry, can't today.q1 He says and you can almost hear the confusion from the other person... q1What? That's not like you at all, You feeling ok?q1 You hear him ask. Bret just brushes it off though and continues with his day...");
              
              
              
            //bret can't have sex!!!! So he has to say no to  offers raising suspicion!           
                    
                    }else if(character.qualities.ctf < 40){
    //uses harness
                    // Can see a ton of whats happening
                    
   
  
    parer("host arrives at the post office without incident, he is being especially careful even using the back entrance. With the harness holding you against his belly and the trenchcoat keeping anyone from seeing you it proves to be rather effective. Though it also keeps you from moving anything due to the bondage nature of the harness. You can't help but feel a bit embaressed as it almost feels like he is thrusting into... or against... something with each step. host collects a few bags and boxes from the mailroom loading them into his truck for delivery. You even hear him make a jokeing pass at another worker, they ignore it obviously hearing it from host a thousand times.You know it's going to be a long day if you do nothing, jokingly you wonder how a cock manages it.");
  
  
    
  }else {
                    parer("host arrives at the post office seeming oddly confident as he strides in. It's a bit hard to tell whats going on from inside his pants but you are able to make decent guesses. He greets the worker at the front desk making a few lewd comments toward them, and more concerningly how he would like to use YOU on them! Thankfully they turn him down as if hearing it a hundred times as he heads for the mail room. You know it's going to be a long day if you do nothing, jokingly you wonder how a cock manages it.");
  
                  }
                  
                  
                  
                 system.doLink("./workops"); 
                }
                  
                  
                  // bret, can be at any TF stage, only mention harness for first stage.
             
                  //system.setQuality("timeofday", character.qualities.timeofday + 1);
                }, //function close
                "student": function (character, system, action) {
                  // Pouch or sheath variation. 
                  // no type 1. Sheath version is in pants can't see.
                  // pouch version maybe...... for later anyway
                  transer();
                  alt = (true) ? "" : "";
                   if(character.sandbox.funvalue==1){
                    //RARE EVENT
                    //a presentation
                    
                      system.doLink("./rarestudent");
                    
                  }else{
                  parer("After a short bicycle ride being squished repeatedly between host's legs, the sounds of the college hallways soon surround you. host heads off quickly to his first class of the day, while he does his best to hide any sort of bulge you might make.  Other students funnel into what you can only guess is a lecture hall as you get squshied a bit between host's legs as he sits down. Unfortunately this isn't one of the classes you are taking so even listening to the lecture is boring or just confusing at best without being able to see the visuals the professor is refering to. You know it's going to be a long day if you do nothing, almost makes you wonder how a normal cock manages it.");
                 system.doLink("./workops");
               }
                  // system.setQuality("timeofday", character.qualities.timeofday + 1);
  
  
                }, //function close
                "office": function (character, system, action) {
                  transer();
                  // no variation. 
                  // sits in office all day, boring unless event happens
                  // no type 1
                  // always blinded by pants.
                  //alt=(true)?"":"";
                  if(character.sandbox.stealth){
                    
                    parer("A bumby car ride through town later you hear a change in the surroundings as host arrives at his workplace. You never really asked host about where he works, only that he has an office job. It is probably an 8 hour job and he has no idea you are along for the ride. You hear an electronic BEEP as a door unlocks and host steps inside. You know it's going to be a long day if you do nothing, in a silly way it makes you wonder how a normal cock manages it");
                    system.doLink("./workops");
                  }else{
                    if(character.sandbox.funvalue==1){
                    //RARE EVENT
                    //big important meeting
                    
                      system.doLink("./rareoffice");
                    
                  }else{
                    if(character.sandbox.ignore){
                    parer("A bumby car ride through town later you hear a change in the surroundings as host arrives at his workplace. You never really asked host about where he works, only that he has an office job. You hear an electronic BEEP as a door unlocks and host steps inside. You know it's going to be a long day if you do nothing, in a silly way it makes you wonder how a normal cock manages it");
                      
                    }else{
                          parer(character.host.workenter);
                    
                      
                    }
                    
                    system.doLink("./workops");
                  }
                  
                   
                  }
              
                 
                  // system.setQuality("timeofday", character.qualities.timeofday + 1);
  
  
                }, //function close
                "workops": function (character, system, action) {
                  
                  
                  
                  if(character.sandbox.ch2&&(character.host.workwithcockout=="work"||(character.host.workwithcockout=="full"&&character.qualities.ctf==100))){
                    
                    //chapter 2 host with the ALWAYS HORNY workplace
                    
                    
                    
                    
                     oper(system,"./enjoyout", "Relax into the life of a cock", "./meditate", "Try to act like a normal cock");
                    
                  }else{
                    //chp 1 or chp2 with normal host
                    
               
                  var waity="./wait";
                  var waitywords="Wait impatiently";
                if(character.sandbox.harmonyunlockup&&character.qualities.harmony>70){
              waity="./instinct";
              waitywords="Let your cock instincts take over";
                  }
                  if(character.sandbox.harmonyunlockdown&&character.qualities.harmony<30){
                    if(character.sandbox.limits.insheath>0){
                        waity="./friendly";
                        waitywords="Try to enjoy the day";
                    }
                
                  }
  
                  if (character.sandbox.stealth) {
  
                    if (character.sandbox.forgotten) {
                      if(character.sandbox.ch2&&(character.host.workwithcockout=="partialforgotten"||(character.host.workwithcockout=="forgotten"))){
                            oper(system,"./enjoyout", "Really enjoy being a cock", "./meditate", "Sink back into being a normal cock", "./instinct", "Give in to your instincts" );
   
                        
                      }else{
                       
                      oper(system, waity,waitywords, "./enjoy", "Relax into the life of a cock", "./meditate", "Sink back into being a normal cock");
   
                        
                      }
                   
  
  
  
  
                    } else  {
                      
                      
                      
                      if(character.sandbox.pillroute){
                        
                          oper(system,"./enjoy", "Relax into the life of a cock", "./meditate", "Ponder how a penis gets through a boring day",waity,waitywords);
                      }else{
                        
                        
                        
                        if (character.sandbox.stayhidden) {
                              oper(system, "./alerttease", "Tease him but stealthily", "./enjoy", "Relax into the life of a cock", "./meditate", "Ponder how a penis gets through a boring day");
                      }else{
                        
                           oper(system, "./alert", "Desperetly try getting their attention", "./enjoy", "Relax into the life of a cock", "./meditate", "Ponder how a penis gets through a boring day");
                      }
                        
                      
                        
                    }
  
                  }
                } else {
                  
                  if(character.sandbox.permaplugged){
                    //plugged
                    
                    oper(system, "./plugged", "Struggle with the plug all day", "./meditate", "Ponder how a penis gets through a boring day");
                  }else{
                    //not plugged
                     if (character.sandbox.partial) {
                    //perma partial
                    if (character.sandbox.ch2 && (character.host.workwithcockout == "partialforgotten" || (character.host.workwithcockout == "partial"))) {
                      oper(system, "./enjoyout", "Really enjoy being a cock", "./meditate", "Ponder how a penis gets through a boring day", "./instinct", "Give in to your instincts");
  
                    } else {
                      //not out at work
                      
                      
                      oper(system, waity, waitywords, "./meditate", "Ponder how a penis gets through a boring day");
                    }
  
  
  
  
  
                  } else {
                    //not perma partial
                    //normal cock might be 20-100 might be perma
                    if(character.sandbox.permalock){
                      
                                        
  oper(system, "./caged", "Try to endure the day in the chastity cage","./meditate", "Ponder how a penis gets through a boring day");
                      
                    }else{
                                        
  oper(system, waity, waitywords, "./horny", "Be a horny needy cock", "./meditate", "Ponder how a penis gets through a boring day");
                      
                    }
   
  
                  }
                  }
                 
                      
                    
                  
                    
  
  
                  }
  
                        
  
            
                  }
          
                  
                }, //function close
                "rareoffice": function (character, system, action) {
                  transer();
                  //for office type jobs
                  
                  parer("<h1> RARE EVENT </h1>");
                  
                  parer("A bumby car ride through town later you hear a change in the surroundings as host arrives at his workplace. You never really asked host about where he works, only that he has an office job. You hear an electronic BEEP as a door unlocks and host steps inside. Though today seems to be a bit unusual. Normaly he heads right to his office but today things sound odd, Muffled voices all sounding super official!");
                      
                      
                      parer("This sounds like a really important event! It might be bad if you get hard or move so much it distracts him!");
                  
                  character.sandbox.funmidholder2="host suddenly stands up and moves to the front of the room! He must be giving some sort of important report! For all you know a bunch of his really important bosses and coworkers could be staring right at you! They would be sure to notice if he suddenly got an unwanted erectioin!";
                  character.sandbox.funholder="The muffled voices continue to talk above you. But you can tell how focused host is, it must be a tense meeting.",
                          character.sandbox.funexit="work/rareofficeexit";
                  
                  oper(system, "rareminigame/screwgame", "Focus!");
                }, //function close
                "rareofficeexit": function (character, system, action) {
                  transer();
                  switch (character.sandbox.funresult) {
                    case 3:
                    
                    parer("Thankfully you were very well behaved the entire time and didn't cause him any trouble during the meeting!");
                    
                    case 0:
                      //success
                      parer("The meeting finally ends after a long period of time and host collects his things and heads back to his office. ");
                      
                       var eventmid="events/halfway2";
                  if (character.sandbox.ws&&(rnd()>5||character.sandbox.reqwater)){
                    //sending to the bathroom encounter
                    
                    eventmid="events/restroom2";
                  }
                    parer("The rest of the day at the office goes by reletivly quickly after all that.");
             
                  oper(system, eventmid, "Relax for for the remaining time");
                      break;
                    case 1:
                      //got too horny
                      
                      parer("You just couldn't help yourself and all that trying not to think about being horny practically made you think about being horny! Rather quickly your body began to harden up and slip free of his sheath right in the middle of the meeting! host seemed very distracted the rest of the time, desperately hoping you would soften up before he had to stand up again. ");
                       oper(system, "./acup","You didn't mean to get him horny!","./acdown","He could have rubbed you under the table!!");      
                      break;
                    case 2:
                      //wiggled too much
                 parer("Being still for so long isn't easy! You couldn't help but throbb and twitch every now and then just to keep yourself occupied. host ends up shifting around bumping over his own words duing the meeting! The meeting finally ends after a long period of time and host collects there things and heads back to their office. You have a feeling host might not be happy with you tonight.");
                      
                      
                      break;
                  }//End of RND switch
                  
                   
                }, //function close
                   "rarestudent": function (character, system, action) {
                  transer();
                  //for student type jobs
                  parer("<h1> RARE EVENT </h1>");
                  
                  
                  parer("After a short bicycle ride being squished repeatedly between host's legs, the sounds of the college hallways soon surround you. host heads off quickly to his first class of the day, while he does his best to hide any sort of bulge you might make.  Other students funnel into what you can only guess is a lecture hall as you get squshied a bit between host's legs as he sits down.");
                  parer("A little ways through the day something differant happens. host stands up and the entire class goes quiet, he walks around a bit and starts talking! He must be giving a presentation or something! Even worse that means countless people could be looking RIGHT AT YOU!");
                      
                      
                      parer("This seems like a really important event! It might be bad if you get hard or move so much it distracts him!");
                  
                  character.sandbox.funmidholder2="host has been talking for a while now about something complicated. You hear a new voice as he starts responding to questions from the teacher.";
                  character.sandbox.funholder="host continues to give his presentation. You try to listen but he keeps mentioning things he has written on the board so most of it lacks context.",
                          character.sandbox.funexit="work/rarestudentexit";
                  
                  oper(system, "rareminigame/screwgame", "Focus!");
                }, //function close
                "rarestudentexit": function (character, system, action) {
                  transer();
                  switch (character.sandbox.funresult) {
                    case 3:
                    
                    parer("Thankfully everything went well enough and he even sounded pleased with the presentation. You managed to control your arousal perfectly!");
                    case 0:
                      //success
                      parer("The presentation finally ends and host goes back to his seat. The next few people get up to present in the same way taking up most of the day.");
                           var eventmid="events/halfway2";
                  if (character.sandbox.ws&&(rnd()>5||character.sandbox.reqwater)){
                    //sending to the bathroom encounter
                    
                    eventmid="events/restroom2";
                  }
                  oper(system, eventmid, "Try to relax for for the remaining time");
                      
                      break;
                    case 1:
                      //got too horny
                      
                       parer("You start to feel yourself get hard in hosts sheath, a bulge forming in his pants right on front of everyone! You can almost tell how much he is blushing. He does his best and rushes through the rest of his presentation! It finally ends and host goes back to his seat. The next few people get up to present in the same way and it takes up most of the day.");
                       oper(system, "./acup","You didn't mean to get him horny!","./acdown","He could have rubbed you under the table!!");     
                      break;
                    case 2:
                      //wiggled too much
                      parer("You just couldn't help it, being still for so long isn't easy! You couldn't help but throbb and twitch every now and then just to keep yourself occupied. host ends up shifting around bumping over his own words duing the presentation !  It finally ends and host goes back to his seat. The next few people get up to present in the same way and it takes up most of the day. You have a feeling host might not be happy with you tonight.");
                      
                      
                      break;
                  }//End of RND switch
                   
               
                }, //function close
                 "raremail": function (character, system, action) {
                  transer();
                  //for mail type jobs
                  parer("<h1> RARE EVENT </h1>");
                  if (character.qualities.ctf < 40) {
                    //uses harness
                    // Can see a ton of whats happening
  
                    parer("host arrives at the post office without incident, he is being especially careful even using the back entrance. With the harness holding you against his belly and the trenchcoat keeping anyone from seeing you it proves to be rather effective. Though it also keeps you from moving anything due to the bondage nature of the harness. You can't help but feel a bit embaressed as it almost feels like he is thrusting into... or against... something with each step. ");
  
  
                  } else {
                    parer("host arrives at the post office seeming oddly confident as he strides in. It's a bit hard to tell whats going on from inside his pants but you are able to make decent guesses. He greets the worker at the front desk making a few lewd comments toward them, and more concerningly how he would like to use YOU on them! Thankfully they turn him down as if hearing it a hundred times as he heads for the mail room.");
  
                  }
              parer("About half way through the day something strange seems to be happening. host seems to be pulling something rather heavy onto his back and is carrying it somewhere. A few moments later he starts talking with someone asking for their signature! This seems like a complex delivery...");
                  
                
                      
                      
                      parer("This seems like a really important event! It might be bad if you get hard or move so much it distracts him!");
                  
                  character.sandbox.funmidholder2="There seems to be some sort of complication as the package requires payment on delivery. And the recipient is refusing....";
                  character.sandbox.funholder="host and the other person keep talking, not exactly arguing but more trying to solve a situation.",
                          character.sandbox.funexit="work/raremailexit";
                  
                  oper(system, "rareminigame/screwgame", "Focus!");
                }, //function close
                   "raremailexit": function (character, system, action) {
                  transer();
                  switch (character.sandbox.funresult) {
                    case 3:
                    
                    parer("It seems you didn't make the situation any more difficult thankfully!");
                    
                    
                    case 0:
                      //success
                      parer("An hour has gone by with phone calls going on from the recipient and all sorts of things, but finally host manages to get the package paid for and delivered.");
                      
                        parer("The rest of his mail delivery day goes by a bit quicker than usual after that long delay.");
                    var eventmid="events/halfway2";
                  if (character.sandbox.ws&&(rnd()>5||character.sandbox.reqwater)){
                    //sending to the bathroom encounter
                    
                    eventmid="events/restroom2";
                  }
                  oper(system, eventmid, "Try to relax for the remaining mail deliverys");
                      break;
                    case 1:
                      //got too horny
                      
                       parer("You start to feel yourself get hard and rather horny. host can't help but thrust his hips once or twice just on instinct. And you hear him make a few passes at the guy he is dealing with. You end up sliding all the way out of his sheath as only the coat he is wearing is stopping you from being discoverd!");
                       oper(system, "./acup","You didn't mean to get him horny!","./acdown","No one could see you anyway with his coat on.");  
                      break;
                    case 2:
                      //wiggled too much
                      parer("host keeps shifting his legs around each time you move. Eventually it just gets too distracting and he has to put his package down. The other person notices his discomfort and asks if he is ok and he laughs it off.");
                      
                      
                      break;
                  }//End of RND switch
                 
                }, //function close
                "caged": function (character, system, action) {
                  transer();
                  alt = (true) ? "" : "";
                  //parer("");
                  if(character.sandbox.perma){
                    system.setQuality("dignitylost",character.qualities.dignitylost+1 );
                   
                 }
                  character.sandbox.eventholder="caged";
                  system.doLink("events/enter");
                  
            }, //function close
            "plugged": function (character, system, action) {
                  transer();
                  alt = (true) ? "" : "";
                  //parer("");
                  system.setQuality("harmony", character.qualities.harmony + 2);
                  character.sandbox.eventholder="plugged";
                  system.doLink("events/enter");
                  
            }, //function close
                "meditate": function (character, system, action) {
                  transer();
                  alt = (true) ? "" : "";
                  //parer("");
                 if(character.sandbox.perma){
                    system.setQuality("dignitylost",character.qualities.dignitylost+1 );
                   
                 }else{
                   
                    system.setQuality("harmony", character.qualities.harmony + 1);
                 }
                  
                 
                  character.sandbox.eventholder="meditate";
                  system.doLink("events/enter");
                  
                  //system.setQuality("timeofday", character.qualities.timeofday + 1);
  
  
                }, //function close
                      "instinct": function (character, system, action) {
                  transer();
                  alt = (true) ? "" : "";
                  //parer("");
                  system.setQuality("harmony", character.qualities.harmony + 2);
                  character.sandbox.eventholder="instincts";
                  system.doLink("events/enter");
                  
                  //system.setQuality("timeofday", character.qualities.timeofday + 1);
  
  
                }, //function close
                "horny": function (character, system, action) {
                  transer();
                  
                  character.sandbox.eventholder="horny";
                    system.setQuality("harmony", character.qualities.harmony - 1);
                  system.doLink("events/enter");
                  //system.setQuality("timeofday", character.qualities.timeofday + 1);
                
  
                }, //function close
                 "alert": function (character, system, action) {
                  transer();
                   character.sandbox.discovery++;
                  character.sandbox.eventholder="alert";
                  system.setQuality("harmony", character.qualities.harmony - 1);
                  system.doLink("events/enter");
                  //system.setQuality("timeofday", character.qualities.timeofday + 1);
                  
  
                }, //function close
                 "alerttease": function (character, system, action) {
                  transer();
                   character.sandbox.discovery++;
                  character.sandbox.eventholder="alerttease";
                  system.setQuality("harmony", character.qualities.harmony - 1);
                  system.doLink("events/enter");
                  //system.setQuality("timeofday", character.qualities.timeofday + 1);
                  
  
                }, //function close
                           "friendly": function (character, system, action) {
                  transer();
                
                  character.sandbox.eventholder="friendly";
                  //system.setQuality("harmony", character.qualities.harmony - 1);
                  system.doLink("events/enter");
                  //system.setQuality("timeofday", character.qualities.timeofday + 1);
                  
  
                }, //function close
                 "enjoy": function (character, system, action) {
                  transer();
                   character.sandbox.acc++;
                  character.sandbox.eventholder="enjoy";
                  //system.setQuality("harmony", character.qualities.harmony +1);
                  system.doLink("events/enter");
                  //system.setQuality("timeofday", character.qualities.timeofday + 1);
                  
  
                }, //function close
                               "enjoyout": function (character, system, action) {
                  transer();
                   character.sandbox.acc++;
                  character.sandbox.eventholder="enjoyout";
                  //system.setQuality("harmony", character.qualities.harmony +1);
                  system.doLink("events/enter");
                  //system.setQuality("timeofday", character.qualities.timeofday + 1);
                  
  
                }, //function close
                "wait": function (character, system, action) {
                  transer();
                  
                  //parer("It is terribly boring to do nothing for long periods but you do your best to hold out. Listening to things happening around host as he goes though his day makes it somewhat easier, but not by much. Occasionally you have to wiggle around or stretch a bit just to stay comfortable. Somtimes resulting a quick poke. Still it seems host is happy with your obediance and caution" + alt);
                  character.sandbox.eventholder="wait";
                  
                //system.setQuality("harmony", character.qualities.harmony - 1);
                  //system.setQuality("timeofday", character.qualities.timeofday + 1);
                  system.doLink("events/enter");
                  //oper(system, "returner", "Workday not done yet");
                }, //function close
                   "acup": function (character, system, action) {
                  transer();
                  character.sandbox.funresult=0;
                 if(character.sandbox.perma){
                    system.setQuality("dignitylost",character.qualities.dignitylost+1 );
                   
                 }
                  system.doLink(character.sandbox.funexit);
                }, //function close
                "acdown": function (character, system, action) {
                  transer();
               character.sandbox.funresult=0;
                 if(character.sandbox.perma){
                    system.setQuality("dignitylost",character.qualities.dignitylost-1 );
                   
                 }
                  system.doLink(character.sandbox.funexit);
                } //function close
             
              }//actions close
            }//options close
    )
  
  };