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
        case 'Tia':
            calcTiaSkill();
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
        case 'Patros':
            calcPatrosSkill();
            break;
        default:
            console.log("error in selecting hero- no function found for hero named "+ Hero);
    }
}




// Skill Damage Calculator functions for each hero start below
// Note: the 'return' value is just equal to the order in which I completed the Calculators. Neria was first so calcNeriaSkill returns 1, Sargula was second so calcSargulaSkill returns 2, then I just went down the list starting with Aramis.
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
    let hp=1298*(1+(hpBonus/100));
    let spellAtk=295*(1+(spellBonus/100));
    let atk=89*(1+(atkBonus/100));
    let asp=91*(1+(aspBonus/100));
  
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
    let asp=91*(1+(aspBonus/100));
  
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
    let asp=100*(1+(aspBonus/100));
  
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
    let asp=100*(1+(aspBonus/100));
  
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
    let asp=100*(1+(aspBonus/100));
  
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
    let asp=125*(1+(aspBonus/100));
  
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
    let asp=100*(1+(aspBonus/100));
  
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
    let asp=100*(1+(aspBonus/100));
  
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
    let asp=100*(1+(aspBonus/100));
  
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
    let asp=100*(1+(aspBonus/100));
  
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
    let asp=125*(1+(aspBonus/100));
  
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
    let asp=100*(1+(aspBonus/100));
  
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
    let asp=100*(1+(aspBonus/100));
  
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
    let asp=125*(1+(aspBonus/100));
  
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
    let asp=100*(1+(aspBonus/100));
  
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
    let asp=100*(1+(aspBonus/100));
  
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
    let asp=125*(1+(aspBonus/100));
  
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
    let asp=125*(1+(aspBonus/100));

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
    let asp=100*(1+(aspBonus/100));
  
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
    let asp=100*(1+(aspBonus/100));
  
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
    let asp=100*(1+(aspBonus/100));
  
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
    let asp=100*(1+(aspBonus/100));
  
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
    let Hero="Cain";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1062+(1062*(hpBonus/100));
    let spellAtk=177+(177*(spellBonus/100));
    let atk=71+(71*(atkBonus/100));
    let asp=125*(1+(aspBonus/100));
  
    SkillDmg=5+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>When a target is killed with <i>Circus of Death</i>, deals excess damage to enemies within 2 blocks as speacial damage with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=SkillDmg*1.5;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br>+50% final damage dealt by the first <i>Circus of Death</i> after the beginning of battle ("+ nearest100th(SkillDmg)+ " → "+ temp+ ") with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>50% chance to obtain a Tier 1 equipment when a target is killed by <i>Circus of Death</i> with <i>Extort</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg*0.80
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Minimum of <b>"+ temp+ "</b> damage dealt by the instant <i>Circus of Death</i> from <i>Solo Dance</i>";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("Minimum of <b>"+ output+ "</b> damage dealt per <i>Circus of Death</i> attack"+ output1+ output2+ output3);

    return 29;
}

function calcHelaSkill(){
    let Hero="Hela";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=767+(767*(hpBonus/100));
    let spellAtk=177+(177*(spellBonus/100));
    let atk=0+(0*(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg1=15+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= SkillDmg1*0.50;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br>+50% final damage to center block of <i>Meteor</i> ("+ SkillDmg1+ " → "+ (SkillDmg1+temp)+ ") with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=asp-100;
        let X=0;
        let Y=0;
        while (temp>0){
            temp= temp-10
            if (temp>=0){
                Y=Y+12;
                console.log(temp);
            }
        }
        X= spellAtk;
        X= nearest100th(X);
        X= enFormat(X);

        let temp1= 236+(236*((spellBonus+Y)/100));
        temp1= nearest100th(temp1);
        temp1= enFormat(temp1);
        output2="</br>+12% <i>Spell Power</i> for every 10% <i>Attack Speed</i> exceeding 100% ("+ X+ " → "+ temp1+ ") with Lv8 Passive";
        spellBonus+=Y
        spellAtk=236+(236*(spellBonus/100));
        SkillDmg1=15+spellAtk;
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg1*2;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt per <i>Supernova</i> meteor with <i>Supernova</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg1*1.5;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>+50% damage dealt by <i>Summon Meteor</i> ("+ SkillDmg1+ " → "+ temp+ ") with <i>Focus Fire</i> active";
        SkillDmg1*= 1.5;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg1); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Summon Meteor</i> meteor"+ output1+ output2+ output3);

    return 30;
}

function calcMirsylSkill(){
    let Hero="Mirsyl";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885+(885*(hpBonus/100));
    let spellAtk=207+(207*(spellBonus/100));
    let atk=94+(94*(atkBonus/100));
    let asp=94+(94*(aspBonus/100));
  
    let SkillHealing=30+spellAtk;
    let SkillDmg=30+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= SkillHealing*1.3;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br>+30% health restored to allies by <i>Verdant Garden</i> ("+SkillHealing+" → "+temp+") with Lv4 Passive";
        SkillHealing*=1.3;
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="<br/>+30% damage taken by enemies attacked by Mirsyl within range of <i>Verdant Garden</i> for 5 seconds (halved for bosses) with Lv8 Passive"
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
        output3="<br/>Removes crowd control effects on allies within range of <i>Verdant Garden</i> and grants them crowd control immunity for 1 second with <i>Dew of Purification</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=spellAtk*0.35;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt to enemies and health restored to allies within range of <i>Verdant Garden</i> upon skill use with <i>Early Spring</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillHealing); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    SkillDmg= nearest100th(SkillDmg);
    SkillDmg= enFormat(SkillDmg);
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> healing per second from <i>Verdant Garden</i><br/><b>"+ SkillDmg+ "</b> damage dealt per second to enemies by <i>Verdant Garden</i>"+ output1+ output2+ output3);

    return 31;
}

function calcTaesanSkill(){
    let Hero="Taesan";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1180+(1180*(hpBonus/100));
    let spellAtk=118+(118*(spellBonus/100));
    let atk=177+(177*(atkBonus/100));
    let asp=83+(83*(aspBonus/100));
  
    let SkillDmg= 0;
    SkillDmg=30+spellAtk;
    let SkillProtection=hp*0.50;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>After using <i>Power of Great Tiger</i>, the next normal attack deals damage to enemies within 3x3 range in front with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="<br/>Spell Damage and Physical Damage equal to 20% of current Protection is added to <i>Power of Great Tiger</i> and the normal attack inflicted after skill use respectively with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*2;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by <i>Tiger Strike</i> attack with <i>Tiger Strike</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/><i>Tenacity</i> does not impact Taesan's skill's effect";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    SkillProtection= nearest100th(SkillProtection);
    SkillProtection= enFormat(SkillProtection);
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Power of the Great Tiger</i> attack<br/><b>"+ SkillProtection+ "</b> protection gained per <i>Power of the Great Tiger</i> use"+ output1+ output2+ output3);

    return 32;
}

function calcTiaSkill(){
    let Hero="Tia";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=944+(944*(hpBonus/100));
    let spellAtk=0+(0*(spellBonus/100));
    let atk=148+(148*(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    SkillDmg=atk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+20% final damage dealt to enemies within 3 blocks with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Next <i>Gust</i> skill shoots double the amount of arrows when the target is killed Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/><i>Avoid Risk</i> does not impact Tia's skill behavior";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/><i>Gust</i>'s first arrow pushes targets back by 2 blocks if they're not within 3 blocks of Tia with <i>Breeze</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    let SkillDmg2=SkillDmg*1.40;
    SkillDmg2= nearest100th(SkillDmg2);
    SkillDmg2= enFormat(SkillDmg2);
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Gust</i> arrow if the target is within 3 blocks<br/><b>"+ SkillDmg2+"</b> damage dealt per <i>Gust</i> arrow if the target is not within 3 blocks"+ output1+ output2+ output3);

    return 33;
}

function calcZuoBaiSkill(){
    let Hero="ZuoBai";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=1357+(1357*(hpBonus/100));
    let spellAtk=207+(207*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=125*(1+(aspBonus/100));
  
    SkillDmg=10+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= atk+spellAtk;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br>Increases attack by <b>"+ enFormat(nearest100th(spellAtk))+ "</b> ("+ enFormat(nearest100th(atk))+ " → "+ temp+ ") with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=spellAtk;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br>After using <i>Crimson Slash</i>, next 3 normal attacks deal additional <b>"+ temp+ "</b> spell damage with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Does an additional <i>Crimson Slash</i> attack when an enemy is killed with <i>Crimson Slash</i>, and takes 25% less damage during <i>Crimson Slash</i> with <i>Consecutive Slashes</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=atk*0.80;
        output3="<br/><b>"+ enFormat(nearest100th(temp))+ "</b> additional damage dealt by each <i>Crimson Slash</i> attack ("+ enFormat(nearest100th(SkillDmg))+ " → "+ enFormat(nearest100th((SkillDmg+temp)))+") with <i>Advanced Crimson Slash</i> active";
        SkillDmg+=temp;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Crimson Slash</i> attack"+ output1+ output2+ output3);

    return 34;
}

function calcAgatheSkill(){
    let Hero="Agathe";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=2065+(2065*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=100+(100*(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let skillDuration=3+(spellAtk/10);

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>5x5 radius for <i>Protection of Radiance</i> (2x2 → 5x5) with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Recovers 50% of max MP at the start of battle Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=hp*0.20;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> health restored to allies when Agathe dies with <i>Sacrifice</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=0;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Without the damage taken by Agathe during <i>Protection of Radiance</i>, it's not possible to calculate the damage bonus granted to allys with <i>Retribution</i> active";
    }
    
    let finalSkillDmg= nearest100th(skillDuration); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> seconds duration for <i>Protection of Radiance</i>"+ output1+ output2+ output3);

    return 35;
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
    let asp=125*(1+(aspBonus/100));

    SkillDmg=(300+(spellAtk/10))*atk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= SkillDmg*1.60;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br>Up to +60% additional damage dealt per arrow of <i>Annihilation Time</i> ("+ enFormat(nearest100th(SkillDmg))+ " → "+ temp+ ") with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=asp-100;
        let X= 0;
        while (temp>0){
            temp-=3;
            if (temp>=0){
                X+=0.01;
            }
        }
        if (X>0.50){
            X= 0.50;}

        output2="</br>Deals <b>"+ enFormat(nearest100th((SkillDmg*X)))+ "</b> additional damage from a <b>"+ (X*100)+ "</b>% damage increase ("+enFormat(nearest100th(SkillDmg)) +" → "+ enFormat(nearest100th((SkillDmg*(1+X))))+") with Lv8 Passive";
        SkillDmg=SkillDmg*(1+X);
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Maximum of +3 additional attacks for <i>Annihilation Time</i> with <i>Everlasting Night</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/><i>Shroud of Night</i> prevents Neria from being targeted, but she can still take damage from AoE attacks";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Annihilation Time</i> attack"+ output1+ output2+ output3);
    return 1;
}

function calcHaerangSkill(){
    let Hero="Haerang";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let hp=826+(826*(hpBonus/100));
    let spellAtk=89+(89*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=91*(1+(aspBonus/100));
  
    SkillDmg=10+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+1.25 seconds for stun duration for the first two concentrated waves of <i>Wave Catcher</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Recovers 50% of MP at the start of battle";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*0.30;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt by wave ripples with <i>High Tide</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Freezes the first two enemies hit with <i>Wave Catcher</i> with <i>Frozen Sea</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Wave Catcher</i> concenctrated wave"+ output1+ output2+ output3);

    return 36;
}

function calcGidnilSkill(){
    let Hero="Gidnil";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1475+(1475*(hpBonus/100));
    let spellAtk=0+(0*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=100*(1+(aspBonus/100));

    let SpellBlocks= 2;
  
    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= spellAtk*0.3;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br>When Gidnil's Spell Block nulifies an enemys movement-restricting skill, stuns that enemey for 1.5 seconds with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>+150 DEF for 3 seconds when using <i>Holy Protection</i> with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Takes 50% less damage from enemy skills for 3 seconds when all Gidnil's Spell Blocks are destroyed with <i>Indomitable</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp= SpellBlocks;
        output3="<br/>Gidnil receives <b>"+ (temp/2)+ "</b> Spell Blocks ("+ temp+ " → "+ (temp/2)+ ") and gives <b>"+ (temp/2)+ "</b> Spell Blocks to allies within 7x7 range when using <i>Holy Protection</i> with <i>Holy Expansion</i> active";
        SpellBlocks/=2;
    }
        
    document.getElementById(Hero+"SkillDmg").innerHTML=("Gidnil gains <b>"+ SpellBlocks+ "</b> Spell Blocks from <i>Holy Protection</i>"+ output1+ output2+ output3);

    return 37;
}

function calcKanakSkill(){
    let Hero="Kanak";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=944+(944*(hpBonus/100));
    let spellAtk=207+(207*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg= spellAtk;
    let SkillDmg2= spellAtk*0.40;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Transfers an enemy's Curse Stacks to a nearby enemy when Kanak kills them with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Kanak takes 30% less damage from enemies who have a Curse Stack with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>When using <i>Soul Rip</i> on a target with Curse Stacks, grants 1 Curse Stack each to 2 nearby enemies with <i>Remnant of Spirits</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>Resonance damage incrased from 40% → 70% of <i>Spell Power</i> ("+ enFormat(nearest100th(SkillDmg2))+ " → "+ enFormat(nearest100th((spellAtk*0.70)))+ ") with <i>Spirit's Curse</i> active";
        SkillDmg2= (spellAtk*0.70);
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    SkillDmg2=enFormat(nearest100th(SkillDmg2));
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt to target when giving them a Curse Stack<br/><b>"+ SkillDmg2+ "</b> damage dealt per Curse Stack on <i>Soul Rip</i> skill use"+output1+  output2+ output3);

    return 38;
}

function calcRieSkill(){
    let Hero="Rie";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=826+(826*(hpBonus/100));
    let spellAtk=177+(177*(spellBonus/100));
    let atk=89+(89*(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let chargeDmg=spellAtk;
    let dollAtk= spellAtk/10;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        let temp= spellAtk*2;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output1="</br><b>"+ temp+ "</b> charge damage dealt by the Doll summoned last ("+ enFormat(nearest100th(spellAtk))+ " → "+ temp+ ") with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Rie recovers 15 MP when a doll is destroyed with Lv8 Passive";
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
        output3="<br/><b>"+ temp+ "</b> damage dealt to enemies within a 3x3 range of a Doll when it's destroyed with <i>Order: Sacrifice</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=dollAtk*2.50;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>+250% damage dealt by doll's normal attacks ("+ enFormat(nearest100th(dollAtk))+ " → "+ temp+"), -50% charge damage dealt by dolls ("+ enFormat(nearest100th(chargeDmg))+ " → "+ enFormat(nearest100th(chargeDmg*0.50))+ "), and grants 1 Mighty Block to dolls when summoned with <i>Command: Modification</i> active";
        dollAtk*=2.50;
        chargeDmg*-0.50;
    }
    
    let finalSkillDmg= nearest100th(chargeDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    dollAtk=enFormat(nearest100th(dollAtk));

    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per doll charge attack<br/><b>"+ dollAtk+ "</b> damage dealt per Doll's normal attack"+ output1+ output2+ output3);

    return 39;
}

function calcNibellaSkill(){
    let Hero="Nibella";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1357+(1357*(hpBonus/100));
    let spellAtk=207+(207*(spellBonus/100));
    let atk=148+(148*(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let chargeDmg=20+spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Nibella recovers 100% MP on normal attacks for the first 4 seconds of battle with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=spellAtk*2;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output2="</br><b>"+ temp+ "</b> damage dealt on the first normal attack after using <i>Desert Charge</i> with Lv8 Passive";
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
        output3="<br/><b>"+ temp+ "</b> damage dealt on the next 3 normal attacks in a 5x5 range after using <i>Desert Charge</i> with <i>Sandsword Gale</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=chargeDmg*0.70;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealt per <i>Desert Charge</i> ("+ enFormat(nearest100th(chargeDmg))+ " → "+ temp+ ") with <i>Recurrence</i> active";
        chargeDmg*=0.70;
    }
    
    let finalSkillDmg= nearest100th(chargeDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Desert Charge</i> damage instance"+ output1+ output2+ output3);

    return 40;
}

function calcTaebaekSkill(){
    let Hero="Taebaek";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=1652+(1652*(hpBonus/100));
    let spellAtk=59+(59*(spellBonus/100));
    let atk=118+(118*(atkBonus/100));
    let asp=91*(1+(aspBonus/100));
  
    let SkillDmg=spellAtk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Limits provoking range of <i>White Tiger Kick</i> to 5x5 with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>Taebaek takes 50% less damage from provoked enemies for 4 seconds with Lv8 Passive";
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
        output3="<br/><b>"+ temp+ "</b> damage dealt by the shockwave created after <i>White Tiger Kick</i> ends with <i>Lightning Kick</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=hp*0.75;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>-25% final max HP for Taebaek ("+ enFormat(nearest100th(hp))+ " → "+ temp+ ") with <i>No Retreat</i> active";
        hp*=0.75;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt by <i>White Tiger Kick</i><br/>Minimum of <b>"+ output+ "</b> damage dealt at the end of <i>White Tiger Kick</i>"+ output1+ output2+ output3);

    return 41;
}

function calcCathySkill(){
    let Hero="Cathy";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=944+(944*(hpBonus/100));
    let spellAtk=0+(0*(spellBonus/100));
    let atk=35+(35*(atkBonus/100));
    let asp=125*(1+(aspBonus/100));
  
    let SkillDmg=atk;
    let richochetDmg= SkillDmg*0.70;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>+2 attack counts for <i>Dancing Bullet</i> when Cathy kills an enemy during <i>Dancing Bullet</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let temp=asp-100;
        let Y= 0;
        while (temp>0){
                temp-=30;
            if (temp>=0){
                Y++;
            }
        }
        output2="</br><i>Dancing Bullet</i> has <b>"+ Y+ "</b> additional attack counts with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp=SkillDmg*5;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> damage dealy by the final hit of <i>Dancing Bullet</i> with <i>Finale</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=SkillDmg*0.70;
        temp= nearest100th(temp);
        temp= enFormat(temp);

        let temp2= SkillDmg*1.40;
        temp2= nearest100th(temp2);
        temp2= enFormat(temp2);

        output3="<br/>Richochet damage increased from 70% → 140% ("+ temp+ " → "+ temp2+ ") with <i>Strafe</i> active";

        richochetDmg=SkillDmg*1.40;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    richochetDmg=enFormat(nearest100th(richochetDmg));
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Dancing Bullet</i> hit<br/><b>"+ richochetDmg+ "</b> damage dealt per <i>Dancing Bullet</i> richochet hit"+ output1+ output2+ output3);

    return 42;
}

function calcEstheaSkill(){
    let Hero="Esthea";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    let hp=885*(1+(hpBonus/100));
    let spellAtk=0*(1+(spellBonus/100));
    let atk=117*(1+(atkBonus/100));
    let asp=100*(1+(aspBonus/100));
  
    let SkillDmg= atk*1.60;
    let DmgBonus= atk*1.60;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Target ally of <i>Sacred Censer</i> has +2 Knockback on their next normal attack with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        let equipmentNumber= document.getElementById("EstheaEquipmentAmount").value;
        let extraAsp=35*equipmentNumber;
        console.log(extraAsp);
        console.log(aspBonus);

        //gotta use parseInt because for some reason aspBonus is being treated like a string here but nowhere else when I try to add (aspBonus+extraAsp) (it's returning 00 instead of 0) which is throwing off the calculating of Esthea's attack speed
        aspBonus=parseInt(aspBonus);

        aspBonus+=extraAsp;
        console.log(aspBonus);
        let asp2=100*(1+(aspBonus/100));

        output2="</br><b>"+ extraAsp+ "</b>% <i>Attack Speed</i> increase from <b>"+ equipmentNumber+ "</b> gear equipped ("+ enFormat(nearest100th(asp))+ "% → "+ enFormat(nearest100th(asp2))+ "%) with Lv8 Passive";
        
        asp=100*(1+(aspBonus/100));
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>Esthea casts <i>Sacred Cencer</i> on herself upon every third <i>Sacred Censer</i> with <i>Spreading Flame</i> active";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp= atk*0.96;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/><b>"+ temp+ "</b> protection granted to <i>Sacred Censer</i> target instead of attack bonus with <i>Touch of Embrace</i> active";
        DmgBonus= 0;
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    DmgBonus=enFormat(nearest100th(DmgBonus));

    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> health restored to target ally per <i>Sacred Censer</i> use<br/><b>"+ DmgBonus+ "</b> damage added to the target ally's next normal attack per <i>Sacred Censer</i> use"+ output1+ output2+ output3);

    return 43;
}

function calcBaldirSkill(){
    let Hero="Baldir";
    //getting the value of the numerical inputs by the user
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    

    //setting the new values of the stats after taking the bonuses into account
    //Baldir Base Form
    let hp1=885*(1+(hpBonus/100));
    let spellAtk1=83*(1+(spellBonus/100));
    let atk1=118*(1+(atkBonus/100));
    let asp1=83*(1+(aspBonus/100));

    //Baldir Nature's Fury Form
    let hp2=2213*(1+(hpBonus/100));
    let spellAtk2=83*(1+(spellBonus/100));
    let atk2=118*(1+(atkBonus/100));
    let asp2=100*(1+(aspBonus/100));

    //Baldir Eternal Wisdom Form
    let hp3=885*(1+(hpBonus/100));
    let spellAtk3=248*(1+(spellBonus/100));
    let atk3=118*(1+(atkBonus/100));
    let asp3=125*(1+(aspBonus/100));
  
    let SkillDmg1=spellAtk2+atk2;
    let SkillDmg2= 20+spellAtk3;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Recovers 100% MP at the start of battle with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>MP cost of <i>Energy of the Forest</i> reduced by 30 (75 → 45) with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        let temp1=hp2*0.25;
        temp1= enFormat(nearest100th(temp1));
        let temp2=spellAtk3*0.75;
        output3="<br/><b>"+ temp1+ "</b> health recovered by Nature's Fury Baldir and <b>"+ temp2+ "</b> additional spell damage dealt by Eternal Wisdom Baldir when they attack an enemy with a mark generated by <i>Echo of the Forest</i>";
    }
    else if (document.getElementById(Hero+"A2").checked){
        let temp=hp2*0.40;
        temp= nearest100th(temp);
        temp= enFormat(temp);
        output3="<br/>Gains <b>"+ temp+ "</b> protection when using skill with <i>Solitude of the Forest</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg1); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number

    SkillDmg2=enFormat(nearest100th(SkillDmg2));
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Timber Split</i> attack<br/><b>"+ SkillDmg2+ "</b> damage dealt per <i>Energy of the Forest</i> attack"+ output1+ output2+ output3);

    return 44;
}

function calcIanSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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

    return 45;
}

function calcOpheliaSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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

function calcKirdanSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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

function calcManoSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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

function calcVictoriaSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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

function calcAenrathSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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

function calcElizabethSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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

function calcSaeryungSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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

function calcFaraelSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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

function calcGaramSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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

function calcDandelynSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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

function calcSarasSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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

function calcJinjuSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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

function calcBellinaSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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
    let asp=100*(1+(aspBonus/100));
    let hp=1593+(1593*(hpBonus/100));

    SkillDmg=(250+(spellAtk/16.66))*atk;

    let output1="";
    if (document.getElementById(Hero+"Lv4Passive").checked){
        output1="</br>Sargula heals herself for 100% on Max HP when entering <i>Void Form</i> with Lv4 Passive";
    }
    else{
        output1="<br/><i>Lv4 Passive not active</i>";}

    let output2="";
    if (document.getElementById(Hero+"Lv8Passive").checked){
        output2="</br>-30 MP removed from the target's current MP amount on the third normal attack after entering <i>Void Form</i> with Lv8 Passive";
    }
    else{
        output2="<br/><i>Lv8 Passive not active</i>";}


    let output3="";
    if (document.getElementById(Hero+"A0").checked){
        output3="</br><i>No awakening skill selected</i>";
    }
    else if (document.getElementById(Hero+"A1").checked){
        output3="<br/>With <i>Void Ritual</i> active, the highest tier deployed Sargula will kill allies on both the left and right of her at the beginning of the battle. Gains 60 Void and 25% Physical HP drain per ally killed";
    }
    else if (document.getElementById(Hero+"A2").checked){
        output3="<br/>If sargula is the highest-tier hero on the ally battlefield, enemies are prevented from recovering MP for 3 seconds when Sargula enters <i>Void Form</i> with <i>Demise</i> active";
    }
    
    let finalSkillDmg= nearest100th(SkillDmg); //rounding to nearest 100th
    let output= enFormat(finalSkillDmg); //adding commas to the number
    
    document.getElementById(Hero+"SkillDmg").innerHTML=("<b>"+ output+ "</b> damage dealt per <i>Punishment of Void</i> attack"+ output1+ output2+ output3);

    return 2;
}

function calcMaiuSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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

function calcPatrosSkill(){
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
    let asp=100*(1+(aspBonus/100));
  
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