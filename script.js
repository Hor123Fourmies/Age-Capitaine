


for (var i=0; i<=20; i++)
{
    var x = Math.random()*100;
    x = Math.floor(x);

    if (x<50) {
        //alert('Le capitaine a ' +x +' ans. Il est jeune.');
        document.getElementById('ageCapitaine').innerHTML+=[i]+
            ' Le capitaine a ' +x +' ans. Il est jeune.';
    }


    else if (x>50) {
        //alert('le capitaine a ' +x +' an(s). Il est âgé.');
        document.getElementById('ageCapitaine').innerHTML+=[i]+
            ' Le capitaine a ' +x +' ans. Il est âgé.';
    }

    else if (x===50) {
        //alert('Le capitaine a '+x +' ans. Joyeux 50ème anniversaire !');
        document.getElementById('ageCapitaine').innerHTML+=[i]+
            ' Le capitaine a ' +x +' ans. Joyeux 50ème anniversaire !';
    }

}
