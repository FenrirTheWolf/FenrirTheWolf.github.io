undum.game.ch2morning = {

    ch2morning: new undum.SimpleSituation(
        "", {
            actions: {
                "enter": function(character, system, action) {

                    //                                transer();
                    //                        parer("Once again you find your self attached to someone. Serving as their cock.... You must have wanted this or you wouldn't have gone through with it. Even if you do manage to unmerge from host... You will just end up like this with someone else. How many times can you take this risk before it becomes VERY permanent....");
                    //                        oper(system, "./wakehim", "Wake up your new host.","./snooze","Let him sleep in");
                    //                

                    system.doLink("./sleep");
                }, //function close

                "sleep": function(character, system, action) {
                    transer();

                    if (character.host.genderismale == false) {

                        parer("A few hours later you start waking up to a strange feeling in your rear. As you try to move a sudden surge of pleasure shoots through your ass! Looking around you realize host is still behind you! Even through if feels like your cock is still stuck inside him... you also feel something in your ass... or connected to your ass? All you can do is wiggle around and try to disentangle yourself from him but it becomes clearer and clearer that you can't.... <p>It is happening again.... You know all to well what is about to occur ");
                    } else {
                        parer("A few hours later you start waking up to a strange feeling in your rear. As you try to move a sudden surge of pleasure shoots through your ass! Looking around you realize host is still behind you, cock deep in your rear! He must have gotten hard again in the night! All you can do is wiggle around and try to disentangle yourself from him but it becomes clearer and clearer that you can't dislodge his cock by yourself.... <p>It is happening again.... You know all to well what is about to occur ");

                    }

                    system.animateQuality("essence", character.qualities.essence + 40, { from: 1, to: 0 });
                    if (character.qualities.essence > 19) {
                        system.animateQuality("essence", character.qualities.essence - 20, { from: 1, to: 0 });
                        system.animateQuality("ctf", 20);
                        system.setQuality("harmony", 50);
                    }
                    system.setQuality("lust", -1);


                    var hostsettings = {
                        erect: true,
                        clothed: false,
                        hasbook: false,
                        reqwater: false,
                        ringcheck: false,
                        cockmeplz: 0,
                        cockreq: false,
                        ringfinger: false,
                        frombook: false,
                        bookwork: false,
                        acc: 1.1,
                        discovery: 0,
                        sextalk: false,
                        ringhelp: false,
                        dayringlost: 999,
                        ignore: false,
                        ringlost: false,
                        outmore: false,
                        ringstuck: false,
                        ringreallylost: false,


                        fakering: false, //If the host has bought a fake ring or not.
                        uwchoice: 0, //Underwear choice. 0 none chosen, 1 simple chosen, 2 embarrassing one chosen.
                        sexnum: 0, //number of times had sex
                        ringgone: false, //ring is lost forever
                        ringgonefirst: true, //ring lost forever reaction queued up
                        perma: false, //host has told you he thinks you will never be able to change back
                        changeofheart: false, //the enjoyit swaperoo
                        reward: false, //night time trigger for reward scene
                        punish: false, //night time trigger for punishment scene
                        toyholdery: [], // list of available toys
                        rewardask: false,
                        harmonyunlockup: false, //unlock for higher levels of harmony. Turns requests into words
                        harmonyunlockdown: false, //unlock for lower levels of harmony. Turns on checks for how you are doing during the day.
                        permabegging: false,
                        adultstoreoutmore: false, //uses ./adultstoreselector to tell if we need out of pants or in pants variation
                        sellringplz: false, //perma and host is going to sell the ring
                        ringsold: false, //ring has been sold or not
                        blinkyactivated: false, //subliminal teases for max harmony
                        forgotten: false, //after timeskip caused by perma and pills
                        partial: false, //after hospital thing caused by perma and low CTF amount
                        usedpillsonce: false, //tells if they have used the pills at least once
                        pillprimer: false, //If the host has asked to use the pills to enter fogotten cock path
                        pillroute: false, //Tells us if the player has started on the path to forgotten
                        pillwearoff: 0, //morning trigger to show that the pill has worn off.
                        limitbreak: false, //disables harmony cap to stop insane TT costs.
                        tookpill: false, //check for if the host took a pill the night before
                        forgottenfirst: false, //has first time entering workspace as a forgotten cock happened yet
                        pilltoforget: 0,
                        newtracker: {
                            cocked: false
                        },
                        didresearch: false



                    };

                    /*
               
               
               
               20 20 
  40 20 TRY TO WARN HIM
  20 40  
  0   60  
  20 60  drift off enjoying
  0   80
  ctf full You know what you want
  
  Stealth route ch2
  try to warn him
  drift off enjoying
  you know what you want
               
               */


                    for (let x in hostsettings) {
                        character.sandbox[x] = hostsettings[x];


                    }


                    character.sandbox.limits.goout = true;
                    character.sandbox.gooutcount = 0;

                    clother();
                    oper(system, "./merge1", "Go back to sleep", "./ask", "Wiggle and try to warn him");
                },
                "ask": function(character, system, action) {
                    transer();

                    if (character.host.genderismale == false) {

                        parer("You give host a few prods trying to wake him up, only managing to get a few garbled words out of him.\
                            Getting a bit more insistent, you wiggle your butt kind of pulling on your member! This certainly gets a response, he lets out a moan and stretches in his sleep! He shifts around to get comfortable again, unfortunately this includes him starting to rub against you in his sleep! Within moments he brings you and himself back to another pair of orgasms! It feels oddly good with your cock between you legs lodged inside him... <p>The changes once again have more fuel to work with, it just feels so good as you drift off.");

                    } else {

                        parer("You give host a few prods trying to wake him up, only managing to get a few garbled words out of him.\
                            Getting a bit more insistent, you wiggle your butt kind of pulling on his member! This certainly gets a response, he lets out a moan and stretches in his sleep! He shifts around to get comfortable again, unfortunately this includes him starting to hump you in his sleep! Within moments he brings you and himself back to another pair of orgasms and more cum filling up your insides! <p>The changes once again have more fuel to work with, it just feels so good as you drift off.");
                    }





                    system.animateQuality("essence", character.qualities.essence + 20);
                    oper(system, "./merge1", "Go back to sleep");
                },
                "merge1": function(character, system, action) {
                    transer();


                    if (character.host.genderismale == false) {
                        parer("Your eyes open and everything feels strange, your entire body seems to tingle with warmth.\
                                    You realize you have to look UP to see host's head! Below you see your own legs are short and stubby. You wince knowing better to think this is a dream. You can't really feel your cock anymore.... if anything it feels like it has changed directions... as it your cock was attached to him and spreading through your own body! It feels HUGE as if taking up every inch of your insides! Your rear seems to pulse with a strange feeling and everything else feels hazy as you drift off to sleep again.");

                    } else {

                        parer("Your eyes open and everything feels strange, your entire body seems to tingle with warmth.\
                                    You realize you have to look UP to see host's head! Below you see your own legs are short and stubby. You wince knowing better to think this is a dream. His cock feels HUGE as if taking up every inch of your insides! Your rear seems to pulse with a strange feeling and everything else feels hazy as you drift off to sleep again.");
                    }





                    if (character.qualities.essence > 19) {
                        system.animateQuality("essence", character.qualities.essence - 20, { from: 1, to: 0 });
                        system.animateQuality("ctf", character.qualities.ctf + 20);
                    }
                    clother();
                    oper(system, "./merge2", "Drift off to sleep");
                },
                "merge2": function(character, system, action) {
                    transer();
                    if (character.sandbox.ch2re) {
                        parer("Once again you wake up, the sun starting to shine through the window just a bit. Even better you don't feel host's cock\
                            keeping you prisoner like earlier. With a moan you move around but are stopped rather abruptly as your waist seems stuck in place. Looking down you see the massive shape of host's balls, right where they should be. Trying to flex them causes each to pull up slightly in his sack. You tug a few more times and smile knowing what is happening.");

                    } else {
                        if (character.host.genderismale == false) {


                            parer("Once again you wake up, the sun starting to shine through the window just a bit. Even better you don't feel host's cock\
                                keeping you prisoner like earlier. With a sigh you move around but are stopped rather abruptly as your waist seems stuck in place. Looking down you see the massive shape of host's\
                                NEW balls, but surprisingly not your legs. In a weird way you feel like that is your sack that he effectively stole! Trying to flex them shockingly causes HIS balls to pull up slightly in his sack. You tug a few more times and knowing exactly what is happening. Just like before... your fate is already sealed. ");
                        } else {


                            parer("Once again you wake up, the sun starting to shine through the window just a bit. Even better you don't feel host's cock\
                                keeping you prisoner like earlier. With a sigh you move around but are stopped rather abruptly as your waist seems stuck in place. Looking down you see the massive shape of host's\
                                balls, but surprisingly not your legs. Trying to flex them shockingly causes his balls to pull up slightly in his sack. You tug a few more times and realize exactly what is happening. Just like before... your fate is already sealed. ");
                        }

                    }

                    if (character.qualities.essence > 19) {
                        system.animateQuality("essence", character.qualities.essence - 20, { from: 1, to: 0 });
                        system.animateQuality("ctf", character.qualities.ctf + 20);
                    }
                    clother();
                    oper(system, "./wake", "Try to wake yourself up", "./dreamer", "Drift off enjoying the feelings");
                },
                "dreamer": function(character, system, action) {
                    transer();
                    if (character.host.genderismale == false) {

                        parer("The closeness of being a part of someone else just seems so erotic. You know you have missed it. Your hands drift down to your own cock and you begin masturbating. However your entire body feels just as sensitive! Slowly you stroke where your cock enters his body enjoying how good everything feels! Surprisingly even host starts to moan during this, gently humping your body.");
                        parer("Eventually you both cum, already connected to the point you can feel host's orgasm! Your stomach bloats and feels full once he finishes as if from a large meal. Instinctively you open your mouth but nothing comes out... yet. <p>It almost feels like cum is traveling UP your cock and ass at the same time...  and into your belly! Soon all feeling of the cock being yours is gone as you seem to meld fully into his crotch. Reaching farther down reveals the start of host's balls, your balls.....");
                    } else {
                        parer("The closeness of being a part of someone else just seems so erotic. You know you have missed it. Your hands drift down to your own cock and you begin masturbating. However your entire body feels just as sensitive! Slowly you stroke your cock and body enjoying how good everything feels! Surprisingly even host starts to moan during this, gently humping your body.");
                        parer("Eventually you both cum, already connected to the point you can feel host's orgasm! Your stomach bloats and feels full once he finishes as if from a large meal. Instinctively you open your mouth but nothing comes out... yet. <p>Your cock seems to shrink with each blast of cum that leaves it, you continue to pump easily twice the amount of cum you normally would! Your hands\
                            soon find a perfectly blank crotch, reaching farther down reveals the start of host's balls, your balls.....");

                    }


                    system.animateQuality("essence", character.qualities.essence + 20);
                    oper(system, "./dreamer2", "Pay closer attention to whats happening");
                },
                "dreamer2": function(character, system, action) {
                    transer();
                    parer("Your body is still getting smaller. Almost like his groin is absorbing you and taking control of you. His veins working their way through your body and the urethra of his cock invading its upward until it connects to your throat.\
                        You end up coughing up something sticky and salty as that happens but it still feels rather nice. Your sides tingle almost with a cooling sensation along those runic lines. As the sensation passes the changes finish leaving you feeling very strange but familiar...");
                    if (character.qualities.essence > 19) {
                        system.animateQuality("essence", character.qualities.essence - 20, { from: 1, to: 0 });
                        system.animateQuality("ctf", character.qualities.ctf + 20);
                    };

                    clother();
                    if (character.qualities.ctf > 60) {
                        oper(system, "./wake", "Try to wake yourself up", "./full", "You know what you want");
                    } else {
                        oper(system, "./wake", "Try to wake yourself up");

                    }

                },
                "full": function(character, system, action) {
                    transer();

                    if (character.sandbox.ch2re) {
                        parer("You begin rubbing your body up and down enjoying the sounds host is making. Everything seems so much larger now, host's sheath so easily could swallow you up right now. Just one more orgasm and there will be nothing left of you... Only a trobbing hard cock. Just one more orgasm... You could stop now and retain just a bit of your old self.");
                        parer("host seems to make the decision for you though as he reaches down to rub your body! A thrill runs through you as he starts to rub away anything that remains of you. He strokes you faster as if he knows doing so will strip you of any identity other than that of a cock.");
                        oper(system, "./cumfinal", "Cum for your owner!");
                    } else {
                        parer("You begin rubbing your body up and down enjoying the sounds host is making. Everything seems so much larger now, host's sheath so easily could swallow you up right now. Just one more orgasm and there will be nothing left of you... Only a trobbing hard cock. Just one more orgasm... You could stop now and retain just a bit of yourself, at least enough to explain things to host.");
                        parer("host seems to make the decision for you though as he reaches down to rub your body! A thrill runs through you as for the first time he starts treating you like a cock. It's like a first kiss.... Falling in love for the first time... The first time host treats you like his own cock!");
                        oper(system, "./cumfinal", "Cum for your new owner!");
                    }


                }, //function close
                "cumfinal": function(character, system, action) {
                    transer();




                    parer("You can actually feel the moment your body changes, the orgasm surges through you replacing everything that you were with sensitive hot throbbing cock flesh! host's urethra plumps with the pressure of his cum as it surges through you and shoots from your mouth. Each pulse erupting from a mouth that looks more and more like that of a cock. As the last few drops pass your lips there is nothing left.....");


                    if (character.host.genderismale == false) {
                        parer("host's pussy is gone, completely replaced by a new throbbing leaking cock...");

                    } else {

                        parer("You are slightly larger but otherwise perfect copy of hosts dick.");


                    }

                    //system.animateQuality("essence", 0, { from: 1, to: 0 });
                    system.animateQuality("ctf", 100);
                    clother();
                    if (character.sandbox.ch2re) {

                        oper(system, "./wakestealth", "Relax and slip into your home");
                    } else {


                        oper(system, "./wakestealth", "Relax and slip into your new home");
                    }
                }, //function close
                "wake": function(character, system, action) {
                    transer();
                    //if (character.sandbox.artifacthidden==false){
                    /*
                     system.write("<p>You continue to try and get up but everything below your waist is just missing. Finally you resort to pinching yourself and are rather surprised to hear a yelp of pain from yourself AND Mark!</p><p>\"Careful what you are doing down there... that hurt. And what the heck is that light shining in my eyes...\" Mark mumbles starting to wake up. The light is a bit of a surprise and you notice the ring on the artifact is glowing brightly!</p><p>\
                     You yell to him to wake up and GRAB THAT RING NOW! It takes him a moment to realize the desperation of the situation.<p>He sits up causing your world to shift as he gets up, \"What the fuck is going on!!!\" he asks in horror before grabbing the ring, which rapidly stops glowing.</p>\
                     ");
                     */

                    if (character.sandbox.ch2re) {
                        parer("Once again you find yourself in the warm embrace of a sheath. Serving as their cock just like before... For some reason you don't feel like you are ever going to be able to change back this time. Something about it feels different this time, more permanent. Like the hold on your body feels more real. You relax feeling his blood pulse through you, as if welcoming you back to where you belong. Serving the purpose you are meant for. This really is going to be your life now... maybe forever.");
                        oper(system, "./wakehim", "Wake up host.");
                    } else {
                        parer("Once again you find yourself attached to someone. Serving as their cock.... You must have wanted this or you wouldn't have gone through with it. Even if you do manage to unmerge from host... You will just end up like this with someone else. How many times can you take this risk before it becomes VERY permanent.... You relax feeling his blood pulse through you, already feeing more at home back where you belong. Serving the purpose you know best. You hope this new person will like you...");
                        oper(system, "./wakehim", "Wake up your new host.");

                    }

                    //                       parer("You try and get up but everything below your waist is just missing. You knew all to well this was going to happen. You wanted this... It might a bit of a shock to host however. ");


                    // system.setQuality("timeofday", 0);
                    //  system.setQuality("day", 2);



                    // oper(system, "mergefinal/type" + character.qualities.ctf, "Take stock of the situation");
                },
                "wakestealth": function(character, system, action) {
                    transer();
                    character.sandbox.erect = false;
                    //if (character.sandbox.artifacthidden==false){
                    /*
                     system.write("<p>You continue to try and get up but everything below your waist is just missing. Finally you resort to pinching yourself and are rather surprised to hear a yelp of pain from yourself AND Mark!</p><p>\"Careful what you are doing down there... that hurt. And what the heck is that light shining in my eyes...\" Mark mumbles starting to wake up. The light is a bit of a surprise and you notice the ring on the artifact is glowing brightly!</p><p>\
                     You yell to him to wake up and GRAB THAT RING NOW! It takes him a moment to realize the desperation of the situation.<p>He sits up causing your world to shift as he gets up, \"What the fuck is going on!!!\" he asks in horror before grabbing the ring, which rapidly stops glowing.</p>\
                     ");
                     */
                    parer("You relax and let his sheath take you home. It's warm moist grip is heavenly as it gets used to its new slightly larger occupant. The scent and feel of everything is just slightly diffrent from what you have been use to... in a good way. You don't realize it at first but as you get comfortable, it is really hard to move. Concerningly hard! At best you can only wiggle slightly");



                    parer(character.host.wake100);

                    character.sandbox.limits.insheath = 2;
                    character.sandbox.limits.hasarms = false;
                    character.sandbox.limits.cantalk = false;



                    clother();
                    //player is full at full TF
                    if (character.sandbox.ch2re) {

                        oper(system, "nhstealth/rubre", "Just relax and enjoy it");
                    } else {
                        character.sandbox.stealth = true;
                        oper(system, "nhstealth/rub", "Just relax and enjoy it");
                    }

                }, //function close

                "wakehim": function(character, system, action) {
                    //THE PANIC MOMENT!!!  
                    var scener = "wakehim";
                    if (character.sandbox.ch2 && (character.sandbox.host.scenes[scener])) {
                        character.sandbox.scenerexit = "morning/preenter";
                        system.doLink((character.sandbox.host.host + "host" + scener + "/scene1"));
                    } else {

                        parer(character.host.wakefirst);
                        console.log("we are going to " + Math.floor(character.qualities.ctf / 20) * 20);
                        system.doLink("nhmergefinal/type" + (Math.floor(character.qualities.ctf / 20) * 20));
                    }




                    //system.doLink("mergefinal/"+(character.sandbox.host.harmony[3]);
                }, //function close
                "r1": function(character, system, action) {} //function close
            } //actions close
        } //options close
    ),

    nhstealth: new undum.SimpleSituation(
        "", {
            actions: {
                "rub": function(character, system, action) {
                    transer();
                    character.sandbox.stealth = true;
                    character.sandbox.limits.hasarms = false;
                    character.sandbox.limits.cantalk = false;
                    character.host.curhost = character.sandbox.chost;
                    parer("Suddenly hosts's hand reaches around you and strokes you up and down a few times! You would gasp and moan from the sensations if you could! ");
                    parer("HE DOESN'T REALIZE YOU ARE THERE!");
                    parer("This isn't that bad since you know how to talk to them using the runes and such. You try for a moment and you get a shock, nothing seems to happen! No matter what you try nothing seems to be getting through to host! Once again you are trapped as a cock with no way to communicate other that what a cock normally could do!");




                    oper(system, "./resist", "Try to get his attention", "./accept", "Try to stay hidden (New route)");
                }, //function close
                "rubre": function(character, system, action) {
                    transer();
                    //100% cock ch2re mode
                    //character.sandbox.stealth=true;
                    character.sandbox.limits.hasarms = false;
                    character.sandbox.limits.cantalk = false;
                    character.host.curhost = character.sandbox.chost;
                    parer("Suddenly hosts's hand reaches around you and strokes you up and down a few times! You would gasp and moan from the sensations if you could! ");
                    parer("You can feel that deeper connection even better now. Something is different this time with the transformation. You can feel deeper into his body than before, his balls and bladder are nearly as easy to feel as the rest of you. You are trulely and completely a part of his body this time. Maybe you really are just his cock now...");

                    parer("q1Oh hey the ring!q1 He says looking down at the floor. There is a brief pause... q1You would just love to be my cock forever right? Two throbs for yes.q1 He asks very calmy");



                    oper(system, "./throbthrob", "Throb twice!", "./throb", "Try to throb just once!");


                }, //function close
                "throbthrob": function(character, system, action) {
                    transer();
                    character.sandbox.perma = true;
                    character.sandbox.ringgone = true;
                    character.sandbox.ringgonereason = "hostbrokeit";
                    system.setQuality("dignitylost", 80);
                    parer("You are so lost in the sensations that it's hard to deny it. Especially after just getting back to feeling normal again. You throb once and then almost on instinct you throb again! Maybe it was intentional but it certainlyl happens. host just chuckles from above.");

                    parer("CRUNCH!");

                    parer("He really did it.... He even leans down to let you get a better look at the cracked pieces of the ring on the floor. Just like that.... it's gone. q1Lets go home, I got what I wantedq1 He says with a rub, leaving the pieces behind as he leaves the abandoned house.");
                    oper(system, "preworksender/prework", "Let it sink in that this is what you are now....");
                }, //function close
                "throb": function(character, system, action) {
                    character.sandbox.ringreallylost = true;
                    character.sandbox.ringgone = true;
                    character.sandbox.perma = true;
                    system.setQuality("dignitylost", 30);
                    parer("You are so lost in the sensations that it's hard to deny it. Especially after just getting back to feeling normal again. You throb once... You can't just make that decision just yet.");

                    parer("You throb a second time!");

                    parer("You didn't do that, it was host making you do it! A moment of panic comes over you as host chuckles. He knows he did that on purpose! q1Two throbs, Guess I will just leave the ring here then since we don't need it. Lets go home, I got what I wantedq1 He says with a rub as he leaves the abandoned house.");
                    oper(system, "preworksender/prework", "Let it sink in that you may stay like this forever");
                }, //function close




                "resist": function(character, system, action) {
                    transer();
                    parer("You do everything you can to get his attention but all you manage to do is wiggle a bit and throb oddly. host is busy getting up and getting dressed for the day not paying you even a moment of attention! You are just his cock, nothing special. Just a horny needy cock that has a bad case of morning wood. He gives you a few rubs trying to get you to calm down as he starts walking for the bathroom!");
                    parer("Once inside he grips you firmly and points you directly at the toilet! Already you can feel an uneasy pressure somewhere behind you building up.");
                    oper(system, "./piss", "Prepare yourself", "./nope", "Wait for this to be over.(PREVENTS ALL further watersports scenes)");
                    character.sandbox.discovery++;
                }, //function close
                "accept": function(character, system, action) {
                    transer();
                    character.sandbox.stayhidden = true;
                    parer("You just relax and let yourself start to go soft. You don't want to alert him to what has happened... besides this might be interesting to spend some time as a cock. host is busy getting up and getting dressed for the day not paying you even a moment of attention. You are just his cock, nothing special. His sheath is slowly pulling your back inside, strangely warm and comforting. He gives you a few rubs trying to keep you somewhat hard as he starts walking for the bathroom!");
                    parer("Once inside he grips you firmly and points you directly at the toilet! Already you can feel an uneasy pressure somewhere behind you building up.");
                    oper(system, "./piss", "Prepare yourself", "./nope", "Wait for this to be over.(PREVENTS ALL further watersports scenes)");
                }, //function close
                "nope": function(character, system, action) {
                    transer();
                    character.sandbox.ws = false;
                    system.doLink("realization/entry");
                }, //function close
                "piss": function(character, system, action) {
                    transer();
                    parer("host is just doing what he has every morning, completely unaware he is about to do to you! Even worse you realize that all of your senses are still working, including taste! With your mouth repurposed to direct piss.... and you will be forced to taste every drop! </p><p>He reaches farther up on your body and holds your head still forcing it to face into the toilet. There is an overwhelming sensation of movement that almost feels like a rumbling, it travels up your body slightly expanding that urethra inside you and a torrent of piss fills your mouth!");
                    oper(system, "mergebathroomh/enjoy", "Find you actually like it", "mergebathroomh/accept", "Reluctantly accept your role", "mergebathroomh/refuse", "Refuse to cooperate");
                }, //function close

                "r1": function(character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "");
                    } //function close
            } //actions close
        } //options close
    ),
    newhostpicked: new undum.SimpleSituation(
        "", {
            actions: {
                "enter": function(character, system, action) {
                    if (character.host.genderismale == "herm") {

                        character.sandbox.girl = false;
                    } else if (character.host.genderismale) {
                        character.sandbox.girl = false;

                    } else {
                        character.sandbox.girl = true;
                    }


                    system.doLink("ch2morning/enter");
                }, //function close

                "r1": function(character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "");
                    } //function close
            } //actions close
        } //options close
    ),
    nhmergefinal: new undum.SimpleSituation(
        "", {
            heading: "",
            enter: function(character, system, from) {
                //system.setQuality("timeofday", 0);
                character.sandbox.curhost = character.host.chost;
                system.setCharacterText(desc1(character, system));
                console.log("new test for header " + character.sandbox.curhost);
            },
            actions: {
                /*
                 Conversion rate: 
                 Smaller= 1-1 (20 essence= 1 full tier jump)
                 larger= 2-1 (40 essence= 1 full tier jump)
                 Extras= (5 essence to remove, 10 to return)
                 
                 COCK
                 20%= minor shrinking, no legs, attached to groin 
                 40%= surrounded by sheath, Urethral buldge can pull into sheath part way, Looks like a hyper fur. Can hide in public.
                 60%= Far smaller but larger than a cock, can fit in pants.
                 80%= cock sized, no bones, Difficulty moving when hard.
                 100%= Full converstion, can still move around slightly when soft.
                 no arms= extra 10%
                 Cock shaped head=5%
                 */


                /*
                 
                 As you gentlely try to wake him. <p>He sits up causing your\
                 world to shift,  \"What where are you, and why... the fuck is going on!!!???\" he asks in shock, angling around to look down at his new cock... you.\
                 
                 
                 
                 
                 */


                "type20": function(character, system, action) {
                    //20%= minor shrinking, no legs, attached to groin


                    if (character.sandbox.ch2re) {

                        parer("There is no shock or suprise as host looks down at you with a smile, he gets up and walks in front of your mirror so you can see.<br>The transformation didn't seem to get very far. You are only a few feet shorter but your legs have been completely replaced with a pair of massive balls! The rest of your body is mostly unchanged. At best only about 20% of your body has been transformed, though your waist is merged with host's groin. It feels really nice to feel hosts balls dangling below you again.!");
                        parer(character.host.firstreaction);

                        oper(system, "./asktostay", "Ask if it's alright to stay like this... forever.", "./tempplz", "Tell him you just want this to be temporary");
                    } else {
                        if (character.sandbox.girl) {
                            if (character.sandbox.girl == "herm") {
                                parer("After the panic of the situation has finished host stands in front of the mirror looking over what has happened to both of you.<br>The transformation didn't seem to get very far. You are only a few feet shorter but your legs are just gone! The rest of your body is mostly unchanged. At best only about 20% of your body has been transformed, though your waist is merged with host's groin. It feels really nice to be attached to someone again!");

                            } else {
                                parer("After the panic of the situation has finished host stands in front of the mirror looking over what has happened to both of you.<br>The transformation didn't seem to get very far. You are only a few feet shorter but your legs have been completely replaced with a pair of massive balls! The rest of your body is mostly unchanged. At best only about 20% of your body has been transformed, though your waist is merged with host's groin. It feels really nice to be attached to someone again!");

                            }

                        } else {
                            parer("After the panic of the situation has finished host stands in front of the mirror looking over what has happened to both of you.<br>The transformation didn't seem to get very far. You are only a few feet shorter but your legs have been completely absorbed by his now MASSIVE balls. The rest of your body is mostly unchanged. At best only about 20% of your body has been transformed, though your waist is merged with host's groin. It feels really nice to be attached to someone again!");
                        }


                        parer(character.host.firstreaction);

                        oper(system, "./explain", "Tell him everything", "./lie", "Blame it on a curse");
                    }





                    character.sandbox.limits.insheath = 0;

                    clother();
                },
                "type40": function(character, system, action) {

                    //40%= surrounded by sheath, can pull into sheath part way, Looks like a hyper fur. Can hide in public.
                    character.sandbox.erect = false;
                    character.sandbox.clothed = false;
                    character.sandbox.limits.insheath = 1;

                    clother();


                    if (character.sandbox.ch2re) {

                        parer("There is no shock or suprise as host looks down at you with a smile. Your body gets a bit softer and you feel yourself getting pulled back into your familar home in his sheath. You let out a moan enjoying the sensation, with your size the sheath can only hold up to your shoulders. You work your arms in a bit and get it to around your neck. It is just so comfy feeling like this! Although anyone seeing the bulge in his pants would think he is a hyper fur or something. He gets up and walks in front of your mirror so you can see.");

                        parer(character.host.firstreaction);

                        oper(system, "./asktostay", "Ask if it's alright to stay like this... forever.", "./tempplz", "Tell him you just want this to be temporary");
                    } else {
                        parer("host gets ahold of himself and seems to relax which has a familiar effect on you. Your body gets a bit softer and you feel yourself getting pulled into your new home in his sheath. You let out a moan enjoying the sensation but with your size the sheath can only hold up to your shoulders. If you really relax and work your arms in you could probobly get it to around your neck. Although anyone seeing the bulge in his pants would think he is a hyper fur or something.");
                        parer(character.host.firstreaction);
                        character.sandbox.limits.insheath = 1;
                        clother();
                        oper(system, "./explain", "Tell him everything", "./lie", "Blame it on a curse");

                    }


                },
                "type60": function(character, system, action) {
                    if (character.sandbox.host.host == "bret") {
                        system.doLink("./type80");
                    } else {
                        character.sandbox.limits.goout = true;
                        character.sandbox.limits.insheath = 2;
                        character.sandbox.erect = true;
                        character.sandbox.clothed = false;
                        clother();
                        //60%= Far smaller but larger than a cock, can fit in pants.

                        if (character.sandbox.ch2re) {
                            parer("There is no shock or suprise as host looks down at you with a smile. Your body gets a bit softer and you feel yourself getting pulled into his sheath. Apparently the only reason you were out was due to his morning wood. His sheath seems determined to welcome you back home! However you are able to grab the sides and hold yourself from being pulled in, though the moment you let go it would engulf you rather quickly. He gets up and walks in front of your mirror so you can see.");
                            parer(character.host.firstreaction);
                            oper(system, "./asktostay", "Ask if it's alright to stay like this... forever.", "./tempplz", "Tell him you just want this to be temporary");

                        } else {

                            parer("host gets ahold of himself and seems to relax which has a familiar effect on you. Your body gets a bit softer and you feel yourself getting pulled into his sheath. Apparently the only reason you were out was due to his morning wood. His sheath seems determined to welcome you to your new home! However you are able to grab the sides and hold yourself from being pulled in, though the moment you let go it would engulf you rather quickly.");
                            parer(character.host.firstreaction);
                            oper(system, "./explain", "Tell him everything", "./lie", "Blame it on a curse");
                        }


                    }
                },
                "type80": function(character, system, action) {
                    //80%= cock sized, no bones, Difficulty moving when hard
                    character.sandbox.limits.goout = true;

                    character.sandbox.limits.insheath = 2;
                    character.sandbox.erect = true;
                    character.sandbox.clothed = false;
                    clother();
                    if (character.sandbox.ch2re) {

                        parer("There is no shock or suprise as host looks down at you with a smile. Your body gets a bit softer and you feel yourself getting pulled into his sheath. Apparently the only reason you were out was due to his morning wood. Even with your full strength his sheath seems determined to welcome you back home! Your arms give out and you are pulled the rest of the way into his warm moist sheath which quickly closes above you! <br>Its unbelievably tight the best you can do is wiggle around slighty, you are still a fair bit larger than any normal cock would be. You soon feel a rubbing sensation from outside and a wonderful surge of pleasure cascading through you. There is a thumping pulse that is causing you to grow hard and slowly exit from his sheath. He gets up and walks in front of your mirror, continuing to stroke you just enough that you can see what you look like now.");
                        parer(character.host.firstreaction);
                        oper(system, "./asktostay", "Ask if it's alright to stay like this... forever.", "./tempplz", "Tell him you just want this to be temporary");
                    } else {
                        parer("host eventually calms down and seems to relax... which has a familiar effect on you. Your body gets a bit softer and you feel yourself getting pulled into his sheath. Apparently the only reason you were out was due to his morning wood. The sheath soon pulls you in deeper. Even with your full strength his sheath seems determined to welcome you to your new home! Your arms give out and you are pulled the rest of the way into his warm moist sheath which quickly closes above you! <br>Its unbelievably tight the best you can do is wiggle around slighty, you are still a fair bit larger than any normal cock would be. You soon feel a rubbing sensation from outside and a wonderful surge of pleasure cascading through you. There is a thumping pulse that is causing you to grow hard and slowly exit from his sheath. As you slide out he keeps rubbing just to keep you hard enough to hold a conversation....");

                        parer(character.host.firstreaction);

                        oper(system, "./explain", "Tell him everything", "./lie", "Blame it on a curse");

                    }

                },
                "type100": function(character, system, action) {
                    character.sandbox.limits.goout = true;
                    if (character.sandbox.ch2re) {
                        system.doLink("nhstealth/rubre");

                    } else {

                        system.doLink("nhstealth/rub");
                    }

                }, //function close
                "tempplz": function(character, system, action) {
                    transer();
                    character.sandbox.clothed = true;
                    character.sandbox.erect = false;
                    clother();
                    parer("You know how much host wanted to have you back but you still want a chance to go back to normal again some day. Being a cock is just sooo addictive! It may take a few times to kick the habit... Or was it the heat in your ass that made you do it? It all seems so distant now, your time as something other than a penis. Still you ask him about it...");

                    parer(character.sandbox.host.secondreaction);

                    if (character.sandbox.underweargift && character.qualities.ctf > 20) {
                        parer("q1Oh right one last thingq1 He says and reaches down picking up a familiar pair of underwear! He slowly slides them on letting you see yourself in the mirror as they finally cover you! They actually feel just as nice as you hoped they would. q1You look great in them.q1 he says giving your buldge a rub. ");
                        oper(system, "preworksender/prework", "Throb with pride in your new " + character.sandbox.underwear[1]);
                    } else {
                        parer("q1Alright. I got what I came for hehe. Lets get back home.q1 He says putting you away and heading out of the abandoned house.");
                        oper(system, "preworksender/prework", "Let it sink in that you may stay like this forever");
                    }



                }, //function close
                "asktostay": function(character, system, action) {
                    transer();

                    character.sandbox.erect = false;
                    character.sandbox.clothed = true;
                    clother();
                    parer("Being sepereated from him felt so wrong, maybe you really have been his penis the entire time. The idea of unmering again seems just wrong now. Maybe you don't want him to let you change your mind, right now you realize what is best for you. Hesitantly, you ask him about it...");

                    parer(character.sandbox.host.thirdreaction);
                    if (character.sandbox.underweargift && character.qualities.ctf > 20) {
                        parer("q1Oh right one last thingq1 He says and reaches down picking up a familiar pair of underwear! He slowly slides them on letting you see yourself in the mirror as they finally cover you! They actually feel just as nice as you hoped they would. q1You look great in them.q1 he says giving your bulge a rub. ");
                        oper(system, "preworksender/prework", "Throb with pride in your new " + character.sandbox.underwear[1]);
                    } else {
                        parer("q1Alright. I got what I came for hehe. Lets get back home.q1 He says putting you away and heading out of the abandoned house.");
                        oper(system, "preworksender/prework", "Let it sink in that you may stay like this forever");
                    }

                }, //function close

                "lie": function(character, system, action) {
                    transer();

                    parer("You tell him this is kind of a curse you have been under. It seems you become the cock of anyone you have sex with and even worse you are desperate for it till you do! Making sure not to mention the ring or the runes that did this. Though you do hint at the fact this has happened to you before and sort of know how to change back.");
                    //            if (character.host.wanttochangeback) {
                    //               parer("");
                    //            }
                    //           

                    oper(system, "./wearoff", "Maybe it will wear off", "./books", "Search for books about it");
                }, //function close
                "wearoff": function(character, system, action) {
                    transer();
                    parer(character.host.explainlie);


                    oper(system, "./continueday", "Suggest he just go about his day like normal");
                }, //function close
                "books": function(character, system, action) {
                    transer();
                    parer(character.host.explainlie);


                    oper(system, "./continueday", "Suggest he just go about his day like normal");
                }, //function close
                "continueday": function(character, system, action) {
                    transer();
                    parer("You tell him not to worry to much about you, it's not like a cock should really have much say in things. He should go about his day pretty much as normal. You make it sound like you are confused but oddly comfortable with this situation. He seems a bit suspicious but lets it goo.");
                    oper(system, "morning/preenter", "Be a good cock....");
                }, //function close
                "changeback": function(character, system, action) {
                    transer();
                    parer("They listen as you explain how darn hard it is to changes forms like this. And how changeing back can be really difficult without a large supply of cum to work with. More like orgasmic energy really. So even if you do try to focus on that it could be a few days for it to fully work! They seem a bit annoyed but they don't really have much choice in this.");
                    oper(system, "morning/preenter", "Tell him to just go about his day like normal");
                }, //function close
                "explain": function(character, system, action) {
                        system.doLink("newhostexplain/explain");
                    } //function close
            }
        }),
    newhostexplain: new undum.SimpleSituation(
        "", {
            actions: {
                "explain": function(character, system, action) {
                    transer();


                    parer("You come clean about everything..... From the ring to the period of time you spent as someones elses cock! You knew this might happen again but you just couldn't stop yourself. The feelings of need, and... maybe wanting this to happen again.");


                    if (character.host.plantokeep) {
                        parer(character.host.explain);




                        oper(system, "morning/preenter", "Promise you will try to be a good cock as he gets dressed");
                    } else {
                        //don't plan to keep you



                        parer(character.host.explain);
                        oper(system, "morning/preenter", "Tell them you will try to change back");

                    }




                }, //function close

                "r1": function(character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "");
                    } //function close
            } //actions close
        } //options close
    )
};