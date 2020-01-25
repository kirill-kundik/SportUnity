# Test application for Int20 hackathon.
Powered by React Native & Flashback team *👽*

## Description

Music Akinator application for Int20 hackathon.

The application has a game-like experience in which game lasts for 5 rounds.
In each round uses thinks of a song & enters it's lyrics. Then the app tries to guess that song & provides Title, Name & In-app youtube preview.
Then user says if it was guessed correctly. If yes - the app earns a point, otherwise - a user.
After the 5th round, the app shows the result & resets it's state.

In case an app can't find the song - the "Not Found 😢" message is showed for a couple of seconds,
but no side actually gains the point & round is restarted.
  
Video DEMO: https://www.youtube.com/watch?v=euXdtMLb2H8

## Technical info 
Uses https://api.audd.io/findLyrics api to find songs by fragments of their lyrics.
Parsed name & title then used to find beautiful cover photo using https://api.deezer.com/search api.
First API also provides youtube URL which is then previewed in the app (fullscreen mode only for Android). 

## Compiled apk

Test APK is included in the root projected: 
*Int20MusicFlashback.apk*
 
## Launch instructions for debug mode
Recommended prerequisites:
- Mac OS.
- xCode.

iOS:

You have to have xCode & CocoaPods installed on your Mac.
- yarn install
- cd ios
- pod install
- cd ..
- yarn ios

Android:

You have to have Android SDK & Java installed on your PC.
- yarn install
- yarn android

More detailed instructions on how to launch React Native project can be found here: https://facebook.github.io/react-native/docs/getting-started 
