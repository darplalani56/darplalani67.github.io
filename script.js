var names=new Array();
names[0]="Darp";
names[1]="Harsh";
names[2]="nand";
names[3]="Ved";
names[4]="Dhairya";
names[5]="Meet Barot";
names[6]="Nikunj";
names[7]="Pala";
names[8]="Alok";
names[9]="Om";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}