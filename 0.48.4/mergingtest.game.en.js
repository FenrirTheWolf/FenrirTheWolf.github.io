/* global undum, npcloc, newvol */
// ---------------------------------------------------------------------------
// This file defines the game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init. MANY more have been added
// ---------------------------------------------------------------------------


/*
 TODO





 */

 hosts = {};
 fastmode = false;
 
 spark = false;
 
 alt = "";
 alt2 = "";
 
 
 
 
 ImageArray = ["media/img/Green.png", "media/img/Red.png", "media/img/Purple.png", "media/img/Blue.png"];
 
 function getRandomImage() {
   var num = Math.floor(Math.random() * 4);
   var img = ImageArray[num];
 
 }
 
 
 getRandomImage();
 var globalaccesscharacter;
 
 
 /* A unique id for your game. This is never displayed. I use a UUID,
  * but you can use anything that is guaranteed unique (a URL you own,
  * or a variation on your email address, for example). */
 undum.game.id = "mergetest";
 
 /* A string indicating what version of the game this is. Versions are
  * used to control saved-games. If you change the content of a game,
  * the saved games are unlikely to work. Changing this version number
  * prevents Undum from trying to load the saved-game and crashing. */
 undum.game.version = "0.43";
 var patchversion = ".3";
 //document.getElementById("versionnum").innerHTML ="v"+undum.game.version+patchversion;
 
 document.getElementById("versionnum").innerHTML = "0.48" + patchversion;
 
 if (hasLocalStorage()) {
   if (localStorage[undum.game.id] != undum.game.version) {
 
     localStorage[undum.game.id] = undum.game.version;
 
     var arr = []; // Array to hold the keys
 // Iterate over localStorage and insert the keys that meet the condition into arr
     for (var i = 0; i < localStorage.length; i++) {
       if (localStorage.key(i).substring(0, 18) == 'undum_mergetest') {
         arr.push(localStorage.key(i));
       }
     }
 
 // Iterate over arr and remove the items by key
     for (var i = 0; i < arr.length; i++) {
       localStorage.removeItem(arr[i]);
     }
 
 
   }
 }
 //document.getElementById("versionnum").innerHTML ="v"+undum.game.version;
 /*
  undum.game.beforeAction = function (character, system, situation, action) {
  system.write("");
  };
  */
 /* The situations that the game can be in. Each has a unique ID. */
 
 //<img src='media/img/giftest.gif' class='float_right'>
 undum.game.situations = {
 
   /////////////////////////////////////////////////////////////////////
   //		 DAILY LOOP            //
   /////////////////////////////////////////////////////////////////////
 
   /*
    delay([0,
    "OK this is a test",
    "Also a test",
    "./enter"
    ]);
    
    
    Conversion rate: 
    Smaller= 1-1 (20 essence= 1 full tier jump)
    larger= 2-1 (40 essence= 1 full tier jump)
    Extras= (5 essence to remove, 10 to return)
    
    COCK
    20%= minor shrinking, no legs, attached to groin 
    
    40% = surrounded by sheath, Urethral bulge. Can pull into sheath part way, Looks like a hyper fur. Can hide in public.
    
    60% = Far smaller but larger than a cock, can fit in pants.
    
    80% = cock sized, no bones, Difficulty moving when hard.
    
    100% = Full conversation, can still move around slightly when soft.
    
    no arms= extra 10%
    
    Cock shaped head=extra 5%
    
    Pick your percentage.... Also did I miss any fun configurations?
    */
 
 //CTF PERMANEWT!!!! What happens?
 
   //harmony and obediance decides
 //////////////////////////////////////////////////////////
 //                            
 //PART OF BODY!                    Decided to make you a part of body
 //(doesn't talk to you)            (talks to you often that you are his cock.)
 //bodypart                         possessive (in conflict, feel like cock but think like person
 //
 //
 //                                  (middle)
 //<<<<harmony        (trying to help you turn back)
 //    How you feel about yourself
 //
 //
 //
 //pet                                                   friend still might look for a cure
 //(Compliments you for being a good cock)               (Talks to you often treats you like a person.)
 //PET, very loving                                  friend penis!
 //////////////////////////////////////////////////////////
 //            dignity
 //            How you view yourself
 //How much of a cock you are. Not physically but mentally
   //how much the host thinks you are enjoying
 // during day have trigger for punishment resets every day
 
 
 
   /*
    
    Body part: High harmony/no dignity
    host ignores you
    I am just cock. Takes no actions. Tries to be a good cock.
    Not asking for things
    Being a cock, doing cock things
    
    tsundere/possesion: High dignity/High harmony
    Host is possessive over you, All mine. you are just my cock now. likes to humiliate you. 
    
    Still don't ask for things
    Might resist cocklike actions or just feel embarassed by them 
    
    Pet cock: LOW harmony/ Low dignity
    Treats you like a loving pet. Loves you, You are a goooood cock!
    You do what host's body demands. But you are an individual, have your own wants and needs. Gets host horny
    Ask for things<<<<<<<<<
    Enjoys and does cock like actions
    
    
    friend penis: Low harmony/ High dignity
    Treats you like a cock that is also a friend. A conjoined twin almost. 
    You have your own wants and desires and are embaressed by cock stuff still
    Askign for things
    embaressed by cock like actions
    
    
    
    
    
    harmony: about individuality 
    pets are individuals. They have their own wants and needs. 
    Low harmony is pet. 
    
    
    
    How does harmony lower?
    My thinking: 
    let host decide things for you raises harmony (less interaction with host)
    asking for things LOWERS harmony    (Trying to get host to do things.)
    
    
    */
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //max obediance and max harmony 
 //End game idea.... If ring off at steathed route.... BUT plan on expanding to ANY FULL CTF  
 //possibility to enter stealth version from PART OF BODY status
 //
 //
 //1/10 chance of advancing 1 year with each loop.
 //
 //delay mechanic with longer delays, Multiple things that could be said in it.
 //
 //      blurry dreamlike description of time passing unique to each host.
 //
 //
 //
 //Add a new mornging option "try to figure out how long you were out"
 //Add a new option of just vibe with being a cock (boosting time skip chance)
 //
 //
 
 
 
 
 // Selection of decent epiloge scenes to go with it.
 // 
 // 2 time skips Are safe
 // 
 // 3rd time skip is epiloge territory each character has one.
 //      keagen graduates
 //      mark becomes underwear model
 //      bret settles down with a cutie
 // 
 // 
 // 
 //  (possible chance of the explosion event) People start to go missing
 // 
 // 
 
 
 
 //Mention worrying you will fade into it again and lose yourself to being a cock. 
 //Maybe ad a struggle mechanic.
 
   nowork: new undum.SimpleSituation(
    "", {
 
      // A few ideas for options here
      // give choice to player, sleep? through day, mischevious horny, 
      // 
      // read book for runes
      
      
      //force masturbation scene 
      
      
      // 
      //heading:"Inside a sheath"
      enter: function (character, system, action) {
        
        
        if(character.sandbox.ringgone){
          
          if(character.sandbox.ignore){
              parer("You and host mostly just spend the day awkwardly doing normal ish tasks. Eating lunch, watching tv.... With your size it makes moving around kind of exhausting for host. q1I am really going to need to call a professional! Can't even walk around outside without worry of flashing somone. Eh.... I will think of something. Not like there is any kind of choice in the matter anymore!q1 He says.");
            
          }else{
            parer("You and host mostly just spend the day awkwardly doing normal ish tasks. Eating lunch, watching tv, avoiding conversation about the whole cock situation. With your size it makes moving around kind of exhausting for host. q1We need to call a professional! I can't live forever with someone attached to my groin I have to keep it a secret! I mean if you were a bit smaller maybe we could sneak you out, but that isn't an option! Best choice we might have is to get a doctors not or something!q1 He says.");
          }
            
          
          
        }else{
        if (character.sandbox.enjoyit) {
          parer("You and host mostly just spend the day awkwardly doing normal ish tasks. Eating lunch, watching tv, avoiding conversation about the whole cock situation. With your size it makes moving around kind of exhausting for host. q1I know you love being my cock but can't you be a bit more cocklike? If you love it so much how about being a bit smaller so we can at least leave the house?.q1 He asks giving you a rub");
        } else if (character.sandbox.control) {
 
          parer("You and host mostly just spend the day awkwardly doing normal ish tasks. Eating lunch, watching tv, avoiding conversation about the whole cock situation. With your size it makes moving around kind of exhausting for host. q1Either you need to get smaller or we need to figure out how to fix this fast. Between the weird dreams and the runes... there must be something we can do.q1 He says");
 
        } else {
          
          
          parer("You and host mostly just spend the day awkwardly doing normal ish tasks. Eating lunch, watching tv, avoiding conversation about the whole cock situation. With your size it makes moving around kind of exhausting for host. q1Either you need to get smaller or we need to call a professional! I can't live forever with someone attached to my groin like this! I mean if you were a bit smaller maybe we could sneak you out. Maybe we just need time for it to transform you fully? or.. back! I mean that is an option too!q1 He says.");
 
 
 
        }
      }
        //if (character.qualities.tfstatus==13||(character.sandbox.host=="bret"&&character.qualities.tfstatus==9)){
 
 
 
        oper(system, "evening/enter", "Continue on into the evening");
      }, //function/enter close 
      actions: {
        "enter": function (character, system, action) {
          transer();
          //system.write("<p></p>");
 
 
          oper(system, "", "");
        }, //function close
        "R2": function (character, system, action) {
          transer();
          system.write("<p></p>");
 
          oper();
        } //function close
      }//actions close
    }//options close
   ),
 
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   /////////////////// REQUEST MATRIX///////////////////////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////////////////////d////
   //,"./research","(TT)Ask him to do more reasearch on the artifact!"
   //IDEAS FOR THE MATRIX
   //request day to go by faster
   //ask for him to think about keeping you as his cock
   //ask him to put the ring back on before he sleeps (after ring event)
   //ask 
   //
   requestmatrix: new undum.SimpleSituation(
    //heading:"Inside a sheath"
    "<h1><p class=transient>Choose a location</p><h1>",
    {
      displayOrder: 4,
      choices: "#choice",
      enter: function (character, system, from) {
 
 //              if(character.sandbox.perma){
 //                
 //                system.setQuality("dignitylost", character.qualities.dignitylost-4 );
 //                
 //              }
        system.setQuality("harmony", character.qualities.harmony - 3);
        if (character.qualities.day == 1) {
          parer("<h1><p class=transient>Choose a Request</p><h1>");
 
        }
      }//exit close
    }//options close
   ),
   learnmore: new undum.SimpleSituation(
    "",
    {
      heading: "Ask to spend more time researching the runes",
      tags: ["choice"],
      canView:
       function (character, system, host) {
         return character.sandbox.hasbook && !character.sandbox.bookwork && !character.sandbox.perma;
       },
      displayOrder: 1,
      enter:
       function (character, system, from) {
 
         character.sandbox.bookwork = true;
 //                      if(character.sandbox.ringlost){
 //                           parer("You mention to host that you and he should really spend more time working on that book that he found! It could have all the answers to fixing this entire situation! Not to mention it could help in translating some of the artifact as well! Or explain the runes along your sides... they have to mean something. q1Yea... the sooner we have can figure this stuff out the better, but not right now. I will try to get to it later today.q1");
 //                        
 //                      }else if(character.sandbox.ringgone){
 //                           parer("You mention to host that you and he should really spend more time working on that book that he found! It could have all the answers to fixing this entire situation! Not to mention it could help in translating some of the artifact as well! Or explain the runes along your sides... they have to mean something. q1Yea... the sooner we have can figure this stuff out the better, but not right now. I will try to get to it later today.q1");
 //                        
 //                      }else{
 //                           
 //                        
 //                      }
 
         //REWRITE!!!!
         parer("You mention to host that you and he should really spend more time working on that book that he found! It could have all the answers to fixing this entire situation! Not to mention it could help in translating some of the artifact as well! Or explain the runes along your sides... they have to mean something. q1Yea... the sooner we have can figure this stuff out the better, but not right now. I will try to get to it later today.q1");
 
 
         oper(system, "preworksender/prework", "Let him continue getting ready");
       }
    }
   ),
     unlockcageplz: new undum.SimpleSituation(
    "",
    {
      heading: "Beg them to take the cage off",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         return character.sandbox.permalock;
       },
      enter:
       function (character, system, from) {
 
         parer("It's not fair to have to live the life of a penis stuck in a chastity cage! There isn't a meaner fate a cock could endure than being trapped like this. It's humiliating as well as extremely frusterating! There might be a slight bit of enjoyment to how it feels, but knowing you could be locked inside it for DAYS if not longer is just unimaginable! You desperately beg him to take the cage off, trying not to annoy him to much in the process!");
         parer("host just shakes his head as you beg. q1I put you in there for a reason, now shoosh before I decide to throw away the key!q1 He threatens. Still he knows you want out now... Just in case he thought you liked it in there.");
               character.sandbox.wantoutofcage=true;
 
         oper(system, "preworksender/prework", "Let him continue getting ready");
       },
      actions: {
        "answer": function (character, system, action) {
          transer();
          //system.setQuality("timeofday", character.qualities.timeofday + 1);
          //time is NOW AFTERNOON
          // all three here. head sticking out sheath OR bret carrying you in harness
          parer("");
 
          oper(system, "");
        } //function close
      }//actions close
    }
   ),
     removeplugplz: new undum.SimpleSituation(
    "",
    {
      heading: "Beg them to take the plug out",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         return character.sandbox.permaplugged;
       },
      enter:
       function (character, system, from) {
 
         parer("Just because your throat is plugged up doesn't mean you can't still use that 'thought transfer' thing! It might just be a slightly odd sensation to him, but to you it's like you are constantly deepthroating a metal horse! Your urethra of a throat feels literally stretched around it every second. Even more embarrassing is how you can't stop yourself from suckling on it sort of on instinct. You don't really have a good reason for why he should take it out other than your own discomfort. Begging and pleading is your only hope!");
         parer("He thinks about it for a bit it a few moments. q1It's fine for now, I am sure you can handle it for a few more hours! Besides I am curious to see if it will fall out or if it really is stuck in there!q1 He says with a rub, mostly to feel the plug. At least he knows you want it out now.");
               character.sandbox.wantplugout=true;
         oper(system, "preworksender/prework", "Let him continue getting ready");
       },
      actions: {
        "answer": function (character, system, action) {
          transer();
          //system.setQuality("timeofday", character.qualities.timeofday + 1);
          //time is NOW AFTERNOON
          // all three here. head sticking out sheath OR bret carrying you in harness
          parer("");
 
          oper(system, "");
        } //function close
      }//actions close
    }
   ),
     waterless: new undum.SimpleSituation(
    "",
    {
      heading: "Ask him to drink less water, you don't want to taste his piss so often!",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         return character.sandbox.reqwater;
       },
      enter:
       function (character, system, from) {
         character.sandbox.reqwater = false;
         parer("You complain about the frequency of him using to piss with! Its nearly clear anyway and not like drinking less will hurt him at all... It hardly gets to be noon before he is already pointing you back into a toilet! ");
         parer("He thinks about it for a bit it a few moments. " + character.host.lesswater);
 
         oper(system, "preworksender/prework", "Let him continue getting ready");
       },
      actions: {
        "answer": function (character, system, action) {
          transer();
          //system.setQuality("timeofday", character.qualities.timeofday + 1);
          //time is NOW AFTERNOON
          // all three here. head sticking out sheath OR bret carrying you in harness
          parer("");
 
          oper(system, "");
        } //function close
      }//actions close
    }
   ),
 
   watermore: new undum.SimpleSituation(
    "",
    {
      heading: "Ask him to drink more water, for his own health of course.",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         return (character.sandbox.ws && !character.sandbox.reqwater);
       },
      enter:
       function (character, system, from) {
         character.sandbox.reqwater = true;
         parer("You tell him that he really should drink more water, if anyone would know it would be you! Plus it might dilute it a bit more. It just is the healthy thing to do! Not to mention he might let you out of his pants more often, even if it is to piss.");
         parer("He thinks about it for a bit it a few moments. " + character.host.waterreq);
         oper(system, "preworksender/prework", "Let him continue getting ready");
       }
    }
   ),
   pissadmit: new undum.SimpleSituation(
    "",
    {
      heading: "Ask him about your addiction to his piss",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         return (character.sandbox.ws && character.sandbox.pissaddiction>10);
       },
      enter:
       function (character, system, from) {
        
         parer("You mention how you have started to feel strange every time he pisses recently. Almost like each time you have started to like it more and more. When he goes for long periods without using you the need for his piss just starts to get more urgent. Hesitantly you admit you might have developed an addiction to it! It just tastes and feels so good surging through you, it's almost all you can think about every day.");
         parer("He thinks about it for a bit it a few moments. " + character.host.pissaddict);
             oper(system, "preworksender/prework", "Let him continue getting ready");
       }
    }
   ),
   reqtoy: new undum.SimpleSituation(
    "",
    {
      heading: "Ask him to visit the Adult store",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         return (!character.sandbox.reqtoy);
       },
      enter:
       function (character, system, from) {
         character.sandbox.reqtoy = true;
         if (character.sandbox.reqtoynum > 2) {
           parer("You tell him that as long as you are a cock, might as well experience some of the odder aspects that one could do. You really just want him to buy even more sex toys. He already got you some but you need more! Just masutrbating is fun but toys make it special and kinky");
 
         } else {
           parer("You tell him that as long as you are a cock, might as well experience some of the odder aspects that one could do. Sex toys.... It might be fun at least to try a few. You try to tell him without sounding too much like you are begging for toys.");
 
         }
         if (character.sandbox.ignore) {
           parer("You can't really tell if he is listening to you or not. Halfway through asking he grabs you and gives a strong rub. Each time you try to say something he just rubs you harder eventually you stop trying. At least you think you got the point across. q1That's better, cocks don't ask for things. They stay quiet in their sheath. Remember you agreed to this.....q1 He says.");
 
         } else {
           parer("He thinks about it for a bit it a few moments. " + character.host.toyreq);
 
         }
 
 
         oper(system, "preworksender/prework", "Let him continue getting ready");
       }
    }
   ),
   reqtoymore: new undum.SimpleSituation(
    "",
    {
      heading: "Ask him to use sex toys more often",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         return (!character.sandbox.reqtoymore);
       },
      enter:
       function (character, system, from) {
         character.sandbox.reqtoymore = true;
         parer("Without sounding too desperate or horny, you ask him to maybe use some toys more often at night. Experimenting can be fun! Plus there are some you would really REALLY like to try!");
          
         if (character.sandbox.ignore) {
           parer("You can't really tell if he is listening to you or not. Halfway through asking he grabs you and gives a strong rub. Each time you try to say something he just rubs you harder eventually you stop trying. At least you think you got the point across. q1That's better, cocks don't ask for things. They stay quiet in their sheath.q1 He says.");
 
         } else {
          parer("q1Toys huh? I suppose that might be funq1 He says thinking about it. He really doesn't say much else just contemplating the idea of what to use on you.");
 
         }
 
 
         oper(system, "preworksender/prework", "Let him continue getting ready");
       }
    }
   ),
 
   playmore: new undum.SimpleSituation(
    "",
    {
      heading: "Ask for him to let you out of his pants more often.",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         return (!character.sandbox.outmore);
       },
      enter:
       function (character, system, from) {
 
         if (character.sandbox.perma) {
 
           if (3 <= (rnd(10))) {
             parer("You ask him to let you spend a bit more time out of his pants if possible. At home... or maybe even out in public some? " + (character.host["play" + character.sandbox.ctfrolemod]) + ". You have a feeling he may have listened though.");
             character.sandbox.outmore = true;
           } else {
             parer("You ask him to let you spend a bit more time out of his pants if possible. At home... or maybe even out in public some? " + (character.host["play" + character.sandbox.ctfrolemod]));
 
 
           }
         } else {
           if (3 <= (rnd(10))) {
             parer("You ask him to let you spend a bit more time out of his pants if possible. At home... or maybe even out in public some? " + character.host.playyes);
             character.sandbox.outmore = true;
           } else {
             parer("You ask him to let you spend a bit more time out of his pants if possible. At home... or maybe even out in public some? " + character.host.playno);
 
 
           }
 
         }
 
 
 
 
 
 
 
         oper(system, "preworksender/prework", "Let him continue getting ready");
       }
    }
   ),
   destroyringplz: new undum.SimpleSituation(
    "",
    {
      heading: "Ask him to destroy the ring",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         var result=false;
                             if(character.sandbox.perma){
         result=true;
         
       }
       if( (character.sandbox.ringlost)||
           (character.sandbox.ringgone)||
           (character.sandbox.ignore)||
           (character.sandbox.sellringplz)||
           (character.sandbox.ringsold)||
                   character.sandbox.destroyringplz){
         
                result=false;
         
       }
 
         return (result&&false);
       },
      enter:
       function (character, system, from) {
 
       parer("You know this is what you want now. Being like this, feeling like this. Everything you have ever wanted and the only thing that can take it away from you is that ring. There is a sort of symbolic aspect to it as well, a dedication you want to extend to host. Hesitantly you tell him you don't want the ring anymore, in fact you want him to destroy it. You can feel yourself start to get hard even as you finish asking him that....");
       if(character.sandbox.ch2){
         
              parer(character.sandbox.host.destroyringplz);
       }
  
  
         oper(system, "preworksender/prework", "Let him continue getting ready");
       },
      actions: {
        "": function (character, system, action) {
          transer();
          parer("");
          oper(system, "", "");
        } //function close
      }}
   ),
   sellringplz: new undum.SimpleSituation(
    "",
    {
      heading: "Tell him it's ok to sell the ring",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
               var result=false;
                     if(character.sandbox.perma){
         result=true;
         
       }
       if( (character.sandbox.ringlost)||
           (character.sandbox.ringgone)||
           (character.sandbox.ignore)||
           (character.sandbox.sellringplz)||
           (character.sandbox.ringsold)){
                result=false;
         
       }
            // result=reqcheck(character, system, host, "sellringplz");
         return result; // 
       },
      enter:
       function (character, system, from) {
 
 
         parer("You tell host that you wouldn't mind him selling the ring. You certainly don't need it anymore... Honestly it is almost a weird exciting idea to have him sell the ring. Another way you can give in and prove to yourself and host you never want to be anything but his cock for the rest of your life! host just laughs at that and gives you a comforting rub. " + character.host.sellring);
 
 
         character.sandbox.sellringplz = true;
         oper(system, "preworksender/prework", "Let him continue getting ready");
       },
      actions: {
        "": function (character, system, action) {
          transer();
          parer("");
          oper(system, "", "");
        } //function close
      }}
   ),
     buyringplz: new undum.SimpleSituation(
    "",
    {
      heading: "Beg him to go back and get the ring!",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         return (character.sandbox.ringatpawn&&!character.sandbox.perma&&!character.sandbox.buyringplz);// 
       },
      enter:
       function (character, system, from) {
 
 
         parer("You only mention it to him, kind of desperately... You end up just begging in the end for him to go back and get the ring! "+character.host.ringplzbuy);
 
 
         character.sandbox.buyringplz = true;
         oper(system, "preworksender/prework", "Let him continue getting ready");
       },
      actions: {
        "": function (character, system, action) {
          transer();
          parer("");
          oper(system, "", "");
        } //function close
      }}
   ),
   getstuffplz: new undum.SimpleSituation(
    "",
    {
      heading: "Ask him to get your stuff from your house",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         return (false);
       },
      enter:
       function (character, system, from) {
 
         if (character.sandbox.enjoyit) {
           parer("You desperately beg him to wear the ring more often, you love being his cock but you need it... for... stuff!! He snickers and gives you a pat without saying anything.");
 
         } else {
 
           parer("You desperately beg him to wear the ring more often, you don't want to be stuck as a cock forever! He snickers and gives you a pat without saying anything.");
         }
 
 
         character.sandbox.xeyischeating++;
         oper(system, "preworksender/prework", "Let him continue getting ready");
       },
      actions: {
        "": function (character, system, action) {
          transer();
          parer("");
          oper(system, "", "");
        } //function close
      }}
   ),
   moreroomplz: new undum.SimpleSituation(
    "",
    {
      heading: "Ask him to wear the ring more often.",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         return (false);
       },
      enter:
       function (character, system, from) {
 
         if (character.sandbox.enjoyit) {
           parer("You desperately beg him to wear the ring more often, you love being his cock but you need it... for... stuff!! He snickers and gives you a pat without saying anything.");
 
         } else {
 
           parer("You desperately beg him to wear the ring more often, you don't want to be stuck as a cock forever! He snickers and gives you a pat without saying anything.");
         }
 
 
         character.sandbox.xeyischeating++;
         oper(system, "preworksender/prework", "Let him continue getting ready");
       },
      actions: {
        "": function (character, system, action) {
          transer();
          parer("");
          oper(system, "", "");
        } //function close
      }}
   ),
   sexmoreplz: new undum.SimpleSituation(
    "",
    {
      heading: "Ask him use you more!",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         var passer=false;
         if(character.sandbox.sextalk&&character.sandbox.partialsextalk)
         passer=false;
         return (passer);
       },
      enter:
       function (character, system, from) {
 
           parer("You desperately beg him to wear the ring more often, you love being his cock but you need it... for... stuff!! He snickers and gives you a pat without saying anything.");
 
 
           parer("You desperately beg him to wear the ring more often, you don't want to be stuck as a cock forever! He snickers and gives you a pat without saying anything.");
 
 
 
         character.sandbox.xeyischeating++;
         oper(system, "preworksender/prework", "Let him continue getting ready");
       },
      actions: {
        "": function (character, system, action) {
          transer();
          parer("");
          oper(system, "", "");
        } //function close
      }}
   ),
   fullcockplz: new undum.SimpleSituation(
    "", {
      //NO CHAPTER 2!!!!
      //Fullcock and have asked to 
      heading: "Ask if it would be ok to stay as his cock for a while even if you find a way to change back",
      tags: ["choice"],
      displayOrder: 3,
      canView:
             function (character, system, host) {
               var result = false;
               if (character.sandbox.cockmeplz > 0 &&
                   character.qualities.ctf == 100){
                 result = true;
               }
               
               if (
                   character.sandbox.cockmeplz == 3 ||
                   character.sandbox.perma){
                 result = false;
               }
               
               if (character.sandbox.ch2) {
                 if(character.sandbox.host.plantokeep){
                   
                    result = false;
                 }
                   
                   
                 
                
               }
               
               //(character.sandbox.cockmeplz > 0 && character.sandbox.cockmeplz != 3 && character.qualities.ctf == 100 && !character.sandbox.perma&&((character.sandbox.ch2)?(!character.sandbox.host.plantokeep):(true)));
         return result;
       },
      enter:
       function (character, system, from) {
         character.sandbox.cockreq = true;
         character.sandbox.enjoyit = true;
         switch (character.sandbox.cockmeplz) {
           case 0:
             parer("The idea of being his cock is actually starting to sound kind of fun. And it isn't like you can't change back later... probably. You let host know that you don't mind spending some time as his cock. It's sort of like a vacation and he gets a larger cock out of it.... It doesn't have to be forever.");
 
             oper(system, "./plzcockme", "Try to convince him");
             break;
           case 1:
             parer("You continue trying to convince him of the idea. You certainly haven't been doing a bad job of it so far, and it has even been rather fun! Still though it might be a hard sell considering what you are asking for. You don't want this to end the moment you find a cure, what harm could that possibly be?");
 
             oper(system, "./plzcockme", "Try to convince him");
             break;
           case 2:
             parer("It isn't that big of a request. Just some simple agreement to let you stay his cock even if you find a way to change back. host still seems reluctant to say yes. You have a bit of a breakdown moment and resort to begging him.... begging him to keep you even if a cure is found!");
 
             oper(system, "./plzcockme", "Beg to stay as his cock");
             break;
           default:
         }
 
 
 
       },
      actions: {
        "plzcockme": function (character, system, action) {
          transer();
 
          switch (character.sandbox.cockmeplz) {
            case 0:
              parer("host doesn't seem convinced at all. You and he have been trying hard to figure out a way to fix this and going back now.... Its like giving into the temptation. q1I really think being a cock is starting to go to your head. If you were thinking clearly you wouldn't be saying that. This is serious stuff you don't want to risk stuck as a cock forever.q1 He says giving you a comforting rub.");
 
              oper(system, "preworksender/prework", "Maybe you just need to wear him down...");
              break;
            case 1:
 
              parer(character.host.cockplz1);
 
 
              oper(system, "preworksender/prework", "Let him continue getting ready");
              break;
            case 2:
 
              parer(character.host.cockplz2);
 
 
              oper(system, "preworksender/prework", "Let him get ready as you settle into the idea of being a good cock");
 
              character.sandbox.host.harmony[3] = 100;
 
              break;
            default:
 
              parer("error!!!! " + character.sandbox.cockmeplz);
              oper(system, "preworksender/prework", "Let him continue getting ready");
 
          }
 
 
 
 
          console.log("WHAT THE FUUUUU ");
          character.sandbox.cockmeplz++;
 
        } //function close
      }}
   ),
   cockplz: new undum.SimpleSituation(
    "",
    {
      heading: "Admit you may actually enjoy the idea of being a cock.",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         var result=false;
         if(character.sandbox.cockmeplz <= 2 &&
             character.qualities.day > 3
             ){
           result=true;
           
         }
         if(character.qualities.ctf == 100||
                   character.sandbox.perma){
           result=false;
         }
         if(character.sandbox.perma){
           
           result=false;
           
         }
            if (character.sandbox.ch2) {
                 if(character.sandbox.host.plantokeep){
                   
                    result = false;
                 }
                   
                   
                 
                
               }
         //(character.sandbox.cockmeplz <= 2 && character.qualities.day > 3 && character.qualities.ctf != 100&&((character.sandbox.ch2)?(!character.host.plantokeep):(true)))
         return result;
       },
      enter:
       function (character, system, from) {
         character.sandbox.cockreq = true;
         character.sandbox.enjoyit = true;
         switch (character.sandbox.cockmeplz) {
           case 0:
 
             parer("The idea of being his cock is actually starting to sound kind of fun. And it isn't like you can't change back later... probably. You let host know that you don't mind spending some time as his cock. It's sort of like a vacation and he gets a larger cock out of it.... It doesn't have to be forever.");
             break;
 
           case 1:
             parer("You continue trying to convince him of the idea. You certainly haven't been doing a bad job of it so far, and it has even been rather fun! Still though it might be a hard sell considering the level of commitment you are asking for. You ask him to let you try it just for a little while maybe, what harm could that possibly be?");
             break;
           case 2:
             parer("You just can't stand it anymore, you just NEED to be his cock! All this transforming back and forth is getting dizzying! You just want to spend some time in one form for a while and stay that way! You can't change back it seems so you might as well go full cock just so you can rest on one form! You practically BEG him to start thinking of you as his cock!");
             break;
           default:
         }
 
 
         oper(system, "./plzcockme", "Try to convince him");
       },
      actions: {
        "plzcockme": function (character, system, action) {
          transer();
 
          switch (character.sandbox.cockmeplz) {
            case 0:
              parer("host doesn't seem convinced at all. You and he have been trying hard to figure out a way to fix this and going back now.... Its like giving into the temptation. q1I really think being a cock is starting to go to your head. If you were thinking clearly you wouldn't be saying that. This is serious stuff you don't want to risk stuck as a cock forever.q1 He says giving you a comforting rub.");
 
              oper(system, "preworksender/prework", "Maybe you just need to wear him down...");
              break;
            case 1:
 
              parer(character.host.cockplz1);
 
 
              oper(system, "preworksender/prework", "Let him continue on, your only option left is to beg for it....");
              break;
            case 2:
 
              parer(character.host.cockplz2);
 
 
              oper(system, "preworksender/prework", "Let him get ready as you settle into the idea of being a good cock");
 
              character.sandbox.host.harmony[3] = 100;
 
              break;
            default:
 
              parer("error!!!! " + character.sandbox.cockmeplz);
              oper(system, "preworksender/prework", "Let him continue getting ready");
 
          }
 
 
 
 
          console.log("WHAT THE FUUUUU ");
          character.sandbox.cockmeplz++;
 
        } //function close
      }}
   ),
     cockplzch2: new undum.SimpleSituation(
    "",
    {
      heading: "Admit you actually enjoy being a cock.",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         var result=false;
              if(character.sandbox.ch2){
                 result=character.sandbox.host.plantokeep;
                 
               }
         if(character.sandbox.perma){
           
           result=true;
         }
         //(character.sandbox.cockmeplz <= 2 && character.qualities.day > 3 && character.qualities.ctf != 100&&((character.sandbox.ch2)?(!character.host.plantokeep):(true)))
         return result;
       },
      enter:
       function (character, system, from) {
  transer();
               var cockplzsender;
               if(character.sandbox.ch2){
                 cockplzsender=character.sandbox.host.plantokeep;
                 
               }
               if(character.sandbox.perma){
                  system.setQuality("dignitylost",character.qualities.dignitylost-5);
                 cockplzsender=true;
                 
               }
         character.sandbox.cockreq = true;
         character.sandbox.enjoyit = true;
         
         
         if(character.sandbox.perma){
  
                  switch (character.sandbox.permacockmeplz) {
           case 0:
                     character.sandbox.permacockmeplz++;
             parer("Rather than ask him anything you just let him know how nice this has been for you... Which is a good thing since you know there is no going back anymore. Even if you asked host would probably refuse, and you are not even sure you would want to change back. For the most part you just reassure host that this was the right choice for you.");
             break;
 
           case 1:
                     character.sandbox.permacockmeplz++;
             parer("Once again you tell him how much you love what you have become. Being a cock carries such a feeling of belonging and comfort. With his warm sheath constantly wrapped around you, the moist cock flesh of your body he has gifted you with. Practically rambling on you thank him for taking you and making you his. Best descison of your life!");
             break;
           case 2:
             if(character.sandbox.pissaddiction>6){
                   parer("You must sound like some sort of addict as you thank him for making you his cock! Part way though you accidentally refer to yourself in the third person, telling him how much 'cock' loves the taste of his piss!  You actually go on a while about how much you love it when he pisses, a slave to his bladder! There really is no more barrier between you and his cock, anything that was left of it is just you now. And in the same way nothing of you is left that doen't belong to him.");
             }else{
               parer("You must sound like some sort of addict as you thank him for making you his cock! Part way though you accidentally refer to yourself in the third person, telling him how much 'cock' loves the taste of his cum! There really is no more barrier between you and his cock, anything that was left of it is just you now. And in the same way nothing of you is left that doen't belong to him.");
               
             }
             
             break;
           default:
         }
           
           
                 system.doLink("./cockmeresp");
 
         }else{
      
             parer("Rather than ask him anything you just let him know how nice this has been for you... Everything about your new life has been so much easier and fulfilling ever since you became a part of him. And it isn't like you can't change back later... probably. You let host know that you are enjoying your time as his cock. It's sort of like a vacation and he gets a larger cock out of it.... Even if it isn't forever.");
  
 
           
           oper(system, "./cockmetemp", "Try to convince him this is just temporary");
         }  
 
 
         
       },
      actions: {
           "cockmetemp": function (character, system, action) {
             transer();
            
       
               
                   if(character.sandbox.host.cockplz1==""){
                parer("q1Hah! Thats what you think. I am pretty sure you are going to get sooo addicted to this that you won't ever be able to change back. Even if you did I bet you would crawl right back into my sheath in no time. Nah, you are a cock for good and you don't even know it yet!q1 he says with a laugh");
             
             }else{
              //  parer("(a bit wip)");
               
               parer(character.sandbox.host.cockplz1);
               
             }
             
             oper(system, "preworksender/prework", "Let him continue getting ready");
          
           }, //function close
        "cockmeresp": function (character, system, action) {
   
    parer("He just laughs and gives you a rub. q1You really are just a horny dick at heart hehe. Lets go before you start droolingq1 He says even though it is a bit later for that.");
       
 
  oper(system, "preworksender/prework", "Let him continue getting ready");
 
 
 
     
 
        } //function close
      }}
   ),
     cocknoperma: new undum.SimpleSituation(
    "",
    {
      heading: "Ask him about letting you change back",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         return (character.sandbox.perma);
       },
      enter:
       function (character, system, from) {
         
               system.setQuality("dignitylost",character.qualities.dignitylost-5);
         
         
         parer("You have certainly enjoyed being his cock but... you still sort of wonder about changing back. Not eactly second thoughts but some part of you just wants to ask about it. Getting his opinion on how he feels about letting you go temporarily. Honestly it is hard to imagine a future where you are not spending all your time in a sheath getting to drool cum every day.");
         if(character.host.cockno==""){
           
                 character.host.cockno="q1I think you have forgotten who's body you belong to now. Don't you think I should get a say in what MY cock gets to do? No one gets to have more control over my body than me.q1 He says.";
         }
         
         
         parer("host just laughs when you ask that. Giving you a slight rub. " + character.host.cockno);
        
         
 
         oper(system, "preworksender/prework", "Let him continue getting ready");
       }
    }
   ),
   cockno: new undum.SimpleSituation(
    "",
    {
      heading: "Tell him you are reconsidering wanting to stay his cock",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         return ((!character.sandbox.perma)&&character.sandbox.control && character.sandbox.cockplz > 0&&((character.sandbox.ch2)?(!character.sandbox.host.plantokeep):(true)));
       },
      enter:
       function (character, system, from) {
         parer("host just laughs when you ask that. Giving you a slight rub. " + character.host.cockno);
 
         if (rnd() > 3) {
           if (character.sandbox.host.harmony[3] > 20 && (character.sandbox.cockmeplz != 0)) {
 
             character.sandbox.host.harmony[3] = ((character.sandbox.host.harmony[3]) - 5);
             character.sandbox.cockmeplz--;
 
           }
  }
 
         oper(system, "preworksender/prework", "Let him continue getting ready");
       }
    }
   ),
   ringplz: new undum.SimpleSituation(
    "",
    {
      heading: "Ask him to wear the ring more often.",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         return ((character.sandbox.ringcheck && character.sandbox.runedo.stability && (!character.sandbox.ringsold)) && !character.sandbox.perma);
       },
      enter:
       function (character, system, from) {
 
         if (character.sandbox.enjoyit) {
           parer("You desperately beg him to wear the ring more often, you love being his cock but you need it... for... stuff!! He snickers and gives you a pat without saying anything.");
 
         } else {
 
           parer("You desperately beg him to wear the ring more often, you don't want to be stuck as a cock forever! He snickers and gives you a pat without saying anything.");
         }
 
 
         character.sandbox.xeyischeating++;
         oper(system, "preworksender/prework", "Let him continue getting ready");
       },
      actions: {
        "": function (character, system, action) {
          transer();
          parer("");
          oper(system, "", "");
        } //function close
      }}
   ),
   findring: new undum.SimpleSituation(
    "",
    {
      heading: "Desperetly beg him to search for the ring!",
      tags: ["choice"],
      displayOrder: 3,
      canView:
       function (character, system, host) {
         return ((character.sandbox.ringlost || character.sandbox.ringreallylost) && (character.sandbox.ringgone == false)&&!character.sandbox.ringatpawn&&!character.sandbox.perma);
 //return (!character.sandbox.ring && !character.sandbox.ringcheck && !character.sandbox.ringgone);
         //means ring is off, host doesn't do decide to wear event
       },
      enter:
       function (character, system, from) {
          character.sandbox.ringhelp = true;
         if (character.sandbox.ringreallylost) {
           character.sandbox.ringhelp = true;
           parer("You beg host to look for the ring in town. You do your best to describe exactly where he was when it happened and where you were. The best host can do is retrace his steps and look around. It's not like they can go around asking people if they have seen a weird cockring with a jewel and runes on it just laying around.");
         
           oper(system, "preworksender/prework", "Zone out a bit realizing you may be trapped as his cock forever if he can't find it!!");
         } else {
           if (character.sandbox.ringlost) {
             if (character.sandbox.ringhelp) {
 
               parer("You beg host once again to search the room, trash, yard, dryer, EVERYWHERE for the ring! He sighs after hearing this before and already didn't find it then....");
 
               character.sandbox.dayringlost += 4;
               oper(system, "./ringsearch", "Wait as he hunts for the ring");
 
             } else {
               parer("You are so thankfull you have this connection that you can actually tell him about the ring! You quickly tell him about the events during the night that the ring fell off! ");
 
               parer(character.host.lostring);
 
               oper(system, "./ringsearch", "Wait as he hunts the bedroom over for the ring");
 
             }
           } else {
             //this section is for hunting for the ring after losing it a second time.
             oper(system, "preworksender/prework", "Zone out a bit realizing you may be trapped as his cock forever if he can't find it!!");
 
 
           }//else for hunting for second time ring gets lost
         }//ring really lost end
       },
      actions: {
        "ringsearch": function (character, system, action) {
          transer();
          parer("host spends a good while searching over the room for the ring. Under stuff, in the bed, under the bed. You can tell this is taking a concerningly long time!");
          parer(character.host.lostring2);
          character.sandbox.ringhelp = true;
          oper(system, "preworksender/prework", "Zone out a bit realizing you may be trapped as his cock forever!!");
        } //function close
      }//actions close
 
    }
   ),
   findinfo: new undum.SimpleSituation(
    "",
    {
      heading: "Ask him to check the library for books on magic",
      tags: ["choice"],
      displayOrder: 2,
      canView:
       function (character, system, host) {
         return !(character.sandbox.hasbook || (character.sandbox.perma));
       },
      enter:
       function (character, system, from) {
         //character.sandbox.hasbook = true;
         parer("You ask him to spend some time searching for books at the library. There has to be something there that can help you with the artifact! Even if it was a longshot it was better than nothing.");
         parer("He seems to consider it for a few moments. q1Right right, kinda busy today with things. I will think about going tomorrow maybe... q1");
         oper(system, "./nice", "Ask him again nicely", "./demand", "Demand it!");
       },
      actions: {
        "nice": function (character, system, action) {
          transer();
          if ((character.qualities.harmony> 50) || character.sandbox.enjoyit) {
            character.sandbox.booksearch = true;
            parer("He smiles down at you, giving you another rub. You have been such a good cock for him recently, it really makes it hard for him to say no. q1Alright alright, just because you have been so good. I will make sure to spend sometime at the library next time I get a chance.q1");
            oper(system, "preworksender/prework", "Thank him as he continues getting ready.");
          } else {
            parer("He shakes his head. q1I know you want to change back, but I can't drop everything for you right now... Just try to be patient.q1 He says. You will have to keep trying till you can finally convince him, maybe you need to be more forceful. Or get on his good side");
            oper(system, "preworksender/prework", "Sigh as he continues getting ready.");
 
          }
 
 
        }, //function close
        "demand": function (character, system, action) {
          transer();
          if (rnd() > 5) {
            parer("host lets out a sigh as you pester him about the library again. He seems a bit grumpy about it starting to get ready to go again. q1Only if will get you to stop mentioning it. Remember who has the legs around here! Just because you are attached to me doesn't mean you get to make the decisions.q1");
            system.setQuality("harmony", character.qualities.harmony - 1);
            oper(system, "preworksender/prework", "Thank him as he continues getting ready.");
            character.sandbox.booksearch = true;
          } else if (character.qualities.harmony > 40) {
            parer("q1Geeze, aren't you rather pushy today. FIne fine. we will go to the library! Never thought I would be told what to do by my own cock! I mean... not like that! You know what I meant. We better find something there that can help fix this.q1 He says with a bit of frustration");
            character.sandbox.booksearch = true;
            system.setQuality("harmony", character.qualities.harmony - 2);
 
            oper(system, "preworksender/prework", "Thank him as he continues getting ready.");
 
          } else {
            parer("q1No way. I got way to much to do today, plus I think you are forgetting who has the legs around here! I may be a guy but that doesn't mean I do EVERYTHING my penis tells me to! I will get to the library eventually just not today. Now be a good cock and stay quietq1 He says in frustration.");
            system.setQuality("harmony", character.qualities.harmony - 1);
            oper(system, "preworksender/prework", "Sigh as he continues getting ready.");
          }
 
        } //function close
      }//actions close
    }
   ),
   pillsask: new undum.SimpleSituation(
    "",
    {
      heading: "Ask him about using the pills again",
      tags: ["choice"],
      displayOrder: 2,
      canView:
       function (character, system, host) {
         
   
         return (character.sandbox.usedpillsonce && character.sandbox.ctfrole == "bodypart" && character.qualities.ctf == 100);
       },
      enter:
       function (character, system, from) {
         //character.sandbox.hasbook = true;
         parer("You ask host about using the pills again, maybe even more often. It was kind of nice just relaxing not needing to think anymore. Time seemed to go by rather fast but it should be fine for a week or two... And you already look completely like their cock, they could just treat you like a normal penis for a while. You know he has already started treating you like just a part of his body....");
         parer("q1Hehe, I will think about it.... but don't blame me if I end up liking it too much to stop taking them. Heck I might even forget you are down there!q1 He says in a rare moment of actually aknowledging you. Then again if he does start taking the pills regularly it could be the last...");
         character.sandbox.pillprimer = true;
 
         oper(system, "preworksender/prework", "Go quiet again as host gets ready for the day");
       }
    }
   ),
   returner: new undum.SimpleSituation(
    "",
    {
      heading: "Ask for nothing",
      tags: ["choice"],
      displayOrder: 5,
      enter:
       function (character, system, from) {
         var asnot = " making sure you are nice and tucked away in his sheath where you belong.";
         if (character.sandbox.ignore) {
 
           parer("q1Silly cock thinks it can ask for things.q1 He says giving you a quick rub" + asnot);
         } else {
           parer("q1Well if you don't need anything be a good cock and stay quiet down there.q1 He says giving you a quick rub." + asnot);
 
 
 
 
 
         }
 
         oper(system, "preworksender/prework", "Relax inside his sheath obediently");
 
 
 
       }
    }
   ),
 
   preworksender: new undum.SimpleSituation(
    "", {
      actions: {
        "prework": function (character, system, action) {
          transer();
             character.sandbox.erect=false;
             character.sandbox.clothed=true;
             clother();
 
          /*
           
           home sick
           Maybe juryduty
           camping?
           fishing
           
           
           
           
           */
 
          switch (character.sandbox.funvalue) {
            case 1:
              //host specific
 
              oper(system, "work/" + character.sandbox.host.sender, "Get comfortable and pretend to be an ordinary penis for now");
 
              break;
 
            default:
              var underwearer="";
              
              if(character.sandbox.underwear[0]){
                underwearer="With you sealed inside his "+ character.sandbox.underwear[1]+", ";
                
              }
            if(character.sandbox.permalock){
                parer(underwearer+"host finishes getting ready for dayjob and makes his way out the door.  The trip there is uneventful but the whole time you are completely trapped swaying around like in one of those mideival hanging cages.");
              
              
            }else if(character.sandbox.permaplugged){
              
              parer(underwearer+"host finishes getting ready for dayjob and makes his way out the door.  The trip there is uneventful and the swaying back and forth as he walks just makes it harder to relax. Meanwhile you have to get through the entire day with feeling like your mouth is getting fucked by a metal horse!");
              
            }else if(character.sandbox.ch2){
                  parer(underwearer+"host finishes getting ready for dayjob and makes his way out the door.  The trip there is uneventful and the swaying back and forth as he walks just makes it harder to relax. host expects you to stay unmoving and quiet for hours with nothing to do, you are practically an expert at acting like a cock by now though.");
 
            }else{
               parer(underwearer+"host finishes getting ready for dayjob and makes his way out the door.  The trip there is uneventful and the swaying back and forth as he walks just makes it harder to relax. host expects you to stay unmoving and quiet for hours with nothing to do, easy for a normal cock to do. However a normal cock doesn't get bored!");
 }
             
 
              oper(system, "work/" + character.sandbox.host.sender, "Get comfortable and pretend to be an ordinary penis for now");
 
          }//End of RND switch
 
        }, //function close
 
        "r1": function (character, system, action) {
          transer();
          parer("");
          oper(system, "", "");
        } //function close
      }//actions close
    }//options close
   ),
   ////////////////////////////////////////////////////////////////////
   // PROTOTYPE EVENT HANDLER                                   //
   /////////////////////////////////////////////////////////////////////
 
 /// BEHOLD MORTAL, THE MEIGHTY EVENTHANDLER! 
 //NO MORTAL I DID NOT MISPELL MIGHTY! FOR THIS THE MEIGHTY EVENTHANDLER!
 // I DO NOT CARE IF IT IS JUST MORE SITUATIONS, I CAN CALL A GROUP OF SITUATIONS ANYTHING I WANT
   eventbasic: new undum.SimpleSituation(
    "", {
      //heading:"Inside a sheath"
      enter: function (character, system, from) {
 
 
      }, //enter close 
      actions: {
        "plan": function (character, system, action) {
          transer();
          //system.setQuality("timeofday", character.qualities.timeofday + 1);
          //time is NOW AFTERNOON
          // all three here. head sticking out sheath OR bret carrying you in harness
          parer("");
 
          oper(system, "start/enter","");
        } //function close
      }//actions close
    }//options close
   ),
   //MEIGHTY EVENT HANDLER CLOSE
 
 
 
 
 
   /////////////////////////////////////////////////////////////////////
   //	    TUTORIAL                                    //
   /////////////////////////////////////////////////////////////////////
 
   "character-text": new undum.SimpleSituation(
    "<h1>Character Text</h1>\
         <p>Above the list of qualities is a short piece of text, called\
         the character-text. This describes the character in some way. It\
         can be set by any action or when entering or leaving a situation.\
         It is just regular HTML content, as for all text in Undum. It can\
         also contain Undum links, so this is another place you can put\
         actions that the character can carry out over a long period of time.\
         </p>\
         <p class='transient'>Let's go back to the\
         <a href='hub'>topic list</a>. As you do, I'll change the\
         character text. Notice that it is highlighted, just the same as\
         when a quality is altered.</p>",
    {
      exit: function (character, system, to) {
        system.setCharacterText(
         "<p>We're nearing the end of the road.</p>"
         );
      }
    }
   )
 };
 $.extend(undum.game.situations, undum.game.intro, undum.game.bret, undum.game.keagen, undum.game.work, undum.game.mark, undum.game.morning,undum.game.aftermorning, undum.game.transformation, undum.game.events, undum.game.evening, undum.game.runes, undum.game.masturbate, undum.game.rareminigame, undum.game.weekend, undum.game.escape,undum.game.home, undum.game.ch2, undum.game.hospital,undum.game.sex, undum.game.ch2morning);
 
 //undum.game.newhosts.names = ["ravel"];
 for (let vxc in undum.game.newhosts.names) {
   console.log("host names vor the vxc " + vxc);
   let namey = [undum.game.newhosts.names[vxc]];
 
   //$.extend(undum.game.situations.ch2.actions,undum.game.newhosts[undum.game.newhosts.names[vxc]].actioner);
   $.extend(undum.game.situations.ch2.actions, {["host" + namey]: function (character, system, action) {
       character.sandbox.activenh = namey;
       system.doLink("./nhreturn");
       console.log("sofarsogood");
     }
   }
   );
 
 
 
 
 for(let ohdearno in undum.game.newhosts[undum.game.newhosts.names[vxc]].scenes){
   
   
   
   
   var situationholder = {
     [namey + "host"+ohdearno]: new undum.SimpleSituation(
         "", {
           actions: {
             "scene0": function (character, system, action) {
               system.doLink(character.sandbox.newhostleave);
               
               
               
             }, //function close
             "scene-2": function (character, system, action) {
   
                 character.sandbox.scenename=ohdearno;
               system.doLink(character.sandbox.host.host+"control/"+ohdearno);
             }, //function close
             "scene-1": function (character, system, action) {
               system.doLink(character.sandbox.scenerexit);
             } //function close
           }//actions close
         }//options close
     )
 
   };
   let simpscene=undum.game.newhosts[undum.game.newhosts.names[vxc]].scenes[ohdearno];
   for (let kc = 1; kc < Object.keys(simpscene).length + 1; kc++) {
     //undum.game.newhosts[undum.game.newhosts.names[vxc]].scenes.greet["scene"+kc];
     if (simpscene["scene" + kc].length == 3) {
       $.extend(situationholder[namey + "host"+ohdearno].actions, {["scene" + kc]: function (character, system, action) {
           transer();
           //system.setQuality("timeofday", character.qualities.timeofday + 1);
           //time is NOW AFTERNOON
           // all three here. head sticking out sheath OR bret carrying you in harness
           parer(simpscene["scene" + kc][0]);
 
           oper(system, "./scene" + simpscene["scene" + kc][2],
           simpscene["scene" + kc][1]);
         }});
     } else {
       $.extend(situationholder[namey + "host"+ohdearno].actions, {["scene" + kc]: function (character, system, action) {
           transer();
           //system.setQuality("timeofday", character.qualities.timeofday + 1);
           //time is NOW AFTERNOON
           // all three here. head sticking out sheath OR bret carrying you in harness
           parer(simpscene["scene" + kc][0]);
 
           oper(system, "./scene" + simpscene["scene" + kc][2],
           simpscene["scene" + kc][1], "./scene" + simpscene["scene" + kc][4],
            (simpscene["scene" + kc][3]));
         }});
 
     }
 
     ;
   }
 
 //   var dynamicName="ding";
 //var box={
 //  [dynamicName]: function() {return true; }
 //  
 //};
 //
 //box.ding();
 //   
  
   $.extend(undum.game.situations, situationholder,undum.game.newhosts[undum.game.newhosts.names[vxc]].situation);
   
 }
 
 }
 
 // ---------------------------------------------------------------------------
 /* The Id of the starting situation. */
 undum.game.start = "start";
 
 // ---------------------------------------------------------------------------
 /* Here we define all the qualities that our characters could
  * possess. We don't have to be exhaustive, but if we miss one out then
  * that quality will never show up in the character bar in the UI. */
 
 
 /////////////////////////////////////////////////////////////////////
 //	  SANDBOX INIT                             //
 /////////////////////////////////////////////////////////////////////
 
 undum.game.qualities = {
   essence: new undum.IntegerQuality(
    "Essence", {priority: "0001", group: 'stats'}
   ),
   ttcost: new undum.NonZeroIntegerQuality(
    "TT Cost:", {priority: "0002", group: 'stats'}
   ),
   currency: new undum.NumericQuality(
    "Money:", {priority: "0003", group: 'stats'}
   ),
   // fname: new undum.WordScaleQuality(
   //   "Name","David", {group:'stats'}
 //				),
   luck: new undum.FudgeAdjectivesQuality(// Fudge as in the FUDGE RPG
    "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks.).'>Luck</span>",
    {priority: "0003", group: 'stats'}
   ),
   timeofday: new undum.NonZeroIntegerQuality(
    "Time", ["Morning", "Noon", "Afternoon", "Evening"], {priority: "1", group: 'tod'}
   ),
   dayofweek: new undum.WordScaleQuality(
    "", ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], {priority: "0001", group: 'tod'}),
   day: new undum.IntegerQuality(
    "Day", {priority: "0001", group: 'tod'}),
   tfstatus: new undum.WordScaleQuality(
    "", ["", "20%", "25%", "30%", "35%", "40%", "45%", "50%", "55%", "60%", "65%", "70%", "75%", "80%", "85%", "90%", "95%", "100%"], {priority: "00001", group: 'tfstate'}
   //                     0    1          2          3         4         5         6          7        8           9       10          11      12      13         14       15       16        17
   ),
   ctf: new undum.BarQuality2(
    "", ["rgb(142, 236, 194)", "rgb(147, 197, 231)", "rgb(224, 196, 99)", "rgb(184, 80, 91)"], {priority: "0000", group: 'tfstate'}
   ), // 
   inspiration: new undum.NonZeroIntegerQuality(
    "Inspiration", {priority: "0001", group: 'progress'}
   ),
   harmony: new undum.GuageQuality(
    "Harmony:", 1, {priority: "0001", group: 'tfstate'}
   ),
     lust: new undum.BarQuality2(
    "lust", ["rgb(142, 236, 194)", "rgb(147, 197, 231)", "rgb(224, 196, 99)", "rgb(184, 80, 91)"], {priority: "0002", group: 'tfstate'}
   ),
   sus: new undum.GuageQuality(
    "Suspicion:", 3, {priority: "0001", group: 'tfstate'}
   ),
   dignitylost: new undum.GuageQuality(
    "Dignity:", 2, {priority: "0002", group: 'tfstate'}
   ),
   novice: new undum.OnOffQuality(
    "Novice", {priority: "0002", group: 'progress', onDisplay: "&#10003;"}
   )
 };
 
 // ---------------------------------------------------------------------------
 /* The qualities are displayed in groups in the character bar. This
  * determines the groups, their heading (which can be null for no
  * heading) and ordering. QualityDefinitions without a group appear at
  * the end. It is an error to have a quality definition belong to a
  * non-existent group. */
 undum.game.qualityGroups = {
   stats: new undum.QualityGroup(null, {priority: "0001"}),
   progress: new undum.QualityGroup('Progress', {priority: "0002"}),
   tfstate: new undum.QualityGroup('Transformation', {priority: "01"}),
   tod: new undum.QualityGroup('Time', {priority: "0000001"}, {extraClasses: "style=float:none"})
 
 };
 
 function backto(from) {
   var htback = "<p class=transient><a href=" + from + "> Finish and head back. </a>";
   return htback;
 }
 ;
 
 function shuffle(array, system) {
   var currentIndex = array.length, temporaryValue, randomIndex;
 
   // While there remain elements to shuffle...
   while (0 !== currentIndex) {
 
     // Pick a remaining element...
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;
 
     // And swap it with the current element.
     temporaryValue = array[currentIndex];
     array[currentIndex] = array[randomIndex];
     array[randomIndex] = temporaryValue;
   }
 
   return array;
 }
 ;
 function transer() {
   spark = false;
   //$(".ex_link").animate({opacity: 0.1}, 1500);
 
   //$(".unstick").delay(1500).replaceWith("<p><br></p>");
   //$(".unstick").animate({opacity: "0"}, '4000');
   $('#content a').each(function (index, element) {
     var a = $(element);
 
 
     if (a.hasClass('stickish') || a.attr("href").match(/[?&]sticky[=&]?/))
       return;
     a.replaceWith($("<span>").addClass("ex_link").html(a.html()));
   });
   var contentToHide = $('#content .transient, #content ul.options');
   contentToHide.add($("#content a").filter(function () {
     return $(this).attr("href").match(/[?&]transient[=&]?/);
   }));
   var interactive = true;
   if (interactive) {
     var mobile = function () {
       return (navigator.userAgent.toLowerCase().search(
        /iphone|ipad|palm|blackberry|android/
        ) >= 0 || $("html").width() <= 640);
     };
     if (mobile) {
       contentToHide.fadeOut(2000);
     } else {
       //contentToHide.fadeOut(2000);
 
       contentToHide.
        animate({opacity: 0}, 1500).
        slideUp(500, function () {
          $(this).remove();
        });
 
     }
   } else {
     contentToHide.remove();
   }
   $(".ex_link").removeClass("unstick");
   $(".ex_link").animate({opacity: 0.01}, 1500);
 }
 ;
 //$(".unstick").css("opacity", ".0"); 
 
 
 function coinsound() {
   if (undum.isInteractive()) {
     //
     var vidy;
     vidy = document.getElementById("coiner" + 1);
     vidy.volume = newvol / 100;
     vidy.play();
     //return ("<div><audio id='coiner1'><source src='media/audio/coin"++".mp3' ></audio></div>");
   }
 
 }
 function sfxpls(soundy) {
   if (undum.isInteractive()) {
     //
     var vidy;
     vidy = document.getElementById(soundy);
     vidy.volume = newvol / 100;
     vidy.play();
     //return ("<div><audio id='coiner1'><source src='media/audio/coin"++".mp3' ></audio></div>");
   }
 
 }
 function overhide() {
   $("#overlayer").animate({opacity: 0.1}, .1).hide(0);
 
 }
 function overhidenow() {
   //clearTimeout(timevar);
   overhide();
 }
 function bigImg(x, yer) {
   if (yer) {
 
     x.style.width = yer + "%";
   } else {
 
     x.style.width = "70%";
   }
 
 
 
 }
 
 function normalImg(x, yer) {
   if (yer) {
 
     x.style.width = yer + "%";
   } else {
     x.style.width = "20%";
 
   }
   //x.style.height = "32px";
 
 }
 document.addEventListener('touchstart', handleTouchStart, false);
 document.addEventListener('touchmove', handleTouchMove, false);
 
 var xDown = null;
 var yDown = null;
 
 function getTouches(evt) {
   return evt.touches || // browser API
    evt.originalEvent.touches; // jQuery
 }
 
 function handleTouchStart(evt) {
   const firstTouch = getTouches(evt)[0];
   xDown = firstTouch.clientX;
   yDown = firstTouch.clientY;
 }
 ;
 var swipeholder = true;
 function handleTouchMove(evt) {
   if (!xDown || !yDown) {
     return;
   }
 
   var xUp = evt.touches[0].clientX;
   var yUp = evt.touches[0].clientY;
 
   var xDiff = xDown - xUp;
   var yDiff = yDown - yUp;
 
   if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
 
 
 
 
     if (xDiff > 5) {
       /* right swipe */
       if (swipeholder) {
         document.getElementById("letest").click();
         swipeholder = false;
       } else {
         document.getElementById("letest3").click();
         swipeholder = true;
       }
 
       console.log("testing touch ");
     } else {
 
       if (swipeholder) {
         swipeholder = false;
         document.getElementById("letest2").click();
       } else {
         swipeholder = true;
         document.getElementById("letest3").click();
       }
 
 
     }
   } else {
     if (yDiff > 0) {
       /* down swipe */
     } else {
       /* up swipe */
     }
   }
   /* reset values */
   xDown = null;
   yDown = null;
 }
 ;