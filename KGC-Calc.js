//some JS for only showing the Back to Top button when the user scrolls down a certain amount
var scrollFunc= function(){
    const scrollBtn= document.getElementById("topBtn");
    var x=document.getElementById("topBtnAnchor");
    var y= window.scrollY;
    if (y>=1000){
        scrollBtn.className=("showTopBtn");
        x.setAttribute("href", "#pageTop");
    }
    else{
        scrollBtn.className=("hideTopBtn");
        x.removeAttribute("href");
    }
};
window.addEventListener("scroll", scrollFunc);

function closePopup(){
    document.getElementById("popupOverlay").style.display= "none";
}
function showPopup(){
    document.getElementById("popupOverlay").style.display="block";

    popupOverlay.addEventListener('click', function (event){
        if (event.target === popupOverlay){
            closePopup();
        }
    });
}


//Number formatting functions

//rounding decimal to nearest 100th
function nearest100th(number){
    let input= number;
    let output= Math.round(input*100)/100;
    return output;
}
    
//adding english formatting to numbers (Ex: 123,456.789)
function enFormat(number){
    let input= number;
    let output= input.toLocaleString('en');
    return output;
}




//Hero Calc Switch case list - gets the name of the hero based on what button the user clicks, then uses that info to call the corresponding function
function calcSkill(Hero){
    switch(Hero){
        case 'Aramis':
            calcAramisSkill();
            break;
        case 'Evan':
            calcEvanSkill();
            break;
        case 'Shelda':
            calcSheldaSkill();
           break;
        case 'Leonhardt':
            calcLeonhardtSkill();
            break;
        case 'Priya':
            calcPriyaSkill();
            break;
        case 'Daniel':
            calcDanielSkill();
            break;
        case 'Mara':
            calcMaraSkill();
            break;
        case 'ChungAh':
            calcChungAhSkill();
            break;
        case 'Lily':
            calcLilySkill();
            break;
        case 'Jol':
            calcJolSkill();
            break;
        case 'Ren':
            calcRenSkill();
            break;
        case 'Behemus':
            calcBehemusSkill();
            break;
        case 'Lyca':
            calcLycaSkill();
            break;
        case 'Rossette':
            calcRossetteSkill();
            break;
        case 'Lunaire':
            calcLunaireSkill();
            break;
        case 'Yeon':
            calcYeonSkill();
            break;
        case 'ZuoYun':
            calcZuoYunSkill();
            break;
        case 'Zupitere':
            calcZupitereSkill();
            break;
        case 'Draco':
            calcDracoSkill();
            break;
        case 'Mel':
            calcMelSkill();
            break;
        case 'Rahawk':
            calcRahawkSkill();
            break;
        case 'Hansi':
            calcHansiSkill();
            break;
        case 'Asiaq':
            calcAsiaqSkill();
            break;
        case 'Bombie':
            calcBombieSkill();
            break;
        case 'Bardrey':
            calcBardreySkill();
            break;
        case 'Alberon':
            calcAlberonSkill();
            break;
        case 'Cain':
            calcCainSkill();
            break;
        case 'Hela':
            calcHelaSkill();
            break;
        case 'Mirsyl':
            calcMirsylSkill();
            break;
        case 'Taesan':
            calcTaesanSkill();
            break;
        case 'ZuoBai':
            calcZuoBaiSkill();
            break;
        case 'Agathe':
            calcAgatheSkill();
            break;
        case 'Neria':
            calcNeriaSkill();
            break;
        case 'Haerang':
            calcHaerangSkill();
            break;
        case 'Gidnil':
            calcGidnilSkill();
            break;
        case 'Kanak':
            calcKanakSkill();
            break;
        case 'Rie':
            calcRieSkill();
            break;
        case 'Nibella':
            calcNibellaSkill();
            break;
        case 'Taebaek':
            calcTaebaekSkill();
            break;
        case 'Cathy':
            calcCathySkill();
            break;
        case 'Esthea':
            calcEstheaSkill();
            break;
        case 'Baldir':
            calcBaldirSkill();
            break;
        case 'Ian':
            calcIanSkill();
            break;
        case 'Ophelia':
            calcOpheliaSkill();
            break;
        case 'Kirdan':
            calcKirdanSkill();
            break;
        case 'Mano':
            calcManoSkill();
            break;
        case 'Victoria':
            calcVictoriaSkill();
            break;
        case 'Aenrath':
            calcAenrathSkill();
            break;
        case 'Elizabeth':
            calcElizabethSkill();
            break;
        case 'Saeryung':
            calcSaeryungSkill();
            break;
        case 'Farael':
            calcFaraelSkill();
            break;
        case 'Garam':
            calcGaramSkill();
            break;
        case 'Dandelyn':
            calcDandelynSkill();
            break;
        case 'Saras':
            calcSarasSkill();
            break;
        case 'Jinju':
            calcJinjuSkill();
            break;
        case 'Bellina':
            calcBellinaSkill();
            break;
        case 'Sargula':
            calcSargulaSkill();
            break;
        case 'Maiu':
            calcMaiuSkill();
            break;
        default:
            console.log("error in selecting hero- no function found for hero named "+ Hero);
    }
}




//Skill Damage Calculator functions for each hero start below
function calcAramisSkill(){
    let Hero="Aramis";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=885+(885*(hpBonus/100));
    let spellAtk=413+(413*(spellBonus/100));
    let atk=266+(266*(atkBonus/100));
    let asp=67+(67*(aspBonus/100));
  
    SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+1 Range with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+<b>20</b>% attack speed ("+ asp+ " → "+ (asp+20)+ ") with Lv8 Passive";

        aspBonus+=20;
        asp=67+(67*(aspBonus/100));
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.40;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> increased damage dealt to designated target of <i>Headshot</i> ("+ SkillDmg+ " → "+ (nearest100th(SkillDmg*1.40))+ ") with <i>Take Aim</i> active";
        SkillDmg*= 1.40;
    }
    else if (document.getElementById(Hero+"A2").checked){
        SkillDmg*=0.9;
        output3="<br/>Shoots at three targets instead of one when using <i>Headshot</i> with <i>Quickshot</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per shot of <i>Headshot</i>"+ output1+ output2+ output3);

    return 3;
}

function calcEvanSkill(){
    let Hero="Evan";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    if (document.getElementById(Hero+"Lv8Passive").checked){
        spellBonus= spellBonus+40;
    }

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1475+(1475*(hpBonus/100));
    let spellAtk=118+(118*(spellBonus/100));
    let atk=148+(148*(atkBonus/100));
    let asp=120+(120*(aspBonus/100));
  
    SkillDmg=(20+spellAtk);

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Starts battle with 100% of MP with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=spellAtk;
        temp= nearest100th(temp);
        spellBonus+=40;
        spellAtk=118+(118*(spellBonus/100));
        let x=(20+spellAtk);
        output2="</br>+<b>40</b>% <i>Spell Power</i> ("+temp+" → "+ spellAtk+") with Lv8 Passive";
        SkillDmg=x;
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.2;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Deals <b>"+ temp+ "</b> increased damage per target hit with <i>Wave Slash</i> active, maximum of <b>"+ (SkillDmg*2)+ "</b> damage";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg*0.3;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by <i>Unleash Sword Aura</i> on normal attacks";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Crescent Slash</i>"+ output1+ output2+ output3);

    return 4;
}

function calcSheldaSkill(){
    let Hero="Shelda";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1298+(1298*(hpBonus/100));
    let spellAtk=295+(295*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=91+(91*(aspBonus/100));
  
    SkillDmg=30+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= SkillDmg*0.5;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br><b>"+ temp+ "</b> additonal Protection gained ("+ SkillDmg+ " → "+ (SkillDmg*1.50)+ ") with Lv4 Passive active";
        SkillDmg*=1.50;
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>MP cost of <i>Iron Will</i> reduced by 20 (100 MP → 80 MP)";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Obtains 2 Mighty Blocks when using <i>Iron Will</i>";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg+(spellAtk*0.5);
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Deals <b>"+ temp+ "</b> damage to enemies with <i>Explosive Will</i>";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> protection gained per <i>Iron Will</i> use"+ output1+ output2+ output3);

    return 5;
}

function calcLeonhardtSkill(){
    let Hero="Leonhardt";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1770+(1770*(hpBonus/100));
    let spellAtk=89+(89*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=91+(91*(aspBonus/100));
  
    SkillDmg=30+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+250 Defence with Lv4 Passive active";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=SkillDmg*0.25;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br>20% of incoming damage is reflected back to the attacker (halved for Spell Damage) with Lv8 Passive active";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/><b>"+ spellAtk+ "</b> Protection gained per enemy hit with <i>Smite</i> with <i>Barrier</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Pushed enemies back by 1 block instead of stunning them with <i>Smite</i>";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Smite</i> attack"+ output1+ output2+ output3);

    return 6;
}

function calcPriyaSkill(){
    let Hero="Priya";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=708+(708*(hpBonus/100));
    let spellAtk=384+(384*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
  
    SkillDmg=30+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+1 second for stun duration of <i>Blizzard</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>MP cost of <i>Blizzard</i> reduced by 20 with Lv8 Passive (120 MP → 100 MP)";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.33;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt per second to enemies within the icy area of <i>Intense Cold</i>";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=hp*0.40;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Freezes with <b>"+ temp+ "</b> HP for 2 seconds when taking lethal damage for the first time in battle";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Blizzard</i> attack"+ output1+ output2+ output3);

    return 7;
}

function calcDanielSkill(){
    let Hero="Daniel";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1475+(1475*(hpBonus/100));
    let spellAtk=118+(118*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
  
    SkillDmg=50+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+2 seconds for stun duration of <i>Judgement of Light</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=hp*0.20;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br>Final Max HP increased by <b>"+ temp+ "</b> with Lv8 Passive ("+ hp+ " → "+ (hp*1.20)+ ") ";
        hp*=1.20
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=atk*3;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt to enemies on the first normal attack with <i>Divine Bash</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=hp*0.30;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Heals self for <b>"+ temp+ "</b> HP per second for 3 seconds with <i>Self Recovery</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt by <i>Judement of Light</i> attack"+ output1+ output2+ output3);

    return 8;
}

function calcMaraSkill(){
    let Hero="Mara";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=826+(826*(hpBonus/100));
    let spellAtk=354+(354*(spellBonus/100));
    let atk=77+(77*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
  
    SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+1.5 seconds for stun duration of <i>Backstab</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Gains 1 Mighty Block after using <i>Backstab</i>";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>+30% damage taken by <i>Backstab</i> target for 10 seconds (halved for bosses) with <i>Expose Weakness</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp1=hp*0.20;
        temp1= nearest100th(temp1);
        temp1= enFormat(temp1);
        output3="<br/>Final Max HP on Mara -20% ("+ hp+ " → "+ (hp-temp1)+ ") with <i>Phantom Illusion</i> active"
        hp=(hp-temp1);
        output3+="<br/>Stats for Mara's Illusion: [HP: "+ (hp/10)+"] [Attack: "+ (atk/10)+ "] [Spell Power: "+ (spellAtk/10)+ "]";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Backstab</i> attack"+ output1+ output2+ output3);

    return 10;
}

function calcChungAhSkill(){
    let Hero="ChungAh";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg1= 0;
    let hp=1475+(1475*(hpBonus/100));
    let spellAtk=94+(94*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));
  
    SkillDmg1=10+spellAtk;
    let SkillDmg2=SkillDmg1*2.5;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="<br/>-1 <i>Horizontal Dragon Edge</i> needed to cast <i>Azure Dragon Slash</i> (3 → 2)";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=SkillDmg1*0.60;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br>+<b>60</b>% Spell HP Drain for <i>Azure Dragon Slash</i>";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg2*1.40;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt from the instant <i>Azure Dragon Slash</i>";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg1+(SkillDmg1*10);
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by <i>Advent of Thunder Dragon</i> with <i>Advent of Thunger Dragon</i> active";
    }
    
    SkillDmg1= nearest100th(SkillDmg1); //rounding to nearest 100th
    SkillDmg1= enFormat(SkillDmg1); //adding commas to the number

    SkillDmg2= nearest100th(SkillDmg2);
    SkillDmg2= enFormat(SkillDmg2);
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ SkillDmg1+ "</b> damage dealt per <i>Horizontal Dragon Edge</i> attack<br/><b>"+ SkillDmg2+ "</b> damage dealt per <i>Azure Dragon Slash</i> attack"+ output1+ output2+ output3);

    return 11;
}

function calcLilySkill(){
    let Hero="Lily";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=590+(590*(hpBonus/100));
    let spellAtk=295+(295*(spellBonus/100));
    let atk=59+(59*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
  
    SkillDmg=20+spellAtk;
    let hp2=hp*1.5;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= hp*2;
        hp2= temp;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br>Sha-Sha's HP is 200% of Lily's instead of 150% with Lv4 Passive ("+ (hp*1.5)+ " → "+ hp2+ ")";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>MP cost of <i>Summon Golem</i> & <i>Vitality of Nature</i> both reduced by 30 with Lv8 Passive (<i>Summon Golem</i>: 130 MP → 100 MP) (<i>Vitality of Nature</i>: 60 → 30)";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Lily recovers 15 MP per second while Sha-Sha is not summoned with <i>Communing with Nature</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=spellAtk;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by Sha-Sha's charge attack with <i>Charge!</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("Sha-Sha's stats: [HP: "+ hp2+ "] [Attack: "+ (atk*1.5)+ "]<br/> Heals Sha-Sha for <b>"+ SkillDmg+"</b> Health per <i>Vitality of Nature</i> use"+ output1+ output2+ output3);

    return 11;
}

function calcJolSkill(){
    let Hero="Jol";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1298+(1298*(hpBonus/100));
    let spellAtk=118+(118*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
  
    SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Starts battle with 90% of MP with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br+1 Second for <i>Avatar</i> skill duration with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>+1 Second duration time of <i>Avatar</i> when Jol kill an enemy with <i>Avatar</i> while <i>Eternity</i> is active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Moves behind the closest enemy within 4 range when using <i>Avatar</i> with <i>Salvation</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Avatar</i> attack"+ output1+ output2+ output3);

    return 12;
}

function calcRenSkill(){
    let Hero="Ren";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1475+(1475*(hpBonus/100));
    let spellAtk=142+(142*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
  
    SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+100% Movement Speed for 1 second after killing a target with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+1 Mighty Block per target when Full Bloom is used (max +2) with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Starts with +2 attack count for <i>Full Bloom</i>, max <i>Full Bloom</i> attack count increases to 10 (6 → 10) with <i>Full Blossom</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg*6;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by <i>Sanguine Flowers</i> with <i>Sanguine Flowers</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Full Bloom</i> attack stack"+ output1+ output2+ output3);

    return 13;
}

function calcBehemusSkill(){
    let Hero="Behemus";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1475+(1475*(hpBonus/100));
    let spellAtk=165+(165*(spellBonus/100));
    let atk=77+(77*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
  
    SkillDmg=40+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= spellAtk*0.3;
        SkillDmg+= temp;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="<br/>Pushes enemys back by 1 extra block with </i>Reckless Protection</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=spellAtk;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br><b>"+ temp+ "</b> protection granted by Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>+350 DEF after using <i>Reckless Protection</i> for 4 seconds with <i>Empire's Provocation</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/><i>Reckless Protection</i> damage range is fixed to 2, pushes enemies back by 2/3/4/5 blocks when using <i>Reckless Protection</i> with <i>Powerful Tremor</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Reckless Protection</i> attack"+ output1+ output2+ output3);

    return 14;
}

function calcLycaSkill(){
    let Hero="Lyca";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp1=826+(826*(hpBonus/100));
    let spellAtk1=177+(177*(spellBonus/100));
    let atk1=118+(118*(atkBonus/100));
    let asp1=125+(125*(aspBonus/100));

    let hp2=(hp1*2);
    let spellAtk2= (spellAtk1);
    let atk2=(atk1*1.25);
    let asp2=(asp1);
  
    SkillDmg=spellAtk2;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Both Lyca's Human and Werewolf gain +30% final Max HP (Human Form: "+hp1+" → "+(hp1*1.30)+ ")  (Werewolf Form: "+hp2+" → "+(hp2*1.2)+") with Lv4 Passive";
        hp1=hp1*1.30;
        hp2=hp2*1.30;
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>MP cost of <i>Natural Instict</i> reduced by 20 (140 MP → 120 MP), MP cost of <i>Wild Fury</i> reduced by 40 (120 MP → 80 MP)";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>+12 MP recovery on normal attacks in both forms with <i>Wild Nature</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg*0.40;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><i>Wild Fury</i> deals <b>"+ temp+ "</b> additional damage with <i>Obsession</i> active ("+ SkillDmg+ " → "+ (SkillDmg*1.4)+ ")";
        SkillDmg= SkillDmg*1.4;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ SkillDmg+ "</b> damage dealt per <i>Wild Fury</i> attack"+ output1+ output2+ output3);

    return 15;
}

function calcRossetteSkill(){
    let Hero="Rossette";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=826+(826*(hpBonus/100));
    let spellAtk=177+(177*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));
  
    SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Rossette takes 20% less damage from her current target with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=atk*2.5;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br>Maximum of <b>"+ temp+ "</b> additional damage dealt on normal attacks with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>+30% damage taken by <i>Giant Smite</i> target for 10 seconds (halved for bosses) with <i>Expose Weakness</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>+30% Crit damage after using <i>Giant Smite</i> until a target is killed with <i>Giant Smite</i>, then the Crit damage bonus is reset and Rossette is fully healed";
    }

    let maxDmg=spellAtk*3;
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("Minimum of <b>"+ output+ "</b> damage dealt per <i>Giant Smite</i> attack<br/>(Maximum of <b>"+ maxDmg+ "</b> damage)"+ output1+ output2+ output3);

    return 16;
}

function calcLunaireSkill(){
    let Hero="Lunaire";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=885+(885*(hpBonus/100));
    let spellAtk=89+(89*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
  
    SkillDmg=15+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br><i>Blecssing of the Blue Moon</i> grants +1 Mighty Block with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Buff effects remain active for 2 seconds after <i>Blessing of the Blue Moon</i> ends with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Lunaire recovers 100% MP at the beginning of the battle if the target is behind her, and grants +20% Movement Speed to the target with <i>Swift Blessing</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        SkillDmg=0;
        output3="<br/>Grants +2 Mighty Blocks instead of Protection to <i>Blessing of the Blue Moon</i> target with <i>Protection of the Moon</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    let statBoost=(atk+spellAtk)*0.90;
    statBoost= nearest100th(statBoost);
    statBoost= enFormat(statBoost);
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ statBoost+ "</b> converted into the target hero's base stats while <i>Blessing of the Blue Moon</i> is active<br/><b>"+ output+ "</b> protection granted to target hero"+ output1+ output2+ output3);

    return 17;
}

function calcYeonSkill(){
    let Hero="Yeon";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=885+(885*(hpBonus/100));
    let spellAtk=295+(295*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
  
    SkillDmg=30+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Applies Spell CRIT to the healing from <i>Calm and Stormy</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Up to 2 waves of Calm and Stormy can be on the battfield at the same time with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=spellAtk;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt to enemies in the the 5x5 range of <i>Overflow</i>";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=(SkillDmg*0.25);
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Each <i>Calm and Stormy</i> hit does <b>"+ temp+ "</b> less damage/healing ("+ SkillDmg+ " → "+ (SkillDmg-temp)+ ") with <i>Backflow</i> active";
        SkillDmg=SkillDmg-temp;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damge dealt/HP healed per <i>Calm and Stormy</i> hit"+ output1+ output2+ output3);

    return 18;
}

function calcZuoYunSkill(){
    let Hero="ZuoYun";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillAsp= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));
  
    SkillAsp=(50+ spellAtk);

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp=SkillAsp+30;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br>+<b>30</b>% attack speed during <i>Enrage</i> ("+ SkillAsp+ " → "+ temp+ ") with Lv4 Passive";
        SkillAsp+=30;
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+20% Physical HP Drain with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>+1 Attack Count for every 3 attacks during <i>Enrage</i> with <i>Fury</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>+1% Physical HP Drain for each 1.5% HP lost during <i>Enrage</i> with <i>Craving</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillAsp); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>% <i>Attack Speed</i> increase while <i>Enrage</i> is active"+ output1+ output2+ output3);

    return 19;
}

function calcZupitereSkill(){
    let Hero="Zupitere";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=885+(885*(hpBonus/100));
    let spellAtk=65+(65*(spellBonus/100));
    let atk=53+(53*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
  
    SkillDmg=5+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= spellAtk*2;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br><b>"+ temp+ "</b> damage dealt to the first target of <i>Crackle</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+1 target of Crackle with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.15;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Double the target of <i>Crackle</i> on every third cast. Can be cast again to the attacked target with <i>Infinite Diffusion</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        spellBonus2+=80;
        spellAtk2=65+(65*(spellBonus2/100));
        let temp=SkillDmg*1.80;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Spell Power +80% ("+ spellAtk+ " → "+ (spellAtk*1.80)+ ")with <i>Overload</i> active";
        spellBonus+=80;
        spellAtk=65+(65*(spellBonus/100));
        SkillDmg=5+spellAtk;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt <i>Crackle</i> damage instance"+ output1+ output2+ output3);

    return 20;
}

function calcDracoSkill(){
    let Hero="Draco";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1298+(1298*(hpBonus/100));
    let spellAtk=65+(65*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
  
    SkillDmg=10+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Recovers MP when all enemies are killed with <i>Flamebreath</i> in proportion to skill damage count with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+50% <i>Spell Power</i> HP Drain with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*2.35;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Gradually increases damage of <i>Flamebreath</i> by 15% while using skill, max +235% damage (+"+ temp+ " damage) with <i>Ignite</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp= spellAtk;
        temp= nearest100th(temp);
        temp= enFormat(temp);

        let spellAtk2=65+(65*((spellBonus+70)/100));
        let temp2=spellAtk2;
        temp2= nearest100th(temp2);
        temp2= enFormat(temp2);
        output3="<br/>MP Cost of <i>Ignite</i> reduced by 45 (70 → 25), +70% <i>Spell Power</i> ("+ temp+ " → "+ temp2+ "), and <i>Flamebreath</i> damage instances reduced to 4 (10 → 4) with <i>Concentrated Flame</i> active";
        spellBonus+=70;
        spellAtk=65+(65*(spellBonus/100));
        SkillDmg=10+spellAtk;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Flamebreath</i> damage instance"+ output1+ output2+ output3);

    return 21;
}

function calcMelSkill(){
    let Hero="Mel";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1298+(1298*(hpBonus/100));
    let spellAtk=295+(295*(spellBonus/100));
    let atk=177+(177*(atkBonus/100));
    let asp=83+(83*(aspBonus/100));
  
    SkillDmg=0+spellAtk;
    let SkillDmg2= 125+(spellAtk*0.02);

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+30% Movement Speed for Mel with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+2 seconds for stun duration of <i>Holy Blade Garna</i>'s shockwave attack with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=spellAtk*0.33;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt from the shockwaves generated on attacks with <i>Wave of the Holy Blade</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/><i>Holy Blade of Garna</i> no longer creates a shockwave, lasts for an additional +2.5 seconds, +500 DEF while skill is active with <i>Unleash</i> active";
        SkillDmg=0;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    SkillDmg2= nearest100th(SkillDmg2);
    SkillDmg2= enFormat(SkillDmg2);
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Holy Blade Garna</i> shockwave<br/><b>"+ SkillDmg2+ "</b> damage dealt on normal attacks during <i>Holy Blade of Garna</i>"+ output1+ output2+ output3);

    return 22;
}

function calcRahawkSkill(){
    let Hero="Rahawk";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=94+(944*(hpBonus/100));
    let spellAtk=177+(177*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));
  
    SkillDmg=20+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+35% Attack Speed after using <i>Hunt Command</i> (max +105%) with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="<br/>+10% damage taken by <i>Hunt Command</i> target for 10 seconds (max 2 stacks, halved for bosses) with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.60;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by the second <i>Hunt Command</i> with <i>Double Hunt</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg*2
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt per <i>Hunt Command</i> ("+ SkillDmg+ " → "+ temp+ ") with <i>Rigid Claws</i> active";
        SkillDmg= temp;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per damage instance of <i>Hunt Command</i>"+ output1+ output2+ output3);

    return 23;
}

function calcHansiSkill(){
    let Hero="Hansi";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885+(885*(hpBonus/100));
    let spellAtk=0+(0*(spellBonus/100));
    let atk=71+(71*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    let arrowDmg=atk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+15% Physical CRIT chance during <i>Rapid Arrows</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let bowsEquipped= document.getElementById("HansiBowAmount").value;
        let bonusDmg= bowsEquipped*15;
        output2="</br><b>"+ bonusDmg+ "</b>% damage increase from "+ bowsEquipped+ " bows equipped ("+ nearest100th(arrowDmg)+ " → "+ (nearest100th(arrowDmg*(1+(bonusDmg/100))))+ ") with Lv8 Passive";
        arrowDmg=arrowDmg*(1+(bonusDmg/100));
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp= arrowDmg*2.5;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt per <i>Rainstorm</i> arrow";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp= arrowDmg*1.5;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt per arrow ("+ nearest100th(arrowDmg)+ " → "+ temp+ ") while <i>Concentrate</i> is active";
    }
    
    let output= nearest100th(arrowDmg);
    output= enFormat(output);

    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per arrow shot"+ output1+ output2+ output3);

    return 24;
}

function calcAsiaqSkill(){
    let Hero="Asiaq";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=826+(826*(hpBonus/100));
    let spellAtk=413+(413*(spellBonus/100));
    let atk=59+(59*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
  
    let SkillDmg1=50+spellAtk;
    let SkillDmg2=12.5+(spellAtk/4);

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Stuns linked enemies for 1.5 seconds if a linked enemy dies with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+50% <i>Attack Speed</i> for Asiaq while <i>Soul Link</i> is active with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg1*0.10;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>+10% damage dealt to targets linked with <i>Soul Link</i> ("+ SkillDmg1+ " → "+ temp+ ") with <i>Cursed Link</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Links an additional target when using <i>Soul Link</i> with <i>Another Link</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg1); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    SkillDmg2= nearest100th(SkillDmg2);
    SkillDmg2= enFormat(SkillDmg2);
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> shared damage threshold to break the chains of <i>Soul Link</i><br/><b>"+ SkillDmg2+ "</b> additional damage dealt to linked targets when the chains break"+ output1+ output2+ output3);

    return 25;
}

function calcBombieSkill(){
    let Hero="Bombie";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=885+(885*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
  
    SkillDmg=atk;
    let skillAoe=0;
    let skillAtkSpd= asp*1.6
    let skillDuration= 3+(spellAtk/50);
    let additionalTargetDmg=0;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        skillAoe= SkillDmg/2;
        output1="</br><b>"+ skillAoe+ "</b> damage dealt to enemies within 3x3 range of the target";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        additionalTargetDmg= spellAtk;
        output2="</br><b>"+ additionalTargetDmg+ "</b> additional spell damage dealt to target";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let SkillDmg2= SkillDmg*3;
        SkillDmg2= nearest100th(SkillDmg2);
        SkillDmg2= enFormat(SkillDmg2);
        output3="<br/><b>"+ SkillDmg2+ "</b> damage dealt by <i>Mega Bomb</i>";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let x=SkillDmg*1.65;
        let temp=(x-SkillDmg);
        SkillDmg=SkillDmg-temp;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> less damage dealt per bomb due to <i>Bang Snaps</i>";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage per bomb thrown during <i>Rain of Bombs</i>, has an <i>Attack Speed</i> of <b>"+ skillAtkSpd+ "</b>%, and skill lasts for <b>"+ skillDuration+ "</b> seconds"+ output1+ output2+ output3);

    return 26;
}

function calcBardreySkill(){
    let Hero="Bardrey";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=885+(885*(hpBonus/100));
    let spellAtk=30+(30*(spellBonus/100));
    let atk=71+(71*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
  
    SkillDmg=(10+spellAtk);

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        SkillDmg+=5;
        output1="</br><b>5</b> additonal MP Recovered by allies from Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        aspBonus+=20;
        let asp2=100+(100*(aspBonus/100));
        output2="</br><b>"+ asp2+ "</b>% <i>Attack Speed</i> from Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/><i>Amplify</i> does not affect MP Recovery of allied heroes";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/><i>Discord</i> does not affect MP Recovery of allied heroes";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> MP recovered by allies within range of <i>Lilting Melody</i>"+ output1+ output2+ output3);

    return 27;
}

function calcAlberonSkill(){
    let Hero="Alberon";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=708+(708*(hpBonus/100));
    let spellAtk=236+(236*(spellBonus/100));
    let atk=59+(59*(atkBonus/100));
    let asp=100+(100*(aspBonus/100));
  
    SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= spellAtk*0.3;
        SkillDmg+= temp;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br><b>"+ temp+ "</b> additonal HP Recovered by allies from Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=SkillDmg*0.25;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br>Maximum of <b>"+ temp+ "</b> protection granted by Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.15;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> Physical Damage bonus granted to allies healed by <i>Radiance of Life</i> with <i>Hymn</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg+(SkillDmg*0.25);
        temp= nearest100th(temp);
        temp= enFormat(temp);
        SkillDmg= temp;
        output3="<br/>Heals the ally with the lowest HP insteand of multiple allies with <i>Salvation</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> health recovered by allies healed with <i>Radiance of Life</i>"+ output1+ output2+ output3);

    return 28;
}

function calcCainSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcHelaSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcMirsylSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcTaesanSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcTiaSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcZuoBaiSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcAgatheSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcNeriaSkill(){
    let Hero="Neria";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=826+(826*(hpBonus/100));
    let spellAtk=89+(89*(spellBonus/100));
    let atk=94+(94*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));
    
    if (document.getElementById(Hero+"A0").checked){
        //Neria's awakenings don't affect her skill damage output per hit
    }
    if (document.getElementById(Hero+"A1").checked){
        //Neria's awakenings don't affect her skill damage output per hit
    }
    if (document.getElementById(Hero+"A2").checked){
        //Neria's awakenings don't affect her skill damage output per hit
    }

    SkillDmg= atk*(300+(spellAtk/10));
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let modifier=0
        let x= asp-100;
        if ((x>0) && (x<150)){
            modifier=(x/3)
            SkillDmg= SkillDmg * (1+(modifier/100));
        }
        else if (x>150){
            modifier=50;
            SkillDmg= SkillDmg * (1+(modifier/100));
        }
    }
        
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    document.getElementById("NeriaSkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Annihilation Time</i> attack</br>maximum of ______ per <i>Annihilation Time</i> with Lv4 Passive Ability active");

    let SkillDmg2=0;
    if (document.getElementById(Hero+"Lv4Passive").checked){
        SkillDmg2= SkillDmg*1.6;

        let finalSkillDmg2= nearest100th(SkillDmg2); //rounding to nearest 100th
        let output2= enFormat(finalSkillDmg2); //adding commas to the number

        document.getElementById("NeriaSkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Annihilation Time</i> attack</br>maximum of <b>"+ output2+ "</b> per <i>Annihilation Time</i> with Lv4 Passive Ability active");
    }
    return 1;
}

function calcHaerangSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcGidnilSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcKanakSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcRieSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcNibellaSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcTaebaekSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcCathySkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcEstheaSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcBaldirSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcIanSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcOpheliaSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcKirdanSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcManoSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcVictoriaSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcAenrathSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcElizabethSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcSaeryungSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcFaraelSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcGaramSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcDandelynSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcSarasSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcJinjuSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcBellinaSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

function calcSargulaSkill(){
    let Hero="Sargula";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let atk=207+(207*(atkBonus/100));
    let spellAtk=118+(118*(spellBonus/100));
    let asp=100+(100*(aspBonus/100));
    let hp=1593+(1593*(hpBonus/100));


    //None of Sargula's Level Passive skills or her Awakenings affect her skill damage, so no need to take them into account for her final skill damage
  
    
    SkillDmg= (250+(spellAtk/16.66));
    SkillDmg= atk * (SkillDmg/100);
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById("SargulaSkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Punishment of Void</i> attack");
    return 2;
}

function calcMaiuSkill(){
    let Hero="?";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125+(125*(aspBonus/100));

    //Neither of Zuo Yun's Level Passive skills or Awakenings impact his skill damage
  
    if (document.getElementById(Hero+"Lv4Passive").checked){
        
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b>");
    return 19;
}

//end of skill calculator functions



//resuable function to calc final skill damage. should be better than having each hero function have its own code for the same thing.
//Might be good to implement fully if/when I decide to expand the scope of this project. Until then it'll remain unused
function calcSkillDamage(mainSource, atk, spellAtk, legacy, relic, acc, Lv4P, Lv8P){
    let FinalSkillDamage= 0
    if (mainSource="spell"){
        FinalSkillDamage= spellAtk * ((1 + legacy + relic + acc + Lv4P + Lv8P) /100);
    }
    else if (mainSource="attack"){
        FinalSkillDamage= atk * ((1 + legacy + relic + acc + Lv4P + Lv8P) /100);
    }
    else
        console.log("error with calcSkillDamage() function");

    return FinalSkillDamage;
}