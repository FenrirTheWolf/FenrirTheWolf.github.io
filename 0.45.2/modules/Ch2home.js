undum.game.home = {

    ch2home: new undum.SimpleSituation(
        "", {
            actions: {
                "night": function(character, system, action) {
                    transer();






                    //                        if(rnd()>=5){
                    //              //host starts masturbating
                    //              
                    //              oper(system, "./ch2masturbate", "");
                    //            }else{
                    //              
                    //            
                    //            }

                    oper(system, "./dreams", "Get some sleep");


                }, //function close
                "dreams": function(character, system, action) {
                    transer();
                    parer("(Deamy things will happen here)");
                    oper(system, "./wake", "Wake up");
                }, //function close
                "ch2masturbate": function(character, system, action) {
                    transer();
                    if (character.sandbox.jerked) {
                        character.sandbox.jerked = true;

                        parer("You begin to rub your cock trying to get your mind off of things. But really all you can think of is how nice it would feel to have a nice hard shaft up your ass. Eventually your thoughts drift to you becoming that shaft of course. But that isn't helping you get off at all. In fact you almost go soft from how much you are neglecting your ass!");
                    } else {

                        parer("As usual just rubbing your own cock is almost pointless, as if every pleasure cuasing nerve had been moved into your ass! Still you know how much of a trap that is.");

                    }


                    oper(system, "", "Use a toy", "", "Ignore the feelin", "", "");
                }, //function close
                "ch2masturbatetoys": function(character, system, action) {
                    transer();

                    //dildo
                    //plug
                    //vibrator
                    //Milker
                    //beads
                    //fleshlight
                    //penispump
                    //butt plug
                    //chastity cage
                    var listynum = 0;
                    var loopwordything = [];
                    var inloopwerd = "";
                    loopwordything = [];
                    for (let xd in character.sandbox.itemlinklist) {

                        inloopwerd = xd;
                        listynum++;
                        console.log("xd is " + xd);

                        if (character.sandbox.itemlinklist[xd]) {

                            loopwordything.push([false, "Buy the " + inloopwerd]);
                            console.log("wordything " + loopwordything);
                        } else {

                            if (inloopwerd == "penispump") {
                                inloopwerd = "penis pump";
                            }
                            if (inloopwerd == "vibe") {
                                inloopwerd = "vibrator";
                            }
                            if (inloopwerd == "buttplug") {
                                inloopwerd = "butt plug";
                            }
                            if (inloopwerd == "plug") {
                                inloopwerd = "penis plug";
                            }
                            loopwordything.push(["./" + xd, "Use the " + inloopwerd]);
                        }



                        if (listynum == 3) {
                            console.log("ugh work damnit " + loopwordything);
                            oper(system, loopwordything[0][0], loopwordything[0][1], loopwordything[1][0], loopwordything[1][1], loopwordything[2][0], loopwordything[2][1]);
                            listynum = 0;
                            loopwordything = [];
                            spark = true;
                        }




                    }


                    oper(system, "", "");
                }, //function close
                "playdildo": function(character, system, action) {
                    transer();
                    parer("You just can't stand it anymore and go after the dildo you bought earlier. Surprisingly you don't need to lube it up at all as you ass practically opens for it and the clenches to pull it in! The sense of relief to have something hard inside you is short lived as you still don't feel right.");
                    oper(system, "", "");
                }, //function close
                "wake": function(character, system, action) {
                    transer();
                    character.sandbox.currenthostparse = character.sandbox[character.sandbox.pasthost + "parse"];
                    //                character.sandbox.currenthostparse.host=character.sandbox.pasthost;
                    system.setQuality("day", character.qualities.day + 1);
                    system.setQuality("dayofweek", character.qualities.day % 7);



                    character.sandbox.daysnotacock++;
                    if (character.sandbox.ch2wakefirst) {
                        character.sandbox.ch2wakefirst = false;
                        parer("You wake up to a new day feeling very strange.... You reach for your sheath but only find legs and your own cock. It isn't a shock as the memory of turning back comes back soon enough. But the wrongness of it sticks with you, it still feels like you should have a sheath around you. All snuggled up connected to a pair of big balls just waiting for the chance to fill you with cum, for it to shoot from your mouth....");
                        parer("The feeling of it is so vivid you don't even realize it at first that you are drooling all over your pillow! You get up and realize the taste in your mouth isn't saliva but CUM! You end up rushing to the bathroom with a mouth full of the stuff not even really sure how it got there! You end up coughing once or twice to rid more of it from your throat...");
                        if (character.sandbox.pissaddiction > 7) {

                            // oper(system, "./wsfirst", "Try to get ready for the day");
                            oper(system, "./mtease", "Try to get ready for the day");

                        } else {
                            oper(system, "./mtease", "Try to get ready for the day");

                        }

                    } else {
                        //normal morning wake up
                        parer("You wake up to a new day, still no sheath to keep you warm. This is starting to feel more familiar to you now but the desperate need to be a cock still lingers on. Who knows how long it will last. Not to mention the feeling of need in your ass is a constant bother too. Just like when you first touched that artifact your body feels like it is in a constant state of heat!");



                        oper(system, "./wait", "Wait in bed for a bit", "./nowait", "Get on with the day");


                    }







                }, //function close
                "nowait": function(character, system, action) {


                    //oper(system, "", "");
                    system.doLink("./mtease");
                }, //function close
                "wait": function(character, system, action) {
                    //            transer();
                    //            parer("");
                    //oper(system, "", "");
                    system.doLink("./mtease");
                }, //function close
                "wsfirst": function(character, system, action) {
                    //            transer();
                    //            parer("");
                    system.doLink("./mtease");
                }, //function close
                "mtease": function(character, system, action) {
                    transer();

                    if (rnd() > 3 || character.sandbox.daysnotacock < 5) {
                        //phone has a tease on it
                        var phonetease = "";

                        switch (rnd(20)) {
                            case 1:

                                phonetease = "There is a picture of a cock that you quickly recognize, since you were that cock for a while! It has the message q1wish you were hereq1 under it!";


                                break;
                            case 2:
                                phonetease = "host sent you a message q1Damn its just not the same without you between my legs.q1";
                                break;
                            case 3:
                                phonetease = "host sent you a message q1Any chance you are looking to spend some time as my cock again? Maybe a summer vacation?q1";
                                break;
                            case 4:
                                phonetease = "There is a picture of a cock that you quickly recognize, since you were that cock for a while! It has the message q1Set this as your profile icon! I took it before you changed back!q1";
                                break;
                            case 5:
                                phonetease = "There is a picture of a cock that you quickly recognize, since you were that cock for a while! It has the message q1Set this as your profile icon! I took it before you changed back!q1";
                                break;
                            case 6:
                                phonetease = "host sent you a message q1You should come over and spend the night... in my sheath XDq1";
                                break;
                            case 7:
                                phonetease = "host sent you a message q1Hey cock, how you doing? Ready to come home yet?q1";
                                break;
                            case 8:
                                phonetease = "host sent you a message q1I know you loved being my cock. You were practically begging for it sometimes....q1";
                                break;
                            case 9:
                                phonetease = "host sent you a message q1You belong between my legs... You do know that right? I bet you can feel it deep down, you know it's what is best for you!q1";
                                break;
                            case 10:
                                phonetease = "host sent you a message q1Hey, I got some more of those pills and a nice vibrator I would love to share with you!q1";
                                break;
                            case 11:
                                phonetease = "host sent you a message q1Next time I see you... My cock is going right up your ass and I am never going to pull it out again!q1";
                                break;
                            case 12:
                                phonetease = "host sent you a message q1I can almost feel my cock begging for you to be back as a part of it. It is really getting hard to ignoreq1";
                                break;
                            case 13:
                                phonetease = "host sent you a message q1How would you feel just waking up in my sheath again? Go to bed tonight and just wake up a cock... I bet you would love thatq1";
                                break;
                            case 14:
                                phonetease = "host has sent a bunch of cock pictures to you, you quickly recognize one of them as yourself! Errr the cock you were before.";
                                break;
                            case 15:
                                phonetease = "host sent you a message q1Hey cock, it is time to get back in your sheath! You have had enough free time, you need to go back to where you belong!q1";
                                break;
                            case 16:
                                phonetease = "host sent you a message q1If you are looking for a new place to live rent free, I've got a free spot in my pants! XDq1";

                                break;
                            case 17:

                                phonetease = "host sent you a message q1Damn I don't feel right without my cock. I want you back in my sheath! Where you belong!q1";
                                break;
                            case 18:
                                phonetease = "host sent you a picture of his sheath, the tip just barly poking out q1Jelous?q1";
                                break;
                            case 19:
                                phonetease = "host sent you a message q1I wonder what would happen if you sucked my cock all night long... Would your face merge with my crotch?q1";
                                break;
                            case 20:
                                phonetease = "host sent you a message q1I want your ass back in my sheath were it belongs before you go and sneak into someone elses sheath!q1";
                                break;
                            default:
                        } //End of RND switch


                        parer("You notice your phone has a message on it.....");
                        system.setQuality("lust", character.qualities.lust + 5);

                        parer(phonetease);
                        parer("You can't help but feel horny and embarrassed after that. It tugs at that part of you that just needs to be a cock again....");
                        oper(system, "./homemenu", "Try to ignore the message....");
                    } else {

                        system.doLink("./homemenu");
                    }





                }, //function close
                "homemenu": function(character, system, action) {

                    parer("Just like before you merged the first time... Your ass feels just wrong in a sort of desperation way. You can only assume this is what it must be like for certain species going into heat! The tingleing warmth and need to have someone inside you! But this time you know what will happen if you do so. Still trying to endure the sensations is mind numbing! It is making you slightly stir crazy needing to go for a walk or ANYTHING to clear your head a bit!");

                    if (character.sandbox.daysnotacock > 4) {



                        parer("WIP, only mark for now. Sex scene coming next update");
                        spark = true;
                        oper(system, "./callpasthost", "Call up and offer yourself to Mark");
                    } else {
                        parer("In a few days you might even consider giving your last... owner a call.");

                    }



                    if (character.sandbox.ws) {

                        oper(system, "./usethebathroom", "Use the bathroom");
                        spark = true;
                    }




                    oper(system, "./cock", "Look at your cock", "./mirror", "Look in the mirror");
                    spark = true;
                    oper(system, "home", "Head outside");




                }, //function close
                "usethebathroom": function(character, system, action) {
                    transer();
                    parer("wip");
                    system.doLink("./homemenu");
                }, //function close
                "cock": function(character, system, action) {
                    transer();
                    parer("You look down at your own cock and for a moment you see your sheath, the one that wrapped around your entire body before blinking and its gone. In an almost vivid way you can still feel it there, likely from the latent connection between you and host. Every time he brushes against his cock you can feel it as if you were still there!");
                    system.doLink("./homemenu");
                }, //function close
                "mirror": function(character, system, action) {
                    transer();
                    parer("You look in the mirror and feel so strange looking back t yourself. You can still feel it, being squished into a pair of pants, trapped in the warm embrace of a sheath. Your legs feel the most unusual, no longer function as massive sperm factories ready to fill you up");
                    system.doLink("./homemenu");
                }, //function close

                "callpasthost": function(character, system, action) {
                    transer();
                    parer("You just can't take this any more. Every waking thought revolves around your time in host's sheath... Something much more than your body changed from the time you spent as his cock. You want those feelings back, the taste, scent, and warmth. All you are right now is a dick without a sheath... But more than that, you are his.");
                    parer("Your fingers tremble a bit as you dial the number and hear it ringing. You hear him pick up q1Hello?q1");

                    var nh = character.sandbox.nh["mark"];
                    character.sandbox.currenthostparse = nh.parse;
                    character.sandbox.host = character.sandbox.nh["mark"];
                    character.host = character.sandbox.nh["mark"];
                    character.sandbox.headingholder = character.sandbox.activenh;
                    character.sandbox.curhost = character.host.chost;

                    character.sandbox.ch2re = true;
                    oper(system, "./beghim", "Beg him to take you back", "./offer", "Offer to become his cock again");
                }, //function close
                "beghim": function(character, system, action) {
                    transer();
                    parer("You don't waste any time and go straight to the desperate begging. Not in tears but he can tell how desperate you are. Explaining how leaving his sheath was a mistake and all you want now is the chance to go back. You never stopped being his cock, some part of you is just stuck that way now and you need to go back!");

                    parer("He listens for a bit, likely just enjoying your begging and pleading. As you finish a phantom shiver go up your body as he rubs his cock on the other side! It is such a strange feeling to know when someone is secretly masturbating to you!! " + character.host.returntohostphone);

                    //But this time.... there is no going back. Once you end up in my sheath you are never coming out again!
                    oper(system, "./soon", "Wait for you owner to come get you");
                }, //function close
                "offer": function(character, system, action) {
                    transer();


                    parer("You really don't want him to think you are too desperate for this. It's bad enough that you are going back to that embarrassing... and wonderful life. But you don't have to beg for it. You know he wants you back in his sheath and would likely jump at the chance to get you there. Very calmly explaining how you might be willing to back to being a cock and while trying to maintain as much dignity as possible.... you offer yourself to him.");

                    parer("He listens for a bit and as you finish a phantom shiver go up your body as he rubs his cock on the other side! It is such a strange feeling to know when someone is secretly masturbating to you!! " + character.host.returntohostphone);

                    //But this time.... there is no going back. Once you end up in my sheath you are never coming out again!
                    oper(system, "./soon", "Wait for you owner to come get you");
                }, //function close
                "soon": function(character, system, action) {
                    transer();

                    if (character.sandbox.underweargift) {

                        parer("With a slight blush you go and get out that pair of " + character.sandbox.underwear[1] + " you bought earlier. You knew what you were doing when you got them... ");
                        parer("host doesn't even knock on the door as you hear it open and close. He comes around the corner already starting to remove his pants. With a blush on your face you hold up the " + character.sandbox.underwear[1] + " to him. He can't help but smirk when you ask him to put you in them, the double meaning just feels so right and sexy");
                        parer(character.sandbox.host.returntohostunderwear);

                    } else {

                        parer("host doesn't even knock on the door, you hear it open and close. He comes around the corner already starting to remove his pants.");
                        parer(character.sandbox.host.returntohostgreet);

                    }


                    oper(system, "./present", "Get on the bed and pull off your pants");
                }, //function close
                "present": function(character, system, action) {
                    transer();
                    parer("There is a moment of clarity as you wonder if this is a good idea, but as your pants come off you know it is too late to be having second thoughts! Two hands grasp your hips as something warm and hard presses against your hole! q1It was great having you as a friend but you were way better as my cock. I have known you for long enough, this is what is best for you! Trust meq1 He says just nestleing the head against you, really grinding it in place as you feel it just barely starting to open you up!");

                    oper(system, "./slut", "Push back into it!", "./teased", "Let him tease you");

                    //   oper(system,"ch2morning/enter", "DAMN IT!");
                }, //function close
                "slut": function(character, system, action) {
                    transer();
                    parer("You just can't help yourself and lean back into his prodding! You have been so desperate for this feeling for days, YOU NEED THIS! There is a shiver of pleasure as you feel it enter you, his knot being the only thing that stopped your ass from swallowing it in one go! q1Damn you really did need this! Don't worry we will get you back to where you belong in no time!q1 He says sliding back out and then giving a nice strong thrust, pounding his knot against your ass!");
                    oper(system, "./knotmenow", "Beg for him to knot you");
                }, //function close
                "teased": function(character, system, action) {
                    transer();
                    parer("He only pushes against your hole without really trying to enter, you are nearly at the end of your rope with how much you need his cock inside you! Or more accurately become his cock... All this time detached from him has made you dream of thise moment and he is just back there teasing you! q1Hehe, watching you squirm like that is just too good. So desperate to become your best friends cock again.q1 He says giving a nice strong thrust sinking his cock in nearly all at once! The pounding of his knot is the only thing preventing your fate being sealed right there!!");
                    oper(system, "./knotmenow", "Beg for him to knot you");
                }, //function close
                "knotmenow": function(character, system, action) {
                    transer();
                    parer("You are already so lost in the moment it almost comes as a surprise as you practically beg for him to knot you! The heat your body is in just seems to demand relief, even if it means surrendering your entire exsistance to becomeing nothing but a sexy cock... It doesn't matter if you end up drooling cum from now on... thats future you's problem. Right now you just need relief!");
                    parer("q1You know, growing up with knot they use to tell you not to stick your dick in it unless you are ready for it to never come out again. Guess this time they were right.q1 He says teasingly. Then pulls back for a sudden strong thrust that stretches you open and lodges that buldge right behind your tight ring! You practically see stars as you relax down clenching tightly around the base!");
                    oper(system, "./humpy", "Just moan feeling your fate become tied to his cock");
                }, //function close
                "humpy": function(character, system, action) {
                    transer();
                    parer("Mark begins the pull back just hard enough to feel his knot threaten to stretch you open then thrust forward again! He does this a few times till it grows too large to even try escaping you. You can even feel it growing larger, stretching you out from the inside as it makes room. It's even more exhilirating knowing you may soon be doing this same thing to others, slipping into their tight hole as your body expands and knots yourself to them! Mean while mark starts thrusting faster, just pouding into you over and over with his knot tugging at your helpless ass!");
                    parer("He gives one final thrust and then holds your hips tight to his own!");
                    oper(system, "./finalthrust", "!!!!");

                }, //function close
                "finalthrust": function(character, system, action) {
                    transer();
                    parer("You feel his cum already flooding your insides as his shaft throbs just how you remember doing it while you where down there. It almost feels wrong as his cum pour into you rather than through you! Soon... soon.... You body and mind practically crave the feeling of it shooting from you mouth... But for now all you can do is enjoy the spreading warth as his knot expands a bit more just to make sure you won't be going anywhere!");
                    parer("q1That..... damn its just not the same without feeling it wiggle depseratley, finally we can fix that... ahh... just... Like last time, I got tired the moment I came inside you. Guess this is part of the process...q1 He says laying down on the bed dragging you down with him.... And he is right... just like before you are already starting to feel sleepy. q1You are gonna be a cock again soon, sweet dreams my lovely penis to be!q1 He says giving you a lick");

                    oper(system, "ch2morning/enter", "Drift off to sleep dreaming of your return life as a penis");
                }, //function close
                "r1": function(character, system, action) {
                        transer();
                        parer("You can feel his cum ");
                        oper(system, "", "");
                    } //function close
            } //actions close
        } //options close
    )
};