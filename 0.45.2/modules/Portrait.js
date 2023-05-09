function clother2(character, system, x) {




    var cssreset = true;
    var cocktyper = "";
    var clothingenabler = false;
    var scalie = false;
    var hostclothingtype = "";
    if (character.sandbox.ch2) {

        if (character.sandbox.host.host == "ravel" || character.sandbox.host.host == "ravel2")
            hostclothingtype = "r";

    }


    if (character.sandbox.host.cocktype == "horse") {

        cocktyper = "horse";

    } else if (character.sandbox.host.cocktype == "knot") {
        cocktyper = "canine";

    } else {
        cocktyper = "canine";

    }

    var yport = character.sandbox.portrait;
    var ref = "media/img/";
    var newref = "media/img/builder/";
    var img = character.sandbox.reftab;
    var tfnum = Math.floor(character.qualities.ctf / 20) * 20;

    var name = character.sandbox.host.defaulthostbackground;
    var tfminimod = "";

    if (character.sandbox.playertype) {
        var speciesis = "";
        switch (character.sandbox.playertype) {
            case "cat":


                speciesis = "1";

                break;
            case "dragon":
                speciesis = "2";
                break;
            case "canine":
                speciesis = "3";
                break;
            case "human":
                speciesis = "4";
                break;
            case "bird":
                speciesis = "5";
                break;
            default:
        } //End of RND switch 

    } else {



    }
    if (character.qualities.ctf < 20) {
        yport.t1.src = ref + img.bg;
        yport.t9.src = "";
        yport.t3.src = ref + img["av" + character.sandbox.playertype];

    } else {
        if (character.sandbox.shalonify) {


        }
        //   
        //   switch (character.sandbox.teststate) {
        //    case 1:
        //      console.log("test me!!! ");
        //      yport.t4.src=newref+img["arms"];
        //      yport.t4.className="sprite"+character.sandbox.spritenum;
        //      
        //      break;
        //    case 2:
        //      yport.t4.src=newref+img["noarms"];
        // 
        //      yport.t4.className="sprite"+character.sandbox.spritenum;
        //      break;
        //    case 3:
        //      yport.t4.src=newref+img["knotless"];
        //      yport.t4.className="sprite"+character.sandbox.spritenum;
        //      break;
        //    default:
        //  }//End of RND switch
        //   
        //   
        //   



        switch (character.qualities.ctf % 20) {
            case 5:



            case 10:
                tfminimod = "a";
                break;
            case 15:
                tfminimod = "ha";
                break;
            default:
        } //End of RND switch

        if (tfminimod == "ha" && (character.sandbox.limits.cantalk || character.sandbox.limits.hasarms)) {
            console.log("PORTRAIT ERROR can talk or has arms are not in line with CTF amount! ");

        }
        if (tfminimod == "a" && (character.sandbox.limits.hasarms)) {
            console.log("PORTRAIT ERROR has arms are not in line with CTF amount! ");

        }
        if (character.qualities.ctf != 100) {

            switch (character.qualities.ctf % 20) {
                case 5:




                    break;
                case 10:
                    character.sandbox.limits.cantalk = true;
                    character.sandbox.limits.hasarms = false;
                    break;
                case 15:
                    character.sandbox.limits.hasarms = false;
                    character.sandbox.limits.cantalk = false;
                    break;
                default:
            } //End of RND switch



        }






        yport.t1.src = ref + img.bg;
        if (name == "lizard" || name == "leika") {

            if (cocktyper == "horse" && character.qualities.ctf == 100) {

                yport.t1a.src = ref + img[name + "crotch" + 20];
                yport.t1a.className = "crotch" + 20;
            } else {

                if (character.sandbox.erect) {
                    yport.t1a.src = ref + img[name + "crotch" + tfnum];
                    yport.t1a.className = "crotch" + tfnum;

                } else {
                    if (character.qualities.ctf == 100) {

                        yport.t1a.src = ref + img[name + "crotch" + tfnum];

                    } else {

                        yport.t1a.src = ref + img["null" + name + "crotch" + tfnum];

                    }

                    yport.t1a.className = "crotch" + tfnum;

                }

            }




            yport.t2.src = "";
        } else if (name == "hoss") {

            if (cocktyper == "horse" && character.qualities.ctf == 100) {

                yport.t1a.src = ref + img[name + "crotch" + 20];
                yport.t1a.className = "crotch" + 20 + "hoss";




            } else {
                yport.t1a.src = ref + img[name + "crotch" + tfnum];
                yport.t1a.className = "crotch" + tfnum + "hoss";
            }
            yport.t2.src = "";
        } else if (name == "lion") {

            if (cocktyper == "horse" && character.qualities.ctf == 100) {

                yport.t1a.src = ref + img[name + "crotch" + 20];
                yport.t1a.className = "crotch" + 20 + "lion";




            } else {
                yport.t1a.src = ref + img[name + "crotch" + tfnum];
                yport.t1a.className = "crotch" + tfnum + "lion";
            }
            yport.t2.src = "";


        } else {

            yport.t2.src = ref + img[name + "crotch" + tfnum];



            yport.t1a.src = "";
        }


        if ((character.qualities.ctf % 20 == 0 || character.qualities.ctf % 20 == 10 || character.qualities.ctf % 20 == 15) && character.qualities.ctf <= 90 && character.qualities.ctf != 0) {



            document.getElementById("portait9").className = "xeyportsprite" + speciesis;


            if (character.sandbox.erect || character.qualities.ctf == 20 || character.qualities.ctf == 30) {
                if (character.qualities.ctf % 20 == 15) {


                    yport.t9.src = ref + img["experimenthead"];



                } else {
                    if (character.qualities.ctf % 20 == 10) {



                        yport.t9.src = ref + img["experiment1"];
                    } else {

                        yport.t9.src = ref + img["experiment2"];
                    }
                }
            } else {
                clothingenabler = true;
                var slit = "";
                if (name == "lizard" || name == "leika") {

                    slit = "slit";
                }
                if (character.qualities.ctf % 20 == 15) {

                    yport.t9.src = ref + img[slit + "headpeek2"];
                } else {
                    yport.t9.src = ref + img[slit + "headpeek"];

                }

                yport.t9.className = "hidden" + speciesis + slit;



            }






            yport.t4.src = "";
            yport.t5.src = "";
            yport.t3.src = "";
        } else {
            if (character.qualities.ctf == 95) {
                //          if(cocktyper=="horse"){
                //           
                //            yport.t4.className="horsexeyport";
                //            yport.t5.className="horsexeyport5";
                //         }else{
                //        
                //           
                //         } 
                yport.t4.className = "xeyportait4";
                yport.t5.className = "xeyportait5";

                //                     character.sandbox.cssreseter=true;
                //            cssreset=false;
                yport.t9.src = "";
                yport.t3.src = "";
                yport.t4.src = ref + img[cocktyper + 95];
                yport.t5.src = ref + img[cocktyper + 95 + "x"];






            } else if (character.qualities.ctf == 100) {


                yport.t3.src = "";
                yport.t5.src = "";
                if (character.sandbox.clothed && !character.sandbox.erect) {
                    yport.t4.src = "";
                    yport.t5.src = "";
                    yport.t9.src = "";
                    clothingenabler = true;
                } else {

                    if (cocktyper == "horse") {
                        if ((name != "lizard" || name != "leika") && name != "hoss") {
                            yport.t2.src = ref + img[name + "crotch" + 20];

                        }


                        character.sandbox.cssreseter = true;
                        cssreset = false;
                        yport.t4.className = "horsexeyport";
                        yport.t5.className = "horsexeyport5";
                        yport.t4.src = ref + img[cocktyper + 100];
                        yport.t9.src = "";

                    } else {
                        if (!character.sandbox.erect) {
                            if ((name == "lizard" || name == "leika")) {
                                yport.t4.className = "xeyportait4peek";
                                yport.t5.className = "xeyportait5";
                                yport.t4.src = ref + img["slitheadpeek3"];

                            } else {
                                yport.t4.className = "xeyportait4peek";
                                yport.t5.className = "xeyportait5";
                                yport.t4.src = ref + img["headpeek3"];


                            }

                            yport.t9.src = "";

                        } else {
                            yport.t4.className = "xeyportait4";
                            yport.t5.className = "xeyportait5";
                            yport.t4.src = ref + img[cocktyper + 100];
                            yport.t9.src = "";
                        }



                    }




                }

            } else {


                yport.t4.src = "";
                yport.t5.src = "";
                yport.t9.src = "";

                yport.t3.src = ref + img["ctf" + tfnum + tfminimod];



            }


        }
        if (character.qualities.ctf == 0) {
            yport.t4.src = "";
            yport.t5.src = "";
            yport.t2.src = "";
        }
        if (character.sandbox.cssreseter && cssreset) {
            character.sandbox.cssreseter = false;

            yport.t4.className = "xeyportait4";
        }
        console.log("clother checking " + clothingenabler + " " + name + "clothes" + tfnum);
        if (character.sandbox.clothed && clothingenabler && !character.sandbox.erect && (name != "lizard" || hostclothingtype == "r")) {
            if (name == "hoss" || (name == "lizard")) {


                yport.t1a.src = "";
                yport.t2.src = "";
                yport.t4.src = "";
                yport.t5.src = "";
                yport.t9.src = "";

                yport.t9.src = ref + img[name + "clothes" + tfnum];

                yport.t9.className = "clothing";


            } else {
                yport.t10.src = ref + img[name + "clothes" + tfnum];

                yport.t10.className = "clothing";

            }


        } else {
            if (yport.t9.className == "clothing") {
                yport.t9.className = "";
                yport.t9.src = "";
            }


            yport.t10.src = "";
            yport.t10.className = "xeyport";
        }


        //console.log("Checking new portrait system " +  yport.t4+newref+img["arms"]);
        //  switch(Math.floor(character.qualities.ctf/20)*20){
        //    case 20:
        //    yport.t3.src=ref+img.ctf20;
        //      
        //    break;
        //    case 40:
        //    
        //      
        //     break; 
        //    case 60:
        //    
        //      
        //      break;
        //    case 80:
        //    
        //      
        //      break;
        //    case 100:
        //      
        //    
        //    
        //  }
        //;


        // "media/img"+



    }



    //    var y;
    //   var yport;
    //  for (y in character.sandbox.portrait) {
    //    yport=
    //    numcarry++;
    //   
    //    
    //       
    //
    //    }





}