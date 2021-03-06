// This regex checks the current page route and will route the user
// to another route if match.
// currentUrl: current url and route where the user is.
// matcher: chunk of the current url to do the Regex match process.
// destinationRoute: route where the user will be redirected if regex has a match.
function regexMatcher_webpageRoutes(currentUrl, regexExpression, destinationRoute) {
    const regex = new RegExp(regexExpression, 'g');
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
    try {
        var urlRegex = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
        var url = url.match(urlRegex)[1];
        return true;
    } catch (error) {
        return false;
    }
}

// Checks if the input_string contains an URL.
function regexMatcher_checkIfHasURL(input_string) {
    try {
        var urlRegex = /(https?:\/\/[^ ]*)/;
        var url = input_string.match(urlRegex)[1];
        return true;
    } catch (error) {
        return false;
    }
}

// Receives a string which has a image URL inside the plaintext then returns
// same string but adds <img> to the image URL.
// Example: Hello i.imgur.com/image word -> Returns: Hello <img src="i.imgur.com/image" /> word.
function regexMatcher_addImgTagToPlainTextString(plain_text){
    // Source: https://stackoverflow.com/questions/38349684/javascript-plugin-for-finding-images-links-in-plain-text-and-converting-them-to
    const regexp = /\b(https?:\/\/\S+(?:png|jpe?g|gif)\S*)\b/ig;
    const replace = `
    <a target='_black' href='$1'>
        <img src='$1'>
    </a>
    `;
    return plain_text.replace(regexp, replace);
}
