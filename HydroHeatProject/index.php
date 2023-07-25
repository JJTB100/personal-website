<!DOCTYPE html>
<html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Exo:wght@900&display=swap" rel="stylesheet">
        <title>HydroHeat</title>
        <link rel="stylesheet" href="menuStyle.css">
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <script async defer src="menuScript.js"></script>
        <script
            src="https://code.jquery.com/jquery-3.6.3.min.js"
            integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
            crossorigin="anonymous">
        </script>
    </head>
        <body>
            
        <section id="menu-section">
            <a href="/" target="_blank">
             
                <div id="menu">
                    <div id="menu-items">
                        <a href="" class="menu-item"><span id="main-name">Hydro</span><span id="main-name-heat">Heat</span></a>
                        <a href="#controls-link" class="menu-item">Controls</a>
                        <a href="about.html" class="menu-item">About</a>
                        <a href="funhovering.html" class="menu-item">Gallery</a>
                        <a href="https://github.com/JJTB100/HydroHeat" class="menu-item">Code</a>
                    </div>
                    <div id="menu-background-image"></div>
                    <div id="menu-background-pattern"></div>
                
                </div>
            </section>

            <div id="controls-link"></div>
            <section class="hidden">
                <div id="controls">
                    <a href="#top" type="html"><img src="media/bars-solid.svg" class="home"></img></a>

                    <div id="controls-title">Dashboard</div>
                    <div class="temp-chart-container">
                        <div id="temp-chart"></div>
                    </div>
                    <div id="curve_chart"></div>
                </div>
            </section>
            <?php
            if (empty($_POST)){
                return;

            }
            $file = fopen("/home/hydropi/HydroHeat/webfiles/temps.json", "w") or die ("Die Now.");
            //temperature=12345,54321
            $jsonData = '{"temperature":'.substr($_POST["temperature"], 0, 5).',"CPU":'.substr($_POST["temperature"],6,5).'}';
            fwrite($file, $jsonData);
            fclose($file);
            ?>
            
        </body>
        
</html>
