undum.game.sex = {
  sex: new undum.SimpleSituation(
          "", {
            actions: {
              
              "sexenter": function (character, system, action) {
                transer();
                
                
                // Possibility of sex scene WITH ring... takes it off before sex.... LOSES IT
                
                
                character.sandbox.sexnum++;
                if(character.sandbox.sextalk||character.sandbox.host.host=="bret"||character.sandbox.stealth){
                    character.sandbox.clothed=false;
                    character.sandbox.erect=true;
                    clother();
                  //has had that talk and is about to do the sex
                  
                  if(character.sandbox.forgotten&&character.sandbox.host.host=="bret"){
                    
                    system.doLink("./"+character.sandbox.host.pref2);
                  }else{
                     system.doLink("./"+character.sandbox.host.pref);
                    
                  }
                 
                 
                  
                
                  
                  
                }else{
                  // has not had the talk
            character.sandbox.clothed=true;
                    character.sandbox.erect=false;
                    clother();
                  parer("You get a surprise rub as host stops for a moment, and then keeps rubbing! You know he is in public so he couldn't possibly be masturbating."+character.host.sextalk);
                  
                  if(character.sandbox.enjoyit){
                    oper(system, "./wiggle2","Throb excitedly");
                    
                  }else{
                    oper(system, "./wiggle", "Wiggle defiantly","./wiggle2","Throb excitedly");
                    
                  }
                  
                }
                  
                  
                
                
                
                
                
                
                
              }, //function close
              //////////////////////////////////////////////////////////////////////////////////////
          /////////////////////////////// DAYTIME PARTIAL SEX SCENES ///////////////////////////////////
          //////////////////////////////////////////////////////////////////////////////////////
          /*
         
          10 introductions
      
          10 remeetings
         
         
          lets start comment from host, Do all four roles
         
         
         
           Head/cock head
           
           Has head kiss scene
           
           
           major variations for arms and no arms
           
           
           20 partner comment scenes
           
           head penetrations
           40% Any size penetration events
           20% Large sized partners only. taurs and dragon types
           
           */
          
          
              "partialsexstart": function (character, system, action) {
            transer();
                                           character.sandbox.clothed=false;
                    character.sandbox.erect=true;
                    clother();
            var specieslist=   character.sandbox.pspecieslist;
            var why=true;
            var bigspecieslist= character.sandbox.pbigspecieslist;
            var pronounholder="";
            
            
            var reactions=[
              "q1OH the poor thing! Do you really keep him trapped in there like that all day long? I think he deserves a little loving...",
              "q1Geeze, that's amazing. WAIT.... Your cock looks kind of familiar, I think I know this guy! Haha, sorry but you make a way better cock than a person!q1 ",
              "q1OH damn, that's way bigger than I expected! Ohh.... I wanted to feel him wiggling around inside me. I am sure we can still have fun though!",
              "Rather suddenly they lean in and give you a kiss! It shifts to sucking for only a moment. q1You even taste like real cock.q1",
              "q1Mmmmmm oh yes! We are going to have a lot of fun!q1",
              "q1So this is your little friend, nice to meet you! Oh you already look hard, guess you already think like a cock too hehe!q1",
              "q1Oh heck yes! This is gonna be awesome! I still think he might fit up my ass...q1",
              "q1Cocks a cock, as long as it still works like one its good with me.",
              "q1There he is! How you doing in there? All cooped up in that underwear all day... Lets get you out for some fun!q1",
              "q1Omg! It's true! Oh wow he can move around and everything! Aren't you just adorable!q1"
             ];
            character.sandbox.splistchoice=(rnd(10)-1);
            if(character.sandbox.metbefore[character.sandbox.splistchoice][0]){
              //known character
              
              
                          var reactions=[
              "q1You poor thing! I can't believe he keeps you trapped in there every day!",
              "q1Hey again! Just thought I would see how you were doing! I let some of your friends know where you were. Hope you don't mind! Anyway lets get to the fun part!q1 ",
              "q1He looks even bigger than last time! You were so much fun I just had to come back for more!",
              "Rather suddenly they lean in and give you a kiss! It shifts to sucking for only a moment. q1You still taste just like a normal cockq1",
              "q1Mmmmm i'm back! Lets get this fun started!q1",
              "q1Hello again, amazing you are stuck like this forever! Hehe does that thought get you all hard?q1",
              "q1Alright lets get to it! Sucks it doesn't fit all the way up my ass though...q1",
              "q1It is just a cock, no need to be weird about it.q1",
              "q1Hey there it's me again!! How you doing in there? All cooped up in that underwear all day... Lets get you out for some fun!q1",
              "q1Ahh! I just can't get over how he looks every time I see him! I bet he is just desperate to play again!q1"
             ];
                            
              if(character.sandbox.host.pref=="straight"){
               pronounholder="She";
            
                
              }else{
                if(character.sandbox.limits.cantalk&&character.qualities.ctf<40&&rnd()>5){
                  why=false;
                  character.sandbox.metbefore[character.sandbox.splistchoice][3]=true;
                }
                    
                        
                
                  pronounholder="He";
                   
              }
              
              
                            if(character.qualities.ctf<40&&why){
                //BIG
                if(character.sandbox.host.pref=="straight"){
                   parer("You hear some talking from host and someone else and soon you are getting pulled out into the open. Almost instantly you start getting hard as you look up to see the " + bigspecieslist[character.sandbox.splistchoice]+" smiling down at you! She is absolutely massive, not in a bad way.... You actually recognize them as someone that you have played with before!");
                }else{
                   parer("You hear some talking from host and someone else and soon you are getting pulled out into the open. Almost instantly you start getting hard as you look up to see the " + bigspecieslist[character.sandbox.splistchoice]+" smiling down at you! He is absolutely massive, not in a bad way.... You actually recognize them as someone that you have played with before!");
                  
                }
                  
              
              }else{
                //normal
                   if(character.sandbox.host.pref=="straight"){
                   parer("You hear some talking from host and someone else and soon you are getting pulled out into the open. Almost instantly you start getting hard as you look up to see the " + specieslist[character.sandbox.splistchoice]+" smiling down at you! You actually recognize them as someone that you have played with before!");
                }else{
                   parer("You hear some talking from host and someone else and soon you are getting pulled out into the open. Almost instantly you start getting hard as you look up to see the " + specieslist[character.sandbox.splistchoice]+" smiling down at you! You actually recognize them as someone that you have played with before!");
                  
                }
              }
              
                     parer(reactions[character.sandbox.metbefore[character.sandbox.splistchoice][2]]+" "+pronounholder+" he says and gives you a few rubs");
            
            
 
            }else{
              character.sandbox.metbefore[character.sandbox.splistchoice][0]=true;
              if(character.sandbox.host.pref=="straight"){
               pronounholder="She";
                character.sandbox.metbefore[character.sandbox.splistchoice][1]=false;
                
              }else{
                  pronounholder="He";
                       character.sandbox.metbefore[character.sandbox.splistchoice][1]=true;
              }
              character.sandbox.metbefore[character.sandbox.splistchoice][2]=rnd(10)-1;
              if(character.qualities.ctf<40&&why){
                //BIG
                if(character.sandbox.host.pref=="straight"){
                   parer("You hear some talking from host and someone else and soon you are getting pulled out into the open. Almost instantly you start getting hard as you look up to see the " + bigspecieslist[character.sandbox.splistchoice]+" smiling down at you! Sh#e is absolutely massive, not in a bad way.... Then again you are rather shorter than you used to be but still they are intimidating!");
                }else{
                   parer("You hear some talking from host and someone else and soon you are getting pulled out into the open. Almost instantly you start getting hard as you look up to see the " + bigspecieslist[character.sandbox.splistchoice]+" smiling down at you! H#e is absolutely massive, not in a bad way.... Then again you are rather shorter than you used to be but still she is intimidating!");
                  
                }
                  
              
              }else{
                //normal
                   if(character.sandbox.host.pref=="straight"){
                   parer("You hear some talking from host and someone else and soon you are getting pulled out into the open. Almost instantly you start getting hard as you look up to see the " + specieslist[character.sandbox.splistchoice]+" smiling down at you!");
                }else{
                   parer("You hear some talking from host and someone else and soon you are getting pulled out into the open. Almost instantly you start getting hard as you look up to see the " + specieslist[character.sandbox.splistchoice]+" smiling down at you!");
                  
                }
              }
              
            parer(reactions[character.sandbox.metbefore[character.sandbox.splistchoice][2]]+" "+pronounholder+" h#e says and gives you a few rubs");
            
     
              
            
              
            }// first meeting end
                     if (character.sandbox.limits.cantalk) {
                oper(system, "./hello", "Say hello","./shy","Act shy","./beg","Beg to be used");
              }else{
                
                 oper(system, "./throb","Throb excitedly","./drool","Blush as you drool a bit of pre","./act","Act like a normal cock");
                
              }
            
            
            //character.sandbox.metbefore= [[false],[false],[false],[false],[false],[false],[false],[false],[false],[false]];
            
            
         
           
            
          }, //function close
              "hello": function (character, system, action) {
            transer();
              system.setQuality("dignitylost",character.qualities.dignitylost-1 );
            parer("You offer a simple hello to them as you get rubbed and start growing harder by the second. It feels a bit awkward since by the time a cock comes out most conversation is already over. You try to make some sort of conversation but you just get a smirk from host as a bit of pre cuts you off quickly! The taste of it is a strong reminder of your purpose here. Cocks are suppose to cum not talk...");
            system.doLink("./hostrespond");
          }, //function close
              "shy": function (character, system, action) {
            transer();
            parer("You look away and kind of try to hide away either into the sheath or pants but your hardening body seems intent on forcing you out into the open. Not to mention the rubs of affection you are getting. The very fact of what you are takes the choice away from you, it is in your very nature to be out and ready to use when host needs you. It is just always so embarrassing to meet someone for the first time, especially knowing what they intend to do with you!");
            system.doLink("./hostrespond");
          }, //function close
              "beg": function (character, system, action) {
            transer();
            system.setQuality("dignitylost",character.qualities.dignitylost+1 );
            parer("You have no shame in what you are and what you want. Just a cock thinking cock thoughts needing to be used! You beg to be used, to be shoved inside some tight warm hole! You leave no question of what you are, your mind is just that of a horny needy cock. q1Single minded too.....q1 They say.");
       system.doLink("./hostrespond");
          }, //function close
              "throb": function (character, system, action) {
            transer();
            system.setQuality("harmony",character.qualities.harmony-1 );
            if(character.sandbox.ws){
              parer("Your mouth is just a piss slit so all you can do is throb for them desperate to be treated like a good cock! You have no shame of being used as that, a cock, that is what you are for the rest of your life, so, why not just enjoy all this? You throb eagerly for more attention!");
              
            }else{
                parer("Your mouth is just a slit so all you can do is throb for them desperate to be treated like a good cock! You have no shame of being used as that, a cock, that is what you are for the rest of your life, so, why not just enjoy all this? You throb eagerly for more attention!");
            }
     
                system.doLink("./hostrespond");
          }, //function close
              "drool": function (character, system, action) {
            transer();
            parer("You don't even know what to do or think as you are pulled out, not like there is much you can do. You feel the desperate need to be used and rubbed but also the embarrasment of meeting someone new like this. You can tell from the look on their face what they expect of you though. You try to say something but all that comes out of a drooling of pre from your slit of a mouth.");
              system.doLink("./hostrespond");
          }, //function close
          "act": function (character, system, action) {
            transer();
            system.setQuality("harmony",character.qualities.harmony+1 );
            
            parer("You don't move at all, just stare upward ready to be used. It seems almost silly for them to talk to you. Why would anyone talk to a cock before having sex with it? You look up at them and just let yourself get hard. Already you can feel those balls churning away ready with cum, some pre even drips from you slit of a mouth. A simple cock looking forward to getting to be played with.");
             system.doLink("./hostrespond");
          }, //function close
          "hostrespond": function (character, system, action) {
            transer();
            var respond="";
            
            
            
            
            if(character.host.partialsexreact==""){
          switch(character.sandbox.ctfrolemod){
            case "pos":
              respond="q1He loves being my cock, practially begged me to make it permanent!q1";
              break;
            case "bod":
                 respond="q1It's just my cock now, I don't treat it any differently now than before.q1";
              break;
              //omeganoconfictos gets a cookie
                case "pet":
                     respond="q1He is such a good cock, lets see if I can get him to do a trick!q1";
                  break;
                  
                  
                case "f":
               respond="q1Hehe, good thing being turned into a cock has made him nearly constantly hornyq1";
            
            break;
          default:
          }
              parer(respond+"he says.");
              
              
              

            }else{
              
                   parer(character.host.partialsexreact);
 
            }
     

       if(true){
         
              if (character.sandbox.metbefore[character.sandbox.splistchoice][1]) {
              //male
              if (character.sandbox.metbefore[character.sandbox.splistchoice][3]) {
                
                //split choice 3 is just can do blowjob
                if (character.sandbox.limits.hasarms) {
                  system.doLink("./bjarm");
                } else {
                  system.doLink("./bjnoarm");
                }
              } else {
                if (character.sandbox.limits.hasarms) {
                  system.doLink("./headinarm");

                } else {

                  system.doLink("./headinnoarm");
                }
              }
            } else {
              //female

              if (character.sandbox.limits.hasarms) {
                system.doLink("./headinarm");
              } else {
                system.doLink("./headinnoarm");
              }


            }
         
       }else{
         parer("WIP coming next update! For now sending to normal sex scenes");
              oper(system, "./sexenter", ".....");
             // system.doLink("./sexenter");
            }
       
       

            
            
     
          }, //function close
          "bjarm": function (character, system, action) {
            //bj scene with arms
            
            var sp=""; 
    
              //sp= character.sandbox.pbigspecieslist[character.sandbox.splistchoice];
              
              
    
              //small species that is male you are below 40%
                   sp= character.sandbox.pspecieslist[character.sandbox.splistchoice];
              
              parer("host and his "+sp+" friend don't waste any time and quickly bring you face to face with another cock! There is something so strange seeing another dick that isn't you. Almost a sort of kinship or respect knowing it goes through every day! Though you don't have much time to think about it as host pushes you forward forcing you to give it a sudden kiss!");
        
            oper(system, "./bjasuck", "Suck on the cock","./bjatease","Tease it some first");
          }, //function close
           "bjnoarm": function (character, system, action) {
            //BJ scene with no arms
 var sp=""; 
    
              //sp= character.sandbox.pbigspecieslist[character.sandbox.splistchoice];
              
              
    
              //small species that is male you are below 40%
                   sp= character.sandbox.pspecieslist[character.sandbox.splistchoice];
              
              parer("host and his "+sp+" friend don't waste any time and quickly bring you face to face with another cock! There is something so strange seeing another dick that isn't you. Almost a sort of kinship or respect knowing it goes through every day! Though you don't have much time to think about it as host pushes you forward forcing you to give it a sudden kiss!");
        
            oper(system, "./bjasuck", "Suck on the cock","./bjatease","Tease it some first");


          }, //function close
          "bjasuck": function (character, system, action) {
            transer();
               var sp= character.sandbox.pspecieslist[character.sandbox.splistchoice];
            parer("You waste no time and quickly grab the cock to begin sucking on it! It is pretty large for a cock considering how much you have shrunk but your mouth and throat are much more forgiving it seems, possibly part of your throat has already been subtly converted into a urethra. Either way you somehow manage to take the entire cock down to the root into your throat!");
            parer("Both host and the"+sp+" make delightfull noises as you play with your new friend.");
            oper(system, "./serioussuck", "Be a good cock");
          }, //function close
          "bjatease": function (character, system, action) {
            transer();
            parer("You actually take your time teasing the tip of their cock, only suckling on it at first. The soft mmmmm sounds you are hearing encorage you on. There is something so strange about tasteing another cock now that you are one! Scents and flavors so similar to your own yet subltly different. Without even realizing it you start getting lower. It is surprising when your mouth manages to bump into their groin.");
            oper(system, "./serioussuck", "Really get into it");
          }, //function close
          "serioussuck": function (character, system, action) {
            transer();
             var sp= character.sandbox.pspecieslist[character.sandbox.splistchoice];
            parer("The "+sp+" really starts to get into it. He grabs your head and thrusts into it all on his own. Thankfully you have no need to breath and can happily let him use your extra stretchy throat as a perfect hole for his tool to enjoy. His grip around your neck though feels oddly nice, like someone was rubbing just behind he head of your cock!");
            if(character.sandbox.limits.hasarms){
              
              oper(system, "./suckdelay","Grab his hips and enjoy the ride");
              
            }else{
              
              oper(system, "./suckdelay", "Brace yourself and enjoy the ride");
            }
            
          }, //function close
          "suckdelay": function (character, system, action) {
            transer();
             var rndnum=7;
                var thrusty=[
                  "host just rubs as you suck the other cock!",
                  "You find yourself sucking hard enough to make them have to pull back slowly!!",
                  "Every thrust has you shuddering with pleasure!",
                  "Your head gets gripped rather roughly as they thust in harder!",
                  "Your throat feels almost as sensitive as a pussy!!",
                 "You feel so hard!",
                 "Your own orgasm is getting close!"
                  
                ];
                
                
                
                delay([
                 thrusty[rnd(rndnum)-1],
                 
                 thrusty[rnd(rndnum)-1],
                 
                thrusty[rnd(rndnum)-1]
                 ,
                 "./partialsuckend"
                       ],character.sandbox.eventspeed);
          }, //function close
          "partialsuckend": function (character, system, action) {
            transer();
                   var sp= character.sandbox.pspecieslist[character.sandbox.splistchoice];
                   
            parer("On the final thrust the "+sp+" pulls your head into their groin actually causing your nose to slip inside a bit. A sudden twitch from their cock let know know why. Within moments you can feel it pumping it's creamy down your throat, or urethra? It's a strange sensation as even host lets out a surprised sound! However the moment was short lived. With the cum added to hosts balls he needed release more then ever!");
              oper(system, "./psuckcum", "CUMMM!");
          
            
            
          
          }, //function close
          "psuckcum": function (character, system, action) {
            transer();
                var sp= character.sandbox.pspecieslist[character.sandbox.splistchoice];
           parer("All that cum you just swallowed suddenly comes shooting back up through you along with a whole load of host's own! The pressure builds up fast and you can't help but notice some of it back flowing down the "+sp+"'s cock! Their bal#ls inflate a bit as the rest comes spewing out from the sides of your mouth!");
           
           parer("host finally pulls you off of the other cock. You can't help but give it a kiss on the way out. It's an amusing thought to realize if circumstances were different, that other cock could have been you!");
            system.setQuality("essence",character.qualities.essence+10 );
            oper(system, "./pdrool", "Continue to drool cum");
          }, //function close
          "pdrool": function (character, system, action) {
            transer();
                var sp= character.sandbox.pspecieslist[character.sandbox.splistchoice];
            parer("host and the "+sp+" are left panting after that! host hardly did anything though! Still there is a twinge of pride having done a good job for him. Eventually you watch as the other cock slowly begins to shrink way back into its home. You are a bit to big to do the same but it's still a strange feeling as your friend is all tucked away.");
            parer("Soon after, host cleans you up a bit and then tucks you back away now that he is done with you. Your mind is still in a bit of shock and you can't even focus on what they discuss after that.");
  character.sandbox.erect=false;
           
            clother();
            
     oper(system, "evening/enter", "Get some rest....");
          }, //function close
          "headinarm": function (character, system, action) {
            //head insertion with arms
            transer();
      var sp= character.sandbox.pspecieslist[character.sandbox.splistchoice];
    //you are huge but so are they
    if (character.sandbox.metbefore[character.sandbox.splistchoice][1]) {
  //male
  parer("host and his "+sp+" friend don't waste any time. Within seconds pants go flying and you are soon pointed at a well lubed ass! There is something rather ominous as host slowly inches you closer to it! It looks so tight but you know there is no question it is about to swallow you up! Your body is much too large to actually get in there, especially your shoulders. But your cock shaped head would fit perfectly!");
  
  
  }else{
  //female
 
    parer("host and his "+sp+" friend don't waste any time. Within seconds pants go flying and you are soon pointed between her legs! There is something rather ominous as host slowly inches you closer to her vagina! It doesn't look big enough to take you but you know that won't stop them from trying! Your body is much too large to actually get in there, especially your shoulders. But your cock shaped head would fit perfectly!");
     
}
 
  
             oper(system, "./usehands", "Help open them up a bit","./inwego","Brace yourself!");

    
//        if (character.sandbox.metbefore[character.sandbox.splistchoice][1]) {
//  //male
//  
//  
//  
//  }else{
//  //female
//  
//  
//  
//  
//  
//}
    
          }, //function close
          "headinnoarm": function (character, system, action) {
            //head insertion no arms
            transer();
                  var sp= character.sandbox.pspecieslist[character.sandbox.splistchoice];
   if (character.sandbox.metbefore[character.sandbox.splistchoice][1]) {
  //male
  //cock shaped head
  parer("host and his "+sp+" friend don't waste any time. Within seconds pants go flying and you are soon pointed at a well lubed ass! There is something rather ominous as host slowly inches you closer to it! It looks so tight but you know there is no question it is about to swallow you up! Your body is much too large to actually get in there, but your cock shaped head would fit perfectly!");
  
  
  }else{
  //female
  //might have head
    parer("host and his "+sp+" friend don't waste any time. Within seconds pants go flying and you are soon pointed between her legs! There is something rather ominous as host slowly inches you closer to her vagina! It doesn't look big enough to take you but you know that won't stop them from trying! Your body is much too large to actually get in there!");
  
  
  
}
              oper(system, "./inwego","Brace yourself!");

    
          }, //function close
          "usehands": function (character, system, action) {
            transer();
            var sp= character.sandbox.pspecieslist[character.sandbox.splistchoice];
            
            if (character.sandbox.metbefore[character.sandbox.splistchoice][1]) {
              //male
               parer("What is the point of being a cock with arms if you don't use them? With a grin you reach forward and tease the hole in front of you. You can easily shove your entire arm into there with ease due to your smaller size! There is a snicker from host as he lets you do your thing clearly having fun feeling his cock do all the work for him. You manage to loosen up the "+sp+" a bit till you can even get a second arm inside!");
               
               oper(system, "./spreadem", "Open him up and brace yourself");
            }else{
              //female
              
               parer("What is the point of being a cock with arms if you don't use them? With a grin you reach forward and tease the vagina in front of you. You really haven't had many chances to see a pussy this close up before, spreading the lips a bit till you get shoved a bit closer! There is a snicker from host as he lets you do your thing but keeps inching you closer!");
               oper(system, "./spreadem", "Spread her pussy and get ready");
            }
           
            
          }, //function close
          "spreadem": function (character, system, action) {
            transer();
            var sp= character.sandbox.pspecieslist[character.sandbox.splistchoice];
            
             if (character.sandbox.metbefore[character.sandbox.splistchoice][1]) {
               //male
               parer("Even at your current size you can still exert enough force to spread his ass just enough that you think your head might fit inside! host also seems to notice this and rather suddenly shoves you inward! Instinctually you let go and push at the ass from the outside. host just laughs as you helplessly squirm as the "+sp+"'s ass clenchs down tight around your neck!");
             }else{
               //female
               parer("Even at your current size you can still exert enough force to spread his ass just enough that you think your head might fit inside! host also seems to notice this and rather suddenly shoves you inward! host just laughs as you helplessly squirm as the"+sp+"'s pussy clenchs down tight around your neck!");
             }
            
            oper(system, "./wegothrusty","Feel the pre already flowing up your throat!");
          }, //function close
        "inwego": function (character, system, action) {
        transer();
        //no arms or choose not to use arms
        var sp= character.sandbox.pspecieslist[character.sandbox.splistchoice];
          if (character.sandbox.metbefore[character.sandbox.splistchoice][1]) {
            //male
              parer("You close your eyes and brace yourself as host thrusts forward! There is a moment of oddness as you find your face being pressed up tightly against a unsually large ass! Slowly but surely he grinds you into the tight orifice till it starts to open up a bit. All you can do is wiggle slightly as with one final push it opens up and swallows your head! host just laughs as you helplessly squirm when the "+sp+"' clenchs down tight around your neck!");
            
          }else{
            //female
             parer("You close your eyes and brace yourself as host thrusts forward! There is a moment of oddness as you find your face being pressed hard into the comparitvly large pussy! At first it seems like they intend for you to lick and tease her but slowly he grinds you inward till it starts to open up a bit around your face! All you can do is wiggle slightly as with one final push it opens up and swallows your head! host just laughs as you helplessly squirm when the"+sp+"'s pussy clenches down around your neck!");
          }
        
      
        oper(system, "./wegothrusty", "Feel the pre already flowing up your throat!");
    }, //function close
          "wegothrusty": function (character, system, action) {
            transer();
            
            if(character.sandbox.limits.hasarms){
              
              if (character.sandbox.metbefore[character.sandbox.splistchoice][1]) {
                 parer("host begins to thrust you in harder as you hear muffled moans from the other person you are currently exploring! Not that you can see anything, leaving your head just barely inside each time he pulls back. The best you can do is try to reach his b#alls or or anus to tease him a bit. Eventually even those get trapped by his ass cheeks holding you in place! Your shoulders really prevent any chance of you sinking in deeper despite host trying his best!");
                
              }else{
                
                 parer("host beings to thrust you in harder as you hear muffled moans from the other person you are currently exploring! Not that you can see anything, leaving your head just barely inside each time he pulls back. The best you can do is try to reach her clit to tease and rub at it but the angle makes that rather difficult. Your shoulders really prevent any chance of you sinking in deeper despite host trying his best!");
                
              }
             
              
              oper(system, "./wegodelay", "Time to do what cocks do best");
            }else{
                 if (character.sandbox.metbefore[character.sandbox.splistchoice][1]) {
                 parer("host beings to thrust you in harder as you hear muffled moans from the other person you are currently exploring! Not that you can see anything, leaving your head just barely inside each time he pulls back. You start to find host pushing you in deeper still, shockingly you feel the anal ring stretching around you as even your slimed down shoulders slip into the thight hole! You end up DEEP inside for a good long while before they really start thrusting again!");
              }else{
                
                 parer("host beings to thrust you in harder as you hear muffled moans from the other person you are currently exploring! Not that you can see anything, leaving your head just barely inside each time he pulls back. You start to find host pushing you in deeper still, shockingly you feel the pussy stretching around you as even your slimmed down shoulders slip past the tight lips! You end up DEEP inside for a good long while before they really start thrusting again!");
                
              }
                 oper(system, "./wegodelay", "Time to do what cocks do best");
            }
            
         
          }, //function close
          "wegodelay": function (character, system, action) {
            transer();
            var rndnum=7;
                var thrusty=[
                  "The tight feeling sends shiver through you!",
                  "You are getting so hard you can't even wiggle!",
                  "Every thrust has you shuddering with pleasure!",
                  "host keeps thrusting as if you were a real cock",
                  "You need to cum so badly!",
                 "Almost!",
                 "Your own orgasm is getting close!"
                  
                ];
                
                
                
                delay([
                 thrusty[rnd(rndnum)-1],
                 
                 thrusty[rnd(rndnum)-1],
                 
                thrusty[rnd(rndnum)-1]
                 ,
                 "./wegocum"
                       ],character.sandbox.eventspeed);
       
          }, //function close
          "wegocum": function (character, system, action) {
            transer();
            parer("host's balls suddenly clench and you feel the urethra connected to your throat fill with cum as it erupts from your mouth! The senstation is all the more powerful from your perspective as you pulse and throb in time with the surges of cum! For several moments all you are is a cock doing it's job, delivering cum and supplying your owner with pleasure!");
 system.setQuality("essence",character.qualities.essence+10 );
            oper(system, "./wegowait", "Throb helplessly as you continue to leak cum");
          }, //function close
          "wegowait": function (character, system, action) {
            transer();
               var sp= character.sandbox.pspecieslist[character.sandbox.splistchoice];
            parer("host and the "+sp+" are left panting after that! host starts to pull you out but due to your unusual shape it doesn't work. He has to tug a few times to finally free you from the tight orifice followed by a flood of cum!");
            parer("Soon after, host cleans you up a bit and then tucks you back away now that he is done with you. Your mind is still in a bit of shock and you can't even focus on what they discuss after that.");
              character.sandbox.erect=false;
           
            clother();
     oper(system, "evening/enter", "Get some rest....");
          
          }, //function close
          // 
          //////////////////////////////////////////////////////////////////////////////////////
          /////////////////////////////// DAYTIME SEX SCENES ///////////////////////////////////
          //////////////////////////////////////////////////////////////////////////////////////
              "bi": function (character, system, action) {
                parer("<h1>SEX</h1>");
                system.doLink((rnd(2)==1)?("./gay"):("./straight"));
                
                
                //temporary
               // system.doLink("./straight");
              }, //function close
              "gay": function (character, system, action) {
                transer();
                character.sandbox.sextype="gay";
            
                switch (rnd(4)) {
                  case 1:
                    
                    //break;
                  case 2:
                       character.sandbox.sextype="oral";
                  
     parer("You hear host talking to someone as he is going about the day, you don't catch exactly what they are talking about but suddenly your body is getting hard! You can feel yourself start to throb as you slide out from his sheath. He gives you a rub but not one of the calm down in there ones. You start to get a good idea of what is going on as you get pressed up against something soft, along with some awkwardly close groans! You can't help but feel a bit embarrassed like hearing the neighbors having sex through the wall!");
                            parer("You don't have a chance to feel embarrassed for long before host slides down his zipper and slides you out. Or at least that is who you thought pulled you out....");
                  
                 character.sandbox.tongrnd=rnd(6)-1;
                  //[feline, strong long horse, long thing, normal, normal, normal,yoshi]
                  var tongtype=["You couldn't tell from the face alone but h#is tongue is clearly feline!","He is clearly an equine with strong tongue and surprisingly roomy mouth!","You only have a few moments to notice his scales before h#is long thin tongue wraps around you!","You can't quite place his species but you are quickly VERY familiar with their long wide tongue!","From the ears you could tell they were a bunny of some kind.","H#e looked mostly human but all that means is you are likely heading right down the throat!"];
                  
                  
                  switch (rnd(5)) {
                  case 1:
                    
                    parer("q1Hey there! Bigger than I thought....q1 H#e says and leans forward kissing you on top of your head! Then followed by a slow suckling as you are pulled into h#is mouth! "+tongtype[character.sandbox.tongrnd]);
                    
                    
                    break;
                  case 2:
                    parer("q1Don't worry, I have had lots of practice!q1 H#e says as h#e leans forward kissing you on top of your head! Then followed by a slow suckling as you are pulled into h#is mouth! "+tongtype[character.sandbox.tongrnd]);
                    break;
                  case 3:
                    parer("H#e doesn't say a word as h#e leans forward kissing you on top of your head! Then followed by a slow suckling as you are pulled into hi#s mouth! "+tongtype[character.sandbox.tongrnd]);
                    break;
                  case 4:
                    parer("There is a terrifying moment as a mouth WIDE open decends over you! Then followed by a slow suckling as you are engulfed by h#is mouth! "+tongtype[character.sandbox.tongrnd]);
                    break;
                  case 5:
                    if(rnd(2)==1){
                      parer("H#e grabs onto you and strokes you up and down a few times making sure you are nice and hard! H#e gives you a long slow lick from the base to the top of your head before slowly sucking you into h#is mouth! "+tongtype[character.sandbox.tongrnd]);
                      
                    }else{
                      character.sandbox.tongrnd=6;
                       parer("H#e just snickers and looks up at host q1Ever been with one of my kind before?q1 H#e asks and opens his mouth. H#is tongue SUDDENLY shoots out like a projectile smacking into you with a squish! It feels like it is stuck to you!!!! host actually yelps as h#e pulls it back into hi#s mouth and you along with it! ");
                      
                    }
                    break;
                  default:
                }//End of RND switch
                  
                  
                  
                  
                      oper(system, "./tonguefun", "Get sucked!");


                    break;
                  case 3:

                    //break;
                  case 4:
                     parer("You hear host talking to someone as he is going about the day, you don't catch exactly what they are talking about but suddenly your body is getting hard! You can feel yourself start to throb as you slide out from his sheath. He gives you a rub but not one of the calm down in there ones. You start to get a good idea of what is going on as you get pressed up against something soft, along with some awkwardly close groans! You can't help but feel a bit embarrassed like hearing the neighbors having sex through the wall!");
                  parer("You don't have a chance to feel embarrassed for long before host slides down his zipper and slides you out. A moment later you are slathered with a layer of lube, it's like getting a fully body oil massage but its every part of you at the same time!  You are rather immediatly face to face with a tight and thankfully clean ass!");
                    oper(system, "./atease", "Do what cocks do best....");
                    
                    
                    break;
                  }
            
              }, //function close
              "straight": function (character, system, action) {
                transer();
            character.sandbox.sextype="straight";
                   switch (rnd(4)) {
                  case 1:

                    //break;
                  case 2:
                     character.sandbox.sextype="oral";
                  
                    
                    

                  
                  parer("You hear host talking to someone as he is going about the day, you don't catch exactly what they are talking about but suddenly your body is getting hard! You can feel yourself start to throb as you slide out from his sheath. He gives you a rub but not one of the calm down in there ones. You start to get a good idea of what is going on as you get pressed up against something soft. Along with some awkwardly close feminine moans! You can't help but feel a bit embarrassed like hearing the neighbors having sex through the wall!");
                  parer("You don't have a chance to feel embarrassed for long before host slides down his zipper and slides you out. Or at least that is who you thought pulled you out....");
                  
                 character.sandbox.tongrnd=rnd(6)-1;
                  //[feline, strong long horse, long thing, normal, normal, normal,yoshi]
                  var tongtype=["You couldn't tell from the face alone but her tongue is clearly feline!","She is clearly an equine with strong tongue and surprisingly roomy mouth!","You only have a few moments to notice her scales before her long thin tongue wraps around you!","You can't quite place her species but you are quickly VERY familiar with their long wide tongue!","From the ears you could tell they were a bunny of some kind.","They looked mostly human but all that means is you are likely heading right down their throat!"];
                  
                 
                  
                  switch (rnd(5)) {
                  case 1:
                    
                    parer("q1Hello there! Bigger than I thought....q1 She says as she leans forward kissing you on top of your head! Then followed by a slow suckling as you are pulled into her mouth! "+tongtype[character.sandbox.tongrnd]);
                    
                    
                    break;
                  case 2:
                    parer("q1Don't worry, I have had lots of practice!q1 She says as she leans forward kissing you on top of your head! Then followed by a slow suckling as you are pulled into her mouth! "+tongtype[character.sandbox.tongrnd]);
                    break;
                  case 3:
                    parer("She doesn't say a word as she leans forward kissing you on top of your head! Then followed by a slow suckling as you are pulled into her mouth! "+tongtype[character.sandbox.tongrnd]);
                    break;
                  case 4:
                    parer("There is a terrifying moment as a mouth WIDE open decends over you! Then followed by a slow suckling as you are engulfed by her mouth! "+tongtype[character.sandbox.tongrnd]);
                    break;
                  case 5:
                    if(rnd(2)==1){
                      parer("She grabs onto you and strokes you up and down a few times making sure you are nice and hard! She gives you a long slow lick from the base to the top of your head before slowly sucking you into her mouth! "+tongtype[character.sandbox.tongrnd]);
                      
                    }else{
                      character.sandbox.tongrnd=6;
                       parer("She just snickers and looks up at host q1Ever been with one of my kind before?q1 She asks and opens her mouth. Her tongue SUDDENLY shoots out like a projectile smacking into you with a squish! It feels like it is stuck to you!!!! host actually yelps as she pulls it back into her mouth and you along with it! ");
                      
                    }
                    break;
                  default:
                }//End of RND switch
                  oper(system, "./tonguefun", "Get sucked!");
                    break;
                  case 3:




                    //break;
                  case 4:

                  parer("You hear host talking to someone as he is going about the day, you don't catch exactly what they are talking about but suddenly your body is getting hard! You can feel yourself start to throb as you slide out from his sheath. He gives you a rub but not one of the calm down in there ones. You start to get a good idea of what is going on as you get pressed up against something soft. Along with some awkwardly close feminine moans! You can't help but feel a bit embarrassed like hearing the neighbors having sex through the wall!");
                  parer("You don't have a chance to feel embarrassed for long before host slides down his zipper and slides you out. The situation is much farther along than you had anticipated! You are rather immediatly face to face with a vagina almost as big as you are!");
                    oper(system, "./vtease", "Do what cocks do best....");
                    
                    break;





                }
                
                
                
                
               // oper(system, "", "");
              }, //function close
              "will": function (character, system, action) {
                transer();
                var willtease="";
                switch (rnd(5)) {
                  case 1:
                    
                    willtease="Come on you know that cock isn't happy unless it's under my tail.";
                    
                    
                    break;
                  case 2:
                    willtease="q1Bret... you really can't wait can you? Or is it your cock that was feeling lonely again?";
                    break;
                  case 3:
                    willtease="You are so knotty today! Not that I mind a bit of knotting....";
                    break;
                  case 4:
                    willtease="My butt is lonely..... Think you could let it's best friend out of your sheath to play?";
                    break;
                  case 5:
                    willtease="Looks like you have a special delivery for me, how about taking it to my back door?";
                    break;
                  default:
                }//End of RND switch
          parer("You hear host talking to Will, even though you have never seen his face you recognize his voice! You can feel yourself start to throb as you slide out from your warm sheath! You start to get a good idea of what is going on as you get pressed up against something soft. "+willtease+" He says teasingly!");
                  parer("You don't have a chance to feel embarrassed for long before you are hanging out in the open under Brets belly.  You are rather immediatly face to face with rather large donut pucker of a HORSE!!!! Even more embarrassing is how familiar it feels... As if you had been in that hole hundreds of times!");
                    oper(system, "./atease", "Do what cocks do best....");
           
              }, //function close
              "vtease": function (character, system, action) {
                parer("host wastes no time at all and presses your face into the pussy before you! You don't even know who this is and you are getting forced into her vagina! But you are just a cock, this is literally what you are meant to do! host slowly pushes forward causing the lips to spread around you as your head feels the tight pussy's embrace! Your entire world feels hot, feeling blood pulsing through your rock hard body! A weird need to be inside.... A purpose! Desperate to feel something tight around you!");
                system.doLink("./vthrust");
             
             
              }, //function close
              "tonguefun": function (character, system, action) {
            transer();
            switch (character.sandbox.tongrnd) {
              case 0:
                  //[feline, 
              
              
              parer("You entire cocklike body is attacked by the feline tongue! It drags across your body like wet sandpaper in a cruel but overwhelming sensation! It feels way better than it seemed like it would. They are skilled enough to be doing a good job keeping you away from their feline teeth.  That rough texture being used expertly to slide over your sensitive skin!");
              
              break;
              case 1:
                 //strong long horse, 
               
                 parer("Everything about equines seems to be long and strong, and the tongue that welcomes you is no different! It wraps around you and even squeezes as your entire length is engulfed within the maw! It's would be rather roomy if not for the tongue literally wrestleing with you!");
                
                
                break;
              case 2:
                     //long thing, 
                  
                   parer("You feel the serpentine tongue curl around you almost posessively as you get sucked on! You almost feel like a small animal being swallowed whole! They seem to enjoy host's squirms as their tongue slides up and down you while they just hold you in their warm tight maw! ");
                   
                break;
              case 3:
             //normal, normal, normal,
              case 4:
              case 5:
              
              parer("The mouth is short enough that you very quickly end up in the back of their throat! Whoever this is apparently knows how to deepthroat! Their tongue rubs wonderfully along your base also protecting you from their teeth. All the while leaving you to look down into the depths of their throat as if on the edge of a cliff!");
              
              break;
              case 6: 
                //yoshi]
                
                parer("That sticky tongue just takes the opportunity to wrap itself more tightly around you! It squeezes and pulls you as if trying to drag you all the way down into their throat... or deeper! The entire concept of being STUCK to a tongue is bafflingly erotic! It just feels so good having something touching you more deeply than any other flesh on flesh contact!");
                
                
                
                break;
              default:
            }//End of RND switch
             parer("The suction really starts as they slowly pull you from their mouth making your cock flesh feel even harder! They let go with a 'pop' before diving back down for more! It is almost agonizingly good feeling!");
            
            system.doLink("./bthrust");
        
          }, //function close
                            "bthrust": function (character, system, action) {
                transer();
               
                var rndnum=7;
                var thrusty=[
                  "host thrusts you forward sliding you deeper into their throat!",
                  "They really get into it bobbing up and down faster!",
                  "Every thrust has you shuddering with pleasure!",
                  "Their tongue feels soo good!",
                  "You almost find yourself begging for them to suck harder!",
                 "You feel so hard!",
                 "Please no teeth!"
                  
                ];
                
                
                
                delay([
                 thrusty[rnd(rndnum)-1],
                 
                 thrusty[rnd(rndnum)-1],
                 
                thrusty[rnd(rndnum)-1]
                 ,
                 "./bcum"
                       ],character.sandbox.eventspeed);
                
                //oper(system, "", "");
              }, //function close

              "vthrust": function (character, system, action) {
                transer();
                var rndnum=7;
                var thrusty=[
                  "host thrusts you forward sliding you deeply into the vagina!",
                  "You are overwhelmed with sensation as he slides your body slides in and out",
                  "Every thrust has you shuddering with pleasure!",
                  "IN!",
                  "You almost find yourself begging to be pushed deeper!",
                 "You feel so hard!",
                 "Her pussy feels so good around you!"
                  
                ];
                
                
                
                delay([
                 thrusty[rnd(rndnum)-1],
                 
                 thrusty[rnd(rndnum)-1],
                 
                thrusty[rnd(rndnum)-1]
                 ,
                 "./vcum"
                       ],character.sandbox.eventspeed);
                
                //oper(system, "", "");
              }, //function close
               "atease": function (character, system, action) {
                parer("host wastes no time at all and presses your face into the tight hole in front of you! You don't even know who this is and you are getting forced into their ass! But you are just a cock, this is literally what you are meant to do! host slowly pushes forward causing your well lubed body to force your head through the tight opening! You hear an unfamiliar moan as you violate the strangers rear! Your entire world feels hot, feeling blood pulsing through your rock hard body! A weird need to be inside.... A purpose! Desperate to feel something tight around you!");
                system.doLink("./athrust");
             
             
              }, //function close
              "athrust": function (character, system, action) {
                transer();
                var rndnum=7;
                var thrusty=[
                  "host thrusts you forward sliding you deeply into the ass!",
                  "You are overwhelmed with sensation as he slides your body slides in and out",
                  "Every thrust has you shuddering with pleasure!",
                  "This feels so wrong but so good!",
                  "You almost find yourself begging to be pushed deeper!",
                 "You feel so hard!",
                 "Hi#s ass literally clenches as you bang into his prostate!"
                  
                ];
                
                
                
                delay([
                 thrusty[rnd(rndnum)-1],
                 
                 thrusty[rnd(rndnum)-1],
                 
                thrusty[rnd(rndnum)-1]
                 ,
              "./acum"
            ], character.sandbox.eventspeed);

            //oper(system, "", "");
          }, //function close
          "bcum": function (character, system, action) {
            transer();
//                if(character.sandbox.host.host=="mark"){
//                  character.sandbox.cocktype="knot";
//                  
//                }else{
//                  
//                  character.sandbox.cocktype="normal";
//                  
//                }
//                
//                
            if (character.sandbox.host.cockknot) {
        
                      //will be knotted
                 parer("host suddenly gives one final strong thrust pushing you in as deep as he can! You feel a strong pressure below you right around your knot, It slowly squeezes around it. You realize their teeth have gotten stuck just behind your knot! There is a bit of panic as they try to pull you out a few times but your knot is in past its thickest part! You just tied to their mouth!  You can only imagine the embarrased look on their face right now... You don't even have time to enjoy the tightness around your knot before a torrent of cum suddenly shoots through you!");
              //  parer("q1Hehe sorry about that. It will go down eventually!q1 You he");
           
             
              oper(system, "./bknotted", "CUM!");
            } else {
              //no knotting
              parer("host suddenly gives one final strong thrust pushing you in as deep as he can! You can feel the mouth around you go still as their throat opens up pointing you straight down into it! You throb overwhelmed with a sudden wave of pleasure as your entire body thickens! You don't even have time to enjoy it before a torrent of cum suddenly shoots through you! You are so deep they are practically forced to swallow!");
              oper(system, "./pullout", "CUM");
            }





          }, //function close
            "bknotted": function (character, system, action) {
                transer();
                 system.setQuality("essence",character.qualities.essence+10 );
                        parer("Every drop of cum you spurt into their throat is swallowed down! Each time their entire mouth closes more squeezing you and giving a very minor suckle! They really have no choice with you tied to their mouth, treating it just like a pussy for you to impregnate!Your knot throbs with each pulse of cum, getting larger and larger!  Even after the last few drops of cum leak from your mouth you are still trapped inside! You feel them reposition a bit in a way that helps their neck into an easier angle to breath.");
                    
                
                if(character.sandbox.reqwater){
                  oper(system, "./wsoral", ".......");
            
                }else{
                        oper(system, "./bwait", ".......");
                  
                }
                  
                
              }, //function close
              "wsoral": function (character, system, action) {
            transer();
          parer("You stay stuck in the tight mouth for a concerninly long time, so long that you can almost feel the pressure in host's bladder! Even you can feel it distantly, and your knot just is not going down fast enough! You fidget and wiggle worried about it, even host seems to be a bit distracted. He pulls at you a few times unsuccessfully, your knot is just too strong!  "+character.host.wsk+" Followed by a renewed urgent series of tugs and muffled noises! q1MMMMppphmmm!!!q1");   
          parer("Suddenly the urethra runing through your body is forced open by a river of piss! He just couldn't wait.... you quickly fill the unlucky mouth with his piss! All you can do is wince as it causes your body to practically shake with the intesity of the stream. Your friend does their best to swallow down the torrent of piss, practically being forced to considering how deep you are lodged in his throat. The only lucky thing is they don't have to taste it, unlike you.");
            oper(system, "./wswait", "Just keep doing what cocks are made for.....");
          }, //function close
                    "wswait": function (character, system, action) {
                transer();
                //oral sex knotted!
                
                parer("The flow doesn't last too long thankfully but you can tell it was a pretty rough ordeal for them. Yet somehow they managed to drink down every drop of piss host had to give. You almost feel as exausted as they are. Both of you at the mercy of hosts bladder. Though you didn't end up swimming in it thanks to having a convenient throat to use as a urinal!");
                
                
                //oper(system, "", "");
                oper(system, "./pulloutoral", "Wait for that knot to finally go down");
              }, //function close
          "vcum": function (character, system, action) {
            transer();
//                if(character.sandbox.host.host=="mark"){
//                  character.sandbox.cocktype="knot";
//                  
//                }else{
//                  
//                  character.sandbox.cocktype="normal";
//                  
//                }
//                
//                
                if(character.sandbox.host.cockknot){
                  //will be knotted
                  
                   parer("host suddenly gives one final strong thrust pushing you in as deep as he can! You feel a strong pressure below you right around your knot, It slowly squeezes around it. To you it feels like an eternity as the lips of the pussy stretch around it more and more. It couldn't have been more than a second but being so close to the action makes it unbearable! It all comes to an end as your knot slides in past its thickest part and your entire body knot and all get locked in! You don't even have time to enjoy the warm tightness before a torrent of cum suddenly shoots through you!");
                   oper(system, "./vknotted", "CUM!");
                }else{
                  //no knotting
                  parer("host suddenly gives one final strong thrust pushing you in as deep as he can! The pussy around you suddenly clenches tightly around your body, practically massaging you as it spasms in orgasm. It just feels so right here! You throb overwhelmed with a sudden wave of pleasure as your entire body thickens a bit making it all the tighter! You don't even have time to enjoy it before a torrent of cum suddenly shoots through you!");
                  oper(system, "./pullout", "CUM");
                }
               
                
                
                
            
              }, //function close
              "vknotted": function (character, system, action) {
                transer();
                 system.setQuality("essence",character.qualities.essence+10 );
                
                
                parer("The cum sprays from your mouth directly into the tight warmth of the pussy keeping your trapped in it's tight embrace! Your knot throbs with each pulse of cum, getting larger and larger! The pressure is almost unimaginable! It's like a vice has closed down around the bulbous lower part of your body! As if to prove it host tugs back a few times experimentally making sure your knot had done it's job. Not a single drop of cum escapes as you fill up the space around you. ");
                oper(system, "./wait", ".......","./strange","Move around a bit enjoying the sensations");
              }, //function close
               "acum": function (character, system, action) {
                transer();
//                if(character.sandbox.host.host=="mark"){
//                  character.sandbox.cocktype="knot";
//                  
//                }else{
//                  
//                  character.sandbox.cocktype="normal";
//                  
//                }
                
                
                if(character.sandbox.host.cockknot){
                  //will be knotted
                  
                   parer("host suddenly gives one final strong thrust pushing you in as deep as he can! You feel a strong pressure below you right around your knot, It quickly squeezes around it. To you it feels like an eternity as you force the ring to stretch more and more! It couldn't have been more than a second but being so close to the action makes it unbearable! It all comes to an end as your knot slides in past its thickest part and your entire body, knot and all gets locked in! You don't even have time to enjoy the warm tightness before a torrent of cum suddenly shoots through you!");
                   oper(system, "./aknotted", "CUM!");
                }else{
                  //no knotting
                  parer("host suddenly gives one final strong thrust pushing you in as deep as he can! The ass around you suddenly clenches tightly around your lowest part, squeezing you almost possessively as you press at his prostate. Violating someones ass with your body, it feels so wrong but so good at the same time! You throb overwhelmed with a sudden wave of pleasure as your entire body thickens a bit making it all the tighter! You don't even have time to enjoy it before a torrent of cum suddenly shoots through you!");
                  oper(system, "./pullout", "CUM");
                }
               
                
                
                
            
              }, //function close
              "aknotted": function (character, system, action) {
                transer();
                
                system.setQuality("essence",character.qualities.essence+10 );
                
                parer("The cum sprays from your mouth directly into the tight warmth of this strangers ass, still keeping you trapped in it's tight hold! Your knot throbs with each pulse of cum, getting larger and larger! The pressure is almost unimaginable! It's like a vice has closed down around the bulbous lower part of your body! As if to prove it host tugs back a few times experimentally making sure your knot had done it's job. Not a single drop of cum escapes as you fill up the surrounding space. ");
                
                
                if(character.sandbox.reqwater){
                  //implies ws is on anyway
              
                  if(character.sandbox.forgotten&&character.sandbox.host.host=="bret"){
                    
                    oper(system, "./willwait", ".......","./willwsknot","Start feeling a different kind of pressure");
                  }else{
                    if(character.sandbox.pillroute){
                     oper(system, "./wait", ".......","./wsknot","You feel A different kind of pressure?");
                      
                    }else{
                       oper(system, "./wait", ".......","./strange","Move around a bit enjoying the sensations","./wsknot","You feel A different kind of pressure?");
                      
                    }
                      
                    
                  }
                  
                  
                }else{
                  
                   if(character.sandbox.pillroute||character.sandbox.forgotten){
                oper(system, "./wait", ".......");
                   }else{
                     
                      oper(system, "./wait", ".......","./strange","Move around a bit enjoying the sensations");
                   }
              
                  
                }
              
              
              
              }, //function close
                 "willwait": function (character, system, action) {
                transer();
         
                
                parer("All you can do is throb over and over exshausted from the hard fucking you were just put through. Your body still feels so sensitive, every twitch and pulse of the tight walls around you is intoxicating! The knot is where the real pressure is though, you can mostly relax a bit as the cum still spurts from your mouth. Nothing in your life compares to this feeling of being to stuck in such a warm tight embrace! Time seems to go on forever as you wait for your mind to clear and that knot to shrink. The way you are being squeezed feels so familiar and welcoming. Almost like a second home to you!");
                
                
                //oper(system, "", "");
                oper(system, "./pullout", "Wait for that knot to finally go down");
              }, //function close
              
              
              "wait": function (character, system, action) {
                transer();
         
                
                parer("All you can do is throb over and over exshausted from the hard fucking you were just put through. Your body still feels so sensitive, every twitch and pulse of the tight walls around you is intoxicating! The knot is where the real pressure is though, you can mostly relax a bit as the cum still spurts from your mouth. Nothing in your life compares to this feeling of being to stuck in such a warm tight embrace! Time seems to go on forever as you wait for your mind to clear and that knot to shrink.");
                
                 
                //oper(system, "", "");
                oper(system, "./pullout", "Wait for that knot to finally go down");
              }, //function close
                    "bwait": function (character, system, action) {
                transer();
                //oral sex knotted!
                
                parer("Every drop of cum you spurt into their throat is swallowed down! Each time their entire mouth closes more squeezing you and giving a very minor suckle! It's impressive how they are able to keep up! All you can do is throb over and over exshausted from the hard sucking. Every now and then they give a bit of a pull trying to free you from their mouth. Thankfully host as knows how to help position someone stuck on his knot to make breathing easy. Time seems to go on forever as you wait for your mind to clear and that knot to shrink.");
                
                
                //oper(system, "", "");
                oper(system, "./pullout", "Wait for that knot to finally go down");
              }, //function close
              "pulloutoral": function (character, system, action) {
            transer();
                             parer("Either their jaw opened a bit more or your knot finally shrunk, either way it slips out finally! The quickly pull away with a deep gasp and a few coughs. You are so lost in a flood of sensations you don't even register what they say to each other. Rather soon the cold air is replaced by the warmth of your owners sheath. ");
                      character.sandbox.erect=false;
           
            clother();
          oper(system, "evening/enter", "Get some rest....");
          }, //function close
              "strange": function (character, system, action) {
                transer();
                //oper(system, "", "");
                switch (character.sandbox.sextype) {
                  case "gay":
                    
                    parer("You recover surprisingly fast considering your entire body was just used to fuck up this strangers ass! Still cum is spurting from your mouth every few moments. Seems you will be stuck in here till your knot goes down, it is almost too much for your sensitive body to handle! You move around a bit, just the slight amount that being fully erect allows you. One direction manages to push your cock tip right against this person prostate, you can tell from the moan that you can hear even from inside him! As time goes by you manage to squirm just a bit more.");
          
                    
                
                    break;
                  case "straight":
                    
                       parer("You recover surprisingly fast considering your entire body was just used to mate with whoever this is! Still cum is spurting from your mouth every few moments. Seems you will be stuck in here till your knot goes down, it is almost too much for your sensitive body to handle! You move around a bit, just the slight amount that being fully erect allows you. Even your slight movements causes the vagina around you to spam in smaller secondary orgasms. You can hear exclamations of surpise as you just keep causing them with your little movements! As time goes by you manage to squirm just a bit more.");
                   
                    break;
                  case "oral":
                           parer("Every drop of cum you spurt into their throat is swallowed down! Each time their entire mouth closes more squeezing you and giving a very minor suckle! They really have no choice with you tied to their mouth, treating it just like a pussy for you to impregnate! Even after the last few drops of cum leak from your mouth you are still trapped inside! You feel them reposition a bit in a way that helps their neck into an easier angle to breath.");
                    
                    break;
                  default:
                }//End of RND switch
                
                 oper(system, "./pullout", "Keep wiggling till that knot shrinks");
                
                
                
                
               
              }, //function close
              "wsknot": function (character, system, action) {
                transer();
                if(character.sandbox.forgotten||character.sandbox.pillroute){
                
                  parer("You stay stuck in the tight ass for a concerninly long time, so long that you can almost feel the pressure in host's bladder! Even you can feel it distantly, and your knot just is not going down fast enough! You fidget and wiggle worried about it, even host seems to be a bit distracted. He pulls at you a few times unsuccessfully, your knot is just too strong! From outside you hear some words passed back and forth but nothing clear except for maybe host saying "+character.host.wsk);
                parer("Suddenly the urethra runing through your body is forced open by a river of piss! He just couldn't wait.... and all you can do is squirm as he fills the already tight orifice but this time with piss! All you can do is wince as it causes your body to practically shake with the intesity of the stream. It's much more intenst than in the bathroom as he has to fight the pressure too! The pressure alone is overwhelming as it passes through you and out your mouth!");
                  
                }else{
                   parer("You stay stuck in the tight ass for a concerninly long time, so long that you can almost feel the pressure in host's bladder! Even you can feel it distantly, and your knot just is not going down fast enough! You fidget and wiggle worried about it, even host seems to be a bit distracted. He pulls at you a few times unsuccessfully, your knot is just too strong! From outside you hear some words passed back and forth but nothing clear except for maybe host saying "+character.host.wsk);
                parer("Suddenly the urethra runing through your body is forced open by a river of piss! He just couldn't wait.... and all you can do is squirm as he fills the already tight orifice but this time with piss! All you can do is wince as it causes your body to practically shake with the intesity of the stream. It's much more intense than in the bathroom! The pressure alone is overwhelming as it passes through you and out your mouth!");
                  
                }
                
                
                oper(system, "./wsfin", "Distract yourself with something as you endure this");
              }, //function close 
                "willwsknot": function (character, system, action) {
                transer();
              var willwords="";
                switch (rnd(5)) {
                  case 1:
                    
                    
                    willwords="Hey I know that look... Don't you.... Dare... I am not blushing!";
                    
                    break;
                  case 2:
                     willwords="I think you just like marking me as your territory... ";
                    
                    break;
                  case 3:
                      willwords="What really? You know your not supposed to deliver liquids though the mail right?";
                    break;
                  case 4:
                    willwords="Come on fill me up! Oh no I didn't mean like that!";
                    break;
                  case 5:
                     willwords="Don't worry you know I love helping you out, besides there isn't a fire hydrant anywhere nearby!";
                    break;
                  default:
                }//End of RND switch
                  parer("You stay stuck in the tight ass for a concerninly long time, so long that you can almost feel the pressure in host's bladder! Even you can feel it distantly, and your knot just is not going down fast enough! You fidget and wiggle worried about it, even host seems to be a bit distracted. He pulls at you a few times unsuccessfully, your knot is just too strong! From outside you hear some words passed back and forth."+willwords);
                  
                  
                parer("Suddenly the urethra runing through your body is forced open by a river of piss! He just couldn't wait.... and all you can do is squirm as he fills the already tight orifice but this time with piss! All you can do is wince as it causes your body to practically shake with the intesity of the stream. It's much more intense than in the bathroom as he has to fight the pressure too! The pressure alone is overwhelming as it passes through you and out your mouth!");
  
                
                oper(system, "./wsfin", "Distract yourself with something as you endure this");
              }, //function close 
              "wsfin": function (character, system, action) {
                transer();
                  
                    //  NEED TO ADD ENJOY IT VERSION
                
              if (character.sandbox.enjoyit){
                               parer("You find yourself completely lost in what is happening, from your size it feels like gallons of piss are pumped up through your throat!  Finally the flow starts to slow and it just comes out in a few spurts. The walls around you actually feel a bit more open but the pressure is even greater! All the cum has been washed away now leaving you in a sea of piss still stuck in someones ass! The situation is so absurd and humiliating... even more so because you might actualy be enjoying it!");
                
                        
                        } else{
                           parer("Just a cock... just a cock...... You repeat to yourself a few times trying to distract yourself or maybe convince yourself this is perfectly normal. Finally the flow starts to slow and it just comes out in a few spurts. The walls around you actually feel a bit more open but the pressure is even greater now! All the cum has been washed away now leaving you in a sea of piss still stuck in someones ass! The situation is so absurd and humiliating.... ");
                
                
                        }
             
             
                
                parer("Your world is a wash with piss as the you suddenly feel the knot shift.... A shocking TUG is followed by a massive pressure around your knot and then FREEDOM!!  Piss and cum drips from your body as the opening you are extracted from gushes onto the ground! The air is cold and you almost feel the urge to get back inside that warmth! The last of the piss leaks from your mouth as host reaches down to clean you off. You are so lost in a flood of sensations you don't even register what they say to each other. Rather soon the cold air is replaced by the warmth of your owners sheath. ");
            character.sandbox.erect=false;
           
            clother();
                    
          oper(system, "evening/enter", "Get some rest....");
              }, //function close
              "pullout": function (character, system, action) {
                transer();
                system.setQuality("essence",character.qualities.essence+10 );
                switch (character.sandbox.sextype) {
                  case "gay":
                    
                    parer("Your world is a wash with cum as the tight ass around you suddenly slides away! Cum drips from your body and the opening you are extracted from before it starts tightening. The air is cold and you almost feel the urge to get back inside that warmth! The last of the cum leaks from your mouth as host reaches down to clean you off. You are so lost in a flood of sensations you don't even register what they say to each other. Rather soon the cold air is replaced by the warmth of your owners sheath. ");
          
                    
                    
                    break;
                  case "straight":
                    
                    
                         parer("Your world is a wash with cum as the vagina around you suddenly slides away! Cum drips from your body and the opneing you are extracted from. The air is cold and you almost feel the urge to get back inside that warmth! The last of the cum leaks from your mouth as host reaches down to clean you off. You are so lost in a flood of sensations you don't even register what they say to each other. Rather soon the cold air is replaced by the warmth of your owners sheath. ");
          
                    
                    break;
                  case "oral":
                    parer("Every drop of cum you spurt into their throat is swallowed down! Each time their entire mouth closes more squeezing you and giving a very minor suckle! It's impressive how they are able to keep up! The last of the cum leaks from your mouth as they slide you out, giving one last strong suck to get the last of your precious cum! You are so lost in a flood of sensations you don't even register what they say to each other. Rather soon the cold air is replaced by the warmth of your owners sheath. ");
                    
                    break;
                  default:
                }//End of RND switch
                  character.sandbox.erect=false;
           
            clother();
                
                           
                oper(system, "evening/enter", "Get some rest....");
              }, //function close
              "wiggle": function (character, system, action) {
                transer();
                
                character.sandbox.sextalk=true;
                system.setQuality("harmony",character.qualities.harmony-1 );
               
                
                parer("You wiggle about in his sheath unable to do anything to change his mind. You are his cock and this is sort of your job. In a way this was sort of inevitable. And having a moving cock certainly hasn't lowered his libido any... You may actually end up seeing a LOT of action!");
                oper(system, "evening/enter", "Continue on trying not to think about how you will be used");
              }, //function close
              "wiggle2": function (character, system, action) {
         transer();
                character.sandbox.sextalk=true;
                
                          system.setQuality("harmony",character.qualities.harmony+1 );
                
                parer("You throb with excitment at the idea of getting to be USED like a cock! You can only imagine what having sex is going to be like, masturbation feels great but.... SEX!? It also fills you with a bit of pride knowing host is comfortable with you enough as his dick to be willing to show you off! It is also a bit scary realizing you will be INSIDE someone... but it also makes it all the more exciting!");
                oper(system, "evening/enter", "Continue on wondering who you will get to fuck first!");
              }, //function close
             "": function (character, system, action) {
            transer();
            parer("");
            oper(system, "", "");
          } //function close
            }//actions close
          }//options close
  )
};