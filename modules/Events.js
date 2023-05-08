undum.game.events = {
  events: new undum.SimpleSituation(
          "", {
            actions: {
              "enter": function (character, system, action) {
                transer();
                //sent from work, 3 options 
                
                var delh1=[];
                var delh2=[];
                var delh3=[];
                
                console.log("Entered events looking for problems " + character.sandbox.eventholder);
                switch (character.sandbox.eventholder) {
                  case "plugged":
                            delh1= [
                      "You try to relax in his sheath and do your best to ignore the giant plug lodged inside you.",
                      "It's going to be a long day especially if the darn plug stays where it is.",
                      "Its only for a few hours... After spending all night plugged a few more hours shouldn't be too bad."
                    ];
                    //delh2 here should be fine except for bret
                    if(character.sandbox.limits.cantalk){
                             delh2 = [   "With your mouth still intact you end up spending an embarrassing amount of the day just suckling on the plug with nothing better to do.",
                      "It's strange how your jaw never seem to get sore with the plug holding it open constantly, though you do worry about how it might feel after he removes it.",
                      "You play with the plug a bit during the day, licking over the shape of it sticking out of your mouth. Concerningly it actually makes the day go by a bit easier with something to keep you busy."];
                      
                    }else{
                         delh2 = [
                      "Normally your body squishes easily with host's movements but you end up noticing them even more now due to the plug forcing you to stay straight.",
                      "Every now and then the ring of the plug clinks about causing host to give it and you an adjusting rub.",
                      "You can't help but wonder if host is as distracted by the plug as you are. He feels the same things you do, but it's a probably worse for you with it literally stretching your slit slit of a mouth!."
                    ];
                    }
                 
                    if(character.sandbox.limits.hasarms){
                                  delh3=[
                      "You can't even fall asleep with the darn thing inside you! Then again maybe you wouldn't want to as it would mean you had gotten used to the feeling!!",
                      "With arms you can't help but spend some of the day trying to push the plug out! You notice host snicker a few times as he feels your futile attempts. He couldn't possibly leave it in you indeffinitely.... right?",
                      "You keep yourself occupied thinking about how silly this all is. Trapped inside of hosts pants, stuffed in his sheath, with a metal tube plug down your throat!! If you ever see that uncle of yours again... Not only would that be rather awkward but also impossible if host decides he likes you better plugged!"];
                    
                      
                    }else{
                             delh3=[
                      "You can't even fall asleep with the darn thing inside you! Not only does it feel weird as a person to have something holding their throat open but even a cock would find this distressing!",
                      "Without arms it seems impossible to even hope to pull the plug out, and it seems more than capable of staying stuck though the entire day. He couldn't possibly just leave it in you indeffinitely.... right?",
                      "You keep yourself occupied thinking about how silly this all is. Trapped inside of hosts pants, stuffed in his sheath, with a metal tube plug down your uretha of a throat!! If you ever see that uncle of yours again... well you won't be able to do much if you are still a cock. That would be an awkward conversation...."];
                    
                    }
              
                  
                  
                  break;
                  case "caged":
                         delh1= [
                      "You decide to just try to wait it out in the cage. Maybe even get some sleep. It's restricive in the device but sort of comfortable in it's own way..",
                      "It's going to be a long day but you are going to do your best to wait it out obediently in the cage. You really don't want to give host any reason to keep you in it longer!",
                      "Its only for a few hours, it can't be that bad to just wait it out till he gets home and hopefully unlocks your cage. If he unlocks it..."
                    ];
                    //delh2 here should be fine except for bret
                    delh2 = [
                      "The day continues on as you try to pass the time. All you really can do is think about how wrong it is to lock up a cock!",
                      "You suddenly jolt awake! Its a bit of a shock realizing you must have nodded off! You feel the warm embrace of your cages rings constantly holding you. It's worrying to think you might miss the feel of them some day.",
                      "You can't help but wonder if anyone notices the unusually large bulge in hosts pants. It might be a bit awkward explaining to anyone that notices it."
                    ];
                     delh3=[
                      "Time seems to pass more quickly now, either that or you fell asleep again. A slight adjustment from host to the cage wakes you up a bit. If you keep this up you are going to be awake all night long!",
                      "You try to pay a bit more attention to anything around you desperate for some sort of stimulation... Anything other than the warm steel ring!",
                      "You keep yourself occupied thinking about how silly this all is. Trapped inside of hosts pants, stuffed in his sheath, locked in a chastity cage! If you ever see that uncle of yours again... well you won't be able to do much if you are still a cock. That would be an awkward conversation...."];
                    
                    break;
                case "alerttease":
                    delh1= [
                      "You are not going to sit here for hours without having at least a little fun! You don't want him to discover you but...",
                      "How is a cock supposed to stay still for hours when every nudge and bump feels so good? Just on instinct you end up throbbing in his sheath!",
                      "You last about 3 minutes before you get bored and you have to find a way to entertain yourself.. at hosts expense."
                    ];
                   
                    delh2 = [
                     "While thinking about how nice this is you end up rubbing against the inside of his sheath. host is clearly distracted letting out a distracted moan of confusion!",
                      "While thinking about how nice this is you end up rubbing against the inside of his sheath. host lets out a grumble and moves around trying to adjust you into a more comfortable position!",
                      "You tense your whole body trying not to move, accidentally throbbing instead! Already you can feel yourself getting harder. host seems very confused, whispering q1What the heck is going on down there?q1 He says starting to get suspicous"
                    ];
                    //alt = 
                
                     delh3=[
                      "It has been fun teasing host but you can feel a stiffness fill your body making it much harder to move but at the same time forces you slowly out of hosts's sheath! You might have taken it a bit too far as host is now desperately trying to avoid attracting anyones attention!",
                      "Tingles of pleasure spread through your body as host does his best to hide the growing erection between his legs! His tight sheath slides delightfully past your body as more and more of you extends out of it. You are really bad at hiding....",
                     "host lets out a quiet grumble as you get expelled from his warm sheath! You have gotten horny and you can't stop now! q1Why the heck am I getting hard all of a sudden!q1 host says desperately trying to think clean throughts."];
                
                break;
                                  case "enjoyout": 
                    delh1= [
                      "You decide to just enjoy it. Swaying around due to the fact you are hard and exposed for most of the time..",
                      "It's going to be a long day but you are going to do your best to enjoy every second of it.",
                      "Its only for a few hours, but it's a few hours you can spend bobbing around free of his sheath."
                    ];
                    //delh2 here should be fine except for bret
                    delh2 = [
                      "The day continues on as you try to pass the time. It is almost a constant haze due being constantly teased!",
                      "host gives you a nice rub just to make sure you stay nice and hard! His ability to keep you constantly aroused for hours is impressive!",
                      "You pass the time thinking about how long you intend to stay like this. But hosts occasional touch reassures you this is perfectly fine."
                    ];
                    
                     delh3=[
                      "Time seems to pass more quickly now, as if the constant stimulation is making your mind melt.",
                      "You are practically lost in the constant sexual haze!",
                      "You keep yourself occupied thinking about how silly this all is. Living as a cock and finding how easily you have taken to it!"];
                    break;
                    case "relaxout":
                    //character.sandbox.mind++;
                 delh1= [
                    "The line between person and cock is really starting to blur for you. It is getting so easy and just let yourself be a cock.",
                    "Even if you were a person before, you are a cock now and there is no denying that. Your natural cock instincts make it easy to pass the time.", 
                    "You are host's cock, sure you have memories of a person... You have always been host's cock, you just have a bunch of memories from someone else now too."
                  ];
                  delh2 = [
                      "You can actually feel a sort of cock instincts now. Your body reacting to host without even needing to think about it. Shifting yourself when he needs to adjust you.",
                      "It just feels so right to relax inside host's pants, right where you belong. It is almost a low euphoria knowing you are being a good bodypart for host.",
                      "Acting like a cock is so easy now, it is strange to think it ever felt unusual to you. In some ways you almost don't know what you would do with yourself if you had to make decisions again."
                    ];
                    delh3=[
                      "You really start to forget you were every anything but a sensitive throbbing piece of host's anatomy. This is just who you are.... You haven't forgotten those other memories, they just are not all that important.",
                      "It really sinks in for a moment what you are. You are hosts cock. Even if you were a person once, what you are is undeniable. Your purpose, destiny, reason for exisisting is for his pleasure now.",
                      "You relax into the mindeset of being a cock so much that it almost feels too real. For a while you almost forget how to move just letting hosts body have full control over you..."];
                    break;
                    case "instincts":
                    //character.sandbox.mind++;
                 delh1= [
                    "The line between person and cock is really starting to blur for you. It is getting so easy and just let yourself be a cock.",
                    "Even if you were a person before, you are a cock now and there is no denying that. Your natural cock instincts make it easy to pass the time.", 
                    "You are host's cock, sure you have memories of a person... You have always been host's cock, you just have a bunch of memories from someone else now too."
                  ];
                  delh2 = [
                      "You can actually feel a sort of cock instincts now. Your body reacting to host without even needing to think about it. Shifting yourself when he needs to adjust you.",
                      "It just feels so right to relax inside host's pants, right where you belong. It is almost a low euphoria knowing you are being a good bodypart for host.",
                      "Acting like a cock is so easy now, it is strange to think it ever felt unusual to you. In some ways you almost don't know what you would do with yourself if you had to make decisions again."
                    ];
                    delh3=[
                      "You really start to forget you were every anything but a sensitive throbbing piece of host's anatomy. This is just who you are.... You haven't forgotten those other memories, they just are not all that important.",
                      "It really sinks in for a moment what you are. You are hosts cock. Even if you were a person once, what you are is undeniable. Your purpose, destiny, reason for exisisting is for his pleasure now.",
                      "You relax into the mindeset of being a cock so much that it almost feels too real. For a while you almost forget how to move just letting hosts body have full control over you..."];
                    break;
                    case "friendly":
                   delh1= [
                      "Spending the day between someones legs is no fun if you can't at least tease them some. Can't let him forget you are down here.",
                      "You don't intend to spend the day making host horny but it would still be fun to tease him a bit through the day.",
                      "As the day starts you wiggle around and move a good but just to keep active, not so much to make him horny but enough to make it impossible to just ignore you."
                    ];
                   
                    delh2 = [
                     ((character.sandbox.limits.hasarms)?("Thankfully you still have arms so you are able to pull yourself out a bit. host has to adjust around spreading his legs to give you more room."):("You move around enough that host has to eventually change his position to give you more room to move around.")),
                      ((character.sandbox.limits.hasarms)?("host drops his phone into his pants for you part way through the day, it is huge but at least you can entertain yourself with mobile games."):("host opens his pants and drops in a set of earbud headphones for you, it's nice getting to listen to some music to pass the time!")),
                    ((character.sandbox.limits.hasarms)?("You manage to work yourself out of hosts pants enough to actually start working the zipper down! q1 Hey cut that out...q1 He says pulling his zipper back up."):("q1No one around for the moment...  Hope you are doing ok in there.q1 He says giving you a rub."))
                    ];
                    if(character.sandbox.limits.cantalk){
                        delh3=[
                      "The day is just about over as you do your best to stay entertained, host rubs you occasionally even taking time to talk with you every now and then when no one is around.",
                     "You actually spend a suprising amount of the day talking with host. It has been a slow enough day that no one was around to overhear you.",
                     "The day is long but it goes by faster thanks to getting to talk to host when no one is around. It actually feels like you are helping him get through the long day as much as it is helping you."];
                    }else{
                        delh3=[
                      "You can't talk with host but that doesn't stop him from being able to talk with you. Occasionally he will ask you a question letting you answer yes or no with a throb or wiggle.",
                     "With no one around host actually opens up his clothing letting you out for a bit of fresh air. It only lasts a few moments before you get banished back into your cloth prision.",
                     "q1Alright, almost done for the day... Just hang in.... OH No no I was just talking to myself!q1 You hear him say as someone unexpectedly happens to wander past."];
                    }
                   
                //parer("Its already becoming boring only 10 minutes later. You try to come up with ways to pass the timebut it eventually devolves into slowly arousing yourself. alt host is not pleased. When you start to get erect he grabs you tightly in panic till you got soft again with a grumbleing \"Stop it down there! I am busy!\". Eventually getting you to calm down and he returns to what he was doing.");
                    break;
                  case "wait":
                   //all three hosts end up here including in bret's harness. No others allowed at that level of TF. 
                   //Maybe make a special set for just brets harness to incresse the text options.
                          
                    delh1= [
                      "You decide to just try to wait it out. Maybe even get some sleep. It is certainly warm enough and comfortable in its own odd way.",
                      "It's going to be a long day but you are going to do your best to wait it out obediently. You really don't want to cause any trouble for host. Not to mention the danger of yourself getting found out!",
                      "Its only for a few hours, it can't be that bad to just wait it out. Might get a bit boring. But there really isn't much else to do other than wait."
                    ];
                    //delh2 here should be fine except for bret
                    delh2 = [
                      "The day continues on as you try to pass the time staying as quiet as you can. There has to be some way to deal with this and not be so bored! Its not like you could smuggle a handheld game console in here! Not that they make one so small...",
                      "You suddenly jolt awake! Its a bit of a shock realizing you must have nodded off! You can feel the distant pulse of host's blood through you, normally you don't even notice it. Its just so calming in it's own way. Rather surprising you don't fall asleep to it more often.",
                      "It might be worth it to ask host to bring you a set of headphones to listen to next time. It would be way easier to spend this time if you had some music to listen to! Though it might be a bit awkward explaining to anyone that noticed him. Earpods, might work though."
                    ];
                     delh3=[
                      "Time seems to pass more quickly now, either that or you fell asleep again. A slight adjustment from host wakes you up a bit. If you keep this up you are going to be awake all night long! Then there really will be nothing to do but wiggle around helplessly as host sleeps.",
                      "You try to pay a bit more attention to anything around you desperate for some sort of stimulation... but not too much. The last thing you want is to cause host to suddenly get hard in the middle of the day.",
                      "You keep yourself occupied thinking about how silly this all is. Trapped inside of hosts pants, as his cock. If you ever see that uncle of yours again... well you won't be able to do much if you are still a cock. That would be an awkward conversation...."];
                    break;
                  case "horny":
                   delh1= [
                      "You decide not to make things a bit more interesting, no way you are going to be turned into a cock and expect to act like one!",
                      "How is a cock supposed to stay still for hours when every nudge and bump feels so good? You figure a bit of teasing won't hurt much",
                      "You last about 3 minutes before you get bored and decide to enjoy your body a bit."
                    ];
                   
                    delh2 = [
                     (character.sandbox.limits.hasarms)? "Despite being a bit hard to move you manage to caress your sensitive body. host is clearly distracted even to the point of moaning softly!" : "Its a bit hard without arms but you manage to wiggle around rubbing against your surroundings. host is clearly distracted even to the point of moaning softly!",
                      (character.sandbox.limits.hasarms)? "You waste no time in sliding your hands up and down your senseitve body! host lets out a grumble and moves around trying to adjust you into a more comfortable position!" : "Its a bit hard without arms but you manage to wiggle around rubbing against your surroundings. host lets out a grumble and moves around trying to adjust you into a more comfortable position!",
                      "You tense your whole body and wiggle around as best you can, you even manage to throb some! Already you can feel yourself getting harder. host isn't pleased, whispering q1Hey stop it down there!q1 It only serves to encourage you."
                    ];
                    //alt = 
                    var underwearadd=".";
                    
                    if(character.sandbox.underwear[0]){
                      
                      underwearadd=" as you press against the"+character.sandbox.underwear[2]+".";
                    }
                     delh3=[
                      (character.sandbox.limits.insheath>0)?
                      "All of your squirming has finally gotten host to start getting hard! You can feel a stiffness fill your body making it much harder to move but at the same time forces you slowly out of hosts's sheath! Its nice to finally get free even if host is now desperately trying to avoid attracting anyones attention"+underwearadd+"!":
                      "",
                     (character.sandbox.limits.insheath>0)?
                      "Tingles of pleasure spread through your body as host does his best to hide the growing erection between his legs! His tight sheath slides delightfully past your body as more and more of you extends out of it. You feel so stiff now and desperate for attention"+underwearadd:
                      "",
                      (character.sandbox.limits.insheath>0)?
                      "host lets out a quiet grumble as you make your escape from his imprisoning sheath! You are horny and it can't stop you now! q1Nooo, what if someone sees us?! I can't play with you right now!q1 host says desperately trying to ignore you"+underwearadd:
                      ""];
                //parer("Its already becoming boring only 10 minutes later. You try to come up with ways to pass the timebut it eventually devolves into slowly arousing yourself. alt host is not pleased. When you start to get erect he grabs you tightly in panic till you got soft again with a grumbleing \"Stop it down there! I am busy!\". Eventually getting you to calm down and he returns to what he was doing.");
                    break;
                    
                  case "meditate":
                    character.sandbox.mind++;
                 delh1= [
                    "As sort of a passing thought, you decide to play the part and really pretend to be a cock. Think like a cock would, they are not always hard and horny after all. Sometimes they behave for hours all soft and squishy",
                    "Its embarrassing but you take a few minutes sort of role playing actually being just a normal cock. Getting into the mind set of it. Maybe meditate on it like a monk sitting under a waterfall.", 
                    "Normal cocks don't get bored, but they also don't tend to think much. You start imagining what a real cock mindset would be like. What would a cock think about during the many hours it has to itself?"
                  ];
                  delh2 = [
                      "You start feeling more focused, just imagining yourself as a cock, a simple shaft belonging to host. Just passing your time between his legs right where you belong. Where you always have been.",
                      "It gets easier letting time pass, just clearing your mind of all other thoughts. Yet as you sink into this state of mind other thoughts seem to fill the void. Calming peaceful thoughts. How nice being rubbed is, enjoying the rocking motion whenever host moves, thinking about which pair of host's underwear is your favorite.",
                      "Meditation seems to be a good way spend your time, something about the transformation seems to be making it easier. It's so easy being a penis, no commitments, no worries. Just waiting and yearning for the touch of your owner."
                    ];
                    delh3=[
                      "Your thoughts drift back thinking of all the good times you have had as host's cock. All the times though the years he has teased and played with you. It used to be way more often but you are patient with your owner. You feel a throb of comfort pass through you as host clenches slightly.",
                      "As time passes you occasionally wiggle and move around. It's so strange being able to move around like this, so much of your life spent just waiting and throbbing for your owner. host clenches slighty as you enjoy being able to stretch on your own.",
                      "For some reason old memories come back to you. The first time you rode a bike.... The first time you went camping... The first time host masturbated.... That last one was so long ago. He was as shocked as you were! But growing up it became such a fun hobby you and he could enjoy!"];
                    break;
                  case "lost":
                    
                    break;
                  case "alert":
                  delh1= [
                      "You are not going to sit here for hours without trying something! No way you are going to be turned into a cock and just accept it!",
                      "How is a cock supposed to stay still for hours when every nudge and bump feels so good? Maybe he will notice you if you are just CONSTANTLY hard!",
                      "You last about 3 minutes before you get bored and you have to find a way to get host to notice you."
                    ];
                   
                    delh2 = [
                     "Its a bit hard without arms but you manage to wiggle around rubbing against your surroundings. host is clearly distracted letting out a distracted moan of confusion!",
                      "Its a bit hard without arms but you manage to wiggle around rubbing against your surroundings. host lets out a grumble and moves around trying to adjust you into a more comfortable position!",
                      "You tense your whole body and wiggle around as best you can, you even manage to throb some! Already you can feel yourself getting harder. host seems very confused, whispering q1What the heck is going on! My... cock....mmmm q1"
                    ];
                    //alt = 
                
                     delh3=[
                      "All of your squirming has finally gotten host to start getting hard! You can feel a stiffness fill your body making it much harder to move but at the same time forces you slowly out of hosts's sheath! Its nice to finally get free even if host is now desperately trying to avoid attracting anyones attention!",
                      "Tingles of pleasure spread through your body as host does his best to hide the growing erection between his legs! His tight sheath slides delightfully past your body as more and more of you extends out of it. You feel so stiff now and desperate for attention.",
                     "host lets out a quiet grumble as you make your escape from his imprisoning sheath! You are horny and it can't stop you now! q1Why the heck am I getting hard all of a sudden!q1 host says desperately trying to think clean throughts."];
                   
                       if(character.sandbox.host.host=="dari"){
                        delh3=[
                      "It is so hard to squirm when your body is constantly hard! Half the time you spend stuck in some tight hole! In the end all you manage is to make the sex extra special for the recipient! Dari hardly even notices your attempts!",
                      "Tingles of pleasure spread through your body as host uses you! You are constantly out in the open but every twinge or movement just feels like a normal twitch of his cock! You feel so stiff now and desperate for attention between his shifts!",
                     "While Dari is taking a bit of a break you manged to stay hard not even getting pulled back into his imprisoning sheath! You are still horny and it can't stop you now! q1Ugh I am even more horny than usual today... The next person better get in here soonq1 host says desperately trying not to masturbate you."];
                      
                    }
                  break;
                case "enjoy": 
                    delh1= [
                      "You decide to just enjoy it. Maybe even get some sleep. It is certainly warm enough and comfortable in its own odd way.",
                      "It's going to be a long day but you are going to do your best to enjoy every second of it. You really don't want to cause any trouble for host. Not to mention the danger of yourself getting found out!",
                      "Its only for a few hours, but it's a few hours you can spend relaxing in warmth and comfort. Cock's really have it good."
                    ];
                    //delh2 here should be fine except for bret
                    delh2 = [
                      "The day continues on as you try to pass the time. It is a tad boring but it's not like you could smuggle a handheld game console in here or even use one...",
                      "You suddenly jolt awake! It's a bit of a shock realizing where you are, you must have nodded off... You can feel the distant pulse of host's blood through you, normally you don't even notice it. Its just so calming in it's own way. Rather surprising you don't fall asleep to it more often.",
                      "You pass the time thinking about how long you intend to stay like this. You can't really stay as a cock forever, for sure you will get tired of it someday. It's not like you can get addicted to it or anything.... right?"
                    ];
                    
                     delh3=[
                      "Time seems to pass more quickly now, either that or you fell asleep again. A slight adjustment from host wakes you up a bit. If you keep this up you are going to be awake all night long! Then there really will be nothing to do but wiggle around helplessly as host sleeps.",
                      "You try to pay a bit more attention to anything around you desperate for some sort of stimulation... but not too much. The last thing you want is to cause host to suddenly get hard in the middle of the day.",
                      "You keep yourself occupied thinking about how silly this all is. Trapped inside of hosts pants, as his cock. If you ever see that uncle of yours again... well you won't be able to do much if you are still a cock. That would be an awkward conversation...."];
                    break;
                  default:
                    console.log("Switch broke ");
                  
                }//End of RND switch
                
                if(character.sandbox.permaplugged){
                  
               if(character.sandbox.limits.cantalk){
                             delh2 = [   "With your mouth still intact you end up spending an embarrassing amount of the day just suckling on the plug with nothing better to do.",
                      "It's strange how your jaw never seem to get sore with the plug holding it open constantly, though you do worry about how it might feel after he removes it.",
                      "You play with the plug a bit during the day, licking over the shape of it sticking out of your mouth. Concerningly it actually makes the day go by a bit easier with something to keep you busy."];
                      
                    }else{
                         delh2 = [
                      "Normally your body squishes easily with host's movements but you end up noticing them even more now due to the plug forcing you to stay straight.",
                      "Every now and then the ring of the plug clinks about causing host to give it and you an adjusting rub.",
                      "You can't help but wonder if host is as distracted by the plug as you are. He feels the same things you do, but it's a probably worse for you with it literally stretching your slit slit of a mouth!."
                    ];
                    }
                 
                  
                }
                if(character.sandbox.permalock){
                  
                      delh2 = [
                      "The day continues on as you try to pass the time. All you really can do is think about how wrong it is to lock up a cock!",
                      "You suddenly jolt awake! Its a bit of a shock realizing you must have nodded off! You feel the warm embrace of your cages rings constantly holding you. It's worrying to think you might miss the feel of them some day.",
                      "You can't help but wonder if anyone notices the unusually large bulge in hosts pants. It might be a bit awkward explaining to anyone that notices it."
                    ];
                }
                
                
                var worky;
                if(character.sandbox.stealth){
                  
                   worky=character.host.workstealth;
                  
                }else{
                    worky=character.host.work;
                    
                          if(character.sandbox.host.host=="dari"&&character.qualities.ctf==100&&character.sandbox.sextalk){
                  worky=[ "host quickly gets to work shoving you into the first hole presented! You hardly have time to look at who it is before you get shoved inside! The lube they use tingles a bit but soon you are far too busy to care!",
      "The day is blurry jumble of holes you get shoved into! Sometimes cumming into them leaving you exhausted and dazed only to get used on the next one! The lynx has some unreal stamina!","Toward the end of the day host changes it up and swaps his booth to sub. Sitting down and pushing his own butt into the hole. You finally get to relax a bit as he takes it up the ass happily stroking you for the rest of his shift!"];
                  }
                
                    
                    
                 if (character.qualities.ctf < 40&&character.sandbox.host.host=="bret") {
                   worky=character.host.hwork;
                 }
                  
                }
              if(character.sandbox.forgotten){
                
                worky= character.host.workforgotten;
              }
                    if(character.sandbox.pillroute){
                
                worky= character.host.workpills;
              }
                if(character.sandbox.partial){
                  
                  
                  if(character.qualities.ctf<40||character.sandbox.host.host=="bret"||character.sandbox.ch2){
                    
                    worky= character.host.workpartial;
                  }else{
                    
                    
                     worky= character.host.workpartialsheath;
                    
                  }
                  
                }

                
                
                if(character.sandbox.ringreallylost&&!character.sandbox.ringgone){
                  character.sandbox.daysringreallylost++;
                }
                
                
                var eventmid="./halfway2";
                if (character.sandbox.ws&&(rnd()>5||character.sandbox.reqwater)){
                  //sending to the bathroom encounter
                  
                  eventmid="./restroom2";
                }
                //var styler="opacity:.01";
                var styler="color:black";
                
                var uhoh=false;
                if(character.sandbox.ringstuck&&(rnd(10)>8)&&!character.sandbox.perma){
                  uhoh=true;
                  eventmid="./ohno";
                }
          
                if(character.sandbox.runedo.horny){
                  character.sandbox.eveningtease=true;
                  worky[1]="host seems to spend a suprising amount of time rubbing you in the middle of the day. You only start getting hard for a moments before he stops himself each time";
                  
                }
                
                parer(delh1[rnd(3)-1],styler);
                
                if(!character.sandbox.forgotten&&!character.sandbox.partial){
                  //NOT forgotten and NOT partial 
                  //normal route
                   delay([
               
                 [worky[0],styler],
                 [delh2[rnd(3)-1],styler],
                 [worky[1],styler],
                 
                 [delh3[rnd(3)-1],styler],
                 [((uhoh)?("You start to feel something odd as host goes about their day.... A tightness around your head. Before you have time to do anything about it... YOU FEEL THE RING FALL OFF! host doesn't even notice as it hits the ground!"):(worky[2])),styler]
                 
                 
                 ,
                 eventmid
                       ],character.sandbox.eventspeed);
                  
                }else{
                  if(character.sandbox.partial){
                   
                   
                                   if(character.sandbox.host.host=="abyss"&&character.sandbox.partial&&!character.sandbox.limits.hasarms){
                  
                  worky=character.host.work;
                  
                  worky[2]=[character.host.workpartial[2][0],character.host.workpartial[2][0],character.host.workpartial[2][2]];
                }
                   
                   
                      delay([
               
                 [worky[0],styler],
                 [delh2[rnd(3)-1],styler],
                 [worky[1],styler],
                 
                 [delh3[rnd(3)-1],styler],
                 [(worky[2][rnd(3)-1]),styler]
                 
                 
                 ,
                 "./halfwaypartial"
                       ],character.sandbox.eventspeed);
                  
                  
                }else{
                  //forgotten route
                  if (character.sandbox.host.host=="keagen"&&character.sandbox.forgottenstealth) {
                   worky=[
    "Most of the day is spent walking around places, he occasionally chats to people all of which sound semi important. ",
    "At one point you here him explaining something about arcane stuff, something about keeping artifacts sealed and how dangerous they can be.",
    [
      "There is a mention of a magic ring as Keagen talks to someone q1Yea I came across it by chance. My first rune scares came from it. Errr no I can't show them off, they are umm on my penis.q1 He says with a bit of embaressment",
      "Someone is asking him if its safe or something.... He just laughs them off q1Don't worry my err... I have a massive essense reservoir if anything goes wrongq1 He says.",
      "Keagen is talking with someone and you catch a metnion of runes, q1Still haven't figured out what happened to the guy that give me the ring. Never saw him again after that day. Really weirdq1 He says with shrug"]];
                }
                  
                  delay([
               
                 [worky[0],styler],
                 [delh2[rnd(3)-1],styler],
                 [worky[1],styler],
                 
                 [delh3[rnd(3)-1],styler],
                 [(worky[2][rnd(3)-1]),styler]
                 
                 
                 ,
                 eventmid
                       ],character.sandbox.eventspeed);
                  
                  
                  
                }
                    
                  }
                 
               
                
                
                
                
              }, //function close
                "halfwaypartial": function (character, system, action) {
                transer();
                              
//                
//                oper(system, "./", "Wave to them","","","");
//              
//                
                system.doLink("./halfwaypartialend");
              }, //function close
              "halfwaypartialend": function (character, system, action) {
                transer();
                              
                
                
                   var eventmid="./halfway2";
                if (character.sandbox.ws&&(rnd()>5||character.sandbox.reqwater)){
                  //sending to the bathroom encounter
                  
                  eventmid="./restroom2";
                }
                
                system.doLink(eventmid);
              }, //function close
              "halfway2": function (character, system, action) {
               //restoom or work stuff leads to here this is the true half way
               transer();
               
           
               if(character.sandbox.buyringplz&&rnd()>8){
                 
                 parer(character.host.gotringback);

                          character.sandbox.dayringlost = 999;
         character.sandbox.ring = false;
         character.sandbox.ringlost = false;
              character.sandbox.ringreallylost=false;
         character.sandbox.ringcheck = true;
              character.sandbox.buyringplz=false;
              character.sandbox.ringatpawn=false;
              
         
              oper(system, "./halfway", "You have the ring back!");
               }else if (((character.sandbox.ringreallylost&&
                   character.sandbox.daysringreallylost>2)&&
                   ((rnd(20) < (character.qualities.day - character.sandbox.dayringlost))||
                   character.sandbox.ringhelp)) &&
                   !character.sandbox.ringgone&&!character.sandbox.ringatpawn) {
                 
                 if(character.sandbox.perma){
                      character.sandbox.ringgone=true;
                character.sandbox.ringgonereason="pawnlost";
                   character.sandbox.ringatpawn=false;
                   parer("You hear host talking with someone for a few minutes and then wandering away to some where quiet... q1You will never believe this... Turns out the pawn shop sold a ring just like yours the other day! Looks like you are stuck down there.... for good... Not that you mind!q1 He says letting the gravity of the situation sink in! It isn't very likely you could track down who got it... You probably are never going to see that ring again... Not that he would let you wear it again anyway, already having decided to stay a cock forever...");
                     oper(system, "./halfway", "Maybe someone nice bought it");
                 }else{
                       parer("host is just wandering as far as you can tell through town when you hear him make a rather sudden suprise gasp. There is an exchange of questions and soon he has rushed to a bathroom stall....");
               parer(character.host.foundringpawn);
               
               character.sandbox.ringatpawn=true;
               oper(system, "./halfway", "At least you know where it is....");
                   
                 }
      
               }else if((!character.sandbox.perma)&&character.sandbox.ringatpawn&&!character.sandbox.buyringplz){
                 character.sandbox.ringatpawnnum++;
                 
                 if(character.sandbox.ringatpawnnum>8){
                   
 
                   parer("You hear host talking with someone for a few minutes and then wandering away to some where quiet... q1I just went to check on the ring... The ring is gone. Looks like you are stuck down there.... for good this time...q1 He says letting the gravity of the situation sink in! It isn't very likely you could track down who got it... You probably are never going to see that ring again... and with it any chances of turning back. You really are going to be a cock forever!");
                character.sandbox.ringgone=true;
                character.sandbox.ringgonereason="pawnlost";
                   character.sandbox.ringatpawn=false;
                 }
                  oper(system, "./halfway", "Continue on with the day....");
               }else{
                // parer("(plugged and caged content ends here for this patch)");
                 oper(system, "./halfway", "Continue on with the day....");
               }
         
          
                
              }, //function close
              "restroom2": function (character, system, action) {
                  //parer("(plugged caged, and content ends here for this patch)");
                oper(system, "./restroom", "Continue on with the day....");
              }, //function close
              "halfway": function (character, system, action) {
                transer();
                character.sandbox.clothed=true;
                clother();



     if(character.sandbox.eventholder=="horny") {
                  character.sandbox.eveningtease = true;

                }
                if (!character.sandbox.stealth) {
                  //not stealth route
                  
                  
                  /*
                   
                   
Going to see a movie
house check
vist from an old friend

fixing the sink


                   
                   
                   
                   */
                  if (character.sandbox.funvalue < 4&&false) {
                    switch (character.sandbox.funvalue) {
                      case 1:
                       // going for a swim
                        
                        
                        
                        break;
                      case 2:
                        //People come to door asking about player
                        
                        
                        
                        
                        break;
                      case 3:
                        //Setting off a metal detector!
                        
                        
                        
                        
                        break;
                  
                      default:
                    }//End of RND switch
                    


                  } else {
                    //notstealth
                    var hwlinker="";
                    hwlinker="./halfwayevents";
                   if(character.sandbox.sellringplz&&!character.sandbox.ringsold){
                     
                     
                     hwlinker="./sellring";
                   }   
  system.doLink(hwlinker);
  
  
  
                  }
                } else {

                //stealth
                  system.doLink("./halfwayevents");

                }

                
                //wiggle mechanic clickyclickclickclick to turn option red
                
               
              }, //function close
              
              
              
              
              
              "halfwayevents": function (character, system, action) {
                transer();
                //(((rnd(3))+((character.sandbox.outmore)?(2):(0)))>3);
              var outmorecheck=false;
                if(character.sandbox.outmore){
                  outmorecheck=(rnd(3)>1);
                  
                }
                
                
                
                var hornymod=((rnd(5))+((character.sandbox.reqtoy)?(2):(0)));
                //route 1 and 2 work with stealth
                if(character.sandbox.stealth||character.sandbox.permaplugged||character.sandbox.permalock){
                  hornymod=(rnd(2));
                  outmorecheck=false;
                }
                                var toylinker={
                  beads:"./beads",
      plug:"./plug",
      vibe:"./vibe",
      fleshlight:"./fleshlight"};
         
                if (character.sandbox.storestop) {
                  //store has sold everything the player wants... still let them go there maybe
                  
                  if(hornymod>3&&rnd(2)==1){
                    hornymod=3;
                    
                  }
                  
            }
                switch (hornymod) {
                  case 1:
                    parer("<h1>CLOTHES SHOPPING</h1>");
                    if(outmorecheck&&!character.sandbox.underwear[0]){
                      //WE outmore
                      
                      
                      parer("The day continues on and you hear host entering some sort of shop. You can tell something is up because he keeps adjusting you, all the poking and prodding causing you to get a bit harder than is safe in a store. what really surprises you is when"+((harn())?("host pulls away his coat letting you see around!"):(" host starts unzipping his fly in the middle of the store!"))+"q1"+character.host.shopunderwear+"q1 He asks holding up the two. It is rather embarrassing being forced to pick your own cloth prison!");
                      
                      
                      system.doLink("./underwear");
                    }else{
                      //WE HORNY BUT its november >..<

                        parer("The day continues on and host enters a new building. Your best guess from the sounds is that it must be a store or something. Maybe groceries. Simple music playing but its a bit hard to hear from where you are. Unlike usual the walking is very slow with frequent stops as host looks at things. You almost feel bad you can't help, but it's not exactly the thing a cock should have say in.... Eventually he finishes and pays for his stuff");
               
                      
                        
                        
                   oper(system, "midday/enter", "Wait as the day continues on");
                        
                    }
              
                    
                    break;
                  case 2:
                   //gym
                   parer("<h1>GYM</h1>");
                      if(outmorecheck){
                      //WE outmore
                      
                      parer("host finishes up and heads downtown, you can tell by the sound of a train. Finally he enters into a somewhat familiar building, you are pretty sure it's the gym. A few moments later you hear some rustling and suddenly LIGHT! q1Hey, just doing some excersizes. Can't really let you out for long though, just had to change.q1 he says, taking off his clothes before sliding something MUCH tighter up and over you! This is WAY worse than underwear! The gym shorts now containing you bulge out over your form! Anyone looking at the shorts can totally see the bulge you are making even though you can't see them!");
                      
                      
                      
                      parer("host mostly just does a few stretches or maybe yoga, nothing too strenuous. But you can't help but feel he is purposefully picking stretches that would show off your bulge in the best ways! Each one squishes you up against the cloth in differnet ways, you almost feel like you are getting a work out at the same time! Soon he has had enough and puts his other clothes on leaving you trapped in the tight cloth prison!");
                      
                      oper(system, "midday/enter", "Hope he lets you out soon!");
                    }else{
                      
                      
                      if(character.sandbox.permalock){
                                  parer("host finishes up and heads downtown, you can tell by the sound of a train. Finally he enters into a somewhat familiar building, you are pretty sure it's the gym. You can't exactly tell which piece of equipment he is using but you can feel a ton of movement! You realize something is squishing the sheath but due to your cage you can't even feel it happening! Eventually gets tired of it and heads back out.");
                          
                            oper(system, "midday/enter", "Hope he lets you out soon!");
                      }else{
                        
                         system.doLink("./halfwaygym");
                      }
                        
                      
                    }
                 
                  
                    
                    
                    break;
                  case 3:
                    //resteraunt
                    var scener="midday";
                    
                    try {
                      //
                   if(character.sandbox.ch2&&(character.sandbox.host.scenes[scener])){
                      character.sandbox.scenerexit="midday/enter";
                      system.doLink("./halfwayeventnewhost");
                    }else{
                        parer("<h1>RESTAURANT</h1>");
                       if(outmorecheck){
                      //WE outmore
                      parer("The atmosphere changes drastically as host enters a new building. You don't have much clue what is going on till he sits down and a few moments later you hear the muffled words 'May I take your order?'. Just a restaurant it seems, though it reminds you of how he technically is eating for two now. You haven't needed to eat even once since this all started. You do get a suprise though as he shifts his clothing around and pulls you out under the table! You get to see people walking past but thankfully none of the other tables are within line of sight to see you out and exposed under it.");
                      parer("He gives you a few rubs during the meal, really making it hard to not want him to go all out! You are left throbbing desperetly as he finishes his meal and hides you away again.");
                      
                       oper(system, "midday/enter", "Try to calm down as he pays and heads out");
                    }else{
                      //WE HORNY BUT its november >..<
                      parer("The atmosphere changes drastically as host enters a new building. You don't have much clue what is going on till he sits down and a few moments later you hear the muffled words 'May I take your order?'. Just a restaurant it seems, though it reminds you of how he technically is eating for two now. You haven't needed to eat even once since this all started. He doesn't even let you out of his pants during the meal! Surely he could have given you a little time to breath under the table. You are just his cock though, so it is generally safer to stay hidden away. ");
                      parer("He gives you a few rubs during the meal, making it even more frustrating to be kept restrained, He finishes his meal not even once saying a word to you.");
                      
                       oper(system, "midday/enter", "Relax as he pays and heads out");
                    }
                      
                    }
                } catch (e) {
                  
                  console.log("TRYCATCH " + e);
                  oper(system, "midday/enter", "Relax as he pays and heads out");
                }

                   
                   
                    break;
                  case 4:
                  default:
                    //adult store
                    character.sandbox.reqtoy=false;
                    // This will be a special one. It will unlock later scenes for possibly using sounding beads or 
                    
                    //option to pick either  vibrator ring, sounding beads, chastity cage, sounding plug
                     if(outmorecheck){
                       
                       system.doLink("./fetishchoices2");
                       
                       
                     }else{
                       
                       parer("<h1>ADULT STORE</h1>");
                       character.sandbox.adultstoreoutmore=false;
                      system.doLink("./adulttoyselector");
                    
                    
                  
                    
               
                    
                    
                    break;
                  //case 5:
                     
                  //default:
                    //masturbation
                 
//                      if(outmorecheck){
//                      //WE HORNY
//                       system.animateQuality("essence", character.qualities.essence +10);
//                    }else{
//                      //WE HORNY BUT its november >..<
//                      
//                    }
                    
                }//End of RND switch
            }
                /*PLACES
                
                go shopping
                masturbate
                club   maybe nighttime
                adult store
                resteraunt
                gym
                
                
                each will have variation for be let out more often
                
                
                
                
                */
                
//                
//                parer("Second half of day placeholder");
//                oper(system, "midday/enter", "Finish work");

          }, //function close
              "halfwaygym": function (character, system, action) {
                transer();
                //plugged
                //might have to look out for partial
                //NOT outmore
                //stealth route 
                
                //treadmill 
                //the one we already have
                
                switch (rnd(2)) {
                  case 1:
                     
                                       parer(["host finishes up and heads downtown, you can tell by the sound of a train. Finally he enters into a somewhat familiar building, you are pretty sure it's the gym. You can't exactly tell which piece of equipment he is using but you are suddenly squished up against it! There is a movement followed by freedom....","As the day progresses host heads downtown, at least you assume from the sound of the train. A familar sound of grunts fill the air as he walks into the local gym. You hope it's a gym... Without warning you are suddenly squished up against something! It only lasts a moment before it happens again!","A bit further into the day host has made his way downtown and a few minutes later he entering a building, probably the gym... He sits down and the crotch of his pants smooshes you inward as starts using one of the exercise machines!"]);
                   
                   
                         delay([
                            "SQUISH!",
                            "Release...",
                            "SQUISH!",
                               "./halfwaygymend"
                          ]);     
                         
                    
                    
                    break;
                
                  case 2:
                default:
                        
                                                        parer(["host finishes up and heads downtown, you can tell by the sound of a train. Finally he enters into a somewhat familiar building, you are pretty sure it's the gym. Suddenly it feels like he has broken into a steady jog! Treadmill!!!! You are constantly shoved around with each stride!","As the day progresses host heads downtown, at least you assume from the sound of the train. A familar sound of grunts fill the air as he walks into the local gym. You hope it's a gym... Without warning hosts legs begin shoving you back and forth as he begins using a treadmill!","A bit further into the day host has made his way downtown and a few minutes later he entering a building, probably the gym... Your entire world in his sheath is tossed around as he starts running on a treadmill, it's like riding a bumpercar that won't stop!!"]);
                   
                 
                         delay([
                            "Right... Left...",
                            "Back and Forth....",
                            " Shaken up and down with each step!",
                               "./halfwaygymend"
                          ]);     
                            
                        
                        
                    break;
             
                }//End of RND switch
          
            
              }, //function close
              "halfwaygymend": function (character, system, action) {
              if(character.sandbox.permaplugged){
                     
                          //plugged
                                                 parer("You almost feel like the plug might get pushed out by this but nope... It stays stubbornly stuck.  He doesn't do this for very long and eventually gets tired of it and heads back out.");
                                 
                        
                    
                        
                        //plugged or locked end
                      }else{ 
                        if(character.sandbox.stayhidden){
                          //special teasing stealth
                            parer(" It doesn't hurt at least! The fabric of what he is wearing is so tight any twitch or wiggle could give away your presence! He doesn't do this for very long and eventually gets tired of it and heads back out. ");
                          
                          
                        }else{
                          //normal route
                                 parer(" It doesn't hurt but it's certainly no fun! He doesn't do this for very long and eventually gets tired of it and heads back out.");
                    
                        }//normal end
                        
            
                      }//not plugged or locke end

                      
                    
    
    oper(system, "midday/enter", "Wait impatiently as he continues his day");
    
              }, //function close
          "halfwayeventnewhost": function (character, system, action) {


            var scener = "midday";

            system.doLink((character.sandbox.host + "host" + scener + "/scene1"));



          }, //function close
          "halfwayrareevents": function (character, system, action) {
            transer();
            parer("");
            oper(system, "", "");
          }, //function close
              "fetishchoices2": function (character, system, action) {
                transer();
              parer("<h1>Adult Store</h1>");
                if(harn()){
                  //bret darn it
                   parer("host starts acting a bit odd as he enters a building, it way quieter than others. Your first clue as to what is going is how horny you suddenly start feeling! It gets harder to move as host is clearly doing something naughty! You hear a door close followed by the coat being pulled aside so you can see the room!");
                }else{
                  
                  parer("host starts acting a bit odd as he enters a building, it way quieter than others. Your first clue as to what is going is how horny you suddenly start feeling! It gets harder to move as host is clearly doing something naughty! You hear a door close followed by host's zipper!");
                }
                system.doLink("./fetishchoices");
              }, //function close
          "fetishchoices": function (character, system, action) {
                transer();

                parer("What you see is even more surprising! Its a wall of sex toys! You must be in that adult bookstore place! To your dismay he happens to be standing right in front of the chastity cages! q1I swear having you between my legs is starting to affect me... We don't have long. See anything you like or should I just grab something?q1 He asks.");
                
//                var toylinker={
//                  beads:"./beads",
//      plug:"./plug",
//      vibe:"./vibe",
//      fleshlight:"./fleshlight"};
//                      
//                
                spark=true;
                oper(system, character.sandbox.toys.beads, "Sounding beads",character.sandbox.toys.plug,"Penis plug",character.sandbox.toys.vibe,"Cock ring vibrator");
                if(character.sandbox.toys.cage){
                  
                  oper(system, "./nothing", "Don't pick anything",character.sandbox.toys.fleshlight,"Maybe... a fleshlight?");
                }else{
                  oper(system, "./nothing", "Don't pick anything (Chastity Cage)",character.sandbox.toys.fleshlight,"Maybe... a fleshlight?");
                }
                
                
              }, //function close
              "fleshlight": function (character, system, action) {
                transer();
                character.sandbox.toys.fleshlight=false;
                
              parer("You basically just point to fleshlight almost sheepishly, host just laughs and picks it up.q1Damn, you really are nothing but a horny cock! This does give me an interesting plan though....q1 he says and hides you back away as he takes the fleshlight to the counter.");
              system.doLink("./adultstorefin");
              }, //function close
              "beads": function (character, system, action) {
                transer();
                character.sandbox.toys.beads=false;
                parer("You basically just point to one of the sounding bead strings on the wall, he seems hesitant to grab them. Before host can respond there is a noise and he quickly hides you back away. It was a close thing as another customer wanders in as he takes the item from the wall.");
               system.doLink("./adultstorefin");
              }, //function close
              "vibe": function (character, system, action) {
                transer();
                character.sandbox.toys.vibe=false;
                 parer("You basically just point to one of the vibrating cock rings on the wall, he gives a quick laugh. Before host can actually respond there is a noise and he quickly hides you back away. It was a close thing as another customer wanders in as he takes the item from the wall.");
              system.doLink("./adultstorefin");
              }, //function close
              "plug": function (character, system, action) {
                transer();
                 parer("You basically just point to one of the penis plugs on the wall and before host can respond there is a noise and he quickly hides you back away. It was a close thing as another customer wanders in as he takes the item from the wall.");
                character.sandbox.toys.plug=false;
                 system.doLink("./adultstorefin");
              }, //function close
              "nothing": function (character, system, action) {
                transer();
                  
               
                    
                    
                    
                if(character.sandbox.toys.cage){
                //he already has a cock cage
                  
                  if(character.sandbox.toys.condom){
                     character.sandbox.adultstoreoutmore=true;
                    system.doLink("./adulttoyselector");
                  }else{
                    
                   parer("He just laughs and grabs a pack of large condoms! q1Well if you say so.... Maybe this will help you to stop making me exta horny all the time!q1 He says and hides you away! Being stuck in underwear all day is bad enough but a condom!? The idea of being trapped inside a condom is oddly exciting but also worrying!");
                
                    character.sandbox.toys.condoms=true; 
                    system.doLink("./adultstorefin");
            
                  }
                  
                  
                  
              
                
                
                
                
                }else{
                  character.sandbox.toys.cage=true;
                  //doensn't have one yet
                   parer("He just laughs and grabs one of the largest cock cages! q1Well if you say so.... Maybe this will help you to stop making me exta horny all the time!q1 He says and hides you away! You really didn't want him to pick THAT! He wouldn't ACTUALLY put you in a chastity cage....... right?");
                 character.sandbox.storestop=true;
                system.doLink("./adultstorefin");
                }
                
                
               
              }, //function close
              
              
              "adulttoyselector": function (character, system, action) {
            
               var swiholder;
                    for(var toyitem in character.sandbox.toylist){
                      
                      console.log("switest and it is opposite " + toyitem+" "+character.sandbox.toylist[toyitem]+" "+character.sandbox.toys[character.sandbox.toylist[toyitem]]);
                      if(!(character.sandbox.toys[character.sandbox.toylist[toyitem]])){
                      console.log("GET IN HERE " );
                          swiholder=character.sandbox.toylist[toyitem];
                          break;
                      }
                      
                     swiholder="none";
                    
                    }
                    
                    console.log("toy select " +swiholder );
                    if(character.sandbox.adultstoreoutmore){
                      parer("He just laughs and stuffs you back into his pants! q1Well if you say so.... Humm... lets see... AH perfect!q1 He says and picks something from the display! You can feel him walking around but not much happens for several moments...");
                
                      
                    }else{
                      parer("host starts acting a bit odd as he enters a building, it way quieter than others. Your first clue as to what is going is how horny you suddenly start feeling! It gets harder to move as host is clearly doing something naughty!");
                      
                    }
                    switch(swiholder){
                      case "bondage":
                        console.log("umm wtf SAY SOMETHING" );
                         parer("Finally you hear the shopkeeper say something about bondage gear. q1That is the smallest size they come in. Usually sell them for some the the height challenged races.q1 You hear him say! host just laughs and takes the items.");
                          character.sandbox.toys.bondage=true;
                          system.doLink("./adultstorefin");
                        break;
                      case "condoms":
                             parer("Finally you hear the shopkeeper say something about some weird condoms. q1Oh yea those things are nifty, not exactly reusable condoms but they might as well be! I hear they can expand like a balloon with enough pressure!q1 You hear him say! host just laughs and takes the items.");
                           
                           
                        
                            character.sandbox.toys.condoms=true;
                            system.doLink("./adultstorefin");
                        break;
                      case "fakering":
                        if(character.sandbox.ringgone){
                          
                            parer(" Finally you hear him mutter something about a cock ring with really gets your attention! q1Yea I used to have another ring but I don't it's kind of gone now. This one looks almost exactly like it actually, just thinking about getting a replacement.q1 You hear him say! There is some talk about other stuff too so you don't really know if he bought it or not!");
                        }else{
                          
                            parer(" Finally you hear him mutter something about a cock ring with really gets your attention! q1Yea I have another ring but I don't like it much. This one looks almost exactly like it actually.q1 You hear him say! There is some talk about other stuff too so you don't really know if he bought it or not!");
                        }
                       
                      
                      
                      
                      character.sandbox.toys.fakering=true;
                      system.doLink("./adultstorefin");
                      break;
                    case "vibe2":
                      
                
                
                 parer("Finally you hear the shopkeeper say something about a vibrator. q1You be careful if you pick that one, darn thing is strong enough to trigger earthquake sensors!q1 You hear him say! host just laughs and takes the items.");
                         
                        
                      character.sandbox.toys.vibe2=true;
                      system.doLink("./adultstorefin");
                      break;
                
           
                          
                 case "none":
                 default:
                   if(character.sandbox.adultstoreoutmore){
                     
                     
                     if(character.sandbox.toys.cage){
                       
                        system.doLink("./adultstorefin");
                     }else{
                       
                       parer("host seems to be going around looking at a bunch of stuff, most of which he already has. The clink of metal of metal follows a long pause as he finds something and brings it over to the counter. <br>q1One chastity cage.... This is one of the larger ones...q1 The clerk says as host fumbles around for his wallet. ");
                       
                       character.sandbox.toys.cage=true;
                        character.sandbox.storestop=true;
                       system.doLink("./adultstorefin");
                       
                     }
                    }else{
                     system.doLink("./fetishchoices"); 
                   }
                           
                        break;
                 
                    }
                
                
              }, //function close
              "adultstorefin": function (character, system, action) {
  
  
  
  
  
   oper(system, "midday/enter", "Worry about what he has planned as he pays and heads out");
              }, //function close
              "underwear": function (character, system, action) {
              
                oper(system, "./uw1", "Pick the "+character.host.underwear1[0],"./uw2","Pick the "+character.host.underwear2[0]);
              }, //function close
              "uw1": function (character, system, action) {
                transer();
                character.sandbox.underwear=[true,character.host.underwear1[0],character.host.underwear1[1],character.host.underwear1[2]];
              parer("You pick the first of the two... host just smiles and puts them in the cart q1Hehe If you say so! No complaining when I put you in them since you picked them out!q1 He says and puts you back away before anyone notices. You don't even want to be stuck in his underwear and you just picked one out for him to keep you trapped in! He continues shopping for a bit then gets back to traveling around town.");
                oper(system, "midday/enter", "Let him continue on with the day");
              }, //function close
              "uw2": function (character, system, action) {
                transer();
                 character.sandbox.underwear=[true,character.host.underwear2[0],character.host.underwear2[1],character.host.underwear2[2]];
              
                parer("You embarrassingly pick the second of the two... host seems a little surprised but he grabs them and puts them in the cart q1Hehe If you say so! No complaining when I put you in them since you picked them out!q1 He says and puts you back away before anyone notices. You don't even want to be stuck in his underwear and you just picked one out for him to keep you trapped in!");
              oper(system, "midday/enter", "Let him continue on with the day");
              }, //function close
              "sellring": function (character, system, action) {
                transer();
                character.sandbox.ringsold=true;
                character.sandbox.ringcheck=false;
                character.sandbox.ring=false;
                if(character.sandbox.ignore){
                  parer("The day continues on and you hear host start talking with someone. The conversation is quieter than normal but eventually you catch the word 'ring'! Something about getting it from someone after a one night stand.... There is a clink noise and a final few words of thanks along with a 'Hava a nice day!' host heads back outside. q1Now with that ring gone my cock can focus on just doing it's job...q1 He says giving you a rub!");
                  
                }else{
                  parer("The day continues on and you hear host start talking with someone. The conversation is quieter than normal but eventually you catch the word 'ring'! There is a clink noise and a final few words of thanks along with a 'Hava a nice day!' as host heads back outside. q1Well it's done.... Ring is gone for good. You really are all mine now.q1 He says giving you a rub!");
                  
                  
                }
                if(character.sandbox.ignore){
                  
                  oper(system,"midday/enter", "Relax like a good cock","midday/enter","Wiggle helplessly in protest");
                }else{
                    oper(system, "midday/enter", "Relax like a good cock");
                }
               
              }, //function close

              "ohno": function (character, system, action) {
                transer();
                character.sandbox.ring=false;
                character.sandbox.ringstuck=false;
                character.sandbox.ringlost=true;
                character.sandbox.ringreallylost=true;
                character.sandbox.ringcheck=false;
                character.sandbox.dayringlost= (character.qualities.day+0);
                parer("You have been wiggling around desperate for host to notice you so you could warn them about the ring ever since it fell off! You couldn't do anything more than that due to them being in public! "+character.host.reallylost);
                //rabokadog won a cookie
             oper(system, "midday/enter", "Let him continue on with the day");
              }, //function close
              "end": function (character, system, action) {
                transer();
                character.sandbox.stealth=false;
                parer("STEALTH ROUTE ENDED");
               oper(system, "midday/enter", "Finish work");
              }, //function close
              "restroom": function (character, system, action) {
                transer();
                var restroomselect= ger(character.host.restroommid);
                character.sandbox.clothed=false;
                clother();
                if(character.sandbox.forgotten){
                  
                  restroomselect= character.host.restroommidstealth;
                }else if(character.sandbox.ignore){
                   restroomselect= "";
                  
                }
                
                
                
                
                
                
                if(character.sandbox.stealth&&character.sandbox.host.host!="bret"){
                   parer("<h1>RESTROOM</h1>");
                   
                   
                  parer("host seems to be walking funny and you don't notice it at first but you seem to feel a bit of pressure. You realize with a shock what it means and soon have it confirmed as you are exposed to the light and see a urinal in front of you! There is nothing you can do to complain or do about it as you are used for your true purpose.... To drain his bladder and direct his piss!");
                }else{
               
                }
                
                
               
               var bathroomholder;
               
               if(character.sandbox.limits.cantalk){
                 bathroomholder="The sudden flow of piss is so strong you can't even keep your mouth shut if you wanted to, it launches up your throat spraying from your mouth like a firehose! ";
                 
               }else{
                 
                 bathroomholder="Suddenly a flow of piss sprays from your slit of a mouth, perfectly shaped for this task. It is kind of what your are made for currently. ";
                 
                 
               }
              if(character.sandbox.limits.hasarms){
                if(character.sandbox.pissaddiction>7){
                  
                  bathroomholder=bathroomholder+ "You do your best to help aim the flow and to keep your arms out of the way .";
                }else{
                  bathroomholder=bathroomholder+ "You can't help but play with the flow of piss a bit, its actually kind of fun. ";
                  
                }
               
              }
               
                
               
                switch (rnd(5)) {
                   case 5:
                    if(!character.sandbox.stealth){
                    if(character.qualities.harmony>50){
                      //high harmony they act as if you are a part of their body
                      
                      parer("You are caught comepletely off gaurd as host suddenly stops and pulls you out. The light is a bit of a shock but so is the urinal in front of you! He doesn't say anything at all and just starts pissing without even a warning!");
                      bathroomholder=bathroomholder+"host doesn't seem to care at all that he is just using you to piss with. He isn't even looking at you while doing it. Part of you realizes just how much a part of him you are. You didn't even try to stop his flow of piss this time. You just accepted that his was your job your purpose in life.You almost wonder if has forgotten you are there. Just as casually he stops and puts you away after you have finished your service to his body like the good cock you are.";
                      
                      
                    }else{
                      //you are a pet penis
                      
                      parer(character.host.restroommid);
                      if(character.sandbox.pillroute){
                        bathroomholder=bathroomholder+"q1There we go.. ahhhh....q1 He says as the piss torrents through your body, there is nothing you can do but endure it. It's so intense... not unlike an orgasm! q1Not even a twitch, good thing you are basically a real cock now!q1 Now that you can't move you are even better at handling his piss. He gives you a kind pat and puts you away after you finish. q1It's just better this way.q1 He says giving you a freindly pat.";
                      }else if(character.sandbox.forgotten){
                        
                          bathroomholder=bathroomholder+"q1There we go.. ahhhh....q1 He says as the piss torrents through your body, so intense! Your memories from the past few years are almost entirely of his piss shootingf from your mouth. Years of being used for cumming and pissing... It feels like your job or purpose, almost embarrassing how it fulfilling it feels as you finish. He doesn't pay you a single thought as he stuffs you back into his pants.";
                      }else{
                          bathroomholder=bathroomholder+"q1There we go.. ahhhh....q1 He says as the piss torrents through your body, you wiggle around some but eventually you calm down and get use to the feeling again. It's so intense... not unlike an orgasm! q1You are doing great, ahhhh. Such a good cock!q1 he says embarrassing you a bit more. But a small part of you takes some pride in that. You are a good cock..... He gives you a kind pat and puts you away after you finish. q1Hehe You are really getting good at that!q1 He says giving you a freindly pat.";
                      }
                      
                    }
                    
                    
                    
                    
                    
                    break;
                  }
                    
                  case 1:
                    if(!character.sandbox.stealth){
                       parer(restroomselect);
                    }
                  
                     bathroomholder=bathroomholder+"You can feel it traveling all the way through your body! There is almost a kind of vibration from just how intense the flow is through that urethra inside you! Right in the middle of the flow you are shocked to hear someone else enter the bathroom! They take a urinal one away from you, and much to your embarrassment you catch sight of their large.... equine cock. It's a weird moment of kinship as if you know how it feels and what it is about to go through!";
                    
                    
                    
                    
                    break;
                  case 2:
                       if(!character.sandbox.stealth){
                       parer(restroomselect);
                    }
                    if(character.sandbox.pissaddiction>5){
                        bathroomholder=bathroomholder+"You can feel it traveling all the way through your body! The taste is so addicting, it just feels so right. Every time you taste it you worry about liking it more. There is a sense of satisfaction in what you are doing, just being a penis to help direct his piss. You can't get it out of your head how much you look forward to this every day.";
                    }else{
                         bathroomholder=bathroomholder+"You can feel it traveling all the way through your body! The taste is still hard to get used to but it is literally your purpose to deal with it. Every time you taste it you worry about liking it more. It just doesn't seem as bad as the last time. Still it feels so wrong to be used like this, just a penis to help direct his piss. You can't get it out of your head, it doesn't taste too bad.....";
                    }
                  
                     
                    break;
                    
                  case 3:
                       if(!character.sandbox.stealth){
                       parer(restroomselect);
                    }
                      bathroomholder=bathroomholder+"You feel the pressure lessen and host just stays there for a few moments. It leaves you rather confused till another spurt surprises you and shoots through your body! You can almost hear a snicker from above as host torments you with holding back the stream and unleashing randomly through you! Every time you move to protest he does it again! Finally he relaxes and just lets it slowly dribble through you painfully slow!";
                    break;
                  case 4:
                if(character.sandbox.host.host!="bret"){
                     if(!character.sandbox.stealth){
                       parer(restroomselect);
                    }
                     bathroomholder=bathroomholder+"You feel the pressure lessen and host just stays there for a few moments. He actually flicks you a few times to get the last few drops and then just holds you there pointing into the urinal. Then you feel him grasp you more firmly! Before you know it he is rubbing up and down your body sending waves of pleasure through you! You struggle a bit feeling embarrassed that he is doing this IN the bathroom! Thankfully he is quick about it and soon you are shooting cum all over the urinal as he pants a bit.... q1Ahh... needed that...q1 he says putting you away still leaking a bit of cum.";
                     
                        system.animateQuality("essence", character.qualities.essence + 10);
                      break; 
                }else{
                  
                      parer("<h1>PISSING ON A FIRE HYDRANT?</h1>");
                  bathroomholder=("You are suddenly able to look around a bit more as Bret shifts his stance. You know he has a full bladder so you sort of expected him to be headed to a bathroom soon. Suddenly he lifts a leg NEARLY exposing you and in shock... you see a fire hydrant! You start to protest or squirm or ANYTHING but all you get is a laugh and snicker from him as he suddenly unsleashes a flow of piss directly onto the red metal fire hydrant! All you can do is shudder in embaressment as he finishes using you to mark his terretory!");
                  
                }
                   
                  
                
                }//End of RND switch
               
               
          
               parer(bathroomholder);
               
                if (character.sandbox.pissaddiction>7) {
                      oper(system, "./halfway2", "Try not to think about how good it tasted");
                  
                }else{
                  oper(system, "./halfway2", "Try to ignore the taste in your mouth");
                  
                } 
                
              
              
              }, //function close

              "r1": function (character, system, action) {
                transer();
                parer("");
                oper(system, "", "");
              } //function close
            }//actions close
          }//options close
  ),
  midday: new undum.SimpleSituation(
          "", {
            actions: {
              "enter": function (character, system, action) {
           //actually kind of end of day
             
             
               var hornymod=0;      
               if(character.sandbox.runedo.horny){
                    hornymod++;
                  }    
                  if(character.sandbox.harmonyunlockdown){
                    hornymod++;
                  }
                  
              if (character.sandbox.booksearch&&!character.sandbox.perma) {
         
                  system.doLink("./bookstuff");
                
              }else{
                
                if ((((character.sandbox.hasbook)&&(rnd()==1||(character.sandbox.bookwork&&(rnd()>3)))))&&(character.sandbox.ring||character.sandbox.ringcheck)&&!character.sandbox.perma) {
                  //looking for the book
                   system.doLink("./bookstuff");
                  
                }else{
                  
                  
                   
                  if(character.qualities.ctf==100&&(rnd(3)-hornymod)<=1&&character.sandbox.fullcock>2&&!character.sandbox.permalock&&!character.sandbox.permaplugged){

                      system.doLink("sex/sexenter");
                      
                    
                    
                  }else{
                    
                    
                    
                    
                    
                    
                    if(character.sandbox.partial&&(rnd(3)-hornymod)<=1&&!character.sandbox.permalock&&!character.sandbox.permaplugged){

                      system.doLink("sex/partialsexstart");
                      
                    }else{
                       system.doLink("evening/enter");
                    }
                    
                    //stealth route goes through here
                    
                    
                  }
                  
                }
              }
             
             
             
              }, //function close
              "bookstuff": function (character, system, action) {
                if ((character.sandbox.bookwork&&character.sandbox.controlrune)) {
                  //can only happen after control is done and has asked host to look at book
                    //system.doLink("./bookstuff2");
                  system.doLink("./research");
                }else{
                  
                  system.doLink("./bookstuff2");
                  
                }
                
                
                
                
                
                
                
              
              }, //function close
             
              "bookstuff2": function (character, system, action) {
                transer();
                //found the book
                //didn't find the book


                if ((character.sandbox.hasbook == true)&&character.sandbox.bookwork) {
                  //scene to discover runes. 
                  
                  
                 
                  parer("There is a closing of a door followed by a bunch of rustling after host arrive home. He pulls you out into the open air and you gasp finally free of the restrictive clothing. Already out on the table in front of you is the book he found at the library.");
                  
                  
                  
                  // host.bookstuff is only for the first time telling player they found the book.
                  
                  // need to figure out way to display runes to player.
                  
                       character.sandbox.clothed=false;
                    character.sandbox.erect=true;
                    clother();
                  
                  
                  parer(character.host.bookstuff);
                  
                
                  character.sandbox.frombook=true;
                  
                  
                  parer("You spend some time pouring through pages of jibberish occasionally having host turn the page for you. The runes on your sides are almost impossible to see unless doing something at night it seems. After a good hour or two of searching it is starting to seem like a lost cause till you come upon something that... 'feels?' familiar.  It is just one rune that the book has labeled as control. Sort of a catalyst rune of sorts....");
                  
                  
                  
                  oper(system, "./lookattherune", "Try to memorize the rune.");
                  
               
                
                
                } else {

                  if (character.sandbox.booksearch) {
                    // Library research section
                    parer("You are not sure what is happening from inside host's clothes, soon seeming to enter a new building. It's bizarrely quiet as all you can do is wait and wonder what is going on. Eventually you hear a loud 'Shoosh!' from somewhere and you realize this must be the library! You are half a mind to try to get out and have a look around but... public places and cocks just don't mix.");
                    if (rnd() > 1) {


                      parer("host wanders around the library for what seems like hours to you. Checking on books, even asking the librarian a few questions. It doesn't sound to be going well until you hear a q1AH! Found it!q1 Which is quickly followed by four SHHHHH! coming from seperate directions! host quickly heads out of the library presumably with whatever they found in there.");
                      character.sandbox.hasbook = true;


                      system.setQuality("currency", "<br>Cocks don't need money.");
                    } else {
                      parer("host seems to grumble rather loudly as they search through the library for almost 2 hours. You notice they don't stop to take anything with them as they leave the building. From above you hear him mumble to you q1Sorry, couldn't find a thing in there. Maybe we can try back later when I can focus better.");

                    }
                    character.sandbox.booksearch = false;

                    oper(system, "evening/enter", "Continue to next day");
                  } else {
                    system.doLink("evening/enter");

                  }

                }

                
                
              }, //function close
              "lookattherune": function (character, system, action) {
                transer();
               
                //character.sandbox.control=true;
                
               displayrune("control");
               character.sandbox.controlruneaccess=true;
               
               
                oper(system, "evening/enter", "Try to remember it for tonight!");
              }, //function close
              "research": function (character, system, action) {
                transer();
                character.sandbox.narrowalt=false;
                 // tells you what a random rune might do by saying one truth and one lie
                 if(rnd(4)==1){
                   character.sandbox.bookwork=false;
                   
                 }
                 
                 
                 
                 
                 
                //character.sandbox.runeknown;

                

//this gives a random rune
//while(true){
//  
//  
//}
//
//const keys = Object.keys(character.sandbox.runearchivelist);
//var prop = keys[Math.floor(rnd(keys.length-1))];
//

//
//console.log(prop);
//                

           character.sandbox.clothed=false;
                    character.sandbox.erect=true;
                    clother();
            parer("<h1>Research!</h1>");
 
 parer("host arrives home rather early and quickly pulls you out into the open air! You gasp finally free of the restrictive clothing. Already out on the table in front of you is the book he found at the library. "+character.host.research);
          parer("You start to get a good handle on some of the stuff in the book. A few sections stand out to be possibly usefull. You could try to identify a rune but it wouldn't be easy and might not give you anything. You could also narrow down the effects of a rune and at least get a decent idea of what it might do.");
            if(character.sandbox.artifactrunes){
               // oper(system, "", "");
              
            }else{
              
              //deep research- low chance of adding a new rune
              // displays a run with two options of what it might do
              
              
              //then 
                oper(system, "./identify", "Try to get lucky with a random page","./narrow","Learn a new rune and its possible effects");
              
              
            }
            
                
              
                
                
                
                    character.sandbox.frombook=true;
                
                
              }, //function close
              "narrow": function (character, system, action) {
                transer();
                
                var randomrune;
                var rleng;
                
                rleng = character.sandbox.runeholder.length;
                //console.log("holder check " + character.sandbox.runeholder);
                
                
                var desc1 = rnd(rleng);
                if(character.sandbox.narrowalt){
                   do {
                  desc1 = rnd(rleng);
                  //console.log("rleng check " + rleng+" "+desc2  );
                } while (desc1 === character.sandbox.narrowrune);
                  
                }
                
                
                var desc2;
               if(rleng==1){
                 
                 
                   displayrune(character.sandbox.runeholder[desc1-1]);
        
         character.sandbox.bookrune=character.sandbox.runeholder[desc1-1];
         spark=true;
         
         
         parer("It seems this rune "+ character.sandbox.runearchivedesc[character.sandbox.runeholder[desc1-1]]);
          
                  
                  
                  oper(system, "./bookend", "Give up researching for now");
                oper(system, "./seeagain", "Look at the rune again","./tryremember","Try to remember the rune for tonight");
                  
         
                


                
                 
               }else if(rleng==0){
                 character.sandbox.bookwork=false;
                  parer("All of the remaining runes appear to cause explosions. Best keep away from them.");
                  
                  
                     oper(system, "./bookend", "Give up researching for now");
                  
               }else{
                  displayrune(character.sandbox.runeholder[desc1-1]);
        
         character.sandbox.bookrune=character.sandbox.runeholder[desc1-1];
         
                do {
                  desc2 = rnd(rleng);
                  //console.log("rleng check " + rleng+" "+desc2  );
                } while (desc1 === desc2);
                 
                 
                     if(Math.random() < 0.5){
                  
                  
                  parer("It seems this rune either...<br> "+ character.sandbox.runearchivedesc[character.sandbox.runeholder[desc1-1]]+
                       "<br>Or...<br> "+character.sandbox.runearchivedesc[character.sandbox.runeholder[desc2-1]]);
                  
                  
                  
                }else{
                  
                      parer("It seems this rune either <br>"+ character.sandbox.runearchivedesc[character.sandbox.runeholder[desc2-1]]+
                       "<br>Or...<br> "+character.sandbox.runearchivedesc[character.sandbox.runeholder[desc1-1]]);
                  
                  
                }
                
              
                
                //character.sandbox.runeholder(rnd(rleng));

                spark=true;
                
                
                         if(character.sandbox.narrowalt){
                           character.sandbox.narrowrune=-1;
            character.sandbox.narrowalt=false;
            oper(system, "./bookend", "Give up researching for now");
                oper(system, "./seeagain", "Look at the rune again","./tryremember","Try to remember the rune for tonight");
          }else{
            character.sandbox.narrowalt=true;
                    character.sandbox.narrowrune=desc1;
            oper(system, "./bookend", "Give up researching for now","./narrow","Look up a different rune");
                oper(system, "./seeagain", "Look at the rune again","./tryremember","Try to remember the rune for tonight");

            
            
          }
                



                

                 
                 
                 
                 
                 
                 
               }
               
                



              


            

              
              }, //function close
              "tryremember": function (character, system, action) {
                transer();
                character.sandbox.rememberrune= character.sandbox.bookrune;
                character.sandbox.didresearch=true;
                parer("You spend some time just looking at the rune and trying to memorize it's shape. Things get a bit weird in dreams so it may not be perfect.");
          
                oper(system, "./bookend", "Finish with the research for now");
              }, //function close
              "seeagain": function (character, system, action) {
               displayrune(character.sandbox.bookrune);
              }, //function close
              "bookend": function (character, system, action) {
                transer();
                //ending research
                
                parer("You and host finish up after a good few hours looking at the cryptic book. Hopefully he will still be interested in doing more research in the future without you needing to poke him about it every other thing. ");
                system.doLink("evening/enter");
             //  oper(system, "evening/enter", "");
              }, //function close
              "identify": function (character, system, action) {
                transer();
                
                var rndcheck=rnd(3);
                        //parer("huh "+rndcheck);
                if(rndcheck==3){
                            var grabarune;
                var therune;
                grabarune=rnd(character.sandbox.runeholder.length);
                therune= character.sandbox.runeholder[grabarune-1];
                
                if(therune){
                  character.sandbox.runeholder.splice(grabarune-1,1);
                character.sandbox.runeknown.push(therune);
                  
                  parer("You have learned the rune for q1"+(therune).toUpperCase()+"q1. It seems..... "+character.sandbox.runearchivedesc[therune]);
                  
                  
                  
                }else{
                  parer("There is something VERY wrong with this next rune. Either you have run out of runes to research or you have found a hole in reality. Likely both! ");
                  
                  
                }
                
                }else{
                  
                  
                  parer("You spend a frustrating few hours looking at this one rune, every time you think it is about to explain something it goes into a cryptic description of something else! It is almost maddening how the book wants to referance things that then need MORE referancing! Finally you have to give up with nothing to show for your effort.");
                }
      
                
                
                
                
              
              oper(system, "./bookend", "Finish with the research for now");
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