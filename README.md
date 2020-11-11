## News

Dale:

> Betting lines available from http://localhost:3000/api/lines/nfl. Betting
panel must use this API *not* Lines collection. Lines collection is for
use by the API only for future caching functionality which will be needed
for debugging and any simulation we do.

> Taking the lead from our homework, I did not check in node_modules (it's
so big). You will have to do `npm install` to get started. Although we could
check it in too, I just didn't this time.

> Database schema needs updating, as I am making changes. Will update soon.

> Database is called `jerry`. Once you have mongo running, try typing
`npm seed` which should seed some scores to the Scores collection. (Games
collection has been re-purposed as Scores collection.)

> I did not have much luck trying to find a free and easy-to-use API so I am
scraping a couple different web sites to harvest betting lines and scores. Can
be brittle due to web site changes out of our control but hoping things remain 
stable enough to get us by.

> Start the app with `npm start` or `node app.js`.

> Feel free to start checking your stuff in and banging away on this thing!

<a href="doc/TechnicalReferenceSportsWagering.md">Tech Reference</a>
