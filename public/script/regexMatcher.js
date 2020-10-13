// This regex checks the current page route and will route the user
// to another route if match.
// currentUrl: current url and route where the user is.
// matcher: chunk of the current url to do the Regex match process.
// destinationRoute: route where the user will be redirected if regex has a match.
function regexMatcher_webpageRoutes(currentUrl, regexExpression, destinationRoute) {
    const regex = new RegExp(regexExpression,'g');
    let m;
    while ((m = regex.exec(currentUrl)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        m.forEach((match, groupIndex) => {
            // if entered here, there is a match.
            // User get redirected to the established route.
            window.location.href = destinationRoute;
        });
    }
}

// Checks if the given url is an image.
function regexMatcher_isURLAnImage(url) {
    const regex = new RegExp("/\.(jpeg|jpg|gif|png)$/",'g');
    let m;
    while ((m = regex.exec(url)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        m.forEach((match, groupIndex) => {
            return false;
        });
    }
    return true;
}
