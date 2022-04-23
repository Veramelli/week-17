function getFullName() {
    let q = document.querySelector('input').value.trim();
    console.log(q);
    let m = q.split(' ');
    console.log(m);

    let e = m.slice(0, 1).join();
    console.log(e);
    let h = e[0].toUpperCase() + e.slice(1).toLowerCase();
    console.log(h);

    let r = m.slice(1, 2).join();
    console.log(r);
    let l = r[0].toUpperCase() + r.slice(1).toLowerCase();
    console.log(l);

    let t = m.slice(2).join();
    console.log(t);
    let u = t[0].toUpperCase() + t.slice(1).toLowerCase();
    console.log(u);

    document.querySelector('.lastname').value = h;
    document.querySelector('.firstname').value = l;
    document.querySelector('.patronymic').value = u;
}