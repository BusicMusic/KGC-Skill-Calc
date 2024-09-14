function calcSkill(Hero){
    switch(Hero){
        case Aramis:
            calcAramisSkill();
            break;
        case Evan:
            calcEvanSkill();
            break;
        case Shelda:
            calcSheldaSkill();
           break;
        case Leonhardt:
            calcLeonhardtSkill();
            break;
        case Priya:
            calcPriyaSkill();
            break;
        case Daniel:
            calcDanielSkill();
            break;
        case Mara:
            calcMaraSkill();
            break;
        case ChungAh:
            calcChungAhSkill();
            break;
        case Lily:
            calcLilySkill();
            break;
        case Jol:
            calcJolSkill();
            break;
        case Ren:
            calcRenSkill();
            break;
        case Behemus:
            calcBehemusSkill();
            break;
        case Lyca:
            calcLycaSkill();
            break;
        case Rossette:
            calcRossetteSkill();
            break;
        case Lunaire:
            calcLunaireSkill();
            break;
        case Yeon:
            calcYeonSkill();
            break;
        case ZuoYun:
            calcZuoYunSkill();
            break;
        case Zupitere:
            calcZupitereSkill();
            break;
        case Draco:
            calcDracoSkill();
            break;
        case Mel:
            calcMelSkill();
            break;
        case Rahawk:
            calcRahawkSkill();
            break;
        case Hansi:
            calcHansiSkill();
            break;
        case Asiaq:
            calcAisaqSkill();
            break;
        case Bombie:
            calcBombieSkill();
            break;
        case Bardrey:
            calcBardreySkill();
            break;
        case Alberon:
            calcAlberonSkill();
            break;
        case Cain:
            calcCainSkill();
            break;
        case Hela:
            calcHelaSkill();
            break;
        case Mirsyl:
            calcMirsylSkill();
            break;
        case Taesan:
            calcTaesanSkill();
            break;
        case ZuoBai:
            calcZuoBaiSkill();
            break;
        case Agathe:
            calcAgatheSkill();
            break;
        case Neria:
            calcNeriaSkill();
            break;
        case Haerang:
            calcHaerangSkill();
            break;
        case Gidnil:
            calcGidnilSkill();
            break;
        case Kanak:
            calcKanakSkill();
            break;
        case Rie:
            calcRieSkill();
            break;
        case Nibella:
            calcNibellaSkill();
            break;
        case Taebaek:
            calcTaebaekSkill();
            break;
        case Cathy:
            calcCathySkill();
            break;
        case Esthea:
            calcEstheaSkill();
            break;
        case Baldir:
            calcBaldirSkill();
            break;
        case Ian:
            calcIanSkill();
            break;
        case Ophelia:
            calcOpheliaSkill();
            break;
        case Kirdan:
            calcKirdanSkill();
            break;
        case Mano:
            calcManoSkill();
            break;
        case Victoria:
            calcVictoriaSkill();
            break;
        case Aenrath:
            calcAenrathSkill();
            break;
        case Elizabeth:
            calcElizabethSkill();
            break;
        case Saeryung:
            calcSaeryungSkill();
            break;
        case Farael:
            calcFaraelSkill();
            break;
        case Garam:
            calcGaramSkill();
            break;
        case Dandelyn:
            calcDandelynSkill();
            break;
        case Saras:
            calcSarasSkill();
            break;
        case Jinju:
            calcJinjuSkill();
            break;
        case Bellina:
            calcBellinaSkill();
            break;
        case Sargula:
            calcSargulaSkill();
            break;
        case Maiu:
            calcMaiuSkill();
            break;
        default:
            console.log("error in selecting hero- no function found");
    }
}


//Skill Damage Calculator functions for each hero start below
function calcAramisSkill(){}

function calcEvanSkill(){}

function calcSheldaSkill(){}

function calcLeonhardtSkill(){}

function calcPriyaSkill(){}

function calcDanielSkill(){}

function calcMaraSkill(){}

function calcChungAhSkill(){}

function calcLilySkill(){}

function calcJolSkill(){}

function calcRenSkill(){}

function calcBehemusSkill(){}

function calcLycaSkill(){}

function calcRossetteSkill(){}

function calcLunaireSkill(){}

function calcYeonSkill(){}

function calcZuoYunSkill(){}

function calcZupitereSkill(){}

function calcDracoSkill(){}

function calcMelSkill(){}

function calcHansiSkill(){}

function calcAsiaqSkill(){}

function calcBombieSkill(){}

function calcAlberonSkill(){}

function calcCainSkill(){}

function calcHelaSkill(){}

function calcMirsylSkill(){}

function calcTaesanSkill(){}

function calcTiaSkill(){}

function calcZuoBaiSkill(){}

function calcAgatheSkill(){}

function calcNeriaSkill(){
    let Hero="Neria";
    //getting the value of the numerical inputs by the user
    let atkBonus= document.getElementById(Hero+ "AtkBonus").value;
    let spellBonus= document.getElementById(Hero+ "SpellBonus").value;
    let aspBonus= document.getElementById(Hero+ "AspBonus").value;
    let hpBonus= document.getElementById(Hero+ "HpBonus").value;
    
    //setting the new values of the stats after taking the bonuses into account
    let SkillDmg= 0;
    let atk=94+(94*(atkBonus/100));
    let spellAtk=89+(89*(spellBonus/100));
    let asp=125+(125*(aspBonus/100));
    let hp=826+(826*(hpBonus/100));

    SkillDmg= atk*(300+(spellAtk/10));
    let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
    let output= finalSkillDmg.toLocaleString('en')
    
    document.getElementById("NeriaSkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Annihilation Time</i> attack");
    return 1;
}

function calcHaerangSkill(){}

function calcGidnilSkill(){}

function calcKanakSkill(){}

function calcRieSkill(){}

function calcNibellaSkill(){}

function calcTaebaekSkill(){}

function calcCathySkill(){}

function calcEstheaSkill(){}

function calcBaldirSkill(){}

function calcIanSkill(){}

function calcOpheliaSkill(){}

function calcKirdanSkill(){}

function calcManoSkill(){}

function calcVictoriaSkill(){}

function calcAenrathSkill(){}

function calcElizabethSkill(){}

function calcSaeryungSkill(){}

function calcFaraelSkill(){}

function calcGaramSkill(){}

function calcDandelynSkill(){}

function calcSarasSkill(){}

function calcJinjuSkill(){}

function calcBellinaSkill(){}

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

    SkillDmg= (250+(spellAtk/16.66));
    SkillDmg= atk * (SkillDmg/100);
    let finalSkillDmg=Math.round(SkillDmg*100)/100; //rounding to nearest 100th
    let output= finalSkillDmg.toLocaleString('en')
    
    document.getElementById("SargulaSkillDmg").innerHTML=("<b>"+ output+ "</b> per <i>Punishment of Void</i> attack");
    return 2;
}

function calcMaiuSkill(){}

//end of skill calculator functions
