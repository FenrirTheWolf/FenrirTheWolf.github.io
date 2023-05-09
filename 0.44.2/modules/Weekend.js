undum.game.weekend = {

    weekend: new undum.SimpleSituation(
        "", {
            actions: {
                "enter": function(character, system, action) {
                    transer();



                    //COMES FROM RING STUFF and oper(system, "aftermorning", "Finish up in the bathroom and continue the day");
                    //alternate path is   parer("host rather quickly gets the harness back out and secures you to his belly once more. He continues his morning getting himself some breakfast, once again reminding you of your inability to eat. In some ways it certainly makes things easier not needing to eat... but its hardly worth the cost!<p>host finishes his food and spreads his legs looking down at you. \"I have to go to dayjob soon. So any planning we should probably get it out of the way now while we can\"he suggests.");


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
                    if (character.qualities.ctf <= 35 && false) {
                        //only bret.

                    } else {

                        character.sandbox.erect = false;
                        character.sandbox.clothed = true;
                        clother();
                        if (character.sandbox.underwear[0]) {
                            alt = character.sandbox.underwear[2] + " and ";

                        } else {

                            alt = "";
                        }

                        if (!character.sandbox.stealth) {

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
                                    parer("host leaves you out for most of the morning. Getting breakfast and talking with you before eventually deciding to put some pants on for the day. q1Sorry, but I got to get dressed. I'll let you back out laterq1 He says and pulls up his #altpants over you. He still occasionally says something to you but only passivly.");



                                    break;
                            } //End of RND switch
                            switch (character.sandbox.funvalue) {
                                case 1:
                                    //help a friend move

                                    system.doLink("./friendmove");
                                    character.sandbox.weekendathome = false;
                                    break;
                                case 2:
                                    //going over to vist a friend

                                    character.sandbox.weekendathome = true;
                                    system.doLink("./visitfriend");

                                    break;
                                case 3:
                                    //barbecue
                                    character.sandbox.weekendathome = false;
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
                                    character.sandbox.weekendathome = true;
                                    if (rnd(3) != 1) {
                                        //lazy in house

                                        system.doLink("./lazy");

                                    } else {
                                        //cleaning day in house
                                        system.doLink("./cleaning");




                                    }
                            } //End of RND switch
                        } else {
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
                            } //End of RND switch


                        }





                    } //unable to leave house check end
                }, //function close

                "weekendstealth": function(character, system, action) {
                    transer();
                    //not used yet
                    parer("host continues to get ready for the day, just a quick rub before trapping you within his pants. That's the life of a cock though. You can also hear him getting breakfast as you are kept squished in his sheath between his legs.");


                    oper(system, "", "");
                }, //function close
                "cleaning": function(character, system, action) {
                    transer();
                    if (!character.sandbox.stealth) {
                        if (character.qualities.harmony > 50) {
                            //keeps you in pants for cleaning
                            parer("Even though you are trapped in his pants again he doesn't leave the house, instead doing all sorts of chores and cleaning. You hear dishes at one point, a vaccuum.... Just regular life odds and ends. But he could have at least let you out of his pants during this if he wasn't planning to go out side!");

                        } else {
                            //doesn't wear pants for cleaning.

                            if (character.sandbox.ringlost && !character.sandbox.perma) {
                                parer("Rather than heading out of the house host spends the day inside doing small tasks. Cleaning this, moving that, laundry, dishes, taking out garbage. He is keeping a close eye out for the ring making sure he doesn't accidentally throw it away. Seems like a normal weekend cleanup. But he could have at least let you out of his pants during this if he wasn't planning to go out side!");
                            } else {
                                parer("Rather than heading out of the house host spends the day inside doing small tasks. Cleaning this, moving that, lundry, dishes, taking out garbage. Stuff like that. Seems like a normal weekend cleanup. But he could have at least let you out of his pants during this if he wasn't planning to go out side!");

                            }



                        }

                    } else {
                        //stealth route

                        if (character.sandbox.stayhidden) {
                            parer("Rather than heading out of the house host spends the day inside doing small tasks. Cleaning this, moving that, laundry, dishes, taking out garbage. Seems like a normal weekend cleanup. All the while he has no idea you are tagging along for the ride! The day is a constant swaying and squishing and getting moved around at odd angles. His back must be sore from all the bending over, each time suprising you with the sudden change of direction. It almost feels like being on a roller coaster without a track to see and warn you it's about to decend suddenly!");

                            parer("Finally he seems to finish everything he wanted to get done and just plops down to rest for awhile... ");

                            //oper(system, "./wteasehim", "Tease him a bit","./wbegood","Don't risk him finding you");

                        } else {
                            parer("Rather than heading out of the house host spends the day inside doing small tasks. Cleaning this, moving that, laundry, dishes, taking out garbage. Seems like a normal weekend cleanup. It is hard work and kind of nice knowing you don't have to clean up any of your messes anymore! The day is a constant swaying and squishing and getting moved around at odd angles. His back must be sore from all the bending over, each time suprising you with the sudden change of direction. It almost feels like being on a roller coaster without a track to see and warn you it's about to decend suddenly!");

                            parer("Finally he seems to finish everything he wanted to get done and just plops down to rest for awhile... ");



                        }


                    }


                    oper(system, "evening/evegoto", "Continue on to the evening");
                }, //function close
                "lazy": function(character, system, action) {
                    transer();
                    if (character.sandbox.stealth) {
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
                        } //End of RND switch



                        // oper(system, "./stay", "Helplessly stay in his pants and listen");
                        oper(system, "./stealthstay", "Helplessly listen from inside his pants");



                    } else {
                        switch (character.sandbox.host.lazy) {
                            case "movies":
                                parer("<h1> WATCHING MOVIES </h1>");
                                parer("host pretty quickly sits down and you hear something playing in the background. Seems he is watching some movies or something. Meanwhile you are stuck in his sheath only able to listen from afar.");


                                break;
                            case "games":
                                parer("<h1> VIDEO GAMES </h1>");
                                if (character.sandbox.limits.hasarms) {
                                    parer("host eventually sits down and you start to hear weird noises, it's from a TV but not a show or movie. You realize it must be some sort of game he is playing! Heck if it is simple enough you might even be able to play with him! The though of that is actually pretty amusing. ");

                                } else {

                                    parer("host eventually sits down and you start to hear weird noises, it's from a TV but not a show or movie. You realize it must be some sort of game he is playing! You don't have hands anymore otherwise you might be able to join him... but at least you could ask to watch.");

                                }



                                break;
                            case "sports":
                                parer("<h1> SPORTS </h1>");

                                parer("host seems to be cooking something again and you quickly recognize popcorn! He sits down and some sort of sports broadcaster starts speaking in the background. You can't exatctly pick out WHICH sport is being played on the screen.");
                                break;

                            default:
                        } //End of RND switch


                        character.sandbox.ttcarryover = false;
                        if (character.sandbox.limits.cantalk && !character.sandbox.permaplugged && !character.sandbox.permalock) {
                            oper(system, "./asktowatch", "Ask to be let out so you can watch!", "./stay", "Stay in his pants");
                        } else if (character.qualities.essence > character.sandbox.ttcost && !character.sandbox.permalock) {
                            character.sandbox.ttcarryover = true;
                            oper(system, "./asktowatch", "(TT:" + character.sandbox.ttcost + ")Ask to be let out so you can watch!", "./stay", "Stay in his pants");
                        } else {
                            oper(system, "./stay", "Helplessly stay in his pants and listen");
                        }
                    }

                }, //function close
                "asktowatch": function(character, system, action) {
                    transer();
                    if (character.sandbox.ttcarryover) {
                        system.setQuality("essence", character.qualities.essence - character.sandbox.ttcost);
                    }
                    character.sandbox.ttcarryover = false;


                    switch (character.sandbox.ctfrole) {
                        case "bodypart":
                            //doesn't talk to you
                            parer("host doesn't even say anything and you suddenly feel a tight grope through the sheath! He isn't even reacting to you asking him something! Each time you try he just gropes you as if it was just a natural twitch from his cock!");
                            oper(system, "./stay", "Try to listen in while you stay in his comfy sheath");
                            break;
                        case "possessive":
                            //Get use to it you are just my cock now. There is no way I am ever letting you go. Get use to it
                            parer("host suddenly rubs you through his pants with a laugh. q1Nah the warmth of my sheath and occasional rub is all the entertainment you need.q1 he says");
                            oper(system, "./stay", "Try to listen in while you stay in his comfy sheath");
                            break;
                        case "petpenis":
                        default:
                        case "friend":
                            //

                            if (character.sandbox.host.lazy == "games") {
                                character.sandbox.clothed = false;
                                character.sandbox.erect = true;
                                clother();


                                if (character.sandbox.limits.hasarms) {


                                    parer("host thinks about it for a moment and eventually pulls you out, giving a few rubs to help you escape his hungry sheath. You can help but think of it that way sometimes, something that just wants to swallow you whole while host isn't paying attention to you. You look up at him and as if you might even be able to play!");
                                    parer("q1Eh you are a bit small for the controller but you could try. Hehe I will go easy on you.q1 he says fetching the other remote for you to use! It turns out to be a lot of fun, sort of like DDR mat but you have to hit buttons with your fist and push the Dpad with your whole arm! Every now and then host starts to lose the erection causing you to be stolen by his sheath again.");






                                } else {
                                    parer("He lets you out of his pants without too much trouble, unfortunately you have no arms to actually play the game with him.... Still it is fun to watch until his sheath gets lonely and decideds to pull you back in. He has to give you a couple of rubs every few minutes to keep you out. Eventually you give up and just watch from inside his sheath.");

                                }

                                oper(system, "evening/evegoto", "Continue on to the evening");
                            } else {
                                character.sandbox.clothed = false;
                                character.sandbox.erect = false;
                                clother();
                                parer("He lets you out of his pants without too much trouble. He won't let you change the channel at all though, still it is fun to watch until his sheath gets lonely and decideds to pull you back in. He has to give you a couple of rubs every few minutes to keep you out. Eventually you give up and just watch from inside his sheath.");


                                oper(system, "evening/evegoto", "Continue on to the evening");
                            }



                            break;

                    } //End of RND switch





                }, //function close
                "stay": function(character, system, action) {
                    transer();
                    if (character.sandbox.permalock || character.sandbox.permaplugged) {
                        if (character.sandbox.permalock) {
                            parer("You stay in his pants trying to enjoy what they are doing, at least you get to hear it going on. Sort of like listening to a friend in another room doing something while you are stuck in the time out corner. Except your corner is a set of tight metal rings holding you prisoner in your own sheath!");

                        } else {
                            parer("You stay in his pants trying to enjoy what they are doing, at least you get to hear it going on. With the plug in your mouth you would probarbly just leak all over is crotch anyway if he let you out.");

                        }

                    } else {
                        parer("You stay in his pants trying to enjoy what they are doing, at least you get to hear it going on. Sort of like listening to a friend in another room doing something. Passive company. It normally would be super weird to be waving ones cock around during something like this you have to admit.");


                    }

                    oper(system, "evening/evegoto", "Continue on to the evening");

                }, //function close

                "stealthstay": function(character, system, action) {
                    transer();
                    parer("You spend the day in his pants right where you belong, but at least you get to hear whats going on. Sort of like hearing a friend in another room doing something. Passive company. Or spying on someone without them knowing you are there! A spy cock movie... that would be interesting...");

                    oper(system, "evening/evegoto", "Continue on to the evening");

                }, //function close

                "friendmove": function(character, system, action) {
                    transer();
                    parer("<h1> RARE EVENT </h1>");
                    if (character.sandbox.ignore) {

                        parer("Today seems a bit unusual. He leaves the house and a little while later you hear him greet someone you don't recognize. They chat for a bit then host begins moving around lifting things back and forth from a building and into a truck. It seems he is helping someone move!");
                    } else {
                        parer("q1Just a quick warning, I have to help someone move today. So no moving around or getting hard.q1 He says on the way out of the house. A little while later you hear him greet someone you don't recognize. They chat for a bit then host begins moving around lifting things back and forth from a building and into a truck.");

                    }
                    parer("It's funny how someone asking you not to think naughty thoughts actually makes it harder than if they didn't mention it. Soon you find yourself slightly bored and even worse getting horny....");

                    parer("This seems like a really important event! It might be bad if you get hard or move so much it distracts him!");
                    character.sandbox.funholder = "host continues to move things around with the other person. It sounds like a ton of work though.", //happens once every other input
                        character.sandbox.funmidholder2 = "After a good long while host gets in the truck and travels for a while. You still can't relax since someone else is just a short distance away.  After a while the truck stops and everyoug jumps out to start moving things. This time unloading everything into a new building. "; //happens once in the middle

                    character.sandbox.funexit = "weekend/friendmoveexit";

                    oper(system, "rareminigame/screwgame", "Focus!");
                }, //function close
                "friendmoveexit": function(character, system, action) {
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

                            oper(system, "./acup", "It would be fun to show him!", "./acdown", "You didn't mean to get aroused!");



                            break;
                        case 2:
                            //wiggled too much
                            parer("You just can't help it, you ended up moving and wiggling in his sheath through a bunch of the move! host ended up being rather distracted while lugging things. He eventually has to grab his pants and adjust them squishing you tightly within his sheath so you can't move around as much.");
                            oper(system, "./acup", "It actually feels rather nice!", "./acdown", "You want to wiggle around more now!");
                            break;
                    } //End of RND switch



                }, //function close

                "visitfriend": function(character, system, action) {
                    transer();
                    parer("<h1> RARE EVENT </h1>");
                    if (character.sandbox.ignore) {

                        parer("host leaves the house and a little while later you hear him greet someone you don't recognize. They chat for a bit then sit down. They seem to be friends but not in the sexy way (unfortunately). They just chat for a good long while catching up on how things are going. Thankfully host never mentions you even though he does imply a weird change in his life.");
                    } else {
                        parer("q1Just a quick warning, I gonna go visit a friend today, they are married so nothing sexy sorry. Anyway no moving around or getting hard.q1 He says on the way out of the house. A little while later you hear him greet someone you don't recognize. They just chat for a good long while catching up on how things are going. Thankfully host never mentions you even though he does imply a weird change in his life.");

                    }
                    parer("They keep at it for a while but you can't help but feel bored during it. It's just so easy to drift into naughty thoughts or feel the need to wiggle just a bit in host's tight sheath.");

                    //parer("This seems like a really important event! It might be bad if you get hard or move so much it distracts him!");
                    character.sandbox.funholder = "host's friend is rather talkative one of those types that can go on for hours. It almost feels like you and host are trapped there!", //happens once every other input
                        character.sandbox.funmidholder2 = "The conversation shifts in tone and you hear some cans opened as they get drinks out. Seems host will still be hanging out for a while yet"; //happens once in the middle

                    character.sandbox.funexit = "weekend/visitfriendexit";

                    oper(system, "rareminigame/screwgame", "Focus!");
                }, //function close
                "visitfriendexit": function(character, system, action) {
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




                            oper(system, "./acup", "You just wanted to be used!", "./acdown", "It is so hard not be horny as a cock!");


                            break;
                        case 2:
                            //wiggled too much
                            parer("You just can't help it, you ended up moving and wiggling in his sheath! host ended up being rather distracted. Every now and then having to have his friend repeat himself! q1You ok there? You keep moving around like you have a mouse in your pants or something!q1 he says with no idea how close to the truth he might be!");
                            oper(system, "./acup", "It just feels so good inside his sheath", "./acdown", "Still not use to living in a tight moist sheath");
                            break;
                    } //End of RND switch



                }, //function close

                "barbecue": function(character, system, action) {
                    transer();
                    parer("<h1> RARE EVENT </h1>");
                    if (character.sandbox.ignore) {

                        parer("host leaves the house and a little while later you hear a large group of people greeting him. It sounds like you are still outside and there is random chatter going around. Eventually you can hear the sound of a grill going and realize it must be some sort of backyard barbacue.");

                    } else {

                        parer("q1Just a quick warning, heading out to a barbecue today. Just stay soft act like a normal cock for a few hoursq1 He says on the way out of the house. A little while later you hear a large group of people greeting him. It sounds like you are still outside so it must be one of those hang out backyard barbecues.");

                    }
                    parer("The conversations are muffled and sort of all blend together. Still there are lots of people around and you have to stay soft and still. Its easier said than done especially when you are actively tying not to think about it!");

                    //parer("This seems like a really important event! It might be bad if you get hard or move so much it distracts him!");
                    character.sandbox.funholder = "For the most part people are all standing around eating and talking. They seem distracted enough to not really be paying attention to host's crotch."; //happens once every other input

                    if (character.sandbox.ws) {
                        character.sandbox.funmidholder2 = "Finally host has his turn getting a bunch of food from the gill. You can tell from the sounds of sizzling food getting louder. It reminds you how strange it is no longer ever feeling hungry. You don't exactly miss food but it is embarrassing that the only thing you have tasted for a while is host's piss and cum."; //happens once in the middle
                    } else {
                        character.sandbox.funmidholder2 = "Finally host has his turn getting a bunch of food from the gill. You can tell from the sounds of sizzling food getting louder. It reminds you how strange it is no longer ever feeling hungry. You don't exactly miss food but it is embarrassing that the only thing you have tasted for a while is host's cum."; //happens once in the middle
                    }


                    character.sandbox.funexit = "weekend/barbecueexit";

                    oper(system, "rareminigame/screwgame", "Focus!");
                }, //function close
                "barbecueexit": function(character, system, action) {
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




                            oper(system, "./acup", "You didn't mean to get hard!", "./acdown", "You wanted some attention!");


                            break;
                        case 2:
                            //wiggled too much
                            parer("You just can't help it, you ended up moving and wiggling in his sheath! host ended up being rather distracted. Every now and then having to have his friend repeat himself! q1You ok there? You keep moving around like you have a mouse in your pants or something!q1 he says with no idea how close to the truth he might be!");
                            oper(system, "./acup", "Wanted someone to play with you!", "./acdown", "You wanted some attention!");
                            break;
                    } //End of RND switch



                }, //function close

                "fishing": function(character, system, action) {
                    transer();
                    parer("");
                    oper(system, "", "");
                }, //function close
                "club": function(character, system, action) {
                    transer();
                    parer("");
                    oper(system, "", "");
                }, //function close

                "stuckinside": function(character, system, action) {
                    //never used?
                    if (character.sandbox.enjoyit) {
                        parer("You and host mostly just spend the day awkwardly doing normal ish tasks. Eating lunch, watching tv, avoiding conversation about the whole cock situation. With your size it makes moving around kind of exhausting for host. q1I know you love being my cock but can't you be a bit more cocklike? If you love it so much how about being a bit smaller so we can at least leave the house?q1 He asks giving you a rub");
                    } else if (character.sandbox.control) {
                        if (character.sandbox.perma) {


                        } else {


                        }
                        parer("You and host mostly just spend the day awkwardly doing normal ish tasks. Eating lunch, watching tv, avoiding conversation about the whole cock situation. With your size it makes moving around kind of exhausting for host. q1Either you need to get smaller or we need to figure out how to fix this fast. Between the weird dreams and the runes... there must be something we can do.q1 He says");

                    } else {
                        parer("You and host mostly just spend the day awkwardly doing normal ish tasks. Eating lunch, watching tv, avoiding conversation about the whole cock situation. With your size it makes moving around kind of exhausting for host. q1Either you need to get smaller or we need to call a professional! I can't live forever with someone attached to my groin like this! I mean if you were a bit smaller maybe we could sneak you out. Maybe we just need time for it to transform you fully? or.. back! I mean that is an option too!q1 He says.");



                    }

                    oper(system, "evening/evegoto", "Continue on with the evening");
                }, //function close
                "acup": function(character, system, action) {
                    transer();
                    character.sandbox.funresult = 0;
                    if (character.sandbox.perma) {
                        system.setQuality("dignitylost", character.qualities.dignitylost + 1);

                    }
                    system.doLink(character.sandbox.funexit);
                }, //function close
                "acdown": function(character, system, action) {
                    transer();
                    character.sandbox.funresult = 0;
                    if (character.sandbox.perma) {
                        system.setQuality("dignitylost", character.qualities.dignitylost - 1);

                    }
                    system.doLink(character.sandbox.funexit);
                }, //function close
                "sextoyquestion": function(character, system, action) {
                        transer();






                        parer("");
                        oper(system, "", "");
                    } //function close

            } //actions close
        } //options close
    )
};