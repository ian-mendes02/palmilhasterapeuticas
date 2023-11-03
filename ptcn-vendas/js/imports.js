const src = "./modules";
const mds = ['collapsible', 'floating-buttons', 'scroll-menu', 'toggle-theme', 'carousel'];
const import_modules = new Promise ((resolve) => {
    var imports = [];
    for (var i = 0; i < mds.length; i++) {
        var msrc = `${src}/${mds[i]}.js`;
        if (document.querySelectorAll(`[data-component=\'${mds[i]}\']`).length > 0) {
            import(msrc)
            .then(imports.push(mds[i]))
            .catch(error => console.log(`%cFailed to import module ${mds[i]} from ${msrc}. ${error}`,"color: tomato"))
        }
} resolve(imports)
});
window.addEventListener("DOMContentLoaded", () => {
    import_modules.then(i => { i.length > 0 
        ? console.log(`Successfully imported ${i.length} modules from ${src}: ${i}`) 
        : console.log("No modules were imported.")
    })
})