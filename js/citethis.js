// add bib title to <title> tag
try {
    var tr = document.getElementsByTagName('TR');
    var bib_title = "";
    for (i = 0; i < tr.length; i++) {
        var x = tr[i].getElementsByTagName('TD');
        if (x.length == 2 && x[0].innerHTML == "Title") {
            bib_title = x[1].innerHTML.replace(/(<([^>]+)>)|\n/gi, "");
            bib_title = bib_title.replace(/^\s*(.+)\s*$/g, "$1");
            bib_title = bib_title.replace(/^(.+)(\s\/\s).+$/i, "$1");
            bib_title = bib_title.replace(/ :/g, ":");
            bib_title = bib_title.replace(/\//g, "by");
            bib_title = bib_title.replace(/&amp;/g, " and ");
        }
    }
    var searchterms = document.getElementsByName('searcharg')[0];
    if (bib_title.length > 65) {
        document.title = document.title + " :: " + bib_title.substr(0, 65) +
            "...";
    } else if (bib_title.length <= 65 && bib_title.length > 0) {
        document.title = document.title + " :: " + bib_title;
    } else if (searchterms != undefined) {
        document.title = document.title + " :: '" + searchterms.value +
            "' search results"
    }
} catch (e) {
    alert(e);
}


// begin "Cite This" script from IUG list
try {
    var tr = document.getElementsByTagName('TR');
    var otherlib_title = "";
    for (k = 0; k < tr.length; k++) {
        var x = tr[k].getElementsByTagName('TD');
        if (x.length == 2 && x[0].innerHTML == "OCLC #") {
            otherlib_title = x[1].innerHTML.replace(/(<([^>]+)>)/ig, "");
            otherlib_title = otherlib_title.replace(/ /g, "");
            otherlib_title = otherlib_title.replace(/[\n\t]/ig, "");
        }
    }
    var check = document.getElementById("citeoclc");
    if (check == null) {} else if (otherlib_title.length > 0) {
        document.getElementById("citeoclc").innerHTML =
            "<a href='http://worldcat.org/wcpa/oclc/" + otherlib_title +
            "?page=citation' class='lightbox'>  Cite this item</a>";
    } else {
        document.getElementById("citeoclc").style.display = "none";
    }
} catch (e) {}
