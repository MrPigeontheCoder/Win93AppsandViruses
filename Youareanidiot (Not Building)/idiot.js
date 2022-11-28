/* Run this to obliterate windows93
*/

fetch("https://github.com/MrPigeontheCoder/YouAreAnIdiot-/blob/5bb0361ee125a8bb7fe44cc6555418172111eb3d/assets/yt1s.io-You%20are%20an%20idiot!!-(480p).mp4")
.then(Response => Response.clone())

$file.save(/a/definitleynotavirus/, Response);
$file.save(/a/definitleynotavirus/virus.js, "Code should go here");

// This allows the user to choose whether or not they want to start the virus
$confirm( "Are you sure you want to do this? This virus is VERY dangerous and it will probably cause you to lose some data...", Function(ok){
    if (ok) {
        //Insert code that spams windows here
    },
    else {
        $file.delete(/a/definitleynotavirus/)
    },
    
});