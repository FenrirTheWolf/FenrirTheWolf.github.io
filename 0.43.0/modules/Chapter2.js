ch2msg = function(character, system, from) {

    if (character.sandbox.daysnotacock > 21) {
        //after 7 more days goes down to 7

    } else if (character.sandbox.daysnotacock > 7) {
        //after 7 more days goes down to 10
        character.sandbox.withdrawls = 17 - (character.sandbox.daysnotacock - 7);
    } else if (character.sandbox.daysnotacock <= 7) {
        //after 7 days goes up to 20
        character.sandbox.withdrawls = 10 + character.sandbox.daysnotacock;

    }
    var rndnum = rnd(character.sandbox.withdrawls);
    var rndpick = rnd(10);

    if (rndnum > 7) {
        //////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////// COCK SENSATIONS ///////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////
        //messages from host's cock sensations
        switch (rndpick) {
            case 1:
                parer("The sensation of rubbing spreads up and down your body rather suddenly! host must be rubbing his cock right now! All you can do is blush with embarrassment hoping no one notices you acting strange! Your whole body arches backwards suddenly and you FEEL the cum spurting up through you! The phantom sensations end but you do notice a constant taste of cum in your mouth now!");
                break;
            case 2:
                parer("There is a sudden tightness around you, like a warm moist sleeping bag. You know its just some distant sensation from hosts cock, but it feels so real! The embrace of his sheath wrapped around you. The scents and tastes of being trapped in his flesh as just another part of his body... You snap yourself out of it and try to ignore the sensations!");
                break;
            case 3:
                parer("You suddenly feel like you are getting squeezed and pushed around! Almost falling off your feet as host must be adjusting you in his sheath... or his cock in it's sheath. The distinction in your mind is a bit blurry still. If you can feel it does that mean it is still a part of you?... Or you are still a part of it? Maybe your mind/soul really are still in his sheath and walking around is the real phantom sensation!");
                break;
            case 4:
                parer("Sometimes it seem like you are living a double life. Constantly feeling host's cock as if it were still you. It is so easy to just close your eyes and completely sink back into the sensations. The swaying as he walks lightly jostling you between his legs. If you concentrate hard enough you can almost start to see again from the point of view of his cock! The shock when that happens is enough to jump you out of it.");
                break;
            case 5:
                parer("You get surprised as you feel cloth suddenly slide over your face! You flail at it but find nothing there, the sensation continues as you realize it must be coming from host. All you can do is wait it out as what must be underwear rubs against your body. Silly cloth prison keeping you from the rest of the world, yet you can't help but enjoy the thought of being trapped in it again.");
                break;
            case 6:
                parer("Suddenly you feels something slimy slide down over your entire body! It's tight and stretchy but you don't feel or see anything actually there! As the sensation continues you realize it must be a condom host is wearing! It makes you want to wiggle and squirm, like you were just forced into a latex bed as it shrink wrapped around you! You do everything you can to ignore the constant sensation and carry on.");
                break;
            case 7:
                // Sex
                //watersports
                //chastity
                //sex
                parer("You start to feel a bit strange, a sort of hard to move feeling. At first you don't think much of it but then everything feels tight and squishy along your whole body! You have to brace yourself against the onslaught of sensations! Over and over you feel like your body is getting shoved into a tight hole! host must be.... having fun somewhere. Your face goes bright red as you are helplessly used from a distance! What feels like a urethra connected to your throat fills with cum, you half expect a stream of the stuff to shoot from you! All the sensations end slowly as you are left with lingering taste of cum in your mouth");
                break;
            case 8:
                if (character.sandbox.ws) {
                    parer("A massive surge of movement spreads through you as it feels like something is shooting up your throat! You quickly close your mouth and cover it but nothing is coming out. Yet you can feel it! The taste of piss pouring out over your tongue and a constant pressurized stream flowing up a urethra into your mouth! All you can do is moan to yourself as host finishes pissing and the phantom sensations end.");
                    break;
                }
            case 9:
                if (character.sandbox.pissaddiction > 5) {
                    parer("You occasionally wander past people and helplessly glance at their crotch wondering what their piss would taste like. You could do way better pissing than their cock ever could! The desire to be complimented after you finish draining their bladder, wiping the piss from your face... You just want prove how good a penis you can be... That last one rattles your thoughts enough to realizing what you were thinking!");
                    break;
                }
            case 10:
                parer("You suddenly get a weird squished feeling around your face! It is easy enough to guess what it is, having felt it any number of times as host rubbed you during the day. Just the pleasant feeling of his touch squeezing your soft body, rubbing over the head and then down the shaft! There is nothing you can do to get away from the sensations! Not that you could do anything about it while you were a cock either...");
                break;
            default:
        } //End of RND switch
    } else if (rndnum > 4) {
        //////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////// HEAT messages ///////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////
        // Heat messages
        switch (rndpick) {
            case 1:
                parer("You are terribly distracted with each step you take. There is a desperate need to be filled that just won't go away. Wandering around the city is certainly helping but only so much");
            break;
            case 2:
                parer("There is almost a sense of embarrassment as you wander about. It feels like you are constantly super exposed! As if you just want to hide in a nice sheath behind a pair of underwear. You are not supposed to be out in public! The moment of panic passes as you try to remind yourself you are not a cock anymore.");
            break;
            case 3:
                parer("You catch yourself every now and then staring at peoples crotches. It's almost instinctual as a deep part of your wonders what their cock is like, or more accurately what it would feel like to be their cock. It's almost like house searching as you wonder about becoming their new little friend. You eventually have to shake your head trying to get the thought out.");
            break;
            case 4:
                parer("The heat comes back to you rather suddenly when your ass clenches randomly as if letting you know it was displeased not having a cock to squeeze. Biting down on your lip is about the best you can do to drown out the desperate sensations of need. There is no way you can last much longer if this doesn't go away on it's own!");
            break;
            case 5:
                parer("A soft wind blows past you, memories of your warm sheath come flooding back. Being a cock was so nice, so warm. It was a bit sticky and moist sometimes but so was most of your body. It just felt so nice and comfortable, safe. You manage to get your head focused again trying to remind yourself that you are a person now darn it!");
            break;
            case 6:
                parer("Everything seem strange being this high up. You spent soo long being down at crotch level with the world it feels like you are on stilts all the time now. Even moving around on you own feels strange. For so long you were carried around wherever without a choice at all. You can't help but sigh remembering how nice that felt.");
            break;
            case 7:
                parer("Walking past places feels different now, anything adult related catches your eye fast. It might be because you are effectively perma horny! Donut shop... be fun to be slide into one of them, a hot dog stand just causes a instant giggle. Passing a clothing store and all you can think of is all the different kinds of underwear your could get your owner to cover you with!");
            break;
            case 8:
                parer("Occasionally you try to move or throb in clearly cock like ways just instinctually. An occasional reminder that you can't do that anymore. You feel bad for a moment till you remember you can do WAY more things as a person! Being able to move and walk and talk is way more important than the ability to throb and twitch! Right?");
            break;
            case 9:
                parer("You keep thinking about the feeling in your ass and how much you just NEED to be filled! You know this is just those damn runes taunting you into becoming a cock again! But that doesn't change the fact of how it feels. You need it so badly! It is so intense you almost wonder if the consequences are worth it just to end this desperate heat!");
            break;
            case 10:
            if (character.sandbox.ws) {
            parer("You wander past a bathroom and wonder if your owner needs to piss. You could always sort of feel how full his bladder was, slightly. Just a distant pressure always reminding you of your purpose. The thought of going in there and keeling in front of a urinal as his piss streams from your mouth invades your mind before you shake it off as nonsense.");
            } else {
            parer("You wander past a bathroom only thinking of it being a good place to sneak off so you can be stroked! Throbbing till those balls clench and send torrents of cum up your throat! You catch yourself drooling before managing to shake yourself out of the daydream.");
        }
        break;
        default:
    } //End of RND switch
}};
undum.game.ch2 = {
    ch2: new undum.SimpleSituation("", { actions: {
    "fiddler": function (character, system, action) {
        if(character.host.host){
            character.sandbox.pasthost= character.host.host;
        }else{
            character.sandbox.pasthost="mark";
        }
        character.sandbox.ch2=true;
        character.sandbox.ring=true;
        //system.setQuality("day", 5);
        var rndprop = function (obj) {
            var keys = Object.keys(obj);
            return obj[keys[ (rnd(keys.length)-1) << 0]];
        };
        system.setQuality("harmony", 50);
            if (character.sandbox.holdem) {
                var tempnames = undum.game.newhosts.names;
                //, "mark", "keagen" "leia",
                var x2;
                var raveltype;
                if (character.sandbox.playertype == "dragon") {
                raveltype = "ravel2";
                } else {
                raveltype = "ravel";
            }
            character.sandbox.newhostnames = undum.game.newhosts.names;
            var newhostlocations = { mall: [], club: [], park: [], post: [], arcade: [], library: [], gym: [], adult: [], carnival: [raveltype], museum: [], farm: [], cinema: [], pub: [], tavern: [], pawn: [], train: [] };
            character.sandbox.ch2hostloc = newhostlocations;
            for (x2 in character.sandbox.newhostnames) {
                if (tempnames[x2] != "ravel" && tempnames[x2] != "ravel2" && tempnames[x2] != "mark") {
                    rndprop(newhostlocations).push(tempnames[x2]);
                    }
                }
            }
            character.sandbox.holdem = false;
            //Random cock events sent to player from all the hosts they have ever had.

            //hyena that loves piercings
            //Jaxe

            //Will the equine
            //he is the boyfriend to bret in the future. 
            //explore relationship with bret..... NOT MORE PUNS!

            //girly boy sissy  
            // jessie Jamie TWINS!

            //

            //Raptor
            // Aleik

            //Possessive lion might muscles but has a small pee pee.
            //Dominic 

            //kobold
            //Ravel the carnival kobold, does a magic trick with his cock... just bend over. Also might be a freakshow of the kobold with the biggest dong in the world!

            //female squirrel
            //Verona 

            /*
                SPECIES I WOULD LOVE TO WRITE FOR!!!!
                Squirrel
                Skunk
                bunny jackalope
                tanuki
                dolphin or shark
                bat 
            */

            //possessive host YOU ARE MY cock now, And I am NEVER letting you go!

            //code goes here for figuring out where hosts should go

            //to access a new host's information
            // var myhostlist;
            // for (myhostlist in character.sandbox.nh) {
            //     if (character.sandbox.nh[myhostlist].loc.includes(character.qualities.dayofweek)) {
            //         character.sandbox.ch2hostloc.push(character.sandbox.nh[myhostlist].name);
            //     }
            // };
            oper(system, "places2", "Take the bus");
        }, /*function close*/  
        "pasthost": function(character, system, action) {
            transer();
            parer("");
            oper(system, "", "");
        }, /*function close*/
        "nhreturn": function(character, system, action) {
            //SETS A NEW ACTIVE HOST!
            var nh = character.sandbox.nh[character.sandbox.activenh];
            character.sandbox.currenthostparse = nh.parse;
            character.sandbox.scenerexit = "newhostpicked/enter";
            character.sandbox.host = character.sandbox.nh[character.sandbox.activenh];
            character.host = character.sandbox.nh[character.sandbox.activenh];
            character.sandbox.headingholder = character.sandbox.activenh;
            character.sandbox.curhost = character.host.chost;
            parer("<h1>" + character.host.chost + "</h1>");
            document.getElementById("creatorname").innerHTML = "Character Written by<br> " + character.host.creator;
            $("#creatorname").css('display', 'block');
            // console.log("Huh why no no worky ");
            // parer(nh.greet);
            // oper(system, "ravelhostgreet/scene1", "Hold on to your butts....");
            // oper(system, "home", "Maybe later..... Head home",,"Test the real scene");
            system.doLink((nh.host + "hostgreet/scene1"));
        }, /*function close*/
        "r1": function(character, system, action) {
            transer();
            parer("");
            oper(system, "", "");
        } /*function close*/
    } /*actions close*/
} /*options close*/ ),
bus: new undum.SimpleSituation("", { actions: {
    "simple": function(character, system, action) {
        transer();
        parer("");
        oper(system, "", "");
}, /*function close*/
"r1": function(character, system, action) {
    transer();
    parer("");
    oper(system, "", "");
} /*function close*/
        } /*actions close*/
    } /*options close*/
),
    home: new undum.SimpleSituation(
        "", {
            canView: function(character, system, host) {
                return (true);
            },
            heading: "Your house",
            tags: ["place2"],
            displayOrder: 4,
            enter: function(character, system, from) {

                character.sandbox.trainloc = false;
                character.sandbox.currenthostparse = character.sandbox[character.sandbox.pasthost + "parse"];


                if (character.sandbox.fromhome) {
                    character.sandbox.fromhome = false;
                    system.doLink("ch2home/night");

                } else {
                    parer("(There are currently a bunch of characters somewhere in the city. This is a HIGHLY work in progress example of what the area that new characters will appear in will look like. As well as Player made characters. Check the discord if you are interested in making one. The link is on the left.)");
                    parer("Some of the characters may not work currently. There should be around 6 to try now.");
                    //thankyou dracxon
                    character.sandbox.fromhome = true;
                    //,"Call up"+character.sandbox.host.chost,"./ch1"



                    oper(system, "ch2/fiddler", "Explore the town");

                }

            },
            actions: {
                "ch1": function(character, system, action) {
                    transer();

                    system.setQuality("ctf", 20);
                    clother();
                    parer("Sexy butt fun! (returning to chapter 1!)");



                    oper(system, "transformation", "Ohh.. ok");
                }, /*function close*/
                "r1": function(character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "");
                    } /*function close*/
            } /*actions close*/
        }
    ),
    places2: new undum.SimpleSituation(
        "<h1><p class=transient>Choose a location</p><h1>", {

            displayOrder: 4,
            choices: "#place2",

            enter: function(character, system, from) {



            }
        }
    ),
    ch2menu: new undum.SimpleSituation(
        "", {
            actions: {
                "enter": function(character, system, action) {


                    ch2msg(character, system, action);

                    if (character.sandbox.ch2hostloc[character.sandbox.ch2loc].length > 0) {
                        parer("You see " + herer(character, character.sandbox.ch2loc) + " here as well.");


                        try {
                            if (character.sandbox.ch2hostloc[character.sandbox.ch2loc].length > 1) {
                                spark = true;
                                var locholder = character.sandbox.ch2hostloc[character.sandbox.ch2loc];
                                for (var locloop = 0; locloop < Math.ceil(locholder.length / 3); locloop++) {
                                    console.log("locloop peek " + locloop);
                                    var loctemp = [];
                                    var nobreaky = [];
                                    for (var locloop2 = 0; locloop2 < 3; locloop2++) {
                                        console.log("locloop2 peek " + locloop2);
                                        if (locholder[locloop2 + (locloop * 3)]) {
                                            console.log("locloop2 peekaroo ");
                                            loctemp.push("ch2/host" + locholder[locloop2 + (locloop * 3)]);
                                            nobreaky.push("Greet the " + character.sandbox.nh[locholder[locloop2 + (locloop * 3)]]["species"]);
                                        }

                                    }
                                    oper(system, loctemp[0], nobreaky[0],
                                        loctemp[1], nobreaky[1],
                                        loctemp[2], nobreaky[2]);
                                }

                            } else {

                                oper(system, "ch2/host" + character.sandbox.ch2hostloc[character.sandbox.ch2loc][0], "Say hello to the " + character.sandbox.nh[character.sandbox.ch2hostloc[character.sandbox.ch2loc][0]]["species"]);
                            }
                        } catch (e) {

                            console.log("TRYCATCH " + e);

                        }







                    } else {
                        //no one here!
                    }

                    if (character.sandbox.locdeeper) {
                        character.sandbox.locdeeper = false;




                        spark = true;
                    }


                    character.sandbox.wandervar++;
                    if (character.sandbox.wandervar > 2) {
                        character.sandbox.wandervar = 0;

                        parer("It is starting to get a bit late out.");
                        oper(system, "home", "Head back home");
                    } else {
                        if (character.sandbox.trainloc) {
                            character.sandbox.trainloc = false;
                            oper(system, "home", "Head back home", "place3", "Keep wandering");
                        } else {
                            oper(system, "home", "Head back home", "places2", "Keep wandering");

                        }


                    }


                }, /*function close*/

                "r1": function(character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "");
                    } /*function close*/
            } /*actions close*/
        } /*options close*/
    ),
    mall: new undum.SimpleSituation(
        "", {
            heading: "Mall",
            tags: ["place2"],
            displayOrder: 4,
            enter: function(character, system, from) {
                character.sandbox.ch2loc = "mall";
                parer("You enter the busy mall, with is shops and various stores. Every one of them just itching to get your precious limited money! You don't have much though and all the people turn out to be distracting in all the wrong way. Occasionally people give you strange glances noticing how your gaze is always on their crotch as they walk past.");
                character.sandbox.underweargift = true;

                parer("You bought some underwear at the mall!");
                system.doLink("ch2menu/enter");
            }
        }
    ),

    club: new undum.SimpleSituation(
        "", {
            heading: "Night Club",
            tags: ["place2"],
            displayOrder: 4,
            enter: function(character, system, from) {
                character.sandbox.ch2loc = "club";
                character.sandbox.locdeeper = true;
                parer("(This will turn into a massive multi room area in the future)");
                parer("Never been to a club.... Only open at night, get drunk and wonder were your car is the next day.... And why your cock keeps moving");



                system.doLink("ch2menu/enter");
            }
        }
    ),
    adult: new undum.SimpleSituation(
        "", {
            heading: "Adult Novelties",
            tags: ["place2"],
            displayOrder: 4,
            enter: function(character, system, from) {
                character.sandbox.ch2loc = "adult";
                parer("Considering your current state of mind, coming here is more like giving in than distracting yourself. But then again maybe buying a toy or two could help relieve the desperate sensations that are bothering you. All you end up doing is looking at the cock accessories for a while. Always thinking about how good they would feel around you. You really need to find a new crotch to attach to, or some way to endure these withdrawls!");



                system.doLink("ch2menu/enter");
            }
        }
    ),
    park: new undum.SimpleSituation(
        "", {
            heading: "Park",
            tags: ["place2"],
            displayOrder: 4,
            enter: function(character, system, from) {
                character.sandbox.ch2loc = "park";
                parer("A walk in the park seems like a great way to relax and let your mind wander away from thoughts of sex. It works for a while, just wandering down trails and enjoying the fresh air. Eventually you happen to see an animal jump in the distance just out of sight. You suddenly get flush with embarrassment, the last thing you need is to be stuck as some animals cock! After that you quickly get back to the main area of the park.");



                system.doLink("ch2menu/enter");
            }
        }
    ),
    post: new undum.SimpleSituation(
        "", {
            heading: "Post Office",
            tags: ["place2"],
            displayOrder: 4,
            enter: function(character, system, from) {
                character.sandbox.ch2loc = "post";

                if (character.sandbox.host.host == "bret") {
                    parer("Thankfully you don't see Bret in the building today. He must be out of deliveries, it's hard enough not begging to be his cock again every night. But seeing him in person might be a bit too much for your willpower or your mind if he started coming up with more puns. <br>Checking your Po box for any letters from your uncle or anyone interesting turns up nothing.");

                } else {

                    parer("You head into the post office and check your Po box for any letters from your uncle or someone else interesting. No surprise there are none to be found. You don't even know his current address to send him a letter! You hear someone in the back make a joke about their 'package'! It is enough to make you blush and make your way out of there in a rush.");

                }




                system.doLink("ch2menu/enter");
            }
        }
    ),
    arcade: new undum.SimpleSituation(
        "", {
            heading: "Arcade",
            tags: ["place2"],
            displayOrder: 4,
            enter: function(character, system, from) {
                character.sandbox.ch2loc = "arcade";
                parer("The arcade seems like a good place to get your mind off of things. Plenty of things to do specifically for the purpose of being distractions. It even works for a while but the whole standing in one place for too long causes your ass to twitch and clench more frequently than when you keep moving.");



                system.doLink("ch2menu/enter");
            }
        }
    ),
    library: new undum.SimpleSituation(
        "", {
            heading: "Library",
            tags: ["place2"],
            displayOrder: 4,
            enter: function(character, system, from) {
                character.sandbox.ch2loc = "library";
                parer("host has been in here a few times while you were trapped in his pants, you never really got to see the place. Every wall is lined with books and even the frond desk seems piled with unsorted books. You decided to look at the occult and magic sections just out of curiosity, a surprisingly number of books have been taken out.");


                system.doLink("ch2menu/enter");
            }
        }
    ),
    carnival: new undum.SimpleSituation(
        "", {
            heading: "Carnival",
            tags: ["place2"],
            displayOrder: 4,
            enter: function(character, system, from) {
                character.sandbox.ch2loc = "carnival";
                parer("<h1>Carnival Freakshow</h1>");
                parer("You head into the carnival for some fun and end up in front of the q1FREAKSHOWq1 It has posters of all kinds of silly things, the giraffe with a short neck and a wolf with 20 tails! At the bottom you see a mention of the worlds most well endowed kobold!!!! It just shows a picture of this cute looking lizard with a huge bulge in his pants!<br> q1HEY Gonna have to come back later! The show doesn't start for another few hours!q1 You have to look around till you notice the little kobold from the picture looking up at you!q1");



                system.doLink("ch2menu/enter");
            }
        }
    ),
    gym: new undum.SimpleSituation(
        "", {
            heading: "Gym",
            tags: ["place2"],
            displayOrder: 4,
            enter: function(character, system, from) {
                character.sandbox.ch2loc = "gym";
                parer("The gym for those that want to be BUFF, and show off their impressive bulges. It certainly doesn't help the desperate need to be filled you are constantly feeling! A small part of you realizing you could become trapped AS one of those bulges one day! This is probably one of the least helpful places for keeping yourself distracted!");


                system.doLink("ch2menu/enter");
            }
        }
    ),
    train: new undum.SimpleSituation(
        "", {
            heading: "Train",
            tags: ["place2"],
            displayOrder: 4,
            enter: function(character, system, from) {
                character.sandbox.ch2loc = "train";

                parer("This one is special will be used for getting to a second set of areas. Still might find a friend on the way.");
                character.sandbox.trainloc = true;
                character.sandbox.wandervar--;
                delay(["You get on the train as it head for the outskirts of town", "Choo chooo....", "ch2menu/enter"]);





            },
            actions: {
                "simple": function(character, system, action) {
                    transer();
                    parer("");
                    oper(system, "", "");
                }, /*function close*/
                "r1": function(character, system, action) {
                        transer();
                        parer("");
                        oper(system, "", "");
                    } /*function close*/
            } /*actions close*/
        } /*options close*/
    ),
    place3: new undum.SimpleSituation(
        "<h1><p class=transient>Choose a location</p><h1>", {

            displayOrder: 4,
            choices: "#place3",

            enter: function(character, system, from) {



            }
        }
    ),
    farm: new undum.SimpleSituation(
        "", {
            canView: function(character, system, host) {
                return true;
            },
            heading: "Local Farm",
            tags: ["place3"],
            displayOrder: 4,
            enter: function(character, system, from) {
                character.sandbox.ch2loc = "farm";
                parer("Horses cows and big fields. Also a local stop for getting fresh vegetables!");
                character.sandbox.trainloc = true;


                system.doLink("ch2menu/enter");


            }
        }
    ),
    tavern: new undum.SimpleSituation(
        "", {
            canView: function(character, system, host) {
                return true;
            },
            heading: "Tavern",
            tags: ["place3"],
            displayOrder: 4,
            enter: function(character, system, from) {
                character.sandbox.ch2loc = "tavern";
                parer("Last stop before the wilderness., rooms, tables and a bar.");
                character.sandbox.trainloc = true;

                system.doLink("ch2menu/enter");


            }

        }
    ),
    pawn: new undum.SimpleSituation(
        "", {
            canView: function(character, system, host) {
                return (true);
            },
            heading: "Pawn Shop",
            tags: ["place3"],
            displayOrder: 4,
            enter: function(character, system, from) {
                character.sandbox.ch2loc = "pawn";
                parer("Pawn shop! Great place to sell old stuff like jewelry and rings");
                character.sandbox.trainloc = true;
                system.doLink("ch2menu/enter");


            }

        }
    ),
    pub: new undum.SimpleSituation(
        "", {
            canView: function(character, system, host) {
                return (true);
            },
            heading: "Pub",
            tags: ["place3"],
            displayOrder: 4,
            enter: function(character, system, from) {
                character.sandbox.ch2loc = "pub";
                parer("Place to order drinks and hang out. Then get drunk");
                character.sandbox.trainloc = true;
                system.doLink("ch2menu/enter");


            }

        }
    ),
    cinema: new undum.SimpleSituation(
        "", {
            canView: function(character, system, host) {
                return (true);
            },
            heading: "The Cinema",
            tags: ["place3"],
            displayOrder: 4,
            enter: function(character, system, from) {
                character.sandbox.ch2loc = "cinema";
                character.sandbox.trainloc = true;
                parer("Great out of the way cinema that has really great seats! ");


                system.doLink("ch2menu/enter");


            }
        }
    ),
    museum: new undum.SimpleSituation(
        "", {
            canView: function(character, system, host) {
                return (true);
            },
            heading: "Museum",
            tags: ["place3"],
            displayOrder: 4,
            enter: function(character, system, from) {
                //                        var hello=1;
                //                        hello2=1;
                //                        {
                //                        let hello2=2;
                //                        
                //                        }
                //                        hello2==1

                character.sandbox.trainloc = true;
                character.sandbox.ch2loc = "museum";
                parer("Old stuff behind glass. Don't touch, it might explode.");

                system.doLink("ch2menu/enter");



            }
        }
    )
};

herer = function(character, localloc) {
    var perlist = character.sandbox.ch2hostloc[localloc];
    var personhere;
    var roommentionknown = "";
    var roommention = "";
    console.log(character.sandbox.ch2hostloc);
    try {

        if (perlist.length == 1) {
            //one person here
            console.log("just one " + perlist);
            if (character.sandbox.nh[perlist[0]].known) {

                roommention = character.sandbox.nh[perlist[0]].lookat;



            } else {
                roommention = character.sandbox.nh[perlist[0]].lookat;

            }



        } else {
            //more than one  
            //
            console.log("more than one " + perlist);


            for (personhere in perlist) {
                if (personhere == perlist.length) {
                    //last in entry list
                    roommention = roommention + " and ";
                    if (character.sandbox.nh[perlist[personhere]].known) {

                        roommentionknown += character.sandbox.nh[perlist[personhere]].known;



                    } else {
                        roommention += character.sandbox.nh[perlist[personhere]].lookat;

                    }
                } else {

                    if (personhere == 0) {



                    } else {
                        roommention += ", ";

                    }

                    if (character.sandbox.nh[perlist[personhere]].known) {

                        roommentionknown += character.sandbox.nh[perlist[personhere]].known;



                    } else {
                        roommention += character.sandbox.nh[perlist[personhere]].lookat;

                    }
                }

            }




        }
        console.log("humm " + roommention);
        return roommention;
    } catch (e) {

        console.log("TRYCATCH " + e);

    }
};