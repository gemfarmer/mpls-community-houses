# Mpls Community Houses

This website was built with the intention of connecting people to the community houses in Minneapolis.

## Contribute
Fork the repo and start making pull-requests!

#### Things that need to be done! (From Highest to lowest priority)
* Replace House Profile with Google Form
* Embed Form as "Housing Survey"
* Link Survey Data to MongoHQ
* Display Survey Data as table and as directory
* If address data is available, communicate with Google API to draw new pin on the map
* Within Housing add 'Avalable rooms/spots'
* Add section to Houses page which has listings for available spots, people looking for spots
* Create form to get info about people looking for spots
* Create Dropdown tab on housing for (houses, listings, free agents)
* Add 'Organizations'/'Meet-ups'
* Add 'News' Link
* Work on image upload for housing profiles
* Add home real estate listings (preferably pull from API)
* 

## Architecture

Scaffolding: [Yeoman Angular FullStack Generator](https://www.npmjs.org/package/generator-angular-fullstack)
To make additions to the architecture, it would be advisable to use their cli generation tools. They are consistent and helpful

### License:
COPYFARLEFT PUBLIC LICENSE. This is a form of [Peer Production License](http://p2pfoundation.net/Peer_Production_License)

### Production:

### Dev:
Front-end: [http://localhost:9000](http://localhost:9000)


## Deployment && Hosting
For now I will have full control over the deployment process
 `grunt build`
 `grunt buildcontrol:heroku` (the site is hosted via heroku and uses the mongohq add-on)

## Dev Environment Setup

### Backend

1. Install XCode and/or the command line tools: [https://developer.apple.com/xcode/]()
2. Install homebrew: http://brew.sh/
3. Install node.js: [with nvm](https://github.com/creationix/nvm) or [without](http://nodejs.org/)
3.5. Install Grunt: `npm install -g grunt-cli`
4. Install MongoDB and Mongoose:
5. Install npm
6. Install bower: `npm install -g bower`
7. Clone the project `git clone https://github.com/gemfarmer/mpls-community-houses.git`
8. `cd mpls-community-houses && npm install`
9. `bower install`
10. Open up new terminal window, then, in same directory `sudo mongod` and enter credentials
11. Open an additional window and `mongo` to set up MongoDB locally
12. `grunt serve` to start server

## Client


- Dependencies: Bower
- Tasks: Grunt
- Model Layer:
- Routing: angular-ui-router


