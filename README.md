#**COMP422SPA is a Social Polling App Project**

Description 

Purpose

Platform: 
- apache cordova install documentation:
  - https://cordova.apache.org/docs/en/latest/guide/cli/index.html
  - troubleshooting: 
    - you may have an error with your paths. 
    - you can fix this by going to windows -> systems -> enviornment variables -> and adding: 
      - ANDROID _HOME and the value should be your version of C:\Users\Chlece\AppData\Local\Android\Sdk
      - JAVA_HOME and the value should be your version of C:\Program Files\Java\jre1.8.0_144\bin
      - edit the Path variable and make sure it has C:\Users\Chlece\AppData\Roaming\npm and C:\Program Files\Java\jre1.8.0_144\bin on the end. 
- Android
  - build errors: 
    - change line 202 in emulator.js to: var num = target.match(/\d+/)[0]; the file path is your projects name and then platforms\android\cordova\lib\emulator.js 
    - SDK updates: 
      - go into android studio
      - go to tools -> updates -> sdk manager and update the plateforms
- Iphone (untested)

Librarys (possible):
- https://d3js.org/ (graphs)
- https://socket.io/ (communitcation) 
- http://www.chartjs.org/ (charts)
- https://slideout.js.org/ (slide navigation of app)
- https://github.com/thebird/swipe/ (always swiping on the app)

Plugins (possible): 
- https://www.npmjs.com/package/cordova-plugin-dialogs (so that user can get notifications)
- https://www.npmjs.com/package/cordova-plugin-camera (so that the user can take pictures and send those as a poll)
- https://www.npmjs.com/package/cordova-plugin-facebookconnect-orlando (so that user can post results to facebook)
- https://www.npmjs.com/package/cordova-plugin-googlemaps-master (so that poll demographichs can include location) 

Works Cited 

