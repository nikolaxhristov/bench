const n = document.getElementById("navheader"),
	t = document.getElementById("menubtn"),
	o = document.getElementById("navlogo");
t.onclick = () => n.classList.toggle("open");
matchMedia("(pointer:fine)").matches &&
	o.addEventListener("contextmenu", (e) => {
		e.preventDefault(), (window.location.href = "/press");
	});
