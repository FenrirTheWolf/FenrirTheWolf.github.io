undum.game.escape = {

    escape: new undum.SimpleSituation(
        "", {
            actions: {
                "esdone": function(character, system, action) {
                    transer();
                    parer("<h1>A New Day</h1>");
                    parer("YOUR MOUTH IS SUDDENLY FILLED WITH CUM!!!!! It's spurts up your throat in what feels like gallons! Your whole body feels like it is still going through an orgasm. You end up coughing it onto the floor over the bed, of course all the ruckus wakes up host.....");
                    if (character.qualities.day > 50) {

                        parer(character.host.escapelong);

                    } else {
                        parer(character.host.escape);

                    }


                    oper(system, "./no", "Tell him no", "./yes", "Tell him yes");
                }, //function close
                "no": function(character, system, action) {
                    transer();


                    if (character.qualities.day > 50) {
                        //LONG
                        parer("You tell him yes as you try to clear the cum from your throat. After another moment or two it finishes and the orgasmic feelings finally come to a stop...");
                        parer(character.host.longreactionno);

                    } else {
                        parer("You tell him yes as you try to clear the cum from your throat. After another moment or two it finishes and the orgasmic feelings finally come to a stop...");
                        parer("q1Damn well... just try to get it out of your system...q1 He says trying to comfort you a bit in his own way. q1Looks like I am back to having a normal cock again...q1 He says giving his sheath a rub.");
                    }

                    parer("The moment he touches his... cock. You feel a brushing against your own body, A pleasureable sensation spreading over you! You almost yelp in surprise as he does it! You look back to make sure but his hand is on his other cock... errr his real cock! But.. you FELT IT!");
                    oper(system, "./hideit", "Try to hide it", "./ask", "Ask what he just did");
                }, //function close
                "yes": function(character, system, action) {
                    transer();

                    if (character.qualities.day > 50) {
                        //LONG
                        parer("You tell him yes as you try to clear the cum from your throat. After another moment or two it finishes and the orgasmic feelings finally come to a stop... ");
                        parer(character.host.longreactionyes);

                    } else {
                        parer("You tell him yes as you try to clear the cum from your throat. After another moment or two it finishes and the orgasmic feelings finally come to a stop...");
                        parer("q1Damn well... just try to get it out of your system...q1 He says trying to comfort you a bit in his own way. q1Looks like I am back to having a normal cock again...q1 He says giving his sheath a rub.");
                    }

                    parer("The moment he touches his... cock. You feel a brushing against your own body, A pleasureable sensation spreading over you! You almost yelp in surprise as he does it! You look back to make sure but his hand is on his other cock... errr his real cock! But.. you FELT IT!");
                    oper(system, "./hideit", "Try to hide it", "./ask", "Ask what he just did");
                }, //function close
                "hideit": function(character, system, action) {
                    transer();

                    character.sandbox.oldhostfeels = character.sandbox.host.host;
                    character.sandbox.oldhostknows = false;
                    parer("You have to bite your lip to try and hide what you just felt. It's a weird disjointed sensation and certainly feels less than it did when you were... down there. With any luck this is just a side effect that will wear off with some time. He rubs his cock through your old home of his sheath sending familiar sensations of pleasure through your body! You can almost close your eyes and feel the shape of his cock and warmth of his sheath around you.");
                    oper(system, "./nobeg", "Ask for some clothing and a ride to your place", "./beg", "Beg him to make you his cock again!");
                }, //function close
                "ask": function(character, system, action) {
                    transer();
                    character.sandbox.oldhostfeels = character.sandbox.host.host;
                    character.sandbox.oldhostknows = true;
                    if (character.sandbox.host.host == "keagen") {

                        parer("q1I just.... touched. Well my cock. Wait did YOU feel it? OH that's... interesting.q1 He says.. q1But I suppose it makes sense. You still had full access to your own thoughts and senses as my cock. And the ring is unsealed... So it's effects are going to be unpredictable. I think I read somewhere that this sort of thing wears off over time. I usually skim over the warning parts so I am not sure...q1 He says");
                    } else {

                        parer("q1I just.... touched. Well my cock. Wait did YOU feel it? OH that's... interesting.q1 He says giving it a few more rubs to watch the effect it has on you... Which happens to be sending familiar sensations of pleasure through your body! You can almost close your eyes and feel the shape of his cock and warmth of his sheath around you. You do your best to ignore it for now....");
                    }
                    oper(system, "./nobeg", "Ask for some clothing and a ride to your place");


                }, //function close
                "beg": function(character, system, action) {
                    transer();

                    parer("He laughs when you beg to be back in his warm comfortable sheath. q1You really are just a horny cock at heart..." + character.host.esbeg + "He says and stands up being sure to avoid to pool of cum.  The sensation of him walking around the room is so strange as you almost feel yourself rocking back and forth in his sheath. He collects some clothing around and tosses it to you. It is oddly comfortable changing in front of him, as if he still thought of you as part of his body in some way.");





                    oper(system, "./ride", "Reluctantly get dressed");


                }, //function close
                "nobeg": function(character, system, action) {
                    transer();
                    parer("q1Sure thing... just give me a moment...q1 He says. A few minutes later he has some clothing for you to put on. The sensation of him walking around the room is so strange as you almost feel yourself rocking back and forth in his sheath. It is oddly comfortable changing in front of him, as if he still thought of you as part of his body in some way.");


                    oper(system, "./ride", "Get dressed");
                }, //function close
                "ride": function(character, system, action) {
                    transer();
                    if (character.sandbox.host.host == "keagen") {
                        parer("Pretty soon you are all dressed and headed back to your own house in a taxi cab.... You feel so strange trapped in hosts pants and sitting next to him at the same time.");

                    } else {
                        parer("Pretty soon you are all dressed and headed back to your own house.... You feel so strange trapped in hosts pants and sitting next to him at the same time.");

                    }
                    parer("He follows you up to your house. It's small and smooshed together with 4 other houses for low income college students. Thankfully you have key stashed away under a rock, it even still fits the locks! But when you open the door there is a bit of a shock...... The place is an absolute mess! Stuff strewn everywere! q1Whoa.... Looks like you had someone break in while you were gone...q1 host says following you inside");


                    oper(system, "./check", "Check to see if anything was stolen");
                }, //function close
                "check": function(character, system, action) {
                    transer();
                    parer("The way everything it toss around and strewn about seems a bit odd. And it only makes less sense when you realize there are no signs of break in. All the windows are fine and the door seems untouched. The most baffeling thing you discover is in your bedroom, a lockbox you had kept some emergency money in open on the bed. Money and coins litter the floor and bed but none of it was taken!");

                    parer("In fact the only thing that is missing.... is the stone artifact you found the ring on.");



                    oper(system, "./missing", "Mention the artifact is missing");
                }, //function close
                "missing": function(character, system, action) {
                    transer();

                    parer("You tell host that whoever did this only took the artifact and left everything else even your money! Plus they broke in without leaving any sign of getting in. They must have picked the lock.... or something");
                    if (character.sandbox.host.host == "keagen") {

                        parer("q1OH shit!!! I think I know what happened... There are rumors about this sort of thing.  I wouldn't call it a cult.. but arcanists do have a sort of organization. They take organize museums and dig sites into the wilderness, then regulate the artifacts to make sure they are sealed on a regular basis. But....unsealed artifacts are super dangerous soo... Rather than wait for authorities to confiscate items.... they take it into their own hands. It's very illegal but kind of nessesary. .q1 he says thinking about it.");
                        parer("q1But they only got the pedestal! Not the real artifact.....q1 He says looking at you with concern. q1They are probably still looking for you.q1 He says.");
                    } else {
                        parer("q1So someone barged in here all sneaky and stole the big stone thing? That sounds like some kind of cult bullshit to me. You said your uncle sent it to you? I have a feeling it someone didn't appreciate that.q1 He says thinking about it.");
                        parer("q1Oh... they only got the pedestal. Not the real artifact.....q1 He says looking at you with concern. q1They are probably still looking for you.q1 He says.");

                    }

                    oper(system, "./plan", "Come up with a plan");
                }, //function close
                "plan": function(character, system, action) {
                    transer();
                    parer("You need to find a way to contact your uncle and get this whole thing resolved before some crazy cult of arcanist kidnapps you or something! Even worse the ring is inside you and they want it. Who knows what they would do to you to get it! Your uncle might be the only way to figure this all out!");

                    parer("What possible way could you have to hide till then?");
                    oper(system, "./becomecock", "Become a cock!", "./becomecock", "Hide in a sheath!", "./troll", "Lay low and change your identity");
                    spark = true;
                    oper(system, "./becomecock", "Move south to a nice warm tight location", "./becomecock", "Take up a new profession delivering cum");
                }, //function close
                "troll": function(character, system, action) {
                    transer();
                    parer("It would make the most sense to change your identity and lay low for a while..... You could take the name COCK and pose as a penis inside of someones sheath! It is the perfect plan");


                    system.doLink("./becomecock");
                }, //function close
                "becomecock": function(character, system, action) {
                    transer();
                    system.setQuality("currency", 1000);
                    parer("You mention your idea to host and he just shakes his head. q1You really have a one track mind now don't you?  From the looks of it they haven't been here in a long time. As long as you keep a low profile you should be fine. Just don't go to class or anything.... At least you have enough money to last a while to figure things outq1 he says pointing to the bed.");


                    oper(system, "./clean", "Nod and clean up a bit");
                }, //function close
                "clean": function(character, system, action) {
                    transer();
                    parer("You and he spend the rest of the afternoon cleaning up a bit taking care of most of the mess. He leaves for a little while though and returns with something for you q1Here...q1 He tosses a phone to you... q1If anything happens send me a text and I will head right over. Or if you need a... safe place to stay for a while.q1 he says with a knowing look. It is night time by now and he heads out leaving you alone for the first time in a LONG while.");
                    oper(system, "./newday", "Get some sleep");
                }, //function close
                "newday": function(character, system, action) {
                    transer();
                    parer("CHAPTER 2! This section is a simple layout and teaser for what is to come. There are a few future Hosts with a simple teaser what they are about around the town.");
                    toylist: ["bondage", "condoms", "fakering", "vibe2", "pill"], // items that the host buys automatically punishments
                        character.sandbox.toys = {

                            beads: "./beads",
                            plug: "./plug",
                            vibe: "./vibe",
                            fleshlight: "./fleshlight",
                            cage: false,
                            vibe2: false,
                            bondage: false,
                            condoms: false,
                            fakering: false,
                            pill: false
                        };
                    oper(system, "ch2/fiddler", "See if anyone interesting is around");
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