undum.game.weekend = {

    weekend: new undum.SimpleSituation(
            "", {
              actions: {
                "enter": function (character, system, action) {
                  transer();
                  if (character.qualities.dayofweek>=5&&!character.sandbox.stealth) {
                     if (character.sandbox.perma) {
                      system.doLink("./permatalk");
                    }else{
                      
                      system.doLink("./talk");
                    }
                
                  }else{
                    system.doLink("./weekendnorm");
                  }
                  
                  
                  
                  //COMES FROM RING STUFF and oper(system, "aftermorning", "Finish up in the bathroom and continue the day");
                  //alternate path is   parer("host rather quickly gets the harness back out and secures you to his belly once more. He continues his morning getting himself some breakfast, once again reminding you of your inability to eat. In some ways it certainly makes things easier not needing to eat... but its hardly worth the cost!<p>host finishes his food and spreads his legs looking down at you. \"I have to go to dayjob soon. So any planning we should probably get it out of the way now while we can\"he suggests.");
                  
                  
                 
                }, //function close
                "permatalk": function (character, system, action) {
                  transer();
                                    if(character.sandbox.underwear[0]){
                       alt= character.sandbox.underwear[2]+" and ";
                      
                    }else{
                      
                      alt="";
                    }
                switch (character.sandbox.ctfrole) {
                  case "bodypart":
                    //doesn't talk to you
                    
                    
                    parer("host continues to get ready for the day, just a quick rub before trapping you within his #altpants. That's the life of a cock though. You can also hear him getting breakfast as you are kept squished in his sheath between his legs.You spend a good portion of the morning like this... but at some point he stops and gives you a curious rub. ");
                    parer(["q1Wonder if it has already forgotten it's name, hehe.q1","q1I feel like I am forgetting somethingq1","q1Heh, bet it's already forgotten about anything other than being in there by now.q1","q1My sheath feels tight, was it always... Oh right... Heh. So easy to forget about that.q1","q1It's for the best it gets use to this, it would be weird otherwise.q1"]);
                    break;
                  case "possessive":
                    //Get use to it you are just my cock now. There is no way I am ever letting you go. Get use to it
                    parer("host makes sure you can see yourself in the mirror for a few moments. Just to remind you how good you look between his legs before hiding your within his #altpants right where you belong. After that he starts getting breakfast, occasionally giving you a firm rub possessivly. You spend a good portion of the morning like this... but at some point he stops and gives you a curious rub thats different from before.");
                    
                     parer(["q1Mmm, just think how good this feels. You as a part of me now... It feels rightq1","q1Feels nice knowing you have a permanent home between my legs now doesn't it? Too bad you will never get to leave it again...q1","q1I really don't think of you as a person anymore, just a part of me. How does it feel being so deeply and permantly a part of me?q1","q1Somtimes I don't even think of you as somone else. Just the cock between my legs. How's it feel... knowing that?q1","q1I bet you can't get enough of how this feels, losing everything to just to take over for my cock. To belong so completely to my body!q1"]);
                    break;
                  case "petpenis":
                    //Very good! Such a good cock. Give me a nice throb and I might let you out to play more often.
                    
                    parer("host gives you a few loving rubs before he starts to get dressed.  q1You stay soft in there, ok? No throbbing or wiggling!q1 He says and pulls up his pants over you. After that you hear him getting breakfast and doing other morning tasks.You spend a good portion of the morning like this... but at some point he stops and gives you a curious rub.");
                     parer(["q1I hope my little "+character.sandbox.host.petname+" is enjoying itself in there!q1","q1You just love being a penis! Don't you?q1","q1Don't worry I haven't forgotten you in there. Still loving your new life?q1","q1Such a good obedient cock. How does it feel knowing you can't even help but enjoy obeying meq1","q1You just needed somone to take control of everything for you, just a little "+character.sandbox.host.petname+" for my own fun and comfort. How do you feel about that?q1"]);
                    
                    break;
                  case "friend":
                   //
                   parer("host leaves you out for most of the morning. Getting breakfast and talking with you before eventually deciding to put some pants on for the day. q1I need to got to get dressed. I'll let you back out laterq1 He says and pulls up his #altpants over you. You spend a good portion of the morning like this, but at some point he stops and gives you a curious rub.");
                   
               parer(["q1So, how do you feel about all this?q1","q1Humm, how goes adjusting to things?q1","q1Hey, you holding up all right with all these changes?","q1Enjoying how things are going so far?q1","q1Feeling alright about things?q1"]);
                    
                    break;
                }//End of RND switch
                
                
                
                if(character.sandbox.ignore){
                     system.doLink("./answersignore");
                  
                }else{
                  
                     system.doLink("./answers");
                }
                
               
                }, //function close
                "talk": function (character, system, action) {
                  transer();
                  //NOT PERMA!!
                  
                  
                                    if(character.sandbox.underwear[0]){
                       alt= character.sandbox.underwear[2]+" and ";
                      
                    }else{
                      
                      alt="";
                    }
                  
                  if (character.sandbox.host.plantokeep) {
                     parer(["host leaves you out for most of the morning. Getting breakfast before eventually deciding to put some pants on for the day. q1I got to get dressed. I might let you back out laterq1 He says and pulls up his #altpants over you. You spend a good portion of the morning like this, but at some point he stops and gives you a curious rub.","The morning goes by pretty uneventfully, host getting something to eat... picking out clothing for the day... cleaning up a bit. q1Got to get dressed eventuallyq1 He says pulling up his #altpants over you. Most of the morning goes like this until he stops and gives you a curious rub.","It is a rather slow morning as host trys his best to wake up. Groggily cleaning and doing morning stuff. He prepares some food ready before even starting to get dressed. Eventually his #altpants do slip over you before he sits down to eat his food. After a little while he stops and gives you a curious rub."]);
                     parer(["q1So, how is it being my new dick?q1","q1Humm, how goes adjusting to your new life?q1","q1Hey, you holding up all right?","q1Hope you are enjoying how things are going so far!q1","q1Feeling good down there as my cock?q1"]);
                     
                  }else{
                parer(["host leaves you out for most of the morning. Getting breakfast and sometimes saying things to you before eventually deciding to put some pants on for the day. q1I got to get dressed. I'll let you back out laterq1 He says and pulls up his #altpants over you. You spend a good portion of the morning like this, but at some point he stops and gives you a curious rub.","The morning goes by pretty uneventfully, host getting something to eat... picking out clothing for the day... cleaning up a bit. q1Got to get dressed eventually, sorry about thisq1 He says pulling up his #altpants over you. Most of the morning goes like this until he stops and gives you a curious rub.","It is a rather slow morning as host trys his best to wake up. Groggily cleaning and doing morning stuff. He prepares some food ready before even starting to get dressed. q1I really should put on some pants... You will be fine in there....q1 he says as his #altpants do slip over you and he sits down to eat his food. After a little while he stops and gives you a curious rub."]);
                     
                    parer(["q1So, how do you feel about all this?q1","q1Humm, how goes adjusting to things?q1","q1Hey, you holding up all right with all these changes?","q1Enjoying how things are going so far?q1","q1Feeling alright about things?q1"]);
                  }
                  
                   
                   
                   
                    
               system.doLink("./answers");
                }, //function close
                
                "answersignore": function (character, system, action) {
                  transer();
            character.sandbox.wpre="You take a moment to think about";
            
            parer("You are just another part of his body.... But still it makes you think....");
                 
                     character.sandbox.wttspend=false;
                      oper(system, "./lovingit","How much you love this!","./embarrassing","How embarrassing this is","./horny","Sooo horny!!!!");
                    
             spark=true;
             oper(system, "./justthrob", "You are just a normal cock");
                  
                }, //function close
                "answers": function (character, system, action) {
                  transer();
               character.sandbox.wpre="You quickly tell him";
                  if (character.sandbox.limits.cantalk) {
                     character.sandbox.wttspend=false;
                      oper(system, "./lovingit","Loving it!","./embarrassing","So embarrassing!","./horny","Horny!!!!");
                    
             spark=true;
             oper(system, "./justthrob", "Just throb pretending to be a normal cock");
                  }else{
                   if (character.qualities.essence >= character.sandbox.ttcost&&character.sandbox.runedo.thoughts) {
                      character.sandbox.wttspend=true;
                      character.sandbox.wpre="You send the thoughts to his mind telling him";
                     var tt="(TT: " + character.sandbox.ttcost + ") ";
             
                 
             oper(system, "./lovingit",tt+"Loving it!","./embarrassing",tt+"So embarrassing","./horny",tt+"Horny!!!!");
                    
             spark=true;
                     
           }
            oper(system, "./justthrob", "Just throb like a normal cock");
                  }
               
               
               
               
               
                }, //function close
                "spend": function (character, system, action) {
                  
                  if(character.sandbox.ttspend){
                      system.animateQuality("essence", character.qualities.essence - character.sandbox.ttcost, {from: character.qualities.essence, to: character.qualities.essence - character.sandbox.ttcost});
                    
                  }
      
                }, //function close
                "lovingit": function (character, system, action) {
                  transer();
                  character.sandbox.wpre+=" how wonderfull this all is. ";
                
                  oper(system, "./lovepart", "Being a part of him","./loveused","Being used","./lovefeel","How it feels");
                  system.doLink("./spend");
                }, //function close
                "lovepart": function (character, system, action) {
                var pre= character.sandbox.wpre;
           parer([pre+"You love what you are now, it feels so good to be a part of him. How deeply you feel connected to him as if you had a greater purpose now...",pre+"The feeling of being needed and usefull is almost intoxicating! It just feels so good to be a part of his body! And possibly the best part!",pre+"You can't imagine a better life that being cared for as a part of his body. The connection between you and him is more than just intimate, its biological!",pre+"Being a cock is so relaxing, you absolutely love it! No need to worry about things as he takes care of all your needs, and you do th same for... some of his needs!!"]);
            system.doLink("./talkendlove");
                }, //function close
                "loveused": function (character, system, action) {
                  transer();
                   var pre= character.sandbox.wpre;
                  if (character.sandbox.ws&&false) {
                    
                   
                  }else{
                      parer([pre+"You love to be used by him! Being a cock is more than just a body part, it's functional! Getting rubbed to the point of bursting with cum is absolutely the best part",
                       pre+ "Being a cock is nice but there is just somthing speical about being USED as a cock! Every time you get hard and his balls begin to pump cum up your throat, it is absolute heaven! You literally live to be used!",
                        pre+"There is something just so satisfying about being USED for something! It's like you have a purpose now, all that you have to do is deliver his cum whenever he orgasms! Even better its your job to bring him pleasure TO orgasm!",
                       pre+ "You are literally made to give him pleasure now. But the best part is when he USES you for pleasure! Getting rubbed and stroked just for his own enjoyment, and by proxy your own! It is just so good being USED for his pleasure!"]);
                    
                  }
                   
                  system.doLink("./talkendlove");
                }, //function close
                "lovefeel": function (character, system, action) {
                  transer();
                    var pre= character.sandbox.wpre;
                 if (character.sandbox.ws&&false) {
                    
                   
                  }else{
                      parer([ pre+"It might be a bit obvious but being his cock feels amazingly good! Every sensation your body feels is wired directly for pleasure! Even when you are not being used... You can just relax in his sheath.... ",
                        pre+ "ORGASMS are amazing! Sure they feel good but the sensation is so much stronger as a cock! It is like your whole being is a flame with senseation of pleasure!",
                        pre+ "It isn't just the cumming part that feels good, it's everything about being a cock! Your whole body feels softer and just more comfortable like this. And every inch of your skin sends tingles of plreasure through you body!",
                        pre+ "There is nothing better than the feeling of being his cock! Every throb and twitch he makes you do is pure heaven to feel! Even when he gets hard and you can't move anymore... The sensations of pleasure that follow make it all the more worth it!"]);
                    
                  }
           system.doLink("./talkendlove");
                }, //function close
                "embarrassing": function (character, system, action) {
                  transer();
                          character.sandbox.wpre+=" how embarrassing this all is. ";
                
                  //what you have become
                  //What you have to do
                  //starting to enjoy it
                  oper(system, "./reduced", "Being reduced to a penis!","./usedlike","Being used like one");
                  spark=true;
                  oper(system, "./rightness", "How right it is starting to feel");
                   system.doLink("./spend");
                }, //function close
                "reduced": function (character, system, action) {
                     transer();
           var pre= character.sandbox.wpre;
            
                      parer([pre+"Being turned into a penis, of all things! Knowing that is what you have become, what the world will basically view you as! Every day it gets hard to deny that is what you are now!",
                       pre+ "Any other part of the body would be better, but a cock? It's just so naughty and wrong and humiliating! There is just something about becoming something that you normally would keep hidden in public, you can't hide it if you ARE IT!",
                       pre+ "You use to be able to move on your own and do... people stuff! Now all you can do is keep his sheath warm! Not to mention when he gets hard and you literally can't even move anymore! Though that usually feels good...",
                       pre+ "It is so degrading to becoming just a part of someone else. And their penis of all things! Its just so wrong feeling, Giving up control of everything except the direction of their cum! Your very identity is just that of being known as 'host's dick'",
                      pre+  "There really is a connection between how people feel embarrased seeing somones cock and the feeling of BEING that cock! It's similar but magnified ten fold! You literally are the embodyment of shame and naughtyness!"]);
            
                 system.doLink("./talkendemb");
                }, //function close
                "usedlike": function (character, system, action) {
                  transer();
                           var pre= character.sandbox.wpre;
                          if (character.sandbox.ws&&false) {
                      parer(["",""]);
                  }else{
                    
                    
                      parer([ pre+ "The most humiliating part is being used like a penis! It's also sort of the best part too. It just makes it so confusing and embarrassing. Your body being turned into a thing to rub and stroke for someone elses pleasure! Private fun time means getting rubbed and stroked till you are rendered immobile and drooling cum from your mouth!",
                        pre+  "Your body is literally meant to be stroked and pump out cum now. Each time it happens you can feel it fill up that urethra inside of you that is now connected to your throat! The taste is literally embeded in your mind now!",
                        pre+  "Masturbation is such a private thing and you are now rather stuck in the middle of it every time now! It feels so dirty knowing you are just a sex organ to be played with and teased till you get filled with cum and make a sticky mess! This IS your job now, your sole purpose as a tube of sensetive flesh for cum to pass through!",
                       pre+   "You are literally a sex organ meant to be shoved up inside the body of someone else! It's just so embarrassing knowing that is your literal purpose and job now. They few times you are likely ever to see somone else is when you are just about to get forced up inside them!",
                       pre+   "Cumming and orgasms feel great, but the whole time inbetween you are trapped in a tight sheath! Usually with the taste of cum constantly trapped in your mouth! Your only JOB is to stay hidden away from the world till host wants to pleasure himself, or somone else... It's just feels so degrading and weird!"]);
                  }
                           
                           
                
             system.doLink("./talkendemb");
                }, //function close
                "rightness": function (character, system, action) {
                  transer();
                        var pre= character.sandbox.wpre;
                parer([pre+ "It seems like every day you are thinking about yourself as a cock more than a person. Technically you are one, as you fulfill its function perfectly, and it feels so right to do so. Like you have a purpose and are needed as a cock. It's just so addicting a sensation, to belong. Even if it is in a sheath or drooling cum.",
                 pre+  "Your body is literally made for pleasure now. No matter how much you resist, it's impossible to deny how good this feels! Every time his cum spurts from your mouth a bit more of your resistance goes with it. You shouldn't be enjoying this but it just feels so darn good! Being a cock is addicting!",
                 pre+  "Everything you have ever known says you should be doing everything you can to escape this. It shouldn't be something you want or enjoy but... It's soo good in so many ways! Becoming a cock feels so right, like your soul was always meant to serve as someones source of pleasure! ",
                 pre+  "It feels so wrong to admit it but you are starting to enjoy this... Starting to want this. Maybe even need this. It's so wrong and embarrassing but you just can't deny how right it feels. You feel more like your true self as a cock than as you did a person! The thought of that is terrifying.... and.... exciting.....",
                pre+   "Every night you spend inside his sheath reinforces how perfectly suited you are to being a cock! No one should be able to adjust to this life so quickly, yet it almost seems like you are made for it. You were always meant to become a penis, just a slab of meat purely for somone elses pleasure! The most embarrassing part is how good thinking about that feels!"]);
                         system.doLink("./talkendemb");
                }, //function close
                "horny": function (character, system, action) {
                  transer();
                var pre ="";
                  if(character.sandbox.ignore){
                    character.sandbox.wpre+=" how much you want him to take you back out and jerk off! ";
                    
                      parer([pre+"Everything about your existence has been reduced to cumming and pleasure! All you can ever think about is when you will get to cum again. You are a cock after all! All that matters is getting out of his pants so he can pleasure you into a blissful orgasm!",
                   pre+ "Every orgasm has dunked your mind deeper and deeper into the gutter it's practically all you can think about! The taste of his cum, the wonderfull overwhelming sensation of orgasming! It's all a poor desperate cock can think about!",
                  pre+  "You are literally his cock and it's just about the only thing you can think about now! The very act of moving makes you horny! It is a rare moment when you are NOT thinking about the next time you will get to cum!",
              pre+ "You are literally his Jiminy Cricket of dirty thoughts, it is no wonder cock's are not supposed to talk! Everything about your life leads to naughty thinking that you have to bottle up till he gets you out for fun times!"]);
                     system.doLink("./talk2");
                  }else{
                     character.sandbox.wpre+=" to take you back out and jerk off! ";
                  parer([pre+"Everything about your existence has been reduced to cumming and pleasure! All you can ever think about is when you will get to cum again. You are a cock after all! What does he expect? All that matters is getting out of his pants so he can pleasure you into a blissful orgasm!",
                   pre+ "Every orgasm has dunked your mind deeper and deeper into the gutter it's practically all you can think about! The taste of his cum, the wonderfull overwhelming sensation of orgasming! It's all a poor desperate cock can think about!",
                  pre+  "He can't really expect much more from you than that. You have literally become his cock and it's just about the only thing you can do now! The very act of moving makes you horny now! It is a rare moment when you can think clear enough to NOT be thinking about the next time you will get to cum!",
                   pre+ "It's what you do best! And it makes host feel good. So it must be a good idea! You are literally his Jiminy Cricket of dirty thoughts. Anything you can do to get him to start masturbating is worth it!"]);
                 system.doLink("./talkendhorny");
               }
           
                 
                   
                }, //function close
                "justthrob": function (character, system, action) {
                  transer();
                  
                  if(character.sandbox.ignore){
                    parer(["Your body throbs briefly, a perfectly normal thing that would happen when someone thinks about their cock. You let it happen and relax as you try to embrace being what you really are. It's almost like your mind is being lulled into the same state your body is in.....",
                      "All you want is for host to treat you like a true part of his body. Accepting you for what you are and reinforcing that with by using you without a moments consideration for what you use to be. It would be so good for him to just forget what you were.... The thought alone causes you a betraying throb of excitement",
                      "You do what you can to play the part of being a normal penis. Trying to convince him that maybe there is nothing left of you inside his thick shaft. It is getting so easy to just sit back like a passenger within his body. It might actually be more true than you realize, how little of you really is left....",
                      "Just as your body has adapted to this new configuration, you try your best to make it look like your mind has as well. Every time he seems to accept you as a part of his body it just shows how good a job you are doing! Just because you do have a mind doesn't mean you can't function and preform exactly like the real thing...",
                      "With so much of your body now a mere part of his flesh it just becomes that much easier to accept the reality of it. You are his penis now. It feels like he didn't just replace your body with his cock flesh, it feels more like you BECAME his cock... Your body repurposed to function as his body needs, claiming you to serve as a part of his anatomy. The feeling of acceptance this gives is overwhelming!"]);
                    
                  }else{
                    parer(["You don't respond in any way other than to simply throb in his pants. Thats all a penis is expected to do after all. It's just eaiser this way all comfortable inside his pants really trying to embrace what you have become.",
                      "You throb only throb in response to his question. It's not clear if you did that or host did. Not that it matters as you are just a part of him anyway. It seems rather silly for him to even be talking to you. All that matters is you function perfectly for him when needed. Just staying happy in his sheath until then.",
                      "You don't really pay attention to his question, you are just a part of his body. You feel yourself throb slightly in response, the only thing you would expect a cock to do. Cocks don't talk after all... It is so much easier to just accept what you are and let him make all the important descisions for you.",
                      "Being treated like a cock is the most important thing you want from host. Just knowing he accepts you as his cock and treats you like it... No thinking or talking. Just a simple cock in it's sheath. ",
                      "You can't help but just throb at him teasingly, as if pretending you are just a perfectly normal cock. As if acting like one will get him to treat you more like one. In a weird way you almost feel like its also to convince yourself, telling yourself that you are just a penis now.... No need to think about anything, you are part of him, you are his cock and nothing more."]);
                  
                  }
                  
                    system.doLink("./throbend");
                
           
                }, //function close
  
                "talkend": function (character, system, action) {
                  transer();
                  if(rnd(3)!=1){
                       //lazy in house
                       
                        system.doLink("./lazy");
                       
                     }else{
                       //cleaning day in house
                        system.doLink("./cleaning");
                       
                       
                       
                       
                     }
           
                }, //function close
                "throbend": function (character, system, action) {
                  transer();
                  if (character.sandbox.ignore) {
                    
                      parer(["Without knowing what you are thinking host just goes about his buisness without a second thought for your condition. As far as he is concerned you are acting exactly as you should.","Nothing more is said as host goes about his day. As far as he is concerned you are just a part of him, a piece of his anatomy. Everything will be perfect as long as you do everything a cock does and nothing else.","He really is starting to forget you were anything other than his penis. Even in passing it becomes less and less often that he even notices your movements. It might not be long before he really does forget what you use to be... Or you forget..."]);
                  
                    
                  }else{
                
                      parer(["host just snickers at your lack of a response and gives you a rub through his clothing. He doesn't say anything more knowing thats exactly the way you want it. He goes back to what he was doing without giving you even a bit off attention just like he would if you were a normal part of his body.",
                        "host just smiles. q1I guess thats as good a response as I could hope for.q1 he says giving you a comforting rub. ",
                        "q1I really can't tell if that was you or me that throbbed. Well I guess it doesn't matter since you are just a part of me now... q1 He says with a comforting rub.",
                        "'q1Perfect answer... Just keep acting like that and everything will be perfectq1 He says with causing you to throb again, this time him doing it..."]);
                      
                   
                  }
                      
                    system.doLink("./talk2");
                    
             
             
                }, //function close
                "talkendhorny": function (character, system, action) {
                  transer();
                 switch (character.sandbox.ctfrole) {
                      case "possessive":
                    //Get use to it you are just my cock now. There is no way I am ever letting you go. Get use to it
                     parer(character.host["whorny"+character.sandbox.ctfrolemod]);
                    break;
                  case "petpenis":
                    //Very good! Such a good cock. Give me a nice throb and I might let you out to play more often.
                    //"+character.sandbox.host.petname+"
   parer(character.host["whorny"+character.sandbox.ctfrolemod]);
                    break;
                  case "friend":
                   
                   //
   parer(character.host["whorny"+character.sandbox.ctfrolemod]);
       default:
                    break;
                }//End of RND switch
                  
              
                   system.doLink("./talk2");
                }, //function close
                "talkendlove": function (character, system, action) {
                  transer();
                  
               
                  if(!character.sandbox.perma){
                                  if(character.sandbox.host.plantokeep){
                    
                     parer(["q1Heh, you are really enjoying this more than I thought you would. I guess we did the right thing when when we decided to make this permanent!q1",
                       "q1Wow, thats some pretty deep stuff. I think you might be enjoying this more than I am...q1",
                       "q1As long as that is how you feel about it I guess there is nothing to worry about. This is just what you are now so it's a good thing you actually LIKE being my penis.q1", 
                       "q1You sure you didn't become my cock on purpose? If I didn't know any better I might guess this is something you have always wanted. Well now you have it to enjoy... foreverq1",
                       "q1Guess I shouldn't have worried about how you would feel being turned into... this... Then again maybe it's part of the changes... Even so you are enjoying it now so might as well let you embrace your new sticky throbbing lifeq1"]);
                    
                  }else{
                                      
                     parer(["q1Heh, you are really enjoying this more than I thought you would. I wonder if there is a way to make this permanent!q1",
                       "q1Wow, thats some pretty deep stuff. I think you might be enjoying this more than I am...q1",
                       "q1As long as that is how you feel about it, I guess there is nothing to worry about. It's a good thing you actually LIKE being my penis.q1", 
                       "q1You sure you didn't become my cock on purpose? If I didn't know any better I might guess this is something you have always wanted. You better hope it takes us a while to get you changed back.q1",
                       "q1Guess I shouldn't have worried about how you would feel being turned into... this... Then again maybe it's part of the changes... Even so you are enjoying it now so might as well let you embrace it until we change you backq1"]);
                    
                    
                  }
                    
                  }else{
                    
                                          switch (character.sandbox.ctfrole) {
  
                  case "possessive":
                    //Get use to it you are just my cock now. There is no way I am ever letting you go. Get use to it
   parer(character.host["wlove"+character.sandbox.ctfrolemod]);
                    break;
                  case "petpenis":
                    //Very good! Such a good cock. Give me a nice throb and I might let you out to play more often.
                    //"+character.sandbox.host.petname+"
   parer(character.host["wlove"+character.sandbox.ctfrolemod]);
                    break;
                  case "friend":
                    
                   //
   parer(character.host["wlove"+character.sandbox.ctfrolemod]);
      default:
                    break;
                }//End of RND switch
                    
                  }
    
                  
                  system.doLink("./talk2");
                }, //function close
                "talkendemb": function (character, system, action) {
                  transer();
            
                  
               
                   if(!character.sandbox.perma){
                                  if(character.sandbox.host.plantokeep){
                    parer(["q1Don't worry, those feelings are perfectly natural as you get use to being a part of me. Soon you won't even think about it, the only thing going through your mind should be how you can serve my body best.q1","q1Sounds like you are really struggling with what you are now. The best place for you is between my legs and that is where you are going to stay for as long as we live! You have all the time in the world to get use to it!q1","q1Such silly thinking. Your just an organ now, a part of somones anatomy! You are a part of me now, a permanent part!q1","q1Thats perfectly fine, no one but me will ever know. There is a reason they call you my 'private parts', anything cock related is sort of embarrasing unless done in private. And thats right where I am keeping you. A private part of my body, all mine forever!q1"]);
                  }else{
                   
                   parer(["q1Yea that sounds like a lot to think about. I can't say I envy you. You will just have to accept that being attached to my crotch kind of is the defining aspect of WHAT you are.q1","q1I can't say I haven't been a bit embarrassed by all of this too. But it feels so good most of the time I don't even worry about it anymore. I am sure a few more rubbings will clear that head of all those complicated thoughts. Hard to think about much while you are drooling my cum.q1","q1You really feel that way? Well once you have been desensitized to it enough I am sure it will all go away. Your body already seems to be taking to this really well.... So its only a matter of time before your head gets use to it too.q1"]);
                   
                  }
                    
                  }else{
                    
                     switch (character.sandbox.ctfrole) {
                  case "possessive":
                    //Get use to it you are just my cock now. There is no way I am ever letting you go. Get use to it
   parer(character.host["wemb"+character.sandbox.ctfrolemod]);
                    break;
                  case "petpenis":
                    //Very good! Such a good cock. Give me a nice throb and I might let you out to play more often.
                    //"+character.sandbox.host.petname+"
   parer(character.host["wemb"+character.sandbox.ctfrolemod]);
                    break;
                  case "friend":
                      
                   //
   parer(character.host["wemb"+character.sandbox.ctfrolemod]);
    default:
                    break;
                }//End of RND switch
                  }
                  
                  system.doLink("./talk2");
                }, //function close
            "talk2": function (character, system, action) {
                  transer();
                  
                  if(character.sandbox.ignore) {
                    //this is for the THINKING ignores, not throb or horny
                    parer(["Without a word between you the day continues on....","Nothing is said as host continues with his morning","You are so lost in thought that the morning carrys one without any real interaction","You practically end up daydreaming the morning away just pondering on things as host just goes about life as if everything was normal."]);
                    
                    oper(system, "./talkend", "A perfect morning.... ","./talkend","Maybe a bit of real conversation would have been nice...");
                  }else{
               
                    oper(system, "./talkend", "Ponder on that as he continues the day");
                  }
                }, //function close
                "talkendignore": function (character, system, action) {
                  transer();
                  parer("");
                  oper(system, "", "");
                }, //function close
                "weekendnorm": function (character, system, action) {
                  transer();
             //weekend events
                  /*
                   helping a friend move
                   Going over to visit a friend!
                  going to a barbecue
                  camping
                  going to a club!!!!
                  
                  
                  
                  BEING LAZY ALL DAY LONG!
                  Cleaning house //laundry//dishes//
                  Running errends around town all day
                  
                  
                  
                   
                   special triggered ones
                  reading book to search for specific rune. after perma tf fix
                  
                   */ 
                  
                  
                  // below 35 shouldn't possibly be able to get here. except for maybe bret, will leave this here for him.
                  if(character.qualities.ctf<=35&&false){
                    //only bret.
                    
                  }else{
                    
                                                         character.sandbox.erect=false;
                character.sandbox.clothed=true;
              clother();
                    if(character.sandbox.underwear[0]){
                       alt= character.sandbox.underwear[2]+" and ";
                      
                    }else{
                      
                      alt="";
                    }
                   
                  if(!character.sandbox.stealth){
                    
                switch (character.sandbox.ctfrole) {
                  case "bodypart":
                    //doesn't talk to you
                    
                    
                    parer("host continues to get ready for the day, just a quick rub before trapping you within his #altpants. That's the life of a cock though. You can also hear him getting breakfast as you are kept squished in his sheath between his legs.");
                    
                    break;
                  case "possessive":
                    //Get use to it you are just my cock now. There is no way I am ever letting you go. Get use to it
                    parer("host makes sure you can see yourself in the mirror for a few moments. Just to remind you how good you look between his legs before hiding your within his #altpants right where you belong. After that he starts getting breakfast, occasionally giving you a firm rub possessivly.");
                    
                    
                    break;
                  case "petpenis":
                    //Very good! Such a good cock. Give me a nice throb and I might let you out to play more often.
                    
                    parer("host gives you a few loving rubs before he starts to get dressed.  q1You stay soft in there, ok? No throbbing or wiggling!q1 He says and pulls up his pants over you. After that you hear him getting breakfast and doing other morning tasks.");
                   
                    
                    break;
                  case "friend":
                   //
                   default:
                   parer("host leaves you out for most of the morning. Getting breakfast and talking with you before eventually deciding to put some pants on for the day. q1Sorry, but I got to get dressed. I'll let you back out laterq1 He says and pulls up his #altpants over you. He still occasionally says something to you but only passively.");
                   
                   
                    
                    break;
                }//End of RND switch
                               switch (character.sandbox.funvalue) {
                    case 1:
                      //help a friend move
                      
                      system.doLink("./friendmove");
                       character.sandbox.weekendathome=false;
                      break;
                    case 2:
                      //going over to vist a friend
                      
                      character.sandbox.weekendathome=true;
                      system.doLink("./visitfriend");
                      
                      break;
                    case 3:
                      //barbecue
                       character.sandbox.weekendathome=false;
                      system.doLink("./barbecue");
                      
                      
                      break;
  //                  case 4:
  //                    //fishing
  //                    system.doLink("./fishing");
  //                    
  //                    
  //                    break;
  //                  case 5:
  //                    //going to a club
  //                    system.doLink("./club");
  //                    
  //                    break;
                    default:
                       character.sandbox.weekendathome=true;
                     if(rnd(3)!=1){
                       //lazy in house
                       
                        system.doLink("./lazy");
                       
                     }else{
                       //cleaning day in house
                        system.doLink("./cleaning");
                       
                       
                       
                       
                     }
                  }//End of RND switch
                    }else{
                      //stealth
                      switch (rnd(5)) {
                        case 1:
                          
                          
                                 
                        case 2:
                                 
                
                        case 3:
                            system.doLink("./lazy");
                          break;
                        case 4:
                          
                   
                        case 5:
                           default:
                          system.doLink("./cleaning");
                       
                             break;
                      }//End of RND switch
  
                      
                    }
               
                  
                  
                  
  
                  }//unable to leave house check end
                }, //function close
                "weekendstealth": function (character, system, action) {
                  transer();
  //not used yet
                    parer("host continues to get ready for the day, just a quick rub before trapping you within his pants. That's the life of a cock though. You can also hear him getting breakfast as you are kept squished in his sheath between his legs.");
                    
   
                  oper(system, "", "");
                }, //function close
                "cleaning": function (character, system, action) {
                  transer();
           if(!character.sandbox.stealth){
                         if (character.qualities.harmony>50) {
                   //keeps you in pants for cleaning
                    parer("Even though you are trapped in his pants again he doesn't leave the house, instead doing all sorts of chores and cleaning. You hear dishes at one point, a vaccuum.... Just regular life odds and ends. But he could have at least let you out of his pants during this if he wasn't planning to go out side!");
                    
                  }else{
                    //doesn't wear pants for cleaning.
                    
                    if (character.sandbox.ringlost&&!character.sandbox.perma) {
                      parer("Rather than heading out of the house host spends the day inside doing small tasks. Cleaning this, moving that, laundry, dishes, taking out garbage. He is keeping a close eye out for the ring making sure he doesn't accidentally throw it away. Seems like a normal weekend cleanup. But he could have at least let you out of his pants during this if he wasn't planning to go out side!");
                    }else{
                      parer("Rather than heading out of the house host spends the day inside doing small tasks. Cleaning this, moving that, lundry, dishes, taking out garbage. Stuff like that. Seems like a normal weekend cleanup. But he could have at least let you out of his pants during this if he wasn't planning to go out side!");
                      
                    }
                    
                    
                    
                  }
             
           }else{
             //stealth route
             
             if(character.sandbox.stayhidden){
                      parer("Rather than heading out of the house host spends the day inside doing small tasks. Cleaning this, moving that, laundry, dishes, taking out garbage. Seems like a normal weekend cleanup. All the while he has no idea you are tagging along for the ride! The day is a constant swaying and squishing and getting moved around at odd angles. His back must be sore from all the bending over, each time suprising you with the sudden change of direction. It almost feels like being on a roller coaster without a track to see and warn you it's about to decend suddenly!");
             
             parer("Finally he seems to finish everything he wanted to get done and just plops down to rest for awhile... ");
             
                  //oper(system, "./wteasehim", "Tease him a bit","./wbegood","Don't risk him finding you");
               
             }else{
                            parer("Rather than heading out of the house host spends the day inside doing small tasks. Cleaning this, moving that, laundry, dishes, taking out garbage. Seems like a normal weekend cleanup. It is hard work and kind of nice knowing you don't have to clean up any of your messes anymore! The day is a constant swaying and squishing and getting moved around at odd angles. His back must be sore from all the bending over, each time suprising you with the sudden change of direction. It almost feels like being on a roller coaster without a track to see and warn you it's about to decend suddenly!");
             
             parer("Finally he seems to finish everything he wanted to get done and just plops down to rest for awhile... ");
             
             
               
             }
        
             
           }
                 
                  
                    oper(system, "evening/evegoto", "Continue on to the evening");
                }, //function close
                "lazy": function (character, system, action) {
                  transer();
                  if(character.sandbox.stealth){
                    switch (character.sandbox.host.lazy) {
                    case "movies":
                      parer("<h1> WATCHING MOVIES </h1>");
                      parer("host pretty quickly sits down and you hear something playing in the background. Seems he is watching some movies or something. Meanwhile you are stuck in his sheath only able to listen from afar.");
                 
                      
                      break;
                    case "games":
                      parer("<h1> VIDEO GAMES </h1>");
        
                        parer("host eventually sits down and you start to hear weird noises, it's from a TV but not a show or movie. You realize it must be some sort of game he is playing! You can't help but want to play too...");
                        
              
                      
                      
                      break;
                    case "sports":
                      parer("<h1> SPORTS </h1>");
                      
                      parer("host seems to be cooking something again and you quickly recognize popcorn! He sits down and some sort of sports broadcaster starts speaking in the background. You can't exatctly pick out WHICH sport is being played on the screen.");
                      break;
  
                    default:
                  }//End of RND switch
                  
                
       
                   // oper(system, "./stay", "Helplessly stay in his pants and listen");
                    oper(system, "./stealthstay", "Helplessly listen from inside his pants");
  
  
                    
                  }else{
                      switch (character.sandbox.host.lazy) {
                    case "movies":
                      parer("<h1> WATCHING MOVIES </h1>");
                      parer("host pretty quickly sits down and you hear something playing in the background. Seems he is watching some movies or something. Meanwhile you are stuck in his sheath only able to listen from afar.");
                 
                      
                      break;
                    case "games":
                      parer("<h1> VIDEO GAMES </h1>");
                      if(character.sandbox.limits.hasarms){
                        parer("host eventually sits down and you start to hear weird noises, it's from a TV but not a show or movie. You realize it must be some sort of game he is playing! Heck if it is simple enough you might even be able to play with him! The though of that is actually pretty amusing. ");
                        
                      }else{
                        
                          parer("host eventually sits down and you start to hear weird noises, it's from a TV but not a show or movie. You realize it must be some sort of game he is playing! You don't have hands anymore otherwise you might be able to join him... but at least you could ask to watch.");
                        
                      }
                    
                      
                      
                      break;
                    case "sports":
                      parer("<h1> SPORTS </h1>");
                      
                      parer("host seems to be cooking something again and you quickly recognize popcorn! He sits down and some sort of sports broadcaster starts speaking in the background. You can't exatctly pick out WHICH sport is being played on the screen.");
                      break;
  
                    default:
                  }//End of RND switch
              
                
                  character.sandbox.ttcarryover = false;
                  if (character.sandbox.limits.cantalk&&!character.sandbox.permaplugged&&!character.sandbox.permalock) {
                    oper(system, "./asktowatch", "Ask to be let out so you can watch!", "./stay", "Stay in his pants");
                  } else if (character.qualities.essence > character.sandbox.ttcost&&!character.sandbox.permalock&&character.sandbox.runedo.thoughts) {
                    character.sandbox.ttcarryover = true;
                    oper(system, "./asktowatch", "(TT:"+character.sandbox.ttcost+")Ask to be let out so you can watch!", "./stay", "Stay in his pants");
                  } else {
                    oper(system, "./stay", "Helplessly stay in his pants and listen");
                  }
      }
  
                }, //function close
                "asktowatch": function (character, system, action) {
                  transer();
                  if (character.sandbox.ttcarryover) {
                    system.setQuality("essence", character.qualities.essence - character.sandbox.ttcost);
                  }
                  character.sandbox.ttcarryover = false;
  
                  
                  switch (character.sandbox.ctfrole) {
                  case "bodypart":
                    //doesn't talk to you
                    parer("host doesn't even say anything and you suddenly feel a tight grope through the sheath! He isn't even reacting to you asking him something! Each time you try he just gropes you as if it was just a natural twitch from his cock!");
                    oper(system, "./stay","Try to listen in while you stay in his comfy sheath");
                    break;
                  case "possessive":
                    //Get use to it you are just my cock now. There is no way I am ever letting you go. Get use to it
                    parer("host suddenly rubs you through his pants with a laugh. q1Nah the warmth of my sheath and occasional rub is all the entertainment you need.q1 he says");
                    oper(system, "./stay","Try to listen in while you stay in his comfy sheath");
                    break;
                  case "petpenis":
                   default:
                  case "friend":
                   //
              
                    if (character.sandbox.host.lazy=="games") {
                         character.sandbox.clothed=false;
                   character.sandbox.erect=true;
                   clother();
                      
                    
                    if(character.sandbox.limits.hasarms){
                      
                    
                      parer("host thinks about it for a moment and eventually pulls you out, giving a few rubs to help you escape his hungry sheath. You can help but think of it that way sometimes, something that just wants to swallow you whole while host isn't paying attention to you. You look up at him and as if you might even be able to play!");
                       parer("q1Eh you are a bit small for the controller but you could try. Hehe I will go easy on you.q1 he says fetching the other remote for you to use! It turns out to be a lot of fun, sort of like DDR mat but you have to hit buttons with your fist and push the Dpad with your whole arm! Every now and then host starts to lose the erection causing you to be stolen by his sheath again.");
                      
                    
               
                      
                      
                      
                    }else{
                      parer("He lets you out of his pants without too much trouble, unfortunately you have no arms to actually play the game with him.... Still it is fun to watch until his sheath gets lonely and decideds to pull you back in. He has to give you a couple of rubs every few minutes to keep you out. Eventually you give up and just watch from inside his sheath.");
                      
                    }
                    
                       oper(system, "evening/evegoto", "Continue on to the evening");
                  }else{
                               character.sandbox.clothed=false;
                   character.sandbox.erect=false;
                   clother();
                      parer("He lets you out of his pants without too much trouble. He won't let you change the channel at all though, still it is fun to watch until his sheath gets lonely and decideds to pull you back in. He has to give you a couple of rubs every few minutes to keep you out. Eventually you give up and just watch from inside his sheath.");
           
                  
                      oper(system, "evening/evegoto", "Continue on to the evening");
                  }
                  
                   
                    
                    break;
                 
                }//End of RND switch
                
                
                
                 
               
                }, //function close
                "stay": function (character, system, action) {
                  transer();
                  if(character.sandbox.permalock||character.sandbox.permaplugged){
                    if(character.sandbox.permalock){
                           parer("You stay in his pants trying to enjoy what they are doing, at least you get to hear it going on. Sort of like listening to a friend in another room doing something while you are stuck in the time out corner. Except your corner is a set of tight metal rings holding you prisoner in your own sheath!");  
                  
                    }else{
                        parer("You stay in his pants trying to enjoy what they are doing, at least you get to hear it going on. With the plug in your mouth you would probarbly just leak all over is crotch anyway if he let you out.");  
                  
                    }
                    
                  }else{
                       parer("You stay in his pants trying to enjoy what they are doing, at least you get to hear it going on. Sort of like listening to a friend in another room doing something. Passive company. It normally would be super weird to be waving ones cock around during something like this you have to admit.");  
                  
                    
                  }
               
                  oper(system, "evening/evegoto", "Continue on to the evening");
          
                }, //function close
                
                      "stealthstay": function (character, system, action) {
                  transer();
                  parer("You spend the day in his pants right where you belong, but at least you get to hear whats going on. Sort of like hearing a friend in another room doing something. Passive company. Or spying on someone without them knowing you are there! A spy cock movie... that would be interesting...");  
                  
                  oper(system, "evening/evegoto", "Continue on to the evening");
          
                }, //function close
                
                "friendmove": function (character, system, action) {
                  transer();
                  parer("<h1> RARE EVENT </h1>");
                  if(character.sandbox.ignore){
                    
                    parer("Today seems a bit unusual. He leaves the house and a little while later you hear him greet someone you don't recognize. They chat for a bit then host begins moving around lifting things back and forth from a building and into a truck. It seems he is helping someone move!");
                  }else{
                     parer("q1Just a quick warning, I have to help someone move today. So no moving around or getting hard.q1 He says on the way out of the house. A little while later you hear him greet someone you don't recognize. They chat for a bit then host begins moving around lifting things back and forth from a building and into a truck.");
                    
                  }
                  parer("It's funny how someone asking you not to think naughty thoughts actually makes it harder than if they didn't mention it. Soon you find yourself slightly bored and even worse getting horny....");
                 
                      parer("This seems like a really important event! It might be bad if you get hard or move so much it distracts him!");
                  character.sandbox.funholder="host continues to move things around with the other person. It sounds like a ton of work though.",   //happens once every other input
                  character.sandbox.funmidholder2="After a good long while host gets in the truck and travels for a while. You still can't relax since someone else is just a short distance away.  After a while the truck stops and everyoug jumps out to start moving things. This time unloading everything into a new building. "; //happens once in the middle
                  
                          character.sandbox.funexit="weekend/friendmoveexit";
                  
                  oper(system, "rareminigame/screwgame", "Focus!");
                }, //function close
                 "friendmoveexit": function (character, system, action) {
                  transer();
                  switch (character.sandbox.funresult) {
                    case 3:
                    parer("Everything went smoothly and you were able to stay still and soft for him the entire time.");
                       //success
                    case 0:
                   //exit
                      parer("host and his friend finish up moving all the the boxes and furniture.  It took a good bit of the day to do all that and it is practically evening by the time host gets back home. ");
                      
                       oper(system, "evening/evegoto", "Finally let yourself relax some");
                      break;
                    case 1:
                      //got too horny
                      
                    parer("You just can't help it and end up rather horny during the move. hosts legs squishing you pleasureably inside his sheath with every step.... how could you not? At one point the friend laughs seeing host's predicament. q1Haha did you acccidentally find my porn stash or is that just helping you carry stuff!? Damn you must be huge!q1 he says.");
                    
                     oper(system, "./acup","It would be fun to show him!","./acdown","You didn't mean to get aroused!");                  
                    
                    
                    
                      break;
                    case 2:
                      //wiggled too much
                   parer("You just can't help it, you ended up moving and wiggling in his sheath through a bunch of the move! host ended up being rather distracted while lugging things. He eventually has to grab his pants and adjust them squishing you tightly within his sheath so you can't move around as much.");
                       oper(system, "./acup","It actually feels rather nice!","./acdown","You want to wiggle around more now!"); 
                      break;
                  }//End of RND switch
                   
             
                  
                }, //function close
                
                "visitfriend": function (character, system, action) {
                  transer();
                   parer("<h1> RARE EVENT </h1>");
                  if(character.sandbox.ignore){
                    
                    parer("host leaves the house and a little while later you hear him greet someone you don't recognize. They chat for a bit then sit down. They seem to be friends but not in the sexy way (unfortunately). They just chat for a good long while catching up on how things are going. Thankfully host never mentions you even though he does imply a weird change in his life.");
                  }else{
                     parer("q1Just a quick warning, I gonna go visit a friend today, they are married so nothing sexy sorry. Anyway no moving around or getting hard.q1 He says on the way out of the house. A little while later you hear him greet someone you don't recognize. They just chat for a good long while catching up on how things are going. Thankfully host never mentions you even though he does imply a weird change in his life.");
                    
                  }
                  parer("They keep at it for a while but you can't help but feel bored during it. It's just so easy to drift into naughty thoughts or feel the need to wiggle just a bit in host's tight sheath.");
                 
                      //parer("This seems like a really important event! It might be bad if you get hard or move so much it distracts him!");
                  character.sandbox.funholder="host's friend is rather talkative one of those types that can go on for hours. It almost feels like you and host are trapped there!",   //happens once every other input
                  character.sandbox.funmidholder2="The conversation shifts in tone and you hear some cans opened as they get drinks out. Seems host will still be hanging out for a while yet"; //happens once in the middle
                  
                          character.sandbox.funexit="weekend/visitfriendexit";
                  
                  oper(system, "rareminigame/screwgame", "Focus!");
                }, //function close
                   "visitfriendexit": function (character, system, action) {
                  transer();
                  switch (character.sandbox.funresult) {
                    case 3:
                    parer("Everything went smoothly and you were able to stay still and soft for him the entire time. ");
                    case 0:
                      //success
                      parer("host and his friend finish up chatting when the friends wife walks in. They both say their goodbyes and host heads back home, it is practically evening by the time host returns");
                      
                      oper(system, "evening/evegoto", "Relax as host goes home");
                      break;
                    case 1:
                      //got too horny
                      
                    parer("You just can't help it and end up rather horny. His friend even asks him if he is ok after seeing the blush on his face! Eventually he has to stand in behind something just to hide the bulge in his pants you are making! q1You need to find yourself a girlfriend. That is one hell of a tent you have there! Do I even want to know how big you are down there?q1 host is understandably distressed a bit by this but does his best to laugh it off.");
                    
                    
                    
                    
                      oper(system, "./acup", "You just wanted to be used!","./acdown","It is so hard not be horny as a cock!");                  
                    
               
                      break;
                    case 2:
                      //wiggled too much
                   parer("You just can't help it, you ended up moving and wiggling in his sheath! host ended up being rather distracted. Every now and then having to have his friend repeat himself! q1You ok there? You keep moving around like you have a mouse in your pants or something!q1 he says with no idea how close to the truth he might be!");
                      oper(system, "./acup", "It just feels so good inside his sheath","./acdown","Still not use to living in a tight moist sheath");   
                      break;
                  }//End of RND switch
                   
             
                  
                }, //function close
                
                "barbecue": function (character, system, action) {
                   transer();
                   parer("<h1> RARE EVENT </h1>");
                  if(character.sandbox.ignore){
                    
                    parer("host leaves the house and a little while later you hear a large group of people greeting him. It sounds like you are still outside and there is random chatter going around. Eventually you can hear the sound of a grill going and realize it must be some sort of backyard barbacue.");
                    
                  }else{
                    
                     parer("q1Just a quick warning, heading out to a barbecue today. Just stay soft act like a normal cock for a few hoursq1 He says on the way out of the house. A little while later you hear a large group of people greeting him. It sounds like you are still outside so it must be one of those hang out backyard barbecues.");
                    
                  }
                  parer("The conversations are muffled and sort of all blend together. Still there are lots of people around and you have to stay soft and still. Its easier said than done especially when you are actively tying not to think about it!");
                 
                      //parer("This seems like a really important event! It might be bad if you get hard or move so much it distracts him!");
                  character.sandbox.funholder="For the most part people are all standing around eating and talking. They seem distracted enough to not really be paying attention to host's crotch.";   //happens once every other input
                  
                  if(character.sandbox.ws){
                      character.sandbox.funmidholder2="Finally host has his turn getting a bunch of food from the gill. You can tell from the sounds of sizzling food getting louder. It reminds you how strange it is no longer ever feeling hungry. You don't exactly miss food but it is embarrassing that the only thing you have tasted for a while is host's piss and cum."; //happens once in the middle
                  }else{
                      character.sandbox.funmidholder2="Finally host has his turn getting a bunch of food from the gill. You can tell from the sounds of sizzling food getting louder. It reminds you how strange it is no longer ever feeling hungry. You don't exactly miss food but it is embarrassing that the only thing you have tasted for a while is host's cum."; //happens once in the middle
                  }
                
                  
                          character.sandbox.funexit="weekend/barbecueexit";
                  
                  oper(system, "rareminigame/screwgame", "Focus!");
                }, //function close
                  "barbecueexit": function (character, system, action) {
                  transer();
                  switch (character.sandbox.funresult) {
                    case 3:
                    parer("You managed to stay calm like a good cock through the entire event. Only wiggling a few times and most importantly staying soft and contained in his sheath.");
                    case 0:
                      //success
                      parer("The party finally winds down as people start leaving one by one. You can't help but feel you might know a few of the voices that were at the party. It is terribly embarrassing to even think about meeting them again in your current condition! host snags one last burger before leaving as well.");
                      
                      oper(system, "evening/evegoto", "Finally relax as he heads home");
                      break;
                    case 1:
                      //got too horny
                      
                    parer("You almost don't notice it at first as you get harder and start sliding out of his sheath. Your thoughts drifting to what the other cocks around you must have to deal with each day. Those thoughts of cocks quickly causes you to erect as host tries to adjust you in his pants! He has to walk away from the party and sit alone for a while while he waits for you to soften back up!");
                    
                    
                    
                    
                      oper(system, "./acup","You didn't mean to get hard!","./acdown","You wanted some attention!");                  
                    
               
                      break;
                    case 2:
                      //wiggled too much
                   parer("You just can't help it, you ended up moving and wiggling in his sheath! host ended up being rather distracted. Every now and then having to have his friend repeat himself! q1You ok there? You keep moving around like you have a mouse in your pants or something!q1 he says with no idea how close to the truth he might be!");
                      oper(system, "./acup","Wanted someone to play with you!","./acdown","You wanted some attention!");
                      break;
                  }//End of RND switch
                   
             
                  
                }, //function close
                
                "fishing": function (character, system, action) {
                  transer();
                  parer("");
                  oper(system, "", "");
                }, //function close
                "club": function (character, system, action) {
                  transer();
                  parer("");
                  oper(system, "", "");
                }, //function close
  
                "stuckinside": function (character, system, action) {
              //never used?
                if (character.sandbox.enjoyit) {
                  parer("You and host mostly just spend the day awkwardly doing normal ish tasks. Eating lunch, watching tv, avoiding conversation about the whole cock situation. With your size it makes moving around kind of exhausting for host. q1I know you love being my cock but can't you be a bit more cocklike? If you love it so much how about being a bit smaller so we can at least leave the house?q1 He asks giving you a rub");
                } else if (character.sandbox.control) {
                  if(character.sandbox.perma){
                    
                    
                  }else{
                    
                    
                  }
                  parer("You and host mostly just spend the day awkwardly doing normal ish tasks. Eating lunch, watching tv, avoiding conversation about the whole cock situation. With your size it makes moving around kind of exhausting for host. q1Either you need to get smaller or we need to figure out how to fix this fast. Between the weird dreams and the runes... there must be something we can do.q1 He says");
  
                } else {
                  parer("You and host mostly just spend the day awkwardly doing normal ish tasks. Eating lunch, watching tv, avoiding conversation about the whole cock situation. With your size it makes moving around kind of exhausting for host. q1Either you need to get smaller or we need to call a professional! I can't live forever with someone attached to my groin like this! I mean if you were a bit smaller maybe we could sneak you out. Maybe we just need time for it to transform you fully? or.. back! I mean that is an option too!q1 He says.");
  
  
  
                }
                
                  oper(system, "evening/evegoto", "Continue on with the evening");
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
  
  