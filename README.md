# advicefromstanley
website that displays advice from a public API

URL to load the website --> https://curioustauseef.github.io/advicefromstanley/

Tutorials :
1. https://www.w3schools.com/bootstrap/bootstrap_grid_examples.asp
2. https://getbootstrap.com/docs/4.1/layout/grid/
3. https://stackoverflow.com/questions/33679875/whats-the-meaning-of-the-row-class-in-bootstrap-its-difference-from-containe
4. https://www.freecodecamp.org/news/the-best-bootstrap-examples/
5. https://github.com/public-apis/public-apis
6. http://forismatic.com/en/api/
7. https://github.com/public-apis/public-apis#personality
8. https://api.adviceslip.com/
9. https://dev.to/camerenisonfire/10-intriguing-public-rest-apis-for-your-next-project-2gbd

SOF
1. https://stackoverflow.com/questions/24032058/use-a-button-to-call-a-javascript-file-in-html?noredirect=1&lq=1
2. https://stackoverflow.com/questions/1947263/using-an-html-button-to-call-a-javascript-function
3. https://stackoverflow.com/questions/7789521/how-to-link-external-javascript-file-onclick-of-button
4. https://stackoverflow.com/questions/45555869/calling-a-function-from-a-html-button
5. 

GitHub API
1. https://codesnippet.io/github-api-tutorial/
2. https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project
3. https://towardsdatascience.com/github-user-insights-using-github-api-data-collection-and-analysis-5b7dca1ab214
4. https://stackoverflow.com/questions/1947263/using-an-html-button-to-call-a-javascript-function

Exploring Public APIs :
1. https://dev.to/camerenisonfire/10-intriguing-public-rest-apis-for-your-next-project-2gbd
2. https://github.com/APIs-guru/graphql-apis
3. https://github.com/serhii-londar/GithubAPI
4. https://github.com/tableau/rest-api-samples/tree/master/python
5. https://github.com/Marketo/REST-Sample-Code
6. https://github.com/artur-stepien/wargaming-papi
7. https://github.com/github/platform-samples
8. https://public-apis.io/taste-dive-api
9. https://public-apis.io/good-reads-api
10. https://public-apis.io/the-complete-node-js-course-by-moshfegh-hamedani

GET and POST
1. https://stackoverflow.com/questions/3477333/what-is-the-difference-between-post-and-get
2. https://stackoverflow.com/questions/133925/javascript-post-request-like-a-form-submit?rq=1
3. https://stackoverflow.com/questions/549/the-definitive-guide-to-form-based-website-authentication?rq=1
4. https://stackoverflow.com/questions/23323298/fill-a-form-and-submit-using-javascript-automatically-without-pressing-subm?noredirect=1&lq=1
5. https://www.tutorialrepublic.com/php-tutorial/php-get-and-post.php
6. https://www.edureka.co/blog/get-and-post-method/
7. https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data
8. https://github.com/mdn/learning-area/blob/master/html/forms/sending-form-data/post-method.html

Parsing JSON data
1. https://www.srijan.net/blog/how-parse-json-data-rest-api-using-simple-json-library
2. https://dzone.com/articles/how-to-parse-json-data-from-a-rest-api-using-simpl
3. https://github.com/curiousTauseef/SampleJavaCodes
4. https://programminghistorian.org/en/lessons/fetch-and-parse-data-with-openrefine#example-2-url-queries-and-parsing-json
5. https://medium.com/@timothyrobards/understanding-json-in-javascript-5098876d0915

JSON versus Javascript arrays and objects
1. https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
2. https://www.taniarascia.com/how-to-use-json-data-with-php-or-javascript/
3. https://www.datacamp.com/community/tutorials/json-data-python
4. https://stackoverflow.com/questions/33169404/whats-the-difference-between-python-dictionary-and-json
5. https://datacarpentry.org/python-socialsci/07-json/index.html
6. https://jsonformatter.curiousconcept.com/#
7. https://stackoverflow.com/questions/47011072/using-a-public-json-api-and-displaying-it-as-html
8. https://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses?rq=1
9. https://developers.facebook.com/docs/graph-api/using-graph-api/#paging
10. https://stackoverflow.com/questions/57768954/how-to-efficiently-paginate-through-youtube-json-response
11. https://stackoverflow.com/questions/18804904/retrieve-all-videos-from-youtube-playlist-using-youtube-v3-api
12. https://developers.google.com/youtube/v3/docs/search/list#
13. https://it.knightnet.org.uk/kb/node-js/looping/

Notes

    * JSON is a data format (a string), Python dictionary is a data structure (in-memory object).If you need to exchange data between different (perhaps even  non-Python) processes then you could use JSON format to serialize your Python dictionary.

    * Text representation (a string) of an object is not the object itself (even string objects and their text representations are different things e.g., "\n" is a single newline character but obviously its text representation is several characters).

    * If you want to display a JSON content as visible HTML, you have to format it using HTML tags.

    * Once unserialized, "results from JSON responses" are plain ordinary python objects (usually dicts). And you append them to a list the same way you'd do for anything else.

    * In javascript, every object has a bunch of built-in key-value pairs that have meta-information. When you loop through all the key-value pairs for an object you're looping through them too. hasOwnPropery() filters these out. Each object in javascript (actually a key-value pair) has a property called __proto__ or prototype. This property has a reference to its parent object. An object automatically inherits property from its parent. This is the reason of using hasOwnProperty, which signifies that we're interested in objects own property and not its parent ones.

    * It's best to serve a WSGI app via a server like gunicorn or waitress, which will handle your concurrency needs, but almost no matter what you do for concurrency your global queue in memory will not work the way you want it to. You need to use an external memory store like memcached, redis, etc. Static data is one thing, but mutable state should never be shared between web app processes. That's contrary to Python web server idioms and the typical execution model of Python web apps.
    
    * Use Redis if you want fast CRUD access to an in-memory store. – Martin Konecny Jun 29 '14 at 6:04


ECMAScript Info
1. https://it.knightnet.org.uk/kb/node-js/javascript-node-versions/

Multithreaded Web Apps
1. https://stackoverflow.com/questions/24473377/enable-multithreading-of-my-web-app-using-python-bottle-framework/24473886#24473886
2. https://docs.celeryproject.org/en/latest/getting-started/first-steps-with-celery.html

Payment APIs
1. https://www.braintreepayments.com/be
2. https://stackoverflow.com/questions/25501009/transfer-fund-from-a-merchant-account-to-a-credit-debit-card-holder-bank-probab/25528440#25528440
3. https://stackoverflow.com/questions/46488503/paypal-rest-api-payment-or-braintree-payments?rq=1

Understanding JS, JSON, GET, POST, XMLHttpRequest
1. https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
2. https://www.digitalocean.com/community/tutorials/introduction-to-the-dom
3. https://stackoverflow.com/questions/47011072/using-a-public-json-api-and-displaying-it-as-html

Quotes from Forismatic
1. Using Python - https://bitbucket.org/abasalyha/pyforismatic/src/default/forismatic/manager.py
2. https://codepen.io/dting/pen/PqrZgb
3. https://stackoverflow.com/questions/39197725/api-forismatic-json-random-quote-machine
4. https://stackoverflow.com/questions/38910944/is-there-a-way-to-disable-ssl-tls-for-github-pages
5. https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site
6. https://stackoverflow.com/questions/47939548/github-pages-website-is-on-https-but-rest-api-is-on-http
7. https://stackoverflow.com/questions/40827124/github-io-page-does-not-load-css
8. https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/securing-your-github-pages-site-with-https
9. https://github.com/gelmutdm/forismatic-client

OAuth 2.0
1. https://developers.google.com/identity/protocols/OAuth2UserAgent
2. http://www.davismol.net/2016/02/01/google-api-set-a-javascript-origin-to-solve-the-redirect_uri_mismatch-error/
3. https://github.com/googleapis/google-api-java-client-services/tree/master/clients/google-api-services-youtube/v3/1.30.1/resources
4. https://stackoverflow.com/questions/22595174/google-oauth-the-redirect-uri-in-the-request-did-not-match-a-registered-redirec
5. https://stackoverflow.com/questions/31261604/youtube-data-api-how-to-avoid-google-oauth-redirect-url-authorization?rq=1
6. https://github.com/GoogleCloudPlatform/training-data-analyst
7. https://github.com/googleapis/google-api-php-client
8. https://developers.google.com/youtube/v3/guides/auth/client-side-web-apps
9. https://stackoverflow.com/questions/16850350/got-origin-mismatch-error-in-google-share-api
10. https://developers.google.com/youtube/v3/docs
11. https://github.com/sameeri/Code-WebApisAccess/wiki/Getting-ready-to-work-with-Google-Apis
12. https://github.com/sameeri/Code-WebApisAccess/wiki/Loading-the-YouTube-Data-API
13. jsfiddle.net/sameeri/qj6hp6b8/
14. callback argument for gapi - https://stackoverflow.com/questions/24586072/gapi-client-youtube-is-undefined
15. https://developers.google.com/youtube/v3/docs/search/list
16. https://stackoverflow.com/questions/16850350/got-origin-mismatch-error-in-google-share-api
17. https://artisansweb.net/use-youtube-api-upload-video-youtube-channel/
18. https://developers.google.com/youtube/v3/code_samples/code_snippets
19. https://stackoverflow.com/questions/18953499/youtube-api-to-fetch-all-videos-on-a-channel?rq=1

Using Google Sheets App to send message from static page to google email
1. https://www.youtube.com/watch?v=GMXFMVg5E4U
2. https://blog.h-educate.com/how-to-send-an-email-in-a-static-html-page-using-google-sheets-scripts/
3. https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server/blob/master/README.md
4. https://purecss.io/start/
5. https://stackoverflow.com/questions/23111233/sending-email-from-static-html-page
6. https://dev.to/thisisabdus/securely-sending-emails-from-static-sites-with-a-3rd-party-api-
7. https://dan.lousqui.fr/build-an-email-sender-form-for-a-static-website.html
8. https://parseplatform.org/
9. https://discourse.gohugo.io/t/build-a-rest-api-to-send-emails-from-a-contact-form/13000
10. https://html5boilerplate.com/
