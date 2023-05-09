undum.game.aftermorning = {

    aftermorning: new undum.SimpleSituation(
     "", {
       enter: function (character, system, action) {
         
            parer("<h1>"+(((character.sandbox.headingholder == "Your") ? character.sandbox.headingholder : (character.host.chost + "'s")) + " Living Room")+"</h1>");
         if (!character.sandbox.perma) {
           var ringpen;
           ringpen = character.qualities.day - character.sandbox.dayringlost;
           console.log("day " + character.qualities.day + "  and ring lost on " + character.sandbox.dayringlost);
           console.log("mathcheck " + (rnd(10) > (ringpen + 4)));
           if (((character.sandbox.ringlost && character.sandbox.ringhelp) && (rnd(10) > (character.qualities.day - character.sandbox.dayringlost+ 4) )) && !character.sandbox.ringgone&&!character.sandbox.ringreallylost ) {
  
             system.doLink("./ringfound");
  
           } else if ((character.sandbox.ringlost && ringpen > 10) && (!character.sandbox.ringgone)) {
             if (character.sandbox.enjoyit) {
               parer("It has been so long since you last saw that ring... It is very likey it is lost forever, which is the same amount of time you will be trapped as a simple... helpless cock.... A small part of you hopes it never gets found!");
               oper(system, "./aftermorninglinkery", "Enjoy the thought....");
             } else {
  
               parer("It has been so long since you last saw that ring... It is very likey it is lost forever, which is the same amount of time you will be trapped as a simple... helpless cock....");
               oper(system, "./aftermorninglinkery", "Try not to think about it");
             }
  
  
  
           } else if (character.sandbox.ringgone&&character.sandbox.ringgonereason=="broke") {
             if (character.sandbox.ringgonefirst) {
               //first time after the ring breaks
               character.sandbox.ringgonefirst = false;
               parer("As host is getting ready for the day and notices something odd..." + character.host.ringbroke);
               if (character.sandbox.enjoyit) {
                 parer("It takes a few moments for this to really sink in. You know it was your messing with the runes that caused this. But you don't tell that to host. Your little secret how you broke it so there was no way to change you back! It sends a shiver up your... shaft realizing that it actually worked, and that you really went through with it! You get to spend the rest of your days as a cock!");
               } else {
                 parer("It takes a few moments for this to really sink in. You know it was your messing with the runes that caused this. But you don't tell that to host. It clealy was dangerous, but its hard to say if you did it out of curiosity or accident. It just sort of happened. How could you have known it was REALLy going to break the ring!");
  
               }
  
  
               oper(system, "./aftermorninglinkery", "Too late now.... Continue on with the day");
             } else {
               //ring is broken, any afternoon....
  
               parer("You happen to catch a glance at the ring, or the pieces of it sitting on a shelf. A subtle reminder that you are stuck like this now.");
               oper(system, "./aftermorninglinkery", "Try not to think about it");
             }
  
  
  
  
  
           } else {
             system.doLink("./aftermorninglinkery");
           }
         } else {
           system.doLink("./aftermorninglinkery");
         }
       }, //function/enter close 
       actions: {
         "aftermorninglinkery": function (character, system, action) {
           
           character.sandbox.nightfun = false;
           //if (character.qualities.tfstatus==13||(character.sandbox.host=="bret"&&character.qualities.tfstatus==9)){
           if (character.qualities.ctf < 60 && character.sandbox.perma) {
             character.sandbox.gooutcount++;
             if (character.sandbox.gooutcount > 5&&!character.sandbox.partial) {
  
               character.sandbox.limits.goout = false;
             }
           } else {
             character.sandbox.gooutcount = 0;
  
           }
  
  
           if (!character.sandbox.limits.goout && !character.sandbox.partial&&!character.sandbox.stealth) {
             //Stuck inside
  
             if (character.sandbox.gooutcount > 5 && character.qualities.ctf < 60 && character.sandbox.perma) {
               // Headed to professional
  
               system.doLink("./seekhelp");
               // system.doLink("./inside");
             } else {//stuck inside too long, close
               // Mentions might have to call hospital and calls out
               system.doLink("./inside");
  
             }
             ;//stuck inside close
           } else if (character.sandbox.headingholder == "Your") {
             // Currently IN your house but can leave house now.
  
             system.doLink("./move");
             character.sandbox.limits.goout = true;
  
           } else {
             //Host is able to leave the house
  
  
  
  
  
  
             if (character.sandbox.stealth) {
  
  
  
  
               system.doLink("./stealthprework");
  
             } else {
               system.doLink("./discuss");
  
             }
  
           }//able to leave house if statment close
  
  
  
         }, //function close
            "stealthprework": function (character, system, action) {
              
               if(character.qualities.sus>20&&(!character.sandbox.pillstealthcheck)){
                 transer();
                character.sandbox.pillstealthcheck=true;
            parer("Before heading off to work you hear host talking with someone on the phone about something. A few phrases do catch you attention. q1Yea... More.... auroused during the day than usual. Weird twitches. Not very often though.... Yea? Pills.... Alright. Just over the counter?..... Oh I know those...... Ok I will...... First sign of side effects I will come in promise....... ok thank you!q1 He says and hangs up.");
                oper(system,"./stealthprework1", "Just pills, nothing to worry about");
          }else{
                system.doLink("./stealthprework1");
          }
    
            }, //function close
         "stealthprework1": function (character, system, action) {
           transer();
  
           //scene of morning stuff teasey primary route
           //scene of sending to main path
           //scene of ring falling offish
  
           //????????????
           //version 1 = host 
           // 
           //   
           //
           /// end stealth route WITH ring Gains TT
  
           // End stealth route without RING SPECIAL
           // means special masturbation scene  where they use a "cockring" Gives one time chance to learn TT
           //
           //two results Get attention/just enjoy 
  
           // scene after just enjoy where they sell the ring.
  //
  //
  //
  //((character.sandbox.acc * 2) < character.sandbox.discovery)
  
  
  
           if ((((character.sandbox.acc * 2) < character.sandbox.discovery) && character.qualities.essence > 50) && !character.sandbox.perma) {
             system.doLink("mergefinal/stealthend");
             //this goes to main branch
           } else {
             if (character.sandbox.weekend) {
  
               parer("It doesn't seem like host works today. Just bumbling around their house not in a hurry to do anything.");
  
                  system.doLink("weekend/enter");
             } else {
               if (character.sandbox.forgotten) {
                 parer("host finishes getting ready for dayjob and makes his way out the door. host will take good care of you, he always has. You almost can't remember what is was like when you could move. But that's silly, cocks don't move. It has to have been years you have been trapped... kept safe in his sheath. He probably doesn't even remember you were anything but a part of him.");
  //Somthing about you has changed though, the tight hug of his sheath feels comforting
  
                 oper(system, "work/hostwork", "Look forward to what your owner is going to do today");
  
               } else if (character.sandbox.pillroute) {
                 parer("host finishes getting ready for dayjob and makes his way out the door. You can't even wiggle to let him know you want something! As far as host knows you really are just a mindless cock now. All you have is the tight unending hug of his sheath and steady pulse to keep you occupied through the day.");
  //Somthing about you has changed though, the tight hug of his sheath feels comforting
  
                 oper(system, "work/hostwork", "Get ready to spend the day as a real cock");
               } else {
                 
                 if(character.sandbox.stayhidden){
                   parer("host finishes getting ready for dayjob and makes his way out the door. The trip there is uneventful and the swaying back and forth as he walks just makes it harder to relax. host has no idea he has someone secretly hiding in his pants experiencing the entire day from the perspective of his penis! You get a minor thrill every time you move slightly just to tempt fate without him realizing what is going on!");
                   
                   
                 }else{
                    parer("host finishes getting ready for dayjob and makes his way out the door. The trip there is uneventful and the swaying back and forth as he walks just makes it harder to relax. host has no idea he has someone trapped in his pants experiencing the entire day from the perspective of his penis!");
  
  
                   
                 }
                
                 oper(system, "work/hostwork", "Get as comfortable as a penis can during a boring day");
  
               }
  
  
             }
  
  
  
           }
           
  
           //system.setQuality("timeofday", character.qualities.timeofday + 1);
  
  
         }, //function close
  
         "ringfound": function (character, system, action) {
           transer();
           parer("You are just getting settled in for bed in your comfortable sheath when you hear host yell out!");
           parer(character.host.lostringfound);
           character.sandbox.dayringlost = 999;
           character.sandbox.ring = false;
           character.sandbox.ringlost = false;
     
           character.sandbox.ringcheck = true;
           oper(system, "./discuss", "Let him get on with the day as you worry about the ring");
  
  
  
  
         }, //function close
         "discuss": function (character, system, action) {
           transer();
           /*
            
            alt=(true)?"":"";
            
            system.setQuality("timeofday", character.qualities.timeofday + 1);
            */
  
           //have breakfast
  
           //event triggers
           if (!character.sandbox.limits.cantalk && !character.sandbox.abilities.think) {
             //learns how thought speak works 
  
             parer("Still sucks that you can't talk anymore, this isn't going to be any easier to change you back with just one of us. You sure you can't get any words through that piss slit?\"he asks, but to you it's painfully obvious. You can tighten it a bit as if some of the muscles from your mouth were still there but it's just an extension of his urethra now. Until you turn back the only thing your mouth is going to be used for is piss and cum. You just shake your cock head negetivly at host internally sighing.<p>The runes were nice enough to let you keep your sense of taste though. You internally glare at them thinking angry and harsh thoughts their direction, surprisingly they almost seem to tingle when you do so!");
  
  
             /*
              The runes did all this, you think about them and wonder why they left sense of taste is intact..... and if you can somehow convince them to turn you back.\
              They seem to almost tingle as you think about them, however you don't really notice until you think the words *stupid runes*<p>\"HEY I heard that!\" host says shocked!");
              */
  
  
             oper(system, "./thoughts", "Concentrate on the runes again");
  
           } else if (character.qualities.ctf == 100) {
             //Full cock TFed
             if (character.sandbox.newtracker.cocked) {
               // fullcock not the first time.             
               //leaving this here as a possible expansion hook
  
               if (character.sandbox.weekend) {
  
                 system.doLink("weekend/enter");
               } else {
  
                 system.doLink("./fullcockdiscuss");
               }
  
  
  
  
             } else {
               // first morning as a full cock   
  
               system.doLink("./fullcockfirst");
  
             }
           } else {
  
             //no special circumstances, not full cock, inbetwenish for minimal TF, already has thought transfer OR doesn't need it.
  
             if (character.sandbox.weekend) {
               system.doLink("weekend/enter");
  
             } else {
               if(character.sandbox.permaplugged||character.sandbox.permalock){
                 if(character.sandbox.permalock){
                      system.doLink("./discusslocked");
                   
                 }else{
                      system.doLink("./discussplugged");
                 }
               }else{
                  system.doLink("./discussnormal");
               }
               
              
             }
  
           }
         }, //function close
            "discussplugged": function (character, system, action) {
              transer();
              
              
                   // head sticks out makes talking easier.
                  character.sandbox.erect=false;
                  clother();
               if (character.sandbox.ignore) {
  
                 parer("host continues his morning getting himself some breakfast, once again reminding you of your inability to eat. Well anything other than the massive plug you are still swallowing. Through the morning you find Its surprisingly comfortable being carried around inside his sheath, even in the current predicament. <p>host finishes his food and starts getting dressed.");
                 character.sandbox.ttcarryover = "Stay silent just like he wants you to be";
  
  
               } else {
                 parer("host continues his morning getting himself some breakfast, once again reminding you of your inability to eat. Well anything other than the massive plug you are still swallowing. Through the morning you find Its surprisingly comfortable being carried around inside his sheath, even in the current predicament. <p>host finishes his food and starts getting dressed. You can just barely hear him mumble out q1I have to go to dayjob soon. You just keep that plug nice and secure for the dayq1 He says.");
            character.sandbox.ttcarryover = "Stay silent just like he wants you to be";
  
               }
  
  
  
     
                 spark = true;
  
  
                 system.doLink("./ttchoice");
          
              
                  
            }, //function close
            "discusslocked": function (character, system, action) {
              transer();
             character.sandbox.erect=false;
                  clother();
               if (character.sandbox.ignore) {
  
                 parer("host continues his morning getting himself some breakfast, once again reminding you of your inability to eat. You almost feel like you are stuck in jail with the metal rings around you. Even with the cage, his sheath and your body keeps it nice and warm.<p>host finishes his food and starts getting dressed.");
                 character.sandbox.ttcarryover = "Just let him continue with his day";
  
  
               } else {
                 parer("host continues his morning getting himself some breakfast, once again reminding you of your inability to eat. You almost feel like you are stuck in jail with the metal rings around you. Even with the cage, his sheath and your body keeps it nice and warm.<p>host finishes his food and starts getting dressed. You can just barely hear him mumble out q1I have to go to dayjob soon. You know wearing a chastity cage isn't soo bad.q1 He says.");
            character.sandbox.ttcarryover = "Just let him continue with his day";
  
               }
  
  
  
     
                 spark = true;
  
  
                 system.doLink("./ttchoice");
          
         
            }, //function close
         "discussnormal": function (character, system, action) {
           transer();
           
           
           var needtoeatfix="";
           if( character.sandbox.enjoyit||character.sandbox.ch2){
             
            needtoeatfix="host continues his morning getting himself some breakfast, once again reminding you of your inability to eat. It certainly makes things easier not needing to eat... Just one more reason it's better to live as a penis forever.";
           }else{
             
                needtoeatfix=" He continues his morning getting himself some breakfast, once again reminding you of your inability to eat. In some ways it certainly makes things easier not needing to eat... but its hardly worth the cost!";
           }
           
           alt= needtoeatfix;
           switch (character.sandbox.limits.insheath) {
             // determins sheath based interaction next
             case 0:
               // mostly for bret
  
               if (character.sandbox.host.host != "bret"&&!character.sandbox.partial) {
                 system.doLink("./inside");
                 break;
               }
  
               if (character.sandbox.ignore) {
  
                 parer("host rather quickly gets the harness back out and secures you to his belly once more. #alt host continues getting ready for the day acting like having you dangling under him like this was completely normal!");
               } else {
  
                 parer("host rather quickly gets the harness back out and secures you to his belly once more. #alt <p>host finishes his food and spreads his legs looking down at you. \"I have to go to dayjob soon. So any planning we should probably get it out of the way now while we can\"he suggests.");
  
  
               }
               if (rnd() > 4) {
                 character.sandbox.gooutcount++;
  
                 parer("You can't help but also hear him grumble to himself about having to wear a big coat just to hide you... People are going to start to wonder about that....");
               }
  
  
  
  
  
               if (character.sandbox.limits.cantalk) {
  
                 system.doLink("./ttnot");
               } else {
                 spark = true;
  
                 character.sandbox.ttcarryover = "Shake your cock-like head indicating no";
                 system.doLink("./ttchoice");
               }
               break;
               parer("OK, how the heck did you get here?");
             case 1:
               // head sticks out makes talking easier.
                  character.sandbox.erect=false;
                  clother();
               if (character.sandbox.ignore) {
  
                 parer("#alt Through the morning you find Its surprisingly comfortable being carried around inside his sheath, at least without those pants on. <p>host finishes his food and starts getting dressed. It is only slightly distressing knowing you belong trapped behind the crotch of his pants.");
                 character.sandbox.ttcarryover = "Stay silent just like any other part of his body";
  
  
               } else {
                 parer("#alt Through the morning you find Its surprisingly comfortable being carried around inside his sheath, at least without those pants on. <p>host finishes his food and spreads his legs looking down at you. \"I have to go to dayjob soon. So any planning we should probably get it out of the way now while we can\" he suggests.");
                 character.sandbox.ttcarryover = "Shake your cock-like head indicating no";
  
               }
  
  
  
               if (character.sandbox.limits.cantalk) {
                 system.doLink("./ttnot");
               } else {
                 spark = true;
  
  
                 system.doLink("./ttchoice");
               }
               break;
             case 2:
               // will have to get you out of sheath first.
               if (character.sandbox.ignore) {
                    character.sandbox.erect=false;
                    clother();
                 parer("#alt Its surprisingly comfortable being carried around inside his sheath, at least without those pants on, of course you end up spending all of it inside his sheath. <p>host finishes his food starts getting dressed. You only see the light at the opening of the sheath go dark as you become further trapped by his pants.");
                 character.sandbox.ttcarryover = "Stay silent like any other part of his body would";
               } else {
                    character.sandbox.erect=true;
                    clother();
                 parer("#alt Its surprisingly comfortable being carried around inside his sheath, at least without those pants on, of course you end up spending all of it inside his sheath.<p>host finishes his food and spreads his legs, you feel a pressure all followed by slight twinge of arousal. Soon the penis parts of your body begin to firm up and force you out of his sheath. He breaths deeply and gives you a friendly rub before speaking. \"I have to go to dayjob soon. So if there is anything you want, you better tell me before I put you back home for the day.\" He says patting his sheath");
                 character.sandbox.ttcarryover = "Tell him to just go about his day as normal";
               }
  
  
  
  
               if (character.sandbox.limits.cantalk) {
  
                 system.doLink("./ttnot");
               } else {
  
                 spark = true;
  
  
                 system.doLink("./ttchoice");
  
               }
           }// switch end
         }, //function close
         
         
         "fullcockfirst": function (character, system, action) {
           transer();
  
  
  
  
        if(character.sandbox.host.cocktype=="horse"&&!character.host.host=="will"){
         parer("host gives you a few rubs comforting you, not to mention the thrills of excitement it sends through your sensitive squishy body. Just to remind him you are still in there you wiggle aginst his hand.<p>\"Geeze that is weird, gonna take a while to get use to having a horse cock!! Thanks by the way!\" host says hardly improving the situation any.<p>\"Still I have to get to dayjob! Which means till we get back home you ARE just a normal penis alright?\" He says rather sternly");
        }else{
  
       if (character.sandbox.enjoyit) {
  
  
  
             parer("host gives you a few rubs comforting you, not to mention the thrills of excitement it sends through your sensitive squishy body. Just to remind him you are still in there you wiggle aginst his hand.<p>\"Geeze that is weird, well I hope you are happy. You look almost exactly like my old one! Minus the moving on its own and being slightly longer... thanks by the way!\" host says hardly improving the situation any.<p>\"Still I have to get to dayjob! Which means till we get back home you ARE just a normal penis alright?\" He says rather sternly");
  
           } else {
  
  
             parer("host gives you a few rubs but its hardly any comfort, other than the thrills of excitement it sends through your sensitive squishy body. Just to remind him you are still in there you wiggle aginst his hand.<p>\"Geeze that is weird, its easy to forget you are not just a normal cock. You look almost exactly like my old one! Minus the moving on its own and being slightly longer... thanks by the way!\" host says hardly improving the situation any.<p>\"Still I have to get to dayjob! Which means till we get back home you ARE just a normal penis alright?\" He says rather sternly");
  
           }
  }
  
        
  
  
           character.sandbox.newtracker.cocked = true;
           knower("cocked", true);
           oper(system, "./obey", "Relax and slide back into your sheath obediantly", "./disobey", "Twist around pointing at him as if glareing");
  
  
  
  
         }, //function close
         "fullcockdiscuss": function (character, system, action) {
           transer();
           
              
           if(character.sandbox.permaplugged||character.sandbox.permalock){
  
             if(character.sandbox.permaplugged){
                  system.doLink("./fullcockplugged");
               
             }else{
                  system.doLink("./fullcocklocked");
               
             }
           
           }else{
                character.sandbox.erect=true;
                clother();
           if (character.sandbox.enjoyit) {
             //enjoy it variation
             if (character.sandbox.ignore) {
                 
               parer("host gives you a few rubs but it's for his own comfort, it still sends thrills of excitement it sends through your sensitive squishy body. q1Just a normal cock now. Hehe as it should be.q1  host says causing you to feel a bit of pride at that. He doesn't treat you any diffrently than he would his original one. You might as well have always been his cock....");
               oper(system, "./ignoreobey", "Let his body pull you back into your home", "./ignoredisobey", "Wiggle around playfully defiant");
             } else {
               
               if(character.sandbox.host.cocktype=="horse"&&!character.host.host=="will"){
                    parer("host gives you a few rubs but its hardly any comfort, other than the thrills of excitement it sends through your sensitive squishy body. Just to remind him you are still in there you wiggle aginst his hand.<p>\"Geeze that is weird, it's bad enough that you look like a horses cock but the wiggling still surprises me! Damn having being hung like a horse is fun..... thanks by the way!\" host says causing you to feel a bit of pride at that.<p>\"Still I have to get to dayjob! Which means till we get back home you ARE just a normal penis alright?\" He says rather sternly");
                 
               }else{
                     parer("host gives you a few rubs but its hardly any comfort, other than the thrills of excitement it sends through your sensitive squishy body. Just to remind him you are still in there you wiggle aginst his hand.<p>\"Geeze that is weird, its easy to forget you are not just a normal cock. You look almost exactly like my old one! Minus the moving on its own and being slightly longer... thanks by the way!\" host says causing you to feel a bit of pride at that.<p>\"Still I have to get to dayjob! Which means till we get back home you ARE just a normal penis alright?\" He says rather sternly");
                 
               }
           
               oper(system, "./obey", "Relax and slide back into your sheath obediantly", "./disobey", "Wiggle around a bit playfully defiant");
             }
  
  
           } else {
             //not enjoy it
             if (character.sandbox.ignore) {
  
  
               parer("host gives you a few rubs but it's for his own comfort, it still sends thrills of excitement it sends through your sensitive squishy body. q1Just a normal cock now. Hehe as it should be.q1  host says causing you to feel twinge of embarrassment. He doesn't treat you any diffrently than he would his original one these days. You might as well have always been his cock....");
  
               oper(system, "./ignoreobey", "Let his body pull you back into your home", "./ignoredisobey", "Wiggle around a bit being somewhat defiant");
             } else {
                if(character.sandbox.host.cocktype=="horse"&&!character.host.host=="will"){
                    parer("host gives you a few rubs but its hardly any comfort, other than the thrills of excitement it sends through your sensitive squishy body. Just to remind him you are still in there you wiggle aginst his hand.<p>\"Geeze that is weird, it's bad enough that you look like a horses cock but the wiggling still surprises me! Damn having being hung like a horse is fun..... thanks by the way!\" host says causing you to feel a bit of pride at that.<p>\"Still I have to get to dayjob! Which means till we get back home you ARE just a normal penis alright?\" He says rather sternly");
                    
                    
                  }else{
               parer("host gives you a few rubs but its hardly any comfort, other than the thrills of excitement it sends through your sensitive squishy body. Just to remind him you are still in there you wiggle aginst his hand.<p>\"Geeze that is weird, its easy to forget you are not just a normal cock. You look almost exactly like my old one! Minus the moving on its own and being slightly longer... thanks by the way!\" host says hardly improving the situation any.<p>\"Still I have to get to dayjob! Which means till we get back home you ARE just a normal penis alright?\" He says rather sternly");
                       }
               
               oper(system, "./obey", "Relax and slide back into your sheath obediantly", "./disobey", "Twist around pointing at him as if glareing");
          
             }
  
  
  
  
           }
  
           alt = "";
  
  
  
           //knower("cocked", true);
  
         }
  
  
  
  
         }, //function close
            "fullcockplugged": function (character, system, action) {
              transer();
                  character.sandbox.erect=false;
                clother();
              parer("host gives you a few rubs but its hardly any comfort with your mouth still wrapped around that metal tube! You can wiggle all you want but the plug prevents most of it. Still he seems to enjoy the feel of the metal rod as he rubs you through the sheath. <p>q1Geeze that is weird feeling that thing in there. Kind of nice though in a way too. I really want to see just how long you can keep it in! If it doesn't fall out I might just leave it there for a while!q1 host says causing you a bit of worry just how well he is taking to it. <p>q1I have to get to dayjob! You just stay quiet and enjoy your plugq1 He says teasingly");
              
              
                   character.sandbox.ttcarryover = "Helplessly throb as you endure with this";
     
                 spark = true;
  
  
                 system.doLink("./ttchoice");
  
              
            }, //function close
            "fullcocklocked": function (character, system, action) {
              transer();
                            character.sandbox.erect=false;
                clother();
                     parer("host gives you a few rubs but its hardly any comfort since you can't really feel them through the rings of the chastity cage! You can wiggle all you want but host doesn't feel a thing from outside his sheath. <p>q1Geeze that is weird feeling that thing in there. Kind of nice though in a way too. Keeping you locked up down there is actually way more comfortable than I had expected!q1 host says causing you a bit of worry just how well he is taking to it. <p>q1I have to get to dayjob! I am leaving the key at home... So even if I wanted to I won't be able to remove it.q1 He says teasingly");
            
      character.sandbox.ttcarryover = "Helplessly throb as you endure with this";
      
      
                 spark = true;
  
  
                 system.doLink("./ttchoice");
  
            }, //function close
         "move": function (character, system, action) {
           transer();
           /* 
            alt=(true)?"":"";
            
            system.setQuality("timeofday", character.qualities.timeofday + 1);
            */
           parer("host seems a bit too enthusiastic as he goes about his morning, first raiding your fridge for some food. Then giving you a rub though your new sheath. \"Hehe, sorry I am just really thankfull we don't have to go see a professional about this. And I get to wear pants and even sleep in my own bed tonight!\" He says completely neglecting the fact that you have been further transformed into his cock.");
           alt = ((character.sandbox.limits.cantalk) ? "Gumble at him and say this is hardly better" : "Start to complain but remember your mouth is just a cocks piss slit now");
           oper(system, "./discuss", alt);
           character.sandbox.headingholder = "";
           alt = "";
         }, //function close
         "thoughts": function (character, system, action) {
           transer();
           /* 
            alt=(true)?"":"";
            
            system.setQuality("timeofday", character.qualities.timeofday + 1);
            */
           if (character.sandbox.host.host == "keagen") {
  
             alt2 = "\"That felt so strange... don't do that too often... Wait HOW did you do that? I know the runes pick up on thoughts during alpha waves but if you can send a thought to me, then maybe they can pick up on other thoughts as well!\" He says excitedly.";
  
           }
           parer("They tingle stronger the longer you think about them, however you don't really notice anything until you think the words *stupid runes*<p>\"HEY I heard that! Err sort of it was like a weird... thought in the back of my mind.\" host says shocked! At the same time you feel a tiny warmth drain out of the runes as you do so. It's like learning to cross your eyes for the first time, you know how to do it again even if you are not sure HOW you did it. It did seem to drain the power of the runes a bit however<p>q1Glad that communication won't be too much of a problem, still it was weird having your thoughts pop up in my head like that. Try to keep it to a minimum...q1 He warns");
           alt2 = "";
           parer("<p  class='transient' style='color:rgb(255, 14, 100);'>LEARNED THOUGHT TRANSFER!: (TT)  You can spend essense to let host hear you but the cost may change depending on your harmony with him! ");
           parer("<p  class='transient' style='color:rgb(255, 14, 100);'>LEARNED DREAMSTATE CONTROL!  You can spend essense to attempt to take control of the transformation at night!");
           character.sandbox.control = true;
           character.sandbox.abilities.think = true;
  
           system.animateQuality("essence", character.qualities.essence - 1);
           oper(system, "./discuss", "Continue the day armed with your new understanding of the runes");
  
  
         }, //function close
         "seekhelp": function (character, system, action) {
           /* 
            alt=(true)?"":"";
            
            system.setQuality("timeofday", character.qualities.timeofday + 1);
            */
           // TF kept host indoors too long. Will not apply to bret
           //Might be day after TF or 2 days in a row of calling out from work.
  
           transer();
  
  
           parer("host sighs as he gets some breakfast, sitting in the chair with you leaning on the table is rather awkward. You end up hanging out under it mostly supported by his sheath." + character.host.seekhelp);
           parer("You knew this was coming for a while with him commenting on it more and more often. You already agreed to be his cock forever, it is what you are... So nither one of you would want them to reverse this... but they might be able to get a letter from the doctor something? Still this does mean someone SEEING you like this!");
  
           //system.setQuality("essence", character.qualities.essence + 20);
           if (character.qualities.harmony > 50) {
             oper(system, "eventhospital/enter", "Reluctantly accept it");
  
           } else {
             oper(system, "eventhospital/enter", "Reluctantly agree");
  
           }
  
  
  
  
         }, //function close
         "inside": function (character, system, action) {
           transer();
              character.sandbox.erect=true;
              clother();
           //could potentially use this as a way to add weekend stuff
  
  
           /*
            alt=(true)?"":"";
            
            system.setQuality("timeofday", character.qualities.timeofday + 1);
            */
           // TF kept host indoors too long. Will not apply to bret
           //Might be day after TF or 2 days in a row of calling out from work.
           if (character.sandbox.perma) {
  
  
             //talks to perma partial cock, can't go out but still  
  
  
             if (character.qualities.harmony > 50) {
  
               parer("host stops for a moment and gives you a rub as if deep in thought. q1This is getting to much to handle. Wonder if I could see someone about making my cock just a bit smaller... It's my cock after all.... hummmq1 You hear him mutter to himself! He seems to really be considering having someone SEE you!? You did agree to be his cock forever... Eventually he would have to go to the doctor for a check up... so this was sort of inevitable.");
  
             } else {
  
               parer("host stops for a moment and gives you a rub as if deep in thought. q1You know I think it might be time we go see someone about this. Now that you have fully accepted that you are my cock... I think it would be safe enough to get you checked out. As long as you promise to behaveq1 he says, really be considering having someone SEE you! You did agree to be his cock forever... Eventually he would have to go to the doctor for a check up... so this was sort of inevitable");
  
  
             }
  
  
  
  
  
  
  
  
  
  
           } else {
             alt = ((character.sandbox.limits.cantalk) ? ("You ask him whats wrong, ") : ("You give him a comforting rub in worry, "));
             if (character.sandbox.enjoyit) {
               parer("host seems a bit grumpy as he wanders around getting something to eat. #alt but he just sighs in response. <p>Finally he opens up a bit, \"Look, I know you are enjoying this but you have to admit it is a bit embarrassing! The last thing I want to do is let others find out\"He notices the way you are looking at him and he slumps a bit q1I can't believe I am complaining about how big my cock is! I don't think either of us want to explain how this happened! So either we need to fix this or you need to embrace being a slightly smaller cock!\" He says actually making a good point.");
  
             } else {
               parer("host seems a bit grumpy as he wanders around getting something to eat. #alt but he just sighs in response. <p>Finally he opens up a bit, \"Look, if this keeps up we will have to ask for help. This is embarrassing enough that the last thing I want to do is let others find out\"He notices the way you are looking at him and he slumps a bit \"Alright I know this is a bit more concerning for you but I don't think either of us want to explain how this happened!\" He says actually making a good point.");
  
             }
  
  
           }
  
  
  
  
  
  
  
  
           oper(system, "nowork", "Find a way to pass the time");
  
  
  
         }, //function close
  
         "ignoreobey": function (character, system, action) {
           transer();
            system.setQuality("harmony", character.qualities.harmony + 1);
  
           parer("You just relax as his body slides you back into the sheath you call home now. Being so obedient to him is almost exciting. Being a part of his body as it uses you however it needs. It's almost you are a part of a big team and your job is cock. His body will force you to cum or get hard whenever it is needed. He puts on his pants locking you even further away from the world as he continues getting ready");
  
  
  
           character.sandbox.ttcarryover = "Do nothing and stay still like a good cock";
           system.doLink("./ttchoice");
         }, //function close
         "ignoredisobey": function (character, system, action) {
           transer();
           /*
            alt=(true)?"":"";
            
            system.setQuality("timeofday", character.qualities.timeofday + 1);
            */
           //enjoyit ok
           parer("host just seems to grumble and rather quickly locks you away within his pants. It's difficult to rationalize a reason to be treated like a person when you only have the needs of a penis. host continues his day and gets breakfast mostly ignoring you. From the sounds of his activities you can guess he is about to head out to dayjob.");
  
  
  
           system.setQuality("harmony", character.qualities.harmony - 1);
           spark = true;
  
           character.sandbox.ttcarryover = "Stay silent and try to behave";
           system.doLink("./ttchoice");
  
  
         }, //function close
         "obey": function (character, system, action) {
           transer();
  
  
           system.setQuality("harmony", character.qualities.harmony + 1);
  if(character.sandbox.ch2){
    
           if(character.host.plantokeep){
             
              parer("host smiles and gives you a quick rub. q1There, that's a good penis. It's like you were always meant to become a part of me!q1 he says a bit too possessivly. You love being his cock but something about him loving you being is cock is... different... concerning. This is fun... but you still might want to change back some day!<p> He begins to to put his pants on, q1Long day ahead, so remember no talking to me even in thoughts while I am out. So this is your last chance to say anything on your mind for a while.q1 he says as the pants draw ominously close to covering you.");
           }else{
             
             parer("host smiles and gives you a quick rub. q1There, that's a good penis.q1 he says a bit too possessivly. You love being his cock but something about him loving you being is cock is... different... concerning. This is fun... but you still might want to change back some day!<p> He begins to to put his pants on, q1Long day ahead, so remember no talking to me even in thoughts while I am out. So this is your last chance to say anything on your mind for a while.q1 he says as the pants draw ominously close to covering you.");
             
           }
        
    
  }else{
    if(character.sandbox.perma){
      
        if (character.sandbox.enjoyit) {
  
             parer("host smiles and gives you a quick rub. q1There, that's a good penis. Already fully accepting what you are now. That didn't take longq1 he says with a chuckle. You love being his cock but it's bit concerning how easily you fell so pefectly into the role.<p> He begins to to put his pants on, \"Long day ahead, so remember no talking to me even in thoughts while I am out. So this is your last chance to say anything on your mind for a while.\" he says as the pants draw ominously close to covering you.");
  
           } else {
             
             
              parer("host smiles and gives you a quick rub. q1There, that's a good penis. Already fully accepting what you are now. That didn't take longq1 he says with a chuckle. It's so embarrassing how easily you gave in, accepting that you would be like this for the rest of your life.<p> He begins to to put his pants on, \"Long day ahead, so remember no talking to me even in thoughts while I am out. So this is your last chance to say anything on your mind for a while.\" he says as the pants draw ominously close to covering you.");
  
           }
    }else{
       if (character.sandbox.enjoyit) {
  
             parer("host smiles and gives you a quick rub. \"There, that's a good penis, maybe I will just let you stay like this for a while after we find a cure.\" he says as if trying to sound reasuring. You love being his cock but something about him loving you being is cock is... different... concerning. This is fun... but forever might be a bit too long!<p> He begins to to put his pants on, \"Long day ahead, so remember no talking to me even in thoughts while I am out. So this is your last chance to say anything on your mind for a while.\" he says as the pants draw ominously close to covering you.");
  
           } else {
             
             
             parer("host smiles and gives you a quick rub. \"There, that's a good penis, I am sure we will find a way to change you back eventually.\" he says as if trying to sound reasuring. All it really does is cause you to wonder how long he actually expects to keep you like this!<p> He begins to to put his pants on, \"Long day ahead, so remember no talking to me even in thoughts while I am out. So this is your last chance to say anything on your mind for a while.\" he says as the pants draw ominously close to covering you.");
  
           }
      
    }
        
    
  }
      
  
           character.sandbox.ttcarryover = "Do nothing and stay still like a good cock";
           system.doLink("./ttchoice");
         }, //function close
         "disobey": function (character, system, action) {
           transer();
           /*
            alt=(true)?"":"";
            
            system.setQuality("timeofday", character.qualities.timeofday + 1);
            */
           //enjoyit ok
           parer("host just seems to grumble at you and rather quickly locks you away within his pants. He didn't even let you in on his plans for the day, nor check to see if you needed anything! Though you don't really need much as you are currently, it's getting difficult to rationalize being treated like a person when you only have the needs of a penis. <p> host continues his day and gets breakfast mostly ignoring you. From the sounds of his activities you can guess he is about to head out to dayjob.");
  
  
  
           system.setQuality("harmony", character.qualities.harmony - 1);
           spark = true;
  
           character.sandbox.ttcarryover = "Stay silent and try to behave";
           system.doLink("./ttchoice");
  
  
         }, //function close
         "ttnot": function (character, system, action) {
  
           oper(system, "requestmatrix", "Make a request (menu)", "./prework", "Tell him to just go about his day as normal");
  
  
         }, //function close
         "ttchoice": function (character, system, action) {
  
           //FIBINACHI GO BRRRRRRRRRRRRRR
  //                if (character.sandbox.harmonyunlockup) {
  //                  character.sandbox.ttcarryover;
  //                }
  
  
           if (!character.sandbox.ttcost) {
  
             character.sandbox.ttcost = 1;
             system.setQuality("ttcost", character.sandbox.ttcost);
           }
  
           if (character.qualities.essence >= character.sandbox.ttcost) {
             oper(system, "./ttspend", "(TT: " + character.sandbox.ttcost + ") Make a request", "./prework", character.sandbox.ttcarryover);
             character.sandbox.ttcarryover = character.sandbox.ttcost;
           } else {
             //not enough essence to do it.
             oper(system, "./ttfailed", "(TT: " + character.sandbox.ttcost + ") Make a request", "./prework", character.sandbox.ttcarryover);
  
           }
  
           //  oper(system, "", "");
         }, //function close
         "ttspend": function (character, system, action) {
           var cost = character.sandbox.ttcarryover;
  
           system.animateQuality("essence", character.qualities.essence - character.sandbox.ttcost, {from: character.qualities.essence, to: character.qualities.essence - character.sandbox.ttcost});
  //                delay([
  //                  "You feel the energy spread through the runes as you concentrate on them.",                  
  //                  "requestmatrix"
  //                ]);
           system.doLink("requestmatrix");
         }, //function close
         "ttfailed": function (character, system, action) {
           system.setQuality("harmony", character.qualities.harmony - 4);
           system.animateQuality("essence", character.qualities.essence / 2, {from: character.qualities.essence, to: character.qualities.essence / 2});
           delay([
             "You focus on the runes to try an talk to host, but it quickly goes wrong! The runes heat up but then go cold sending a shiver through your core.",
             "No matter how hard you try you just can't pull enough energy from the runes to communicate! Even worse you feel some of the energy lost from the attempt!"
              ,
             "preworksender/prework"
           ]);
  
         }, //function close
         "prework": function (character, system, action) {
           transer();
           system.setQuality("harmony", character.qualities.harmony + 3);
           //alt=(true)?"":"";
  //                parer("host finishes getting ready for dayjob and makes his way out the door. The trip there is uneventfull and the swaying back and forth as he walks just makes it harder to relax. host expects you to stay unmoving and quiet for hours with nothing to do, easy for a normal cock to do. However a normal cock doesn't get bored!");
  //
  //
  //                oper(system, "work/" + character.sandbox.host.sender, "Get comfortable and pretend to be an ordinary penis for now");
  //                
  //                system.doLink("");
           //system.setQuality("timeofday", character.qualities.timeofday + 1);
           system.doLink("preworksender/prework");
  
         }, //function close
         "prenowork": function (character, system, action) {
           /* transer();
            alt=(true)?"":"";
            parer("");
            oper(system,"");
            system.setQuality("timeofday", character.qualities.timeofday + 1);
            */
  
         }, //function close
         "R1": function (character, system, action) {
           /* transer();
            alt=(true)?"":"";
            parer("");
            oper(system,"");
            system.setQuality("timeofday", character.qualities.timeofday + 1);
            */
  
         } //function close
       }//actions close
     }//options close
    )
  };
  