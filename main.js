var keys=[];
var keyPressed=function(){keys[keyCode]=true;};
var keyReleased=function(){keys[keyCode]=false;};
var quests=[];
var npcs=[];
var npc=function(x,y,quests,textstuff,skin){
    this.x=x;
    this.y=y;
    this.quests=quests;
    this.textstuff=textstuff;
    this.skin=skin;
};
npc.draw= function() {
   
};
npc.addQuest=function(questd,place,item){
    quests.push(questd,place,item);
};
var newQuest=function(){
    
};
var page="Main";
var selection="";
var alive=true;
var blockSize=10;
var blocks=[];
var addBlock=function(skin){
    blocks.push(skin);
};

};
var player=function(x,y,level,xp,weapon,char,health,size,loc){
    this.x=x;
    this.y=y;
    this.level=level;
    this.xp=xp;
    this.weapon=weapon;
    this.char=char;
    this.health=health;
    this.size=size;
};

player.prototype.xplevelup=function(){
    if(this.xp>=this.level*75){
        this.xp-=this.xp-this.level*75;
    }
};
player.prototype.removehealth=function(amount){
    this.health-=this.health-amount;
    if(this.health<=0){
        alive=false;
        this.xp-=this.xp-this.level*10;
    }
};

/**Chars*/
var chars={
    Archer:{
        health:10,
        damage:7,
        range:10,
        defence:3,
        speed:5,
        desc:"Power: Super-Charged shot",
        skin:Archer
    },
    Mage:{
        health:10,
        damage:10,
        range:7,
        defence:5,
        speed:4,
        desc:"Power: Magic buffs",
        skin:Mage
    },
    Tank:{
        health:20,
        damage:5,
        range:3,
        defence:8,
        speed:2,
        desc:"Power: Takes no damage for ten seconds",
        skin:Warrior
    },
    Warrior:{
        health:10,
        damage:10,
        range:5,
        defence:4,
        speed:3,
        desc:"Power: Deal double damage for ten seconds",
        skin:Warrior
    },
    Scout:{
        health:5,
        damage:5,
        range:5,
        defence:2,
        speed:8,
        desc:"Power: Run twice as fast for ten seconds",
        skin:Warrior
    },
    Wizard:{
        health:15,
        damage:8,
        range:8,
        defence:4,
        speed:4,
        desc:"Power: Assorted magic buffs",
        skin:Wizard
    }
};
if(1===1){background(0);}