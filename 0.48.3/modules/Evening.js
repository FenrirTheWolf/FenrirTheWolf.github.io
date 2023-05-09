undum.game.evening = {

  evening: new undum.SimpleSituation(
          "", {
            actions: {
              "enter": function (character, system, action) {
                if(character.sandbox.ringcheck){
                  
                  
//                  
//                  if(!character.sandbox.ringstuck){
//                    character.sandbox.ring=false;
//                  }
//                
//              
//                
//                
                
                }
              
             /// EVENING THINGS THAT NEED TO BE BUILT!
             //       evening out teasing/masturbate
             //       evening stealth masturbature
              
              
              
              
                console.log("testigng evening ");
  character.sandbox.erect=false;
            character.sandbox.clothed = true;
            clother(); 
            
                system.doLink("./evegoto");
                
                
                
           
//            if (character.sandbox.limits.insheath == 0 && character.sandbox.host.host != "bret") {
//             
//            } else {
//              if (character.sandbox.eventspeedlock) {
//                oper(system, "./evegoto", "Continue to the evening", "./bad", "(Change speed)");
//
//              } else {
//                if (character.sandbox.eventspeed < 750) {
//                  oper(system, "./slower", "Hope tomorrow goes by slower", "./good", "Day went by fine");
//
//                } else {
//                  oper(system, "./faster", "Hope tomorrow goes by faster", "./slower", "Hope tomorrow goes by slower", "./good", "Day went by fine");
//
//                }
//              }
//            }


                
              }, //function close
              "fromhospital": function (character, system, action) {
                transer();
              character.sandbox.erect=false;
              character.sandbox.clothed=false;
            clother();
                
                parer("host settles in at home and seems to get a few odd phone text messages. He doesn't let you see them but clearly they are from various people finding out! Pretty soon he just turns his phone off..... "+character.host.nowpartial);
                
                
                
               // parer("(partial route active but opening scenes at dayjob will come in a later update. Remind me to do this during the next stream!!!!)");
                
                
                
                
                oper(system, "./fromhome", "Continue with the evening");
              }, //function close
               "evegoto": function (character, system, action) {
                 
                 console.log("testigng evening evegoto " +character.sandbox.limits.insheath);
             if(character.sandbox.host.host=="bret"&&!character.sandbox.frombook){
               
                  system.doLink("./fromworkbret");
      
               
             }else{
                if((character.sandbox.limits.insheath==0&&!character.sandbox.partial)||character.sandbox.frombook|| character.sandbox.weekendathome){
               
                character.sandbox.weekendathome=false;
               
                  system.doLink("./fromhome");
      
             }else{
               
               system.doLink("./fromwork");
             }
               
               
             
                
                //system.doLink("./fromhome");
               
             }
            
             
              }, //function close
              "faster": function (character, system, action) {
                character.sandbox.eventspeed= character.sandbox.eventspeed-250;
              system.doLink("./evegoto");
              }, //function close
              "slower": function (character, system, action) {
                 character.sandbox.eventspeed= character.sandbox.eventspeed+250;
                system.doLink("./evegoto");
              }, //function close
              "good": function (character, system, action) {
                character.sandbox.eventspeedlock= true;
                system.doLink("./evegoto");
              }, //function close
              "bad": function (character, system, action) {
                transer();
               character.sandbox.eventspeedlock= false;
                system.doLink("./enter");
              }, //function close
              "fromworkbret": function (character, system, action) {
                //was at work, just got home
                transer();
               
                alt=(harn())?"the harness dangleing underneath him":"his tight sheath";
                parer("host finally arrives back home after the long day. Much longer for you trapped inside #alt. He finishes putting his stuff away and settles down. First thing heading to the kitchen to get some food.");
                if(character.sandbox.stealth){
                  
                    character.sandbox.erect=false;
              character.sandbox.clothed=true;
            clother();
                  system.doLink("./stealthroute");
                
                //BREAKING THE TULES! PUTING IT TO THE MAN!
                
                }else{
                  
                  
               
                
                
                
                if(harn()){
                          character.sandbox.erect=true;
              character.sandbox.clothed=true;
            clother();
                  system.doLink("./athomeout");
                  
                }else{
                  
                   if (character.qualities.harmony >= 70) {
                  //high or low harmony
                                character.sandbox.erect=false;
              character.sandbox.clothed=true;
            clother();
                  system.doLink("./keepsyouin");
                
                  
                  
                }else if(character.qualities.harmony <= 40){
                                                  character.sandbox.erect=false;
              character.sandbox.clothed=false;
            clother();
                  
                 system.doLink("./letsyouout");  
                }else{
                    if(rnd()>3){
                                                      character.sandbox.erect=false;
              character.sandbox.clothed=false;
            clother();
                    system.doLink("./letsyouout");
                    
                  }else{
                                                    character.sandbox.erect=false;
              character.sandbox.clothed=true;
            clother();
                      system.doLink("./keepsyouin");      
                  }
                  
                  
                }
                  
                };
                 alt="";
                }
              }, //function close              
             "fromhome": function (character, system, action) {
                //was at home, now still at home
                //this means very low TF level.
                character.sandbox.frombook=false;
                 console.log("testigng evening fromhome");
                transer();
                
                if(character.sandbox.stealth){
                  if(character.sandbox.stayhidden){
//                      parer("As it approaches late afternoon host starts getting his dinner ready. It's odd not feeling the urge to eat, but in a weird way he is unknowingly eating for you. He still doesn't have the slightest clue you are there. Though every time he reaches down to adjust you or scratch it sends a shiver of panic that you might have moved in a way that caught his attention.");
//                
//                    
               
                  }else{
                    
                     parer("As it approaches late afternoon host starts getting his dinner ready. You are just along for the ride. It's odd not feeling the urge to eat. You haven't felt hungry even once since this all started. You do have this weird... full feeling through. It comes from really far below you and it kind of worries you knowing exactly what is down there.");
                
                
                  }
                  system.doLink("./stealthroute");
                }else{
                  //not stealth
                  if(character.sandbox.limits.goout){
              parer(["As it approaches late afternoon host starts getting his dinner ready. You are mostly just along for the ride.","The time continues on to late in the afternoon as you can hear host's belly rumble. He gets started to make dinner with you just along for the ride.","Dinner seems to be the only thing on host's mind as he goes about the kitchen, not really paying you much attention at all."]);

              
             system.doLink("./fromdecider");
              
                  }else{
                    //not allowed out of the house!
                    
                    //eventually ends going into partial
                    if(character.sandbox.perma){
                      if(character.sandbox.ignore){
                        
                        
                      }else{
                        
                        //
                        //THis section should be about weather or not to go see someone about your condition leading into partial!
                        
                        //DOES EFFECT dignity! So being a cock or an individual
                       
                        
                        
                         parer("As it approaches late afternoon host starts getting his dinner ready. You are mostly just along for the ride. Every now and then you might say something to each other but its pretty basic stuff. As he finally sits down to eat he gives you a look. q1I think having you down there is making me more hungry! We really have to see someone about this.q1 he says and gets back to his meal.");
                         
                         
                         
                         
                      }
                            
                
                
                
                
                
                  system.doLink("./athomeout2");
                    
                    }else{
                      var parparts="";
                      parparts="As it approaches late afternoon host starts getting his dinner ready. You are mostly just along for the ride. Every now and then you might say something to each other but its pretty basic stuff. As he finally sits down to eat he gives you a look.";
                      
                 // This section should deal with not being able to leave the house but still able to change shape
                 
                 // question should revolve around making you small enough to leave the house!
                      if(character.sandbox.host?.plantokeep){
                        
                        parer(parparts+"q1Need to find a way to actually fit you in my pants, would make things a lot easier.q1 he says and gets back to his meal. It is a bit hard with your size causing him to be stuck at home. You know he has no intention of letting you change back... so there is only one way to go...");
                        
                      }else{
                          parer(parparts+"q1We really need to find a way to change you back or, give in and let it turn you more fully into a cock... Just for a while.q1 he says and gets back to his meal. It is a bit hard with your size causing him to be stuck at home. Thankfully he is actually open to the idea of helping you change back. Now if only you could convince your self that you want to...");
                        
//                        parer(["q1Feels a bit rude not feeding you too, sorry about that. Then again maybe that is one of the perks being a part of me.q1 he says and gets back to his meal. Its odd not feeling the urge to eat. You haven't felt hungry even once since this all started. You do have this weird... full feeling through. It comes from really far below you and it kind of worries you knowing exactly what is down there.",
//                          "q1I really need to eat more protein to make up for everything you've been using...q1 he says with a snicker and gets back to his meal. The comment makes you blush... if you even still can. The idea that your size might be making him need to change his diet just to keep up with your ogsamic needs!",
//                          "q1I think having you down there is making me more hungry than usual. Might be all the moving around you keep doing...q1 He suggests and goes back to his food."]);
//                        
//                         oper(system, "./", "Casually agree with him","./","./","Or you could focus on changing back!");
//                            
//                        
//                        
//                        switch (rnd(3)) {
//                          case 1:
//                            
//                           
//                            
//                            break;
//                          case 2:
//                            oper(system, "./", "He does have a point",);
//                            break;
//                          case 3:
//                            
//                            break;
//                         
//                        }//End of RND switch
//                        
//                        
                        
                      }
                     
                
                
                  system.doLink("./athomeout2");
                    
                    }
                         
                    
                  }
            
                }
                
                
                
              }, //function close
              "fromwork": function (character, system, action) {
            transer();
        parer("host finally arrives back home after the long day. Much longer for you trapped inside his tight sheath all day. He finishes putting his stuff away and settles down.");
            system.doLink("./fromdecider");
          }, //function close
              "fromdecider": function (character, system, action) {
                transer();
                
              
                
                 if(character.sandbox.stealth){
                                                        character.sandbox.erect=false;
              character.sandbox.clothed=true;
            clother();
                  system.doLink("./stealthroute");
        
                
                }else{
                  if(character.sandbox.permalock||character.sandbox.permaplugged){
                    if(character.sandbox.permalock){
                  
                      system.doLink("./caged");
                    }else{
                      
                      system.doLink("./plugged");
                    }
                    
                    
                    
                  }else{
                  
                if ((character.qualities.harmony >= 60&&character.qualities.ctf>55)||character.sandbox.ignore2) {
                  //high or low harmony
                                                      character.sandbox.erect=false;
              character.sandbox.clothed=true;
            clother();
                       system.doLink("./keepsyouin");    
                  
                  
                }else  if(character.qualities.harmony <= 40){
                                                       character.sandbox.erect=false;
              character.sandbox.clothed=false;
            clother();
                 system.doLink("./letsyouout");  
                }else{
                  
                   if(rnd()>3){
                                                          character.sandbox.erect=false;
              character.sandbox.clothed=false;
            clother();
                    system.doLink("./letsyouout");
                  }else{
                                                         character.sandbox.erect=false;
              character.sandbox.clothed=true;
            clother();
                      system.doLink("./keepsyouin");      
                  }
                  
                  
                }
              }
                }
              
              }, //function close
              "caged": function (character, system, action) {
            transer();
      parer("Still trapped in the cage all you can try not to get hard as he goes about his evening. You hear him opening the fridge. Getting out something to eat, completely ignoring you. Not like he could do anything with you trapped like this, then again that is the point of such cages... It's so unfair to be desperate to be rubbed and feeling so horny yet being trapped INSIDE a chastity cage! Its just so wrong and unfair");
            oper(system, "./inhappy", "Keep still","./inunhappy","Wiggle and struggle!");
          }, //function close
          "plugged": function (character, system, action) {
            transer();
            character.sandbox.erect=true;
            character.sandbox.clothed=false;
            clother();
            if(character.sandbox.ignore){
              
                  parer("On the way to the kitchen he thankfully opens his pants up finally letting you have some air, only to grab the plug ring and pull slightly! q1Hehe I really do love how that feels.q1 He says with a chuckle. To be fair, even you have started to get used to the feeling of it, and that light tug did send a shiver of pleasure. For a moment you actually consider wanting it to stay inside you!");
            }else{
                 parer("On the way to the kitchen he thankfully opens his pants up finally letting you have some air, only to grab the plug ring and pull slightly! q1Hehe I really do love how that feels. Actually I think I will keep it in a bit longer, I don't hear you complainingq1 He says with a chuckle. To be fair even you have started to get used to the feeling of it, and that light tug did send a shiver of pleasure. For a moment you actually consider wanting it to stay inside you!");
              
            }
    oper(system, "./athomeout", "Relax a bit enjoying some open");
          }, //function close
              "stealthroute": function (character, system, action) {
                transer();
                
                if(character.sandbox.pillroute){
                   system.doLink("./pillroute");
                  
                }else if(character.sandbox.forgotten){
                  
                  system.doLink("./forgottenroute");
                }else{
                  
                  if(character.sandbox.stayhidden){
                     parer("He may be home but you are still trapped in his sheath. The one bad thing about staying hidden, he never lets you out! You can hear him opening the fridge. Getting out something to eat, completely ignoring you as he should... Treating you just like a normal penis. He might be home and alone but not everyone takes off their pants at home. If he doesn't need his cock for something then why would he let you out? You could just stay like this forever... making his sheath is your permanent home.");
                  oper(system, "./inhappy", "Just accept it an enjoy his warm sheath","./unhappystealth","Tease him a bit so he might let you out!");
                
                    
                  }else{
                     parer("He may be home but you are still trapped in his sheath, he doesn't even know you are there to let you out! You can hear him opening the fridge. Getting out something to eat, completely ignoring you as he should... Treating you just like a normal penis. He might be home and alone but not everyone takes off their pants at home. If he doesn't need his cock for something then why would he let you out? If anything his sheath is your home now.");
                 oper(system, "./inhappy", "Just accept it an enjoy his warm sheath","./unhappystealth","Squrim around hoping he notices!");
                
                    
                  }
                
            
                }
             
                //in happy is hybrid route
                
                
                
              }, //function close
                   "pillroute": function (character, system, action) {
                transer();
                
                
                 parer("He may be home but you are still trapped in his sheath, as far as he knows you just thinking cock thoughts and completely content to stay trapped in his pants! Then again maybe its true.... You can hear him opening the fridge. Getting out something to eat, completely ignoring you... Treating you just like a normal penis. If he doesn't need his cock for something then why would he let you out? If anything his sheath is your home now.");
              
               oper(system, "./inhappypills", "Just enjoy the evening in your warm moist home");
                
                //in happy is hybrid route
                
                
                
              }, //function close
                   "forgottenroute": function (character, system, action) {
                transer();
                
                
               parer("He may be home but you are still trapped in his sheath, right where you belong. You can hear him opening the fridge. Getting out something to eat, completely ignoring you... Treating you just like the normal penis you have become. Normally you just glide though this part of his day without thinking anything. Just wating for his body to need you next.");
              
               oper(system, "./inhappyforgotten", "Relax within your home in his sheath");
                
                //in happy is hybrid route
                
                
                
              }, //function close
              "letsyouout": function (character, system, action) {
                transer();

                if(character.qualities.ctf==100){
                  
                    parer("On the way to the kitchen he thankfully opens his pants up finally letting you have some air! q1Ah that's better, my dick could use some time out of those pants... Almost forgot to do that once in a while.q1 He says but more to himself rather than you.... He does gives the sheath around you a soft rub though. It feels really nice being squeezed even slightly inside the damp tight space! Even better your whole body starts to warm and harden, allowing you to slip out of the sheath a bit.");
                }else{
                  
                  parer("On the way to the kitchen he thankfully opens his pants up finally letting you have some air! q1Don't worry I hadn't forgotten about you in there. No reason to keep you hidden while we are at home.q1 He says and gives the sheath around you a soft rub. It feels really nice being squeezed even slightly inside the damp tight space! Even better your whole body starts to warm and harden, allowing you to slip out of the sheath a bit.");
                  
                  
                  
                  if(!character.sandbox.weekend&&!character.sandbox.partial){
                    if(character.qualities.ctf<60&&character.sandbox.ctfrolemod!="bod"){
                      character.sandbox.gooutcount++;
                      
                      parer(character.host["almostcaught"+character.sandbox.ctfrolemod]);
                      
                     
                    }
                    
                  }
                  
                 
                  
                  
                  
                  
                }
               
                oper(system, "./athomeout", "Relax a bit enjoying some open air for once!");
              }, //function close
              "keepsyouin": function (character, system, action) {
                transer();
                         if(!character.sandbox.weekend){
                    if(character.qualities.ctf<60&&character.sandbox.ctfrolemod!="bod"){
                      character.sandbox.gooutcount++;
                      
                     // parer(character.host["almostcaught"+character.sandbox.ctfrolemod]);
                      
                     
                    }
                    
                  }
                  
                   
                  
                  
                  
                parer("You wait rather expectantly for him to eventually let you out. Or at least talk to you. But instead he just goes about his evening, you can hear him opening the fridge. Getting out something to eat, completely ignoring you. Treating you just like a normal penis. He might be home and alone but not everyone takes off their pants at home. If he doesn't need his cock for something then why would he let you out?");
                
              if(character.sandbox.perma){
                
                
                if(character.sandbox.ctfrole=="possessive"||character.sandbox.ctfrole=="bodypart"){
                   oper(system, "./inok", "Be a good patient cock",
                ((character.sandbox.limits.cantalk)?("./chatnope"):null),"Try talking to him ",
               ((character.sandbox.limits.hasarms)?("./pullnope"):null),"Try to pull yourself out"
                        );
                }else{
                       oper(system, "./inok", "Be a good patient cock",
                ((character.sandbox.limits.cantalk)?"./chat":null),"Try talking to him ",
               ((character.sandbox.limits.hasarms)?"./pull":null),"Try to pull yourself out"
                        );
                }
                
                
              }else{
                 oper(system, "./inok", "Be a good patient cock",
                ((character.sandbox.limits.cantalk)?"./chat":null),"Try talking to him ",
               ((character.sandbox.limits.hasarms)?"./pull":null),"Try to pull yourself out"
                        );
                
              }
               
                
              }, //function close
              "chatnope": function (character, system, action) {
                transer();
                if (character.sandbox.perma) {
                   system.setQuality("dignitylost",character.qualities.dignitylost-1);
                }
               
                parer("You try talking you him but you are just a cock under layers of cloth and incapable of making any kind of serious noise. At best it might sound like a phone in his pants that accidentally pocket dialed someone! Even at your loudest it doesn't seem to help... until you hear him turn on a radio? He never listens to the radio.... You can only assume it was because he DID hear you but is now drowning you out further.");
                
                //host eventually continues making his meal as you start to squirm aro
                oper(system, "./inunhappy", "Wiggle and squirm so it is at least harder for him to ignore you");
              }, //function close
              "pullnope": function (character, system, action) {
                transer();
                   if (character.sandbox.perma) {
                   system.setQuality("dignitylost",character.qualities.dignitylost-1);
                }
                
                parer("You desperately try to pull yourself out of the sheath with limited success. Just as you think you are starting to make progress host suddenly grabs you and readjusts you like he would with any normal itch! It causes you to slip back inside completely. Each time you try he just does it again ensureing you stay nice and locked away in his moist sheath where you belong!");
                oper(system, "./inunhappy", "Wiggle and squirm so it is at least harder for him to ignore you");
                //host eventually continues making his meal as you start to squirm aro
                
              }, //function close
              "inok": function (character, system, action) {
                transer();
                //decided not to change the situation or simply can't. 
                if(character.sandbox.limits.cantalk==false&&character.sandbox.limits.hasarms == false){
                  //they had no choice.
                  var underwearadd=".";
                  if(character.sandbox.underwear[0]){
                    
                    underwearadd=". At least you "+character.sandbox.underwear[3];
                  }
                  parer("You really have no choice in the matter. Even though he is home alone and there is no reason not to let you out for a bit, its not like you can move much or even talk to him anymore. You are literally only usefull as a cock now. And he doesn't need that out while he is eating. Besides you would probobly just drool cum everywhere anyway"+underwearadd);
                  
                  oper(system, "./inhappy", "Just accept it and enjoy his warm sheath","./inunhappy","Squirm around unhappily anyway!");
                }else{
                  
                  system.doLink("./inhappy");
                  
                }
                
                
              }, //function close
              "unhappystealth": function (character, system, action) {
                transer();
                character.sandbox.discovery++;
               //system.setQuality("harmony",character.qualities.harmony-1);
               if(character.sandbox.stayhidden){
                 
                 parer("host eventually continues making his meal as you start to squirm around a bit trying to get him hard but not so much that he would notice you! Unfortunately that doesn't accomplish much other than a hard squeeze through the cloth of his pants. You have a moment of panic as he pauses as if he noticed something, but then keeps moving. He sits down making your prison of a sheath even tighter, now you can't even move around.");
              character.sandbox.eveningtease=true;
              switch (rnd(4)) {
                  case 1:
                    
                    parer("Eventually you hear a noise as he starts to watch some TV, or it might be internet videos. It's unfortunate you don't even get to watch them. All you can do is unhappily try to squirm in his sheath as he entertains himself! He starts to adjust you at one point but still he doesn't let you out!");
                    
                    
                    break;
                  case 2:
                     parer("From inside his pants you can't really make out what he is doing. Maybe reading a book? Playing a game? Whatever it is all you can do is wait through it with the tightness of his sheath pressing in all around you.");
                    break;
                  case 3:
                    parer("You hear him start talking but is kind of quiet and muffled from inside the pants. At first you think someone might be in the room but the conversation has long pauses more like a phone call. You have no idea what the conversation is about but it reminds you he has a social life that doesn't revolve around his cock.");
                    break;
                  case 4:
                    parer("He doesn't stay sitting for long and eventually gets up. What follows is a loud BRRR noise. When that stops you hear dishes clinking about. Just regular house cleaning things that everyone has to do. Something that really makes it really difficult to get him hard enough to let a PERFECTLY NORMAL COCK out of his pants..");
                    break;
                }//End of RND switch
              
               }else{
                 parer("host eventually continues making his meal as you start to squirm around a bit trying to get him to realize you are there! Unfortunately that doesn't accomplish much other than a hard squeeze through the cloth of his pants. You do wonder how he would react when he does discover you... IF he discovers you! He suddenly sits down making your prison of a sheath even tighter, now you can't even move around. Not that you could move much before with your cock like body.");
              character.sandbox.eveningtease=true;
              switch (rnd(4)) {
                  case 1:
                    
                    parer("Eventually you hear a noise as he starts to watch some TV, or it might be internet videos. You don't even get to watch them. All you can do is unhappily try to squirm in his sheath as he fails to notice you and entertains himself! Still you can tell that he notices something as he often moves to adjust his crotch");
                    
                    
                    break;
                  case 2:
                     parer("From inside his pants you can't really make out what he is doing. Maybe reading a book? Playing a game? Whatever it is all you can do is wait through it with the tightness of his sheath pressing in all around you.");
                    break;
                  case 3:
                    parer("You hear him start talking but is kind of quiet and muffled from inside the pants. At first you think someone might be in the room but the conversation has long pauses more like a phone call. You have no idea what the conversation is about but it reminds you he has a social life that doesn't revolve around his cock.");
                    break;
                  case 4:
                    parer("He doesn't stay sitting for long and eventually gets up. What follows is a loud BRRR noise. When that stops you hear dishes clinking about. Just regular house cleaning things that everyone has to do. Something that really makes it hard to notice his cock being odd and moving on its own slightly.");
                    break;
                }//End of RND switch
              
                 
               }
               
               
              
                oper(system, "./bedtime", "Wait out the evening");
              }, //function close
              "inunhappy": function (character, system, action) {
                transer();
                if(character.sandbox.perma){
                  
                  system.setQuality("dignitylost",character.qualities.dignitylost-1);
                }
                
                
                if(character.sandbox.permalock){
                  parer("host eventually continues making his meal as you start to squirm around! Unfortunately that doesn't accomplish much other than cause you to get hard  making the rings of the cage squeeze you tightly! You can hear host wince as it happens but quickly you end up going soft again from the unpleasent senseation. Even worse you suddenly feel him sit down and make your prison even tighter. It's worrying to think some cocks can spend YEARS stuck in these things!");
                  
                }else{
                  
                  parer("host eventually continues making his meal as you start to squirm around a bit trying to remind him you are there! Unfortunately that doesn't accomplish much other than a hard squeeze through the cloth of his pants. You may be just a cock to him now but you can still think for yourself! Even worse you suddenly feel him sit down and make your prison of a sheath even tighter, now you can't even move around. Not that you could move much before with your cock like body.");
                }
                
              
              character.sandbox.eveningtease=true;
              switch (rnd(4)) {
                  case 1:
                    
                    parer("Eventually you hear a noise as he starts to watch some TV, or it might be internet videos. He isn't even letting you out to see them! All you can do is unhappiy squirm in his sheath as he ignores you and entertains himself! He could at least let you watch them too or something!");
                    
                    
                    break;
                  case 2:
                     parer("From inside his pants you can't really make out what he is doing. Maybe reading a book? Playing a game? Whatever it is all you can do is wait through it with the tightness of his sheath pressing in all around you.");
                    break;
                  case 3:
                    parer("You hear him start talking but is kind of quiet and muffled from inside the pants. At first you think someone might be in the room but the conversation has long pauses more like a phone call. You have no idea what the conversation is about but it reminds you he has a social life that doesn't revolve around his cock.");
                    break;
                  case 4:
                    parer("He doesn't stay sitting for long and eventually gets up. What follows is a loud BRRR noise. When that stops you hear dishes clinking about. Just regular house cleaning things that everyone has to do. Something he really doesn't need his cock to be involved in. Not to mention you would probobly make more of a mess drooling cum that he would have to clean up.");
                    break;
                  
                }//End of RND switch
              
                oper(system, "./bedtime", "Wait out the evening");
              }, //function close
                "inhappy": function (character, system, action) {
                transer();
                //STEATH ROUTE ALSO USES THIS!!!
                //IF THIS CHANGES make new one for stealth route
                //caged as well
                 if(character.sandbox.stealth){
             character.sandbox.acc++;
                
                }
                    if(character.sandbox.perma){
                  
                  system.setQuality("dignitylost",character.qualities.dignitylost+1);
                }
                //system.setQuality("harmony",character.qualities.harmony+1);
                if(character.sandbox.permalock){
                  
                          parer("host eventually continues making his meal, eventually sitting down to eat. Thankfully in the cage you never get squished anyone when he sits, The rings keep you nice and safe and at a constant tightness. For a brief moment you consider how nice they actually feel! The last thing you want is to start enjoying being trapped in this thing! Then again... spend enough time in it and you might even consider the chastity cage home....");
                }else{
                   if(character.sandbox.ch2re){
                  if(character.sandbox.ws){
                  parer("host eventually continues making his meal, eventually sitting down to eat. Once again you are squished inside his sheath, all nice and snug. You really only need to be out when he needs the bathroom or wants some fun time. At least at night its just a blanket instead of the restrictive pants and underwear. But even those are starting to feel like home to you. Home.... this sheath... It just feels so right.");
                }else{
                  parer("host eventually continues making his meal, eventually sitting down to eat. Once again you are squished inside his sheath, all nice and snug. You really only need to be out when he wants some fun time. At least at night its just a blanket instead of the restrictive pants and underwear. But even those are starting to feel like home to you. Home.... his sheath.... Home.... this sheath... It just feels so right.");
                  
                }
                    
                  }else{
                         if(character.sandbox.ws){
                  parer("host eventually continues making his meal, eventually sitting down to eat. Once again you are squished inside his sheath, all nice and snug. You really only need to be out when he needs the bathroom or wants some fun time. At least at night its just a blanket instead of the restrictive pants and underwear. But even those are starting to feel like home to you. Home.... his sheath.... All this time as a cock is starting to get to you!");
                }else{
                  parer("host eventually continues making his meal, eventually sitting down to eat. Once again you are squished inside his sheath, all nice and snug. You really only need to be out when he wants some fun time. At least at night its just a blanket instead of the restrictive pants and underwear. But even those are starting to feel like home to you. Home.... his sheath.... All this time as a cock is starting to get to you!");
                  
                }
                    
                  }
                  
                }
                  
                 switch (rnd(4)) {
                  case 1:
                    
                    parer("Eventually you hear a noise as he starts to watch some TV, or it might be internet videos. They are not porn unfortunately so no need for his cock to be out. You can hear some of it and find it comforting that your owner is enjoying himself. Playing with you doesn't need to be his only source of entertainment.");
                    
                    
                    break;
                  case 2:
                     parer("From inside his pants you can't really make out what he is doing. Maybe reading a book? Playing a game? Whatever it is he is being quiet about it. Nothing a cock should have to worry about. Maybe its bills or other people things. Stuff you just don't have to worry about anymore.");
                    break;
                  case 3:
                    if(character.sandbox.permalock){
                      
                        parer("You hear him start talking but is kind of quiet and muffled from inside the pants. At first you think someone might be in the room but the conversation has long pauses more like a phone call. Maybe someone to play with you... You are a cock... that's what cocks are meant for... At least cocks not currently caged by their owner.");
                    }else{
                        parer("You hear him start talking but is kind of quiet and muffled from inside the pants. At first you think someone might be in the room but the conversation has long pauses more like a phone call. Maybe someone to play with you.... That thought suddenly causes a spike of panic and excitment. You are a cock... that's what cocks are meant for....");
                      
                    }
                  
                    break;
                  case 4:
                    parer("He doesn't stay sitting for long and eventually gets up. What follows is a loud BRRR noise. When that stops you hear dishes clinking about. Just regular house cleaning things that everyone has to do. Something he really doesn't need his cock to be involved in. Not to mention you would probobly make more of a mess drooling cum that he would have to clean up.");
                    break;
                  
                }//End of RND switch
                
                
                oper(system, "./bedtime", "Time flys by faster than you expect as it gets late");
              }, //function close
                "inhappyforgotten": function (character, system, action) {
                transer();

   
            
                //system.setQuality("harmony",character.qualities.harmony+1);
                if(character.sandbox.ws){
                  parer("host eventually continues making his meal, eventually sitting down to eat. Once again you are squished inside his sheath, all nice and snug. You really only need to be out when he needs the bathroom or wants some fun time. At least at night its just a blanket instead of the restrictive pants and underwear. Though most of the time it's his sheath you are really most aware of. Pants and underwear just make it tighter.");
                }else{
                   parer("host eventually continues making his meal, eventually sitting down to eat. Once again you are squished inside his sheath, all nice and snug. You really only need to be out when he wants some fun time. At least at night its just a blanket instead of the restrictive pants and underwear. Though most of the time it's his sheath you are really most aware of. Pants and underwear just make it tighter.");
                  
                }
                  
                  
                  
                 switch (rnd(4)) {
                  case 1:
                    
                    parer("Eventually you hear a noise as he starts to watch some TV, or it might be internet videos. They are not porn unfortunately so no need for his cock to be out. You can hear some of it and find it comforting that your owner is enjoying himself. Playing with you doesn't need to be his only source of entertainment.");
                    
                    
                    break;
                  case 2:
                     parer("From inside his pants you can't really make out what he is doing. Maybe reading a book? Playing a game? Whatever it is he is being quiet about it. Nothing a cock should have to worry about. Maybe its bills or other people things. Stuff you just don't have to worry about anymore.");
                    break;
                  case 3:
                    parer("You hear him start talking but is kind of quiet and muffled from inside the pants. At first you think someone might be in the room but the conversation has long pauses more like a phone call. Maybe someone to play with you.... That thought suddenly causes a spike of panic and excitment. You are a cock... that's what cocks are meant for....");
                    break;
                  case 4:
                    parer("He doesn't stay sitting for long and eventually gets up. What follows is a loud BRRR noise. When that stops you hear dishes clinking about. Just regular house cleaning things that everyone has to do. Something he really doesn't need his cock to be involved in. Not to mention you would probobly make more of a mess drooling cum that he would have to clean up.");
                    break;
                  
                }//End of RND switch
                
                
                oper(system, "./bedtime", "Time flys by faster than you expect as it gets late");
              }, //function close
              
              "inhappypills": function (character, system, action) {
                transer();
                //STEATH ROUTE ALSO USES THIS!!!
                //IF THIS CHANGES make new one for stealth route
                
                 if(character.sandbox.stealth){
             character.sandbox.acc++;
                
                }
                    if(character.sandbox.perma){
                  
                  system.setQuality("dignitylost",character.qualities.dignitylost+1);
                }
                //system.setQuality("harmony",character.qualities.harmony+1);
                     if(character.sandbox.ws){
                  parer("host eventually continues making his meal, eventually sitting down to eat. Once again you are squished inside his sheath, all nice and snug. You really only need to be out when he needs the bathroom or wants some fun time. At least at night its just a blanket instead of the restrictive pants and underwear. But even those are starting to feel like home to you. Home.... his sheath.... All this time as a cock is starting to get to you!");
                }else{
                  parer("host eventually continues making his meal, eventually sitting down to eat. Once again you are squished inside his sheath, all nice and snug. You really only need to be out when he wants some fun time. At least at night its just a blanket instead of the restrictive pants and underwear. But even those are starting to feel like home to you. Home.... his sheath.... All this time as a cock is starting to get to you!");
                  
                }
                 switch (rnd(4)) {
                  case 1:
                    
                    parer("Eventually you hear a noise as he starts to watch some TV, or it might be internet videos. They are not porn unfortunately so no need for his cock to be out. You can hear some of it and find it comforting that your owner is enjoying himself. Playing with you doesn't need to be his only source of entertainment.");
                    
                    
                    break;
                  case 2:
                     parer("From inside his pants you can't really make out what he is doing. Maybe reading a book? Playing a game? Whatever it is he is being quiet about it. Nothing a cock should have to worry about. Maybe its bills or other people things. Stuff you just don't have to worry about anymore.");
                    break;
                  case 3:
                    parer("You hear him start talking but is kind of quiet and muffled from inside the pants. At first you think someone might be in the room but the conversation has long pauses more like a phone call. Maybe someone to play with you.... That thought suddenly causes a spike of panic and excitment. You are a cock... that's what cocks are meant for....");
                    break;
                  case 4:
                    parer("He doesn't stay sitting for long and eventually gets up. What follows is a loud BRRR noise. When that stops you hear dishes clinking about. Just regular house cleaning things that everyone has to do. Something he really doesn't need his cock to be involved in. Not to mention you would probobly make more of a mess drooling cum that he would have to clean up.");
                    break;
                  
                }//End of RND switch
                
                
                oper(system, "./bedtime", "Time flys by faster than you expect as it gets late");
              }, //function close
               "pull": function (character, system, action) {
                transer();
             if(character.sandbox.perma){
                  
                  system.setQuality("dignitylost",character.qualities.dignitylost-1);
                }
                
                if(character.sandbox.perma){
                  
                  
                }else{
                     parer("q1Ahhh that feels weird! What are you doing down there?!q1 host gumbles as he adjusts himself. You really don't make much progress at all, your arms being trapped inside his sheath makes it difficult. Finally all your wiggling causes him to get aroused a bit and you slip out some. Finally your arms are free and you can pull at his pants to help you along. Its such a strange feeling as you slide out as far as you can. You can feel how deeply your body is attached to him as you reach the limit of what the sheath will allow out.");
                
                parer("q1OK ok, I get it. It's just easy to forget you are in there all the time.q1 he says as he gives you a rub and undoes his fly so you have more space.");
                
                
                  
                }
             
                
             oper(system, "./athomeout", "Thank him and let him get on with eating");
              }, //function close
              "chat": function (character, system, action) {
                transer();
                //system.setQuality("harmony",character.qualities.harmony-1);
                   if(character.sandbox.perma){
                  
                  system.setQuality("dignitylost",character.qualities.dignitylost+1);
                }
                
                
                
                parer("You yell out to him from inside his pants. Complaining rather strongly about how he is home and he doesn't need to keep you trapped in his pants all day! He grumbles and lowers his fly for you to see out of at least. q1What if there was someone here? You can't just start making noise whenever you THINK I am alone! Besides I was going to let you out... eventually. So relaxq1 he says and continues his evening.");
                oper(system, "./athomeout", "Thank him and let him get on with eating");
              }, //function close

              "athomeout": function (character, system, action) {
              //was at work, but let you out of his pants.
              transer();
              if(character.sandbox.ignore){
                
                 parer("As he gets the food ready you are mostly just along for the ride. Every now and then he might say something to you but its pretty basic stuff. As he finally sits down to eat he gives you a look.q1I think all the moving my dick does is making me hungry more often.q1 He grumbles talking as if you weren't even there. Its odd not feeling hungry anymore.  It reminds you how you haven't felt the urge to eat even once since this all started. You do have this weird... full feeling through. It comes from really far below you and it kind of worries you knowing exactly what is down there.");
                 
                  oper(system, "./complain", "Wiggle a bit more reminding him you are there!","./calm","Relax like a good cock should");
                 
              }else{
                
                
                if(character.sandbox.permaplugged){
                  
                      parer("As he gets the food ready you are mostly just along for the ride. Every now and then he might say something to you but its pretty basic stuff. As he finally sits down to eat he gives you a look.q1I think having you down there is making me more hungry!q1 He grumbles and continues to eat. Its odd not feeling hungry anymore. Than again you have been literally sucking on something all day. The bulbous end is sort of sitting right where your stomach used to be...");
                      
                      oper(system, "./eveningstuffout", "Just wait till evening");
                  
                }else{
//                                   parer("As he gets the food ready you are mostly just along for the ride. Every now and then he might say something to you but its pretty basic stuff. As he finally sits down to eat he gives you a look.q1I think having you down there is making me more hungry! q1 he grumbles and continues to eat. Its odd not feeling hungry anymore.  It reminds you how you haven't felt the urge to eat even once since this all started. You do have this weird... full feeling through. It comes from really far below you and it kind of worries you knowing exactly what is down there.");
                                 if(character.sandbox.perma){
                                   //Heh, funny to think you will never taste food again. Forever stuck with the taste of my cum in your mouth
                                   
                                   //
                                   //q1I think having you down there is making me more hungry than usual. Might be all the moving around you keep trying to do... Good thing you spend most of the day trapped in my sheathq1
                                   
                     //q
                     
                     
                                   
                        // q1I was never this horny before you you became a permanent part of me. q1          
                                   switch (rnd(3)) {
                        case 1:
                          if(character.sandbox.ws){
                            parer(["q1At least I don't have to feed you, the only thing you want in your mouth these days is my cum and piss!q1 he says with a chuckle and gets back to his meal. It's odd not feeling the urge to eat, in fact you haven't felt hungry even once since this all started. At least you get two flavors to deal with, his cum and piss have extremely different consistency and tastes!",
                              "q1Heh, funny to think you will never taste food again. Forever stuck with the taste of my cum and piss in your mouthq1 he says with a chuckle and gets back to his meal. It's odd not feeling the urge to eat, you haven't felt hungry even once since this all started. At least you get two flavors to deal with, his cum and piss have extremely different consistency and tastes!"]);
                          
                          }else{
                            
                            parer(["q1At least I don't have to feed you, the only thing you want in your mouth these days is my cum!q1 he says with a chuckle and gets back to his meal. It's odd not feeling the urge to eat, in fact you haven't felt hungry even once since this all started. The taste of his cum has just become a normal part of your life, it's lingering flavor in your mouth nearly renewed daily!",
                              "q1Heh, funny to think you will never taste food again. Forever stuck with the taste of my cum in your mouthq1 he says with a chuckle and gets back to his meal. It's odd not feeling the urge to eat, in fact you haven't felt hungry even once since this all started. The taste of his cum has just become a normal part of your life, it's lingering flavor in your mouth nearly renewed daily!"]);
                          }
                          
                          //He is right about the constant taste of his cum, but almost embarrassingly you are really starting to enjoy it
                        switch (rnd(3)) {
                case 1:
                        
                          character.sandbox.carryevening="cum";
                         oper(system,"./givingin", "You wouldn't have it any other way", "./indep", "There is more to life than cumming all the time");
                        
                        break;
                        case 2:
                        oper(system,"./givingin","Just like a good cock would want!", "./indep", "Even the the taste of cum can get boring!");
                        break;
                        case 3:
                          
                          if(character.sandbox.pissaddiction>5){
                            
                            oper(system,"./givingin","Piss tastes sooo good...", "./indep", "You are more than just a cum dispenser!");
                          }else{
                            
                            oper(system,"./givingin","Cum tastes sooo good...", "./indep", "You are more than just a cum dispenser!");
                          }
                          
                        break;
                   
                }//End of RND switch
                         
                        
                      
                          break;
                        case 2:
                          parer( "q1I think having you down there is making me more hungry than usual. Might be all the moving around you keep trying to do... q1 He says and goes back to his food. It almost seems normal to you for a cock to be able to move about some. The idea of being a perfectly unmoving cock, only twitching when his body forces you too... It's both a bit scary and exciting to think about. q1Good thing you spend most of the day trapped in my sheathq1 He adds with a snicker");
                           
                           switch (rnd(3)) {
                            case 1:
                              
                              
                              
                                character.sandbox.carryevening="movement";
                                   oper(system,"./givingin","That trapped feeling just makes it more fun to move around!","./indep","Even cocks need some attention!");
                              break;
                            case 2:
                               oper(system, "./givingin", "At least he doesn't have to feed you!","./indep","He is technically eating for two.");
                              break;
                            case 3:
                               oper(system, "./givingin", "What else is a cock to do?","./indep","Even when you can't move, you are still a sentient cock!");
                              break;
                          
                          }//End of RND switch
                  
                    
                          
                         
                          break;
                        case 3:
                          
                     
                          parer(["q1I am gonna have to eat more just to keep up with the amount you cum every other thing. You are one horny cockq1 he says with a snicker and gets back to his meal. He almost makes it sound like a bad thing! Still it's amusing to think of him changing his whole diet just to satisfy your addiction to feeling his cum shooting through you."]);
                          character.sandbox.carryevening="horny";
                          switch (rnd(3)) {
                            case 1:
                              
                               oper(system,"./givingin","Sounds like a good idea to you!", "./indep", "You have moods other than just 'horny'!");
                              
                              
                              break;
                            case 2:
                                oper(system,"./givingin","Agree with him about the horny part!", "./indep", "Blame him for some of that hornyness!");
                              break;
                            case 3:
                              oper(system,"./givingin","What good is a cock if not constantly horny?", "./indep", "He is the one making you cum so often!");
                              break;
                         
                          }//End of RND switch
                         
                        
                          
                          break;
                      }//End of RND switch
                                   
//                                   
//                                       parer([" he says with a snicker and gets back to his meal. The comment makes you blush... If you even still can. The idea that your size might be making him need to change his diet just to keep up with your ogsamic needs!",
//                          
//                          "q1I think having you down there is making me more hungry than usual. Might be all the moving around you keep trying to do... Good thing you spend most of the day trapped in my sheathq1 He says and goes back to his food. It almost seems normal to you for a cock to be able to move about some. The idea of being a perfectly unmoving cock, only twitching when his body forces you too... It's both a bit scary and exciting to think about."]);
//                                   
//                                   
//                                    parer(["He starts eating and at some point looks down to you q1I will feed you some cum later...!q1 he says with a chuckle and gets back to his meal. It isn't exactly like you are eating the cum but you do look forward to it's taste in your mouth... Its odd not feeling the urge to eat, in fact you haven't felt hungry even once since this all started.",
//                          "q1I am gonna have to eat more just to keep up with the amount you cum every other thing. You are one horny cockq1 he says with a snicker and gets back to his meal. He almost makes it sound like a bad thing! Still it's amusing to think of him changing his whole diet just to satisfy your addiction to feeling his cum shooting through you.",
//                          "q1q1 He says and goes back to his food. It almost seems normal to you for a cock to be able to move about some. The idea of being a perfectly unmoving cock, only twitching when his body forces you too... It's both a bit scary and exciting to think about."]);
//                        
//                        //The comment makes you blush... If you even still can. 
//                         parer(["q1At least I don't have to feed you too! q1 he says and gets back to his meal. Its odd not feeling the urge to eat. You haven't felt hungry even once since this all started. You do have this weird... full feeling through. It comes from really far below you and it kind of worries you knowing exactly what is down there.",
//                                         
//                          "q1I really need to eat more protein to make up for everything you've been using...q1 he says with a snicker and gets back to his meal. The comment makes you blush... If you even still can. The idea t might be making him need to change his diet just to keep up with your ogsamic needs!",
//                          
//                          "q1I think having you down there is making me more hungry than usual. Might be all the moving around you keep doing...q1 He suggests and goes back to his food. It almost seems normal to you for a cock to be able to move about some. The idea of being a perfectly unmoving cock, only twin his body forces you too... It's both a bit scary and exciting to think about."]);
//                        
                                 } else{
                                   //not perma
                                      if(character.qualities.ctf==100){
                                        if(character.sandbox.tftogo<0){
                                          //wants the player to be less tfed
                                                parer(["q1So about the whole cock thing, I wouldn't mind trying to get you a bit larger. I bet you would love being able to talk againq1 He says in idle conversation as he eats. There really is nothing left of you currently, just a throbbing shaft of meat hidden away inside his sheath. It's an embarrassing reminder of how much you have given up in the process of becoming a part of him.","q1Back to having a normal cock... I wouldn't mind trying to get you a bit larger. It would be kind of nifty if you had arms and suchq1 He says in idle conversation as he eats. It feels so different having so few ways to move around. Just a soft sensitive shaft squished in a moist sheath waiting to get hard!"]); 
                                                
                                   
                              oper(system, "./wantstay", "You want to be his cock! FULLY","./wantun","Agree with him"); 
                                        
                                        }else{
                                       //Happy with the players size
                                              parer(["q1This is just perfect now, it's like you were meant to be my dick...q1 He says in idle conversation as he eats. There really is nothing left of you currently, just a throbbing shaft of meat hidden away inside his sheath. It's an embarrassing reminder of how much you have given up in the process of becoming a part of him.","q1Feels good to feel a normal shaft in my sheath. I was worried for a while but this feels right. And you can still move around some so it's not like you lost everything.q1 He says in idle conversation as he eats. It feels so different having so few ways to move around. Just a soft sensitive shaft squished in a moist sheath waiting to get hard!"]); 
                                                
                                          
                                          
                                           oper(system, "./calm", "Stay silent like a good cock" ,"./complain","Tell him you would rather change back to normal!");
                                        }
                                  
                                      }else{
                                              if(character.sandbox.tftogo<0){
                                          //wants the player to be less tfed
                                                 parer(["q1So about the whole cock thing, I wouldn't mind trying to get you a bit larger. I bet you would love it to be a bit easier to pull yourself out of my sheathq1 He says in idle conversation as he eats. You still have some of your features left, but every time you get smaller less and less of you remains. It's an embarrassing how much you have given up in the process of becoming a part of him.","q1As much I as I enjoy your enthusiasm for becoming my dick, you don't need to go all the way.q1 He says in idle conversation as he eats. It's almost odd to hear say that, as if you wanted to become his cock more than he wanted you to! At least you know he will be there in case you do go too far and want to change back."]); 
                                                  oper(system, "./wantstay", "You want to be his cock! FULLY","./wantun","Agree with him"); 
                                        }else if(character.sandbox.tftogo==0){
                                          //Happy with the players size
                                          
                                                     parer(["q1This is just perfect now, it's like you were meant to be my dick...q1 He says in idle conversation as he eats. You can feel how his body seems to have a stronger hold of you while in this shape. You are not even fully cock shaped but still he seems pleased to keep you just like this if he can.","q1Haha this is the best, who would want a perfectly normal looking cock when offered this. Lets see if we can stay away from those runes for a bit... Wouldn't want you to go spoiling the funq1 He says in idle conversation as he eats. It's almost more embarrassing that he wants to keep you like this. Not even fully looking like a cock. As if you were a trophy attached to his groin. It might be hard to convince him to wear the ring again!"]); 
                                          
                                          
                          oper(system, "./togohappy", "You are happy staying this size", "./togounhappy", "We can't stop now!");

                        } else {
                          //Wants the player to be MORE tfed

                          parer(["q1Lets try to get you a bit closer to being a full cock... I mean it's a once in a lifetime change to feel what it is like.q1 He teases you in the middle of eating. It is certainly tempting... but you know the more of your body you give up to becoming a cock the harder it is to change back. As long as you are carefull though...","q1I can't stop thinking about you down there, even more transformed than you are now. A few more cocklike traits wouldn't hurt..q1 He says with a snicker and then goes back to eating. You had a feeling he wanted to you to be even more cock like. Even if it is just a subconsious desire it would effect you."]);

                                          
                                           oper(system,"./togoshrink","Casually agree with him","./complain","Tell him you would rather change back to normal!");
                                          
                                        
                                        }
                                        
                                      }
                                      
                                      
                                      
//                                      switch (rnd(3)) {
//                        case 1:
//                          
//                           if(character.sandbox.limits.cantalk){
//                 
//                  
//                 
//                       
//                   
//                 }else{
//                   oper(system,"./shrink","Casually agree with him","./complain","Wiggle around in protest at his comment");
//                   
//                   
//                 }
//                          break;
//                        case 2:
//                          
//                          break;
//                        case 3:
//                          
//                          break;
//                 
//                      }//End of RND switch
//                                      
//                                      
                                      
                                 }                
                    
                        
                             
                                   
//                  if(character.sandbox.limits.cantalk){
//                 if(character.sandbox.perma){
//                   
//                   //cum isn't as tastey as you think
//                        oper(system,"./", "You wouldn't have it any other way", "./", "There is more to life than cumming all the time");
//                        oper(system,"","Just like a good cock would want!", "./", "Even the the taste of cum can get boring!");
//                        oper(system,"","", "./", "You are more than just a cum dispenser!");
//                   
//                    oper(system, "./","Small price to pay for being a sentient cock!");
//                   
//                   
//                  
//                   oper(system, "./", "","./","And you get to keep him company.");
//                   
//                 }else{
//                   
//                   oper(system,"./shrink","Agree with him","./complain","Tell him you would rather change back to normal!");
//                    switch (rnd(3)) {
//                          case 1:
//                            
//                            oper(system, "./", "Casually agree with him","./","At least he has somone to keep him company");
//                            
//                            break;
//                          case 2:
//                            oper(system, "./", "He does have a point","./","Small price to pay for having a sentient cock! ");
//                            break;
//                          case 3:
//                            
//                            break;
//                         
//                        }//End of RND switch
//                 }
//                
//                   
//                 }else{
//                oper(system,"./shrink","Agree with him","./complain","Wiggle around in protest at his comment");
//                   
//                   
//                 }
                 
                  
                  
                }

                 
                
              
              }
               
                
                
              
                
                
        
              }, //function close
              "wantstay": function (character, system, action) {
                transer();
                system.setQuality("harmony",character.qualities.harmony-1 );
                      parer("You don't actually want him to make you any bigger! You are the perfect size right now. Your shape and the tightness in his sheath... it's just wonderful. He just doesn't realize how good it feels to be attached to him. It might be a bit of a fight without control of the runes if you can't convince him.");
           
            system.doLink("./eveningstuffout");
              }, //function close
              "wantun": function (character, system, action) {
                transer();
                 system.setQuality("harmony",character.qualities.harmony+1 );
                parer("You agree with him on this, having a bit more of your boby back would be nice. Plus it means getting closer and closer to managing to reverse this whole mess. Despite that he doesn't seem intent on changing you to back fully... Just a bit to where he likes your shape the most.");
               system.doLink("./eveningstuffout");
              }, //function close
              "athomeout2": function (character, system, action) {
                 if(character.sandbox.perma){
                   
                    oper(system,"./shrinkperma","The more he eats the more cum you get to make!","./shrinknope","He is technically eating for two..");
                   
                 }else{
                        if(character.sandbox.limits.cantalk){
                 
                  
                 
                        oper(system,"./shrink","Casually agree with him","./complain","Tell him you would rather change back to normal!");
                   
                 }else{
                   oper(system,"./shrink","Casually agree with him","./complain","Wiggle around in protest at his comment");
                   
                   
                 }
                   
                   
                 }
           
                
                
              }, //function close
              "indep": function (character, system, action) {
                transer();
                system.setQuality("dignitylost",character.qualities.dignitylost-2 );
                
                
                switch (character.sandbox.carryevening) {
                  case "horny":
                    //                          oper(system,"./","Sounds like a good idea to you!", "./", "You have moods other than just 'horny'!");
                          //oper(system,"./","Agree with him about the horny part!", "./", "Blame him for some of that hornyness!");
                          //oper(system,"./","What good is a cock if not constantly horny?", "./", "He is the one making you cum so often!");
                    parer(["Despite how linked the two of you are, you are still a seperate person! In a way you are a cock dealing with the hornyness of two people!","It almost feels like when one of you get horny the other one starts getting that way too."]);
                    
                    
                    break;
                  case "cum":
                    
                        //oper(system,"./", "You wouldn't have it any other way", "./", "There is more to life than cumming all the time");
                   
                        //oper(system,"./","Just like a good cock would want!", "./", "Even the the taste of cum can get boring!");
             
                           // oper(system,"./","Piss tastes sooo good...", "./", "You are more than just a cum dispenser!");
                    
                    parer(["As much as you love the taste of cum... You can't help but want to remind him that you are still a person as well as a cock.","Even reduced to a part of his body you still have your own tastes and preferances! Though almost all of that involves cum now..."]);
                    
                    break;
                  case "movement":
                    parer(["You really want him to think of you as another person, not just a part of himself. Despite what you might look like you at least feel seperate from him in mind certainly","Your ability to move independently from his is one of the few ways you can remind yourself that you are indeed a seperate person from him. Two people in one body... Even if all you have control of is the penis..."]);
                    
                    break;
        
                
                }//End of RND switch
                if(character.sandbox.limits.cantalk){
                  
                    parer("host snickers a bit at your comment and gives you a rub. You already know you are likely going to be like this for the rest of your life. It's going to be a constant push to keep him thinking of you as a person or individual rather than a slightly special cock.");
                    
                    
                }else{
                  parer("You know what you want to say to him but due to your situation telling him is a bit difficult. You already know you are likely going to be like this for the rest of your life. It's going to be a constant push to keep reminding yourself you are a person that looks like a cock, an individual. Rather than a slightly special cock attached to host.");
                  
                }
              
            system.doLink("./eveningstuffout");
              }, //function close
              "givingin": function (character, system, action) {
                transer();
                system.setQuality("dignitylost",character.qualities.dignitylost+2 );
                
                
                switch (character.sandbox.carryevening) {
                  case "horny":
                    //                          oper(system,"./","Sounds like a good idea to you!", "./", "You have moods other than just 'horny'!");
                          //oper(system,"./","Agree with him about the horny part!", "./", "Blame him for some of that hornyness!");
                          //oper(system,"./","What good is a cock if not constantly horny?", "./", "He is the one making you cum so often!");
                    parer(["It is literally what you are now, the very source of arousal and lust... It is hard to have thoughts that don't lead you to blasting cum from your mouth! ","You wouldn't be a very good dick if your entire existence didn't focus on being horny! It's your job to be ready and throbbing at any moment host wants to use you!"]);
                    
                    
                    break;
                  case "cum":
                    
                        //oper(system,"./", "You wouldn't have it any other way", "./", "There is more to life than cumming all the time");
                   
                        //oper(system,"./","Just like a good cock would want!", "./", "Even the the taste of cum can get boring!");
             
                           // oper(system,"./","Piss tastes sooo good...", "./", "You are more than just a cum dispenser!");
                    if(character.sandbox.pissaddiction>5){
                      
    parer(["So much of your life revolves around his cum and piss. The taste of cum... washed away by piss.... then washed away by cum! An endless cycle that nearly gets your body to harden just by thinking about it!","It's almost worrying how much you have come to love his piss. The transformation hasn't really changed your mind much and yet you seem to be desperate for his piss to flow through you more and more. Maybe over time you are just becoming more of a cock in mind naturally."]);
                    
                    }else{
                      
                              parer(["So much of your life revolves around his cum, literally being the very purpose of your body. Just a throbbing shaft with a channel leading to your mouth purely devoted to the delivery of his cum!","It's almost worrying how much you have come to love the taste of his seed. The transformation hasn't really changed your mind much and yet you seem to be desperate to feel it pumping through you more and more. Even if it is some sort of addiction due to the orgasmic sensations that accompany it, still worth it!"]);
                    
                    }
                 
                    break;
                  case "movement":
                    
                    
                    
                    
                    parer(["It almost feel natural to give in to what you have become. Sometimes you almost forget that you have ever been something else. There are so many benefits to living like this. Being a cock is just so freeing!","You don't miss being able to move around freely like a person, host will take you anywhere you need to be now, and all you have to do is wiggle and throb."]);
                    
                    break;
        
                
                }//End of RND switch
                if(character.sandbox.limits.cantalk){
                  
                    parer("host snickers a bit at your comment and gives you a rub. Clearly amused how well you are taking to being a part of his body. Even embracing it! You can almost feel any dignity you had as a person slipping away, replaced with the pride of being a good cock!");
                    
                    
                }else{
            parer("You know how you feel even if you can't directly tell host about it... You know he would approve, especially with how well taking to being a part of his body. Even embracing it! You can almost feel any dignity you had as a person slipping away, replaced with the pride of being a good cock!");
                  
                }
              
            system.doLink("./eveningstuffout");
              }, //function close
              "calm": function (character, system, action) {
                transer();
                parer("You don't move or anything after he says that. Part of you proud for being so good that he has almost stopped thinking of you as in the same room. You are just his cock afterall, no reason or need for him to strike up a conversation with it. Still you could be a better cock for him if you just moved around less, and the less distracted he is the more studying that magic stuff he can do! That's the plan, be as much of a cock as you can be so he can change you back!");
                
                    if(character.sandbox.perma){
                  
                  system.setQuality("dignitylost",character.qualities.dignitylost+1);
                }
                //system.setQuality("harmony",character.qualities.harmony+1);
                //character.sandbox.ignore=true;
                
                
                                system.doLink("./eveningstuffout");

              }, //function close
              "togoshrink": function (character, system, action) {
                transer();
                
                    parer(["You can't help but agree with him. You start to consider trying to further the transformation just out of curiosity. No matter how dangerous that might be, the thought of it sticks with you.","He certainly has a point... These changes seem slightly controllable, so there is no harm in spending time even deeper inside his sheath. It's not like living as a full cock will actually make you want to stay as cock... right?"]);
                   system.doLink("./eveningstuffout");
              }, //function close
              //  oper(system, "./togohappy", "You are happy staying this size", "./togounhappy", "We can't stop now!");
              "togounhappy": function (character, system, action) {
                transer();
                parer("You don't want to say at this size at all! host might be ok with you looking like this but you have other plans. Just a bit more and you could be completly transformed into a perfect thobbing shaft! And eventually you do want... well probably want to change back! Either way you certainly don't want him to stop wearing the ring now!");
                system.doLink("./eveningstuffout");
              }, //function close
              "togohappy": function (character, system, action) {
                transer();
                parer("You actually like your current size, finding yourself agreeing with host completely. The way his sheath feels just a bit extra tight and you can still move around more than you would as a full cock. The thought of just getting rid of the ring now crosses your mind for a moment. It wouldn't be too bad staying like this.");
                  system.doLink("./eveningstuffout");
              }, //function close
              "shrink": function (character, system, action) {
                transer();
                
                if(character.sandbox.perma){
                  
                  //high harmony your needs are his needs, low harmony your needs are your needs
                  //low dignity your desires are his desires, high dignity desires are your desires.
                  
                  system.setQuality("dignitylost",character.qualities.dignitylost+1);
                  
                }
                 if(character.sandbox.limits.cantalk){
                   
                   parer("You get to thinking about it and outright say things would be easier if you could shrink down a bit more. He shifts his full attention onto you after saysing that! q1Oh really? Starting to think it would be better to live your live as my cock forever?q1 He asks as you do your best to defend yourself but all he does is laugh and go back to eating his food. Deep down you feel that accidental slip up stiring up weird emotions in you. ");
                   
                   
                 }else{
                    parer("You get to thinking about it and for a short moment consider trying to further the transformation to make things easier on host. Its a good thing you can't talk right now or host might have caught you admitting it! Deep down you feel that accidental slip up stiring up weird emotions in you. Almost as if a part of you actually does want to stay as his cock.");
                   
                   
                 }
                
                
                
                
                //system.setQuality("harmony",character.qualities.harmony+1);
                system.doLink("./eveningstuffout");

              }, //function close
              "shrinkperma": function (character, system, action) {
                transer();
                if(character.sandbox.ws){
                    parer("You need him to eat all he can so you can cum more for him! At least you can try to be the best cock you can be! In some ways making host more hungry just means you have been doing a good job! You find it a bit odd though not even thinking about food amymore though, the only thing that your mouth ever has in it is cum and piss. Thankfully the cum tastes pretty good");
                }else{
                    parer("You need him to eat all he can so you can cum more for him! At least you can try to be the best cock you can be! In some ways making host more hungry just means you have been doing a good job! You find it a bit odd though not even thinking about food amymore though, the only thing that your mouth ever has in it is cum. Thankfully it tastes good");
                }
                  if(character.sandbox.perma){
                  
                  system.setQuality("dignitylost",character.qualities.dignitylost+1);
                }
         system.doLink("./eveningstuffout");
              }, //function close
              "shrinknope": function (character, system, action) {
                transer();
                
                 system.setQuality("dignitylost",character.qualities.dignitylost-1);
                 if(character.sandbox.ws){
                    parer("You don't use up that much energy as his cock! He certainly doesn't keep you out often enough to grumbing about how hungry you are making him. Besides if you have to deal with his piss and cum... The least he can do is eat for you. Though it is pretty embarrassing as you realize the only thing that has been in your mouth for a while is his cum and... piss. You are starting to develop preferances for it's different flavors!");
                }else{
                   parer("You don't use up that much energy as his cock! He certainly doesn't keep you out often enough to grumbing about how hungry you are making him. Besides if you have to deal with his cum... The least he can do is eat for you. Though it is pretty embarrassing as you realize the only thing that has been in your mouth for a while is cum. You are starting to develop preferances for it's different flavors!");
                }
           system.doLink("./eveningstuffout");
              }, //function close
                   "complain": function (character, system, action) {
                transer();
                    if(character.sandbox.perma){
                  
                  system.setQuality("dignitylost",character.qualities.dignitylost-1);
                }
                
                if(character.sandbox.ignore){
                  
                  
               
                  
                }else{
                     if(character.qualities.ctf==100){
                  
                  parer("q1Ahhh! Cut that out, I was just talking to myself! I know you are down there... I think... I mean I assume you can still hear me. I can't just talk to my dick all the time its weird. Just relax and get used to it till we can fix this okq1 He says giving you a stroke along your underside. That one movement sends shivers through you and an involuntary throb of delight. It almost makes you forget about the whole treating you like just a special part of his body rather than a person he could talk to!");
                }else{
                  parer("q1Oh stop it down there... I didn't mean it. Completely...q1 He says and continues eating his food. You start to complain again until you feel him give you a long stroke! That one movement sends shivers through you and an involuntary throb of delight. It almost makes you forget about the whole suggesting it would be better for you to become more cocklike rather than change you back! ");
                  
                }
                  
                }
             
                character.sandbox.eveningtease=true;
                //system.setQuality("harmony",character.qualities.harmony-1);
                system.doLink("./eveningstuffout");
              }, //function close\
              "eveningstuffout": function (character, system, action) {
                transer();
             
                if(character.sandbox.limits.insheath==0){
                  //can't go in the sheath
                  switch (rnd(4)) {
                  case 1:
                    
                    parer("Eventually host gets up to watch some TV with you. He lets you pick the channel occasionally but he still won't let you have the remote! It's almost like hanging out with a good friend, except you are attached to his dick. And he gets all the chips.");
                    
                    
                    break;
                  case 2:
                   
                  
                  case 3:
                      if(character.sandbox.limits.hasarms){
                      
                      parer("He eventually gets up and starts doing chores and cleaning around the house. You are actually large enough that you can help out some. Having an extra set of arms to wipe dishes actually comes in pretty handy. ");
                    break;
                      
                    }
                
              
                  case 4:
                  
                        parer("A bit later in the evening he has a phone call come in, he quickly sits down and starts discussing something with whoever is on the other end. You can't hear what the other person is saying at all.  Not that you want to its just curiosity. You can tell he is being vauge with the other person on the phone as if worried about you overhearing things.");
                  break;
                }//End of RND switch
                }else{
                  //stuck in sheath mostly
                  switch (rnd(4)) {
                  case 1:
                    
                    parer("Eventually host gets up to watch some TV with you. He doesn't let you pick the channel or anything! At least when he puts something boring on you can slip back into his sheath for a bit. It's actually far more comfortable than sitting on the couch.");
                    
                    
                    break;
                  case 2:
                     parer("Eventually he has to do some paperwork or something, you get pulled back into his sheath super fast at that! Whatever it is must be terribly boring, and even you squirming and wiggling fails to bring him out of it. Still its best you leave him alone while he takes care of people things, nothing a cock has to worry about.");
                    break;
                  case 3:
                    
                    parer("A bit later in the evening he has a phone call come in, he quickly sits down and starts discussing something with whoever is on the other end. You can't hear what the other person is saying at all.  Not that you want to its just curiosity. You can tell he is being vauge with the other person on the phone as if worried about you overhearing things.");
                    break;
                  case 4:
                    parer("He eventually gets up and starts doing chores and cleaning around the house. You sort of bob around until the sheath decides it wants you back home and begins pulling you in. Even if you wanted to help the sheath simply has other plans and soon you are tucked back into its tight embrace as host goes around cleaning and doing dishes.");
                    break;
                  
                }//End of RND switch
                  
                }
                   
              
                
                
                oper(system, "./bedtime", "The evening continues on and its getting late");
              }, //function close
              "bedtime": function (character, system, action) {
                // be aware of stealthcock route also coming this way
                   transer();  
                   var bedtimevar;
                   if(character.sandbox.stealth){
                     bedtimevar=rnd(2);
                   }else{
                     bedtimevar=rnd(3);
                     
                   }
                   
                   character.sandbox.clothed=false;
                   clother();
                     switch(bedtimevar){
                 case 1:
                 system.doLink("./shower");
                 break;
                  case 2:
//                    parer("host doesn't check the mirror or even use the shower after the long day. He just heads to bed and gets all tucked in.");
//                    
//                    
                    
                      system.doLink("./bedtimeafterevents");
                    
                    
                    break;
                  case 3:
                    
                    system.doLink("./mirror");
                    
                    
                    
                    break;
                
                 
               }
              
//                  
//                  THRID TIME Activate option to embrace being a cock PERMANENTLY.
//                  host masturbates you ask asks what you think about accepting this as being a permanent thing
//                  Goad you into it. Masturbating you more. 
//                  Then NOT masturbating when you yes... because they want you to beg for it.
//                  They you to say you will stay their cock forever EVEN if you find the ring again.
//                  then they let you cum.
//                  
//                  
//                  permanently UNLOCKs Obediance
//                
                  ///
                  
                  

              // 37512
              // 40000
                
               
              }, //function close

              "bedtimeafterevents": function (character, system, action) {
                transer();
                character.sandbox.erect=true;
                console.log("perma check! ringlost needs true if day lost is lower than 500ish" + character.sandbox.ringlost );
                console.log("Perma check  days lost: " +(character.qualities.day-character.sandbox.dayringlost));
                console.log("daylost " +character.sandbox.dayringlost );
                console.log("current day " + character.qualities.day);
                
                console.log("perma lost for " +  " how long it must be lost for: " +((character.sandbox.enjoyit)?(2):(10)));
                console.log("accumulated check " +((character.sandbox.ringlost&&((character.qualities.day-character.sandbox.dayringlost)>((character.sandbox.enjoyit)?(2):(10)))) || character.sandbox.ringgone));
                
                
                console.log("secondary condition sex and ringcheck " +(character.sandbox.sexnum >=1&&character.sandbox.ringcheck) +" third check enjoy ringckeck and ctf<100: "+ ((character.sandbox.enjoyit)&&(character.sandbox.ringcheck)&&character.qualities.ctf<100) );
                 character.sandbox.nightfun=false;
                 
                character.sandbox.skipto="";
                if(character.sandbox.stealth){
                  
                  character.sandbox.reward=false;
                   character.sandbox.punish=false;
                }
                
                var ringlostdays=(character.qualities.day-character.sandbox.dayringlost);
                var enjoyitmodi="";
                enjoyitmodi=((character.sandbox.enjoyit)?(2):(10));
                var permaable=false;
                 if (!character.sandbox.perma&&((character.sandbox.ringlost && (ringlostdays > enjoyitmodi)) || character.sandbox.ringgone)){
                 permaable=true;
              }
                if (!character.sandbox.perma&&(
                        (character.sandbox.sexnum >= 2 && character.sandbox.ringcheck) || (
                        (character.sandbox.enjoyit) && (character.sandbox.ringcheck))
                        )){
                        permaable=true;
              
                }
                if(character.sandbox.perma||character.sandbox.stealth||!character.sandbox.runedo.stability){
                   permaable=false;
                }
                
                console.log("WHY!!!!  mindchange trigger" + character.sandbox.mindchangetrigger);
                
          
                if(character.sandbox.rndperma>2){
                  
                  character.sandbox.permateasecheck = true;
                }
                if(character.sandbox.permalock){
                  character.sandbox.punish=true;
                   parer("host starts to get ready for bed, or at least you assume. You can't even see out of the sheath due to the cages cap that covers it! You quickly realize he is making no attempt to unlock the cage!  host is way to horny most of the time to really consider going chaste permanently! He cant' possibly leave you in this cage much longer!");
                   
                   oper(system, "./ringend", "You hope....");
                   
                }else if(character.sandbox.permaplugged){
                 character.sandbox.reward=true;
                   system.doLink("masturbate/preplugrub");
                 }else if(character.sandbox.reward||character.sandbox.punish){
                     //reward or punishment
                     system.doLink("masturbate/toys");
                  }else if (permaable && character.sandbox.permateasecheck) {
                  character.sandbox.permateasecheck = false;
                  character.sandbox.rndperma=0;
                  if (character.sandbox.ringcheck) {
                    
                    
                    
                    character.sandbox.permanum++;
                 
                    if (character.sandbox.permanum > 3) {


                      system.doLink("./permaring");
                    } else {

                      system.doLink("./permatease");
                    }
                  } else {
                    character.sandbox.permanum++;
                    if (character.sandbox.permanum > 3) {


                      system.doLink("./permanoring");
                    } else {
                   

                      system.doLink("./permatease");

                    }



                  }

                } else if(!character.sandbox.stealth){
                  //NO permatease
                  
                  character.sandbox.rndperma++;
                  if((character.sandbox.harmonyunlockdown&&character.sandbox.harmonyunlockup)||((!character.sandbox.runedo.thoughts||character.qualities.essence< character.sandbox.ttcost)&&!character.sandbox.limits.cantalk )){
                    character.sandbox.mindchangetrigger=false;
                    
                  }
                  if (character.sandbox.mindchangetrigger && (!character.sandbox.perma)) {




                    system.doLink("masturbate/mindchange");

                  } else {
                   if ((character.sandbox.pillprimer || (character.qualities.harmony >= 80 && character.qualities.dignitylost >= 80 && character.qualities.ctf == 100))) {
                      //character.sandbox.pillroute=true;
                      system.doLink("masturbate/forgotten");
                    } else {
                      var mnum=0;
                      mnum=0;
                      if(character.sandbox.eveningtease){
                        mnum++;
                      }
                      if(character.sandbox.runedo.horny){
                        mnum++;
                      }
                      if(character.sandbox.eventholder=="horny"){
                          mnum++;
                      }
                      if(character.sandbox.harmonyunlockdown){
                          mnum++;
                        
                      }
                      if(character.host.host=="bret"){
                        
                        mnum-=2;
                      }
                      if(character.sandbox.xeyischeating>2){
                        mnum-=2;
                      }
                      if(rnd()+mnum>7){
                        
                         system.doLink("masturbate/nightmasturbate");
                      }else{
                        character.sandbox.erect=false;
                        system.doLink("./ringchecker");
                      }
                      
                     
                    
                    
                    
                    
                    }
                  }
                }else{
                  //STEALTH PATHS!
                   character.sandbox.permateasecheck = true;
                  
                  
                   var smasass=0;
                  if(character.sandbox.pillroute){
                    
                    
                    smasass=rnd(2)==1;
                    
                  }else{
                      smasass=rnd(3)==1;
                    
                    
                  }
                  if(smasass){
                    character.sandbox.nightmasturbate=1;
                    
                    
                    
                    system.doLink("masturbate/nightmasturbate");
                  
                  
                  }else{
                    character.sandbox.erect=false;
                    system.doLink("./ringend");
                  }
                  
                  
                  
                }
                
                clother();
           
             
              }, //function close
              "masturbatecheck": function (character, system, action) {
                transer();
                
                var ringlostdays=(character.qualities.day-character.sandbox.dayringlost);
                var enjoyitmodi=((character.sandbox.enjoyit)?(2):(10));
                
                
             
                   
//                    system.doLink("masturbate/nightmasturbate");
               
                   // system.doLink("./perma");
                   if (!character.sandbox.perma&&((character.sandbox.ringlost&&!character.sandbox.ringatpawn && (ringlostdays > enjoyitmodi)) || character.sandbox.ringgone)){
                
                   character.sandbox.permanum++;
                if(character.sandbox.permanum>3){
                  
                 
                  system.doLink("./permanoring");
                }else{
                  
                   system.doLink("./permatease");
                  
                }
                  
                
                } else if (!character.sandbox.perma&&(//this section is for if the ring can come off. So stuff in here talks about the ring
                        (character.sandbox.sexnum >= 2 && character.sandbox.ringcheck) || (
                        (character.sandbox.enjoyit) && (character.sandbox.ringcheck) && character.qualities.ctf < 100)
                        )){
                       character.sandbox.permanum++;
                if(character.sandbox.permanum>3){
                  
                  
                  system.doLink("./permaring");
                }else{
                  
                  system.doLink("./permatease");
                  
                }
                }else{
                  
                  //CAN NOT PERMA!!!!! Ring is still merged likely!
                    console.log("WHY!!!!  mindchange trigger" +character.sandbox.mindchangetrigger);
                 
                  
                    if (character.sandbox.mindchangetrigger && (!character.sandbox.perma)) {
                         system.doLink("masturbate/mindchange");
                    } else {
//                      if (character.sandbox.nightmasturbate!=1&&(!character.sandbox.perma)) {
//                        character.sandbox.permanum++;
//                        system.doLink("./permatease");
//                      } else {
                    if((character.sandbox.pillprimer||(character.qualities.harmony>=80&&character.qualities.dignitylost>=80&&character.qualities.ctf==100))){
                        //character.sandbox.pillroute=true;
                      system.doLink("masturbate/forgotten");
                    }else{
                      system.doLink("masturbate/nightmasturbate");
                      
                      
                    }    
                        
                      
                    
                 //   }

                    }




                  }


                
                
                
                
                
          
                
               
                
          
             
              }, //function close
              "permatease": function (character, system, action) {
                transer();
                   
                       
                        
                         
                         
                          switch (character.sandbox.permanum) {
                  case 1:
                    
                     parer("<h1>JUST A TEASE</h1>");
                    
                    parer("With evening turning into night host heads to bed. He gets fully naked and wraps you and himself up in the warm blankets. You still feel so horny from all the teasing earlier. q1Really starting to think you are better off staying like this.... You feel so good.q1 You hear host mumble as you feel him rubbing you through the blanket! You know he couldn't possibly mean it, he is just teasing.... still it makes you all the harder thinking about it!");
                    
                       if(character.sandbox.limits.cantalk) {
                         
                       oper(system, "./npsogood", "Tell him to keep rubbing!","./npresist","Just barely mumble out a 'nooo...'");
                     }else{
                       
                       
                        oper(system, "./npsogood","Just throb desperately");
                       
                     }
                    
                    break;
                  case 2:
                    parer("<h1>A TEMPTING TEASE</h1>");
                    parer("With evening turning into night host heads to bed. He gets fully naked and wraps you and himself up in the warm blankets. You still feel so horny from all the teasing earlier. q1"+character.host.perma+"q1 He says as he keeps rubbing you! You can tell he has been thinking about this for a while. Of course it sounds like a great idea through your lust filled head.");
                    
                       if(character.sandbox.limits.cantalk) {
                         if(character.sandbox.harmonyunlockup&&character.sandbox.enjoyit){
                             oper(system, "./npsogood", "Tell him to keep rubbing!","./prebegforit","Beg to be his cock forever!");
                           
                         }else{
                           
                           oper(system, "./npsogood", "Tell him to keep rubbing!","./npresist","Just barely mumble out a 'nooo...'");
                           
                         }
                       
                     }else{
                       
                       
                        oper(system, "./npsogood","Just throb desperately");
                       
                     }
                    break;
                     default:
                  case 3:
                    parer("<h1>ONE LAST TEASE</h1>");
                          parer("With evening turning into night host heads to bed. He gets fully naked and wraps you and himself up in the warm blankets. You still feel so horny from all the teasing earlier. q1Having a living cock is great... I don't think I want to change you back anymore. I bet you want it too... Go on... beg to be my cock. I want to hear you say itq1 He says as he keeps rubbing you! You can tell he has been thinking about this for a while. Of course it sounds like a great idea through your lust filled head.");
                    
                       if(character.sandbox.limits.cantalk) {
                         if(character.sandbox.harmonyunlockup&&character.sandbox.enjoyit){
                         oper(system, "./npsogood", "Tell him to keep rubbing!","./prebegforit","Beg to be his cock permanently!");
                           
                         }else{
                           
                           oper(system, "./npsogood", "Tell him to keep rubbing!","./npresist","Just barely mumble out a 'nooo...'");
                           
                         }
                       
                     }else{
                       
                       
                        oper(system, "./npsogood","Just throb desperately");
                       
                     }
                    break;
             
                 
                }//End of RND switch
                        
                        
                        
                   
                    
                
              }, //function close
              "prebegforit": function (character, system, action) {
                transer();
                
                character.sandbox.permabegging=true;
                parer("Maybe it's the rubbing your your hyper sensitive body or just his reasoning finally got to you. This is what you want after all.... just be be his hot throbbing shaft. It is already what you are.... but maybe it's time for it to be WHO you are. This feels like a this is going have llong lasting consequences. But then again maybe it is all worth it for the orgasm that host has you dangleing on the edge of obtaining!");
                
                
                if (character.sandbox.ringgonereason=="broke"){
                  parer("host just smiles as you beg, desperately pleading to be a part of him! q1Hehe that is a good start... But how about a promise......If we do find a way to reverse this or repair the ring... I want you to promise you won't be interested in turning back.q1");
                  
                }else{
                  parer("host just smiles as you beg, desperately pleading to be a part of him! q1Hehe that is a good start... But how about a promise......If we do find the ring again I want you to promise you won't be interested in using it to turn back.q1");
                   
                  
                }
                parer("You already said yes to being his cock, and accepting it. The ring is probobly gone for good so you might as well keep host as happy as you can. What is a little promise if it will satisfy him for now. You already were considering your life as just a happy cock... Whats so bad about a little promise.");
                oper(system,"./promise","Promise to stay his cock forever no matter what");
                
                
           
              }, //function close
              "prepermabegforit": function (character, system, action) {
                transer();
                parer("");
                
                
                oper(system, "", "");
              }, //function close
                  "promise": function (character, system, action) {
                transer();
                
                parer("<h1>You are now permanently his penis</h1>");
//                parer("You already said yes to being his cock, and accepting it. The ring is probobly gone for good so you might as well keep host as happy as you can. What is a little promise if it will satisfy him for now. You already were considering your life as just a happy cock... Whats so bad about a little promise.");
              parer("You give him your word that even if a way is found you will stay his cock forever! q1Very good...q1");

 system.setQuality("dignitylost",60);
                system.doLink("./permacum");
              }, //function close
//              "refuse": function (character, system, action) {
//                transer();
//                parer("He stands up and reaches into a pocket. q1Well if you say so but don't say I didn't warn you.q1 He says covering you back up. Suddenly after that there is a sudden CRACK as you hear the sound of something ceramic or stone being broken! You can't see it... but that sound... Thing... it... He would have let you see it if it really were the ring! Right? All you can do is wait and hope it was just to scare you!");
//                oper(system, "transformation", "Try to sleep.");
//              }, //function close
//              "accept": function (character, system, action) {
//                transer();
//                parer("You reluctantly accept the previous offer. It was still better than the prospect of losing the ring forever. A weird shiver goes down your body as you realize just what you have agreed to. Even if under a bit of protest you did just give in to being his cock forever potentially forever.");
//                oper(system, "transformation", "Try to sleep");
//              }, //function close
              "enjoyitchange": function (character, system, action) {
                transer();
                if(character.sandbox.changeofheart||!character.sandbox.enjoyit){
                  
                  character.sandbox.changeofheart=false;
                  if(character.sandbox.enjoyit) {
                    parer("<h1>BEING A COCK IS embarrassing!</h1>");
                    
                    
                    parer("You really think hard about things and the more you ponder the more embarrassing it is. All the time as hosts cock must have been getting to you! Maybe it was some sort of stolkholm syndrom. How were you enjoying it that much? The thought of it makes you even more uncomfortable. You almost want to just hide in a sheath all day and not think about it anymore..... Wait.....");
                    character.sandbox.enjoyit=false;
                  }else{
                    parer("<h1>BEING A COCK IS WONDERFUL!</h1>");
                 if(character.sandbox.ws){
                   parer("You really think hard about things and it is all so embarrassing... so wonderfully embarrassing. All the time as hosts cock must be getting to you! It is just so nice giving up all your responsibilities, only thing expected of you is draining your host's bladder and balls! As embarrassing as it is... You WANT to be a cock.");
                 }else{
                   parer("You really think hard about things and it is all so embarrassing... so wonderfully embarrassing. All the time as hosts cock must be getting to you! It is just so nice giving up all your responsibilities, only thing expected of you is draining your host's balls! As embarrassing as it is... You WANT to be a cock.");
                 }
                     
                    character.sandbox.enjoyit=true;
                    
                  }
                     oper(system, "./ringchecker", "Your outlook has changed");
                }else{
                   if(character.sandbox.enjoyit){
                  parer("You have been enjoying life as a cock for "+character.qualities.day+" days. It's been nice but maybe....");
                  
                }else{
                  parer("You have been embarrassed and distressed with your life as a cock for "+character.qualities.day+"'s. Maybe it hasn't been all that bad....");
                  
                }
                  character.sandbox.changeofheart=true;
                  
                  
                  oper(system, "./ringchecker", "Take a day to think about it");
                }
               
                
              
                
              }, //function close
              "shower": function (character, system, action) {
                transer();
                
                parer("<h1>SHOWER</h1>");
                   
               switch (character.sandbox.ctfrole) {
                      case "bodypart":
                        //doesn't talk to you
                        if (character.sandbox.enjoyit) {
                          
                          
                          
                           parer("host heads to the shower, this is always a nice time between you and him. He slathers up his body under the warm steaming water. He treats you just like any other part of his body, just the way you like it.");
                           
                           
                           
                           
                        }else{
                          parer("host heads to the shower, this is always a nice time between you and him. He slathers up his body under the warm steaming water. It's embarrassing how he treats you just like any other part of his body");
                          
                        }
                       if(character.sandbox.limits.hasarms){
                         if(character.sandbox.limits.insheath==0){
                           //arms are not trapped in sheath
                           parer("He doesn't expect you to help usually. But you still have your arms to clean yourself a bit, trying not to get too aroused in the process. He eventually finishes the shower and looks into the mirror.");
                         }else{
                           //arms stuck in sheath
                           parer("Even if you could help he doesn't let you out of his sheath. Rather using the shower head and some soap to give you a good cleaning in there! Of course he doesn't even warn you about it. He eventually finishes the shower and looks into the mirror.");
                         }
                        }else{
                          // no arms
                          parer("Eventually it's your turn to enjoy the warm soapy water. Besides getting cum this the most enjoyable part of the day. After being stuck in his sheath all day, not only looking like a cock but smelling like one too, its nice getting all clean! He only gives you the most brief cleaning before finishing the shower and looking into the mirror.");
                        }
                        
                        
                        break;
                      case "possessive":
                        //Get use to it you are just my cock now. There is no way I am ever letting you go. Get use to it
                        
                        
                          
                           parer("host heads to the shower, this is always a nice time between you and him. He slathers up his body under the warm steaming water. He is at least nice enough to acknowledge your presence but its only to embarass you more usually.");
                           
                      
                        
                        
                        
                      
                         if(character.sandbox.limits.insheath==0){
                           parer("He gives you a rub to help get you all soapy. Though you can't help but hear his mumble q1Mmmm all mine.q1 At least with your arms free you can also clean yourself a bit as well. ");
                           
                         }else{
                             parer("He gives his sheath a rub to help get you all soapy. q1You can stay in there right where you belong. I love how you feel filling my sheathq1 He says managing to just barly not get hard from that. He points the shower head at his sheath basically giving you a momentary bubble bath before rinsing your home out till its all nice and clean.");
                           
                         }
                      
                        parer("Finally he finshes up and steps in front of the mirror");
                        
                        break;
                      case "petpenis":
                        //Very good! Such a good cock. Give me a nice throb and I might let you out to play more often.
                         parer("host heads to the shower, this is always a nice time between you and him. He slathers up his body under the warm steaming water. He of course doesn't waste this oppertunity to tease and play with you a bit.");
                           
                      
                        
                        
                        
                      
                         if(character.sandbox.limits.insheath==0){
                           if(character.sandbox.limits.hasarms){
                             //not in sheath has arms
                            parer("He reaches down to give you some soap but adds q1Only wash yourself a little bit, don't have so much fun you end up drooling precumq1 He says teasingly! It is actually harder than it sounds as rubbing over your sensitive body sends pleasurable shivers through you. Embarrassing only seconds later as you rub over yourself... a load of pre fills your mouth! q1Naughty cock! Don't make me ban you from using soap next time!q1 he says");
                             
                             
                           }else{
                                //not in sheath no arms
                             
                              parer("He gives you a rub to help get you all soapy. q1Hehe so helpless, you can't even wash yourself. Give me a nice throb...q1 He says waiting for you to basically do a trick for him before he will wash you! Still like a good pet you stiffen an throb getting rewarded with a good rub down of soap.");
                           }
                           
                           
                           
                         }else{
                           //In sheath!
                           
                             parer("q1Oh is my poor cock stuck in it's sheath again?q1 He says giving you a few rubs to help you extend out of it. q1That's a good cock, now stay nice and hard so I can clean you.q1 He says giving you good rub down with soap before his sheath decides you been out too long and starts pulling you back inside!");
                           
                         }
                      
                        parer("Finally he finshes up and steps in front of the mirror");
                        
                        
                        
                        
                        break;
                      case "friend":
                        //
                        if(!character.sandbox.stealth){
                        if(character.qualities.ctf==100){
                          parer(character.host.showerfull);
                          
                        }else{
                        parer(character.host.showernot);
                       }
                    
                         
                           if(character.sandbox.limits.hasarms){
                             // has arms
                            parer("For the most part he lets you handle washing yourself. You still have arms so its just more convinient that way. You might ask for more of a rinse from the shower head but it's mostly uneventful otherwise.");
                             
                             
                           }else{
                                //no arms
                             
                              parer("You are pretty helpless to wash yourself being pretty much just his cock. He gives you a good wash down. He even pays attention to your slight movements to best clean you.");
                           }
                           
                           parer("Finally he finshes up and steps in front of the mirror");
                    }else{
                      //stealth routue
                      
                      parer("host enjoys himself in the shower. After a long day stuck in his musky sheath you actually look forward to this. The only time he ever touches you when he isn't sending "+((character.sandbox.ws)?("cum or piss"):("cum"))+" up your throat!. He is quick about it though, just giving you a quick cleaning before rinsing off.");
                    }
                     
                      
                        
                        
                        
                        
                        
                        break;
                    }//End of RND switch
                    if(character.sandbox.stealth){
                      system.doLink("./mirrorstealth");
                    //  system.doLink("./bedtimeafterevents");
                    }else{
                      
                      if(character.sandbox.perma){
                         oper(system, "./postmirror", "Look at yourself");
                        //,"Ponder your accpetance"
                      }else{
                        oper(system, "./postmirror", "Look at yourself");
                        
                        
                      }
                      
                     
                    }
                    
               
                
              }, //function close
              "mirrorstealth": function (character, system, action) {
                transer();
               if(character.sandbox.host?.parse?.fur=="scales"){
                 alt="over his fur for any tangles";
                 
               }else{
                 
                   alt="over his scales";
                 
               }
                if(character.sandbox.enjoyit||(character.sandbox.acc>(character.sandbox.discovery/2))){
                  
                  
                    parer("Being trapped in his sheath makes it a bit hard to see, but with enough wiggling you can at least sort of see out of it. He is just standing in front of it checking #alt as he dries off. Meanwhile you are more focused on your home between his legs. You can just barely make out the bulge of your body inside his sheath for a moment before he turns wrong.");
                    
                  }else{
                    
                       parer("Being trapped in his sheath makes it a bit hard to see, but with enough wiggling you can at least sort of see out of it. He is just standing in front of it checking #alt as he dries off. Meanwhile you are more focused on your home between his legs. It's so embarrassing to see it from the outside and know you are trapped inside that sheath!");
                  }
                
                if(character.sandbox.forgotten){
                    
                      
                        parer("host finishes looking at the mirror and then gives you a rub. He expects nothing from you but doing when his body forces you to do. After so many years of this you don't even remember what it would be like without functioning as his anatomy. You need to be a part of him... You are his perfect cock, a completely obedient part of his body.");
                      //system.setQuality("dignitylost",character.qualities.dignitylost+1);
                
                }else if(character.sandbox.pillroute){
                  parer("host finishes looking at the mirror and then gives you a rub. He expects nothing from you but quiet obedience. Just a part of his body to enjoy as he sees fit. You can't even move anymore making just that much harder to expect any other treatment. It's just so embarrassing not being able to react or respond, but a cock shouldn't be embarrased for being what it is... Right?");
                      
                  
                }else{
                     parer("host finishes looking at the mirror and then gives you a rub. He expects nothing from you but quiet obedience. Just a part of his body to enjoy as he sees fit. He never talks to you, which is fine. You are his perfect cock, a completely obedient part of his body. It just feels so right letting youself be claimed so fully.");
                  
                }
                
                
             oper(system, "./bedtimeafterevents", "Look forward to getting some sleep");
              }, //function close
              "mirror": function (character, system, action) {
                transer();
                 spark=true;
                  switch (character.sandbox.ctfrole) {
                case "bodypart":
                  //doesn't talk to you
                  
                  
                  
                  
                    oper(system, "./postmirroralt", "Try to be more active so he can't ignore you as easily");
                  break;
                case "possessive":
                  //Get use to it you are just my cock now. There is no way I am ever letting you go. Get use to it
                  
                  oper(system, "./postmirroralt", "Try to embracing truly being a cock");
                  
                  break;
                case "petpenis":
                  //Very good! Such a good cock. Give me a nice throb and I might let you out to play more often.
                  
                  oper(system, "./postmirroralt", "Try to be more active so he treats you more like a person.");
                  
                  
                  break;
                case "friend":
                 //
                 if(character.sandbox.perma){
                     oper(system, "./postmirroralt", "Try to embrace being a good cock for your owner");
                   
                 }
               
                 
                  
                  break;
              }//End of RND switch
                  
                  oper(system, "./postmirror", "Just look at yourself in the mirror");
              }, //function close
              "postmirroralt": function (character, system, action) {
                transer();
                character.sandbox.enjoyit2=false;
                  
                 switch (character.sandbox.ctfrole) {
                  case "bodypart":
                    //doesn't talk to you
                    
                    if(character.sandbox.enjoyit2){
                       
                      system.setQuality("dignitylost",character.qualities.dignitylost+1);
                    }else{
                    
                      system.setQuality("dignitylost",character.qualities.dignitylost-5);
                    }
                    break;
                  case "possessive":
                     if(character.sandbox.enjoyit2){
                       system.setQuality("dignitylost",character.qualities.dignitylost-1);
                    }else{
                      system.setQuality("dignitylost",character.qualities.dignitylost+5);
                    }
                    break;
                  case "petpenis":
                       if(character.sandbox.enjoyit2){
                         system.setQuality("dignitylost",character.qualities.dignitylost+1);
                    }else{
                      system.setQuality("dignitylost",character.qualities.dignitylost-5);
                    }
                    break;
                  case "friend":
                    
                      if(character.sandbox.enjoyit2){
                          system.setQuality("dignitylost",character.qualities.dignitylost-1);
                    }else{
                             system.setQuality("dignitylost",character.qualities.dignitylost+5);
                    }
                 
                        
                    break;
                }//End of RND switch
                
                system.doLink("./postmirror");
              }, //function close
              "postmirror": function (character, system, action) {
                transer();
                parer("<h1>MIRROR</h1>");
                      if(character.sandbox.host?.parse?.fur=="scales"){
                
                    alt="over his scales";
               }else{
                  alt="over his fur for any tangles";
                
                 
               }
                
                
                if(character.sandbox.limits.insheath==2) {
                  //head in sheath cant see well
                  if(character.sandbox.enjoyit){
                    parer("Being trapped in his sheath makes it a bit hard to see, but with enough wiggling you can at least sort of see out of it. He is just standing in front of it checking #alt as he dries off. Meanwhile you are more focused on your home between his legs. You can just barely make out the bulge of your body inside his sheath for a moment before he turns wrong.");
                    
                  }else{
                    
                       parer("Being trapped in his sheath makes it a bit hard to see, but with enough wiggling you can at least sort of see out of it. He is just standing in front of it checking #alt as he dries off. Meanwhile you are more focused on your home between his legs. It's so embarrassing to see it from the outside and know you are trapped inside that sheath!");
                  }
                  
                }else if(character.sandbox.limits.insheath==1){
                  if(character.sandbox.enjoyit){
                    
                     parer("Being trapped in his sheath makes it a bit hard to see yourself. With just your head sticking out all you can see is the clear shape your body makes stuffed into the tight sheath. host is just standing in front of it checking #alt as he dries off. Meanwhile you are more focused on your home between his legs. You are really happy to call his sheath home, its warm moist insides always feel so good against your sensitive body.");
                  }else{
                     parer("Being trapped in his sheath makes it a bit hard to see yourself. With just your head sticking out all you can see is the embarrassingly clear shape you make stuffed into the tight sheath. host is just standing in front of it checking #alt as he dries off. Meanwhile you are more focused on your home between his legs. It's so embarrassing to see it from the outside and knowing you are trapped inside that sheath!");
                    
                  }
                 
                  
                }else{
                  if(character.sandbox.limits.hasarms){
                    //has arms and head is at exactly 20%
                    parer("You are thankfully not contained in a sheath, your body is just to big and long for that. For the most part you look a bit smaller than you should but otherwise appear normal from the.... sheath up. Your have your arms and head are untouched by the transformation.");
                    
                    
                    
                  }else if(character.sandbox.limits.cantalk){
                    //Has head but arms got lost. still in the 20% range
                     parer("You are thankfully not contained in a sheath, your body is just to big and long for that. For the most part you look a bit smaller than you should but otherwise appear normal from the.... sheath up. That is except for your arms, those have been reduced to slight bumps were your shoulders are.  Your head is still intact at least.");
                    
                    
                  }else{
                    //Looks like a cock with a slit for a mouth
                       parer("You are thankfully not contained in a sheath, your body is just to big and long for that. Your head and arms are gone leaving you looking like a slightly humanoid shaped cock. Anyone seeing you would instantly think you were a person stuck halfway between becoming a cock. Even you head resembles that of a penis now, complete with verticle slit for a mouth!");
                    
                    
                  }
                  
                  
                }
                
                switch (character.sandbox.ctfrole) {
                  case "bodypart":
                    //doesn't talk to you
                    
                    if(character.sandbox.enjoyit2){
                      
                      
                        parer("host finishes looking at the mirror and then gives you a rub. He expects nothing from you but quiet obedience. Just a part of his body to enjoy as he sees fit. He never talks to you, which is fine. You are his perfect cock, a completely obedient part of his body. It just feels so right letting youself be claimed so fully.");
                      //system.setQuality("dignitylost",character.qualities.dignitylost+1);
                    }else{
                      parer("host finishes looking at the mirror and then gives you a rub. He expects nothing from you but quiet obedience. Just a part of his body to enjoy as he sees fit. He never talks to you anymore. It is just so embarrassing how he treats you, you are more than just a cock! Right? If only he could aknowledge you more....");
                      
                      //system.setQuality("dignitylost",character.qualities.dignitylost-1);
                    }
                  
                    break;
                  case "possessive":
                    //Get use to it you are just my cock now. There is no way I am ever letting you go. Get use to it
                    
                     if(character.sandbox.enjoyit2){
                       
                       
                        parer("host looks into the mirror and really angles you so you can see yourself! "+character.host.mirrorpos+" He says turning away. It may be embarrassing but you actually rather like this. You want to be his cock and be a part of him! You couldn't be more happy with how fully you belong to him.");
                      //system.setQuality("dignitylost",character.qualities.dignitylost-1);
                    }else{
                      parer("host looks into the mirror and really angles you so you can see yourself! "+character.host.mirrorpos+" He says turning away. It is rather embarrassing how he consantly reminds you of your place. You already know you are stuck as his cock permanently... Maybe it would be better if he could REALLY treat you like a cock.");
                      
                      //system.setQuality("dignitylost",character.qualities.dignitylost+1);
                    }
                    
           
                    
                    
                    break;
                  case "petpenis":
                    //Very good! Such a good cock. Give me a nice throb and I might let you out to play more often.
                    
                       if(character.sandbox.enjoyit2){
                       
                       
                        parer("host looks into the mirror and smiles when he looks down at you. "+character.host.mirrorpet+" He says making you feel all warm and fuzzy inside. Or maybe that is just the precum starting to leak into you. It's so embarrassing that just being complimented makes you feel good! He may have started treating you like a pet but maybe that's just what you are.... His happy pet penis.");
                      //system.setQuality("dignitylost",character.qualities.dignitylost+1);
                    }else{
                     parer("host looks into the mirror and smiles when he looks down at you. "+character.host.mirrorpet+" He says making you feel all embarrassed and unfomfortable. Or maybe that is just the precum starting to leak into you. It would be soo much better if he treated you with a little dignity....");
                      
                      //system.setQuality("dignitylost",character.qualities.dignitylost-1);
                    }
                    
                    
                    break;
                  case "friend":
                    //
                       if(character.sandbox.enjoyit2){
                       
                       if(character.sandbox.enjoyit){
                         
                            parer("host looks into the mirror and seems a bit hesitant when he looks down at you "+character.host.mirrorf+" He says. You don't actually mind being attached to him like this. In some ways it is even kind of fun. It makes you blush thinking about it. There is also the friendship aspect too, he always has someone around to talk to!");
                         
                       }else{
                           parer("host looks into the mirror and seems a bit hesitant when he looks down at you "+character.host.mirrorf+" He says. It still hasn't fully sunk in that you sort of belong to him now. In some ways it is even kind of fun but that is hard to admit. It makes you blush with embarrassment thinking about it. Not to mention there is literally no privacy to be had.....!");
                         
                       }
                      
                        
                        if(character.sandbox.perma){
                          //system.setQuality("dignitylost",character.qualities.dignitylost-1);
                          
                        }
                        
                      
                    }else{
                parer("host looks into the mirror and seems a bit hesitant when he looks down at you "+character.host.mirrorf+" He says. This whole situation is rather weird, are you really supposed to just accept just being a friend that also is a cock? It's embarrassing when he tries to treat you like a person. As if things might be easier if he treated you like what you are.....");
                        if(character.sandbox.perma){
                      
                             //system.setQuality("dignitylost",character.qualities.dignitylost+1);
                        }
                   
                    }
                    
                    
                    
                    break;
                }//End of RND switch
                
                oper(system, "./bedtimeafterevents", "Look forward to getting some sleep");
               // system.doLink("./bedtimeafterevents");
          
              }, //function close
//              "mirroraccup": function (character, system, action) {
//             
//             
//              system.doLink("./bedtimeafterevents");
//              }, //function close
//              "mirroraccdown": function (character, system, action) {
//                
//                
//                
//                
//                system.doLink("./bedtimeafterevents");
//              }, //function close
              "permanoring": function (character, system, action) {
                transer();
                 parer("<h1>A PERMANENT CHOICE</h1>");
                          
                           parer("With evening turning into night host heads to the bed to get some sleep. He gets fully naked and wraps up in the warm blankets sending you into darkness again. He is sitting up though and slowly starts rubbing you, not nearly enough to get you to cum... but enough to make you crazy from the sensations!");
                          
                            if(character.sandbox.ringgonereason=="broke"){
                              //broken ring
                              
                              
                              parer("q1Soo... The ring freaking broke..... You know there is no going back from that. So I guess from now on I should just call you my cock....q1 He says while still rubbing you up and down... the sensations really starting to make you desperate for him to go faster!");
                              
                              
                              
                            }else {
                              //ring gone for more than 10 days
                              parer("q1Soo... That ring isn't showing up, haven't seen it for days now! So I guess from now on I should just call you cock....q1 He says while still rubbing you up and down... the sensations really starting to make you desperate for him to go faster!");
                              
                              
                            }
                            
                            
                            
                           system.doLink("./permamenu");

              }, //function close
              "permaring": function (character, system, action) {
                transer();
               parer("<h1>A PERMANENT CHOICE</h1>");
                          
                           parer("With evening turning into night host heads to bed. He gets fully naked and wraps up in the warm blankets sending you into darkness again. He is sitting up though and slowly starts rubbing you, not nearly enough to get you to cum... but enough to make you crazy from the sensations!");
                          
                          //they are horny loving using you for sex and they control the ring
                          if(character.qualities.ctf<100){
                            //is for partials that enjoyit and have lost then found the ring
                            
                            parer("q1This feels so good... You know I have been thinking... You love being my cock, I am loving you being my cock. You don't really need that silly ring anymore....q1 He says while still rubbing you up and down... the sensations really starting to make you desperate for him to go faster!");
                            
                            
                          }else{
                            if(character.sandbox.enjoyit){
                              //you love being their cock, they love you being their cock.. whats the problem?
                              parer("q1This feels so good... You know I have been thinking... You love being my cock, I am loving you being my cock. You don't really need that silly ring anymore....q1 He says while still rubbing you up and down... the sensations really starting to make you desperate for him to go faster!");
                              
                            }else{
                              //you havent told them you love to be their cock, but THEY love you being their cock!
                              parer("q1This feels so good... You know I have been thinking... Maybe you don't need that ring anymore.q1 He says while still rubbing you up and down... the sensations really starting to make you desperate for him to go faster!");
                              
                            }//end else for not enjoying it
                            
                            
                            
                          }//end else for ctf 100%
                              
                              

                          
   system.doLink("./permamenu");

              }, //function close
              "npsogood": function (character, system, action) {
                transer();
                character.sandbox.nightmasturbate=1;
                parer("host snickers and keeps rubbing you faster and faster. q1Hehe just thought I would ask....q1");
                //system.setQuality("harmony", character.qualities.harmony+1);
               
               
              oper(system,"masturbate/endmb", "Just a little more!!!!");
              }, //function close
              "npresist": function (character, system, action) {
                parer("host snickers and keeps rubbing you faster and faster. q1Hehe just thought I would ask....q1");
                //system.setQuality("harmony", character.qualities.harmony-1);
                
                  character.sandbox.nightmasturbate=1;
                oper(system,"masturbate/endmb", "Just a little more!!!!");
                
              }, //function close
              "permamenu": function (character, system, action) {
             
                  if(character.sandbox.limits.cantalk) {
                     oper(system, "./sogood", "Tell him to keep rubbing!","./resisturge","Barely mumble out a 'nooo...'","./moan","Just moan");
                    
                    } else{
                      
                      if(character.qualities.essence>= character.sandbox.ttcost&&character.sandbox.runedo.thoughts){
                         parer("He doesn't hear you say anything then rubs over your piss slit! q1You can't talk so I guess I should just take that as a yes? Better use that mind link thing otherwise...q1 He says teasing you even more!");
                       
                         oper(system, "./sogoodtt", "(TT:"+ character.sandbox.ttcost+") Tell him to keep rubbing!","./resisturgett","(TT"+ character.sandbox.ttcost+") Barely get out a nooo","./throb","Just throb");
                        
                      }else{
                        if(!character.sandbox.runedo.thoughts){
                            parer("He doesn't hear you say anything then rubs over your piss slit! q1You can't talk so I guess I should just take that as a yes? Better use that mind link thing otherwise...q1 He says, but you disabled that rune! Your body is so hard you can't even wiggle or move beyond throbing! You may never get the chance to turn it back on!");
                        oper(system, "./throbfail","Just throb desperately","./sohorny","Do nothing at all... You want this");
                        }else{
                          parer("He doesn't hear you say anything then rubs over your piss slit! q1You can't talk so I guess I should just take that as a yes? Better use that mind link thing otherwise...q1 He says, but you don't have enough! Maybe if he cums you can tell him!");
                          
                          oper(system, "./throbfail","Just throb desperately");
                        }
                         
                        
                        
                      }
                    
                      
                       
                    
                    }
             
             
              }, //function close
              "throb": function (character, system, action) {
                transer();
                parer("He seems to be saying something important, but all you can do is throb as teases your body! Your entire body is hard, throbbing, pulsing as the pressure in the balls below you builds... Then he stops!");
                parer("He just stopped!");
                parer("You have never been left on such a cliff like this before! For a moment you are terrified of experiencing blue ba#lls for the first time! He can't just leave you hanging like this! Soooo close! He was talking about.... something but it wasn't important you just need him to keep going!");
                oper(system, "./keepgoing", "(TT"+ character.sandbox.ttcost+")Beg him to keep rubbing!");
              }, //function close
              "throbfail": function (character, system, action) {
                transer();
              parer("You don't even have enough mental strength left to answer him! Your entire body is hard, throbbing, pulsing as the pressure in the balls below you builds... Then he stops!");
                parer("He just stopped!");
                parer("You have never been left on such a cliff like this before! For a moment you are terrified of experiencing blue balls for the first time! He can't just leave you hanging like this! Soooo close! He was talking about.... something but it wasn't important you just need him to keep going!");
                
                oper(system, "./sohorny", "All you can do is wiggle helplessly!");
              }, //function close
              "sohorny": function (character, system, action) {
                transer();
                //didn't have enough essence
            
                if((character.sandbox.harmonyunlockup||!character.sandbox.runedo.thoughts)&&character.qualities.harmony>=70){
                  system.setQuality("dignitylost",60);
                  parer("host just shakes his head as you fail to answer. q1You really are too far gone eh? Already such a cock you can't even beg to cum? You already told me you think of yourself as my cock.... I think it might be time we made it official and permanent.q1 he says and returns the stroking your throbbing body!");
                  oper(system, "./permacum", "Throb helplessly as he makes the descion for you!");
                  
                }else{
                  parer("host just shakes his head as you fail to answer. q1You really are too far gone eh? Already such a cock you can't even beg to cum? I guess I can reward that too.... We still need to have this talk later...q1 he says and returns the stroking your throbbing body!");
                  oper(system, "masturbate/endmb", "Throb helplessly");
                }
                
                
              }, //function close
              "moan": function (character, system, action) {
                transer();
          parer("He seems to be saying something important, but all you can do is moan as teases your body! Your entire body is hard, throbbing, pulsing as the pressure in the balls below you builds... Then he stops!");
                parer("He just stopped!");
                parer("You have never been left on such a cliff like this before! For a moment you are terrified of experiencing blue balls for the first time! He can't just leave you hanging like this! Soooo close! He was talking about.... something but it wasn't important you just need him to keep going!");
                oper(system, "./keepgoing", "Beg him to keep rubbing!");
              }, //function close
                "resisturgett": function (character, system, action) {
                  system.setQuality("essence",character.qualities.essence- character.sandbox.ttcost );
                  
               system.doLink("./resisturge");
              }, //function close
              "sogoodtt": function (character, system, action) {
              system.setQuality("essence",character.qualities.essence- character.sandbox.ttcost );
            
                system.doLink("./sogood");
              }, //function close
              "resisturge": function (character, system, action) {
                transer();
              
                parer("He almost seems surprised as you say that. He takes his hands off your sensitive body leaving you at the edge of something wonderful! It's so close! Like sand slowly leaking away! Still you somehow manage to concentrate enough to tell him noo. q1No? really. Then I guess I will just stop. Maybe you will have a better answer tomorrow.q1 He says and lays back down!");
                if(character.sandbox.enjoyit){
                  parer("You really do love being his cock but.... forever is a bit much. There is always a chance things could change. But maybe you don't want them to change. Being just a penis for him is fun, maybe it's time to accept it is all you ever want to be....");
                  
                }
                oper(system, "./saidnope", "Throb desperately for most of the night");
              }, //function close
              "saidnope": function (character, system, action) {
                transer();
                parer("host leaves you to throb desperate and needing to cum so badly! ");
                oper(system, "./ringend", "Maybe tomorrow night.....");
              }, //function close
              "sogood": function (character, system, action) {
                transer();
                
                parer("He laughs and suddenly slows down! All those building sensations don't go away, they are just left there waiting! That full body orgasm was just moments away, you can still feel it so close! q1Tell me you are ready to be my cock forever.q1 He says.");
              
              oper(system, "./keepgoing", "Beg him to keep rubbing!","./resisturge","Tell him you are not ready for that");
              }, //function close
              "keepgoing": function (character, system, action) {
                transer();
                   parer("<h1>THE CHOICE</h1>");
                if(character.sandbox.ringcheck){
                  //ring is still accessable
                  
                  
                  parer(character.host.ulti);
                  if(character.sandbox.enjoyit){
                    oper(system, "./givein", "You need to cum so badly! Just give in....","./begtobecock","Beg him to make you his cock forever!","./resisturge","Not yet...");
                    
                  }else{
                    
                       oper(system, "./givein", "You don't want this but you need to cum!","./begtobecock","Beg him to make you his cock forever!","./resisturge","Noooo");
                  }
                  
                }else{
                  //ring is lost or gone
                     parer(character.host.ultinoring);
                   if(character.sandbox.enjoyit){
                     
                     oper(system, "./givein", "You just need to cum so badly!","./acceptcock","All you want is to be his cock forever!","./resisturge","Not yet......");
                     
                   }else{
                   
                     oper(system, "./givein", "Tell him anything to get your release!","./acceptcock","Accept that you are just his cock","./resisturge","Noooo");
                   }
                  
                  
                }
                
               
                
              
              }, //function close
              "acceptcock": function (character, system, action) {
                transer();
                
                if(character.sandbox.enjoyit){
                  parer("Your mind is so lost in deseperation that all you can think is that he is right. He has used you to cum with over and over. It's all you are good for and with the ring gone that won't be changeing. This is what you wanted, being his cock has been the best experience. You tell him you are just a part of his body, all you will ever be is his cock...... His desperate needy cock that just wants to cum already!");
                   system.setQuality("dignitylost",70);
                }else{
                  
                   parer("Your mind is so lost in deseperation that all you can think is that he is right. He has used you to cum with over and over. It's all you are good for and with the ring gone that won't be changeing. You didn't want this but it's no late now to denie it. You tell him you have come to terms with it, you are his cock. A penis is all that you are now to him.");
                   
                    system.setQuality("dignitylost",60);
                }
                
               
              oper(system, "./permacum", "You are now permanently his penis");
              }, //function close
              "givein": function (character, system, action) {
                transer();
                
                
                parer("You are to lost in a cumdrunk haze to even know what you are saying! Everything is so blurry, you say anything you can to get him to keep rubbing you! You are his cock and he should be jerking you off, not trying to talk you into whatever he is saying! Your job is to shoot his cum but his job is to make you feel good! You putter out pleas and promises to be the best cock you can be, forever and ever and...... just as long as he lets you cum! He laughs and gives you another rub. q1Guess you are already too far gone. Maybe I should just call you cock now.q1 he says as you feel something fundemental shift in the relationship between you two.");
                 system.setQuality("dignitylost",75);
              oper(system, "./permacum", "You are now permanently his penis");
              }, //function close
              "begtobecock": function (character, system, action) {
                transer();
                parer("The ring is the only thing between you and becoming a wonderful cum drooling cock forever! Nothing is more important in this moment, you would give up anything to feel his cum coursing through your body! That moment of pure joy is so close! You don't hold back and beg outright to be his cock for the rest of his life! Whatever he needs to do to make it happen! Even if it means selling or destorying the ring! Anything if it means you get to cum!");
                 system.setQuality("dignitylost",60);
                oper(system, "./permacum", "You are now permanently his penis");
              }, //function close
       
              "permacum": function (character, system, action) {
                transer();
                parer("host reaches under a pillow and takes out something you don't recognize. He places it against you and...... THE WORLD SHAKES!");
                delay(["BRRRRRRRRRRRRRRRR","It is unlike anything you have ever experienced!","You can't think you can't move JUST so good!","The vibrations, its like ever single part of you is exploding with pleasure!","./cumhard"]);
          
              }, //function close
              "cumhard": function (character, system, action) {
                transer();
                character.sandbox.perma=true;
                
                
                
                if(character.sandbox.limits.cantalk){
                  
                      parer("You cum, you cum HARD! For the first time you REALLY can feel his balls pump cum up into the urethra inside you! It almost hurts with how much pressure there is! It all floods into your mouth making your feel like a firehose erupted in your throat! You somehow can taste every spurt of cum as it shoot from your mouth!");
                }else{
                     parer("You cum, you cum HARD! For the first time you REALLY can feel his balls pump cum up into the urethra inside you! It almost hurts with how much pressure there is! It all shoots straight out of your cock slit! It still feels like your mouth despite what it looks like, you somehow can even taste every spurt of cum!");
                  
                }
             system.animateQuality("essence", character.qualities.essence + 20);
                oper(system, "./ringend", "Fall asleep as you continue to drool cum");
              }, //function close
        
    
            
              "ringchecker": function (character, system, action) {
             transer(); 
             
                character.sandbox.eveningtease=false;
                if(character.sandbox.ringgone){
                  character.sandbox.ringcheck=false;
                  character.sandbox.ringstuck=false;
                };
                
               if((!character.sandbox.perma)&&character.sandbox.ringstuck){
                  
                  parer("The ring is currently stuck around your neck.");
         //oper(system, "./ringend", "Get some sleep");
                  character.sandbox.ring=true;
                  system.doLink("./ringend");
                  
                }else{
                 //ring is not stuck around neck 
                   //
                  
                
                
                if(character.sandbox.ringcheck){ //THis tells the host to check to see if he wants to wear the ring or not! ITs AFTER losing it and finding it!
                  
                    
                    
                   character.sandbox.ring=false;
                  system.doLink("./ringofforon");
                  
                }else{
                
                
                
            
               // oper(system, "./ringend", "Get some sleep");
                   system.doLink("./ringend");
                  
                }
              }
             
             
              }, //function close
              "ringofforon": function (character, system, action) {
                transer();
    character.sandbox.ring=false;
                if(rnd()>(3-character.sandbox.xeyischeating)||character.sandbox.didresearch){
                 //they are considering putting the ring on you.
              
                 if(character.sandbox.perma){
                   
                   
                   if(character.sandbox.ringsold){
                     
                     
                     
                   }else{
                     
                      parer("host gets ready for bed but hesitates as they consider the ring for a moment. They reach over and grab it, thinking about what to do with it.");
                   }
                   
          
                       system.doLink("./ringoffonperma");
                  
                 }else{
                   parer("host gets ready for bed but hesitates as they consider the ring for a moment. They reach over and grab it, thinking about what to do with it.");
                     system.doLink("./ringonoroff2");
                   
                 }
                    
                 
                   
                   //decides to wear the ring
                   //decides to not wear the ring
                   //asks if they should wear the ring
                   
                   
                   //check to see if they WANT to wear the ring. 
                   //scene where the player can try to mention the ring. character.sandbox.ttcost
                   
                   
                
                }else{
                   //they don't try to put the ring back on
                  parer("host starts to get ready for bed, but you quickly realize they are making no attempt to put the ring back on. Without it there is not way you are ever going to be able to change back! Even worse is the possibility of losing it again!");
                  
                  if(character.sandbox.limits.cantalk){
                    
                    oper(system, "./alertthem", "Ask him about putting the ring back on!", "./ringend","Just let him go to bed");
                    
                  }else{
                    if(character.qualities.essence>=character.sandbox.ttcost&&character.sandbox.runedo.thoughts){
                    oper(system, "./alertthem", "(TT: "+character.sandbox.ttcost+") Ask him about putting the ring back on!", "./ringend","Just let him go to bed");
                 
               }else{
                 oper(system, "./ringend","You are helpless and can only watch as he goes to bed");
                 
                 
               }
                    
                  }
               
                  
                  
                }
                
               
              }, //function close
              "ringoffonperma": function (character, system, action) {
                transer();
                if(character.sandbox.ringsold){
                  
                    parer("You momentarily wonder about the ring and where it might be now... The pawn shop might have even sold it already...");
                }else{
                     parer("He flips the ring around a few times. q1Thinking about going out and selling it at a pawn shop tomorrow. Maybe buy you better one with the money hehe.q1 He says placing it back on the bedside table almost as if to tease you more.");
                  
                }
             
                system.doLink("./ringend");
              }, //function close
              "alertthem": function (character, system, action) {
                transer();
                if(character.sandbox.perma){
             parer("You quickly remind them about the ring before they fall asleep. ");
                  system.doLink("./ringoffonperma");
                }else{
                       
                    parer("You quickly remind them about the ring before they fall asleep. host sighs a bit considering it. q1Maybe.... its just been nice not having those weird dreams every night. Finally getting some good sleep for a change.q1 He says and grabs the ring looking it over.");
                if(character.sandbox.limits.cantalk){
                  
                  
                }else{
                   system.animateQuality("essence",character.qualities.essence- character.sandbox.ttcost, { from: character.qualities.essence, to: character.qualities.essence-character.sandbox.ttcost});
                  
                  
                }
                  system.doLink("./ringonoroff2");
                }
              
                 
                
               
              }, //function close
              "ringonoroff2": function (character, system, action) {
                
                
                if((rnd()+character.sandbox.xeyischeating)>3||character.sandbox.didresearch){
                  parer("Without a word he slips the ring back down around you. It feels snug enough down around you, but after the other night you can't help but worry about losing it again. Though something about it down there feels rather nice, like it belongs there. After several minutes you start to shrink some more but not enough to lose it as host begins to fall asleep.");
                character.sandbox.ring=true;
               
                }else{
                  
                  parer("q1Sorry.... but I really need the sleep badly! All those dreams are just too much for me tonight. You are just gonna have to say a cock for a while longer.....q1 He say and flips the blanket back over you! Even worse you have no idea where the ring is now, he was just holding it and now.... You really hope he can find it again in the morning!");
                  
                  
//                  parer("Before he can put the ring on you he hesitates and thinks about it. q1You know I could just wear the ring myself..... It's not so big it wont fit on my thumb...");
//                  
//                  if(character.sandbox.limits.cantalk){
//                
//               oper(system, "./", "Ask him to put it on you","","Suggest he wears it on his finger");
//              }  else{
//                
//                 oper(system, "", "","","");
//                
//              }
                }
                
                
                
           
              
               
              
                system.doLink("./ringend");
              
              }, //function close
         
              "ringend": function (character, system, action) {
                transer();
                var target;
                character.sandbox.hostaskedfor="";
                if(character.sandbox.ring&&character.sandbox.controlruneaccess&&rnd()>7){
                  //check if host wants something
                  //make a list of things host wants
                  //generate phrases for each
                  //
                    character.sandbox.tftogo=character.sandbox.host.harmony[3] - character.qualities.ctf;
                  
                  
                  
                
                  
                  
                  
                  
                  if (character.qualities.ctf< character.sandbox.tftogo&&(character.sandbox.runeknown.indexOf("merge")!=-1)){
                    //wants to use rune to make you more cock
                    character.sandbox.hostaskedfor="merge";
                    parer(["host yawns a bit once he has layed down q1Hey, see if you can get those runes to get you looking a bit more cock likeq1","Just before host falls to slumber you hear him mumble q1See if you can fiddle with those runes so you fit in my sheath a bit better.q1","As the night continues you hear host say something just before falling asleep, q1You really need to shrink a bit more, you should be able to figure that out...q1"]);
                    
                    
            }else if(character.qualities.ctf>character.sandbox.tftogo&&(character.sandbox.runeknown.indexOf("unmerge")!=-1)){
                    //wants to make you less cock
                    //may want to check with a bit more detail
                        character.sandbox.hostaskedfor="unmerge";
            parer(["host yawns a bit once he has layed down q1Hey, you should do something with those runes before you become to much of a cock to change backq1","Just before host falls to slumber you hear him mumble... q1See if you can fiddle with those runes so you are larger. A normal looking cock is nice but a big cock is betterq1","As the night continues you hear host say something just before falling asleep, q1You better start using those runes to change back some.q1"]);
                    
                    
                    
                    
                  }else{
                    //at the right size for hosts preferances
                    if((rnd()>(8-(character.sandbox.tracksleep*2)))&&!character.sandbox.ringcheck){
                      character.sandbox.tracksleep=0;
                        character.sandbox.hostaskedfor="blank";
                      parer(["host mumbles a bit as he is starting to fall asleep q1Leave those runes alone tonight, I really need the sleep.q1","q1No changes tonight alright?q1 He says and then rolls over to get to sleep.","There is a break in the silence as host gives you a poke, q1Lets avoid the weird rune dreams, I just want a normal nights sleepq1"]);
                      
                    }
                    
                   
                  }
                   oper(system, "./zzztime", "Consider it as you both fall asleep...");
                  
                }else{
                  system.doLink("./zzztime");
                 
                }
                
                
                
                
                
//                 if(character.sandbox.eveningtease){
//                 system.animateQuality("essence", character.qualities.essence + 10);
//                  parer("Night masturbation placeholder");
//                }else{
//                 parer("Bedtime placeholder"); 
//                  
//                }
//                character.sandbox.eveningtease=false;
//                

              }, //function close
              "zzztime": function (character, system, action) {
             
           character.sandbox.eveningtease=false;
                parer(".......");
                delay(["....","zzzzzzz","transformation"],character.sandbox.eventspeed);
            
              }, //function close
             "r1": function (character, system, action) {
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