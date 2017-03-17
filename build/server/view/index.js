"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.render2Html = render2Html;
function render2Html(uid, render) {

    return "<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        <title>" + uid + "</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <link rel=\"stylesheet\" href=\"/css/font-awesome.min.css\">\n        <!-- Loading Bootstrap -->\n        <link href=\"/css/vendor/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n        <!-- Loading Flat UI -->\n        <link href=\"/css/flat-ui.min.css\" rel=\"stylesheet\">\n\n        <link rel=\"shortcut icon\" href=\"/img/favicon.ico\">\n\n        <!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->\n        <!--[if lt IE 9]>\n        <script src=\"/js/vendor/html5shiv.js\"></script>\n        <script src=\"/js/vendor/respond.min.js\"></script>\n        <![endif]-->\n    </head>\n    <body>\n\n        <div id=\"app\" class=\"container\" style=\"background-color: white\">" + render + "</div>\n\n        <div style=\"position: fixed; right: 16px; bottom: 16px\">\n            <button id=\"btn-output-pdf\" type=\"button\" class=\"btn btn-info\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\u5BFC\u51FAPDF\">\n                <span class=\"fa fa-file-pdf-o\"></span>\n            </button>\n        </div>\n\n        <!-- jQuery (necessary for Flat UI's JavaScript plugins) -->\n        <script src=\"/js/vendor/jquery.min.js\"></script>\n        <!-- Include all compiled plugins (below), or include individual files as needed -->\n        <script src=\"/js/vendor/video.js\"></script>\n        <script src=\"/js/flat-ui.min.js\"></script>\n        <script src=\"/js/jspdf.debug.js\"></script>\n        <script src=\"/js/html2canvas.js\"></script>\n\n        <script>\n            $(function () {\n\n                $('#btn-output-pdf').tooltip();\n\n                $('#btn-output-pdf').click(function(){\n\n                    html2canvas(document.getElementById(\"app\"), {\n                        onrendered: function(canvas) {\n\n                            var imgData = canvas.toDataURL('image/jpeg');\n\n                            var doc = new jsPDF(\"p\", \"mm\", \"a4\");\n                            //                               |\n                            // |\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014|                     \n                            // A0 841\xD71189                           \n                            // A1 594\xD7841                            \n                            // A2 420\xD7594                            \n                            // A3 297\xD7420                            \n                            // A4 210\xD7297                            \n                            // A5 148\xD7210                            \n                            // A6 105\xD7148                            \n                            // A7 74\xD7105                             \n                            // A8 52\xD774                              \n                            // A9 37\xD752                              \n                            // A10 26\xD737             \n                            //     |\u2014\u2014|\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014|\n                            //                                 |\u2014\u2014|\u2014\u2014|\n                            //                                 |     |      \n                            doc.addImage(imgData, 'JPEG', 0, 0,210,297);\n\n                            doc.save(document.title + '.pdf');\n                        }\n                    });\n\n                });\n\n            });\n        </script>\n\n    </body>\n</html>";
}