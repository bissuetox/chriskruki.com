const PIC1 = "img/kc_1.png";
const PIC2 = "img/koda.png";

$(document).ready(function() {
    // Switch Button Stuff
    var tgl = 0;
    $("#switch_button").on("click", function() {
        if (tgl == 1) {
            $("#test-img").attr("src", PIC1);
            tgl = 0;
        } else if (tgl == 0) {
            $("#test-img").attr("src", PIC2);
            tgl = 1;
        }
    });
});