undum.game.hospital = {



  eventhospital: new undum.SimpleSituation(
          "", {
            actions: {
              "enter": function (character, system, action) {
                transer();
                                character.sandbox.erect=false;
                character.sandbox.clothed=true;
                clother();
                character.sandbox.partial=true;
                character.sandbox.limits.goout=true;
                if(character.sandbox.host.seekhelp=="prof"){
                
                    system.doLink("./prof");
                }else{
                  system.doLink("./doctor");
                  
                }
              
              }, //function close
              "doctor": function (character, system, action) {
                transer();
         parer("host phones ahead to let the hospital know he is coming in with a rather odd situation. He doesn't go into specifics, either out of embarrassment or he just wants to see the look on their face. He has you tightly stuffed away in his clothing making without making any attempt to hide the massive bulge you are making down there. Hypers are just a thing of porno legends, you don't tend to ever see one walking around.");
                
                
                parer("You can't really tell what is going on other than waiting for long periods as host sits down. It seems like an excrutiating wait for him but you are use to long periods like this by now. He starts talking with a nurse for a bit and then changes rooms...... You hear the concerned sound on the nurses voice as she asks THE question.... q1So what seems to be the trouble today?q1");
                oper(system, "./reveal", "Get ready.....");
            
              }, //function close
              "reveal": function (character, system, action) {
                transer();
                
                  character.sandbox.erect=false;
                character.sandbox.clothed=false;
                clother();
                
                
                parer("host slowly removes his pants and underwear in one smooth motion. Just thinking about this has caused you to get a bit hard... The reaction from the nurse is just about the best you could hope for...");
                
                parer("q1OH..... Ummmmmm... I.....q1 She says just staring at you and goes white... Then falls to the floor.....");
                parer("host swears suddenly and hollars out the door that the nurse just FAINTED!!! Soon there is a whole bunch of doctors and nurses comeing to the door checking on what has happened.... And every one of them catch the sight of you attached to hosts crotch. There just was no time to get his pants back on.... and the damage was already done....");
                if((character.sandbox.limits.cantalk)||character.qualities.harmony<50||(character.sandbox.ttcost<character.qualities.essence&&character.sandbox.runedo.thoughts)){
                  
                  oper(system, "./clothes", "Try to get reclothed","./accept","Just accept it");
                }else{
                  oper(system, "./noclothes", "Try to get reclothed","./accept","Just accept it");
                  
                }
                
              }, //function close
              "clothes": function (character, system, action) {
                transer();
  character.sandbox.erect=true;
                character.sandbox.clothed=false;
                clother();
                if (character.qualities.harmony < 50) {

                  parer("host notices your discomfort and starts to get his pants back on, though not before at least 5 people including two guys with a stretcher see you! Even after that the bulge you are making is still on clear view.");
                  parer("One of the actual doctors comes in and quickly appoligizes for that. q1So sorry about this... she was new. This was her first day doing an intake on her own. She is fine by the way.... just a bit surprised. I will be taking it from here. Soo... if you would remove your pants please?q1 He says, this time there is no fainting and the doctor is far more professional.");


                  if (character.sandbox.limits.cantalk) {
                    oper(system, "./hello", "Wave to him and Say Hello?",
                                 "./lookaway", "Look away embarrassed",
                                 "./horny","Ask if he wants to have some fun later");
                  } else {
                    oper(system, "./throb", "Throb and move around a bit", "./lookaway", "Look away embarrassed");

                  }

                  
                }else{
                 //high harmony but you can talk to host
                  if(!character.sandbox.limits.cantalk){
                    system.setQuality("essence",character.qualities.essence- character.sandbox.ttcost );
                    
                  }
                  
                 
                     parer("You quickly ask host to cover you back up before more people come in to see you both like this. He just smiles and gives you a rub to stop your squirming in front of EVERYONE! A few people look up at him when he doesn't seem to react to your protests q1Humm? What it's just my cock. It isn't the boss of me.q1 He says. At least 6 people including two guys with a stretcher saw you! ");
                  parer("One of the actual doctors comes in and quickly appoligizes for that. q1So sorry about this... she was new. This was her first day doing an intake on her own. She is fine by the way.... just a bit surprised. I will be taking it from here. sooo.q1 He says looking at you.....");


                  if (character.sandbox.limits.cantalk) {
                    oper(system, "./hello", "Wave to him and Say Hello?",
                                 "./lookaway", "Look away embarrassed",
                                 "./horny","Ask if he wants to have some fun later");
                  } else {
                    oper(system, "./throb", "Throb and move around a bit", "./lookaway", "Look away embarrassed");

                  }

                  
                  
                  
                  
                }
                

              }, //function close
              "noclothes": function (character, system, action) {
                transer();
                parer("You try to tell host to put his clothing back on but you just can't get enough essence to do it! All you can do is throb with embarrassment as everyone filter in and out of the room to take care of the passed out nurse. At least 6 people including two guys with a stretcher see you!");
                   parer("One of the actual doctors comes in and quickly appoligizes for that. q1So sorry about this... she was new. This was her first day doing an intake on her own. She is fine by the way.... just a bit surprised. I will be taking it from here. sooo.q1 He says looking at you.....");

 oper(system, "./throb", "Throb and move around a bit", "./lookaway", "Look away embarrassed");
          
              
                  
                  
                  
               
              }, //function close
             
              "accept": function (character, system, action) {
                 transer();
                parer("You make no attempt to hide yourself and nither does host. You both just stay there as you extend from his sheath, each person taking a quick glance over at you before they help take care of the fainted nurse. This is a doctors office and you are a cock, there is nothing for you to be embarrassed by being seen here.");
                   parer("One of the actual doctors comes in and quickly appoligizes for that. q1So sorry about this... she was new. This was her first day doing an intake on her own. She is fine by the way.... just a bit surprised. I will be taking it from here. Sooo.q1 He says looking at you.....");


                  if (character.sandbox.limits.cantalk) {
                    oper(system, "./hello", "Wave to him and Say Hello?",
                                 "./lookaway", "Look away shyly",
                                 "./horny","Ask if he wants to have some fun later");
                  } else {
                    oper(system, "./throb", "Throb and move around a bit", "./lookaway", "Look away embarrassed");

                  }
              }, //function close
              "hello": function (character, system, action) {
                transer();
                parer("You smile and wave to the doctor saying a simple Hello to him. The look on his face is a bit amusing, a clear mix of confusion and medical discipline. You can't help but wonder what his own cock is doing in his pants right now seeing you like this. q1Umm... Hello. Since there is a bit of a racial difference I take it you use to have your own body?q1 He asks");
                            system.doLink("./docreact");
              }, //function close
              "horny": function (character, system, action) {
                transer();
             parer("The look on his face is a bit amusing, a clear mix of confusion and medical discipline.Then you flirt with him making no subtle hint that you are asking if he wants to have sex! He frowns just sort of rolls his eyes at that. q1Well at least you are taking this rather well. But no I don't think that would be very professional...?q1 He says glancing up at host for a moment then back to you q1Have you always been this..... forward?q1 he asks");
                             system.doLink("./docreact");
              }, //function close
              "throb": function (character, system, action) {
                transer();
            parer("Your shape is clearly that of a person and your eyes give away your unusual nature. Not to mention the very uncocklike way you move around. The look on his face is a bit amusing, a clear mix of confusion and medical discipline. You can't help but wonder what his own cock is doing in his pants right now seeing you like this. q1Umm... Hello. Since there is a bit of a racial difference I take it you use to have your own body?q1 He asks");
            
                            system.doLink("./docreact");
              }, //function close
              "lookaway": function (character, system, action) {
                transer();
                parer("You turn away from him clearly acting shy and embarrassed at your own situation. The look on his face is a bit amusing, a clear mix of confusion and medical discipline. You can't help but wonder what his own cock is doing in his pants right now seeing you like this. q1Umm... Hello. Since there is a bit of a racial difference I take it you use to have your own body? Can you still understand me??q1 He asks concerned by just how cocklike you currently look");
                
                system.doLink("./docreact");
                
              }, //function close
              "docreact": function (character, system, action) {

                parer(character.host["doctorreact"+character.sandbox.ctfrolemod]);

                if(character.sandbox.limits.cantalk){
                  
                 if(character.qualities.harmony>50){
                   
                   oper(system, "./complain", "Complain about what he just said!","./continue","Go along with it since he is right...");
                 }else{
                   
                   oper(system, "./complain", "Complain about what he just said!","./continue","Go along with it since he is right...","./explain","Try to explain");
                   
                   
                 }
                 
                 
                 
                   
                  
                }else{
                      oper(system, "./throbdefiantly", "Complain about what he just said!","./continue","Go along with it since he is right...");
                  
                  
                }
                
               
               

              }, //function close
              "complain": function (character, system, action) {
                transer();
            
                
                if(character.qualities.harmony>50){
                    
                    parer("You try to make a complaint about host just said about you! Trying to convince the doctor it isn't alllll true! You are just as much a patient as host is in this!q1 The doctor seems a bit conflicted for a moment. Then looks back at host q1Alrigtht I think you can put your pants back on for now if you want.q1 He says with a sigh.");
                    
                parer("host just snickers and begins getting dressed though he leaves you sticking out, not so much being nice but because he can't with you all hard like this at your current size. This was his trip to the doctor not yours afterall. The doctor gives you a glance before returning to his discussion with host.");    
                  character.sandbox.docnope=true;
                  }else{
                    
                    parer("You make a complaint about host just said about you! Trying to convince the doctor it isn't alllll true! You are just as much a patient as host is in this!q1 The doctor seems a bit conflicted for a moment. q1Alright, just please relax this is a complicated matter since there are two of you. And your... configuration has legal concerns as well.q1 He says with a sigh.");
                   
                  }
                system.doLink("./hostcontinue");
              }, //function close
              "throbdefiantly": function (character, system, action) {
                transer();
                parer("You try to give a defiant back and forth throb to indicate your displeasure at what host was saying! It was mostly true... but it still didn't feel right to let him get away with it! host just grins and lets you throb away letting the doctor come up with how own guess as to what it meant.");
                system.doLink("./hostcontinue");
              }, //function close
              
              
              
              "hostcontinue": function (character, system, action) {
           
                
                
                
            
                  parer("host goes on to explain sort of what happened to you, mentioning some weird artifact thing that just dissapeared one day. Then goes on to describe how the transformation sort of changed up and down for a while before settling on what you two look like now. The doctor taking notes through it all. ");
               
                
                oper(system, "./continue", "Wait for them to finish chatting");
              }, //function close
              "explain": function (character, system, action) {
                transer();
             parer("host lets you explain what happened even though he said he would do all the talking. You skip over some of the more delicate details but get the general theme of what happened. How you first had sex and then the next day this happend. You also give a brief mention of the ring and how it just dissapeared one day. Then explaining how the transformation sort of changed up and down for a while before settling on what you two look like now. The doctor takes notes through it all nodding to himself.");
             
             
              oper(system, "./continue", "Let him finish writing his notes");
              }, //function close
              "continue": function (character, system, action) {
                transer();
//                parer("You don't say or do anything to conflict with what host said since it is pretty much all true. Even if it is embarrassing! ");  
//                
                if(character.qualities.harmony>50){
                  
                  parer("q1I see.. I see.... Hummm well what...q1 He stops himself looking back up to host. q1Ah sorry. Umm what is the previous name your... Penis went by?q1 He asks, really treating you like the cock rather than one of the patients! Before you even get a chance to respond host snickers q1It might be best it doesn't try to remember.q1 host says leaning into whisper something to the doctor! That's silly, of course you remember your name!.... right?");
                  
                  if (character.sandbox.limits.cantalk) {
                                oper(system, "./senqueb",".....","./sayname","Say your name","./mecockhi","You only remember being called "+character.host.chost+"'s cock");
     
             
                }else{
                    system.doLink("./senqueb");
                }
                  
                }else{
                  parer("q1I see.. I see.... Hummm I just a have a few more questions, they may get a bit personal though.q1 He says trying to ignore the slight tenting in his pants this is all causing. q1So what was your name before you became host's genitalia?q1 He asks");
                  
                    if (character.sandbox.limits.cantalk) {
                                oper(system, "./lethost", "Let "+character.host.chost+" say your name","./sayname","Say your name","./mecockhi","You only remember being called "+character.host.chost+"'s cock");
     
             
                }else{
                  oper(system, "./lethost", "Let "+character.host.chost+" say your name");
                  
                }
                  
                }
            
                      
          
              }, //function close
              "mecockhi": function (character, system, action) {
                transer();
                parer("The doctor looks a rather concerned when you say that making a few important notes. host just smiles knowingly and gives you a rub when the doctor isn't looking. It was mostly a joke, of course you remember your own name! You do... remember it. You were not always called host's cock.... You are pretty sure... q1Alright now for the more sensitive questions.q1");
                
                
                
             oper(system, "./senque", "Listen to the questions");
              }, //function close
              
              
              "lethost": function (character, system, action) {
                transer();
                
                if (character.qualities.harmony>50) {
                   parer("q1It might be best he doesn't try to remember.q1 host says leaning into whisper something to the doctor! That's silly, of course you remember your name!.... right?");
                   
                   if (character.sandbox.limits.cantalk) {
                     parer("The doctor nods and then looks down to you q1I have to ask some more personal and private questions now.q1");
                    
                  }else{
                    if(character.sandbox.ws){
                      
                      parer("The doctor nods and then looks down to you. q1I have to ask some more personal and private questions now.q1 He sees how you don't have a mouth to even respond with, just a slit that is only good for pissing");
                    }else{
                       parer("The doctor nods and then looks down to you. q1I have to ask some more personal and private questions now.q1 He sees how you don't have a mouth to even respond with, just a slit that is only good for cumming. q1I hope you can answer them for him hostq1 He says");
                      
                    }
                   
                    
                  }
                   
                   oper(system, "./senque", "Listen to the questions");
                }else{  
                  
                  
                  
                 
                  if (character.sandbox.limits.cantalk) { 
                    parer("host picks up on your lack of response and quickly says your name used to be player. Though it is probably better to just call you his cock now. Both of you have basically agreed things are better like this after all. The doctor shrugs and writes it all down.....");
                     parer("The doctor nods and then looks down to you q1I have to ask some more personal and private questions now.q1");
                   
                  }else{
                    if(character.sandbox.ws){
                      
                      parer("The doctor nods and then looks down to you. q1I have to ask some more personal and private questions now.q1 He sees how you don't have a mouth to even respond with, just a slit that is only good for pissing");
                    }else{
                       parer("The doctor nods and then looks down to you. q1I have to ask some more personal and private questions now.q1 He sees how you don't have a mouth to even respond with, just a slit that is only good for cumming. q1I hope you can answer them for him hostq1 He says");
                      
                    }
                 
                  
                }
                    oper(system, "./senque", "Listen to the questions");
              }
            
               
            
              }, //function close
              "sayname": function (character, system, action) {
                transer();
             parer("You tell him your name is player. And that there is probably a missing person notice out for you that probably needs dealing with too. He sighs but nods taking an extra note... ");
                oper(system, "./sillytayoh", "Say your name and ask what the name of his cock is!","./senqueb","Let him continue");
          
              }, //function close
              "sillytayoh": function (character, system, action) {
                transer();
                parer("The doctors eyes go wide when you ask that! It actually caught him completely off guard. q1I... My cock doesn't have a name. Most people don't name their cocks.q1 He says as you get a knowing throb from host! A subtle gesture as if to hint that should be the same for you! q1Alright I have a few more questions and we should be done.... They are a bit more personal though... I hope you don't mind.q1 he says");
                 oper(system, "./senque", "Listen to the questions");
              }, //function close
              "senqueb": function (character, system, action) {
                transer();
                parer("q1Alright I have a few more questions and we should be done.... They are a bit more personal though... I hope you don't mind.q1 he says");
               
       
                system.doLink("./senque");
              }, //function close
              "senque": function (character, system, action) {
                transer();
     
                if(character.sandbox.limits.cantalk){
                 
                   system.doLink("./senqueyou");
                  
                }else{
                  system.doLink("./senquehost");
                  
                }
            
              }, //function close
              "senqueyou": function (character, system, action) {
                transer();
                if (character.sandbox.ws) {
                  parer("q1Due to your configuration.... I assume you also funciton anatomically as his cock as well? What I mean is does his piss pass through your body and exit your mouth? Are you able to taste it and is there any difficulty in the flow?q1 He asks");
                  if(character.sandbox.pissaddiction>5){
                    
                    oper(system, "./lovews", "Tell the doctor how you have gotten addicted to piss.","./wsembar","Tell him its really embarrassing");
                  }else{
                    oper(system, "./hatews", "Tell the doctor you hate it.","./wsembar","Tell him it's really embarrassing");
                    
                  }
                
                }else{
                  
                  system.doLink("./cumque");
                  
                }

              }, //function close
              "hatews": function (character, system, action) {
                transer();
                   if (character.sandbox.senquews) {
                   parer("You tell the doctor all about how it tastes and how every morning you wake up to him pointing you at the toilet and filling your mouth with the stuff! You get a bit of a kick out of describing every detail to him, watching the poor doctor squirm a bit in his seat! The way it builds pressure inside your urethra, how it flows over your tongue no matter what you do. Tasting it in your mouth all day long, practically replacing your saliva.... q1OK OK.... I get the idea! I... I will just write that down...q1 He says fliping the page over");
                }else{
                     parer("You try not to think about how it tastes... Or how every morning you wake up to him pointing you at the toilet and filling your mouth with the stuff! The way it builds pressure inside your urethra, how it flows over your tongue no matter what you do. Tasting it in your mouth all day long, practically replacing your saliva. You just shudder thinking about it knowing it won't be long till you get used again.");
                                     if(character.qualities.harmony){
                     parer("host just shurgs q1I never really thought about it. It is just a cock now, it pisses just fine like any other. Maybe it is a little bit harder sometimes due to all the squirmingq1 he says with a shrug. The doctor nods with a frown. q1Please do you job as his cock a bit better... You serve a vital biological functioin now.q1 He says scolding you!");
                    
                  }else{
                    
                   parer("host just laughs and nods q1Yea I am pretty sure he doesn't like it much. Always trying to make me miss and stuffq\1 The doctor nods with a frown and looks down to you. q1You serve a vital biological function now. I know it is distressing but you have to accept that this is your bodies job nowq1 He says scolding you!");
                  }
                 
                  
                  
                
                }
                
               
                oper(system, "./cumque", "Next question");
              }, //function close
              "lovews": function (character, system, action) {
                transer();
                   if (character.sandbox.senquews) {
                  parer("You tell the doctor all about how it tastes and how every morning you wake up to him pointing you at the toilet and filling your mouth with the stuff! But the worst part is how it has been affecting you. Every time his piss flows over your tounge you can't help but like it more. It has gotten really bad to the point you get anxious if he hasn't pissed in a while. You never wanted to love piss but no matter how hard you want to deny it... you love the taste and how it feels! q1Oh dear.... I am so sorry. I think. Humm... some psycological repercussions...q1 he mumbles and flips over the page");
                }else{
                  
                    parer("You think about how it tastes and how every morning you wake up to him pointing you at the toilet and filling your mouth with the stuff! The worst part is how it has been affecting you. Every time his piss flows over your tounge you can't help but like it more. It has gotten to the point you get anxious if he hasn't pissed in a while. You never wanted to love piss but no matter how hard you want to deny it... you love the taste and how it feels!");
                  
                   if(character.qualities.harmony){
                     parer("host just shurgs q1I never really thought about it. It is just a cock now, it pisses just fine like any other.q1 he says with a shrug.");
                    
                  }else{
                    
                     parer("host just laughs and nods q1Well I certainly don't hear him ever complain about it. I mean it's not like he has much choice in the matter. When you gotta go you gotta go.q1 he says with a shrug.");
                  }
                 
                  
                  
                
                }
               
            oper(system, "./cumque", "Next question");
              }, //function close
              "wsembar": function (character, system, action) {
                transer();
                if (character.sandbox.senquews) {
                    parer("You tell the doctor all about how it tastes and how every morning you wake up to him pointing you at the toilet and filling your mouth with the stuff! It is actually kind of nice feeling and doesn't taste horrible... But it is so embarrassing how you have to do the job of his penis. You just don't have any choice, now that you are basically functioning as his penis. There is such a rush of humiliation every time you see that yellow liquid shoot from your mouth. It just feels so wrong... but you don't hate it... It's just... weird. q1I.. see. Yes that does sound rather distressing. I am sure you will get used to it some day.q1 He says fliping the page over");
                }else{
                  parer("You think about how it tastes and how every morning you wake up to him pointing you at the toilet and filling your mouth with the stuff! It is actually kind of nice feeling and doesn't taste horrible... But it is so embarrassing how you have to do the job of his penis. You just don't have any choice, now that you are basically functioning as his penis. There is such a rush of humiliation every time you see that yellow liquid shoot from your mouth. It just feels so wrong... but you don't hate it... It's just... weird.");
                  
                  if(character.qualities.harmony){
                     parer("host just shurgs q1I never really thought about it. It is just a cock now, it pisses just fine like any other.q1 he says with a shrug.");
                    
                  }else{
                    
                     parer("host just laughs and nods q1Well I certainly don't hear him ever complain about it. I mean it's not like he has much choice in the matter. When you gotta go you gotta go.q1 he says with a shrug.");
                  }
                 
                  
                  
                }
        
            oper(system, "./cumque", "Next question");
              }, //function close 
             "senquehost": function (character, system, action) {
                transer();
             parer("q1Due to your configuration.... I assume he also funcitons anatomically as your cock as well? What I mean is does your piss pass through his body and exit his mouth? Is he able to taste it and has there been any reluctance or distress at doing the task?q1 He asks");
             
             parer("Before host responds, you wonder how you would respond if you could...");
                character.sandbox.senquews=false;
              if(character.sandbox.pissaddiction>5){
                    
                    oper(system, "./lovews", "You have gotten rather addicted to piss...","./wsembar","Its really embarrassing");
                  }else{
                    oper(system, "./hatews", "You hate it.","./wsembar","It's really embarrassing");
                    
                  }
              }, //function close
              "cumque": function (character, system, action) {
                transer();
                  transer();
               
                if(character.sandbox.limits.cantalk){
                 
                   system.doLink("./cumqueyou");
                  
                }else{
                  system.doLink("./cumquehost");
                  
                }
            
              
              }, //function close
              "cumqueyou": function (character, system, action) {
                transer();
            parer("q1As I am sure you are aware... The secondary function of a penis is to serve as a reproductive organ. Are you capable of... orgasm and ejeculation? Does your body feel different than when you were not like this?q1 he asks");
        
                oper(system, "./cumyay", "Cumming and orgasms are amazing!","./describe","Describe it in detail","./demo","Ask if he wants a demonstration");
              }, //function close
              
              
              "cumquehost": function (character, system, action) {
                transer();
              parer("q1As I am sure you are aware... The secondary function of a penis is to serve as a reproductive organ. Have you tried to reach orgasm since this happened.... and is he still capable of ejeculation? Though most important how does he... your cock feels different now than before?q1 he asks");
        
        
        if(character.qualities.harmony>50){
             
                      parer("host thinks about it for a few moments. q1Well it was really strange at first... But the whole thing feels like my cock did just bigger. I mean it still is my cock, after all. I really can't even tell it is anything but a normal  throbbing hard cock these days. Cumming still feels great but I haven't tried to have sex yet....q1 He says.");
           
          
        }else{
          
           parer("host thinks about it for a few moments. q1Well coming feels great, better than it use to feel for sure. For both of us. I mean he never complains about thing, he is just happy to be a big hard drooling cock.q1 He says.");
          
          
        }
          
             oper(system, "./descfun", "Think about how you would answer that....");
              }, //function close
              "descfun": function (character, system, action) {
                transer();
           parer("Your skin doesn't feel much different, just sort of more pliable. You already know you are pretty much covered in cock flesh other than your head. Touching it is mostly normal but brushing against it sends shivers up your entire spine... if you even have one. Then a bit more rubbing and it starts to make you feel... desperate anxious and almost lost in the intensity. More stimulation and you really don't feel normal anymore, everything becomes hard to move and your mind is completely taken over by the orgasmic sensations. That finally burst though, it's like screaming at the top of your lungs as the pleasure surges from you almost like it was an energy of its own. As if the entire world around you could shatter at the sheer intesity of the feeling!");
           
           parer("You don't even notice as you start drooling precum as you think about that... host just snickers q1And there it goes again...q1 He says");
          oper(system, "./oops", "Try to clear the pre from your mouth");
              }, //function close
              "cumyay": function (character, system, action) {
                transer();
                parer("You quickly go on about how good it feels and how much you love it when host makes you cum! The best part is when you feel it shoot from your balls and flows into your mouth! The taste is so good and it just keeps going and going! From your size it feels like gallons of the wonderful sticky salty stuff shoot from your mouth! And of course the orgasms are amazing! Being so close to the source BEING the source! You tell him how you never want to be anything but a cock for the rest of your life!");
                
                parer("The doctor actually stopped writing and you hear the pencil hit the floor.q1 OH sorry... umm.... q1He says having to bend over to pick it up... also bringing him slightly closer to you... He is definitely blushing and there is absolutely a hard cock in his pants!. q1umm... yes... that's good.q1 he says...");
                 oper(system, "./oops2", "Just smile and wait for him to continue");
              }, //function close
              "describe": function (character, system, action) {
                transer();
                parer("You tell him how it all feels really good, but it is more complex than he might expect. Your skin doesn't feel much different at first, just sort of more pliable. You already know you are pretty much covered in cock flesh other than your head. Touching it is mostly normal but brushing against it sends shivers up your entire spine... if you even have one. Then a bit more rubbing and it starts to make you feel... desperate anxious and almost lost in the intensity. More stimulation and you really don't feel normal anymore, everything becomes hard to move and your mind is completely taken over by the orgasmic sensations. That finally burst though, it's like screaming at the top of your lungs as the pleasure surges from you almost like it was an energy of its own. As if the entire world around you could shatter at the sheer intesity of the feeling!");
                parer("The doctor just has his mouth hanging open as you finish describing it. The moment is only broken by the sudden flow of precum flooding your mouth! host snickers q1Ah... sorry about that. Umm next question?q1");
                
                oper(system, "./oops", "Try to clear the pre from your mouth");
              }, //function close
              "demo": function (character, system, action) {
                transer();
                if(character.sandbox.limits.hasarms){
                  parer("You don't say anything and just shrug, then begin rubbing yourself up and down! host even manages to blush when you start doing that and lets out a bit of a moan! He quickly grabs you to start jerking you off! The doctor holds up a hand FAST q1NO no no! You don't need to show me! I just wanted you to tell me about it!q1 He says as you and host both look a bit dissapointed.");

                  parer("After that you try to explain it a bit better but every time you open your mouth more pre ends up blocking your throat. Your body has already reached a point of being super sensitive, even talking is making you harder from the feeling of it vibrate your throat! The doctor just puts his pencil down to pinch between his eyes. The whole scenario of a cock trying to describe cumming while they are constantly interrupted by drooling precum making a larger and larger puddle on his floor seems to have gotten to him.");
                  
                }else{
                   parer("You don't say anything at first and just look up at host. He knows exactly what you are thinking and grabs you to start jerking you off! The doctor holds up a hand FAST q1NO no no! You don't need to show me! I just wanted to ensure everything was functioning!");
                  parer("After that you try to explain it a bit better but every time you open your mouth more pre ends up blocking your throat. Your body has already reached a point of being super sensitive, even talking is making you harder from the vibration of your throat! The doctor just puts his pencil down to pinch between his eyes. The whole scenario of a cock trying to describe cumming while they are constantly interrupted by drooling precum making a larger and larger puddle on his floor seems to have gotten to him.");
                }
               
                 oper(system, "./oops", "Try to clear the pre from your mouth");
              }, //function close
              "oops": function (character, system, action) {
                transer();
                character.sandbox.piccum=true;
          parer("You do your best to deal with the slow leak of pre into your mouth as the doctor continues...");
                system.doLink("./oops2");
              }, //function close
              "oops2": function (character, system, action) {
                transer();
               if(character.sandbox.host.host=="keagen"){
                     parer("q1Alright... You have already talked to the Professor so that clears up one problem. As you know... when it comes to arcane induced conjoinments seperation is almost always a bad idea. Though this is the most unusual example of it I have ever seen.... And there is one major problem with it...q1 He says looking more concerned than before....");
                 
               }else{
                  parer("q1Alright... So I will need to send you to an arcane consultant. They are one of the professors at the nearby college. Though I can tell you a few things that I know for certain.... When it comes to arcane induced conjoinments seperation is almost always a bad idea. Though this is the most unusual example of it I have ever seen.... And there is one major problem with it...q1 He says looking more concerned than before....");
               }
               
                
                
                oper(system, "./badnews", "??????");
              }, //function close
              
              "badnews": function (character, system, action) {
                transer();
                parer("q1There are a few laws in place that cover this sort of thing... Maintaining the rights and identities of conjoined individuals. However in the case one of them takes over a vital major function of the body. They are considered a PART of that persons body, rather than conjoined to them.q1 He hesitates before continuing");
                if(character.sandbox.ws){
                  parer("q1Because host uses you to urinate with... Leagally you are considered hosts penis.q1");
                  
                }else{
                  parer("q1Because host uses you to ejeculate with... Leagally speaking you are considered hosts penis.q1");
                  
                }
                parer("q1It is also something that needs to be updated on all of your offical records... But don't worry the hospital will take care of all of that.  Though I will need a photograph to approve the offical change.q1 He says pulling out a phone from his pocket.");
                oper(system, "./cheese", "Say cheese?","./nu","Nuuuuuu!");
              }, //function close
              "nu": function (character, system, action) {
                transer();
                
                if (character.sandbox.piccum) {
                   parer("Before you can even hide your face, or try to... His camera flashes! The worst part is you were still drooling cum! You can only imagine how it looks.... turned into a cock... drooling precum... sticking out of a sheath between host's legs! It is beyond embarrassing but it is your life... You can't do anything about it now");
                }else{
                  
                   parer("Before you can even hide your face, or try to... His camera flashes! You can only imagine how it looks, mostly turned into a cock... sticking out of a sheath between host's legs! It is beyond embarrassing but it is your life... You can't do anything about it now");
                  
                }
               parer("You hear the doctor mumble under his breath... q1Wait till they see this....q1");
               parer("q1Alright... that should do it. I will send a copy of this report to your address and a copy of it to your place of work. That should clear up any questions they might have.q1 he says. Though you are willing to bet it will have the OPPOSITE effect! ");
               
               
              oper(system, "./everyone", "Realize everyone is going to know soon!");
              }, //function clos
              "cheese": function (character, system, action) {
                transer();
                if(character.sandbox.limits.cantalk){
                   if(character.sandbox.piccum){
                
                   parer("You have just enough time to smile and try to say CHEESE before his camera flashes! Unfortunately all that came out was another mouthfull of precum.... You can only imagine how it looks.... a big smiling cock... drooling precum... sticking out of a sheath between host's legs! It's so embarrassing but... It is your life now, might as well embrace it...");
                }else{
                  
             parer("You have just enough time to smile andsay CHEESE before his camera flashes! You can only imagine how it looks.... a big smiling cock... sticking out of a sheath between host's legs! It's so embarrassing but... It is your life now, might as well embrace it...");
                }
                  
                }else{
                        if(character.sandbox.piccum){
                
                   parer("You try to say cheese but your mouth is just a slit drooling cum...You do manage a nice throb just as his camera flashes! You can only imagine how it looks.... turned into a cock... drooling precum... sticking out of a sheath between host's legs! It's so embarrassing but... It is your life now, might as well embrace it...");
                }else{
                  
                   parer("You try to say cheese but your mouth is just a slit... You do manage a nice throb just as his camera flashes! You can only imagine how it looks, mostly turned into a cock... sticking out of a sheath between host's legs!  It's so embarrassing but... It is your life now, might as well embrace it...");
                  
                }
                  
                }
             
               parer("You hear the doctor mumble under his breath... q1Wait till they see this....q1");
               if(character.sandbox.host.host=="keagen"){
                 parer("q1Alright... that should do it. I will send a copy of this report to your address and a copy of it to your college. That should clear up any questions they might have.q1 he says. Though you are willing to bet it will have the OPPOSITE effect! ");
                 
               }else{
                 parer("q1Alright... that should do it. I will send a copy of this report to your address and a copy of it to your place of work. That should clear up any questions they might have.q1 he says. Though you are willing to bet it will have the OPPOSITE effect! ");
                 
               }
               
               
                oper(system, "./everyone", "Realize everyone is going to know soon!");
              }, //function close
              "everyone": function (character, system, action) {
                transer();
                character.sandbox.erect=false;
                character.sandbox.clothed=true;
                clother();
                if(character.sandbox.host.host=="keagen"){
                  parer("Between the images the doctor took, all the paperwork that is going to circle around, the people that saw you when the nurse fainted AND sending a copy of this medical report to the college... Everyone is going to know what you are. Where you are...");
                  
                }else{
                  parer("Between the images the doctor took, all the paperwork that is going to circle around, the people that saw you when the nurse fainted AND sending a copy of this medical report to host's workplace... Everyone is going to know what you are. Where you are...");
                  }
                parer("q1Alright I am making a follow up appointment and a consulting from the professor. If anything cums up... happens give us a call immediately.q1 The doctor says and heads out of the room after handing host a packet of papers. host sighs with relief q1At least that went well.q1 He says and begins stuffing you back into his clothing");
                oper(system, "evening/fromhospital", "Try to relax as host heads back home");
              }, //function close
              "prof": function (character, system, action) {
                transer();
                parer("(Keagen goes to the professor first and THEN the doctor. Professor will be added next update)");
                oper(system, "./doctor", "Go see the doctor");
              }, //function close
              "": function (character, system, action) {
                transer();
                parer("");
                oper(system, "", "");
              }, //function close
              "cleaning": function (character, system, action) {
                transer();
         
               
                  oper(system, "evening/evegoto", "Continue on to the evening");
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
