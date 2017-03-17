export function render2Html(uid, render){

    return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>${uid}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/font-awesome.min.css">
        <!-- Loading Bootstrap -->
        <link href="/css/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <!-- Loading Flat UI -->
        <link href="/css/flat-ui.min.css" rel="stylesheet">

        <link rel="shortcut icon" href="/img/favicon.ico">

        <!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
        <!--[if lt IE 9]>
        <script src="/js/vendor/html5shiv.js"></script>
        <script src="/js/vendor/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>

        <div id="app" class="container" style="background-color: white">${render}</div>

        <div style="position: fixed; right: 16px; bottom: 16px">
            <button id="btn-output-pdf" type="button" class="btn btn-info" data-toggle="tooltip" data-placement="top" title="导出PDF">
                <span class="fa fa-file-pdf-o"></span>
            </button>
        </div>

        <!-- jQuery (necessary for Flat UI's JavaScript plugins) -->
        <script src="/js/vendor/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="/js/vendor/video.js"></script>
        <script src="/js/flat-ui.min.js"></script>
        <script src="/js/jspdf.debug.js"></script>
        <script src="/js/html2canvas.js"></script>

        <script>
            $(function () {

                $('#btn-output-pdf').tooltip();

                $('#btn-output-pdf').click(function(){

                    html2canvas(document.getElementById("app"), {
                        onrendered: function(canvas) {

                            var imgData = canvas.toDataURL('image/jpeg');

                            var doc = new jsPDF("p", "mm", "a4");
                            //                               |
                            // |—————————————————————————————|                     
                            // A0 841×1189                           
                            // A1 594×841                            
                            // A2 420×594                            
                            // A3 297×420                            
                            // A4 210×297                            
                            // A5 148×210                            
                            // A6 105×148                            
                            // A7 74×105                             
                            // A8 52×74                              
                            // A9 37×52                              
                            // A10 26×37             
                            //     |——|———————————————————————————|
                            //                                 |——|——|
                            //                                 |     |      
                            doc.addImage(imgData, 'JPEG', 0, 0,210,297);

                            doc.save(document.title + '.pdf');
                        }
                    });

                });

            });
        </script>

    </body>
</html>`;

}