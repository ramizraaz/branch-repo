function dt() {
    var da = new Date(); // Date object

    switch (da.getDay()) {
        case 1:
            alert('MonDay.It\'s working day')
            break;
        case 2:
            alert('TuesDay.It\'s working day')
            break;
        case 3:
            alert('WednesDay.It\'s working day')
            break;
        case 4:
            alert('ThursDay.It\'s working day')
            break;
        case 5:
            alert('FriDay.It\'s working day')
            break;
        case 6:
            alert('SaturDay.It\'s weekend')
            break;
        case 7:
            alert('SunDay.It\'s weekend')
            break;
    }

}

var countdown = 10;

function timer() {
    var bt = document.getElementById('bt');


    if (countdown == 0) {
        bt.removeAttribute('disabled')
        countdown = 10;
        bt.innerText = 'check'
    } else {
        bt.innerText = countdown;
        countdown--;
        setTimeout(function() { timer() }, 1000)
    }
}
window.onload = timer();