module.exports = function (string, search) {
    var reg = "(" + search + ")(?![^<]*>|[^<>]*</)";
    var regex = new RegExp(reg, "i");
    if (string.match(regex)) {
        // Otherwise, get to highlighting
        var matchStartPosition = string.match(regex).index;
        var matchEndPosition = matchStartPosition + string.match(regex)[0].toString().length;
        var originalTextFoundByRegex = string.substring(matchStartPosition, matchEndPosition);
        return string.replace(regex, `<span class="highlight">${originalTextFoundByRegex}</span>`);
    }

    return string;
}