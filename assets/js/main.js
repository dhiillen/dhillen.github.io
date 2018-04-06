var time = document.getElementById('time');

function timeh() {
	var tm = new Date();
	var h = String(tm.getHours());
	var s = String(tm.getSeconds());
	var m = String(tm.getMinutes());
	if(h.length < 2) {
		h = '0' + h;
	}

	if(s.length < 2) {
		s= '0' + s;
	}

	if(m.length < 2) {
		m = '0' + m;
	}
	timeString = h + ':' + m + ':' + s;
	time.textContent = timeString;
}

timeh();
setInterval(timeh, 1000);
