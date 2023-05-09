undum.game.intro = {
    start: new undum.SimpleSituation(
        "", {
            enter: function(character, system) {
                clother();
                var specieslist = ["canine", "equine", "feline", "scalie", "bunny", "fox", "hyena", "otter", "dolphin", "kangaroo"];
                character.sandbox.pbigspecieslist = ["bull", "orca", "dragon", "elephant", "moose", "tiger taur", "bear", "horse taur", "lion", "large " + specieslist[(rnd(10))]];
                system.write("<h1>The Merging</h1>\
          \
          <p>For the last 25 years you have lived a fairly normal life, \
                  Went to school, got a job, got your own place. Even had a\
                  girlfriend for a short time. </p>\
          \
          <p>You live in a mixed neighborhood, mostly furs and a few scalies\
                  and maybe a handful of taurs the most. Only a few of them were\
                  non native forms, usually the result of some strange magics or bizarre\
                  experimental machine. Weird transformations were very rare but not\
                  unheard off. </p>\
          \
                  <p>You are sleeping when a sudden knock at the door wakes you up.");
                oper(system, "intro/laenter", "Grab your bathrobe and open the door");
            },
            actions: {
                /*
                 "debug2": function(character, system, action) {
                 system.write("<p>"+character.sandbox.fname+"</p>");
                 character.sandbox.fname ="Xeytester";
                 system.write("<p>"+character.sandbox.fname+"</p>");
                 //system.dolink(mark);
                 }*/
            }
        }
    ),
    debug: new undum.SimpleSituation(
        "", {
            actions: {
                "enter": function(character, system, action) {
                    transer();
                    character.sandbox.debugrun = false;
                    character.qualities.day = 20;
                    spark = true;
                    oper(system, "./raptor", "Clever girl", "./horny", "HORNY", "./clothed", "Fuck clothing");
                    oper(system, "./magic", "MAGIC", "./hcock", "HORSE", "./dbspecies", "Species");
                    oper(system, "./timejumper", "Jump ahead a day", "./timejumper2", "jump ahead 4 days");
                    oper(system, "./hachart", "Harmonizey", "./tfery", "Tfery", "./blinky", "SUBLIMINAL!");
                    oper(system, "./checkrunes", "check runes", "./arttest", "SHalonify!", "./next", "Next sprite");
                    oper(system, "./debug", "Try out the old curse debugger", "runemenuy/runemenu", "Time for runes!");
                    oper(system, "./tfup5", "CTF up 5", "./tfdown5", "CTF down 5", "./linkery", "Beam me up!");
                    oper(system, "./debugmark", "Mark", "./debugkeagen", "Keagen", "./debugbret", "bret");



                }, //function close
                "horny": function(character, system, action) {
                    if (character.sandbox.erect) {
                        character.sandbox.erect = false;
                    } else {
                        character.sandbox.erect = true;
                    }
                    clother();
                }, //function close
                "clothed": function(character, system, action) {
                    if (character.sandbox.clothed) {
                        character.sandbox.clothed = false;
                    } else {
                        character.sandbox.clothed = true;
                    }
                    clother();
                }, //function close
                "raptor": function(character, system, action) {
                    if (character.sandbox.host.defaulthostbackground == "lizard") {
                        character.sandbox.host.defaulthostbackground = "mark";

                    } else {

                        character.sandbox.host.defaulthostbackground = "lizard";
                    }

                    clother();
                }, //function close
                "tfery": function(character, system, action) {
                    transer();
                    character.sandbox.debugrun = true;
                    spark = true;
                    oper(system, "./susup", "Sus up", "./susdown", "sus down");
                    oper(system, "./esup", "Essence up", "./esdown", "Essence down", "./runeon", "rune access");
                    //                oper(system, "./", "encourage tf up");
                    oper(system, "debug/enter", "back to debug", "transformation", "To night transformation");
                }, //function close
                "susup": function(character, system, action) {
                    system.setQuality("sus", character.qualities.sus - 1);
                    console.log("sus is now " + character.qualities.sus);
                }, //function close
                "susdown": function(character, system, action) {
                    system.setQuality("sus", character.qualities.sus + 1);
                    console.log("sus is now " + character.qualities.sus);
                }, //function close
                "hcock": function(character, system, action) {

                    if (character.sandbox.host.cocktype == "horse") {
                        character.sandbox.host.cocktype = "knot";

                    } else {
                        character.sandbox.host.cocktype = "horse";
                    };

                    clother();
                }, //function close
                "dbspecies": function(character, system, action) {
                    transer();

                    oper(system, "debug/enter", "return to debug");
                    oper(system, "./dbhuman", "human", "./dbbird", "bird", "./dbscalie", "dragon");
                    oper(system, "./dbfeline", "Feline", "./dbcanine", "canince");
                }, //function close
                "dbbird": function(character, system, action) {

                    character.sandbox.playertype = "bird";
                    clother();
                }, //function close
                "dbhuman": function(character, system, action) {

                    character.sandbox.playertype = "human";
                    clother();
                }, //function close
                "dbcanine": function(character, system, action) {

                    character.sandbox.playertype = "canine";
                    clother();
                }, //function close
                "dbscalie": function(character, system, action) {

                    character.sandbox.playertype = "dragon";
                    clother();
                }, //function close
                "dbfeline": function(character, system, action) {

                    character.sandbox.playertype = "cat";
                    clother();
                }, //function close
                "magic": function(character, system, action) {
                    character.sandbox.host = character.sandbox.nh["ravel"];
                    character.sandbox.scenerexit = "newhostpicked/enter";
                    if (character.sandbox.host.scenes.masturbate) {

                        oper(system, "./huh", "Just a placeholder here.", "ravelhostgreet/scene1", "Hold on to your butts....");
                    } else {
                        oper(system, "./huh", "Just a placeholder here.");

                    }

                }, //function close
                "timejumper": function(character, system, action) {

                    system.setQuality("day", character.qualities.day + 1);

                    system.setQuality("dayofweek", character.qualities.day % 7);

                }, //function close
                "timejumper2": function(character, system, action) {

                    system.setQuality("day", character.qualities.day + 4);

                    system.setQuality("dayofweek", character.qualities.day % 7);

                }, //function close
                "blinky": function(character, system, action) {
                    blinkymessage();
                }, //function close

                "runeon": function(character, system, action) {
                    character.sandbox.controlprog = 2;
                    character.sandbox.controlruneaccess = true;
                }, //function close
                "esup": function(character, system, action) {
                    system.setQuality("essence", character.qualities.essence + 1);
                }, //function close
                "esdown": function(character, system, action) {
                    system.setQuality("essence", character.qualities.essence - 1);
                }, //function close
                "hachart": function(character, system, action) {
                    transer();
                    system.setQuality("dignitylost", 50);
                    //          system.write('<svg viewBox="0 0 50 50" width="50%" height="50%"><defs>\
                    //<linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="50%" spreadMethod="pad"><stop offset="0%" stop-color="red" stop-opacity="1"></stop><stop offset="50%" stop-color="white" stop-opacity="1"></stop><stop offset="100%" stop-opacity="1" stop-color="grey"></stop></linearGradient></defs><g><rect x="0" y="0" width="100%" height="60" style="fill: url(&quot;#gradient2&quot;);"><circle cx="'+character.qualities.harmony+'" cy="'+character.qualities.dignitylost+'" r="2"></circle></g><g><text class="svgtext" y="6" x="1">Horny</text></g><g><text text-anchor="end" class="svgtext" style="text-anchor: end;" y="6" x="99">Bored</text></g></svg>');


                    oper(system, "./hartestup", "Harmonizey", "./hartestdown", "UNharmonizey");
                    oper(system, "./obtestup", "Accept", "./obtestdown", "Resist");
                    oper(system, "./enter", "debug");
                }, //function close
                "hartestup": function(character, system, action) {
                    system.setQuality("harmony", character.qualities.harmony + 5);
                }, //function close
                "hartestdown": function(character, system, action) {
                    system.setQuality("harmony", character.qualities.harmony - 5);
                }, //function close
                "obtestup": function(character, system, action) {
                    system.setQuality("dignitylost", character.qualities.dignitylost + 5);
                    console.log("dignity is now " + character.qualities.dignitylost);
                }, //function close
                "obtestdown": function(character, system, action) {
                    system.setQuality("dignitylost", character.qualities.dignitylost - 5);
                    console.log("dignity is now " + character.qualities.dignitylost);
                }, //function close
                "linkery": function(character, system, action) {
                    character.sandbox.activerune = "stability";
                    //character.sandbox.runedo.stability=false;
                    character.sandbox.perma = true;
                    character.sandbox.partial = true;
                    character.sandbox.rewardask = true;
                    // character.sandbox.perma=true;
                    //system.setQuality("ctf",100 );
                    //system.setQuality("harmony",character.qualities.harmony+5 );
                    //character.sandbox.ring=false;
                    //character.sandbox.limits.cantalk=false;
                    //   system.doLink("transformation/runeactions");
                    //system.doLink("morning/preenter");
                    //system.doLink("ch2/fiddler");
                    //system.doLink("masturbate/vibe");
                    oper(system, "pissadmit", "pissadmit");
                    oper(system, "masturbate/punishment2", "Punishment2");
                    oper(system, "sex/hostrespond", "host respond");
                    oper(system, "masturbate/toypick", "Toypick");
                    //system.doLink("events/adulttoyselector");
                    //character.sandbox.ctfrole="possessive";
                    //character.sandbox.ttcarryover=false;
                    //system.doLink("rareminigame/screwgame");
                    // system.doLink("weekend/asktowatch");
                    //system.doLink("work/hostwork");
                    character.sandbox.pilltoforget = 3;
                    system.setQuality("harmony", 89);
                    //system.doLink("masturbate/prtimeskipevent");
                    //character.sandbox.toys.beads=false;
                    //character.sandbox.toys.plug=false;
                    //      vibe:"./vibe",
                    //      fleshlight:"./fleshlight",
                    //character.sandbox.toys.cage=true,
                    //      vibe2:false,
                    //      bondage:false,
                    // character.sandbox.toys.condoms=true;
                    //      fakering:false



                    //character.sandbox.rewardask=true;
                    //system.doLink("masturbate/punishment2");
                }, //function close
                "next": function(character, system, action) {
                    character.sandbox.spritenum++;
                    if (character.sandbox.spritenum > 3) {
                        character.sandbox.spritenum = 1;
                    }
                    clother();
                }, //function close
                "arttest": function(character, system, action) {
                    character.sandbox.playertype++;
                    if (character.sandbox.playertype > 6) {

                        character.sandbox.playertype = 0;
                    }


                    //                character.sandbox.teststate++;
                    //                if(character.sandbox.teststate==4){
                    //                  
                    //                  character.sandbox.teststate=0;
                    //                }
                    clother();


                }, //function close
                "checkrunes": function(character, system, action) {
                    transer();




                    spark = true;
                    oper(system, "./tfrunetest", "Test remembering runes");
                    oper(system, "./displaytest", "Display the control rune", "./remrune", "Remeber the control rune");
                    oper(system, "./crazy", "Crazy rune test", "./unknownrune", "Unknown runes", "./scaryrune", "Scary rune test");
                    oper(system, "./addrune", "Add all  rune", "./runelook", "Check which runes you know");


                    oper(system, "./enter", "debug");
                }, //function close
                "remrune": function(character, system, action) {
                    displayrune("control", "remember");
                }, //function close
                "addrune": function(character, system, action) {

                    var grabarune;
                    var therune;
                    var statleng = character.sandbox.runeholder.length + 1;




                    for (let i = 0; i < statleng; i++) {


                        if (character.sandbox.runeholder.length != 0) {
                            grabarune = rnd(character.sandbox.runeholder.length);

                            therune = character.sandbox.runeholder[grabarune - 1];


                            character.sandbox.runeholder.splice(grabarune - 1, 1);
                            character.sandbox.runeknown.push(therune);


                        }
                    }

                }, //function close
                "tfrunetest": function(character, system, action) {

                    try {

                        character.sandbox.activerune = "blank";
                        // only gives some parts of the rune
                        character.sandbox.runelist = [];
                        var runeform = "";
                        var xxx;
                        for (xxx in character.sandbox.runeknown) {

                            runeform = runeform + ("<button class='glow-on-hover transient' onclick='displayrune(" + '"' + (character.sandbox.runeknown[xxx]) + '"' + ",\"remember\")'>" + ((character.sandbox.runeknown[xxx]).toUpperCase()) + "<br>  " + character.sandbox.runearchivedesc[character.sandbox.runeknown[xxx]] + "</button>");
                        }

                        //displayrune("control");

                        system.write(runeform);

                    } catch (e) {

                        console.log("TRYCATCH " + e);

                    }

                },
                "unknownrune": function(character, system, action) {

                    parer("we don't know the runes for" + character.sandbox.runeholder);

                }, //function close
                "runelook": function(character, system, action) {



                    parer("we know the runes " + character.sandbox.runeknown);

                }, //function close
                "crazy": function(character, system, action) {

                    var runeform;
                    var xxx;
                    for (xxx in character.sandbox.runeknown) {

                        runeform = runeform + ("<li onclick='displayrune(" + '"' + character.sandbox.runeknown[xxx] + '"' + ")'>" + character.sandbox.runeknown[xxx] + "</li>");
                    }

                    //displayrune("control");

                    parer(runeform);




                }, //function close
                "displaytest": function(character, system, action) {
                    displayrune("control");
                }, //function close
                "scaryrune": function(character, system, action) {

                    var runeform;
                    var xxx;
                    for (xxx in character.sandbox.runeholder) {

                        runeform = runeform + ("<li onclick='displayrune(" + '"' + character.sandbox.runeholder[xxx] + '"' + ")'>Unknown!</li>");
                    }



                    parer(runeform);




                }, //function close
                "debugbret": function(character, system, action) {
                    character.sandbox.host = character.sandbox.bret;
                    character.host = undum.game.bret2;
                    character.sandbox.currenthostparse = character.sandbox.bretparse;
                    clother();
                }, //function close
                "debugkeagen": function(character, system, action) {

                    character.sandbox.host = character.sandbox.keagen;
                    character.host = undum.game.keagen2;
                    character.sandbox.currenthostparse = character.sandbox.keagenparse;
                    clother();
                }, //function close
                "debugmark": function(character, system, action) {
                    character.sandbox.host = character.sandbox.mark;
                    character.host = undum.game.mark2;
                    character.sandbox.currenthostparse = character.sandbox.markparse;

                    clother();
                }, //function close
                "tfup5": function(character, system, action) {
                    system.setQuality("ctf", character.qualities.ctf + 5);

                    system.doLink("./debugtf");
                }, //function close
                "tfdown5": function(character, system, action) {
                    system.setQuality("ctf", character.qualities.ctf - 5);

                    system.doLink("./debugtf");
                }, //function close
                "debugtf": function(character, system, action) {




                    // system.animateQuality("ctf",ctfnumnew, {displayValue: false, from: character.qualities.ctf, to: ctfnumnew});
                    clother();

                }, //function close
                "debug": function(character, system, action) {

                    character.qualities.essence = 100;



                    oper(system, "curse", "Quick jumper ready and Mark loaded");
                },
                "r1": function(character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "");
                    } //function close
            } //actions close
        } //options close
    ),
    intro: new undum.SimpleSituation(
        "", {
            // then <a href='hub'>return to the topic list</a>.
            actions: {
                "laenter": function(character, system, action) {
                    parer("<p>Standing there is a wolf taur carrying a rather\
                  large box strapped on his back.</p><p>q1Oh... sorry to have woken you... I just need your signature for\
                  this box.q1 he says noticing your lack of pants.</p><p>");
                    var hostholder = "";
                    var xhostholder = "";
                    for (hostholder in undum.game.newhosts.names) {
                        xhostholder = undum.game.newhosts.names[hostholder];


                        character.sandbox.nh[xhostholder] = new protohost();

                        for (let med in undum.game.newhosts[xhostholder]) {
                            try {
                                character.sandbox.nh[xhostholder][med] = undum.game.newhosts[xhostholder][med];


                                ///bob[med]=xhostholder[med];
                            } catch (e) {

                                console.log("You dolt!!!! " + e + " Is not a variable I use!!!");

                            }



                        }




                        character.sandbox.newhostnames = undum.game.newhosts.names;


                    }



                    character.sandbox.fname = "Dick";

                    //Get

                    parer("<h1 class='transient'>Sign for the package</h1><br><br><br>");
                    system.write(' <input class="transient" value="Dick" style="text-align:center" type="text" id="txt_name" autofocus=true /><br><br><br><br>');






                    //                oper(system, "./grrrr", "Sign for the package");
                    parer("(WIP experiment use the name Dingle to skip to chapter 2 for testing purposes)");
                    spark = true;
                    oper(system, "./cccanine", "Checkmark Canine", "./ccfeline", "Checkmark Feline");
                    oper(system, "./ccbird", "Checkmark Bird", "./cchuman", "Checkmark Human", "./ccscalie", "Checkmark Dragon");
                    oper(system, "./clearplz", "(activate screen clearing mode for slow computers?)");

                }, //function close

                "ccbird": function(character, system, action) {
                    system.doLink("./grrrr");
                    character.sandbox.playertype = "bird";
                }, //function close
                "cchuman": function(character, system, action) {
                    system.doLink("./grrrr");
                    character.sandbox.playertype = "human";
                }, //function close
                "cccanine": function(character, system, action) {
                    system.doLink("./grrrr");
                    character.sandbox.playertype = "canine";

                }, //function close
                "ccscalie": function(character, system, action) {
                    system.doLink("./grrrr");
                    character.sandbox.playertype = "dragon";
                }, //function close
                "ccfeline": function(character, system, action) {
                    system.doLink("./grrrr");
                    character.sandbox.playertype = "cat";
                }, //function close
                "ccblank": function(character, system, action) {
                    system.doLink("./grrrr");
                    character.sandbox.playertype = "blank";
                }, //function close
                "clearplz": function(character, system, action) {

                    parer("Activated (this will be on the left as a menu button in a later update)");
                    character.sandbox.clearok = true;
                }, //function close
                "grrrr": function(character, system, action) {
                    clother();

                    if (undum.isInteractive()) {
                        var bla = $('#txt_name').val();
                        //Set
                        $('#txt_name').val(bla);
                        var pname = bla;
                        transer();
                        //pname = (prompt("What is your first name?"));
                        if (false == (pname == "" || pname == null)) {
                            console.log("name is " + character.sandbox.fname + pname);
                            character.sandbox.fname = (strip(pname));
                            console.log("name is " + character.sandbox.fname + pname);
                        }




                        //                  character.sandbox.fname = "Dick";
                        //                  pname = (prompt("Sign your name"));
                        //                  console.log("name is " + character.sandbox.fname + pname);
                        //                  if (false == (pname == "" || pname == null)) {
                        //                    character.sandbox.fname = (strip(pname));
                        //                    console.log("name is " + character.sandbox.fname + pname);
                        //                  }
                        //                  ;
                    } else {
                        //first test of the xeyvars
                        character.sandbox.fname = system.xeyvars[0];
                        character.sandbox.xeyvarnum++;
                        console.log("name is but non interactive " + character.sandbox.fname);
                    }
                    system.xeyvarcall(character.sandbox.fname);
                    transer();
                    //system.setCharacterText(desc1(character, system));

                    parer("He examines the clipboard making sure everything is in order.\
                                           Alright, everything seems ok, " + character.sandbox.fname + ".\
                                           Though, let me bring it inside, darn thing is heavy even for me.'\
                                           </p><p>\
                                           He steps inside and quickly unhooks the straps and carefully\
                                           sets it down on the floor of your living room.\
                                           He seems to stare at you for a few seconds afterwards\
                                           If I wasn't on such a tight schedule I would help you with\
                                           your other package problems.' he seems to say with a grin.\
                                           He takes a card and jots something down on it, 'Here is my\
                                           number if you ever need some help later.'  and rather\
                                           quickly he steps out.\
                                           </p><p>\
                                           Only then do you look down and realize you have had a bad case\
                                           of morning wood the entire time! On the card is the name 'Bret' and his personal number</p>\
                                           <p>");
                    // parer("<a href='./debug' >debuger</a>");
                    if (character.sandbox.fname == "Lingus") {
                        oper(system, "debug/enter", "Enter the debugger");
                    };
                    if (character.sandbox.fname == "Dingle") {
                        var grabarune;
                        var therune;
                        var statleng = character.sandbox.runeholder.length + 1;
                        for (let i = 0; i < statleng; i++) {
                            if (character.sandbox.runeholder.length != 0) {
                                grabarune = rnd(character.sandbox.runeholder.length);

                                therune = character.sandbox.runeholder[grabarune - 1];


                                character.sandbox.runeholder.splice(grabarune - 1, 1);
                                character.sandbox.runeknown.push(therune);


                            }
                        }

                        oper(system, "./ch2skip", "SKIP TO CHAPTER2");


                    };
                    clother();
                    oper(system, "./opening", "Just open it now", "./examine", "Examine the package");
                },
                "ch2skip": function(character, system, action) {
                    transer();
                    system.setQuality("day", 5);
                    parer("The hosts do not all work yet. we have 2 user submitted hosts and 1 that I wrote. The scenes do not match up with the hosts perfectly yet as this is a MASSIVE process to make chapter 2. However they will function almost perfectly as if they were your first host.... almost. It will be helpfull to locate scenes that just don't match up with hosts to make a note of them as important ones to create chapter 2 versions of!");
                    oper(system, "./ch2nows", "Let me in already! (no WS)", "./ch2ws", "Let me in already! (yes WS)");
                }, //function close


                "ch2ws": function(character, system, action) {
                    character.sandbox.ws = true;
                    system.doLink("ch2/fiddler");
                }, //function close
                "ch2nows": function(character, system, action) {
                    character.sandbox.ws = false;
                    system.doLink("ch2/fiddler");
                }, //function close
                "opening": function(character, system, action) {
                    transer();
                    parer("<p>\
                                           It takes some work with all the tape and straps but eventually\
                                           it is pried open revealing some supportive Styrofoam and\
                                           a small letter. After getting rid of the Styrofoam and the cardboard\
                                           you are left with a truly strange sight. <br>\
                                           Before you is a 3 foot tall stone pedestal with a 6inch long obsidian phalic crystal\
                                           seated atop it. Around its base there is a thick jade cock ring with a single\
                                           gem inset in it. All over the surface of the pedestal is some kind of unrecognizable writing.\
                                           </p><p>Along with it is a letter that hopefully will explain\
                                           what this is all about.\
                                           </p>");
                    oper(system, "letter/firstpage", "Read the letter");
                },
                "examine": function(character, system, action) {
                    transer();
                    parer("<p>\
                                           The box is about 3 feet tall, and is just as heavy\
                                           as the Wolf said, you can hardly\
                                           get it to move from where he left it. Checking the label\
                                           you discover that it was sent from VERY far away, a county\
                                           that you havent even heard of. But at least you know who sent\
                                           it now! Your uncle Shendo that works in archeology. You\
                                           hardly know him and why he might be sending you something is\
                                           still a mystery.\
                                           </p>");
                    oper(system, "./opening", "Open it");
                }
            }
        }


    ),
    letter: new undum.SimpleSituation(
        "", {
            // then <a href='hub'>return to the topic list</a>.
            heading: "The Letter",
            actions: {
                "firstpage": function(character, system, action) {
                    transer();
                    parer("<em><p>I know this is a bit of a surprise but I hoped you might be willing\
                              to help me with something. Along with this letter I have sent an artifact my\
                              team recovered from a recent dig site. Normally we have a lab that\
                              takes care of this sort of thing but due to it's nature\
                              they decided to pass seeing it as unimportant or unprofessional. </p>\
                              <p>A lab full of stuck up scientists too squeamish to test\
                              an ancient male enhancement device! </p>\
                              <p>So I have told them that I am sending it to a specialist in such matters\
                              . I figure a young man such as yourself might fit that description loosely.\
                               In a few months I will be heading your way,\
                          so you have till then.\
                              I am sure someone your age would learn far more than a room full\
                              of dusty scientists.</p><p>Best Wishes</p><p>Shendo Urimay</p>\
                              <p>PS: As extra incentive I am willing to pay you 2000 dollars\
                              for your help in this and to keep it quiet.</p>\
                              </p><em>");
                    oper(system, "./second", "Second Page");
                }, //function close
                "second": function(character, system, action) {
                    transer();
                    parer("<p>The second page seems to be translations for some of the symbols that you see on the artifact. It's mostly gibberish but it generally says things like sacrifice and pleasure but it seems whoever was translating it stopped half way. However the translated words 'incredible length' and 'marvelous size' are circled in red. Its hard to not raise an eyebrow at the prospect of 'unnatural male enhancement' Regardless you should probably keep it in a more private location.</p>");
                    oper(system, "artifact/enterer", "Move it to your room");
                }
            }
        }
    ),
    artifact: new undum.SimpleSituation(
        "", {
            heading: "The Artifact",
            actions: {
                "enterer": function(character, system, from) {
                    //system.setQuality("timeofday", character.qualities.timeofday + 1);
                    parer("With some work you manage to push it into your bedroom so that it's not on display in your living room for all to see. </p><p>It is still early morning and the entire day is ahead of you thankfully you don't happen to have any classes at the college to attend today.");

                    oper(system, "./leave", "Ignore the artifact", "./experiment", "Experiment with it");
                }, //enter close
                "leave": function(character, system, action) {
                    transer();
                    parer("<p>Deciding its best to wait for later, you get dressed and leave your apartment\
          giving yourself some time to think this over.</p>");

                    oper(system, "places", "Choose your destination");

                }, //function close
                "experiment": function(character, system, action) {
                    transer();

                    parer("<p>You take the second page of the letter your uncle sent and sit down on the end of your bed staring at the artifact. Along the sides of the dildo you can see blue runic lines, and the green ring around the base also has a set of runes on it. Various glyphic pictures and more runes adorned the surface of the stone pedestal, even with the letter there is very little that makes sense. Though one of the runic pictures seems to show someone siting on the pedestal. It becomes pretty clear how the artifact is inteded to be used.</p><p>\
                                          It's rather embarrassing what you are considering but the offer of a longer cock is hard to pass up. And the offer of 2000 dollars to test it certainly makes the decision easier</p>");

                    oper(system, "./experiment2", "What is the worst that could happen?");

                }, //function close
                "curse": function(character, system, action) {
                    transer();
                    system.setQuality("harmony", 50);
                    parer("Astonishingly there is only a bit of pain, and all you can do is groan as another shock emanates from the dildo! You are sitting directly on the stone with every inch of the dildo stuffed inside you. Rather slowly you stand back up and check for any kind of damage, thankfully there is none.... but something is very wrong! There is a burning sensation along your sides and a pleasent tingling sensation all through your ass!");
                    character.sandbox.checked = 1;
                    oper(system, "./sides", "Check your sides", "./rear", "Check your butt");


                }, //function close
                "experiment2": function(character, system, action) {
                    transer();
                    parer("<p>A bottle of lube later you are standing over the pedestal wondering if this is really worth it. With a sigh you ease yourself down, thanks to its angle there is no problem aiming.</p><p> However the near electric shock that follows when it touches your ass is enough to send a spasm through your arms. It causes you to let go of the pedestal and fall onto it rapidly forcing the entire thing into your rear!</p>");
                    oper(system, "./curse", "Give yourself a moment to recover");



                }, //function close
                "rear": function(character, system, action) {
                    transer();
                    parer("You rub your poor hole only to be surprised by a wave of pleasure washing over you! The damn thing must have made you super sensitive. It certainly would confirm its magical nature. However looking back at it you see that the RING IS MISSING. You quickly probe your hole and nearly double over in the process however as twinges of pleasure rocket though you. You gasp as the sensation becomes too much and you actually experience an anal orgasm! However you do manage to confirm it's NOT inside you.");
                    system.animateQuality("essence", character.qualities.essence + 10, { from: 0, to: 1 });
                    character.sandbox.checked += 1;
                    if (character.sandbox.checked == 2) {
                        oper(system, "./sides", "Check your sides");
                    } else {
                        oper(system, "./itbegins", "Decide what to do next");
                    }
                }, //function close
                "sides": function(character, system, action) {
                    character.sandbox.checked += 1;
                    transer();
                    parer("You feel a burning sensation just under both your arms. You don't find anything wrong till you check a mirror and find the same runic line adorning you as the cock had! It looks rather stylish... but you still hope its only temporary.");
                    if (character.sandbox.checked == 2) {
                        oper(system, "./rear", "Check your rear");
                    } else {
                        oper(system, "./itbegins", "Decide what to do next");
                    }
                },
                "itbegins": function(character, system, action) {
                    transer();
                    parer("<p>You are left panting on the bed after that orgasm, whatever the artifact did to you it isn't seeming to go away. That strange tingling is rather distracting and it almost makes you want to shove something back inside you just to make it go away. However you don't really own anything like that other than the artifact and using that again could just make this worse! You try to ignore the tinglings till night falls and hope to sleep it off.</p>");
                    oper(system, "./masturbate", "Masturbate before you sleep", "firstday/entery", "Resist the urge and get some sleep");
                    //system.setQuality("timeofday", character.qualities.timeofday + 1);
                }, //function close
                "masturbate": function(character, system, action) {
                        transer();
                        system.animateQuality("essence", character.qualities.essence + 10, { from: 0, to: 1 });
                        parer("<p>You waste no time once in bed and quickly try to\
                                                  bring yourself to orgasm, but it just doesn't feel like enough. And to make it worse\
                                                  the tingling from your rear is distracting you terribly. You reach back and try to feel if rubbing it will help\
                                                  and you are rewarded with a surge of sensation! Working both your cock and hole you rapidly reach that climax! \
                                                  You lay back and breath heavily basking in the relief.</p>");
                        oper(system, "firstday/entery", "Finally get some sleep");
                    } //function close					 
            } //actions close
        } //options close
    ),
    /*
     curse: new undum.SimpleSituation(
     "<p>You are now filled with a strange sensation, almost like a need to have something fill you. Its almost overwhelming! \
     und the shaft enough to remove it perhaps. <a href='./ring'> Examine the ring</a></p>"
     ,{
     actions: {
     "ring": function(character, system, action) {
     system.write("<p>Rather easily the ring slides off the shaft and you feel that pulling or connection\
     is actually to the ring and not the cock.</p><p class=transient><a href=./worn >Put it on</a></p>");
     },
     "worn": "<p>Almost as if you are compelled to do so the ring slides easy down over your own cock\
     fitting comfortably against the base. A cold shiver passes over your entire body and that pulling\
     turns into something much different. You feel connected to the ring, almost as though it were an extension of you.\
     You can faintly even see a slight glow to the gem! Focusing on the ring seems to cause the glowing to fade away and\
     that tinging sensation spreads through your body again.\
     </p><p>OPTION TWO\
     /b The markings on the cock are also surprisingly missing! Their blue glow gone along with the obsidian color\
     . Yet you seem to still see a glint of blue at the corner of your eye, tracing the source you find those markings\
     are now adorning your sides! once you reali..... GAA I DONT LIKE THIS OPTION EITHER\
     </p>\
     <p><a href='./itbegins' class=transient style='color:rgb(255, 14, 100)'> BACK TO READY CONTENT </a> </p>\
     ",
     "itbegins": "<p>Whatever the artifact did to you it isn't seeming to go away. With any luck you hope\
     it will go away by itself by morning. That strange tingling is rather distracting and it almost makes\
     you want to shove something back inside you just to make it go away. However you don't really own anything\
     like that other than the artifact and using that again could just make this worse!</p>\
     <p></p>\
     <p><a class='transient' href=./masturbate> Masturbate before you sleep </a> or</p>\
     <p><a href=firstday class=transient> just try to get some rest </a>.\
     </p>",
     "masturbate": function(character, system, action) {
     system.animateQuality("essence",character.qualities.essence+20);
     system.write("<p>You waste no time once in bed and quickly try to\
     bring yourself to orgasm, but it just doesn't feel like enough. And to make it worse\
     the tingling from your rear is distracting you terribly. You reach back and try to feel if rubbing it will help\
     and you are rewarded with a surge of sensation! Working both your cock and hole you rapidly reach that climax! \
     You lay back and breath heavily basking in the relief.</p><p class=transient><a href=firstday >Finally get some sleep</a></p>");
     },
     }
     }
     ),
     */
    firstday: new undum.SimpleSituation(
        "", {
            enter: function(character, system) {
                //system.setQuality("timeofday", 0);
                system.setQuality("day", 1);
            },
            actions: {
                "entery": function(character, system, action) {
                    transer();
                    parer("<p>You wake up to a rather uncomfortable feeling it almost seems centered on your rear. Whatever that artifact did is causing your ass to feel EMPTY and all you can think of is some way to end this feeling! You could almost swear it is like the artifact put you into some sort of heat! The darn thing must have been meant for females! This feeling of need is FAR beyond that of any normal aphrodisiac! It will be a miracle if you even make it through the day. </p><p>\
             ");
                    oper(system, "./morning", "Get up and finish your morning routine");
                }, //function close
                "morning": function(character, system, action) {
                        transer();
                        parer("\
                                               <p>You get up, use the bathroom and make some coffee all the while trying to ignore the\
                                               desperate need to be fucked coming from your rear! Unless this goes away soon you will need to do something\
                                               before the day is up, possibly find a nice guy to invite over. And maybe make plans to kick your\
                                               uncles ass when you see him next.</p>");
                        oper(system, "places", "Head out hoping to find some relief.");
                    } //function close
            }, //action close
            exit: function(character, system, to) {


            }
        }

    ),
    /////////////////////////////////////////////////////////////////////
    //                    First Merging                              //
    /////////////////////////////////////////////////////////////////////
    firstmergehidden: new undum.SimpleSituation(
        "", {
            actions: {
                "entry": function(character, system, action) {
                    transer();
                    parer("You make it to his house a bit after he did thankfully, judging from the lights being on. You knock a few times before he opens the door to your flushed face. q1Ah you are already here. Well come on on in!q1 He says waving you inside. You spend a few minutes chatting but it's terribly awkward from trying not to give away how out of breath you are. It's absurdly difficult just to keep your pants on and hold a slight conversation. Every second your ass clenches uncomfortably with need. ");

                    parer("It doesn't take long for host to get the hint. From all the fidgiting you are doing it's clear the only thing on your mind is between his legs. When he finally offers to move the conversation to the bedroom you jump at the chance");
                    character.sandbox.stealth = true;
                    character.sandbox.limits.cantalk = false;
                    character.sandbox.limits.hasarms = false;
                    oper(system, character.sandbox.host.host + "hosth/sex", "Head right to his bedroom", character.sandbox.host.host + "hosth/foreplay", "Try to keep it together");
                    system.setQuality("harmony", 50);
                    console.log("HEY YEA DIDn't fuck it up! ");
                    system.setQuality("sus", (character.sandbox.acc * 2) - character.sandbox.discovery);
                }, //function close

                "r1": function(character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "");
                    } //function close
            } //actions close
        } //options close
    ),

    firstmerge: new undum.SimpleSituation(
        "", {
            heading: "Home",
            enter: function(character, system, from) {

                parer("<p>You make it back home and quickly do some random cleanings of your apartment knowing " + character.sandbox.host.host + " should be arriving soon. This entire situation is terribly embarrassing, thankfully the desperation is making it a bit easier to bare.</p><br><p>After about an hour and a half there is a knocking at your door. You are about to answer it when you realize the artifact is till out in the open in your bedroom!</p>");
                oper(system, "./answer", "Answer the door", "./stall", "Stall and hide the artifact");
                system.setQuality("harmony", 50);
            },
            actions: {
                "answer": function(character, system, action) {
                    transer();
                    parer("<p>Figuring its too late now you quickly open the door and welcome " +
                        character.sandbox.host.host + " inside. It's absurdly difficult just to keep your pants on and hold a slight conversation for a few minutes. Every second your ass clenches uncomfortably with need.");

                    oper(system, character.sandbox.host.host + "host/sex", "Take him right to your bedroom", character.sandbox.host.host + "host/foreplay", "Keep it together");
                    character.sandbox.artifacthidden = false;
                },
                "stall": function(character, system, action) {
                    transer();
                    parer("<p>You call out saying you just need a moment or two as you rush to your bedroom and begin pushing the heavy pedestal into your closet! It makes a terrible grinding noise but you manage to get it in and shut the door behind it.</p><p>Finally you get to the door and let host in, trying not to give away how out of breath you are.</p><p>It's absurdly difficult just to keep your pants on and hold a slight conversation. Every second your ass clenches uncomfortably with need.");

                    oper(system, character.sandbox.host.host + "host/sex", "Take him right to your bedroom", character.sandbox.host.host + "host/foreplay", "Keep it together");

                    character.sandbox.artifacthidden = true;
                }
            }
        }
    ),

    mergefinal: new undum.SimpleSituation(
        "", {
            heading: "Your Bedroom",
            enter: function(character, system, from) {
                //system.setQuality("timeofday", 0);
                character.sandbox.curhost = character.sandbox.currenthostparse.host;
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

                "type20": function(character, system, action) {
                    //20%= minor shrinking, no legs, attached to groin
                    parer("<p>After the panic of the situation has finished host stands in front of the mirror\
                                                          looking over what has happened to both of you.</p><p>Thankfully the transformation didn't seem to get very far. You are only a few feet shorter but your legs have been completely absorbed by his now MASSIVE balls. The rest of your body is mostly unchanged. At best only about 20% of your body has been transformed, though your waist is merged with " + character.sandbox.host.host + "s groin. </p>");
                    if (character.sandbox.host.host == "mark" || character.sandbox.host.host == "keagen") {
                        parer("host" + ((character.sandbox.host.host == "keagen") ? "Sighs looking down at you. \"That artifact is far more than some male enhancement device. I never expected this is what it intended by giving you a longer cock. But if it can cause this it certainly can undo it. Stilll.... This is weird.\" " : " shakes his head looking at you and he in the mirror. \"Damn... there is no way we can go out in public looking like this... I really hope you can explain what the hell is going on, and why you are currently attached to my groin!\""));
                        character.sandbox.limits.goout = false;
                    } else {
                        //its bret
                        parer("host shakes his head looking at you and he in the mirror. \"If I wear a long overcoat you should be able to stay hidden with a harness to keep you secure under me. Still I really hope you can explain what the hell is going on, and why you are currently attached to my groin\"");
                    };
                    character.sandbox.limits.insheath = 0;
                    oper(system, "./explain", ((character.sandbox.host.host == "keagen") ? "Ask him how this could happen" : "Tell him about the artifact"));
                    clother();
                },
                "type40": function(character, system, action) {

                    //40%= surrounded by sheath, can pull into sheath part way, Looks like a hyper fur. Can hide in public.
                    parer("<p>As " + character.sandbox.host.host + " and you get ahold of yourselves he seems to relax which has an odd effect on you. Your body gets a bit softer and you feel yourself getting pulled into his sheath. You let out an eeep of surprise but with your size the sheath can only hold up to your shoulders. If you really relax and work your arms in you could probobly get it to around your neck. Although anyone seeing the bulge in his pants would think he is a hyper fur or something.</p>\
                                                          " + ((character.sandbox.host.host == "keagen") ? "Keagen sighs looking down at you, his new cock \"I had no way to know this would happen, but if the artifact can do this, then it most likely can undo it.\"" : "<p>\"I really hope you can explain what the hell is going on, and why you have been turned into my cock! ") + "He says giving you an experimental rub which causes a surge of pleasure to run through your entire body.</p>\
                                                          </p>");
                    character.sandbox.limits.insheath = 1;
                    oper(system, "./explain", ((character.sandbox.host.host == "keagen") ? "Ask him how this could happen" : "Tell him about the artifact"));
                    clother();
                },
                "type60": function(character, system, action) {
                    if (character.sandbox.host.host == "bret") {
                        system.doLink("./type80");

                    } else {;
                        //60%= Far smaller but larger than a cock, can fit in pants.
                        parer("<p>As " + character.sandbox.host.host + " and you get ahold of yourselves he seems to relax which has an odd effect on you. Your body gets a bit softer and you feel yourself getting pulled into his sheath! Apparently the only reason you were out was due to his morning wood. His sheath seems determined to welcome you to your new home! However you are able to grab the sides and hold yourself from being pulled in, though the moment you\
                                                          let go it would engulf you rather quickly.</p><p>" +
                            ((character.sandbox.host.host == "keagen") ? "Keagen sighs looking down at you, his new cock \"I had no way to know this would happen, but if the artifact can do this, then it most likely can undo it.\"" : "\"I really hope you can explain what the hell is going on, and why you have been turned into my cock!\"") + "He says giving you an experimental rub which causes a surge of pleasure to run through your entire body.</p>");

                        character.sandbox.limits.insheath = 2;
                        oper(system, "./explain", ((character.sandbox.currenthostparse.host == "keagen") ? "Ask him how this could happen" : "Tell him about the artifact"));
                        clother();
                    }
                },
                "type80": function(character, system, action) {
                    //80%= cock sized, no bones, Difficulty moving when hard
                    parer("<p>As " + character.sandbox.host.host + " and you get ahold of yourselves he seems to relax which has an odd effect on you. Your body gets a bit softer and you feel yourself getting pulled into his sheath! Apparently the only reason you were out was due to his morning wood.The sheath soon pulls you in deeper. Even with your full strength his sheath seems determined to welcome you to your new home! Your arms give out and you are pulled the rest of the way into his warm moist sheath which quickly closes above you! </p><p>Its unbelievably tight the best you can do is wiggle around slighty, you are still a fair bit larger than any normal cock would be. You soon feel a rubbing sensation from outside and a wonderful surge of pleasure cascading through you. There is a thumping pulse that is causing you to grow hard and slowly exit from his sheath. </p><p>\"" +
                        ((character.sandbox.host.host == "keagen") ? "Alright I will try to talk fast" : "Alright talk fast") + ", I can't stay hard... err you can't stay hard forever!\" He says trying to maintain an erection</p>");
                    character.sandbox.limits.insheath = 2;
                    oper(system, "./explain", ((character.sandbox.host.host == "keagen") ? "Ask him how this could happen" : "Tell him about the artifact"));
                    clother();
                },
                "stealthend": function(character, system, action) {
                    transer();

                    //two options here TT Gained or can talk gained
                    if (character.sandbox.ring) {
                        // parer("PLACEHOLDER SCENE END OF STEALTH PATH");





                        parer("host sits down with his legs spread wide open and just sort of stares at you for a few moments. He has never done anything like this before but you don't exactly feel horny. q1Alright.... I have felt you move around a bunch of times. I mean can you hear me? Ugh if anyone saw me right now they would think I am losing it.q1");



                        //oper(system, "./explain", "Explain to him what the heck has happened!");

                        oper(system, "./ttstealth", "Focus all your effort on reaching him! ", "./giveine", "You really think of yourself as his cock");


                    } else {
                        //masturbation scene of host using a cockring
                        if (character.sandbox.host.host == "keagen") {
                            //keagen starts with ring off.
                            parer("host sits down with his legs spread wide open and just sort of stares at you for a few moments. He has never done anything like this before but you don't exactly feel horny. q1What the heck is going on, why do you keep moving all on your own!? I swear something weird is going on ever since that night with player. I can't believe I am talking to my own cock..... Maybe...q1 He says for a moment then.... SLIPS THE RING BACK ONTO YOU! The energy from it refreshes the runes and you can feel them.... waiting.");


                            oper(system, "./ttstealth", "Focus all your effort on reaching him! ", "./giveine", "You really think of yourself as his cock");
                        } else {

                            parer("It has been days since you became host's cock. No matter what you do he just doesn't seem to notice you down there, other than when he wants you out to play with. You had almost lost any hope of changing back ever since you somehow managed to lose the ring! But just as host was about to get dressed.... you suddenly see it! The ring is RIGHT THERE under his bed!");

                            oper(system, "./masturbatestealthend", "Muster all your effort to wiggle and get him to look down!");


                        }

                    }








                }, //function close
                "ttstealth": function(character, system, action) {
                    transer();


                    //character.sandbox.limits.cantalk=true;

                    parer("The runes start to tingle stronger as you focus so heavily at trying to communicate. However you don't really notice anything until you think the words *I AM HERE!*<p>\"What the heck was that! Err sort of it was like a weird... thought in the back of my mind.\" host says shocked! At the same time you feel a tiny warmth drain out of the runes as you do so. It's like learning to cross your eyes for the first time, you know how to do it again even if you are not sure HOW you did it. It did seem to drain the power of the runes a bit however<p>");

                    if (character.sandbox.host.host == "keagen") {

                        parer("q1That felt so strange...... Wait HOW did you do that? OMG I KNEW IT! How long... well I know how long. I can't belive you have been stuck as my cock for so long! I was just about to give up and assume you had moved or something. This is crazy. BUT AMAZING! I know the runes pick up on thoughts during alpha waves but if you can send a thought to me, then maybe they can pick up on other thoughts as well!q1 He says excitedly.");

                    } else {
                        parer("That felt so strange...... Wait HOW did you do that? OMG player is that you? I can't belive you have been stuck as my cock for so long! I thought I was going crazy whenever my cock moved on it's own! You better have a good explination for this! !q1 He says.");


                    }



                    parer("<p  class='transient' style='color:rgb(255, 14, 100);'>LEARNED THOUGHT TRANSFER!: (TT)  You can spend essense to let host hear you but the cost may change depending on your harmony with him! ");
                    parer("<p  class='transient' style='color:rgb(255, 14, 100);'>LEARNED DREAMSTATE CONTROL!  You can spend essense to attempt to take control of the transformation at night!");
                    character.sandbox.control = true;
                    character.sandbox.abilities.think = true;

                    system.animateQuality("essence", character.qualities.essence - 1);

                    character.sandbox.ringlost = false;
                    character.sandbox.ringcheck = true;
                    character.sandbox.fullcock = 0;
                    character.sandbox.dayringlost = 999;
                    //parer("");
                    oper(system, "./explainh", "Do your best to use the essence to explain everything!");
                }, //function close
                "giveinm": function(character, system, action) {
                    transer();
                    character.sandbox.acc += 100;
                    parer("You are just a cock. A happy cock that belongs to host. You don't do anything at all and just enjoy what you are. Still drooling cum you hardly notice as host gives you a slight shake and pulls the ring away from your body. Along with it any chance of communicating with him... q1A bit too big, would fall off to easily.q1 He says and tosses the ring into a junk drawer. Your mind starts to come back just soon enough to watch your only chance of escape get discarded. ");
                    parer("There is a moment of hope though as he picks up and and thinks about it again. q1Then again maybe I could sell it....q1 He says to your horror! The sheath starts to feel eager to reclaim you and starts pulling you back inside. You don't get to see what happens to the ring before the sheath engulfs you as your now likely permanent home.");





                    oper(system, "./workbypass", "Your future as a cock just became permanent");
                }, //function close
                "giveine": function(character, system, action) {
                    transer();
                    //
                    character.sandbox.acc += 10;
                    character.sandbox.ringdrain = true;
                    if (character.sandbox.host.host == "keagen") {
                        parer("You are just a cock. A happy cock that belongs to host. You don't do anything at all and just enjoy what you are. host shakes his head and gives you a rub, then clenches his muscles just a bit making you jump slightly. q1It has to be some residual effects from interacting with player. I should probobly drain the essence accumulation on a regular basis just to be safeq1 He says and pulls the ring back off of you.");


                    } else {
                        parer("You are just a cock. A happy cock that belongs to host. You don't do antyhing at all and just enjoy what you are. host shakes his head and gives you a rub, then clenches his muscles just a bit making you jump slightly. q1I guess it's just some twitch.q1 He says ending any possibility of him thinking of you as anything but his cock. That is what you are... and likely always will be. His penis.");

                    }



                    oper(system, "./workbypass", "Your future as a cock just became much harder to reverse");


                }, //function close
                "workbypass": function(character, system, action) {
                    transer();
                    parer("q1Still my cock has been acting a bit odd... Maybe I should take those pills like the doctor suggested.q1 He mumbles to himself for a moment. You are too tired from cuming to do anything as you hear a bottle open up. A few pills later and a glass of water... you hear a concerned gasp q1 Oh heck! I should have read the label closer! 1 pill every 3 days?q1 He says as you already start to feel the effect!");

                    oper(system, "./prtimeskipcum", "Get hard again as you feel a strange tingle!");
                    //oper(system, "work/"+character.sandbox.host.sender, "Your future as a cock just became much harder to reverse");

                }, //function close
                "prtimeskipcum": function(character, system, action) {
                    transer();
                    if (character.sandbox.host.host == "bret") {
                        parer("Bret starts humping you into the bed, over and over sliding you against it! Finally he can't take it any more and gets out that tube thing he has used before. He forces you in head first as he holds it in place thrusting away! The effects of the pills start taking hold quickly, each thrust feeling better than the last!");

                    }
                    parer("You do your best to bear down and brace yourself against the feelings! It doesn't let up though and you start feeling warm and flush! Even worse is the pressure from host's balls! You can actually feel them getting uncomfortably full! Everything starts feeling so good as your sensitive cock flesh sends shocks of pleasure through you!");

                    oper(system, "./prtimeskipcum2", "Cum AGAIN!");

                }, //function close
                "prtimeskipcum2": function(character, system, action) {
                    transer();
                    parer("It comes as no surprises when you feel your balls suddenly clench sending a surge of cum up through you! Normally this feels like such a relief, and it sort of does... The orgasm surges through you making it hard to think, the pressure of bearing down as the pressure of his cum uses your body like a fire hose. You are still seeing stars when the sensation of needing to cum returns! If you had lungs you would be panting and gasping right now, and already another orgasm is building!");
                    oper(system, "./prtomilking", "Sooo... goood....");
                }, //function close
                "prtomilking": function(character, system, action) {
                    transer();
                    parer("Despite the sensations of wonderful pleasure that tingling just keeps getting stronger! You can't quite place it though! The cum pumping through you feels better and better each time it happens and you start to lose track of it... Somewhere in the back of your mind it occours to you, it feels like you are going a bit numb from over stimulation! Everything... is getting.... so hard to think....");
                    oper(system, "./milking", ".......");
                }, //function close
                "milking": function(character, system, action) {
                    transer();
                    var pillholder = [
                        "Cumming over and over....",
                        "host seem in panic about something...",
                        "People... all looking at you",
                        "Getting into bed.....",
                        "Getting out of bed....",
                        "A weird thing sucks on you",
                        "Still in bed, some people looking at yout",
                        "Sucking and cumming",
                        "Sucking and cumming",
                        "Waking up... Sleeping... Cumming.... Waking up.....",
                        "./milkingwake"
                    ];

                    delay(pillholder);
                }, //function close
                "milkingwake": function(character, system, action) {
                    transer();

                    parer("You finally wake up to the stranges sensation! Something is sucking on your entire body! At the same time squeezing and pulling on you with rhythmic perscision! You are in mid orgasm as the cum gets literally sucked out of your slit of a mouth! The orgasm is practically constant on you feel absolutely numb from the experience! After some time you nearly lose yourself again but something changes and the tube pulls away from your body.... IT WAS A MILKING MACHINE!!!");
                    parer("You can see it now, a metal cylinder with a latex interior, a doctor is placing it back on a machine as he comes up close to look right at you! It's then that you realize you can't move at all anymore! Even throbbing is just about at the limit of what you can still do! You can hear the doctor chatting to host a bit as you try to refocus on reality");
                    system.setQuality("essence", character.qualities.essence + 60);
                    oper(system, "./docchat", "Listen in");
                }, //function close
                "docchat": function(character, system, action) {
                    transer();
                    parer("Just one more day of this and we should be able to take you off the milking machine. The dangerous levels of cum production should have run their course by then. Next time make sure you read the warning labels before taking any medication!q1 He says rather sternly. host sounds to be just as exhausted as you feel! Distressingly you almost can feel the cum inside his balls already starting to fill at an alarming rate!");

                    oper(system, "./movefail", "Try to move or twtich", "./relaxmilker", "Relax and wait for your next milking");
                }, //function close
                "movefail": function(character, system, action) {
                    transer();
                    parer("No matter what you seem to do your cock shaped body refuses to move. You cant tell if it was the pills or the constant milking but you are poweless to do anything but throb just like a completely normal cock! Any chances of alerting host that you are down there are gone now. As far as the world is concerned you are just a simple cock, all be it one with a cum overproduction problem!");
                    oper(system, "./relaxmilker", "Wait for your next milking");
                }, //function close
                "relaxmilker": function(character, system, action) {
                    transer();
                    parer("You can feel the cum building at such a rapid rate it is no surprise you have been needing to be milked every other thing! host also seems to have had a rough time of it as they seem to have to keep forcing him to drink more liquids to prevent dehydration. q1Stupid pills.... At least I get one of these things to take home with me.q1 He says clearly referancing the machine! Just as you are about to slide back into your sheath he slides the milker back down around you!");
                    parer("He just leaves it there for now, it lets you get accustom to the tight feel of the slick lubed rubber inside. There is a noise and you suddenly feel a light suction all over your body! You are pulled out of his sheath as the milker grips onto you tightly, to say it feels pleasent is an understatement! It's not fully erotic but it feels REALLY good!");
                    oper(system, "./milker2", "Get milked!");
                }, //function close
                "milker2": function(character, system, action) {
                    transer();
                    parer("host leaves it just stuck to your for a good hour just enjoying the steady suction! For you the feeling is far more intense! Its like being grabbed and pulled on but applied to every inch of your body! Finally host changes the setting just as you are sure the suction and pressure in your balls is about to drive you mad! The milking relaxes a bit only to suddenly squeeze you from the sides! Something inside the latex surrounding you tightens around your base and the slides up to your tip, like a tight elastic band inside the milker! ");
                    oper(system, "./holdon", "Try to hold onto your sanity", "./allgone", "MILK ME");
                }, //function close
                "holdon": function(character, system, action) {
                    transer();
                    parer("You try to hold onto any sense of thought or reason as you are quickly brought to orgasm! The cum literally being sucked out of your by the mercilous machine! Suck... suck... suck... It just never stops! Just when you think it can't coax another orgasm out of you hosts balls prove otherwise as even more cum is sent up through your body! Suck... suck... suck.... It's just sooo goood!");
                    oper(system, "./milkingtoforgotten", "....... Cum again... and again");
                }, //function close
                "allgone": function(character, system, action) {
                    transer();
                    parer("You completely give into the merciless milker! All that matters is ryhem of it's sucking and the pulsing of the cum up through your! They almost feel in sync, each suck perfectly following a spurt of cum! You can only imagine how host must be feeling during this, you can sort of feel yourself being moved around by his squirming. Your sense of time and orgasms seem to melt together. It all becomes a weird sort of sensation, as if time didn't move unless you were actively pumping out host's cum!");
                    oper(system, "./milkingtoforgotten", "...... Cum again... and again");
                }, //function close
                "milkingtoforgotten": function(character, system, action) {
                    transer();
                    character.sandbox.forgottenstealth = true;
                    system.doLink("masturbate/prtimeskipevent");
                }, //function close
                "masturbatestealthend": function(character, system, action) {
                    transer();
                    switch (character.sandbox.host.host) {
                        case "keagen":

                            parer("ERRORRRRR");
                            oper(system, "./stealthendcum", "Enjoy the sensations!");

                            break;
                        case "bret":


                            parer("host gets out something you haven't seen before and sets it out on top of a pillow on his bed then another pillow on top. q1Real thing is way better but I just gotta try this out.q1 He says as he gets on the bed and points you at what looks like a jelly tube or long donut, a masturbation sleeve! Sandwiched between two pillows it makes a perfect humping target! One you become VERY friendly with as he shove you into it! The tight tube around your sensitive long body feels like heaven! It still is shocking how good this feels, obviously it would feel better BEING the cock. But this is like your whole universe is melting away into pure pleasure.");
                            oper(system, "./stealthendcum", "Enjoy the sensations!");

                            break;
                        default:
                        case "mark":
                            parer(" You give a strong wiggle at just the right moment for host to look down due to the feeling. q1Weird... Oh whats that.... I don't remember having this. A cock ring? Huh....q1 he says picking it up. A moment later he grabs you and slides it down your lenght sending strange tingles all through your body! You harden up almost instantly, the ring feeling so perfectly tight around your base.");
                            parer("host  hardly hesitates to start rubbing you up and down! His firm grip around your sensitive long body feels like heaven! It still is shocking how good this feels, obviously it would feel better BEING the cock. But this is like your whole universe is melting away into pure pleasure.");
                            oper(system, "./stealthendcum", "Enjoy the sensations!");

                            break;
                    }





                }, //function close

                "stealthendcum": function(character, system, action) {
                    transer();
                    parer("With the tingles of pleasure from the ring and the tightness sliding up and down you your body host's balls are already starting to clench. You can feel his urethra within you fill up and pressurize behind the ring for just a moment before letting out a stronger surge of cum than ever! The ring and runes surge with power that you can FEEL! But your mind is awash with pleasure you can hardly endure, for several moments you really are just a cock. No thoughts, no emotions other than pure orgasm overiding everything that you are. Even as the last few spurts leave your mouth you are just a cock....");
                    oper(system, "./giveinm", "Just.... a... cock", "./ttstealthjumper", "Desperately try to focus on those runes!");
                }, //function close
                "ttstealthjumper": function(character, system, action) {
                    character.sandbox.ringcheck = true;


                    system.doLink("./ttstealth");
                }, //function close




                "explainh": function(character, system, action) {
                    transer();



                    if (character.sandbox.host.host == "keagen") {
                        parer("Keagen mostly just apologies for this happening, but also does his best to explain how this is possible. Apparently arcane items can change all sorts of physical characteristics, even gender or species are mutable. <p>He looks at the clock and lets out a yelp \"I hate to say this... but I really need to get to class! I mean I guess you are use to this by now.!\" You sigh and let him cover you back up, not that you have much choice in the matter.!");
                        character.sandbox.ringcheck = true;
                    } else {



                        parer("<p>All you can do is sigh and explain to him everything you know about receiving the artifact and what happened with it the other day. However h cuts you off in the middle \"I hate to say this... but I really to get to work!\" You sigh and let him cover you back up, not that you have much choice in the matter.!</p>");
                    };
                    if (character.sandbox.stealth) {
                        character.sandbox.stealth = false;
                        system.setQuality("sus", 0);
                        system.setQuality("harmony", 50);
                        system.setQuality("ttcost", 0);
                        system.animateQuality("essence", character.qualities.essence - 50, { from: character.qualities.essence, to: character.qualities.essence - 50 });

                    }
                    oper(system, "work/" + character.sandbox.host.sender, "Get comfortable and pretend to be an ordinary penis.... again");

                },
                "explain": function(character, system, action) {
                    transer();
                    if (character.sandbox.host.host == "keagen") {
                        parer("Keagen mostly just apologies for this happening, but also does his best to explain how this is possible. Apparently arcane items can change all sorts of physical characteristics, even gender or species are mutable. <p>However a new uncomfortable sensation is building somewhere within you as he winces and interrupts \"I hate to say this... but I really need to use the bathroom!\" You start to say yes fine... but then realize just what this means for you being his cock!");
                    } else {



                        parer("<p>All you can do is sigh and explain to him everything you know about receiving the artifact and what happened with it yesterday. However a new uncomfortable sensation is building somewhere within you as he winces and interrupts \"I hate to say this... but I really need to use the bathroom!\" You start to say yes fine... but then realize just what this means for you being his cock!</p>");
                    };

                    oper(system, "./hold", "Tell him to try and hold it in! ");
                },
                "holdh": function(character, system, action) {
                    transer();
                    parer("<p>He nods and starts to pace around the room while you and he continue to talk in his head. It is incredibly strange bouncing up and down slightly as he walks. Still that pressure within or possibly behind you continues to build. Trying to hold in piss when you really have to go is unpleasant, but its nothing compared to being a cock trying to hold it in! Strange tingling sensations spreads from a point below you, continuing upward in a line under your belly, chest, and neck! The sensation is unmistakable but amplified due to him holding it in, host's urethra is a part of you and extends all the way to your throat!</p><p>\"I am sorry I... I can't hold it much longer!\" he whimpers and searches for your bathroom!\
                                              </p>");
                    oper(system, "mergebathroomh", "Tell him you have been through this a ton of times", "translate/nope", "Wait for this to be over.(PREVENTS ALL further watersports scenes... again maybe)");
                }, //function close
                "hold": function(character, system, action) {
                        transer();
                        parer("<p>He nods and starts to pace around the room while you and he continue to talk. It is incredibly strange bouncing up and down slightly as he walks. Still that pressure within or possibly behind you continues to build. Trying to hold in piss when you really have to go is unpleasant, but its nothing compared to being a cock trying to hold it in! Strange tingling sensations spreads from a point below you, continuing upward in a line under your belly, chest, and neck! The sensation is unmistakable, host's urethra is a part of you and extends all the way to your throat!</p><p>\"I am sorry I... I can't hold it much longer!\" he whimpers and searches for your bathroom!\
                                              </p>");
                        oper(system, "mergebathroom", "Tell him where the bathroom is", "translate/nope", "Wait for this to be over.(PREVENTS ALL further watersports scenes)");
                    } //function close
            }
        }
    ),
    mergebathroomh: new undum.SimpleSituation(
        "", {
            actions: {
                //All three hosts empty into here!
                "enjoy": function(character, system, action) {
                    transer();
                    parer("<p>Surprisingly it really isn't that bad. You always hear how disgusting drinking piss is, sure its unpleasant but its not horrible. Once host sees that you are aiming just fine he lets go of your head and just steadies your body. The flow is really chaotic and a mess\
                                              as you try to deal with the sensation of your mouth being used as a firehose! You manage to relax a bit and just let the flow take a natural path though you, almost pleasureably. It flows the best when you really concentrate on the stream, of course this means you can taste it even more clearly but it doesn't bother you much.</p>");
                    oper(system, "realization/entry", "Finish and as he flicks you to get that last drop");
                    system.setQuality("harmony", character.qualities.harmony + 1);
                }, //function close
                "accept": function(character, system, action) {
                    transer();
                    parer("<p>It feels like your cheeks inflate with piss as it flows out from what was your throat, really without much choice you feel your slit of a mouth forced open\
                                              letting the flow do as it pleases. Seems being turned into a cock didn't lessen your taste buds\
                                              unfortunately. If it didn't already resemble throwing up you might have instinctively tried to. He finishes up and swings up and down violently to free any remaining drops. You do your best to get the taste out of your mouth but it seems intent to linger.</p>");

                    oper(system, "realization/entry", "Try to ignore the taste for now");
                }, //function close
                "refuse": function(character, system, action) {
                    transer();
                    parer("<p>You try to wiggle around to free yourself from his grip, desperetly trying to hold in his piss even if it only delays the inevitable by a few seconds! He gives you a shake just keeps you pointed at the toilet as any indication of resistance is cut off by a mouthful of his piss. The taste is unbearable and you have no way to even hold back the flow! You are just a simple cock doing your duty. It seems host noticed something weird and pushed down hard! The extra surge of piss strikes you as the urine pressure builds up and stretches the massive urethra inside your body, it shoots forth from your mouth like a firehose. q1Geeze I have never been this piss shy in the morning, I need to drink more water...q1   \he says with no idea the torment he is putting your through. Once he is done he runs a finger up your belly compressing his urethra to get the last few drops to pour into your mouth.\
                                                                                                              </p>");

                    system.setQuality("harmony", character.qualities.harmony - 1);
                    oper(system, "realization/entry", "Shudder a bit as he finishes up");
                }, //function close
                "r1": function(character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "");
                    } //function close
            } //actions close
        } //options close
    ),
    realization: new undum.SimpleSituation(
        "", {
            actions: {
                "entry": function(character, system, action) {
                    transer();
                    parer("The weight of your situation hits you all at once after host leaves the bathroom to get dressed. There isn't even a chance to try and get his attention again as you start to feel his sheath pulling you into your new home. Your body softens as all but your head slips down into host's warm moist sheath just as a pair of pants block your vision. You are doubly trapped now within a tight sheath and pants. Even though being soft means you can actually move around easier, the pants and sheath fix that by keeping you squeezed tight and still! ");

                    oper(system, "./home", "Try to get use to your new home");

                }, //function close
                "home": function(character, system, action) {
                    transer();
                    parer("You are helplessly trapped in host's sheath unable to see anything. The thick musky scent of it is overwhelming at first and honestly only gets a little bit easier to deal with after an hour or so. Eventually you find that not all the light is blocked, with enough wiggling you can look out his sheath to see light through the seams of his zipper. <p> However your sense of hearing is hardly affected... for the most part you can still hear just about everything that happens around host.");
                    parer("Stuck in host's sheath you have a lot of time to just think about things, and plan what you want to do next. Maybe being a cock isn't so bad.... Then again if you don't try to escape soon, who knows what will happen!");

                    oper(system, "./enjoy", "Start to find yourself enjoying this", "./resist", "Stay determined to reverse this!");
                }, //function close
                "enjoy": function(character, system, action) {
                    transer();
                    parer("The sheath around you squeezes comfortably, almost possessively. You actually feel rather good inside here, its relaxing and you don't have to worry about anything. It might not be that bad to be hosts cock, a little vacation won't hurt. And who knows, this whole transformation thing might just be temporary! Might as well enjoy it while it lasts. Well maybe not too much, you don't want host to realize you have taken the place of his cock....");
                    oper(system, "./public", "Idly listen to what is happening outside");
                    character.sandbox.enjoyit = true;
                }, //function close

                "resist": function(character, system, action) {
                    transer();
                    parer("There is no way you are going to allow yourself to be stuck as a cock for the rest of your life! The first thing you need to do is get host to realize you are not just his cock! You don't know how long you can hold on to yourself if he keeps treating you as just another part of his body! Struggling and doing everything you can to get his attention will be your top priority! That is... as long as this isn't permanent.... That thought lingers concerningly as you feel host start moving around more.");
                    oper(system, "./public", "Try to listen to what is happening outside");
                }, //function close
                "public": function(character, system, action) {
                    transer();
                    parer("You momentarily hear the door shut meaning he must be outside again. Thankfuly you are all nice and comfy inside his tight sheath where no one can see you, not that anyone would recognize you now! Sounds are all you have to go on as he begins his day. ");



                    system.doLink("work/" + character.sandbox.host.sender);
                }, //function close
                "r1": function(character, system, action) {
                        transer();
                        parer("TADA");
                        oper(system, "", "");
                    } //function close
            } //actions close
        } //options close
    ),
    mergebathroom: new undum.SimpleSituation(
        "", {
            heading: "Your Bathroom",
            enter: function(character, system, action) {
                if (character.sandbox.host.host != "bret") {
                    parer("<p>" + character.sandbox.host.host + " rushes down the hall as you try to give him directions. It's rather disconcerting bouncing up and down with each step, not to mention how everything looks bigger due to your new size and lower vantage point. </p><p>He wastes no time and puts up the lid of the toilet and then rather roughly grabs you. You let out a quick complaint as he points your body right into the toilet. You look up at him pleadingly but even you know there is little either of you can do about this! \"Sorry about this... But I am pretty sure its going to come out your mouth\" he mentions. You knew that already but it hadn't sunk in that also meant your tongue would be right in the way and you would be forced to taste every drop. </p><p>He reaches farther up on your body and holds your head still forcing it to face into the toilet. There is an overwhelming sensation of movement that almost feels like a rumbling, it travels up your body slightly expanding that urethra inside you and a torrent of piss fills your mouth!</p>");
                } else {
                    parer("<p>host rushes down the hall as you try to give him directions. It's rather disconcerting  bouncing up and down with each step, not to mention how everything looks bigger due to your new size and lower vantage point.</p><p>\"Ugh.. hate these types of toilet\" He says and reaches up onto the water tank with his front legs and awkwardly reaches down between his legs to hold you pointing into the toilet \"Sorry about this... But I am pretty sure its going to come out your mouth\" he mentions. You knew that already but it hadn't sunk in that also meant your tongue would be right in the way and you would be forced to taste every drop. </p><p> There is an overwhelming sensation of movement that almost feels like a rumbling, it travels up your body slightly expanding that urethra inside you and a torrent of piss fills your mouth!</p>");
                };
                oper(system, "./enjoy", "Find you actually like it", "./accept", "Reluctantly accept your role", "./refuse", "Refuse to cooperate");
            }, //function/enter close
            actions: {
                "enjoy": function(character, system, action) {
                    transer();
                    parer("<p>Surprisingly it really isn't that bad. You always hear how disgusting drinking piss is, sure its unpleasant but its not horrible. Once host sees that you are aiming just fine he lets go of your head and just steadies your body. The flow is really chaotic and a mess\
                                              coming out of a mouth rather than a piss slit. Thinking about it you close your mouth just a bit to maintain its pressure on the way out and even shape it\
                                              slightly with your tongue. Of course this means you can taste it even more clearly but it doesn't bother you much.\
                                                                                                              </p>");
                    oper(system, "translate", "Finish and lick your lips to get that last drop");
                    system.setQuality("harmony", character.qualities.harmony + 1);
                }, //function close
                "accept": function(character, system, action) {
                    transer();
                    parer("<p>Your cheeks inflate with piss as it flows out from your throat, really without much choice you open your mouth\
                                              letting the flow do as it pleases trying to keep your tongue out of the way as much as possible. Seems being turned into a cock didn't lessen your taste buds\
                                              unfortunately. If it didn't already resemble throwing up you might have instinctively tried to. He finishes up and swings up and down violently to free any remaining drops.\
                                                                                                              You do your best to get the taste out of your mouth but it seems intent to linger.</p>");

                    oper(system, "translate", "Wash your mouth out with some water");
                }, //function close
                "refuse": function(character, system, action) {
                        transer();
                        parer("<p>You shake and wiggle around trying to free yourself from his grip. You beg him not to do this and to hold it in just a while longer!\
                                              He shakes his head and just keeps a hold on you as your complaining is suddenly cut off by a mouthful of his piss. The taste is unbearable and you clamp\
                                              your hands over your mouth trying to halt the flow. A surge of pain strikes you and he both as the urine pressure builds up and stretches the massive\
                                              urethra inside your body. Finally you can take it now more and it breaks free from your mouth like a firehose. \"Come on! Stop that you are making a mess!\"\
                                              \he says with frustration then holds your arms to your sides and grabs your head making sure you don't turn it. Once he is done he runs a finger up your belly compressing\
                                              his urethra to get the last few drops to pour into your mouth.\
                                                                                                              </p>");
                        system.setQuality("harmony", character.qualities.harmony - 1);
                        oper(system, "translate", "Cough a few time trying clear your throat");
                    } //function close
            } //actions close
        } //options close
    ),
    translate: new undum.SimpleSituation(
        "", {
            heading: "Your Livingroom",
            enter: function(character, system, action) {
                if (character.sandbox.host.host != "bret") {

                    ///////////// Not bret
                    if (character.sandbox.host.host == "keagen") {

                        parer("After dealing with the bathroom issues host sits down in your living room and sighs \"This is really\
                                                          going to take some getting use to.\" he says which you quickly remind him just who is going to have a 'hard' time adjusting. That actually\
                                                          gives him a laugh. </p>\
                                                          <p>\"There has to be some reason that artifact did this, if we can figure out its intended function we may have a chance at reversing it..\"\
                                                          He agrees and you both are soon back in your bedroom looking over the artifact and translation paper. While reading over it he idly starts rubbing your body up and down, not really masturbating you but\
                                                          it feels REALLY good and keeps you hard");
                    } else {
                        parer("<p>After dealing with the bathroom issues host sits down in your living room and sighs \"This is really\
                                                          going to take some getting use to.\" he says which you quickly remind him just who is going to have a 'hard' time adjusting. That actually\
                                                          gives him a laugh. </p>\
                                                          <p>\"Maybe there are some clues written on the artifact itself.\" he suggests and you quickly mention the second letter your uncle sent! You tell him where it is and soon he\
                                                          is sitting on your bed looking over the artifact and translation paper. While reading over it he idly starts rubbing your body up and down, not really masturbating you but\
                                                          it feels REALLY good and keeps you hard</p>");
                    }
                    oper(system, "./focus", "Focus on the translations", "./enjoy", "Ask him to keep rubbing you");
                } else {
                    if (character.qualities.ctf <= 40) {
                        /////// bret with minor TF
                        parer("<p>After dealing with the bathroom issues host sits down in your living room and sighs \"This is really\
                                                  going to take some getting use to.\" he says which you quickly remind him just who is going to have a 'hard' time adjusting. That actually\
                                                  gives him a laugh. </p>\
                                                  <p>\"Maybe there are some clues written on the artifact itself.\" he suggests and you quickly mention the second letter your uncle sent! You tell him where it is and soon he\
                                                  is sitting on your bed looking over the artifact and translation paper.</p>");
                        oper(system, "./focus", "Focus on the translations");
                    } else {
                        ///////////bret with major TF
                        parer("<p>After dealing with the bathroom issues Bret sits down in your living room and sighs \"This is really\
                                                  going to take some getting use to.\" he says which you quickly remind him just who is going to have a 'hard' time adjusting. That actually\
                                                  gives him a laugh. </p>\
                                                  <p>\"Maybe there are some clues written on the artifact itself.\" he suggests and you quickly mention the second letter your uncle sent! You tell him where it is and soon he\
                                                  is sitting on your bed looking over the artifact and translation paper.</p><p>\"Sorry about this but taurs really have issues masturbating, so I can't\
                                                  keep helping you stay hard\" he says apologetically, you already feel your body relaxing and softening!</p>");
                        oper(system, "shrinkage", "Beg him to keep you out of his sheath");
                    }; //else close
                }; //else close
            },
            actions: {
                "nope": function(character, system, action) {
                    character.sandbox.ws = false;
                }, //function close
                "focus": function(character, system, action) {
                    transer();
                    if (character.sandbox.host.host == "keagen") {
                        parer("He continues rubbing your body making sure you stay hard.\
                                                           You have to grit your teeth trying to ignore how good it feels so you can stay focused\
                                                          on the task at hand.</p><p>\"Alright... so there is the ring.\
                                                           A stick dude holding it and a guy kneeling in front of him. You said the ring somehow disappeared\
                                                          when you used the dildo?\" he asks and you confirm it also mentioning\
                                                           how it seemed to have merged with you judging from the tingling that day.\
                                                           \"So the paper says something about essence from pleasure,\
                                                            and then mentions essence to form. I know some arcane objects can 'charge' themselves with energy to preform rather profound tasks.\
                                                            ");
                    } else {
                        parer("<p>He continues rubbing your body making sure you stay hard.\
                                                           You have to grit your teeth trying to ignore how good it feels so you can stay focused\
                                                          on the task at hand.</p><p>\"Alright... so there is the ring.\
                                                           A stick dude holding it and a guy kneeling in front of him. You said the ring somehow disappeared\
                                                          when you used the dildo?\" he asks and you confirm it also mentioning\
                                                           how it seemed to have merged with you judging from the tingling that day.\
                                                           \"So the paper says something about essence from pleasure,\
                                                            and then mentions essence to form.\
                                                          Humm and here is the ring again, he wrote manipulates next to it.\
                                                           Maybe the ring can control the changes? Damn these notes are a mess.\" he says thinking out loud.</p><p>\
                                                           </p>");
                    }
                    //system.setQuality("timeofday", character.qualities.timeofday + 1);
                    oper(system, "shrinkage", "Suggest taking a break", "./enjoy", "Ask him to rub you a bit faster");
                }, //function close
                "enjoy": function(character, system, action) {
                    transer();
                    parer("<p>He laughs and puts down the piece of paper. \
                                                              \"Has being turned into a cock started to get to you?\" He asks with a grin\
                                                              gripping your sensitive body and stroking you up and down.\
                                                              Every inch of your body stiffens even more than before, you\
                                                              you can even feel his heartbeat pumping his blood into your veins.\
                                                              </p><p>Masturbating always felt good, but its nothing compared to GETTING masturbated.\
                                                              However you crash back to reality when precum begins leaking into your mouth cutting off any possibility of moaning</p>");
                    oper(system, "./climax", "Be a good cock for " + character.sandbox.currenthostparse.host);
                }, //function close
                "climax": function(character, system, action) {
                    transer();
                    parer("The taste is both salty and sticky, yet it feels natural for it to be coming up your throat.\
                        As he continues to jerk up and down your body the flow of pre grows to the point you can't even contain it in your mouth,\
                       its the only thing preventing you from moaning in pleasure.<p>FInally you start to feel a change, your balls.. or his balls start to tense up\
                       and your body seems to harden as his rubbing speeds up rapidly! That urethra inside you suddenly expands with a surge of cum that torrents into your mouth!\
                       Its impossible to keep your mouth closed as it is forced open by the pressure of his cum shooting into the air from your mouth!");
                    system.animateQuality("essence", character.qualities.essence + 10);
                    oper(system, "./afterglow", "Continue cumming till his balls are finished using you");

                }, //function close
                "afterglow": function(character, system, action) {
                        transer();
                        parer("The flow of cum finally slows till it is just a trickle occasionally filling your mouth. Once you mouth is clear enough you get the chance to gasp and pant in exhaustion\
                          . host is also breathing heavily after that, \"Damn.... that really felt good. I almost don't want you to change back!\" he says suddenly worrying you for a moment\
                          . He gives you a few pats of reassurance. \"Hehe don't worry lets just get back to this.\"he says. <p> For just a moment you feel those blue runic lines cool down slightly\
                          as if they had been heated during the time you were distracted by the orgasm.");
                        oper(system, "shrinkage", "Nod and try not to get distracted again");
                    } //function close
            } //actions close
        } //options close
    ),
    //1 5 9 13
    shrinkage: new undum.SimpleSituation(
        "", {
            enter: function(character, system, action) {
                //system.setQuality("timeofday", character.qualities.timeofday + 1);
                //time of day is now noon
                if (character.qualities.ctf == 80 || (character.sandbox.host.host == "bret" && character.qualities.ctf >= 60)) {
                    system.doLink("./sheath");
                } else {
                    //too big for sheath
                    /// status==1
                    parer("<p>You and host spend some time just chatting about things. Eventually you offer him some food from your limited fridge\
                                      . He offers to feed you something but you find yourself no longer ever feeling hungry, seems you have been restricted to the output aspect of his digestive system.\
                                      </p><p>Later on in the day he takes another failing look at the artifact</p>");
                    if (character.qualities.ctf == 60) {
                        /// can't be bret
                        parer("<p>After a while you start to grow tired of holding yourself outside of his sheath, it has been constantly trying to pull you in all day.\
          you just can't keep it up any longer. Your grip starts slipping. </p>");
                        oper(system, "./sheathvar", "Struggle to stay unsheathed");
                    } else if (character.qualities.ctf == 40) {
                        // bret has same 
                        // Can interact
                        parer("<p>After a while of hanging out of his sheath you let it pull you in a bit, just enough to close around your neck. Its rather warm and comfortable like a tight sleeping bag\
          actually, though a bit sticky after the first hour or so.<p> As the day continues on it becomes clear that you and host will be stuck like this for a while unfortunately.</p>");
                        oper(system, "discussfirst", "Make plans to deal with this arrangement long term");
                    } else if (character.qualities.ctf == 20) {
                        //no sheath at all
                        if (character.sandbox.host.host == "bret") {
                            ///hanging under bret
                            if (character.sandbox.bretdom) {
                                parer("mentions the harness");
                            }
                            parer("After an hour or so of staring hopelessly at the second page and the artifact host just shakes his head and puts the papers down \"This isn't going to get us anywhere and I am tired of carrying you like this.\"\
                                      He says apologetically. He gets up and goes to his pants that are still in the floor and reaches into one of the large cargo pockets pulling out a set of straps\
                                      . \"Normally I use these for some bellyriding fun but they should serve the same purpose here.\" He slips a loop around your neck, then around your arms and waist.\
                                      You can't really tell how it attaches above you but he pulls it tight and your entire body is pulled helplessly tight to his underside!");
                            oper(system, "discussfirst", "Wiggle around and test out the straps");
                        } else {;
                            //too large to leave house keagen and mark
                            parer("After an hour or so you and host give up on the artifact, unfortunately with your current size host can't leave the house without attracting unwanted attention to your condition.\
                                  Even walking tends to be a bit difficult, he has to hold you to his chest to keep your from falling forward.\
                                  When standing still you find that you can keep your hands on the ground to prop yourself up sort of, its awkward but relaxing.\
                                  <p> As the day continues on it becomes clear that you and host will be stuck like this for a while unfortunately.");

                            oper(system, "discussfirst", "Make plans to deal with this arrangement long term");
                        }
                        //system.setQuality("timeofday", character.qualities.timeofday + 1);
                        //time is now afternoon
                    }
                }
            }, //function/enter close 
            actions: {
                "sheathvar": function(character, system, action) {
                    // going in sheath struggling
                    // I have no idea why I made two of these
                    // time is noon still for both
                    transer();
                    parer("No matter what you do it begins dragging you in. host notices your plight \"Sorry, I can't stay hard forever, you will have to stay in my sheath for a while.\
                                              Till we get this fixed its basically your new home.\" he says and heads back to your bedroom. You beg him a few times to do something to stop this\
                                              but his sheath is intent on welcoming you home. \"Don't worry I will keep you safe, " + ((character.sandbox.host.host == "keagen") ? "but I still have college classes to worry about." : "But I still have a job to worry about") +
                        ". I will take every opportunity to work out how to change you back!\"\
                                              he says giving you a pat just before the sheath engulfs you completely, the last thing you see is a pair of pants being zipped up locking you inside a fleshy prison with a zipper for bars.");
                    oper(system, "firstsheath", "Explore your new home");
                }, //function close
                "sheath": function(character, system, action) {
                        // going in sheath with no ability to pull yourself out
                        transer();
                        parer("Your body starts to grow softer and there is a pulling sensation from inside of " + character.sandbox.host.host + "'s sheath. No matter what you do it begins dragging you in. \"Sorry I can't stay hard forever, you will have to stay in my sheath for a while. Till we get this fixed its basically your new home.\" he says and heads back to your bedroom. You beg him a few times to do something to stop this but his sheath is intent on welcoming you home. \"Don't worry I will keep you safe," + ((character.sandbox.host.host == "keagen") ? "but I still have college classes to worry about." : "But I still have a job to worry about") +
                            " I will take every opportunity to work out how to change you back!\" he says giving you a pat just before the sheath engulfs you completely, the last thing you see is a pair of pants being zipped up locking you inside a fleshy prison with a zipper for bars.");
                        oper(system, "firstsheath", "Explore your new home");
                    } //function close

            } //actions close
        } //options close 
    ),
    firstsheath: new undum.SimpleSituation(
        "", {

            //Time IS NOON
            heading: function(character, system) {
                return character.sandbox.curhost + "'s Sheath";
            },
            enter: function(character, system, action) {
                //bret skips 9 goes to 13
                // mark and keagen both here at 9 and 13
                //9 can wiggle around in sheath and even pull themselfs out for an hour or so before getting tired.
                // 13 is trapped with the cock parts of their body holding them in.
                // HE JUST ZIPPED up his pants over you.

                parer("You are helplessly trapped in host's sheath unable to see anything. The thick musky scent of it is overwhelming at first and honestly only gets a little bit easier to deal with after an hour or so. Eventually you find that not all the light is blocked, with enough wiggling you can look out his sheath to see light through the seams of his zipper. <p> However your sense of hearing is hardly affected... for the most part you can still hear just about everything that happens around host.");
                oper(system, "./listen", "Listen for clues to what is happening");
                //if (character.qualities.tfstatus==13||(character.sandbox.host=="bret"&&character.qualities.tfstatus==9)){
                //			oper("./focus","Focus on the translations", "./enjoy","Ask him to keep rubbing you");
                //The air seems to get warmer and warmer in his sheath yet it doesn't bother you much other than feeling uncomfortable.
            }, //function/enter close 
            actions: {

                "listen": function(character, system, action) {
                    transer();
                    parer("host seems to be wandering about your house for a little while, items are being moved. Then you hear a slightly disturbing sound... your front door being opened and closed! You wiggle around and push at his sheath as you yell out to him asking where he is going.<p>\"Shhhh don't worry everything is fine. Just be a good penis and stay quiet in there maybe take a nap. The last thing I need is an erection out in public.\" he says giving you a pat through his pants.");

                    oper(system, "./awake", "Stay awake and aware of events");
                }, //function close
                "awake": function(character, system, action) {
                    transer();
                    parer("Eventually host sits down somewhere and you are suddenly rather squished inside of the sheath. You don't really feel uncomfortable just... squeezed in there tightly. " + ((character.sandbox.host.host == "keagen") ? "The sound of mechanical clinks along with a smooth up and down motion, your best guess is that host is on a bicycle now." : "The loud sound of an engine starts up as host seems to be in a car or truck now"));

                    // system.setQuality("timeofday", character.qualities.timeofday + 1);
                    // time is now afternoon
                    oper(system, "./ask", "Wiggle around and ask where he is going!", "./begood", "Stay silent like good flacid cock");
                }, //function close
                //MAY RETURN TO THIS AS A FUTURE OPTION
                "sleepshift": function(character, system, action) {
                    transer();
                    parer("You drift off to sleep rather easily, the comfort of host's sheath trying to make you feel all warm and happy. If it wasn't as sticky or perverse you might actually look forward to sleeping in there every night. Even the up and down motions of host's foot steps cause you to shift back and forth rhythmically, it feels soothing after a bit.<p>");
                    // system.setQuality("timeofday", character.qualities.timeofday + 1);
                    //time is now afternoon 
                    oper(system, "");
                }, //function close
                "ask": function(character, system, action) {
                    transer();
                    // be noisy in sheath about to head to their house
                    parer("You quickly speak up to ask what is going on only to feel him squeeze his legs together harder\"Hey! Shoosh down there, cocks can't talk. While we are in public you have to pretend to be a penis, alright? \" He says leaving you feeling uncomfortable. Without much choice you stay quiet as host continues though his day. Once or twice he stops to do something, walking around a bit then getting back on the road. Its a bit boring but you didn't want to sleep. Another option does occur to you though.....");
                    system.setQuality("harmony", character.qualities.harmony - 1);



                    oper(system, "./erect", "Arouse him by wiggling and rubbing yourself", "./begood", "Stay still like a good cock should");

                }, //function close
                "begood": function(character, system, action) {
                    transer();
                    // headed to their house in sheath not making any noise
                    system.setQuality("harmony", character.qualities.harmony + 1);
                    parer(((character.sandbox.host.host != "keagen") ? "\
                         The vibration of the car is rather distracting but you and he eventually stops and you hear him go through a door.\
                          " : "Its a rough ride being pushed back and forth by his pedling legs but eventually he stops somewhere and head though a door closing it behind him.") + "<p>\"Ugh... finally home. Alright its safe to talk now. We are at my home now, I  brought the letters and your keys so we can keep working on the artifact from here. Also did some errands and picked up a few things on the way here so its already night. I actually have to do things in public tomorrow, so we really need to get some sleep.\" he says as he removes his pants.");



                    //system.setQuality("timeofday", character.qualities.timeofday + 1);
                    // time is now evening
                    oper(system, "newhome/sleep", "Agree and let him get to sleep", "newhome/masturbate", "Suggest some relaxation before heading to bed");

                }, //function close
                "erect": function(character, system, action) {
                    transer();
                    // WAS noisy.... and then decided to be even more naughty
                    parer("You start to caress your body as best you can, the sheath is rather tight but it still lets you move them over some of your body. The moisture in his sheath helps a ton and it starts to really feel good, even wiggling around so your body rubs against the inside of the sheath feels pleasurable.<p>\"HEY! what... are... Stop that in there! Mmmmm! You have no idea how weird it is feeling your own cock moving around! Omg Stooooop!\" he says as you keep up the distractions. Soon you notice your success as your body hardens and begins to slide out of his sheath.");

                    //system.setQuality("timeofday", character.qualities.timeofday + 1);
                    // time is now evening



                    oper(system, "./stop", "Stop once you are out of his sheath", "./wetspot", "It feels good and you want to keep going.");

                }, //function close
                "stop": function(character, system, action) {
                    transer();
                    // WAS noisy.... and then decided to be even more naughty but not trying to cum.
                    parer("You hear all kinds of grumbling from host as the sheath opens up around you and forces you to push against his pants." + ((character.qualities.ctf == 60 && character.sandbox.host.host != "bret") ? "You are still large enough and have enough strength to pull yourself up and even slip your head past the top of his pants! \"HEY!!! now get back in there damn it! You are lucky we are almost there, someone might have seen you! Gaaa... you are making me so horny right now!\" Being nice you remain quiet though just enjoying some fresh air, even though all you can see is the inside of his shirt now." : "You try to more around some but just can't seem to get past his pants.\
                          Even the inside of his zipper proves impossible to work from the inside.\"Damn it... you are making a huge tent in my pants! Luckily we are almost at my house! Ugh.... I feel so horny now\"") + " he complains. Soon he stops somewhere and quickly goes through a door. \"Alright! Now I will masturbate you! Damn you make such a needy cock!\"");

                    oper(system, "newhome/masturbate", "Finally get some relief");

                }, //function close
                "wetspot": function(character, system, action) {
                    transer();
                    // WAS noisy.... and then decided to be even more naughty
                    parer("Ignoring any of host's complaints you keep rubbing up and down your body as it fully extends from his sheath. You can practically feel him trying to cross his legs in distress \"Ahh..... Damn you pick the worst time to be horny! Gaa.... stop.... We are almost there.... just.. mmmmm.\" he says trying to ignore the self pleasuring cock between his legs. But you keep going as that feeling of absolute bliss seems to be just within reach. Eventually even host can't hold himself back and starts thrusting slightly with his hips. You hear him pant with relief and slows to a stop. Its too late though and soon a massive surge of cum flows up from his balls and through your body!");
                    oper(system, "./wetspotcum", "Make a mess");
                    system.setQuality("harmony", character.qualities.harmony - 1);
                }, //function close
                "wetspotcum": function(character, system, action) {
                        transer();

                        parer("host leans forward and moans deeply as an unwanted orgasm courses through him, however as his cock you get the best of it! The cum quickly fills your mouth and bulges your cheeks as it splatters against the inside of his pants coating you completely. Its like a pump full of this sticky salty cream was attached to your stomach, your entire body twitching stiffly with each pulse of cum. Soon his pants are a mess and you are basking in the wonderful afterglow of orgasm tucked back in your warm extremely sticky sheath. \"Damn.... don't do that.... Ah..... again\" He sighs and gets up opening a door and closing it behind him. \" Lets get just get some sleep, its already late\" he begs sounding even more tired than you feel.");
                        system.animateQuality("essence", character.qualities.essence + 10);
                        oper(system, "newhome/sleep", "Agree and let him sleep in peace");
                    } //function close
            } //actions close
        } //options close
    ),
    discussfirst: new undum.SimpleSituation(
        "", {
            heading: "Sleep",
            enter: function(character, system, action) {

                //if (character.qualities.tfstatus==13||(character.sandbox.host=="bret"&&character.qualities.tfstatus==9)){
                switch (character.sandbox.host.host) {
                    // character.qualities.tfstatus == 5) means they have sheath around neck. Otherwise its type 1 with no sheath
                    case "bret":
                        //either under him in harness or in sheath
                        if (character.qualities.ctf != 40) {
                            //in harness
                            parer("You quickly find that the harness keeps you completely immobile, even your arms have been pulled to your sides rendering you mostly helpless! You try to ask him to if the harness is really nessesary but he only laughs it off \"This will be fine, in fact I rather like you down there! Someone to keep me company on my mail trips, of course we will keep trying to fix this. But till then we will have to get along, I will be nice to you so long as you are not a 'dick' to me.\" he says revealing his newest favorite pun!");
                        } else {
                            parer("You quickly find that the sheath keeps you completely immobile, your arms are stuck at your sides rendering you mostly helpless! It seemed safe going in but its just too tight to get your hands to the sheath around your neck to pull yourself back out. Still it is rather warm and comfortable inside, though getting slightly sticky. host gathers up his clothes and begins to put on his pants \"I rather like you down there! Someone to keep me company on my mail trips, of course we will keep trying to fix this. But till then we will have to get along, I will be nice to you so long as you are not a 'dick' to me.\" he says revealing his newest favorite pun!");

                        }
                        oper(system, "./plan", "Ask what he plans to do next");
                        break;
                    case "keagen":
                        //only for type 1 and 5. 

                    case "mark":
                        if (character.qualities.ctf == 40) {
                            //type5 
                            parer("You quickly find that the sheath keeps you completely immobile, your arms are stuck at your sides rendering you mostly helpless! It seemed safe going in but its just too tight to get your hands to the sheath around your neck to pull yourself back out. Still it is rather warm and comfortable inside, though getting slightly sticky. <p> host gathers up his clothes and begins to put on his pants \"We are going to have to get along with each other if we are to get through this.\"");

                            oper(system, "./plan", "Ask what he plans to do next");
                            break;
                        } else {
                            //type 1
                            parer("host sighs trying to think of what to do. \"We have to do something before tomorrow, we can't be seen like this. Since this happened while we slept it might go away during the same time! Or... it could get worse. I know it isn't ideal but if we are still trapped inside tomorrow I think we should call" + ((character.sandbox.host.host == "keagen") ? "a professional arcanist" : "the hospital") + "and ask for help.\" he says clearly not wanting to do that.");
                            oper(system, "./wait", "Suggest waiting for tomorrow");
                            character.sandbox.headingholder = "Your";
                            break;
                        }
                }

            }, //function/enter close 
            actions: {
                "plan": function(character, system, action) {
                    transer();
                    // system.setQuality("timeofday", character.qualities.timeofday + 1);
                    //time is NOW AFTERNOON
                    // all three here. head sticking out sheath OR bret carrying you in harness
                    parer("host thinks about it for a few moments \"Well I still have dayjob to worry about tomorrow. I should be able to hide you well enough so no one will notice, we will just have to be careful. There are a few things at my house that I need for dayjob tomorrow, so I really can't stay here during the week. Though that would make it harder to work on the artifact.\" he says. You also have commitments at the college tomorrow, but there is little you can do about that. ");

                    oper(system, "./yourhouse", "Ask him to move in temporarily to stay near the artifact", "./hishouse", "Agree with him and have him collect a few of your things");
                }, //function close
                "wait": function(character, system, action) {
                    transer();
                    // system.setQuality("timeofday", character.qualities.timeofday + 1);
                    ////evening
                    parer("host nods and agrees with you. \"At least if it gets worse you will be able to fit in my pants again!\" He says but not helping in the least. Still you and he go about the rest of the day mostly uneventful. Once or twice trying to do some more work with the artifact but it really seems useless. Eventually you and he start to get tired and head for bed.");

                    oper(system, "newhome/masturbate", "Suggest some fun before you and he sleep", "newhome/sleep", "Head to sleep with no fooling around");
                    character.sandbox.headingholder = "Your";
                    character.sandbox.gooutcount = 1; //to assist first day after change detection
                }, //function close

                "yourhouse": function(character, system, action) {
                    //afternoon type 5, bret type 1 and 5
                    transer();
                    parer("He hesitates but after a bit of thinking eventually shakes his head. \"It wouldn't make sense to stay here, we have the notes and can easily take a picture of the artifact. We can always take it to my house and work on it there.\" He says outright disregarding your suggestion. <p> He begins packing up to leave and you convince him to take a few of your belongings too, keys to the house, your wallet, and the letters." + ((character.sandbox.host.host == "bret") ? "\"I think it will be best if we wait till dark to smuggle my new... package to the truck\" He says with a grin." : "\"So.... you wouldn't happen to have a pair of loose sweatpants would you?\" With some reluctance you say yes and soon find yourself trapped inside them trying not to make too much of a bulge."));
                    system.setQuality("harmony", character.qualities.harmony - 1);

                    if ("bret" == character.sandbox.host.host) {
                        oper(system, "./away", "Wait for night");
                    } else {
                        oper(system, "./away", "Stay quiet as he heads home", "./noisy", "Try to talk with him along the way");
                    }
                }, //function close
                "hishouse": function(character, system, action) {
                    //afternoon type 5, bret type 1 and 5
                    transer();
                    parer("He begins packing up to leave and collects the belongings you requested, keys to the house, your wallet, and the letters." + ((character.sandbox.host.host == "bret") ? "\"I think it will be best if we wait till dark to smuggle my new... package to the truck\" He says with a grin." : "\"So.... you wouldn't happen to have a pair of loose sweatpants would you?\" With some reluctance you say yes and soon find yourself trapped inside them trying not to make too much of a bulge."));


                    if ("bret" == character.sandbox.host.host) {
                        oper(system, "./away", "Wait for night");

                    } else {
                        oper(system, "./away", "Stay quiet as he heads home", "./noisy", "Try to talk with him along the way");
                    }
                }, //function close
                "away": function(character, system, action) {
                    transer();
                    if ("bret" == character.sandbox.host.host) {
                        //bret leaving at night with you under him type 1 and 5
                        parer("host fiddles around your house for the remaining hours till it gets dark. The entire time he leaves you trapped by" + ((character.qualities.tfstatus <= 40) ? "his sheath" : "the harness") + "Once it's dark enough he hurries to his mail truck in your driveway and searches though a small side compartment in the back.<p>\"Here we go! This is just what we need!\" he says pulling out a large rain pancho and putting it on. It does a decent job hiding you, even if it looks a bit silly on him. ");
                        //   system.setQuality("timeofday", character.qualities.timeofday + 1);
                        // its is now evening
                    } else {
                        //mark or keagen leaving in afternoon with you in sweatpants
                        parer("From your point of view its mostly a matter of guessing what is going on around you, from inside the sweatpants the best you can tell is the general light outside. Soon after leaving your house host sits down causing you to be rather squished between his legs" + ((character.sandbox.host.host == "mark") ? " and then the sound of an engine starting. You get the urge to say something but decide it best to stay quiet till you are sure his is alone. The vibration of the car is rather distracting but you and he eventually make it to his house." : ", you hear a few odd metallic click sounds and then feel movement! It takes a minute or two to realize he is on a bicycle. Not all college students have as good a financial family as you. Its a rough ride being pushed back and forth by his pedling legs but eventually he makes it to his home.") + " <p>\"I will give you a tour of the place in the morning... Right now I think we both deserve some rest.\" He says giving you a rub through the pants.");
                        // system.setQuality("timeofday", character.qualities.timeofday + 1);
                        // time is now evening
                    };


                    oper(system, "newhome/masturbate", "Suggest some fun before you and he sleep", "newhome/sleep", "Head to sleep with no fooling around");
                }, //function close
                "noisy": function(character, system, action) {
                        // mark or keagen leaving in afternoon with you in sweatpants, you being impatient

                        transer();
                        //dignitylost behavior --
                        parer("From your point of view its mostly a matter of guessing what is going on around you, from inside the sweatpants the best you can tell is the general light outside. Soon after leaving your house host sits down causing you to be rather squished between his legs" + ((character.sandbox.host.host == "mark") ? " and then the sound of an engine starting <p> You quickly speak up to ask what is going on, but you feel a hand reach down and cover you. \"Hey! Shoosh down there, cocks can't talk. While we are in public you are just a penis, alright? He says leaving you feeling uncomfortable. Eventually he makes it home. " :
                            ", you hear a few odd metallic click sounds and then feel movement! <p> You quickly speak up to ask what is going on only to feel him squeeze his legs together harder\"Hey! Shoosh down there, cocks can't talk. While we are in public you have to pretend to be a penis, alright? He says leaving you feeling uncomfortable. You soon realize he is on a bicycle and eventually makes it to his house. ") + " <p>\"I will give you a tour of the place in the morning... Right now I think we both deserve some rest.\" He says giving you a rub through the pants.");
                        //  system.setQuality("timeofday", character.qualities.timeofday + 1);
                        //time is now evening
                        oper(system, "newhome/masturbate", "Suggest some fun before you and he sleep", "newhome/sleep", "Head to sleep with no fooling around");
                    } //function close
            } //actions close
        } //options close
    ),
    newhome: new undum.SimpleSituation(
        "", {

            heading: function(character, system) {
                return;
            },
            enter: function(character, system, action) {
                parer("<h1>" + (character.sandbox.curhost + ((character.sandbox.headingholder == "Your") ? "Your Bedroom" : "'s Bedroom")) + "</h1>");
                console.log("curhost test " + character.sandbox.curhost);
                runefocus = false;
                //all three type 5   


            }, //function/enter close 
            actions: {

                "masturbate": function(character, system, action) {
                    //mark and keagen. soo.... newhome and the had to stay home.
                    transer();
                    parer("host just shakes his head, giving you a playful rub. \"After everything that has a happened you still want to play some more? Are you sure you are not actually enjoying being attached to my groin?\" he asks with a knowing grin as he settles into bed. " +
                        ((character.qualities.ctf == 20) ? "You try to come up with a reasonable excuse, something along the lines of how rare a situation like this is." : "You look up at him from his sheath and give a helpless wiggle, he reaches down and gives his sheath a few strokes till you are finally released from it's tight grasp.") +
                        "<p>host breathes deeply rubbing up and down your chest sending delightful sensations through your whole body and it isn't long till your mouth starts filling with his pre! But just as his orgasm hits you start to feel those rune lines on your sides heat up.");

                    oper(system, "./cum", "Ignore the runes and enjoy the orgasm", "./focus", "Try to focus on what the runes are doing");
                }, //function close
                "focus": function(character, system, action) {
                    transer();
                    parer("Even with precum flowing up through your body and into your mouth, you hold your focus on those runes realizing this could be important! His fondling of your body just feels soooo good and even begins to thrust up into you rubbing you against the bed delightfully. You can almost feel the runes reacting to the volume of his moans! .... and your own. They seem to almost be charging, by concentrating on them you can feel generally how much they have stored.");
                    oper(system, "./cum", "Lose your concentration once you orgasm");
                    runefocus = true;
                }, //function close
                "cum": function(character, system, action) {
                    transer();
                    parer(((runefocus == false) ? "Fuck the runes, you have an orgasm to enjoy! You even begin to join in caressing yourself reveling in the incredible sensitivity of your partial cock like form" : "") + "<p>Finally the sensations build up and you can feel his.... or your balls pull up slightly and unknown parts within you suddenly fill and expand with his creamy thick seed! With eyes crossed from the overload of senses a torrent of hot cum surges into your maw, it causes your cheeks to expand adorably before forcing your mouth open around the fountain of cum!\
                          " + ((character.qualities.ctf > 40) ? "" : "With your size added to his cock and balls the flow jets high enough to splatter over the ceiling!"));
                    system.animateQuality("essence", character.qualities.essence + 10);
                    oper(system, "./sleep1", ((character.qualities.ctf <= 40) ? "Continue to coat the room until the flow ends" : "Continue to spray cum from your mouth until the flow ends"));
                }, //function close
                "sleep1": function(character, system, action) {
                    transer();
                    parer("The torrent of cum flowing up your throat begins to slow and you are left gasping in exhaustion. host is also breathing hard but laughs a bit \"That was.... Amazing.... and a mess. I am starting to hope we can't change you back.\" he says leaving you a bit worried as your cum leaking throat prevents you from responding.");
                    oper(system, "./sleep", ((character.qualities.ctf > 20) ? "Relax and slip back into your sheath" : "Relax and let him get ready for bed"));
                    character.sandbox.nightfun = true;
                }, //function close
                "sleep": function(character, system, action) {
                    //bret 1 and 5, mark and keagen 1 and 5. both at home and at their home. Also orgasm or not orgasmed.
                    // Ok EVERYONE decided to join this path!
                    transer();
                    parer("You and host eventually settle down and find sleep rather welcoming after the crazy day. Just before both of you drift off to sleep host mentions something\"" + ((character.sandbox.host.host != "bret") ? "The changes happened when we slept last time..... They might happen again tonight\"" : "You remember what happened last time we slept, it could get worse if that artifact specializes in 'overnight deliveries'") + "\" he warns. Considering how tired you are there really isn't anything to do about it.");
                    switch (character.qualities.ctf) {
                        case 20:
                            parer("Hugs you close to his chest giving you a few snuggles as you and he drift off to sleep.");
                            break;
                        default:
                            parer("Having a nice warm slick sheath to sleep in proves rather enjoyable. If it didn't double as a personal embarrassingly perverted prison it would be ideal! Still its wonderful tight embrace quickly luls you to sleep as host pulls a blanket over you.");
                    }
                    oper(system, "transformation", "Drift of to sleep wondering what changes morning will bring");
                }, //function close
                "intomorningfinal": function(character, system, action) {
                        transer();

                        switch (character.qualities.essence) {



                        }

                        /* parer("CURRENT END OF CONTENT <p>. Even longer intro.... But now all possibilities lead to this point which means the Day Loop will start from here.\
                         Anything past this point can be reached by any of the paths eventually. This includes unmerging with the current NPC and merging with a different one. \
                         I admit with the extent of content in the intro its troublesome to restart it over and over just to see all the different <a href='places'> possibilities</a> but I hope it was still enjoyable.");
                         system.setQuality("timeofday", 1);
                         wtf=true;
                         */
                    } //function close
            } //actions close
        } //options close
    ),
    //        /////////////////////////////////////////////////////////////////////
    //                     NPCs                                      //
    /////////////////////////////////////////////////////////////////////
    mark: new undum.SimpleSituation("", {
        heading: '<table class=stickish border="1" style="width:100%"><tr>\
                                              <td><a href=./desc class=stickish>Mark</a></td>\
                                              </tr>',
        //tags: ["place"],
        displayOrder: 5,
        enter: function(character, system, from) {
            gfrom = from;
            parer("Mark is an vulpine and decent friend you have known for a long time. Always willing to offer you a hand when you have\
                  needed it. Often he has made slight passes at you jokingly, you are certain he is bi.");
        },
        actions: {
            "desc": "<p>Mark is a vulpine and decent friend you have known for a long time. Always willing to offer you a hand when you have\
                  needed it. Often he has made slight passes at you jokingly, you are certain he is bi.</p>",
            "talkto": function(character, system, action) {
                transer();
                if (character.qualities.day == 0) {
                    parer("<p>He waves you over and strikes up a conversation. You remember the letter and decide to\
                                  skip mentioning the artifact for now.</p>");
                    //system.write(backto(gfrom));
                    oper(system, gfrom, "Finish and head back");
                } else if (character.sandbox.marktalkedto) {
                    parer('<p>Oh you are back, any interest in taking my offer yet? From the looks of it that..."heat" isn\'t\
                                  going away by itself" he says with a smirk</p>\
                                  <p>\
                                                  <table class=transient border="1" style="width:100%"><tr>\
                                                  <td><a href=./decline class=transient> assure him you will be fine </a></td>\
                                                  <td><a href=./submit class=transient> Give in and accept his help </a></td>\
                                                  </tr></p>');
                } else if (character.qualities.day == 1) {
                    parer('<p>"Hey there ' + character.sandbox.fname + ' How.."</p><p>\
                                                  he starts to say but gets a concerned look on his face. "Err... are you doing alright? \
                                                  " he asks apparently picking up on the distress you are having.</p>\
                                                  <p class=once><table class=transient border="1" style="width:100%"><tr><td><a href=./seduce class=transient> Explain the problem truthfully </a>\
                                                  </td><td><a href=./lie class=transient> Blame an accidental aphrodisiac </a></td>\
                                                  <td><a href=./avoid class=transient> Tell him its nothing </a></td></tr></p>\
                                                  <p></p>');
                }

                /*STRUCTURE
                 Seduce
                 *submit
                 *decline
                 Lie
                 submit
                 decline
                 avoid	 
                 
                 */
                //system.write (backto(gfrom));
                //  system.setQuality("skill", character.qualities.skill+1);
            },
            "seduce": function(character, system, action) {
                transer();
                parer('<p>You tell him that you received something weird in the mail and you\
                                                  really can\'t talk about it much. Though you do mention it is causing you to be horny as hell!\
                                                  and its driving you crazy</p><p> He seems concerned but interested "Humm, anything I can do to help? You look on the verge of jumping\
                                                  someone\s tail!" He says with a snicker</p>\
                                                  <p class=once><table class=transient border="1" style="width:100%"><tr><td><a href=mark/submit class=transient> Accept his offer </a>\
                                  </td><td><a href=./decline class=transient> Decline his offer </a></td>\
                                  </tr></p>');
                character.sandbox.markknows = true;
            },
            "lie": function(character, system, action) {
                transer();
                parer('<p>You tell him that you might have accidentally ingested some weird\
                                                              aphrodisiac and its driving you crazy. He can\'t help but laugh at your plight more than willing\
                                                              to give you some friendly teasing.</p> <p> "All hot under the collar and no way to relieve yourself? Whatever it is must be damn strong\
                                                              you look needier than a vixen in heat!" He laughs giving you a grin</p>\
                                                              <p>"So... you coming to me for some.... help?" he asks giving a suggestive flick of his tail</p>\
                                                              <p class=transient><table class=transient border="1" style="width:100%"><tr><td><a href=./submit class=transient> Reluctantly accept his offer </a>\
                                              </td><td><a href=./decline class=transient> Turn down his offer </a></td>\
                                              </tr></p>\
                                          ');
                character.sandbox.markknows = false;
            },
            "submit": function(character, system, action) {
                transer();
                parer("You give him a nod and tell him you really need something to make this feeling go away\
                                              and any 'help' he could provide would be really nice!</p><p>\"Hehe alright then. Shall we head to your place or mine?\
                                              </p>");
                oper(system, "firstmerge", "Tell him to come to yours", "./his", "Offer to go to his");
                character.sandbox.host = character.sandbox.mark;
                character.host = undum.game.mark2;
                character.sandbox.currenthostparse = character.sandbox.markparse;
            },

            "his": function(character, system, action) {
                transer();
                parer("You get the directions for his house and agree to meet him there in an hour or so. With the desperation and overwhelming sensations you can hardly just wait patiently! You have to stop yourself twice from starting to rub your ass in public! Looking at the clock you still have half an hour before Mark is expecting you. A quicky in a bathroom couldn't hurt. ");
                oper(system, "./mistake", "Find some temporary relief");


            }, //function close
            "mistake": function(character, system, action) {
                transer();
                parer("It doesn't take long at least... your hadly have to rub your ass a bit and stroke your cock before an unfulfilling orgasm hits you. It feels... wrong... empty... it just isn't enough! Still it takes the wind out of you and leaves you panting from it. You feel the runes grow warm from it though, they almost hurt..... You quickly get out of the restroom and hope no one heard you moaning in there");

                system.animateQuality("essence", character.qualities.essence + 80, { from: 0, to: 1 });

                oper(system, "firstmergehidden/entry", "Head for Marks house");
            }, //function close
            "decline": function(character, system, action) {
                transer();
                parer("<p>You explain that you really don't want to deal with it right now and are just going to hope\
                                              it goes away on its own. He seems disappointed but nods</p><p>\"Well maybe someday I will find a way under your tail.\" he says with a laugh\
                                              . The conversation shifts to other topics from there but that nagging need just doesn't go away.</p>");
                oper(system, gfrom, "Finish up and head back");
                //   system.setQuality("timeofday", character.qualities.timeofday + 1);
                character.sandbox.marktalkedto = true;
            },
            "avoid": function(character, system, action) {
                parer("<p>You pass it off as nothing and try to change the subject. He seems suspicious but accepts it as\
              your private business and doesn't pry further</p>");
                oper(system, gfrom, "Finish up and head back");
            }
        },
        exit: function(character, system, to) {

            oper(system, gfrom, "Finish up and head back");
        }
    }),
    bret: new undum.SimpleSituation("", {
        heading: '<table class=stickish border="1" style="width:100%"><tr>\
                              <td><a href=./desc class=stickish>Bret</a></td>\
                              </tr>',
        //tags: ["place"],
        displayOrder: 5,
        enter: function(character, system, from) {
            gfrom = from;
            parer("This wolftaur works as a postman, you have seen him around once or twice before. He is REALLY good looking, even straight guys would say so.\
                                       He also was the one that brought you the package that contained the artifact. You still have his number written on a card in your pocket. He did offer to\
                                       'help' you with any package problems. Though you might be feeling it for a few days if he ends up on top.");

        },
        actions: {
            "desc": "<p>This wolftaur works as a postman, you have seen him around once or twice before. He is REALLY good looking, even a straight guys would say so.\
                                       He also was the one that brought you the package that contained the artifact. You still have his number written on a card in your pocket. He did offer to\
                                       'help' you with any package problems. Though you might be feeling it for a few days if he ends up on top.</p>",
            "talkto": function(character, system, action) {

                if (character.qualities.day == 0) {
                    transer();
                    parer("You approach the front desk of the post office and see Bret checking a list of items and confirming them with the receptionist. The receptionist nods about something\
                                      and heads into the back.</p><p>Walking up to bret he gives you smile \"She should be right back to help you soon.\" he says and then looks back at you for a moment\
                                      \"Wait... You are the guy with that crazy heavy box.... You look different with more clothes on\" he says with a chuckle.");
                    oper(system, "./smalltalk", "Strike up a conversation");
                } else if (character.sandbox.brettalkedto) {
                    //DECLINED offer once already but are back.
                    parer("Bret looks up from what he was doing and gets a big grin seeing you again. \"Anything I can do for you? Maybe willing to take me up on that offer?\"\
                                          he asks, his tail wagging behind his taur end giving away his hopeful excitement");
                    oper(system, "./flirtfin", "Blush and admit you might be interested", gfrom, "Decline and head back out");

                } else {
                    //day 1 and not talkedtoo yet
                    parer("You approach the front desk of the post office and see bret checking a list of items and confirming them with the receptionist. Waiting for a break in\
                                          their conversation you can't help but wince as your ass clenches needily. The receptionist nods about something\
                                          and heads into the back.</p><p>Walking up to Bret he gives you smile \"She should be right back to help you soon.\" he says and then squints at you\
                                          \"Wait... You are the guy with that crazy heavy box.... You look different with more clothes on\" he says with a chuckle.");
                    oper(system, "./smalltalk", "Strike up a conversation", "./flirt", "Apologize for that morning but in a flirty way");

                }
            },
            //system.write (backto(gfrom));
            //  system.setQuality("skill", character.qualities.skill+1);
            "flirt": function(character, system, action) {
                transer();
                parer("You embarrassingly apologize for that mornings unintended erection but mention that it was possibly because of him it didn't go away.\
                                  Its a bit forced but the best you can do without getting on your knees and begging.</p><p>\
                                  Thankfully it gets a hearty laugh out of him.\"Hah, I may need to deliver mail to your door more often.\
                                  You know I might have some problems with my own.. package that could really use your help.\" he says with a predatory grin just as the lady returns.");
                oper(system, "./flirtfin", "Offer him help with his 'package'", "./smalltalk", "Tell him you will keep that in mind but maybe later.");

            },
            "flirtfin": function(character, system, action) {
                transer();
                parer("\"Just flip that red flag on the side of your mailbox\
                                  when it's empty. I will make sure to save your stop for the last in case it turns out to need my... express delivery.\" he says clearly turning to the side\
                                  displaying the bulge between his rear legs. Each word almost feels like it needs bad porno music behind it, meanwhile the receptionist just rolls her eyes\
                                  apparently having seen this before");
                parer("q1That is... unless you want to make this an overnight delivery at my place, really give it the attention it deserves!q1");
                oper(system, "firstmerge", "Tell him you will return home and flip that flag", "./his", "Take the offer of overnight delivery at his place");
                character.sandbox.brettalkedto = true;
                character.sandbox.host = character.sandbox.bret;
                character.host = undum.game.bret2;
                character.sandbox.currenthostparse = character.sandbox.bretparse;


            },
            "his": function(character, system, action) {
                transer();
                parer("You get the directions for his house and agree to meet him there after his shift. With the desperation and overwhelming sensations you can hardly just wait patiently! You have to stop yourself twice from starting to rub your ass in public! Looking at the clock you still have half an hour before Bret gets out of work. A quicky in a bathroom couldn't hurt. ");
                oper(system, "./mistake", "Find some temporary relief");


            }, //function close
            "mistake": function(character, system, action) {
                transer();
                parer("It doesn't take long at least... your hadly have to rub your ass a bit and stroke your cock before an unfulfilling orgasm hits you. It feels... wrong... empty... it just isn't enough! Still it takes the wind out of you and leaves you panting from it. You feel the runes grow warm from it though, they almost hurt..... You quickly get out of the restroom and hope no one heard you moaning in there");

                system.animateQuality("essence", character.qualities.essence + 80, { from: 0, to: 1 });

                oper(system, "brethosthidden/home", "Head to Bret's house");
            }, //function close
            "smalltalk": function(character, system, action) {
                transer();
                parer("You and he talk for a bit longer but its clear that he needs to get back to work. As you are heading back out he gives you a parting grin\
                                   \"We normally can't let anyone in the mail truck. If you ever need a nice hard.. 'ride' give me a hollar.\
                           I might be able to 'stretch' the rules a bit\" he says as you leave");
                character.sandbox.brettalkedto = true;
                oper(system, gfrom, "Finish up and head back");
            }
        }
    }),
    keagen: new undum.SimpleSituation("", {
        heading: '<table class=stickish border="1" style="width:100%"><tr>\
                                      <td><a href=./desc class=stickish>Keagen</a></td>\
                                      </tr>',
        //tags: ["place"],
        displayOrder: 5,
        enter: function(character, system, from) {
            gfrom = from;
            parer("Keagen is a kangaroo that you happen to know from college, good looking but a bit reckless. His major is some kind of theoretical arcana thing, you have heard its a pretty\
                                   limited field with no real applications. Kind of along the same lines of quantum physics. Sure its prestigious but few and far between practical uses\
                                   other than teaching, research or theoreticals.");
        },
        actions: {
            "desc": "<p>Keagen is a kangaroo that you happen to know from college, good looking but a bit reckless. His major is some kind of theoretical arcana thing, you have heard its a pretty\
                                   limited field with no real applications. Kind of along the same lines of quantum physics. Sure its prestigious but few and far between practical uses\
                                   other than teaching, research or theoreticals.</p>",
            "talkto": function(character, system, action) {

                if (character.qualities.day == 0) {
                    transer();
                    parer("You see keagen off in a secluded area reading a textbook he seems to be waiting for something. You know he is in that weird arcane class, and he might be able to shed some light on\
                                          that letter your uncle sent. But your uncle also said to keep it quiet.... You walk up to him and ask him how things are going.</p><p>\
                                          He smiles \"Oh hey umm... its player right?\" he asks.");
                    oper(system, "./smalltalk", "Nod and ask about his studies");
                } else if (character.sandbox.keagentalkedto) {
                    //DECLINED offer once already but are back.
                    if (character.sandbox.keagenyes) {
                        parer("You find the Kangaroo again and he is still busy with his books. He sees you approach and grins \"Don't worry about me, if this book turns out to be as worthless as it has so far\
                                              I am considering giving it to one of the physics students to do something horrible to it.\"he says only half joking about that.");
                        oper(system, "./achance", "Mention you have a way he could learn firstand", gfrom, "Let him get back to his book and head out");
                    } else {
                        parer("Keagen's eyes light up when he sees you. \"Any chance you might reconsider? You know I would do anything for a\
                                              chance working with a real arcane focus. How about a blowjob every morning?\" asks only half joking\
                                              You can only imagine what it must be like to spend all your time learning about something knowing you might never actually see it for years");
                        oper(system, "./rootime", "Offer to show it to him in an hour or two", gfrom, "Decline again and head back");
                    }

                } else {
                    //day 1 and not talkedtoo yet
                    parer("You see keagen off in a secluded area reading a textbook he seems to be waiting for something. You know he is in that weird arcane class, and he might be able to shed some light on\
                                          that letter your uncle sent! Right now he might be able to help solve BOTH of your issues, that is if you could convince him</p><p>\
                                          He smiles \"Oh hey umm... its player right?\" he asks");
                    oper(system, "./via", "Nod and ask him about his studies");

                }
            },
            //system.write (backto(gfrom));
            //  system.setQuality("skill", character.qualities.skill+1);
            "via": function(character, system, action) {
                transer();
                parer("He sighs and takes the book in front of him and dangles it like a gross napkin\"It would be going much better\
                                               if these damn books spent as much time covering magic as it did safety! I should have gone into the physics class... at least they get to talk about smashing\
                                            stuff together in an accelerator.\" he grumbles at the book.");

                oper(system, "./achance", "Mention you have a way he could learn firsthand", gfrom, "Let him get back to his book and head out");

            },
            "achance": function(character, system, action) {
                transer();
                parer("He seems rather skeptical, but it looks like you could ask for help with taxes and he would still say yes to get away from his book.\
                                  \"Oh really?\" he asks looking at you funny but soon realizes your mean it. \"Wait, your not joking are you?\"</p><p>\
                                  You nod and tell him about the second letter and that a strange object came with it. \"Show me! I have to see this!\"");
                oper(system, "./rootime", "Offer to show it to him in an hour or two", "./shutout", "Say you were just looking for a quick second opinion");
                // character.sandbox.brettalkedto = true;
            },
            "rootime": function(character, system, action) {
                transer();
                parer("He bounces out of his seat, which for a roo is rather impressive, he practically lands on you with a hug! \"DUDE! You have no idea how much this means to me!\
                                  Just so you know it's probably a fake... but its still worth it to find out!\" He hugs tighter making you shiver as his sheath brushes against you through his pants.\
                                           \"OH I need to get my tools from the college, just in case it is the real deal!\"He says finally letting go of you.");
                //oper(system, "keagenhost/home", "Tell him your address and to meet you there");
                oper(system, "keagenhost/home", "Tell him your address and to meet you there", "./his", "Ask for his address so you can meet him there");
                character.sandbox.host = character.sandbox.keagen;
                character.host = undum.game.keagen2;
                character.sandbox.currenthostparse = character.sandbox.keagenparse;
            },


            "his": function(character, system, action) {
                transer();
                parer("You get the directions for his house and agree to meet him there in an hour or so. It doesn't take you any time at all to find the place and Keagen is still collecting his tools.  With the desperation and overwhelming sensations you can hardly just wait patiently! You have to stop yourself twice from starting to rub your ass in public! He is taking a rather long time but you did say in an hour or so.... A quicky in a bathroom couldn't hurt. ");
                oper(system, "./mistake", "Find some temporary relief");


            }, //function close
            "mistake": function(character, system, action) {
                transer();
                parer("It doesn't take long at least... your hadly have to rub your ass a bit and stroke your cock before an unfulfilling orgasm hits you. It feels... wrong... empty... it just isn't enough! Still it takes the wind out of you and leaves you panting from it. You feel the runes grow warm from it though, they almost hurt..... You quickly get out of the restroom and hope no one heard you moaning in there");

                system.animateQuality("essence", character.qualities.essence + 80, { from: 0, to: 1 });

                oper(system, "keagenhosthidden/home", "Head back to Keagens house");
            }, //function close
            "shutout": function(character, system, action) {
                transer();

                parer("You shake your head and apologies for getting his hopes up, but its not something you can really go showing people\"I guess I understand... but REALLY\
                                  I would move all the moon in the heavens to see that thing! I would even blow you to see it! You ever change your mind let me know ok?\" he says still practically begging as you head off");
                oper(system, gfrom, "Tell him you will keep him in mind and head out.");
                character.sandbox.keagentalkedto = true;
                character.sandbox.keagenyes = true;

            },
            "smalltalk": function(character, system, action) {
                transer();
                parer("He sighs and takes the book in front of him and dangles it like a gross napkin\"It would be going much better\
                       if these damn books spent as much time covering magic as it did safety! I should have gone into the physics class... at least they get to talk about smashing\
                           stuff together in an accelerator.\" he grumbles at the book. You and he chat for a bit longer but you never end up mentioning the artifact.");

                character.sandbox.keagentalkedto = true;
                oper(system, gfrom, "Finish up and head back");
            }
        }
    }),
    /////////////////////////////////////////////////////////////////////
    //						 LOCATIONS                                   //
    /////////////////////////////////////////////////////////////////////
    places: new undum.SimpleSituation(
        "<h1><p class=transient>Choose a location</p><h1>", {

            displayOrder: 4,
            choices: "#place",
            exit: function(character, system, from) {
                //              if (character.qualities.day == 1 && character.qualities.timeofday < 1) {
                //
                //                system.setQuality("timeofday", character.qualities.timeofday + 1);
                //              }
            },
            enter: function(character, system, from) {
                gfrom = from;

                if (wtf == true) {
                    wtf = false;
                    parer("Jumping back down here is kinda wonky expect some weirdness in the stats for a bit");
                    // system.setQuality("timeofday", 0);
                    system.setQuality("day", 1);
                    system.setQuality("essence", 10);



                }
            }
        }
    ),
    mall2: new undum.SimpleSituation(
        "", {
            heading: "Mall",
            tags: ["place"],
            displayOrder: 4,
            enter: function(character, system, from) {
                if (character.sandbox.limits.cansee) {
                    parer("Ariving at the mall you see the usual crowd of people wandering about store to store. The mall itself is set up with 3 tiers each connected to the last by a wide ramp and stairs\
                                , conveniently each tier has similar stores clustered together. However it seems most of the stores are currently closed due to some event called 'pre alpha' or something");

                    /// LATER ON THIS will be more efficient to use a for loop with a -1 to length to determine the end point for "and"
                    var derpholder = startlocations.mallnpc;
                    if (derpholder[0] != undefined) {
                        spark = true;
                        system.write("<p>Also here you see</p>");
                        oper(system, (derpholder[0]) ? (derpholder[0] + "/talkto").toLowerCase() : undefined, derpholder[0], (derpholder[1]) ? (derpholder[1] + "/talkto").toLowerCase() : undefined, derpholder[1], (derpholder[2]) ? (derpholder[2] + "/talkto").toLowerCase() : undefined, derpholder[2]);
                    };

                    oper(system, "places", "Head back");
                } else {
                    //for use later with being unable to see due to pants or TF


                }
            }
        }
    ),
    //  office2: new undum.SimpleSituation(
    //          "",
    //          {
    //            heading: "Office",
    //            tags: ["place"],
    //            displayOrder: 4,
    //            enter:
    //                    function (character, system, from) {
    //                      if (character.sandbox.limits.cansee) {
    //                        parer("");
    //                        var derp = whoer(startlocations.officenpc);
    //                        if (derp != undefined) {
    //                          system.write("<p>Also here you see " + derp + "</p>");
    //                        }
    //                        ;
    //                        system.write("<p>Lets head back <a href=places class=transient> to locations </a></p>");
    //                      } else {
    //                        //for use later with being unable to see due to pants or TF
    //
    //
    //                      }
    //                    }
    //          }
    //  ),
    adult2: new undum.SimpleSituation(
        "", {
            heading: "Adult Novelties",
            tags: ["place"],
            displayOrder: 4,
            enter: function(character, system, from) {
                if (character.sandbox.limits.cansee) {
                    parer("The store is a bit quiet and out of the way, anyone you see inside is often slighty embarrassed to be there.\
                                  Along the walls are numerous fetish supplies and media. The middle of the area is dominated by clothing racks with all sorts of costumes and outfits.\
                                  In the back there are two rooms with the more... sexual toys. One with dildos, vibrators, and anal beads. While the other has far more exotic items like chastity belts, sounding\
                                  devices and even Estim<p> A staircase leading up a floor contains private rooms for 'changing clothes', however some have holes in the walls and 1 hour time limits<br>");
                    var derpholder = startlocations.adultnpc;
                    if (derpholder[0] != undefined) {
                        spark = true;
                        system.write("<p>Also here you see</p>");
                        oper(system, (derpholder[0]) ? (derpholder[0] + "/talkto").toLowerCase() : undefined, derpholder[0], (derpholder[1]) ? (derpholder[1] + "/talkto").toLowerCase() : undefined, derpholder[1], (derpholder[2]) ? (derpholder[2] + "/talkto").toLowerCase() : undefined, derpholder[2]);
                    }
                    oper(system, "places", "Head back");
                } else {
                    //for use later with being unable to see due to pants or TF


                }
            }
        }
    ),
    park2: new undum.SimpleSituation(
        "", {
            heading: "Park",
            tags: ["place"],
            displayOrder: 4,
            enter: function(character, system, from) {
                if (character.sandbox.limits.cansee) {
                    parer("Sounds of animals and rustling leaves dominates the area as you enter the park. There are a few trails here and there and a general picknick table area\
                                  . Often students at the nearby college will come here to study when the weather permits.");
                    var derpholder = startlocations.parknpc;
                    if (derpholder[0] != undefined) {
                        spark = true;
                        system.write("<p>Also here you see</p>");
                        oper(system, (derpholder[0]) ? (derpholder[0] + "/talkto").toLowerCase() : undefined, derpholder[0], (derpholder[1]) ? (derpholder[1] + "/talkto").toLowerCase() : undefined, derpholder[1], (derpholder[2]) ? (derpholder[2] + "/talkto").toLowerCase() : undefined, derpholder[2]);
                    }
                    oper(system, "places", "Head back");
                } else {
                    //for use later with being unable to see due to pants or TF


                }
            }
        }
    ),
    post2: new undum.SimpleSituation(
        "", {
            heading: "Post Office",
            tags: ["place"],
            displayOrder: 4,
            enter: function(character, system, from) {
                if (character.sandbox.limits.cansee) {
                    parer("Along the walls are numerous PO boxes and kiosks for sending more complicated packages. The main desk is headed by a rather bored looking receptionist. There is a shipping and receiving department in the back and a number of offices in the upper floors.");
                    var derpholder = startlocations.postnpc;
                    if (derpholder[0] != undefined) {
                        spark = true;
                        system.write("<p>Also here you see</p>");
                        oper(system, (derpholder[0]) ? (derpholder[0] + "/talkto").toLowerCase() : undefined, derpholder[0], (derpholder[1]) ? (derpholder[1] + "/talkto").toLowerCase() : undefined, derpholder[1], (derpholder[2]) ? (derpholder[2] + "/talkto").toLowerCase() : undefined, derpholder[2]);
                    };
                    oper(system, "places", "Head back");
                } else {
                    //for use later with being unable to see due to pants or TF


                }
            }
        }
    ),
    gym2: new undum.SimpleSituation(
        "", {
            heading: "Gym",
            tags: ["place"],
            displayOrder: 4,
            enter: function(character, system, from) {
                if (character.sandbox.limits.cansee) {
                    parer("The gym's general area is filled with some basic equipment for keeping in shape, as usual there are several people here that are in desperate need of that.\
                                  The really good equipment is in the back however and that requires a membership. A  small food court is off to the side in a connected building, however they specialize in 'healthy'\
                                  options only. Still it's a nice place to sit at and get a decent healthy meal even if you don't intend to work out.");
                    var derpholder = startlocations.gymnpc;
                    if (derpholder[0] != undefined) {
                        spark = true;
                        system.write("<p>Also here you see</p>");
                        oper(system, (derpholder[0]) ? (derpholder[0] + "/talkto").toLowerCase() : undefined, derpholder[0], (derpholder[1]) ? (derpholder[1] + "/talkto").toLowerCase() : undefined, derpholder[1], (derpholder[2]) ? (derpholder[2] + "/talkto").toLowerCase() : undefined, derpholder[2]);
                    };

                    oper(system, "places", "Head back");

                } else {
                    //for use later with being unable to see due to pants or TF


                }
            }
        }
    ),
    home2: new undum.SimpleSituation(
        "", {
            canView: function(character, system, host) {
                return (character.qualities.day == 0);
            },
            heading: "Your house",
            tags: ["place"],
            displayOrder: 4,
            enter: function(character, system, from) {
                parer("You head home and do an errand or two on the way, it is nearly dark before you get back.");
                oper(system, "artifact/experiment", "Give the artifact another look.");
                // system.setQuality("timeofday", character.qualities.timeofday + 1);
            }
        }
    )
};