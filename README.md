# VSI-Bench.github.io
To render the webpage on your local machine, please:
- clone the github
- on the root dir of the repo, run ``python -m http.server 8000``
- open ``127.0.0.1:8000`` on your browser


## Video Teaser

A tentative list of videos we are using:

* [obj. ct.] ID: 0
* [obj. ct.] ID: 3 
* [obj. ct.] ID: 18  
* [rel. dir.] ID: 1129 
* [rel. dir.] ID: 1236 
* [rel. dist.] ID: 1462 
* [abs. dist.] ID: 879 
* [appr. ord.] ID: 2871 

To generate a representative thumbnail img for each video, please run ``ffmpeg -i {id}.mp4 -ss 00:00:15.000 -vframes 1 {id}-thumbnail.jpg``