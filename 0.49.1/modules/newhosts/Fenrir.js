//--------------------------------------------------------------------------//
//--------------------------// Custom Host File //--------------------------//
//--------------------------------------------------------------------------//
(function(character, system, action) {

    // FILL IN HOST NAME BELOW IN BOTH PLACES, must be the same.

    var hostname = "fenrir"; // All lowercase
    var protagonist = "Fenrir";
    undum.game.newhosts.fenrir = { // All lowercase

        //------------- INSERT NEW THINGS BELOW THIS LINE if asked to in the Host Tester! -------------//

        creator: "Fenrir", // Your name goes here!
        chost: "Fenrir", // Capitalized

        // A brief description of the character
        lookat: "a white wolf",

        // Gender
        genderismale: true,

        parse: {
            // The word on the left gets turned into the word on the right for every sentence within the game.
            host: "Fenrir",
            host1: "host",
            sheath: "sheath",
            dayjob: "work", // They have a job to go to..... At their..... while they was at.....
            dayjob2: "work" // For after a few years at said new job.
        },

        /*
         * -6 - Never has sex
         * -5 - Never horny
         * 5 - Morning wood EVERY morning
         */
        libido: 5,

        /*
         * -5 - never sleepy
         *  5 - ALWAYS oversleeping
         */
        // Represents chance for you to wake up before him 
        sleepy: -5,

        // Species - single word description of the host's species
        species: "white wolf",

        // Sexuality - Gay, Bi, Straight, etc
        pref: "gay",

        // The location they work at
        workheading: "Office Building",

        // The location they work at after a few years.
        workheading2: "Google HQ",

        // 1 - Player ALWAYS controls dreamstate
        // 10 - Player NEVER controls dreamstate
        harmony: [
            8, // Low Harmony 
            5, // Middle Harmony
            1, // High Harmony
            100 // The TF % that they'd want you in if they are in control.
        ],

        // If the host can hide the player easily, even at low tf amounts (like Bret). False means they can't.
        gooutlow: true,

        // Normal Or Knot
        // canine, feline, bird, dragon
        // cocktype: "knot",
        cocktype: "canine",
        cockknot: true,

        // What they do on the weekend 
        // Movies, games or sports
        lazy: "games",

        // Displays if their cock is exposed at work or not
        workwithcockout: true,

        //just a name for the player to tease them in perma pet mode
        petname: "pup",

        // Leave blank unless you want your host to appear in only specific locations!
        // Examples: ["carnival", "pub"]
        /* List of locations
         * mall
         * club
         * park 
         * post 
         * arcade 
         * library 
         * gym 
         * adult 
         * carnival 
         * museum 
         * farm 
         * cinema 
         * pub 
         * tavern 
         * pawn 
         * train
         */

        locations: ["pupstore","pub"],//,"pupclub"],

        // Said when showing off partial cock to a person just before sex!
        // Blank = Default text
        partialsexreact: "",

        // Disables host from using specific toys
        // Plug pills beads cage condom vibe fleshlight bondage 
        // ["plug","pills"]
        bannedtoys: ["pills","pill"],

        // Allow watersports with this host
        wsyay: true,

        // Allows for watersports sex scene
        wssex: true,

        // Mark, Bret or Keagen
        // Displays the sheath background. I will send some art samples so you guys can supply a art with a host file if you feel like it.... otherwise you have to pick one of the three
        defaulthostbackground: "bret",

        // Debug Message
        greet: "q1Hey there, I'm Fenrir. I can only currently be found within Chapter 2.q1",

        // Only Chapter 2!

        // First time waking up with you as their cock but they don't know you are there! 
        wake100: "What where... where did he go?\" he asks in shock, angling around to look down at you. Like a giant above you, he doesn't react in shock or anything.q1 Ugh.... Oh well... Maybe I will see him again later...q1",

        // FIRST time waking up with you as their cock!
        wakefirst: "You yell to him to wake up though it takes him a moment to realize the scope of the situation.<p>He sits up causing your world to shift,  \"What where are you, and why does my... OHMYGOD the fuck is going on!!!\" he asks in shock, looking down at his new cock... you.</p>",

        // Standing in front of mirror looking at you and themselves for the first time. Panic is over.... time for contemplation and questions.
        firstreaction: "q1This is so strange... I am so sorry about this! How could this even happen... I mean.... Are you ok?q1 He asks all at once...",

        // How the host responds when you tell them what happened and why it happened
        explain: "Hehe I think I am going to keep you down there from now on... This is way to cool to just let you change back!",

        // Host responds after lying that you don't know how this happened! You suggested books or waiting for it to wear off.
        explainlie: "q1Humm that sounds like a good idea. Either way... looks like you're going to be stuck down there... I umm... Yea.... this is going to take a while to get use to.q1",

        // All mine now... - The host doesn't want to help you change back anymore
        plantokeep: true,

        // All Chapters
        // First time he considers using you for sex after reaching 100% cock.
        sextalk: "q1Hey... um I know this is kinda weird but... I just wanted to warn you. You have been my cock for a while now and.. well... It's just the last time I had sex was a while ago. I have a few friends that really want to hook up with me again.q1 He says sounding almost embarrassed. It takes you a moment to realize what he is suggesting!",

        // Takes you out of his pants after returning home from the library with the book on magic!
        bookstuff: "q1Come on out we got book stuff to do. I don't know about you but my mystic nonsense is a bit rusty. Not sure how much help I will be, I mean other than turning the pages for you! Just.... do me a huge favor and don't drool on the book... That librarian already doesn't like meq1 He says giving you a cautious rub so that you can stay hard enough to look over the book.",

        // You just told him you were reconsidering wanting to stay his cock. A morning special request
        cockno: "q1Yea yea, but the less transformed you're the harder it is to hide you. I can't go to work if you're all arms and sticking out of my pants all day. We need to find a way to fix this fast, this whole small changes every night makes it tough. But I will consider it....q1 ",

        // The host is reluctant when you admit to enjoying the idea of being a cock.
        // Starting to be convinced but not yet.....
        cockplz1: "You've only known him for a little while, but this is a bit much. You can almost feel something conflicted in him as you try to convince him to let you stay as his cock even if a cure is found. q1Dude.... I'm not sure... I mean it has been interesting but this sounds dangerous. I don't want to lose you to being my cock. Besides, who knows how much this whole thing is effecting your head. Just try to stick with it a bit longer ok?q1 He asks, but sounds rather uncertain about it.",

        // The host is almost willing to let you become his cock 100% or stay as his cock at 100%
        // The result of these two scenes sets the target he tfs you at night at 100%
        cockplz2: "You can almost feel the blush on his face as he gives you as rub, deep in contemplation. He takes several moments to think about it and finally grabs you strongly q1I guess I wouldn't mind having a larger cock for a while. And a friendly one at that. Just don't blame me if I forget you're even down there, or even forget your name.... hehe... I might even get a bit attached to having you down there. Might not be willing to let you go so easily.q1",

        // You just told him the ring fell off in the middle of the night, From the morning request menu
        lostring: "q1Oh what! Really? Damn I just thought this spell thing had run its course and you were going to be my cock permanently. Well... then again without that ring I guess you kind of are. To be honest it was getting easy to forget you're even down there.q1",

        // The couldn't find it in the bedroom
        lostring2: "q1So.... About that ring... I can't find it! I know you said it fell off in the night but there is no sign of it anywhere! I even checked under the bed! You sure you didn't imagine it? I mean you have been completely transformed into a cock so it would be understandable.q1 he says giving you a comforting rub.",

        // In the morning he just finished morning routine and notices the ring
        lostringfound: "q1AHHA! Found it! I guess you were right about the ring after all!q1 He slides it down over your body, it feels a little loose for the most part and won't fit over his knot. q1Hmm.. I can't wear this thing all the time. I'll just wear it at night I guess... <i>If I remember to anyways..</i> heheq1 He says as he places it in a drawer.",

        // Ask him to drink more water
        waterreq: "q1More you say? You sure about that? If I didn't know any better I would think you just wanted to get out of my pants more often! Unless you have taken a liking to the taste of my piss.... Hehe, sure.q1",

        // Ask him to drink less water
        lesswater: "q1What? Finally got tired of the taste of my piss, I thought you were really starting to enjoy it. I will cut back a bit on the drinks for you.q1",

        // Ask the host to go buy some sex toys! from request menu
        toyreq: "q1Becoming a cock really made you way more horny didn't it? Or were you always this kinky and just kept it hidden from me? Hehe, I will see what I can doq1 He says",

        // Inside a building with a public restroom to go piss 
        restroommid: "You start to feel host fidget around a bit and he takes a sudden turn, q1Sorry about this but when you gotta go.... Do a good job aiming this time ok?q1 says as you feel him fumble with his pants. He pulls you out just enough to point directly at a urinal! The pressure inside you suddenly spikes as he begins using you to piss with!",

        // Water sports scene when having sex and knotted
        wsk: "q1Yeah sorry, couldn't hold it any longer.... Hope you like the extra warmth hehe!q1",

        // Host goes to this place of work ending with the sentence "wonder how a normal cock manages it"
        workenter: "After a slow traverse via the underground metro into town, you hear a change in the surroundings as host arrives at his workplace. You never really asked host about where he works, only that he has an office job. q1Alright, I'm about to head inside, just stay still for the next eight hours or so while I get my work done and we should be fine.q1 He says almost sounding concerned. Before you can reply you hear an electronic BEEP as a door unlocks and host steps inside. You know it's going to be a long day if you do nothing, in a silly way it makes you wonder how a normal cock manages it.",


        // Same as workenter but without the host talking to you. (is used for unaware stealth and ignoring you due to perma)
        workenterstealth: "A bumpy car ride through town later you hear a change in the surroundings as host arrives at dayjob. You know it's going to be a long day if you do nothing, in a silly way it makes you wonder how a normal cock manages it.",

        // Each of these is used for the work day. One after the other. 
        work: [
            "host greets a few coworkers on his way deeper into the building followed by a few more beeps of security doors. You suddenly get squished between his legs as he sits down in a chair and begins doing something with the computer. The sounds of typing and distant occasional conversations are all that you can hear.",
            "Even being literally in his lap you have no idea what he actually does! Just typing and clicking, it almost makes you thankful to have a future being a cock rather than an office worker! Rather unexpectedly he stands up and walks somewhere, grabs something and sits down again. This time you hear sipping like from a cup of tea.",
            "A sudden change in motion hits you as the cloth prison is squished even more. A rough rubbing from him as he readjusts you. You give a quick wiggle of protest and it seems to surprise him q1Ack! Stop that! OH what? Nothing... Nothing just talking to myself sir!q1 You hear him say to someone."
        ],

        // For when the host DOES NOT KNOW you are his cock
        // one of these should have him be a LITTLE suspicious
        workstealth: [
            "host greets a few coworkers on his way deeper into the building followed by a few more beeps of security doors. You suddenly get squished between his legs as he sits down in a chair and begins doing something with the computer. The sounds of typing and distant occasional conversations are all that you can hear.",
            "Even being literally in his lap you have no idea what he actually does! Just typing and clicking, it almost makes you thankful to have a future being a cock rather than an office worker! Rather unexpectedly he stands up and walks somewhere, grabs something and sits down again. This time you hear sipping like from a cup of tea.",
            "A sudden change in motion hits you as the cloth prison is squished even more. A rough rubbing from him as he readjusts you. You give a quick involuntarily wiggle getting comfortable again and it seems to surprise him q1What the hell.. did it just move? OH what? Nothing... Nothing just talking to myself sir!q1 You hear him say to someone."
        ],

        // Partial section!
        // Perma cock and partial Gone to the doctor and come back!
        // Heading to work where people are aware of your existence!
        // I would prefer if the player was hidden in pants most of the time to avoid people trying to talk to them until the end of the day
        workenterpartial: "A bumpy car ride through town later you hear a change in the surroundings as host arrives at his workplace. You hear an electronic BEEP as a door unlocks and he steps inside. You hear a chuckle from security as he passes by them. Thankfully no one stops him even through it looks like he is smuggling in a small animal under his clothing. Once he gets sat down he pulls you out of his  his pants. Just enough for you to hang out under the desk as he pulls out the keyboard. You still don't get to see what he is working on but at least you're not trapped in his clothing.",

        // This is a bit different only two work scenes, the third is special.
        // Player does not interact with people (we safe that for a later scene yet to be written)
        // Might have arms and mouth OR might not! Scenes need to match both
        workpartial: [
            "host has to stuff you back into his clothes a few times during the day. People might know you're there but that doesn't mean host can go around with you... his cock hanging out in the office.",
            "You hear a few whispers every now and then and even a snicker or two as he passes by people in the office. It is pretty obvious they know you're there.",

            // Each workday ONE of these is chosen at random.
            ["Toward the end of the day you hear one of his coworkers wander over.. q1Hey.. So how is your... little 'friend' doing?q1 host sighs and says you're doing fine, not giving you the chance to tell them yourself!", "You hear host talking with his boss toward the end of the day. q1I hope you have been keeping that thing in your pants. I don't care if it is a person! If you piss with it then it's a cock not a person as far as I am concerned.q1 You hear them say", "host is just finishing up for the day when you hear someone chatting with him. q1Dude you should totally post dick picks online! .... It's your cock, you don't have to ask it permission!q1 You hear the other guy say."]
        ],

        // Preforgotten route 
        // Can not move or talk, host not sure how much of you is aware
        workpills: [
            "host greets a few coworkers on his way deeper into the building followed by a few more beeps of security doors. You suddenly get squished between his legs as he sits down in a chair and begins doing something with the computer. The sounds of typing and distant occasional conversations are all that you can hear.",
            "Even being literally in his lap you have no idea what he actually does! Just typing and clicking, it almost makes you thankful to have a future being a cock rather than an office worker! Rather unexpectedly he stands up and walks somewhere, grabs something and sits down again. This time you hear sipping like from a cup of tea.",
            "A sudden change in motion hits you as the cloth prison is squished even more. A rough rubbing from him as he readjusts you. You might as well be a real cock now considering you can't even move to get comfortable again. q1It was nice hanging out with you, but it's way more fun having you keep my sheath nice and full! And those pills let you enjoy it without a worry in the world!q1 You hear him say."
        ],

        // Forgotten route heading to work
        // This is a massive time skip YEARS later! Could be 10 or even 20
        // New job or new position in life
        // Has completely or just about forgotten about you. or assumes you are just a cock now.
        workenterforgotten: "After a slow traverse via the underground metro into town, you hear a change in the surroundings as host arrives at his workplace. You hear a few buttons being pressed and a door sliding open, then a few minutes of movement and an elevator ride later, a tap of a card along with an electronic BEEP as a door unlocks and he steps inside. A few moments later he immediately starts undressing down to his underwear! From the voices around you it must be a studio room or stage. You hear him talking to others about underwear.... and which one he will be modeling today!",

        // Work forgotten scenes
        // Are displayed in order
        workforgotten: [
            "host spends most of the day sitting or talking with people. Occasionally you hear the sounds of a camera going off.",
            "Every time he changes his clothing you get exposed to the entire room! Sometimes even to see other people LOOKING AT YOU!.... This only lasts a moment before you get stuffed into another pair of expensive looking underwear.",

            // Special section a random one of this list is chosen
            ["You hear host talking with other people, at first it seems they might be talking about you! But soon the mentions of hosts 'bulge' turn to discussing which underwear will show it off the best!", "As the day goes on there are lots of sounds of cameras going off, all pictures of the lovely underwear. He has to change into a few different ones throughout the day as he models them. It's a bit embarrassing how it feels like he is 'using you'  in his new position!", "At the very end of the day he starts rubbing you through the underwear! You quick get hard and start pushing against it... Then the sound of cameras flashing!"]
        ],

        // Is said each time he sits down to do research on the book with you.
        research: "q1Hey time to hit the books. Hope you're actually getting something out of thisq1 He says flipping through a few pages with you. You get the feeling he is trying to understand this stuff but really isn't cut out for it.",

        // Said during work day at the end after the ring falls off
        reallylost: "host sighs as you wiggle around in his pants. Finally after pushing his cart to a new spot he opens his pants and looks in at you q1Come one what are you.... NOOOO...... How did it fall off! Guess we will have to go look for itq1 he says grumbling",

        // Wakes up in the morning to find broken pieces of the ring.
        ringbroke: "q1Dude, is this what I think it is?q1 He asks pointing you to look at a few broken sections of a VERY familiar green ring! He picks up on your reaction and nods. q1I thought so. I don't suppose super glue fixes magic artifacts?q1",

        // You specifically tell him it is ok to sell the ring.... He gives you a rub and then says....
        sellring: "q1I mean as long as you don't mind, I can always use the extra cash. Maybe I can buy you a better one with the money from it!q1",

        // First thing the morning AFTER you change back to normal! this is for going to look for a new host.
        // You were not a cock for a long time
        // MUST end with are you feeling ok?
        escape: "host wakes up a bit slowly q1ehhh what.... Damn are you ok!? Wait.... something is different..... DUDE you're not my cock anymore! I mean you're not stuck to me!q1 He exclaims confirming what you suspected.... q1But... this feels really strange.... You ok?q1 He asks",

        // Same as above but he calls the player his cock and it has been a long time.
        // Should end with a question.
        escapelong: "host sits up confused at first. q1Whats wrong with you.... You never had this much trouble with my cum before. I knew letting you get this big was a bad idea... Wait... Cock are you... holy shit you managed to change back! Are... you ok!?q1 He asks",

        // When asked the escape long... these are the two answers
        longreactionno: "q1Well you have been my cock for a while now... I guess this is to be expected.... Still... wow I almost can't believe it! My cock just grew legs and detached from my body!q1 He says with a snicker q1Sorry I couldn't help it. At least you didn't take my old one with youq1 He says giving his old shaft a rub ",

        // When asked the escape long... these are the two answers
        longreactionyes: "q1Thank goodness, I had almost forgotten you were originally not a part of me... It gave me a bit of a shock... My cock just grew legs and detached from my body!q1 He says with a snicker q1Sorry I couldn't help it. At least you didn't take my old one with youq1 He says giving his old shaft a rub ",

        // Used during the SECOND perma tease event (honestly all three should be in here but I need to see how much text is too much first.
        perma: "I think we need to start considering that you... Ummm... Might want to start accepting that you're going to be my cock, for like, a REALLY long time.", // Permanently.

        // THE CHOICE perma scene..... This is for if you do have the ring.
        // You were getting masturbated but he stopped!
        ulti: "q1Of course, but only if I get to keep you. So tell me, cock; You ready to accept it? I'll sell that silly ring and you can stay in my warm sheath forever. Doesn't if feel good to be between my legs? A nice thick wolf cock for the rest of your days? All I have to do is get rid of that ring and you could feel this good EVERY day.q1 He says",

        // THE CHOICE perma scene..... This is for if the ring is lost or broken
        // You were getting masturbated but he stopped
        ultinoring: "q1Besides, I think I might like having you between my legs! All you want is to do is cum and piss anyways. You're already just a big, throbbing, horny wolf cock! Isn't that right? Just a dick that needs to cum for it's owner! I've only known you for a little while, but at this point I think we both know what you really want..... Tell me exactly what you are now... come on, you can do it..q1",

        // He pulls you out of his pants in the middle of a store to pick out underwear\
        shopunderwear: "q1No one around... Hey, picking some new underwear for you. What do you think? Boxers or briefs?q1",

        // a bit complicated.... but...
        // one word, two words, sentence that continues after "At least you...." 
        underwear1: ["boxers", "spacious boxers", "have room inside the boxers instead of some super tight imprisoning underwear."],
        underwear2: ["briefs", "tight underwear", "can continue to enjoy the tight comfort of his briefs."],

        destroyringplz: "q1Desperate to make this permanent? Hehe honestly was considering doing that anyway. But it's hotter to hear you beg me to do it.q1",

        pissaddict: "q1I guess it was bound to happen eventually. I mean I do piss multiple times a day and it all goes through your mouth effectively. Hehe then again maybe you are just a piss loving cock at heart. Nothing we can do now other than feed your new addiction I guess hehe.q1",

        gotringback: "You hear host fumbling around for a while and after a long discussion he heads out giving you a pat. q1Hey, I got it back! The ring! I manage to talk the guy down to like 60 dollars. You freaking owe me for this one though!q1 He says",

        foundringpawn: "q1Hey.... You will never guess what I just saw in the pawn shop! The ring! Someone must have brought it in when they found it on the ground. Just uhhh... one slight problem. He is charging like 100 dollars for it. No way I am going to spend that much!q1 He says closing his pants back up before you can respond as someone else walks into the restroom!",

        ringplzbuy: "q1I know I know.... It's just really expensive! I mean it did look pretty good on you... And who knows what else it might be capable ofq1 he says thinking about it.",

        partialsextalkhigh: "There is a bit of quiet and host stops for a moment giving you a soft rub. q1You know a bunch of people keep talking about you. I am almost starting to get jealous how much everyone wants to meet you! I can't wait to show you offq1 He says trailing off leaving it rather obvious what he is implying. q1I can't wait to feel what sex feels like with such a special cockq1 He says with a laugh",

        partialsextalklow: "There is a bit of quiet and host stops for a moment giving you a soft rub. q1You know a bunch of people keep talking about you. I am almost starting to get jealous how much everyone wants to meet you! And umm.... a few of them have more lewd interestsq1 He says trailing off leaving it rather obvious what he is implying.q1You are still my cock, and that does come with some consequences. HAh, It is so weird trying to justify having a threesome with your own cock!q1 He says with a laugh",


        // Apology for being harsh with his ultimatum from above.
        sorry: "q1So uhhh, about last night. I think being horny 24/7 was starting to get to me. What I said last night was a bit much... But I really am enjoying having you dangling between my legs. And you did agree......",

        // 100% cock!  shower scene
        showerfull: "host steps into the shower not really paying you much attention. He lathers up while you're still trapped in his sheath the entire time. Eventually pulling you out to give you a good cleaning too. q1Heh, sorry it's easy to forget you're down there.q1 He says",

        // Not 100% cock shower scene
        showernot: "host steps into the shower a bit awkwardly knowing you're technically in there with him. He lathers up while you're still trapped in his sheath the entire time. Eventually pulling you out to give you a good cleaning too. q1A bit awkward showering with someone else, at least we have been friends for a while so it isn't that awkward.... sort ofq1 He says, though not really helping much",

        // Host is worried about you, Checking on you after having been unresponsive for 4 days after taking pills!
        // Ends with asking you to move or something.
        pillwake: "Hey you ok in there? It's been days since you went full cock mode on me... Give me a quick throb if you can hear me.",

        // You ask him if he thinks the pills are safe to take
        pillsafe: "q1I actually have used them before. It's a bit intense, couldn't feel my cock for a week afterwards though! Can only imagine what it's going to do to you.q1 He says hinting at something VERY concerning!",

        // You used thought transfer to contact host to let him know you are ok!
        // You still can't move. He sounds disappointed
        pillalert: "q1Oh wow, you really are still in there... but, I think I like you better like this though, perfectly silent and obedient. If I didn't know better I would have said my penis was perfectly normal! I am sure the effects will wear off in a day or two....q1",

        // Entrance to forgotten route. you either couldn't use Thought transfer due to low essence or
        // You picked "just pretend to be an ordinary cock
        // He is about to take another pill!
        pillohno: "Sorry, about this but I think I am going to keep you as a real cock for a while longer.... Maybe way longer... I think this is what you have always wanted. Who am I to tell you no?",
        // Already in the pill route.... can't move and you manage to tell him NOT to take another pill!
        pillsurp: "q1AHHH, geez don't do that! You haven't said anything for weeks! Alright alright, I will hold off on them for a bit. Heh, nice to know you're still enjoying yourself down there... I had almost forgotten my cock could talk!q1 he says with a laugh",

        // Asked to be let out of his pants more often and he says yes! This is before perma
        playyes: "host thinks about it for a bit and eventually nods. q1I could try to give you some air every now and then I suppose.q1",

        // Asked to be let out of his pants more often and he says NO! This is before perma
        playno: "host shakes his head q1And what if someone catches us? No way... I know it's boring in my pants but we don't have much choice.q1 ",

        seekhelp: "q1Alright, I can't stay stuck in here any longer! Work is getting pissed off and I need to deal with this. We are headed to the hospital... Don't worry just let me do all the talkingq1 He says!",

        // Harmony and Dignity decides
        //----------------------------------------------------//
        //                            
        // PART OF BODY!                    Decided to make you a part of body
        // (doesn't talk to you)            (talks to you often that you are his cock.)
        // Key:bod                                 key:pos                                                       
        //
        //
        //                                  (middle)
        // <<<<harmony        (trying to help you turn back)
        //
        //
        //
        //
        // Key:pet                                               key:f
        // (Compliments you for being a good cock)          (Talks to you often treats you like a person. Lets you at home often)
        // PET, very loving                                  friend penis!
        //----------------------------------------------------//
        // No dignity                                        High dignity


        // These are less important to be character specific. THey are based on harmony and Dignity
        // All of these are POST perma

        // So playpos has the pos at the end.

        // pos = position or toy. They like to humiliate you and reminds you what you are
        // bod = Host doesn't talk to you you are a part of his body
        // pet = You ask for things and beg like an untrained pet. You are friendly to him but not controlled by him.
        // f = friend penis you have some dignity left and are not in harmony with him. Just a friend or room mate. in his pants

        // Asked to be let out of pants more after going perma

        // Possession
        playpos: "host snickers and gives you a rub q1You're my cock now, and it doesn't look like that will be changing anytime soon. You're just going to have to get use to your home inside my sheath.q1",
        // Body part
        playbod: "host raises an eyebrow q1You're just my penis, I play with you when you get hard.... Heh, I feel silly talking to my own cock... q1 He says and continues on.",
        // Pet
        playpet: "host smiles and gives you a rub q1Hehe, like a pet begging to go for walkies. Don't worry I will play with you as long as you keep being a good cock for me.q1 He says",

        // This is also sometimes the default reaction before perma. 
        playf: "host sighs q1I know I know..... Just kind of hard to do. I can't have everyone know a hookup is attached to my crotch.... Still I hear ya.q1 he says.",

        // Looks in the mirror and comments based on perma type
        // bod is empty because he doesn't talk to you
        mirrorbod: "",

        // Possession
        mirrorpos: "q1Love how perfect you are as my penis.q1",

        // Pet
        mirrorpet: "q1Such a good cock! Bet you just love what you've become!q1",

        // Friend
        mirrorf: "q1Eh, it could be worse. At least you didn't get stuck with a complete stranger!q1",

        // Failed a minigame and this is the night masturbate with toy event opening. PUNISHMENT
        // Body part 
        punishbod: "q1Cocks are meant to be cocks! Not moving around while I am dealing with something important! Why am I even talking to my cock? Guess it just needs some time to remember it's place.q1",

        // Possession
        punishpos: "q1What the heck.... I think you have forgotten who is in charge here. You are MY cock. Nothing will ever change that now. I think you need a reminder of who you belong to now.q1",

        // Pet
        punishpet: "q1Naughty cock! BAD! What do you think you were doing today! It's too bad I can't take you out for obedience training. Guess I will just have to make do...q1",

        // Friend
        punishf: "q1Ugh... Dude did you have to be such a problem today? You might be living between my legs now but that doesn't mean you can do whatever you want down there! I think I know how to fix this....q1",

        // WON a minigame and this is the night masturbate with toy event opening. REWARD
        // Body part 
        rewardbod: "",

        // Possession
        rewardpos: "q1Never thought you'd turn out to be such a perfect cock! I've only known you for short while, but I never could've imagined you were destined to be between my legs! Heh, maybe you were always my cock, just took a while to get you to where you belonged. Sooo... cock, ready for a nice reward?q1",

        // Pet
        rewardpet: "q1You were such a well behaved cock today! When you were just a quick one-night-stand, you were't all that obedient, looks like becoming my cock was a huge improvement for you. Or maybe you're just enjoying this too much! Either way, I think you've earned yourself a treat....q1",

        // Friend
        rewardf: "Really glad you didn't cause a problem today. Just wanted to thank you for staying put in my sheath. You may not want to hear this; but you're turning out to be really good at the whole pretending to be a cock thing.... Hope you don't mind if I do the same and have some fun with you....",

        almostcaughtpos: "Heh, I always knew my cock would get me in trouble one day. They are just jealous of how big you make me look down there. Maybe it wouldn't be so bad if I let them know my cock needed it's own company ID.... Hehe",
        almostcaughtpet: "Heh, always knew my cock would get me in trouble one day. I know you just want out to play instead of being all trapped in my pants all day. But an office is no place for a cock to be out in the open. I guess it wouldn't be too bad to let the boss know about my new ... pet.q1 He says thinking about it.",
        almostcaughtf: "q1Heh, always knew my cock would get me in trouble one day. Though I didn't know you would be the cause! I always thought it would be like that one time having sex in the janitors closet or something. You know I almost want to see the look on their faces when they see you.q1",

        // Doctor asks a question to YOU.... then host interrupts

        // Body part
        doctorreactbod: "host clears his throat q1Hey I'm up here.... Don't you know it's rude to talk to someone while staring at their cock! I just need a doctors note so I don't get in trouble at work or something like that.q1 He says rather firmly. The doctor straightens up and seems distressed... Looking back down to you then up at host. q1Oh right... right. Sorry about that sir. Umm I think we should conduct some tests first and make sure everything is working fine. How did this happen?q1 he asks",

        // Possession
        doctorreactpos: "host clears his throat q1Hey I'm up here.... Don't you know it's rude to talk to someone while staring at their cock! Hehe though I don't blame you, super lucky to have a cock that practically begs to be a part of me!q1 He says with a smile. The doctor straightens up and seems distressed... Looking back down to you then up at host. q1Oh right... right. Sorry about that sir. Umm I think we should conduct some tests first and make sure everything is working fine. How did this happen?q1 he asks",

        // Pet
        doctorreactpet: "host snickers. q1Hehe, he use to be a random hookup. Now he's just happy to live in my sheath. I take good care of him, play with him when he wants. Kind of like having a pet penis now really.q1 He says with a smile. The doctor straightens up and seems distressed... Looking back down to you then up at host. q1Hmm, I see. Well both of you seem in good spirits. Umm I think we should conduct some tests first and make sure everything is working fine. How did this happen?q1 he asks",

        // Friend
        doctorreactf: "host snickers. q1Hehe, he use to be a random hookup. I mean he still is. We have an understanding though, sort of like a really close roommate. I mean, I am sort of in charge of things obviously, but he's very happy to ne my cockq1 He says with a smile. The doctor straightens up and seems relieved... Looking back down to you then up at host. q1Hmm, I see... Well, both of you seem in good spirits so uhm.. I guess we should just go ahead and conduct some tests first and make sure everything's working fine. If I may ask.. how did this happen?q1 he says with a puzzled look on his face",

        // UNMERGED FROM HOST.... then begged him to let you back into his sheath!
        esbeg: "q1Hey now, you just got turned back into a person again. Give yourself some time before we talk about making you mine again, alright?q1",

        // Placeholder 
        ph: "",

        scenes: {

            "greet": {
                scene1: [
                    // Scene text
                    "q1Hey there you need something?q1 host asks as you look him over. The ache from your behind is immense, the taste of cum in your mouth constantly reminding you of what you want... q1Uhm.. are you alright?q1 He asks, noticing your gaze slowly sliding down towards his crotch",

                    // First button
                    "Start with small talk and apologize for the staring", 2, // Will go to this scene

                    // Second button
                    "Respond and excuse yourself", 5, // Will go to this scene (0 means leaving)

                ],
                scene2: [
                    "You look away and apologize for staring. You've never seen a white wolf, let alone one this big and the large bulge in his pants is just so tempting. He laughs at that q1Heh I get that sometimes. Most people are too intimidated by it though to actually go through with it. You think you can handle this?q1 He says while grabbing his bulge, fully expecting you to back out now", //scene text
                    "Offer to ride that rocket to the stars", 3, // Will go to this scene
                    "N-no thanks, sir. I don't think I could take you on.. even if I wanted to you're very uhm... gifted down there", 4 // Will go to this scene
                ],

                scene3: [
                    "His eyes widen before his face turns to a smirk. q1You really sure about this? Huh. I'm not one to stop the adventurous... and I haven't had a good fling in a while...q1 He says. Eventually you get him chatting a bit more before he offers to take you to his place. ",
                    "(skip to waking up after sex sorry!)", -1, /* -1 sends them to waking up in the morning as a cock. */
                    "Test lol", -2
                ],
                scene4: [
                    "He gives you a nod, noticing the fear in your eyes. q1Sir, eh? Heh, no worries kiddo. But on the off chance you eventually decide to change your mind, I suggest you should get a big canine dildo and get some practice in. You'd probably be ready for the real thing in no time! Anyways.. see you around..q1 he says, walking away while waving a hand.",
                    "Leave", 0 // Sends them to scene 5 (or any number)
                    // Only 1 option in this one. can be one or two options
                ],
                scene5: [
                    "As you walk away from him, you barely hear him say q1Huh, what an odd dude....q1 before you're completely out of earshot",
                    "Take your leave", 0
                ]

                //--// Scene References //--//
                // 0 Leaves scene, as if canceling it
                // 1 Moves to next scene, amount of choices is optional
                // 2
                // -1 Natural end of scene
                // -2 Enters ultimate control

            },

            // For the adventurous. Uncomment the section of your choosing to activate it.

            "masturbate": { // Replaces Masturbation Scene
                scene1: [
                    "bruh",
                    "AAAAAA", -1
                ]
            },

            // "wakehim": {
            //     scene1: [
            //         "bruh",
            //         "AAAAAA", -1
            //     ]
            // },

            // "bathroom": { // Replaces Morning Bathroom Scene
            //     scene1: [
            //         "*pisses into cup and uses syringe to force piss back into you uwu*",
            //         "uwu am throbbing <3", -1,
            //         "AAAAA", 1,
            //         "bruh", 2
            //     ],
            //     scene2: [,
            //         "*owo*",
            //         "REEEEEEE", -1,
            //         "fun", -2,
            //         "AAAAA", -1,

            //     ]
            // },

            // "bathroom2": { // Replaces Morning Bathroom Scene
            //     scene1: [
            //         "*pisses into cup and uses syringe to force piss back into you uwu*",
            //         "uwu am throbbing <3", -1,
            //         "AAAAA", 1,
            //         "bruh", 2
            //     ],
            //     scene2: [,
            //         "*owo*",
            //         "REEEEEEE", -1,
            //         "fun", -2,
            //         "AAAAA", -1,

            //     ]
            // },

            // "bathroomalt": { // Replaces Morning Bathroom Scene
            //     scene1: [
            //         "*pisses into cup and uses syringe to force piss back into you uwu*",
            //         "uwu am throbbing <3", -1,
            //         "AAAAA", 1,
            //         "bruh", 2
            //     ],
            //     scene2: [,
            //         "*owo*",
            //         "REEEEEEE", -1,
            //         "fun", -2,
            //         "AAAAA", -1,

            //     ]
            // },

            // "midday": { // Replaces Restaurant Scene
            //     scene1: [
            //         "bruh",
            //         "AAAAAA", -1
            //     ]
            // }

        },

        //------------------------------------------------------------------------------------------------------//
        //--------------------------// DON'T WORRY ABOUT ANYTHING BELOW THIS POINT! //--------------------------//
        //------------------------------------------------------------------------------------------------------//

        sender: "hostwork", // Used for sending to work on rarework. Hostwork is generic
        host: hostname,
        known: false,
        hhlow: "I mean, other than acting like a literal dick. How about you relax a bit? Just go with the flow and enjoy yourself for a while. Besides, it's weird talking to my own cock so often.",
        mem: [],

        //---------------------------------------------------------------------------//
        //--------------------------// UNLIMITED CONTROL //--------------------------//
        //--------------------------//     RAW Xundum    //--------------------------//
        //--------------------------// Optional Section! //--------------------------//
        //--------------------------// I can't help you! //--------------------------//
        //--------------------------//     Good luck     //--------------------------//
        //---------------------------------------------------------------------------//


        usethissection: false,
        situation: {
            [hostname + "control"]: new undum.SimpleSituation(
                "", {
                    heading: "Well fuck lol",
                    actions: {
                        "greet": function(character, system, action) {
                            window.globalacceschr = character;
                            window.system = system;
                            window.undum.game = undum.game;
                            console.log("A",window.globalacceschr,window.system);
                            transer();
                            parer("This is a test!");
                            parer("Well, well, well! It seems that you've enabled the UCS, I hope you know what you're doing!");
                            console.log("Well, well, well! It seems that you've enabled the UCS, I hope you know what you're doing!");
                            oper(system, "newhome/sleep", "Sleep");
                            if (character.sandbox.fname === "Fenrir") {
                                oper(system, "ch2morning/enter", "Continue (Next morning)")
                                // oper(system, "fenrir_custom_debug", "Enter the debug menu");
                                oper(system, "./fenrir_custom_debug", "Enter the custom debug menu")
                                oper(system, "transformation/tfup", "Adds ctf, skips to next morning");
                            };
                            // system.setQuality("day", character.qualities.day + 100);
                            // character.qualities.day = 0;
                            // character.qualities.dayofweek = 0;
                            character.qualities.tfstatus = 0;
                            // character.qualities.timeofday = 0;
                            // system.setQuality("essence", character.qualities.essence += 9000000);
                            // character.qualities.essence = 9000000;
                            character.qualities.ttcost = 0;
                            // system.setQuality("ctf", character.qualities.ctf + 100);
                            // system.setQuality("currency", character.qualities.currency + 180462);
                            // character.sandbox.gooutcount = 7;
                            // character.sandbox.perma = true;
                            // character.qualities.currency = 180000;
                            // character.qualities.ctf = 20;
                            // character.qualities.harmony = 50;
                            // character.qualities.sus = 0;
                            // character.qualities.dignitylost = 0;
                            // character.sandbox.pissaddiction = 0;
                            // character.sandbox.permatalk = true;
                            // character.sandbox.permalock = true;
                            // character.sandbox.toys.cage = true;
                            // character.sandbox.toys.vibe2 = true;
                            // character.sandbox.toys.bondage = true;
                            // character.sandbox.toys.condoms = true;
                            // character.sandbox.toys.fakering = true;
                            // character.sandbox.toys.pill = true;
                            // character.sandbox.toys.ring = true;
                            character.sandbox.controlprog = 2;
                            character.sandbox.controlruneaccess = true;

                            // Custom Rune
                            var flips = ["merge", "unmerge", "arms", "stability", "head", "horny", "fullmerge"];
                            var noflips = ["breaking", "reversion", "feedback", "thoughts", "equalize","revert"];

                            var randrunesR = [
                                [16, 20, 18, 24, 7, 2], // Flips and not the same
                                [3, 1, 17, 21, 23, 4, 0, 5, 9, 22],
                                [23, 18, 19, 24, 21, 16, 15, 20, 7, 2],
                                [11, 13, 17, 5, 9, 2],
                                [10, 6, 14, 8, 2, 0, 4, 11, 13],
                                [11, 10, 13, 14, 1, 3, 22],
                                [1, 5, 0, 17, 13, 18, 22, 14]
                            ];

                            var randrunesN = [
                                [11, 13, 4, 20, 24, 0, 17, 7], // Flipable and is the same
                                [16, 7, 17, 18, 6, 8, 14, 10],
                                [9, 23, 21, 15, 5, 1, 3, 19],
                                [10, 14, 22, 2, 18, 8, 16, 6],
                                [20, 21, 15, 5, 0, 1, 3, 4, 9, 19, 24, 23],
                                [17, 23, 11, 7, 3, 10, 24, 4],
                                [6, 8, 16, 18, 21, 3, 1, 23, 17, 7]
                            ];

                            character.sandbox.runearchivedesc = {
                                control: "Allows for mental connection and control of other runes",
                                horse: "Embrace the shape of the mighty stallion!",
                                genderbender: "Turns everyone female! Or... at least feminine.... How? Why!?",
                                unmerge: "Will reduce the amount of transformation",
                                merge: "Will boost the amount of transformation", // Swappable
                                breaking: "Is very dangerous, accidental activation could cause a disastrous overload", // Activate once
                                reversion: "When activated at just the right time could completely reverse the transformation", // Activatable
                                arms: "Causes any transformation to prioritize transforming your arms, but it will force your head to return first", // Swappable
                                head: "Causes any transformation to prioritize transforming your head back first", // Swappable
                                feedback: "Unwise to activate as it would dump all essence currently contained", // Activate once
                                thoughts: "Activates a connection between two people, lasts for a long while then needs refreshing.", // Activate once
                                stability: "Free or merge the ring with yourself.",
                                equalize: "Causes the transformation to settle into a perfectly middle state",
                                horny: "Causes a massive increase in sex drive",
                                fullmerge: "Instantly causes you to fully merge with your host",
                                revert: "Will revert you to 20% CTF"
                            };

                            character.sandbox.runearchivelist = {
                                // Control: [18, 22, 16, 6, 2, 8],
                                unmerge: [],
                                merge: [], // Swappable
                                breaking: [], // Activate once
                                reversion: [], // Activatable
                                arms: [], // Swappable
                                head: [], // Swappable
                                feedback: [], // Activate once
                                thoughts: [], // Activate once
                                equalize: [], // Activate once
                                stability: [],
                                horny: [], // Swappable 
                                fullmerge: [],
                                revert: []
                            };

                            var runey = character.sandbox.runearchivelist;

                            var xyz;
                            var grabarune;
                            var therune;

                            for (xyz in flips) {
                                grabarune = rnd(randrunesR.length);
                                therune = randrunesR[grabarune - 1];
                                randrunesR.splice(grabarune - 1, 1);
                                runey[flips[xyz]] = (therune);
                            }

                            for (xyz in noflips) {
                                grabarune = rnd(randrunesN.length);
                                therune = randrunesN[grabarune - 1];
                                randrunesN.splice(grabarune - 1, 1);
                                runey[noflips[xyz]] = (therune);
                            }

                            console.log("All currently available to use runes:",runey);
                            character.sandbox.runearchivelist.horse = [5, 10, 15, 20, 1, 2, 3, 9, 14, 19, 24, 8, 6];
                            character.sandbox.runearchivelist.feline = [2, 9, 7, 17, 23, 22, 16, 18, 21, 4, 0, 5, 24, 20];
                            character.sandbox.runearchivelist.canine = [16, 17, 18, 11, 22, 13, 2, 7];
                            character.sandbox.runearchivelist.reptile = [9, 14, 7, 2, 4, 0, 5, 10, 15, 19];
                            character.sandbox.runeholder = Object.keys(character.sandbox.runearchivelist);
                            // cat maybe? 2,9,7,17,23,22,16,18,21,4,0,5,24,20
                            // canine 16,17,18,11,22,13,2,7
                            // raptor 9,14,7,2,4,0,5,10,15,19
                            // human 22,17,16,18,2,7,13,8,3,11,6,10,1,5
                            character.sandbox.runearchivelist.genderbender = [13, 11, 22, 0, 4, 7, 6, 8, 18, 16, 17];
                            character.sandbox.runearchivelist.control = [18, 22, 16, 6, 2, 8];

                            // Gives player all runes

                            var statleng = character.sandbox.runeholder.length + 1;
                            for (let i = 0; i < statleng; i++) {
                                if (character.sandbox.runeholder.length != 0) {
                                    grabarune = rnd(character.sandbox.runeholder.length);
                                    therune = character.sandbox.runeholder[grabarune - 1];
                                    character.sandbox.runeholder.splice(grabarune - 1, 1);
                                    character.sandbox.runeknown.push(therune);
                                }
                            }

                        }, // End of function
                        "masturbate": function(character, system, action) {
                            transer("lol");
                            parer("Ultimate control masturbate");

                        }, // End of function

                        "fenrir_custom_debug": function(character, system, action) {
                            transer();
                            parer("<h1 class='transient'>Fenrir's Custom Debug Menu</h1><br>");
                            $("#save").attr('disabled', false);
                            character.sandbox.saveloc = "fenrircontrol/fenrir_custom_debug";
                            character.sandbox.debugrun = false;
                            character.qualities.day = 20;
                            spark = true;
                            
                            oper(system, "./raptor", "Clever girl", "./horny", "Horny", "./clothed", "Fuck clothing");
                            oper(system, "./magic", "Magic", "./dbspecies", "Player Species", "./partest", "Some words");
                            oper(system, "./timejumper", "Jump ahead a day", "./timejumper2", "jump ahead 4 days");
                            oper(system, "./hachart", "Harmonizations", "./tfery", "Transformations", "./blinky", "SUBLIMINAL!");
                            oper(system, "./checkrunes", "Check runes", "./arttest", "SHalonify!", "./next", "Next sprite");
                            oper(system, "./debug", "Try out the old curse debugger", "runemenuy/runemenu", "Time for runes!");
                            // oper(system, "./tfup5", "CTF up 5", "./tfdown5", "CTF down 5");
                            // oper(system, "./tfup100", "CTF 100", "./tfdown20", "CTF 20");
                            oper(system, "./linkery", "Beam me up!", "./ch2skiper", "Return to chapter 2!");
                            
                            // oper(system, "./debugmark", "Mark", "./debugkeagen", "Keagen", "./debugbret", "Bret");
                            oper(system, "./chbg","Host Backgrounds", "./ctype", "Cock Type")

                            oper(system, "./hostchoosy", "Select Previous Chapter 1 Host");
                            oper(system, "./plrname", "Change Player Name");
                            oper(system, "./ret2c1", "Return to Chapter 1");
                            oper(system, "./greet", "Return");
                        }, //function close

                        "plrname": function (character, system, action) {
                            // parer("<p>Standing there is a wolf taur carrying a rather\
                            // large box strapped on his back.</p><p>q1Oh... sorry to have woken you... I just need your signature for\
                            // this box.q1 he says noticing your lack of pants.</p><p>");

                            var hostholder = "";
                            var xhostholder = "";
                            for(hostholder in undum.game.newhosts.names){
                                xhostholder = undum.game.newhosts.names[hostholder];
                                character.nh[xhostholder] = new protohost();

                                for(let med in undum.game.newhosts[xhostholder]){
                                    try {
                                        character.nh[xhostholder][med] = undum.game.newhosts[xhostholder][med];
                                        ///bob[med]=xhostholder[med];
                                    } catch (e) {
                                        console.log("You dolt!!!! " + e + " Is not a variable I use!!!");
                                    } 
                                }
                                character.sandbox.newhostnames=undum.game.newhosts.names;
                            }
                            // character.sandbox.fname = "Dick";
                            // Get player name

                            // parer("<h1 class='transient'>Sign for the package</h1><br><br><br>");
                            parer("<h1 class='transient'>Change Player Name</h1><br><br><br>");
                            parer("Current name is: " + character.sandbox.fname);
                            system.write(' <input class="transient" value="Dick" style="text-align:center" type="text" id="txt_name" autofocus=true /><br><br><br><br>');
                            // oper(system, "./grrrr", "Sign for the package");
                            spark=true;
                            oper(system,"./grrrr", "Continue");
                            // oper(system, "./cccanine", "Canine", "./ccfeline", "Feline");
                            // oper(system, "./ccbird", "Bird","./cchuman", "Human", "./ccscalie", "Dragon");
                        }, //function close


                        "grrrr": function (character, system, action) {
                            clother();
                            if (undum.isInteractive()) {
                                var bla = $('#txt_name').val();
                                // Set player name
                                $('#txt_name').val(bla);
                                var pname = bla;
                                transer();
                                //pname = (prompt("What is your first name?"));
                                if (false == (pname == "" || pname == null)) {
                                    console.log("name is " + character.sandbox.fname + pname);
                                    character.sandbox.fname = (strip(pname));
                                    console.log("name is " + character.sandbox.fname + pname);
                                }
                                // character.sandbox.fname = "Dick";
                                // pname = (prompt("Sign your name"));
                                // console.log("name is " + character.sandbox.fname + pname);
                                // if (false == (pname == "" || pname == null)) {
                                //     character.sandbox.fname = (strip(pname));
                                //     console.log("name is " + character.sandbox.fname + pname);
                                // };
                            } else {
                                //first test of the xeyvars
                                character.sandbox.fname = system.xeyvars[0];
                                character.sandbox.xeyvarnum++;
                                console.log("name is but non interactive " + character.sandbox.fname);
                            }
                            system.xeyvarcall(character.sandbox.fname);
                            transer();
                            //system.setCharacterText(desc1(character, system));
                            parer("Player name is now: " + character.sandbox.fname);
                            parer("Example texts: ");
                            parer("Hi there '" + character.sandbox.fname + "'!");
                            parer("He examines the clipboard making sure everything is in order.\
                                Alright, everything seems ok, '" + character.sandbox.fname + "'.\
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
                            // parer("<a href='./debug' >debugger</a>");
                            if (character.sandbox.fname == "Lingus"){
                                oper(system, "./fenrir_custom_debug", "Enter the debugger");
                            };
                            if (character.sandbox.fname == "Dingle"){
                                // var grabarune;
                                // var therune;
                                // var statleng=character.sandbox.runeholder.length+1;
                                // for (let i = 0; i < statleng; i++) {
                                //     if(character.sandbox.runeholder.length!=0){
                                //         grabarune=rnd(character.sandbox.runeholder.length);
                                //         therune= character.sandbox.runeholder[grabarune-1];
                                //         character.sandbox.runeholder.splice(grabarune-1,1);
                                //         character.sandbox.runeknown.push(therune);
                                //     }
                                // } //                                  

                            };
                            clother();
                            // oper(system, "./ch2skip", "(SKIP TO CHAPTER 2)");
                            spark=true;
                            // oper(system, "./opening", "Just open it now","./examine","Examine the package");
                            oper(system,"./fenrir_custom_debug", "Return to debug menu");
                        },

                        "ch2skiper": function(character, system, action) {
                            transer();
                            // character.sandbox.pasthost = "will";
                            // character.sandbox.activenh = "will";
                            var nh = character.nh[character.sandbox.activenh];
                            try {
                                character.sandbox.currenthostparse = nh.parse;

                                character.sandbox.scenerexit = "newhostpicked/enter";
                                character.sandbox.host = character.nh[character.sandbox.activenh];
                                character.host = character.nh[character.sandbox.activenh];
                                character.sandbox.headingholder = character.sandbox.activenh;
                                character.sandbox.curhost = character.sandbox.chost;

                            } catch (e) {

                            }


                            console.log("================ intro WHY! " + character.host.host);

                            system.doLink("ch2home/night");
                        }, //function close



                        "hostchoosy": function (character, system, action) {
                            transer();
                            parer("<h1 class='transient'>Chapter 1 Host Selector</h1><br>");
                            parer("Whose cock do you remember being?");
                            oper(system, "./hckeagen", "Keagen","./hcmark","Mark","./hcbret","Bret");
                        }, //function close
                        "hckeagen": function (character, system, action) {
                            transer();
                            character.sandbox.pasthost="keagen";
                            system.doLink("./fenrir_custom_debug");
                        }, //function close
                        "hcmark": function (character, system, action) {
                            transer();
                            character.sandbox.pasthost="mark";
                            system.doLink("./fenrir_custom_debug");
                        },
                        "hcbret": function (character, system, action) {
                            transer();
                            character.sandbox.pasthost="bret";
                            system.doLink("./fenrir_custom_debug");
                        },


                        

                        

                        "ret2c1": function(character, system, action) {
                            system.setQuality("essence", character.qualities.essence + 9000000);
                            character.sandbox.ch2 = false;
                            system.doLink("firstday/entery");
                        }, //function close
                        "partest": function(character, system, action) {
                            character.sandbox.genderismale = false;
                            character.sandbox.girl = true;
                            character.sandbox.internalballs = true;
                            parer("so he said, so h#e said and my ball#s balls bal#ls");

                        }, //function close



                        "ctype": function (character, system, action) {
                            transer();
                            parer("<h1 class='transient'>Cock Type</h1><br>");
                            oper(system, "./hcock", "Horse", "./ccock", "Canine", "./rcock", "Raptor");
                            oper(system, "./fcock", "Feline", "./hucock", "Humanoid");
                            oper(system,"./fenrir_custom_debug", "Return to debug menu");
                        }, //function close
                        "hcock": function(character, system, action) {
                            character.sandbox.cocktype = "horse";
                            character.sandbox.host.cocktype = "horse";
                            clother();
                        }, //function close
                        "fcock": function(character, system, action) {
                            character.sandbox.cocktype = "feline";
                            clother();
                        }, //function close
                        "hucock": function(character, system, action) {
                            character.sandbox.cocktype = "human";
                            clother();
                        }, //function close
                        "ccock": function(character, system, action) {
                            character.sandbox.cocktype = "knot";
                            clother();
                        }, //function close
                        "rcock": function(character, system, action) {
                            character.sandbox.cocktype = "reptile";
                            clother();
                        }, //function close



                        "chbg": function (character, system, action) {
                            transer();
                            parer("<h1 class='transient'>Host Backgrounds</h1><br>");
                            oper(system, "./lynxy", "Lynx","./wolfy","Wolf","./foxy","Fox");
                            oper(system, "./hoss", "Horse", "./liony", "Lion", "./rar", "Raptor", "./rooy", "Kangaroo");
                            oper(system,"./fenrir_custom_debug", "Return to debug menu");
                        }, //function close
                        "wolfy": function(character, system, action) {
                            character.sandbox.host.defaulthostbackground = "bret";
                            clother();
                        }, //function close
                        "rooy": function(character, system, action) {
                            character.sandbox.host.defaulthostbackground = "keagen";
                            //character.sandbox.currenthostparse = character.sandbox.keagenparse;
                            clother();
                        }, //function close
                        "foxy": function(character, system, action) {
                            character.sandbox.host.defaulthostbackground = "mark";
                            //character.sandbox.currenthostparse = character.sandbox.markparse;
                            clother();
                        }, //function close
                        "lynxy": function(character, system, action) {
                            character.sandbox.host.defaulthostbackground = "lynx";
                            clother();
                        }, //function close
                        "rar": function(character, system, action) {
                            character.sandbox.host.defaulthostbackground = "leika";
                            clother();
                        }, //function close
                        "hoss": function(character, system, action) {
                            character.sandbox.host.defaulthostbackground = "hoss";
                            clother();
                        }, //function close
                        "liony": function(character, system, action) {
                            character.sandbox.host.defaulthostbackground = "lion";
                            clother();
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
                            var nh = character.nh["ravel"];
                            character.sandbox.currenthostparse = nh.parse;
                            character.sandbox.ch2 = true;
                            character.sandbox.scenerexit = "newhostpicked/enter";
                            character.sandbox.host = character.nh["ravel"];
                            character.host = character.nh["ravel"];
                            character.sandbox.headingholder = "ravel";
                            character.sandbox.curhost = character.host.chost;
                            if (character.sandbox.host.defaulthostbackground == "lizard") {
                                character.sandbox.host.defaulthostbackground = "mark";

                            } else {

                                character.sandbox.host.defaulthostbackground = "lizard";
                            }

                            clother();
                        }, //function close



                        // "esup2": function (character, system, action) {
                        //     parer("<h1 class='transient'>Change Essence Ammount</h1><br><br><br>");
                        //     parer("Current amount of essence is: " + character.qualities.essence);
                        //     system.write(' <input class="transient" value="0" style="text-align:center" type="text" id="txt_name" autofocus=true /><br><br><br><br>');
                        //     spark=true;
                        //     oper(system,"./esup22", "Continue");
                        // }, //function close
                        // "esup22": function (character, system, action) {
                        //     if (undum.isInteractive()) {
                        //         var bla = $('#txt_name').val();
                        //         $('#txt_name').val(bla);
                        //         var newessence = bla;
                        //         system.setQuality("essence", character.qualities.essence + newessence);
                        //         transer();
                        //     } else {
                        //         var bla = $('#txt_name').val();
                        //         $('#txt_name').val(bla);
                        //         var newessence = bla;
                        //         system.setQuality("essence", character.qualities.essence + newessence);
                        //         transer();
                        //     }
                        //     parer("Player essence is now: " + character.qualities.essence);
                        //     oper(system,"./tfery", "Return to transformations menu");
                        // },
                        // "esdown2": function (character, system, action) {
                        //     parer("<h1 class='transient'>Change Essence Ammount</h1><br><br><br>");
                        //     parer("Current amount of essence is: " + character.qualities.essence);
                        //     system.write(' <input class="transient" value="0" style="text-align:center" type="text" id="txt_name" autofocus=true /><br><br><br><br>');
                        //     spark=true;
                        //     oper(system,"./esdown22", "Continue");
                        // }, //function close
                        // "esdown22": function (character, system, action) {
                        //     if (undum.isInteractive()) {
                        //         var bla = $('#txt_name').val();
                        //         $('#txt_name').val(bla);
                        //         var newessence = bla;
                        //         system.setQuality("essence", character.qualities.essence - newessence);
                        //         transer();
                        //     } else {
                        //         var bla = $('#txt_name').val();
                        //         $('#txt_name').val(bla);
                        //         var newessence = bla;
                        //         system.setQuality("essence", character.qualities.essence - newessence);
                        //         transer();
                        //     }
                        //     parer("Player essence is now: " + character.qualities.essence);
                        //     oper(system,"./tfery", "Return to transformations menu");
                        // },

                        // "ctfup2": function (character, system, action) {
                        //     parer("<h1 class='transient'>Change Essence Ammount</h1><br><br><br>");
                        //     parer("Current amount of ctf is: " + character.qualities.ctf);
                        //     system.write(' <input class="transient" value="" style="text-align:center" type="text" id="txt_name" autofocus=true /><br><br><br><br>');       
                        //     spark=true;
                        //     oper(system,"./ctfup22", "Continue");
                        // }, //function close
                        
                        // "ctfup22": function (character, system, action) {
                        //     if (undum.isInteractive()) {
                        //         var blau = $('#txt_name').val();
                        //         $('#txt_name').val("");
                        //         var newctfu = blau;
                        //         system.setQuality("ctf", newctfu);
                        //         transer();
                        //     } else {
                        //         transer();
                        //     }
                        //     clother();
                        //     parer("Player ctf is now: " + character.qualities.ctf);
                        //     oper(system,"./tfery", "Return to transformations menu");
                        // },
                        
                        // "ctfdown2": function (character, system, action) {
                        //     parer("<h1 class='transient'>Change Essence Ammount</h1><br><br><br>");
                        //     parer("Current amount of ctf is: " + character.qualities.ctf);
                        //     system.write(' <input class="transient" value="" style="text-align:center" type="text" id="txt_name" autofocus=true /><br><br><br><br>');
                        //     spark=true;
                        //     oper(system,"./ctfdown22", "Continue");
                        // }, //function close
                        
                        // "ctfdown22": function (character, system, action) {
                        //     if (undum.isInteractive()) {
                        //         var blad = $('#txt_name').val(); // set to empty string if value is undefined or null
                        //         $('#txt_name').val("");
                        //         var newctfd = -Math.abs(parseFloat(blad));
                        //         system.setQuality("ctf", -Math.abs(parseFloat(blad)));
                                
                        //     } else {
                        //         var blad = $('#txt_name').val() || ""; // set to empty string if value is undefined or null
                        //         system.setQuality("ctf", -Math.abs(parseFloat(blad)));
                        //     }
                        //     transer();
                        //     clother();
                        //     parer("Player ctf is now: " + character.qualities.ctf);
                        //     oper(system, "./tfery", "Return to transformations menu");
                        // },

                        "tfery": function(character, system, action) {
                            transer();
                            parer("<h1 class='transient'>Transformations</h1><br>");
                            character.sandbox.debugrun = true;
                            spark = true;
                            oper(system, "./susup", "Sus up", "./susdown", "sus down");
                            spark = true;
                            //oper(system, "./esup2", "Add Essence", "./esdown2", "Remove Essence");
                            
                            oper(system, "./esup", "Essence up", "./esdown", "Essence down", "./runeon", "rune access");
                            //oper(system, "./ctfup2", "Add CTF", "./ctfdown2", "Remove CTF");
                            oper(system, "./tfup5", "CTF up 5", "./tfdown5", "CTF down 5");
                            oper(system, "./tfup100", "CTF 100", "./tfdown20", "CTF 20");

                            // oper(system, "./", "encourage tf up");
                            oper(system, "./fenrir_custom_debug", "Return to debug menu", "transformation", "To night transformation");
                        }, //function close




                        "susup": function(character, system, action) {
                            system.setQuality("sus", character.qualities.sus - 1);
                            console.log("sus is now " + character.qualities.sus);
                        }, //function close
                        "susdown": function(character, system, action) {
                            system.setQuality("sus", character.qualities.sus + 1);
                            console.log("sus is now " + character.qualities.sus);
                        }, //function close
                        


                        "dbspecies": function(character, system, action) {
                            transer();
                            parer("<h1 class='transient'>Player Species</h1><br>");
                            oper(system, "./fenrir_custom_debug", "Return to debug menu");
                            oper(system, "./dbhuman", "Human", "./dbbird", "Bird", "./dbscalie", "Dragon");
                            oper(system, "./dbfeline", "Feline", "./dbcanine", "Canine");
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
                            character.sandbox.host = character.nh["ravel"];
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
                            parer("<h1 class='transient'>Harmonization</h1><br>");
                            system.setQuality("dignitylost", 50);
                            //          system.write('<svg viewBox="0 0 50 50" width="50%" height="50%"><defs>\
                            //<linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="50%" spreadMethod="pad"><stop offset="0%" stop-color="red" stop-opacity="1"></stop><stop offset="50%" stop-color="white" stop-opacity="1"></stop><stop offset="100%" stop-opacity="1" stop-color="grey"></stop></linearGradient></defs><g><rect x="0" y="0" width="100%" height="60" style="fill: url(&quot;#gradient2&quot;);"><circle cx="'+character.qualities.harmony+'" cy="'+character.qualities.dignitylost+'" r="2"></circle></g><g><text class="svgtext" y="6" x="1">Horny</text></g><g><text text-anchor="end" class="svgtext" style="text-anchor: end;" y="6" x="99">Bored</text></g></svg>');

                            oper(system, "./lusttestup", "Lust up", "./lusttestdown", "Lest down", "./lusttestnow", "WTF is wrong");
                            oper(system, "./hartestup", "Harmony up", "./hartestdown", "Harmony down");
                            oper(system, "./obtestup", "Accept", "./obtestdown", "Resist");
                            oper(system, "./fenrir_custom_debug", "Return to debug menu");
                        }, //function close
                        "hartestup": function(character, system, action) {
                            system.setQuality("harmony", character.qualities.harmony + 5);
                        }, //function close
                        "hartestdown": function(character, system, action) {
                            system.setQuality("harmony", character.qualities.harmony - 5);

                        }, //function close
                        "lusttestup": function(character, system, action) {
                            system.setQuality("lust", character.qualities.lust + 5);
                        }, //function close
                        "lusttestdown": function(character, system, action) {
                            console.log("working? " + character.qualities.lust);
                            system.setQuality("lust", character.qualities.lust - 5);
                        }, //function close
                        "lusttestnow": function(character, system, action) {
                            console.log("working? " + character.qualities.lust);
                            system.setQuality("lust", 20);
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
                            //                character.sandbox.perma=true;
                            //                character.sandbox.partial=true;
                            //                character.sandbox.rewardask=true;
                            // character.sandbox.perma=true;
                            //system.setQuality("ctf",100 );
                            //system.setQuality("harmony",character.qualities.harmony+5 );
                            //character.sandbox.ring=false;
                            //character.sandbox.limits.cantalk=false;
                            //   system.doLink("transformation/runeactions");
                            //system.doLink("morning/preenter");
                            //system.doLink("ch2/fiddler");
                            //system.doLink("masturbate/vibe");
                            oper(system, "./", "");
                            oper(system, "adult/toys", "TOY TEST");
                            oper(system, "pissadmit", "pissadmit");
                            oper(system, "masturbate/punishment2", "Punishment2");
                            oper(system, "sex/hostrespond", "host respond");
                            oper(system, "masturbate/toypick", "Toypick");
                            oper(system, "transformation/preloadrune", "WHY XANO YOU BREAK ME STUFF!", "weekend/permatalk", "a long talk");
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
                            oper(system, "./displaytest", "Display the control rune", "./remrune", "Remember the control rune");
                            oper(system, "./crazy", "Crazy rune test", "./unknownrune", "Unknown runes", "./scaryrune", "Scary rune test");
                            oper(system, "./addrune", "Add all runes", "./runelook", "Check which runes you know");

                            oper(system, "./fenrir_custom_debug", "Return to debug menu");
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

                            parer("we don't know the runes for " + character.sandbox.runeholder);

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
                        "tfup100": function(character, system, action) {
                            system.setQuality("ctf", 100);

                            system.doLink("./debugtf");
                        }, //function close
                        "tfdown20": function(character, system, action) {
                            system.setQuality("ctf", 20);

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
                            parer("e");
                            oper(system, "", "");
                        }, // End of function

                    } // End of actions

                } // End of options

            ),
            pupstore: new undum.SimpleSituation(
                "", {
                    canView: function (character, system, host) {
                        return (true);
                    },
                    heading: "Pup Store",
                    tags: ["place3"],
                    displayOrder: 4,
                    optionText:function (character, system, from){
                        return "Pup Store" + ch2header(character,"pupstore");
                    },
                    canChoose: function (character, system, host) {
                        return (character.sandbox.wandervar>1);
                    },
                    enter: function (character, system, from) {
                        var placements = function(placement){
                            if (placement === "place") {
                                var derpholder=startlocations.postnpc;
                                if (derpholder[0] != undefined) {
                                    spark=true;
                                    system.write("<p>Also here you see</p>");
                                    oper(system, (derpholder[0])?(derpholder[0]+"/talkto").toLowerCase():undefined,derpholder[0], (derpholder[1])?(derpholder[1]+"/talkto").toLowerCase():undefined,derpholder[1],(derpholder[2])?(derpholder[2]+"/talkto").toLowerCase():undefined,derpholder[2] );
                                };
                                oper(system, "places", "Head back");
                                console.log("Location: '" + placement + "' - Chapter 1");
                            } else {
                                ch2hoster(character, system);
                                oper(system,"./toys", "Look at the sex toys");
                                ch2menuer(character, system);
                            };
                            if (placement === "place2") {
                                console.log("Location: '" + placement + "' - Chapter 2");
                            }
                            if (placement === "place3") {
                                console.log("Location: '" + placement + "' - Chapter 2");
                            }
                        };
                        character.sandbox.ch2loc="pupstore";
                        character.sandbox.ch2beento.push(character.sandbox.ch2loc);
                        document.getElementById("creatorname").innerHTML = "Location Written by<br> " + undum.game.newhosts.fenrir.creator;
                        $("#creatorname").css('display', 'block');
                        parer("Place to purchase pup related goods.");
                        character.sandbox.trainloc=true;
                        character.sandbox.locdeeper=true;

                        parer("Considering your current state of mind, coming here is more like giving in than distracting yourself. You really need to find a new crotch to attach to, or some way to endure these withdrawls! But then again maybe buying a toy or two could help relieve the desperate sensations that are bothering you. The front area has mostly fetish gear while the other room has the sextoys. There's also an unmarked door way in the back. ");
                        //ch2msg(character, system);
                        placements("place3");
                        
                        spark = true;
                        
                        //oper(system,"places4", "Test")
                           //gay pub with dance stage!!!
                           //Enjoy the show
                           //Have a drink
                           //
                    },
                    actions: {
                        "toys": function (character, system, action) {
                            transer();
                            system.setQuality("lust",character.qualities.lust+10 );
                            parer("You have a look at all the wonderfull sex toys. Though most of them you would love to have used on you in a rather different way than others. In fact many of them you might not even have interest in using at all... just hoping to keep them around as a present for your next owner! The idea of him using them.... It might look weird to buy a BUNCH of them all at once...");
                            // var itemlinklist={
                            //     dildo:false,
                            //     plug:false,
                            //     vibe:false,
                            //     milker:false,
                            //     beads:false,
                            //     fleshlight:false,
                            //     penispump:false,
                            //     buttplug:false,
                            //     cage:false
                            // };
                         
                            // var operholderloop;
                         
                         
                            //dildo
                            //plug
                            //vibrator
                            //Milker
                            //beads
                            //fleshlight
                            //penispump
                            //butt plug
                            //chastity cage
                            var listynum=0;
                            var loopwordything=[];
                            var inloopwerd="";
                            loopwordything=[];
                            for (let xd in character.sandbox.itemlinklist) {
                                inloopwerd= xd ;
                                listynum++;
                                console.log("xd is " + xd);
                      
                                if (character.sandbox.itemlinklist[xd]) {
                         
                                    loopwordything.push([false,""]);
                                    console.log("wordything " + loopwordything );
                                } else {
                         
                                    if (inloopwerd=="penispump") {
                                        inloopwerd="penis pump";
                                    }
                                    if (inloopwerd=="vibe") {
                                        inloopwerd="vibrator";
                                    }
                                    if (inloopwerd=="buttplug") {
                                    inloopwerd="butt plug";
                                    }
                                    if (inloopwerd=="plug") {
                                        inloopwerd="penis plug";
                                    }
                                    loopwordything.push(["./"+xd,"Buy the "+inloopwerd]);
                                }
                                if (listynum==3) {
                                    console.log("ugh work damnit " + loopwordything );
                                    oper(system,loopwordything[0][0],loopwordything[0][1],loopwordything[1][0],loopwordything[1][1],loopwordything[2][0],loopwordything[2][1]);
                                    listynum=0;
                                    loopwordything=[];
                                    spark=true;
                                }
                            }
                            //oper(system, character.sandbox.toys.beads, "Sounding beads",character.sandbox.toys.plug,"Penis plug",character.sandbox.toys.vibe,"Cock ring vibrator");   
                            // if (character.sandbox.toys.cage) {
                            //     oper(system, "./nothing", "Don't pick anything",character.sandbox.toys.fleshlight,"Maybe... a fleshlight?");
                            // } else {
                            // oper(system, "./nothing", "Don't pick anything (Chastity Cage)",character.sandbox.toys.fleshlight,"Maybe... a fleshlight?");
                            // }
                            ch2menuer(character,system);
                        }, //function close
                        "vibe": function (character, system, action) {
                            transer();
                            system.setQuality("currency",character.qualities.currency-20 );
                            character.sandbox.itemlinklist[action]=true;
                            parer(" Item bought! Description and usage WIP");
                            ch2menuer(character,system);
                        }, //function close
                        "dildo": function (character, system, action) {
                            transer();
                            system.setQuality("currency",character.qualities.currency-40 );
                            character.sandbox.itemlinklist[action]=true;
                            parer(" Item bought! Description and usage WIP");
                            ch2menuer(character,system);
                        }, //function close
                        "buttplug": function (character, system, action) {
                            transer();
                            system.setQuality("currency",character.qualities.currency-30 );
                            character.sandbox.itemlinklist[action]=true;
                            parer(" Item bought! Description and usage WIP");
                            ch2menuer(character,system);
                        }, //function close
                        "cage": function (character, system, action) {
                            transer();
                            system.setQuality("currency",character.qualities.currency-40);
                            character.sandbox.itemlinklist[action]=true;
                            parer(" Item bought! Description and usage WIP");
                            ch2menuer(character,system);
                        }, //function close
                        "fleshlight": function (character, system, action) {
                            transer();
                            system.setQuality("currency",character.qualities.currency-20 );
                            character.sandbox.itemlinklist[action]=true;
                            parer(" Item bought! Description and usage WIP");
                            ch2menuer(character,system);
                        }, //function close
                        "beads": function (character, system, action) {
                            transer();
                            system.setQuality("currency",character.qualities.currency-20 );
                            character.sandbox.itemlinklist[action]=true;
                            parer(" Item bought! Description and usage WIP");
                            ch2menuer(character,system);
                        }, //function close
                        "plug": function (character, system, action) {
                            transer();
                            system.setQuality("currency",character.qualities.currency-30 );
                            character.sandbox.itemlinklist[action]=true;
                            parer(" Item bought! Description and usage WIP");
                            ch2menuer(character,system);
                        }, //function close
                        "milker": function (character, system, action) {
                            transer();
                            system.setQuality("currency",character.qualities.currency-100 );
                            character.sandbox.itemlinklist[action]=true;
                            parer(" Item bought! Description and usage WIP");
                        ch2menuer(character,system);
                        }, //function close
                        "penispump": function (character, system, action) {
                            transer();
                            system.setQuality("currency",character.qualities.currency-50 );
                            character.sandbox.itemlinklist[action]=true;
                            parer(" Item bought! Description and usage WIP");
                            ch2menuer(character,system);
                        }, //function close

                        "simple": function (character, system, action) {
                            transer();
                            parer("");
                            ch2menuer(character,system);
                        }, //function close
                        "r1": function (character, system, action) {
                            transer();
                            parer("");
                            oper(system, "", "");
                        }    //function close
                    }//actions close
                }
            ),

            // adult: new undum.SimpleSituation(
            //     "", {
            //         heading: "Adult Novelties",
            //         tags: ["place2"],
            //         displayOrder: 4,
            //         optionText: function (character, system, from){
            //             return "Adult Novelties"+ ch2header(character,"adult");
            //         },
            //         enter: function (character, system, from) {
            //             character.sandbox.ch2loc="adult";
            //             character.sandbox.ch2beento.push(character.sandbox.ch2loc);
            //             parer("Considering your current state of mind, coming here is more like giving in than distracting yourself. You really need to find a new crotch to attach to, or some way to endure these withdrawls! But then again maybe buying a toy or two could help relieve the desperate sensations that are bothering you. The front area has mostly fetish gear while the other room has the sextoys. There is also an unmarked door way in the back. ");
            //             //buy sex toys... used to reduce horniness?
            //             //Look at sex toys"./backroom","Head into the back room door"
            //             ch2hoster(character, system);
            //             oper(system,"./toys", "Look at the sex toys");
            //             spark=true;
            //             //ch2menuer(character,system);
            //         },
            //         actions: {
            //            "toys": function (character, system, action) {
            //                 transer();
            //                 system.setQuality("lust",character.qualities.lust+10 );
            //                 parer("You have a look at all the wonderfull sex toys. Though most of them you would love to have used on you in a rather different way than others. In fact many of them you might not even have interest in using at all... just hoping to keep them around as a present for your next owner! The idea of him using them.... It might look weird to buy a BUNCH of them all at once...");
            //                 // var itemlinklist={
            //                 //     dildo:false,
            //                 //     plug:false,
            //                 //     vibe:false,
            //                 //     milker:false,
            //                 //     beads:false,
            //                 //     fleshlight:false,
            //                 //     penispump:false,
            //                 //     buttplug:false,
            //                 //     cage:false
            //                 // };
                         
            //                 // var operholderloop;
                         
                         
            //                 //dildo
            //                 //plug
            //                 //vibrator
            //                 //Milker
            //                 //beads
            //                 //fleshlight
            //                 //penispump
            //                 //butt plug
            //                 //chastity cage
            //                 var listynum=0;
            //                 var loopwordything=[];
            //                 var inloopwerd="";
            //                 loopwordything=[];
            //                 for (let xd in character.sandbox.itemlinklist) {
            //                     inloopwerd= xd ;
            //                     listynum++;
            //                     console.log("xd is " + xd);
                      
            //                     if (character.sandbox.itemlinklist[xd]) {
                         
            //                         loopwordything.push([false,""]);
            //                         console.log("wordything " + loopwordything );
            //                     } else {
                         
            //                         if (inloopwerd=="penispump") {
            //                             inloopwerd="penis pump";
            //                         }
            //                         if (inloopwerd=="vibe") {
            //                             inloopwerd="vibrator";
            //                         }
            //                         if (inloopwerd=="buttplug") {
            //                         inloopwerd="butt plug";
            //                         }
            //                         if (inloopwerd=="plug") {
            //                             inloopwerd="penis plug";
            //                         }
            //                         loopwordything.push(["./"+xd,"Buy the "+inloopwerd]);
            //                     }
            //                     if (listynum==3) {
            //                         console.log("ugh work damnit " + loopwordything );
            //                         oper(system,loopwordything[0][0],loopwordything[0][1],loopwordything[1][0],loopwordything[1][1],loopwordything[2][0],loopwordything[2][1]);
            //                         listynum=0;
            //                         loopwordything=[];
            //                         spark=true;
            //                     }
            //                 }
            //                 //oper(system, character.sandbox.toys.beads, "Sounding beads",character.sandbox.toys.plug,"Penis plug",character.sandbox.toys.vibe,"Cock ring vibrator");   
            //                 // if (character.sandbox.toys.cage) {
            //                 //     oper(system, "./nothing", "Don't pick anything",character.sandbox.toys.fleshlight,"Maybe... a fleshlight?");
            //                 // } else {
            //                 // oper(system, "./nothing", "Don't pick anything (Chastity Cage)",character.sandbox.toys.fleshlight,"Maybe... a fleshlight?");
            //                 // }
            //                 ch2menuer(character,system);
            //             }, //function close
            //             "vibe": function (character, system, action) {
            //                 transer();
            //                 system.setQuality("currency",character.qualities.currency-20 );
            //                 character.sandbox.itemlinklist[action]=true;
            //                 parer(" Item bought! Description and usage WIP");
            //                 ch2menuer(character,system);
            //             }, //function close
            //             "dildo": function (character, system, action) {
            //                 transer();
            //                 system.setQuality("currency",character.qualities.currency-40 );
            //                 character.sandbox.itemlinklist[action]=true;
            //                 parer(" Item bought! Description and usage WIP");
            //                 ch2menuer(character,system);
            //             }, //function close
            //             "buttplug": function (character, system, action) {
            //                 transer();
            //                 system.setQuality("currency",character.qualities.currency-30 );
            //                 character.sandbox.itemlinklist[action]=true;
            //                 parer(" Item bought! Description and usage WIP");
            //                 ch2menuer(character,system);
            //             }, //function close
            //             "cage": function (character, system, action) {
            //                 transer();
            //                 system.setQuality("currency",character.qualities.currency-40);
            //                 character.sandbox.itemlinklist[action]=true;
            //                 parer(" Item bought! Description and usage WIP");
            //                 ch2menuer(character,system);
            //             }, //function close
            //             "fleshlight": function (character, system, action) {
            //                 transer();
            //                 system.setQuality("currency",character.qualities.currency-20 );
            //                 character.sandbox.itemlinklist[action]=true;
            //                 parer(" Item bought! Description and usage WIP");
            //                 ch2menuer(character,system);
            //             }, //function close
            //             "beads": function (character, system, action) {
            //                 transer();
            //                 system.setQuality("currency",character.qualities.currency-20 );
            //                 character.sandbox.itemlinklist[action]=true;
            //                 parer(" Item bought! Description and usage WIP");
            //                 ch2menuer(character,system);
            //             }, //function close
            //             "plug": function (character, system, action) {
            //                 transer();
            //                 system.setQuality("currency",character.qualities.currency-30 );
            //                 character.sandbox.itemlinklist[action]=true;
            //                 parer(" Item bought! Description and usage WIP");
            //                 ch2menuer(character,system);
            //             }, //function close
            //             "milker": function (character, system, action) {
            //                 transer();
            //                 system.setQuality("currency",character.qualities.currency-100 );
            //                 character.sandbox.itemlinklist[action]=true;
            //                 parer(" Item bought! Description and usage WIP");
            //             ch2menuer(character,system);
            //             }, //function close
            //             "penispump": function (character, system, action) {
            //                 transer();
            //                 system.setQuality("currency",character.qualities.currency-50 );
            //                 character.sandbox.itemlinklist[action]=true;
            //                 parer(" Item bought! Description and usage WIP");
            //                 ch2menuer(character,system);
            //             }, //function close
            //             "r1": function (character, system, action) {
            //                 transer();
            //                 parer("");
            //                 oper(system, "", "");
            //             } //function close
            //         }//actions close
            //     }
            // ),

            // pupclub: new undum.SimpleSituation(
            //     "", {
            //         heading: "Pup Club",
            //         tags: ["place3"],
            //         displayOrder: 4,
            //         optionText:function (character, system, from){
            //             return "Pup Club"+ ch2header(character,"pupclub");
            //         },
            //         canChoose: function (character, system, host) {
            //             return (character.sandbox.wandervar>1);
            //         },
            //         enter: function (character, system, from) {
            //             character.sandbox.ch2loc="pupclub";
            //             character.sandbox.trainloc=true;
            //             character.sandbox.locdeeper=true;
            //             character.sandbox.ch2beento.push(character.sandbox.ch2loc);
            //             parer("You wait around till a bit later and end up wandering to a night club. Either you find relief or something to distract you, either way they might have something to drink to calm you down. It's not too packed but you would still end up bumping into people on the dance floor. The lighting is pretty low so it's thankfully hard to get distracted by peoples crotches...");
            //             ch2msg(character, system);
                            
            //             character.sandbox.operholder=[];
            //             //Order a drink (give access to a host)
            //             //dance party! (give access to a host)
            //             //make system to get drunk and then dance for access!
            //             oper(system,"./sitbar","Get a drink","./godance","Get on that dance floor!");
            //             spark=true;
            //             ch2menuer(character,system);
            //         },
            //         actions: {
            //             "sitbar": function (character, system, action) {
            //                 transer();
            //                 character.sandbox.wandervar++;
            //                 system.setQuality("currency",character.qualities.currency- 20);
            //                 parer("You take a seat at the bar and try desperately not to rub your throbbing hole against the seat... Almost instinctively you set some money down on the counter and just get a look from the bartender as he nods. A few moments later he slides a glass toward you with an evil looking drink in it. You take a sip and it is.... strong! He must have noticed how much you needed it....");
            //             oper(system, "./finishdrink", "Finish your drink","./slow","Take it slow");
            //             }, //function close
            //             "finishdrink": function (character, system, action) {
            //                 transer();
            //                 parer("You quickly down the drink not giving it any chance to escape. Your eyes nearly cross as you clench your entire body just like when you were a cock... It doen't take long before the room gets a bit funny feeling...");
            //                 oper(system, "./out", "Haed bak hmoe","./isdrunk","Id Tmie to dnace!");
            //             }, //function close
                
            //             "slow": function (character, system, action) {
            //                 transer();
            //                 parer("You know better than to drink it all at once, instead you spend some time just to enjoy the atmosphere of the club. Listen to the music, enjoy the drink as you slowly feeling your head get tingly. You are feeling pretty good after a while and almost forget all about how much you could really use a cock up your ass. How good it would feel sliding up into you, making you a part of it.... Claiming you as its replacement....");
            //                 parer("You manage to snap out of it and decide it's time to head home before you make a poor decision.");
            //                 oper(system, "./out", "Stand up and head for home");
            //             }, //function close
            //             "godance": function (character, system, action) {
            //                 transer();
            //                 character.sandbox.wandervar++;
            //                 system.setQuality("lust",character.qualities.lust+10 );
            //                 parer("Dancing is usually a fun distracting activity, but not here! Every bump to you makes you shudder hoping it's someones cock teasing you back there. It's just a simple club dance floor but to you its a sea of thrusting hips all teasing you to come play! You try to have some fun dancing but when you catch yourself going for your pants you know it's time to stop! ");
            //                 oper(system, "./out", "Head back home...");
            //             }, //function close
            //             "isdrunk": function (character, system, action) {
            //                 transer();
            //                 parer("This is great! The music the dancing! For the first time in days you are not thinking anything naughty at all. Just enjoying yourself before realizing you have been rubbing your butt against someone for the last minute. You feel a bit embarrassed and end up heading back to the bar to sit down...");
            //                 ch2hoster(character, system);
            //                 ch2menuer(character,system);
            //             }, //function close
            //             "out": function (character, system, action) {
            //                 transer();
            //                 system.setQuality("lust",character.qualities.lust-10 );
            //                 parer("You stumble around a bit but thankfully your place isn't that far of a walk. And after a few minutes to stumbling the buzz starts to fade enough that you are no longer wobbling around. It may have helped some though as your head does feel a bit more at ease. ");    
            //                 ch2menuer(character,system);
            //             }, //function close
            //             "r1": function (character, system, action) {
            //                 transer();
            //                 parer("");
            //                 oper(system, "", "");
            //             } //function close
            //         }//actions close
            //     }   
            // ),

            // examplelocationtemplate: new undum.SimpleSituation(
            //     "", {

            //         // Allows location to be seen
            //         canView: function (character, system, host) {
            //             return (true);
            //         },

            //         // This what is displayed at the top of the initial location menu.
            //         heading: "Example Location",

            //         // This places the location at different areas of the map
            //         /*
            //          * Chapter 1

            //          * place - Locations found in the first chapter
                    
            //          * Chapter 2
                    
            //          * place2 - Locations found in the second chapter, after the bus
            //          * place3 - Locations found in the second chapter, after the train
            //          */

            //         tags: ["place3"],

            //         // The order they are displayed in
            //         displayOrder: 4,

            //         optionText: function (character, system, from){
            //             return "Example Location" + ch2header(character,"exampleplacename");
            //         }, // End of function
            //         canChoose: function (character, system, host) {
            //             return (character.sandbox.wandervar>1);
            //         }, // End of function
            //         enter: function (character, system, from) {
            //             character.sandbox.ch2loc="exampleplacename";

            //             // Adds it to a list of places you visited
            //             character.sandbox.ch2beento.push(character.sandbox.ch2loc);

            //             // Initial description
            //             parer("An example template for a location.");

            //             // If the location is after the train
            //             character.sandbox.trainloc = true;

            //             // If the location opens later in the day
            //             character.sandbox.locdeeper = true;

            //             // A message that shows either messages of being in heat,
            //             // or the feeling of being your previous host's genitals
            //             ch2msg(character, system);

            //             // Selects hosts to display
            //             ch2hoster(character, system);

            //             // Options to either leave or wander around
            //             ch2menuer(character, system);
            //         }, // End of function
            //         actions: {
            //             "simple": function (character, system, action) {
            //                 transer();
            //                 parer("");
            //                 ch2menuer(character,system);
            //             }, // End of function
            //             "r1": function (character, system, action) {
            //                 transer();
            //                 parer("");
            //                 oper(system, "", "");
            //             } // End of function
            //         } // End of actions
            //     }
            // ), // End of situation


            // places4: new undum.SimpleSituation(
            //     "<h1><p class=transient>Choose a location</p><h1>", {
            //         displayOrder: 4,
            //         choices: "#place4",
            //         enter: function (character, system, from) {
            //         }
            //     }
            // ),

            // placestemplate: new undum.SimpleSituation(
            //     "<h1><p class=transient>Choose a location</p><h1>", {
            //         displayOrder: 4,
            //         choices: "#placenumber",
            //         enter: function (character, system, from) {
            //         }
            //     }
            // ),
        }

    };

    undum.game.newhosts.names.push(hostname);
    console.log(
        `[TWF]: Character: '${protagonist}' has loaded.
    \n[Fenrir]: I hope to be quite, "satisfactory" to your tastes~`
    );
})();


//----------------------------------------------------------------------------------------//
//---------------------------// Changes To This Host Template //--------------------------//
//----------------------------------------------------------------------------------------//

//-------------// V2 Added //-------------//

//    Allows the water sports sex scene 
//    ADDED:
//    wssex:true,


//-------------// V3 Added //-------------//

//    Single word description of the host
//    species:"wolf",

//    Disables host from using specific toys
//    ["plug","pills"]
//    bannedtoys:[],


//-------------// V4 Added //-------------//

//   Agreement clause at the bottom.
//   Changed formatting and moved ultimate control to be an addon

//   wsyay:true,

//   explain:"Hehe I think I am going to keep you down there from now on.",

//   plantokeep:true,

//   explainlie:"q1Hmm, that sounds like a good idea. Either way... looks like you are going to be stuck down there... I umm... Yea.... this is going to take a while to get use to.q1",

//-------------// V5 Added //-------------//

// Massive changes, situation template added.



/*
 * Submitting content or code for use in The Merging licenses all rights to use said content in The Merging and The Merging related Development. This includes character designs, written text, code, and any submitted accompanying art. Consequently, Xey is given consent to further develop or modify content for these characters in the future.
 * Respect for the characters will be observed in attempt to remain true to the original author's intent, removal or modification can be requested but is not guaranteed (I can't even imagine a reason to say no....). If disagreements occur the original author maintains the right to request removal of the use of their characters name contained in their content from the game at any time.
 */