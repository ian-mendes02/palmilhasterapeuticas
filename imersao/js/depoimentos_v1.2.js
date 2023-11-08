async function fetch_d() {
    let d;
    await fetch('./js/depoimentos.json')
        .then(res => res.json())
        .then(data => { d = data; });
    return d;
}
const mobile = window.innerWidth <= 820;
const depoimentos = await fetch_d().then(data => { return data; });
const d_container = document.querySelector("#depoimentos ul");
const p_counter = document.getElementById("page_counter");
let buttons = document.getElementById("d_buttons").children;
const options = `frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen`
var pnum = 1;
var pageCount;
var panels;
const writeList = () => {
    for (let i = 0; i < depoimentos.length; i++) {
        let dp = depoimentos[i];
        let li_content = `
        \n<div class="depoimento">
        \n\t<div class="video-wrapper"  playing="false">
        \n\t\t<div class="thumbnail" style="background-image: url(${dp.thumbnail})"></div>
        \n\t</div>
        \n\t<div class="text-wrapper">
        \n\t\t<h1>${dp.nome}, <small>${dp.profissao}</small></h1>
        \n\t\t<p>\"${dp.destaque}\"</p>
        \n\t</div>
        \n</div>
        `;
        let li = document.createElement("li");
        li.setAttribute("index", i);
        li.innerHTML = li_content;
        d_container.appendChild(li);
    };
    var v_wrapper = d_container.querySelectorAll(".video-wrapper");
    for (let i = 0; i < v_wrapper.length; i++) {
        let dp = depoimentos[i];
        v_wrapper[i].addEventListener("click", () => v_wrapper[i].innerHTML = `\n\t\t<iframe src="https://www.youtube.com/embed/${dp.iframe.src}?autoplay=1&amp;rel=0" title="${dp.iframe.title}" ${options}></iframe>`);
    };
    countPages();
};
function updateList() {
    if (!mobile) {
        d_container.setAttribute("page", pnum);
        var bullets = Array.from(p_counter.children);
        bullets.forEach(b => b.classList.remove("active"));
        bullets[pnum - 1].classList.add("active");
        pageCount = Math.round(d_container.children.length / 3);
        panels = Array.from(d_container.children);
        panels.forEach(p => p.style.display = "none");
        panels.slice((pnum - 1) * 3, pnum * 3).forEach(p => p.style.display = "block");
    }
}
function countPages() {
    if (!mobile) {
        pageCount = Math.round(d_container.children.length / 3);
        for (let i = 0; i < pageCount; i++) {
            let bullet = document.createElement("div");
            p_counter.appendChild(bullet);
            bullet.classList.add("bullet");
        };
        updateList();
    }
}
if (!mobile) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            i == 0 ? pnum-- : pnum++;
            if (pnum > pageCount) {
                pnum = 1;
            };
            if (pnum < 1) {
                pnum = pageCount;
            }
            updateList();
        });
    }
}

writeList()





